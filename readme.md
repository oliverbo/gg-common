# gg-common

Shared domain models and utilities for [glamglare.com](https://glamglare.com).

## Installation

```sh
npm install @oliverbo/gg-common@5.0.0-rc.1
```

## Usage

```ts
import { extractArtist, Source, type Artist } from "@oliverbo/gg-common";

const artist: Artist = {
    name: extractArtist("Blonde Maze - Somewhere") ?? "Unknown",
    isComplete: true,
};

console.log(Source.ghost, artist.name);
```

Models are also available from the supported `@oliverbo/gg-common/model`
subpath, and post-title utilities from `@oliverbo/gg-common/post-tools`.

See [MIGRATION.md](MIGRATION.md) when upgrading from v4.
