import { useEffect, useState } from "react";

export type Route = "/" | "/live" | "/archive" | "/register" | "/speaker";

export function useHashRoute(): [Route, (r: Route) => void] {
  const getRoute = (): Route => {
    const h = window.location.hash.replace(/^#/, "");
    if (h === "/live") return "/live";
    if (h === "/archive") return "/archive";
    if (h === "/register") return "/register";
    if (h === "/speaker") return "/speaker";
    return "/";
  };

  const [route, setRoute] = useState<Route>(getRoute());

  useEffect(() => {
    const onChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const navigate = (r: Route) => {
    window.location.hash = r === "/" ? "/" : r;
    setRoute(r);
  };

  return [route, navigate];
}
