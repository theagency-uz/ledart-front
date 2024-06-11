import { strapi } from './httpService';

async function getSettings({ lng = "ru" } = { lng: "ru" }) {
  try {
    const result = await strapi.get("/setting", {
      params: {
        locale: lng,
        populate: ['logo', 'placeholder', 'logo_footer']
      }
    });
    return result.data.data;

  } catch (err) {
    console.log("err: ", err.response);
    return { error: true, msg: err };
  }
}

export {
  getSettings
};