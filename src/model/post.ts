import type { ExternalEntity } from "./external";
import type { Song } from "./song";

export interface Post extends ExternalEntity {
    artistRef?: string;
}

/** A post enriched with its related song. */
export interface PostDetails extends Post {
    song?: Song;
}
