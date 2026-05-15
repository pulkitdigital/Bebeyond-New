import { services2 } from "../../data/Services";
import ServicePageClient from "./ServicePageClient";

export function generateStaticParams() {
  return services2.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const service = services2.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default function ServicePage({ params }) {
  const serviceData = services2.find((s) => s.slug === params.slug);
  return <ServicePageClient serviceData={serviceData} />;
}