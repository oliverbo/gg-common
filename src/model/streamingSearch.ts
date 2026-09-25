export type StreamingEntityType = "artist" | "album";
export type StreamingServiceId = "spotify"; // widen as appleMusic/youTube providers land

export interface StreamingSearchCandidate {
    providerId: string;
    name: string;
    imageUrl?: string;
    url: string;
    artistName?: string; // album results
    releaseYear?: number; // album results
    popularity?: number; // artist results
    followers?: number; // artist results
}
