// Post from Wordpress API
export interface WpPost {
    id: string;
    date: string;
    date_gmt: string;
    modified: string;
    modified_gmt: string;
    categories?: number[];
    slug: string;
    type: string;
    URL: string;
    title: string;
    content: string;
    excerpt: string;
    featured_image: string;
}
