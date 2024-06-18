import { Card, CardContent } from './ui/card';

export const PinnedRepoItem = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <Card className="rounded-xl border-none bg-neutral-900 px-6 py-4 transition-all">
      <p className="mb-2 text-lg font-bold">{name}</p>
      <p className="truncate font-light text-neutral-400">{description}</p>
    </Card>
  );
};
