import { strapi } from "./httpService";

async function getSettings({ lng = "ru" }: { lng: string }) {
  try {
    const result = await strapi.get("/setting", {
      params: {
        locale: lng,
        populate: ["logo", "placeholder", "logo_footer"],
      },
    });
    return result.data.data;
  } catch (err) {
    return { error: true, msg: err };
  }
}

export { getSettings };
