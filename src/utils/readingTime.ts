export function readingTime(body: string): number {
    return Math.max(1, Math.ceil((body?.split(/\s+/).length ?? 0) / 200));
}
