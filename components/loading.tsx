const Loading = () => {
  return (
    <div
      className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-4 py-16"
      role="status"
      aria-label="Loading"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      <span className="text-sm text-muted-foreground">Loading…</span>
    </div>
  );
};

export default Loading;
