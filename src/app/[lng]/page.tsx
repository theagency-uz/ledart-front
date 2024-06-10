import Card from "@/components/common/card/card";
import { useTranslation } from "../i18n";

interface PropsInterface {
  params: { lng: string };
}

export default async function Home({ params: { lng } }: PropsInterface) {
  return <div>home</div>;
}
