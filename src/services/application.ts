import { strapi } from './httpService';

async function postApplication({ name, phone, email, request, url, lng }) {
  try {
    const result = await strapi.post("/applications", {
      data: {
        name: name,
        phone: phone,
        email: email,
        request: request,
        information: `Язык: ${lng}, страница заявки: ${url}`
      }
    }, {
      headers: {

      }
    });
    return result.data.data;

  } catch (err) {

    console.log("err: ", err.response);
    return { error: true, msg: err };
  }
}


export {
  postApplication
};