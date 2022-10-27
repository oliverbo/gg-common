interface UniqueObject {
    id?: string;
}

interface WebEntity extends UniqueObject {
    slug?: string;
    _complete?: boolean; // Has the record enough data for creating a page?
}

interface ReferenceUrlEntity extends WebEntity {
    spotifyUrl?: string;
    appleMusicUrl?: string;
    bandcampUrl?: string;
    soundCloudUrl?: string;
    youTubeUrl?: string;
}

interface Artist extends WebEntity {
    name: string;
    appleMusicUrl?: string;
    bandcampUrl?: string;
    category?: string;
    city?: string;
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

interface Album extends WebEntity {
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
    otherUrl?: string;
    appleMusicUrl?: string;
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
};
