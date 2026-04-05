/**
 * Public backend base URL. NEXT_PUBLIC_* values are inlined at build time — run
 * `npm run build` after changing .env.
 */
export function getPublicApiBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_API_URL ||
    process.env.NEXT_PUBLIC_API ||
    ""
  );
}
