import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Menu } from "../../components/Modules/Menu/Menu";
import { MenuItem } from "../../components/Modules/Menu/MenuItem";
import { Button } from "../../components/Atom/Button/Button";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import { Cloud } from "phosphor-react";

const meta: Meta<typeof Menu> = {
  title: "components/Modules/Menu/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    // onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Label: Story = {
  parameters: {
    docs: {
      source: {
        code: `
import { Cloud } from "phosphor-react";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Click to Open
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            width: "200px",
          },
        }}
      >
        <MenuItem onClick={handleClose} selected sx={{ p: 2 }}>
          Selected
        </MenuItem>
        {/* <Divider /> */}
        <MenuItem onClick={handleClose} sx={{ p: 2 }}>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>With Icon</ListItemText>
          <Typography variant="body2">⌘V</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disabled sx={{ p: 2 }}>
          Disabled
        </MenuItem>
      </Menu>
    </div>
      );
    `.trim(),
      },
    },
  },

  render: (args) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      console.log(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Click to Open
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              "aria-labelledby": "basic-button",
            },
          }}
          sx={{
            "& .MuiPaper-root": {
              width: "200px",
            },
          }}
        >
          <MenuItem onClick={handleClose} selected sx={{ p: 2 }}>
            Selected
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} sx={{ p: 2 }}>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
            <ListItemText>With Icon</ListItemText>
            <Typography variant="body2">⌘V</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose} disabled sx={{ p: 2 }}>
            Disabled
          </MenuItem>
        </Menu>
      </div>
    );
  },
};
