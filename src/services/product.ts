import { CategoryInterface } from "@/types/interfaces";
import { strapi } from "./httpService";

async function getProducts({
  lng = "ru",
  category,
  brands,
  type,
  viewAll,
  limit = 9999,
  page = 1,
}: {
  lng: string;
  viewAll?: string;
  category?: CategoryInterface;
  type?: string;
  brands?: number[];
  limit?: number;
  page?: number;
}) {
  try {
    let filters: any = {};
    console.log({ viewAll, category, type, brands });

    if (viewAll && viewAll === "aksiya") {
      filters.oldPrice = {
        $notNull: true,
      };
    } else if (viewAll && viewAll === "predzakaz") {
      filters.predzakaz = {
        $eq: true,
      };
    }

    if (category) {
      filters.category = { id: category.id };
    }

    if (type) {
      filters.type = { id: { $in: type } };
    }

    if (brands && brands.length > 0) {
      filters.brend = { id: { $in: brands } };
    }

    const result = await strapi.get("/products", {
      params: {
        locale: lng,
        filters: filters,
        populate: {
          previewImage: true,
        },
        pagination: {
          page: page,
          pageSize: limit,
        },
        // sort: ['createdAt:desc'],
      },
    });
    return result.data;
  } catch (err) {
    return { error: true, msg: err };
  }
}

async function getProduct({ lng = "ru", slug }: { lng: string; slug: string }) {
  try {
    const result = await strapi.get("/products/slug/" + slug, {
      params: {
        locale: lng,
        populate: ["image"],
        // sort: ['createdAt:desc'],
      },
    });
    return result.data.data;
  } catch (err) {
    return { error: true, msg: err };
  }
}

export { getProducts, getProduct };
