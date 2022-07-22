import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { StyledBreadcrumb } from "./Breadcrumbs.styles";

export const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter(Boolean);

  return (
    <MuiBreadcrumbs separator="">
      {pathnames.map((path, i) => {
        return (
          <StyledBreadcrumb isLast={pathnames.length - 1 === i} label={path} />
        );
      })}
    </MuiBreadcrumbs>
  );
};
