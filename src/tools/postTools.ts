// Extracts the artist name from the post title
const extractArtist = (title: string): string | undefined => {
  if (!title || typeof title !== 'string') {
    throw new Error('Invalid title: Title must be a non-empty string.');
  }

  const parts = title.split(' - ');
  if (parts.length < 2) {
    return;
  }

  return parts[0].trim();
};

export { extractArtist };
