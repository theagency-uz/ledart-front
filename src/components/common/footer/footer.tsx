import LangSwitcher from "../langSwitcher";

interface PropsInterface {
  lng: string;
}

export default function Footer({ lng }: PropsInterface) {
  return (
    <div>
      <LangSwitcher lng={lng} backColor="#222222" />
    </div>
  );
}
