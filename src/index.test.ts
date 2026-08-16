import {
    extractArtist,
    Source,
    type Album,
    type ArtistDetails,
} from "./index";

describe("public API", () => {
    it("exports post tools directly", () => {
        expect(extractArtist("Artist - Song")).toBe("Artist");
    });

    it("exposes active and historical content sources", () => {
        expect(Source).toEqual({
            database: "DATABASE",
            ghost: "GHOST",
            legacyWordpress: "WORDPRESS",
        });
    });

    it("exports base and detail model types", () => {
        const album: Album = {
            artist: "Artist",
            favorite: false,
            isComplete: true,
            name: "Album",
            releaseDate: new Date("2026-08-06T00:00:00Z"),
            title: "Artist - Album",
        };
        const artist: ArtistDetails = {
            albums: [album],
            isComplete: true,
            name: "Artist",
            posts: [],
            songs: [],
        };

        expect(artist.albums[0].isComplete).toBe(true);
    });
});
