"use client";

import { Router } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const PageRouteProgress = () => {
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());
};

export default PageRouteProgress;
