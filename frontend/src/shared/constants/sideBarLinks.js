import { SIDEBAR_LINKS } from "@/shared/constants/links";

export const sideBarLinks = () => {
  const links = Object.values(SIDEBAR_LINKS).map((route) => ({
    id: route.id,
    title: route.title,
    path: route.path,
    icon: route.icon,
    allowed: route.allowed,
  }));

  return links.filter((link) => link.allowed.length === 0);
};
