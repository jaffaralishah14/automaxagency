import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="utility-page" style={{ display: "grid", placeItems: "center", padding: 24 }}>
      <div className="utility-card">
        <h1>404</h1>
        <p className="eyebrow">Page not found</p>
        <p>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="utility-links">
          <Link
            to="/"
            className="button button-primary"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="utility-page" style={{ display: "grid", placeItems: "center", padding: 24 }}>
      <div className="utility-card">
        <h1>
          This page didn't load
        </h1>
        <p>
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="utility-links">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="button button-primary"
          >
            Try again
          </button>
          <a
            href="/"
            className="button button-ghost"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0A0A0F" },
      { title: "Automax — Web Design, SEO, Paid Ads & Automations" },
      { name: "description", content: "Automax builds modern websites, brings you customers, and automates the rest." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", href: "/assets/jost-600.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
