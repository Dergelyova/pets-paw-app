import React from "react";
import { ThemeProvider, Typography, Button } from "@mui/material";
import { MAIN_THEME } from "./styles";

function App() {
  return (
    <ThemeProvider theme={MAIN_THEME}>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Button>Button</Button>
      <Typography variant="overline">Overline</Typography>
    </ThemeProvider>
  );
}

export default App;
