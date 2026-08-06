export interface UniqueObject {
    id?: string;
    updateDate?: Date;
    updateUserId?: string;
}

export interface WebEntity extends UniqueObject {
    slug?: string;

    /**
     * Whether the entity has enough information to build its public page.
     *
     * This value is calculated when an entity is loaded or enriched and must
     * not be persisted in Firestore.
     */
    isComplete?: boolean;
}
