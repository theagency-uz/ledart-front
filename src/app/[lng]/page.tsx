import { useTranslation } from "../i18n"

interface PropsInterface {
    params: { lng: string }
}

export default async function Home({ params: { lng } }: PropsInterface) {
    const { t } = await useTranslation(lng)
    return (
        <div>{t("Поставляем метизную продукцию в Узбекистане")}</div>
    )
}
