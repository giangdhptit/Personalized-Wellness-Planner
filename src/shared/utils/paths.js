const path = (root, path) => `${root}${path}`;

export const removeFirstSlash = (path) => {
  const [_, ...rest] = path.split("/");
  return rest.join("/");
};

export const ROOT_ROUTE = "/";
export const AUTH_ROOT = "/auth";
export const DASHBOARD_ROOT = "/dashboard";

export const AUTH_ROUTES = {
  login: path(AUTH_ROOT, "/login"),
  register: path(AUTH_ROOT, "/register"),
  forgotPassword: path(AUTH_ROOT, "/forgotpassword"),
  termsAndConditions: path(AUTH_ROOT, "/terms"),
};

export const DASHBOARD_ROUTES = {
  home: path(DASHBOARD_ROOT, "/"),
};
