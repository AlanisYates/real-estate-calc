import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typorgraphy from "@material-ui/core/Typography";
import useStyles from "./styles";

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="absolute" color="default" className={classes.appBar}>
      <ToolBar>
        <Typorgraphy variant="h6" color="inherit" noWrap>
          Property Calculator
        </Typorgraphy>
      </ToolBar>
    </AppBar>
  );
}
