import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Users,
  Package,
  Cog,
  Map as MapIcon,
  KeyRound,
  Palette,
  MessagesSquare,
} from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "items", path: "/items", icon: Package, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "maps", path: "/maps", icon: MapIcon, isContentType: true },
  { key: "codes", path: "/codes", icon: KeyRound, isContentType: true },
  { key: "customization", path: "/customization", icon: Palette, isContentType: true },
  { key: "community", path: "/community", icon: MessagesSquare, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
