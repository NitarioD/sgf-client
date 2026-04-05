import Teachings from ".";

export default function TeachingsPage({
  params,
}: {
  params: { slug: string };
}) {
  return <Teachings params={{ slug: params.slug }} />;
}
