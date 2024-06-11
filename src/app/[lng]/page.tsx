import Hero from "@/components/home/hero/hero";

import classes from "./styles.module.css"

interface PropsInterface {
  params: { lng: string };
}

export default async function Home({ params: { lng } }: PropsInterface) {

  return (
    <main className={classes.home}>
      <Hero lng={lng} />
    </main>
  );
}
