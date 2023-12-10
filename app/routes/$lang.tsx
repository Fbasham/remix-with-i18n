import { type LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function Root() {
  return <Outlet />;
}
