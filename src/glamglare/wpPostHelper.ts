import he from "he";
import { Song, Source } from "../model";
import { WpPost } from "./WpPost";

// Extracts Song information from title returns
export function extractSong(post: WpPost): Song | undefined {
    const titlePattern = /([^:]+: )?(.+) &#8211; ([^\[\]]+)( \[.*\])?$/u;
    const data = titlePattern.exec(post.title);

    if (!data) {
        return undefined;
    }

    // Remove old video tag if exists;
    let title = he.decode(data[3]);
    if (title.endsWith(" (Video)")) {
        title = title.substring(0, title.length - 8);
    }

    return {
        artist: he.decode(data[2]),
        _source: Source.wordpress,
        category: "PICK",
        title,
    };
}
