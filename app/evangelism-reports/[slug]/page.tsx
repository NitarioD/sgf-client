import Evangelism from ".";

export default function EvangelismPage({
  params,
}: {
  params: { slug: string };
}) {
  return <Evangelism params={{ slug: params.slug }} />;
}
