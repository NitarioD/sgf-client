import Publications from ".";

export default function PublicationsPage({
  params,
}: {
  params: { slug: string };
}) {
  return <Publications params={{ slug: params.slug }} />;
}
