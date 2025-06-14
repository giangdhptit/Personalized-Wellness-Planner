import { usePathname } from "next/navigation";
import { AUTH_ROOT, DASHBOARD_ROOT } from "@/shared/utils//paths";

const useRouteType = () => {
  const pathName = usePathname();

  const isDashboardRoute = pathName.includes(DASHBOARD_ROOT);
  const isAuthRoute = pathName.includes(AUTH_ROOT);
  const isPublicRoute = !pathName.includes(DASHBOARD_ROOT);

  return { isDashboardRoute, isAuthRoute, isPublicRoute };
};

export default useRouteType;
