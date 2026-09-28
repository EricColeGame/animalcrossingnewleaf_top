export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Animal Crossing New Leaf Wiki",
  shortName: "Animal Crossing: New Leaf",
  logoText: "AC",
  tagline: "Villagers, Items, Events & Town Guides",
  description: "Your cozy guide to Animal Crossing: New Leaf on Nintendo 3DS — villager lists, furniture and item guides, fish and bugs, events, QR codes, and town customization tips.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://animalcrossingnewleaf.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://animalcrossingnewleaf.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://animalcrossing.nintendo.com/",
  heroVideoId: "efsKlfQC4Cg", // Animal Crossing: New Leaf Welcome amiibo Trailer — Nintendo of America
  social: {
    discord: "https://discord.gg/acnh",
    youtube: "https://www.youtube.com/@NintendoAmerica",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
