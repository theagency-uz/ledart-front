import { strapi } from "./httpService";

async function getProjects({ lng = "ru" } = { lng: "ru" }) {
  try {
    const result = await strapi.get("/portfolio-projects", {
      params: {
        locale: lng,
        populate: ["image", "characteristics"],
      },
    });
    return result.data.data;
  } catch (err) {
    return { error: true, msg: err };
  }
}

export { getProjects };
