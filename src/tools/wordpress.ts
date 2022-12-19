export const imgUrlPatternWithCrop =
    /^(https:\/\/wp\.glamglare\.com\/wp-content\/uploads\/[0-9]+\/[0-9]+\/[^\/]+)(-[0-9]+x[0-9]+)(?=.)\.(jpg|png|jpeg)(\?crop=1)?$/;
export const imgUrlPatternWithoutCrop =
    /^(https:\/\/wp\.glamglare\.com\/wp-content\/uploads\/[0-9]+\/[0-9]+\/[^\/]+)\.(jpg|png|jpeg)$/;

// Modifies the image Url for server-side crop
export function imageCropUrl(imgUrl: string, width = 0, height = 0) {
    if (!imgUrl) {
        return "undefined"; // Better than nothing
    }

    let match = imgUrl.match(imgUrlPatternWithCrop);
    let fileNameExtension = "";

    if (match) {
        fileNameExtension = match[3];
    } else {
        match = imgUrl.match(imgUrlPatternWithoutCrop);
        if (match) {
            fileNameExtension = match[2];
        } else {
            console.error(
                `Image URL "${imgUrl}" does not match expected pattern`
            );
            return imgUrl; // better than nothing in this case
        }
    }

    const fileNameBase = match[1];

    if (width === 0 || height == 0)
        return `${fileNameBase}.${fileNameExtension}`;
    return `${fileNameBase}-${width}x${height}.${fileNameExtension}?crop=1`;
}
