import { strapi } from './httpService';

async function getArticles({ lng = "ru", limit = 10, page = 1 } = { lng: "ru", limit: 10, page: 1 }) {
  try {
    const result = await strapi.get("/articles", {
      params: {
        locale: lng,
        populate: ['image'],
        pagination: {
          page: page,
          pageSize: limit
        },
        sort: ['publishDate:desc'],
      }
    });
    return result.data;

  } catch (err) {
    console.log("err: ", err.response);
  }
}

async function getArticle({ lng = "ru", slug } = { lng: "ru" }) {
  try {
    const result = await strapi.get("/articles/slug/" + slug, {
      params: {
        locale: lng,
        populate: ['image'],
      }
    });
    return result.data.data;

  } catch (err) {
    console.log("err: ", err.response);
  }
}


export {
  getArticles,
  getArticle,
};