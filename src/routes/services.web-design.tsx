import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";
import { services } from "@/lib/site-content";

const service = services["web-design"];

export const Route = createFileRoute("/services/web-design")({
  head: () => serviceHead(service),
  component: Page,
});

function Page() {
  return <ServicePage service={service} />;
}
