import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";
import { services } from "@/lib/site-content";

const service = services["seo"];

export const Route = createFileRoute("/services/seo")({
  head: () => serviceHead(service),
  component: Page,
});

function Page() {
  return <ServicePage service={service} />;
}
