import { config as embedConfig, getEmbedInfo } from "./lib/other/embed.js";

export const providers = [
  {
    base: embedConfig.base,
    type: "data",
    data: await getEmbedInfo,
  },
  {
    base: "vidsrc.to",
    type: "url",
    url: function (type, { id, season, episode }) {
      if (type === "movie") return `https://${this.base}/embed/movie/${id}`;
      return `https://${this.base}/embed/tv/${id}/${season}/${episode}`;
    },
  },
  {
    base: "vidsrc.pro",
    online: true,
    type: "url",
    url: function (type, { id, season, episode }) {
      if (type === "movie") return `https://${this.base}/embed/movie/${id}`;
      return `https://${this.base}/embed/tv/${id}/${season}/${episode}`;
    },
  },
  {
    base: "moviesapi.club",
    online: true,
    type: "url",
    url: function (type, { id, season, episode }) {
      if (type === "movie") return `https://${this.base}/movie/${id}`;
      return `https://${this.base}/tv/${id}-${season}-${episode}`;
    },
  },
];

export const blacklist = {
  status: [
    404, // Not Found
    500, // Internal Server Error
  ],
  text: [
    "no sources",
    "no movie found",
    "no tv show found",
    "no episode found",
    "no show found",
    "JTdCJTIyc3VjY2VzcyUyMiUzQWZhbHNlJTdE", // Custom Embeds
  ],
};
