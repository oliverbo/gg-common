import { imageCropUrl } from "./wordpress";

describe("For image urls", () => {
    it("crops the URL elements with existing crop", () => {
        const url = imageCropUrl(
            "https://wp.glamglare.com/wp-content/uploads/2022/09/goldpark-2-100x100.jpg?crop=1",
            50,
            50
        );

        expect(url).toBe(
            "https://wp.glamglare.com/wp-content/uploads/2022/09/goldpark-2-50x50.jpg?crop=1"
        );
    });

    it("captures the URL elements without existing crop", () => {
        const url = imageCropUrl(
            "https://wp.glamglare.com/wp-content/uploads/2022/09/goldpark-2.jpg",
            50,
            50
        );

        expect(url).toBe(
            "https://wp.glamglare.com/wp-content/uploads/2022/09/goldpark-2-50x50.jpg?crop=1"
        );
    });

    it("returns a non-matching URL without crop", () => {
        const url = imageCropUrl(
            "https://wp.glamglare.com/img/someimage.jpg",
            50,
            50
        );

        expect(url).toBe("https://wp.glamglare.com/img/someimage.jpg");
    });

    it("crops png", () => {
        const url = imageCropUrl(
            "https://wp.glamglare.com/wp-content/uploads/2022/09/goldpark-2-100x100.png?crop=1",
            50,
            50
        );

        expect(url).toBe(
            "https://wp.glamglare.com/wp-content/uploads/2022/09/goldpark-2-50x50.png?crop=1"
        );
    });

    it("crops jpeg", () => {
        const url = imageCropUrl(
            "https://wp.glamglare.com/wp-content/uploads/2022/09/goldpark-2-100x100.jpeg?crop=1",
            50,
            50
        );

        expect(url).toBe(
            "https://wp.glamglare.com/wp-content/uploads/2022/09/goldpark-2-50x50.jpeg?crop=1"
        );
    });
});
