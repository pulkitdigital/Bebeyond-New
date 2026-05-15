import { blogs2 } from "@/app/data/Blogs";
import FullInfo from "@/app/info/[id]/FullInfo";

export function generateStaticParams() {
  return blogs2
    .filter((b) => b.slug)
    .map((b) => ({ slug: b.slug }));
}

export default function Page({ params }) {
  return <FullInfo params={{ id: params.slug }} />;
}