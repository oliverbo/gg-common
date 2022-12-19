import { WpPost } from "./WpPost";
import config from "../config.js";
import { WpResponse } from "./WpResponse";
import axios from "axios";
import NotFoundError from "../error/NotFoundError";
import ApiError from "../error/ApiError";

async function get(endpoint: string): Promise<any> {
    try {
        const res = await axios.get(`${config.wpApiUrl}/${endpoint}`);

        if (res.status === 200) {
            return res.data;
        } else if (res.status === 404) {
            throw new NotFoundError("Not Found");
        } else {
            throw new ApiError(`API returns ${res.status}`);
        }
    } catch (error) {
        console.error(error);
        throw new ApiError("API throws error");
    }
}

// Returns one post by its post ID
export async function loadPostById(id: string): Promise<WpPost> {
    return (await get(`posts/${id}`)) as WpPost;
}

// categories: category IDs to retrieve
// pageLength: size of the page returned
export async function loadPostsByCategories(
    embed: boolean,
    categories: string[],
    pageLength: number
): Promise<WpResponse> {
    console.log(`Loading ${pageLength} posts for categories ${categories}...`);
    let url = "posts?";
    url += "category=" + categories.toString();
    url += "&number=" + pageLength;

    return (await get(url)) as WpResponse;
}

// Load posts by searchString
export async function loadPostsBySearchString(
    searchString: string
): Promise<WpResponse> {
    let url = "posts";
    url += "?search=" + encodeURIComponent(searchString);

    return (await get(url)) as WpResponse;
}
