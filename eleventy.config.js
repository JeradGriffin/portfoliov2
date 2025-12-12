import pluginWebc from "@11ty/eleventy-plugin-webc";

export default (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_components/**/*.webc",
  });

  // Passthrough copy for images
  eleventyConfig.addPassthroughCopy("src/**/*.{jpg,jpeg,png,gif,svg,webp}");

  eleventyConfig.addJavaScriptFunction("renderTitle", (title) => {
    return [...new Set([title, "Jerad Griffin"])].filter((part) => !!part).join(" | ");
  });

  eleventyConfig.addJavaScriptFunction("renderSocialImage", (socialImage) => {
    if (socialImage) {
      if (!(socialImage.startsWith("http://") || socialImage.startsWith("https://"))) {
        socialImage = `https://www.griffindesdev.com${socialImage}`;
      }
      return socialImage;
    }
    return `https://www.griffindesdev.com/assets/share-graphic.png`;
  });

  eleventyConfig.addGlobalData(
    "copyright",
    () =>
      `&copy; ${[...new Set([2020, new Date().getFullYear()])].join("-")} Jerad Griffin.`
  );

  return {
    dir: {
      input: "src",
    },
  };
};
