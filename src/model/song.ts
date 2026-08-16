import type { Album } from "./album";
import type { Artist } from "./artist";
import type { WebEntity } from "./base";
import type { ReferenceUrlEntity } from "./reference";

export interface Song extends WebEntity, ReferenceUrlEntity {
    albumRef?: string;
    artist: string;
    artistRef?: string;
    category: string;
    content?: string;
    coverUrl?: string;
    glamglareUrl?: string;
    isVideo?: boolean;
    postDate?: Date;
    releaseDate?: Date;
    title: string;
}

/** A song enriched with its related album and artist. */
export interface SongDetails extends Song {
    albumInfo?: Album;
    artistInfo?: Artist;
}
