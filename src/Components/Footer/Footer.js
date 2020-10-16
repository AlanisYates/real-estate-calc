import React from "react";
import { Link, Typography } from "@material-ui/core/";

export default function Footer() {
  return (
    <Typography variant="body2" color="secondary" align="center">
      Copyright © {}
      <Link color="inherit" href="https://material-ui.com/">
        Alanis Yates
      </Link>
      <span> </span>
      {new Date().getFullYear()}
    </Typography>
  );
}
