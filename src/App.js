import React, { useState, useEffect, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";
import routes from "routes";
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
import PrivateRoute from "./PrivateRoute";
import SignIn from "layouts/authentication/sign-in";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  useMemo(() => {
    const cacheRtl = createCache({ key: "rtl", stylisPlugins: [rtlPlugin] });
    setRtlCache(cacheRtl);
  }, []);

  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // ======= هنا أضفنا ال useEffect الخاص بالودجت =======
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://alaghbry0.github.io/chat-widget/widget.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.ChatWidget?.init({
        projectId: "Exaado Admin bannel",
        apiUrl: "https://exadoo-rxr9.onrender.com/bot/chat/stream",
        theme: "light",
        position: "bottom-right",
        direction: "rtl",
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  // ================================================

  const content = (
    <>
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Exaado Bannel"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
        </>
      )}
      <Routes>
        <Route path="/authentication/sign-in" element={<SignIn />} />
        {routes.map((route) => (
          <Route
            key={route.key}
            path={route.route}
            element={<PrivateRoute requiredRole={route.role}>{route.component}</PrivateRoute>}
          />
        ))}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </>
  );

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
        <CssBaseline />
        {content}
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {content}
    </ThemeProvider>
  );
}
