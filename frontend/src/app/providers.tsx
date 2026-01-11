"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import CssBaseline from "@mui/material/CssBaseline";

const muiCache = createCache({
  key: "mui",
  prepend: true,
});

interface ThemeRegistryProps {
  children: React.ReactNode;
}

const ThemeRegistry = ({ children }: ThemeRegistryProps) => {
  return (
    <CacheProvider value={muiCache}>
      <CssBaseline />
      {children}
    </CacheProvider>
  );
};

export default ThemeRegistry;
