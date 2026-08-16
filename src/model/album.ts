import type { Artist } from "./artist";
import type { ExternalEntity } from "./external";
import type { ReferenceUrlEntity } from "./reference";

export interface Album extends ReferenceUrlEntity, ExternalEntity {
    name: string;
    artist: string;
    artistRef?: string;
    isComplete: boolean;
    labelName?: string;
    type?: string;
    coverUrl?: string;
    debutRecord?: boolean;
    description?: string;
    glamglareUrl?: string;
    coverageType?: string;
    favorite: boolean;
    linkUrl?: string; // Deprecated
    releaseDate: Date;
}

/** An album enriched with its related artist. */
export interface AlbumDetails extends Album {
    artistInfo?: Artist;
}
