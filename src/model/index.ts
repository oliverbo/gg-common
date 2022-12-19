interface UniqueObject {
    id?: string;
}

interface WebEntity extends UniqueObject {
    slug?: string;
    _complete?: boolean; // Has the record enough data for creating a page?
}

interface ReferenceUrlEntity extends WebEntity {
    appleMusicUrl?: string;
    bandcampUrl?: string;
    otherUrl?: string;
    soundCloudUrl?: string;
    spotifyUrl?: string;
    youTubeUrl?: string;
}

interface SocialEntity extends ReferenceUrlEntity {
    facebookHandle?: string;
    instagramHandle?: string;
    tiktokHandle?: string;
    twitterHandle?: string;
}

interface Artist extends SocialEntity {
    name: string;
    appleMusicUrl?: string;
    bandcampUrl?: string;
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
    spotifyUrl?: string;
    status?: string;
    webUrl?: string;
}

interface Album extends ReferenceUrlEntity {
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
    postDate: Date;
    excerpt?: string;
    imageUrl?: string;
    categories?: number[];
    song?: Song;
}

interface Song extends ReferenceUrlEntity {
    artist: string;
    artistRef?: string;
    artistInfo?: Artist;
    title: string;
    isVideo?: boolean;
}

interface Playlist extends ReferenceUrlEntity {
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
    Playlist,
    Post,
    User,
    SocialEntity,
};
