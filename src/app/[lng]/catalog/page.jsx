import { getCategories } from "@/services/category";
import { redirect } from "next/navigation";

export default async function CatalogRoot({ params: { lng } }) {
  const categories = await getCategories({ lng });

  if (categories.length > 0) {
    return redirect(`/${lng}/catalog/${categories[0].attributes.slug}`);
  } else {
    return redirect(`/${lng}`);
  }
}
