module.exports = function(eleventyConfig){
    eleventyConfig.setNunjucksEnvironmentOptions({ throwOnUndefined: true });
    eleventyConfig.addPassthroughCopy("src/css/fa-6.5.1-web/webfonts");
    eleventyConfig.addPassthroughCopy("src/css/fonts");
    eleventyConfig.addPassthroughCopy("src/imgs");
    eleventyConfig.addPassthroughCopy("src/js/alpinejs/3.13.3/cdn.min.js");
    eleventyConfig.addPassthroughCopy("src/js/apexcharts/3.45.1/apexcharts.min.js");
    eleventyConfig.addPassthroughCopy("src/js/main.js");
    return { 
        dir: { 
            input: "src",
            output: "dist",
        }, 
    };
};