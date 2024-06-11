import { strapiUrl } from '@/utils/endpoints';
import { strapi } from './httpService';

async function getCategories({ lng = "ru" }: { lng: string }) {
  try {
    const result = await strapi.get("/categories", {
      params: {
        locale: lng,
        populate: ['image'],
        // sort: ['createdAt:desc'],
      }
    });

    return result.data.data

  } catch (err) {
    return { error: true, msg: err };
  }
}

async function getTypes({ lng = "ru", categoryId }: { lng: string, categoryId: number }) {
  try {
    const result = await strapi.get("/types", {
      params: {
        locale: lng,
        populate: {
          categories: true,
          type_variations: true
        },
        filters: {
          categories: { id: { "$in": categoryId } }
        }
        // sort: ['createdAt:desc'],
      }
    });
    return result.data.data;

  } catch (err) {
    return { error: true, msg: err };
  }
}

async function getCategory({ lng = "ru", slug }: { lng: string, slug: string }) {
  try {
    const result = await strapi.get("/categories/slug/" + slug, {
      params: {
        locale: lng,
        populate: {
          image: true,
          subcategory: {
            populate:
              { subcategory2: true }
          },
        }
      }
    });
    return result.data.data;

  } catch (err) {
  }
}

export {
  getCategories,
  getCategory,
  getTypes
};