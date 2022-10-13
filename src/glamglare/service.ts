import he from "he";
import { Post } from "../model";
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
        postUrl: wpPost.URL,
        content: wpPost.content,
        postDate: new Date(wpPost.date),
        excerpt: he.decode(wpPost.excerpt),
        imageUrl: wpPost.featured_image,
        categories: wpPost.categories,
    };

    const song = extractSong(wpPost);
    if (song) {
        p.song = song;
    }

    return p;
}
