# Migrating from v4 to v5

Version 5 removes obsolete integrations and narrows the package to explicit,
supported entry points.

## Imports

Import models and utilities directly from the package root:

```ts
import {
    extractArtist,
    Source,
    type Album,
    type Artist,
} from "@oliverbo/gg-common";
```

The `model` and `postTools` namespaces and imports from `dist/...` are no
longer supported. Stable `./model` and `./post-tools` subpaths are available
when a narrower entry point is useful.

## Calculated fields

Rename `_complete` to `isComplete`. It indicates whether an entity has enough
information to build its public page. It is calculated during loading or
enrichment and must not be persisted in Firestore.

The unused Song `_source` field has been removed. Persisted content provenance
continues to use `ExternalEntity.source`.

## Enriched models

Calculated relationships now live on detail types:

- `ArtistDetails` adds `albums`, `posts`, and `songs`.
- `AlbumDetails` adds `artistInfo`.
- `SongDetails` adds `albumInfo` and `artistInfo`.
- `PostDetails` adds `song`.

Use base models for stored entities and detail models for enriched page data.

## WordPress and errors

The WordPress image helper and configuration have been removed. Consumers
should use the original image URL or own their image transformation policy.

The package-level `ApiError` and `NotFoundError` classes have also been removed;
applications should own errors that match their API behavior.

`Source.legacyWordpress` remains available solely to represent historical data
whose stored source is `"WORDPRESS"`. WordPress is not an active integration.

## Deprecated album URL

`Album.linkUrl` remains for compatibility with existing stored data. Migrate
those values before removing the field in a future release.
