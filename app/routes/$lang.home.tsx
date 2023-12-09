import { useRouteLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";

export default function Index() {
  let data = useRouteLoaderData("root") as { locale: string };

  const { t } = useTranslation();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <p>{t("greeting")}</p>
      <a href={`/${data.locale === "fr" ? "en" : "fr"}/home`}>
        {data.locale === "fr" ? "en" : "en"}
      </a>
    </div>
  );
}
