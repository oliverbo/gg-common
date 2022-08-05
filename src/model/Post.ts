import { ImageInfo } from './ImageInfo';
import { Song } from './Song';

// Publication/Post about music
export interface Post {
    id: string;
    slug: string;
    title: string;
    link: string;
    content: string;
    date: Date;
    excerpt: string;
    featuredImage: {
        medium?: ImageInfo;
        large?: ImageInfo;
        thumbnail?: ImageInfo;
        mediumLarge?: ImageInfo;
        full?: ImageInfo;
    }
    categories?: number[];
    song?: Song;
}
