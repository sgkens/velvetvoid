module.exports = function(eleventyConfig){
    eleventyConfig.setNunjucksEnvironmentOptions({ throwOnUndefined: true });
    eleventyConfig.addPassthroughCopy("src/css/fa-6.5.1-web/webfonts");
    eleventyConfig.addPassthroughCopy("src/css/fonts");
    eleventyConfig.addPassthroughCopy("src/imgs");
    return { 
        dir: { 
            input: "src",
            output: "public",
        }, 
    };
};