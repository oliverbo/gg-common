import type { WebEntity } from "./base";
import type { Source } from "./source";

export interface ExternalEntity extends WebEntity {
    externalId?: string; // ID from an external source, e.g. Ghost
    postUrl?: string; // URL to the post in the external source, e.g. Ghost
    title: string;
    content?: string;
    postDate?: Date;
    excerpt?: string;
    imageUrl?: string;
    tags?: string[];
    authors?: string[];
    status?: string;
    source?: Source;
}
