import { strapi } from "./httpService";

async function getFaq({ lng = "ru" }: { lng: string }) {
  try {
    const result = await strapi.get("/faqs", {
      params: {
        locale: lng,
        pagination: {
          page: 1,
          pageSize: 9999,
        },
        // sort: ['createdAt:desc'],
      },
    });
    return result.data.data;
  } catch (err) {}
}

export { getFaq };
