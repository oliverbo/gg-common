// Common configuration

let config: {
    wpApiUrl: string;
};

if (process.env.NODE_ENV === "production") {
    config = {
        wpApiUrl:
            "https://public-api.wordpress.com/rest/v1.1/sites/wp.glamglare.com",
    };
} else {
    // This is for ca (local) and development
    config = {
        wpApiUrl:
            "https://public-api.wordpress.com/rest/v1.1/sites/wp.glamglare.com",
    };
}

export default config;
