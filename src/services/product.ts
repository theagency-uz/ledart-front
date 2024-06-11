import { strapi } from './httpService';

async function getProducts({ lng = "ru", categoryId, types, brands, power, selectedVariation = "", limit = 6, page = 1 } = { lng: "ru" }) {

  try {
    let filters = {

    };

    if (categoryId) {
      filters.category = { id: categoryId };

    }

    if (brands?.length > 0) {
      filters.brand = { id: { '$in': brands } };
    }

    if (selectedVariation) {
      if (selectedVariation === 'complect') {
        filters.type_variations = {
          type: {
            name: {
              '$eq': 'Комплектующие'
            }
          }
        };

      } else {
        filters.type_variations = {
          type: {
            name: {
              '$ne': 'Комплектующие'
            }
          }
        };
      }
    }

    if (types?.length > 0) {
      filters['$and'] = [
        ...types.map(t => {
          return {
            type_variations:
              { id: t }
          };
        })
      ];
    }
    if (power) {
      filters.power = {
        '$gte': power[0],
        '$lte': power[1]
      };
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
          pageSize: limit
        }
        // sort: ['createdAt:desc'],
      }
    });
    return result.data;

  } catch (err) {
    console.log("err: ", err.response);
    return { error: true, msg: err };
  }
}

async function getProduct({ lng = "ru", slug } = { lng: "ru" }) {
  try {
    const result = await strapi.get("/products/slug/" + slug, {
      params: {
        locale: lng,
        populate: {
          previewImage: true,
          images: true,
          category: true,
          brand: true,
          type_variations: true,
          characteristics: true,
          tech_characteristics: true,
          instructions: {
            populate: {
              file: true
            }
          },
        },
        // sort: ['createdAt:desc'],
      }
    });
    return result.data.data;

  } catch (err) {
    console.log("err: ", err.response);
    return { error: true, msg: err };
  }
}


export {
  getProducts,
  getProduct
};