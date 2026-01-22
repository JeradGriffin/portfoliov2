import pluginWebc from "@11ty/eleventy-plugin-webc";
// import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default (eleventyConfig) => {
  //eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_components/**/*.webc",
  });

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
