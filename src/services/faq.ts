import { strapi } from './httpService';

async function getFaq({ lng = "ru", limit = 10, page = 1 } = { lng: "ru", limit: 10, page: 1 }) {
  try {
    const result = await strapi.get("/faqs", {
      params: {
        locale: lng,
        pagination: {
          page: page,
          pageSize: limit
        }
        // sort: ['createdAt:desc'],
      }
    });
    return result.data.data;

  } catch (err) {
    console.log("err: ", err.response);
  }
}


export {
  getFaq
};

