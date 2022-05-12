module.exports = function (eleventyConfig){

    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/media/");
    eleventyConfig.addWatchTarget("./src/media/");
    eleventyConfig.addPassthroughCopy("./src/js/");
    eleventyConfig.addWatchTarget("./src/js/");
    eleventyConfig.addPassthroughCopy("./src/pages/");
    eleventyConfig.addWatchTarget("./src/pages/");



    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};