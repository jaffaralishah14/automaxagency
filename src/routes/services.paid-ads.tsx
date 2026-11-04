import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";
import { services } from "@/lib/site-content";

const service = services["paid-ads"];

export const Route = createFileRoute("/services/paid-ads")({
  head: () => serviceHead(service),
  component: Page,
});

function Page() {
  return <ServicePage service={service} />;
}
