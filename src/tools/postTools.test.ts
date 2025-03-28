import { extractArtist } from './postTools';

describe('extractArtist', () => {
  it('should return the artist when the title is in the correct format', () => {
    const title = 'Artist Name - Song Title';
    const result = extractArtist(title);
    expect(result).toBe('Artist Name');
  });

  it('should throw an error if the title is not a string', () => {
    expect(() => extractArtist(null as unknown as string)).toThrow(
      'Invalid title: Title must be a non-empty string.'
    );
    expect(() => extractArtist(123 as unknown as string)).toThrow(
      'Invalid title: Title must be a non-empty string.'
    );
  });

  it('should throw an error if the title is missing the delimiter', () => {
    const title = 'InvalidTitleWithoutDelimiter';
    const result = extractArtist(title);
    expect(result).toBeUndefined();
  });

  it('should handle extra spaces around the artist name', () => {
    const title = '  Artist Name  - Song Title';
    const result = extractArtist(title);
    expect(result).toBe('Artist Name');
  });
});
