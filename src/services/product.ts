import { strapi } from "./httpService";

async function getProducts(
  {
    lng = "ru",
    categoryId,
    types,
    brands,
    limit = 9999,
    page = 1,
  }: {
    lng: string,
    categoryId: number,
    types?: number,
    brands?: number,
    limit?: number,
    page?: number,
  }
) {
  try {
    let filters: any = {};

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

async function getProduct({ lng = "ru", slug }: { lng: string, slug: string }) {
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
