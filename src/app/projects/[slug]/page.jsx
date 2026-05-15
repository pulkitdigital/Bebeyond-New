import { projects2 } from "@/app/data/Projects";
import FullInfo from "@/app/info/[id]/FullInfo";

export function generateStaticParams() {
  return projects2
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug }));
}

export default function Page({ params }) {
  return <FullInfo params={{ id: params.slug }} />;
}