import type { UniqueObject } from "./base";

export interface User extends UniqueObject {
    name: string;
    admin: boolean;
}
