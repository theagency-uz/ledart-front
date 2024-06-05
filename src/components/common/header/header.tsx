import LangSwitcher from "../langSwitcher";

interface PropsInterface {
  lng: string;
}

export default function Header({ lng }: PropsInterface) {
  return (
    <div>
      header
      <br />
      <LangSwitcher lng={lng} />
    </div>
  );
}
