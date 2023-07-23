import { cssBundleHref } from "@remix-run/css-bundle";
import stylesheet from "~/tailwind.css";
import styles from "./index.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export const links = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NavBar />
        <div className="container mx-auto">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
        <Footer />
      </body>
    </html>
  );
}
