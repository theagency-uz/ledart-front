import { redirect } from "next/navigation";

export default async function ProductRoot({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return redirect(`/${lng}`);
}
