import { strapi } from './httpService';

async function getBrands({ lng = "ru" }: { lng: string }) {
  try {
    const result = await strapi.get("/brands", {
      params: {
        locale: lng,
        populate: ['image'],
      }
    });
    return result.data.data;

  } catch (err) {
    return { error: true, msg: err };
  }
}


async function getBrand({ lng = "ru", id }: { lng: string, id: number }) {
  try {
    const result = await strapi.get("/brands/" + id, {
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
  getBrands,
  getBrand
};