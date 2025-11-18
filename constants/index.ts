export const cacheLngKey: string = "__qiazo_blog_lng__";
export const cacheThemeKey: string = "__qiazo_blog_theme__";
export const cacheRealSourceKey: string = "__qiazo_blog_source__";

export const domain =
  process.env.NODE_ENV === "production"
    ? "https://qiazo.com"
    : "http://localhost:3000";

export const sitemapUrls = ["apps", "support"];

export const manifest = {
  name: "Qiazo",
  short_name: "Qiazo",
  description: "Make technology simpler and experience more perfect.",
  start_url: "/",
  display: "standalone",
  background_color: "#fff",
  theme_color: "#fff",
  icons: [
    {
      src: `${domain}/logo.png`,
      sizes: "any",
      type: "image/png",
    },
  ],
};
