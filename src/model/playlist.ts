import type { WebEntity } from "./base";
import type { ReferenceUrlEntity } from "./reference";

export interface Playlist extends WebEntity, ReferenceUrlEntity {
    name: string;
    description?: string;
    coverUrl?: string;
}
