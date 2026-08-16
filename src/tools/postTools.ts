/** Extracts an artist name from the conventional `Artist - Title` post title. */
export const extractArtist = (title: string): string | undefined => {
    if (!title || typeof title !== "string") {
        throw new Error("Invalid title: Title must be a non-empty string.");
    }

    const normalizedTitle = title.includes(":")
        ? title.split(":").slice(1).join(":").trim()
        : title;
    const parts = normalizedTitle.split(" - ");
    if (parts.length < 2) {
        return;
    }

    return parts[0].trim();
};
