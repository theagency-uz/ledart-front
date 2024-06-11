const strapiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://192.168.0.250:1337/api";
const strapiImageUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "http://192.168.0.250:1337";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://192.168.0.250:3000";
const yandexMapsApiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY || "";


export { strapiImageUrl, strapiUrl, yandexMapsApiKey, baseUrl };
