import { Id } from './Id';

export interface Artist extends Id {
    slug?: string; // TODO: will be changed to mandatory
    name: string;
    appleMusicUrl?: string;
    bandcampUrl?: string;
    category?: string;
    city?: string;
    _complete: boolean;             // Has the record enough data for creating a page?
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
