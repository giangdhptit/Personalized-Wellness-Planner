import { ROOT_ROUTE } from "@/shared/utils/paths";
import { redirect } from "next/navigation";

const NotFound = () => redirect(ROOT_ROUTE);

export default NotFound;
