import React, { useState } from "react";
import { Button, Drawer, List } from "@mui/material";

import Menu from "./Pages/Menu";

const DrawerLeft = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button className="makeTop" onClick={() => setOpen(true)}>
        Drawer
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          <Menu />
        </List>
      </Drawer>
    </div>
  );
};

export default DrawerLeft;
