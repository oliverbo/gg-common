import he from "he";
import { imageCropUrl } from "../tools/wordpress";
import { ImageInfo, Post } from "../model";
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
            medium: imageInfo(wpPost, 900, 600),
            large: imageInfo(wpPost, 2048, 1365),
            thumbnail: imageInfo(wpPost, 50, 50),
            mediumLarge: imageInfo(wpPost, 1500, 1000),
            full: imageInfo(wpPost, 0, 0),
            squareMedium: imageInfo(wpPost, 500, 500),
            squareSmall: imageInfo(wpPost, 250, 250),
        },
        categories: wpPost.categories,
    };

    const song = extractSong(wpPost);
    if (song) {
        p.song = song;
    }

    return p;
}

function imageInfo(wpPost: WpPost, width: number, height: number): ImageInfo {
    return {
        url: imageCropUrl(wpPost.featured_image, width, height),
        width: width,
        height: height,
    };
}
