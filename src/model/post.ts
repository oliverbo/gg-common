import type { ExternalEntity } from "./external";
import type { Song } from "./song";

export interface Post extends ExternalEntity {
    artistRefs?: string[];

    /**
     * The single artist associated with legacy post records.
     *
     * @deprecated Use `artistRefs` for new and updated posts.
     */
    artistRef?: string;
}

/** A post enriched with its related song. */
export interface PostDetails extends Post {
    song?: Song;
}
