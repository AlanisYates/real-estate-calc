import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typorgraphy from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import useStyles from "./styles";

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="absolute" color="default" className={classes.appBar}>
      <ToolBar>
        <Typorgraphy variant="h6" color="inherit" noWrap>
          <a className={classes.link} href="/">
            <HomeIcon fontSize="large" />
          </a>
        </Typorgraphy>
      </ToolBar>
    </AppBar>
  );
}
