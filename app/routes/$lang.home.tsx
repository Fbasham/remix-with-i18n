import { useRouteLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";

export default function Index() {
  let data = useRouteLoaderData("root") as { locale: string };

  const { t } = useTranslation();

  return (
    <div>
      <p>{t("greeting")}</p>
      <a href={`/${data.locale === "fr" ? "en" : "fr"}/home`}>
        {data.locale === "fr" ? "en" : "fr"}
      </a>
    </div>
  );
}
