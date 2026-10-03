export default {
  atlasCss: "case",
  eleventyComputed: {
    permalink: (data) => `/work/${data.project.slug}/`,
    title: (data) => `${data.project.client} — Case study`,
  },
};
