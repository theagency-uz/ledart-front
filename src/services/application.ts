import { strapi } from './httpService';

async function postApplication({ name, phone, url, lng }: { name: string, phone: string, url: string, lng: string }) {
  try {
    const result = await strapi.post("/applications", {
      data: {
        name: name,
        phone: phone,
        information: `Язык: ${lng}, страница заявки: ${url}`
      }
    }, {
      headers: {

      }
    });
    return result.data.data;

  } catch (err) {

    return { error: true, msg: err };
  }
}


export {
  postApplication
};