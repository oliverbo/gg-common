import type { WebEntity } from "./base";
import type { Album } from "./album";
import type { Post } from "./post";
import type { ReferenceUrlEntity, SocialEntity } from "./reference";
import type { Song } from "./song";

export interface Artist extends WebEntity, SocialEntity, ReferenceUrlEntity {
    name: string;
    nameIndex?: string; // Lowercase version of name for case-insensitive search
    category?: string;
    city?: string;
    country?: string;
    description?: string;
    favorite?: boolean;
    genre?: string;
    glamglareUrl?: string;
    info?: string;
    location?: string;
    members?: number;
    photoCredit?: string;
    photoUrl?: string;
    status?: string;
    webUrl?: string;
}

/** An artist with the calculated relationships needed by its detail page. */
export interface ArtistDetails extends Artist {
    albums: Album[];
    posts: Post[];
    songs: Song[];
}
