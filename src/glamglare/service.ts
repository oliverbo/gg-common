import he from "he";
import { ImageInfo } from "../model/ImageInfo";
import { Post } from "../model/Post";
import {
    loadPostById,
    loadPostsByCategories,
    loadPostsBySearchString,
} from "./repository.js";
import { WpPost } from "./WpPost";
import { extractSong } from "./wpPostHelper.js";

export async function postById(id: string): Promise<Post> {
    return extractDataFromWpPost(await loadPostById(id));
}

// Search Posts
export async function searchPosts(searchString: string): Promise<Post[]> {
    const wpResponse = await loadPostsBySearchString(searchString);
    const posts: Post[] = [];

    wpResponse.posts.forEach((post) => {
        posts.push(extractDataFromWpPost(post));
    });

    return posts;
}

// Returns a list of song picks
export async function postsByCategories(
    categories: string[],
    pageLength = 10,
    embed = true
): Promise<Post[]> {
    const posts: Post[] = [];

    const wpResponse = await loadPostsByCategories(
        embed,
        categories,
        pageLength
    );
    for (let w of wpResponse.posts) {
        const post = extractDataFromWpPost(w);
        posts.push(post);
    }

    return posts;
}

// extracts relevant data from a Wordpress post response
function extractDataFromWpPost(wpPost: WpPost): Post {
    let p: Post = {
        id: String(wpPost.id),
        slug: wpPost.slug,
        title: he.decode(wpPost.title),
        link: wpPost.URL,
        content: wpPost.content,
        date: new Date(wpPost.date),
        excerpt: he.decode(wpPost.excerpt),
        featuredImage: {
            medium: imageInfo(wpPost, "medium"),
            large: imageInfo(wpPost, "large"),
            thumbnail: imageInfo(wpPost, "thumbnail"),
            mediumLarge: imageInfo(wpPost, "medium_large"),
            full: imageInfo(wpPost, "full"),
        },
        categories: wpPost.categories,
    };

    const song = extractSong(wpPost);
    if (song) {
        p.song = song;
    }

    return p;
}

function imageInfo(wpPost: WpPost, name: string): ImageInfo | undefined {
    return {
        url: wpPost.featured_image,
        width: 0,
        height: 0,
    };
}
