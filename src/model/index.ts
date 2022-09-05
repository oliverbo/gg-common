interface Id {
    id?: string;
    slug?: string;
}

interface Artist extends Id {
    slug?: string; // TODO: will be changed to mandatory
    name: string;
    appleMusicUrl?: string;
    bandcampUrl?: string;
    category?: string;
    city?: string;
    _complete: boolean; // Has the record enough data for creating a page?
    country?: string;
    description?: string;
    facebookHandle?: string;
    favorite?: boolean;
    genre?: string;
    glamglareUrl?: string;
    info?: string;
    instagramHandle?: string;
    location?: string;
    members?: number;
    photoCredit?: string;
    photoUrl?: string;
    spotifyUrl?: string;
    status?: string;
    tiktokHandle?: string;
    twitterHandle?: string;
    webUrl?: string;
}

interface Album {
    id?: string;
    slug?: string;
    name: string;
    artist: string;
    artistRef?: string;
    artistInfo?: Artist;
    _complete: boolean;
    labelName?: string;
    type?: string;
    coverUrl?: string;
    debutRecord?: boolean;
    description?: string;
    glamglareUrl?: string;
    coverageType?: string;
    favorite: boolean;
    bandcampUrl?: string;
    spotifyUrl?: string;
    appleMusicUrl?: string;
    linkUrl?: string; // deprecated
    releaseDate: Date;
}

interface ImageInfo {
    url: string;
    width: number;
    height: number;
}

interface Post {
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
    };
    categories?: number[];
    song?: Song;
}

interface Song {
    artist: Artist;
    title: string;
}

export { Id, Album, Artist, ImageInfo, Song, Post };
