import {
  json,
  type LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useTranslation } from "react-i18next";

import i18next from "~/i18next.server";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = ({ data }) => {
  return [
    {
      title: (data as { title: string }).title as string,
      name: "description",
      content: "Welcome to Remix!",
    },
  ];
};

export let loader: LoaderFunction = async ({ params }) => {
  let locale = params.lang || "en";

  let t = await i18next.getFixedT(locale, "common");
  let title = t("greeting");
  return json({ title, locale });
};

export let handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "common",
};

export default function Root() {
  // Get the locale from the loader
  let { locale } = useLoaderData<typeof loader>();

  const { i18n } = useTranslation("common");

  if (locale !== i18n.language) i18n.changeLanguage(locale);

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  // useChangeLanguage(locale);

  return (
    <html lang={locale}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
