import { redirect } from "next/navigation";
import { AUTH_ROUTES } from "@/shared/utils/paths";

export default function Home() {
  redirect(AUTH_ROUTES.login);
}
