import { extractSong } from "./wpPostHelper";

const mdash = "&#8211;";

function wpPost(title: string) {
    return {
        id: "id",
        date: "date",
        date_gmt: "date",
        modified: "date",
        modified_gmt: "date",
        slug: "slug",
        content: "content",
        excerpt: "excerpt",
        type: "type",
        URL: "link",
        title,
        featured_image: "https://gg.com/image.jpg",
    };
}

describe("extractSong extracts song data", () => {
    it("extracts new song title format (unadorned)", () => {
        const post = wpPost(
            "Artist Name " + mdash + " Song Title (ft. Somebody)"
        );
        const song = extractSong(post);
        expect(song?.artist).toBe("Artist Name");
        expect(song?.title).toBe("Song Title (ft. Somebody)");
    });

    it("extracts old song pick format", () => {
        const post = wpPost(
            "SONG PICK: Artist Name " + mdash + " Song Title (ft. Somebody)"
        );
        const song = extractSong(post);
        expect(song?.artist).toBe("Artist Name");
        expect(song?.title).toBe("Song Title (ft. Somebody)");
    });

    it("extracts old song pick + video format", () => {
        const post = wpPost(
            "SONG PICK: Artist Name " +
                mdash +
                " Song Title (ft. Somebody) (Video)"
        );
        const song = extractSong(post);
        expect(song?.artist).toBe("Artist Name");
        expect(song?.title).toBe("Song Title (ft. Somebody)");
    });

    it("extracts new song pick + video format", () => {
        const post = wpPost(
            "SONG PICK: Artist Name " +
                mdash +
                " Song Title (ft. Somebody) [Video]"
        );
        const song = extractSong(post);
        expect(song?.artist).toBe("Artist Name");
        expect(song?.title).toBe("Song Title (ft. Somebody)");
    });
});
