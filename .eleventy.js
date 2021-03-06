module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/media/");
  eleventyConfig.addWatchTarget("./src/media/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/pages/");
  eleventyConfig.addWatchTarget("./src/pages/");
  eleventyConfig.addPassthroughCopy("./src/form.php");
  eleventyConfig.addWatchTarget("./src/form.php");
  eleventyConfig.addPassthroughCopy("./src/sitemap.xml");
  eleventyConfig.addWatchTarget("./src/sitemap.xml");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
