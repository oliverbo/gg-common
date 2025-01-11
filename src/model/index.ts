interface UniqueObject {
    id?: string;
}

interface WebEntity extends UniqueObject {
    slug?: string;
    _complete?: boolean; // Has the record enough data for creating a page?
}

interface ReferenceUrlEntity {
    appleMusicUrl?: string;
    bandcampUrl?: string;
    otherUrl?: string;
    soundCloudUrl?: string;
    spotifyUrl?: string;
    youTubeUrl?: string;
}

interface SocialEntity {
    facebookHandle?: string;
    instagramHandle?: string;
    tiktokHandle?: string;
    twitterHandle?: string;
}

enum Source {
    database = "DATABASE",
    wordpress = "WORDPRESS",
    ghost = "GHOST",
}

interface Artist extends WebEntity, SocialEntity, ReferenceUrlEntity {
    name: string;
    albums?: Album[];
    category?: string;
    city?: string;
    country?: string;
    description?: string;
    favorite?: boolean;
    genre?: string;
    glamglareUrl?: string;
    info?: string;
    location?: string;
    members?: number;
    photoCredit?: string;
    photoUrl?: string;
    songs?: Song[];
    status?: string;
    webUrl?: string;
}

interface Album extends WebEntity, ReferenceUrlEntity {
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
    linkUrl?: string; // deprecated
    releaseDate: Date;
}

interface Post extends WebEntity {
    title: string;
    postUrl?: string;
    content?: string;
    postDate?: Date;
    excerpt?: string;
    imageUrl?: string;
    tags?: string[];
    authors?: string[];
    status?: string;
    song?: Song;
    source?: Source;
}

interface Song extends WebEntity, ReferenceUrlEntity {
    albumRef?: string;
    albumInfo?: Album;
    artist: string;
    artistRef?: string;
    artistInfo?: Artist;
    category: string;
    content?: string;
    coverUrl?: string;
    glamglareUrl?: string;
    isVideo?: boolean;
    postDate?: Date;
    releaseDate?: Date;
    _source?: Source;
    title: string;
}

interface Playlist extends WebEntity, ReferenceUrlEntity {
    name: string;
    description?: string;
    coverUrl?: string;
}

interface User extends UniqueObject {
    name: string;
    admin: boolean;
}

export {
    UniqueObject,
    WebEntity,
    ReferenceUrlEntity,
    Album,
    Artist,
    Song,
    Source,
    Playlist,
    Post,
    User,
    SocialEntity,
};
