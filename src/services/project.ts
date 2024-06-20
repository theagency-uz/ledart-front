import { strapi } from "./httpService";

async function getProjects({ lng = "ru" } = { lng: "ru" }) {
  try {
    const result = await strapi.get("/project", {
      params: {
        locale: lng,
        populate: {
          image: true,
          projects: {
            populate: ["image"],
          },
        },
      },
    });
    return result.data.data;
  } catch (err) {
    return { error: true, msg: err };
  }
}

export { getProjects };
