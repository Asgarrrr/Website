const { $content } = require("@nuxt/content");

const baseUrlArticles = "https://jeremycaruelle.com/blog";

const feedFormats = {
    rss: { type: "rss2", file: "rss.xml" },
    json: { type: "json1", file: "feed.json" },
};

// Function to create st
const createFeedArticles = async function ( feed : any ) {
    // Set the feed's meta data
    feed.options = {
        title       : "Asgarrrr's Blog",
        description : "Asgarrrr's Blog",
        link        : baseUrlArticles,
    };

    // Fetch the articles
    const articles = await $content( "blog" ).fetch();

    // Set the content of each article
    const hostName = process.env.NODE_ENV === "production" ? "https://jeremycaruelle.com" : "http://localhost:3000";

    // Add each article to the feed
    articles.forEach( ( article : any ) => {
        const url = `${ baseUrlArticles }/${ article.slug }`;

        // Set the image url
        const postImagesPath = `${ hostName }/assets/images/posts`;
        const imageUrl = article.image
            ? `${ hostName }${ article.image }`
            : `${ postImagesPath }/${ url?.split( "/" )?.at( -1 ) }.jpg`;

        // Add the article to the feed
        feed.addItem({
            title       : article.title,
            slug        : article.slug,
            link        : url,
            image       : imageUrl,
            date        : new Date(article.createdAt),
            description : article.description,
            content     : article.summary,
        });
    });
};

// Function to generate the feeds
const generateFeeds = ( ) => {
    return Object.values( feedFormats ).map(({ file, type }) => ({
        path: file,
        type,
        create: createFeedArticles,
    }));
};

export default generateFeeds;