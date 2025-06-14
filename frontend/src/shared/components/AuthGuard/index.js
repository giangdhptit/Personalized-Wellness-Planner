"use client";
import useRouteType from "@/shared/hooks/useRouterType";
import { getCurrentUser } from "@/shared/redux/slices/user";
import { AUTH_ROUTES, DASHBOARD_ROUTES } from "@/shared/utils/paths";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const AuthGuard = ({ children }) => {
  const { isAuthRoute, isDashboardRoute } = useRouteType();
  const router = useRouter();
  const currentUser = useSelector(getCurrentUser);
  const isLoggedIn = Boolean(currentUser?.id);

  useEffect(() => {
    if (!isLoggedIn && isDashboardRoute) {
      router.push(AUTH_ROUTES.login);
    } else if (isLoggedIn && isAuthRoute) {
      router.push(DASHBOARD_ROUTES.home);
    }
  }, [isLoggedIn, isAuthRoute, isDashboardRoute, router]);

  return children;
};
