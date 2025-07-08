import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { fn } from "@storybook/test";

import { SideModal } from "../../components/Modules/Modal/SideModal";
import { Button } from "../../components/Atom/Button/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Tray, Envelope } from "phosphor-react";

const meta: Meta<typeof SideModal> = {
  title: "components/Modules/Modal/SideModal",
  component: SideModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    anchor: {
      control: "radio",
      options: ["left", "right"],
    },
    content: {
      control: "text",
    },
    actions: {
      control: false,
    },
  },
  args: {
    // onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof SideModal>;

export const Navigation: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <SideModal
          {...args}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        ></SideModal>
      </div>
    );
  },
  args: {
    anchor: "left",
    title: "This is a modal title",
    content: (
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ fontSize: 24 }}>
                  {index % 2 === 0 ? <Tray /> : <Envelope />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ fontSize: 24 }}>
                  {index % 2 === 0 ? <Tray /> : <Envelope />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ fontSize: 24 }}>
                  {index % 2 === 0 ? <Tray /> : <Envelope />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    ),
  },
};

export const Form: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const statuses = ["已入住", "尚未入住"];
    const issueTypes = ["設施損壞", "清潔問題", "其他"];

    const ContactForm = () => {
      return (
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography variant="h6" fontWeight={600}>
            說明您的問題內容
          </Typography>

          <TextField fullWidth label="您的姓名" variant="outlined" />
          <TextField fullWidth label="Email" variant="outlined" />
          <TextField
            fullWidth
            label="手機號碼"
            variant="outlined"
            placeholder="+886"
          />

          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField fullWidth select label="入住狀態" variant="outlined">
              {statuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>

            <TextField fullWidth select label="問題類別" variant="outlined">
              {issueTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <TextField
            fullWidth
            multiline
            rows={4}
            label="說明內容"
            variant="outlined"
          />

          <Box
            sx={{
              border: "1px dashed #ccc",
              borderRadius: 2,
              p: 2,
              textAlign: "center",
              color: "#666",
            }}
          >
            <Typography>點擊新增檔案 或拖拉</Typography>
            <Typography variant="caption">
              SVG, PNG, JPG or GIF (最大 3MB)
            </Typography>
          </Box>

          <FormControlLabel
            control={<Checkbox />}
            label="提供您的購物清單，更方便飯店人員回應您準確資訊"
          />

          <FormControlLabel control={<Checkbox />} label="我不是機器人" />
        </Box>
      );
    };
    return (
      <Box>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <SideModal
          {...args}
          open={open}
          onClose={handleClose}
          content={<ContactForm />}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        ></SideModal>
      </Box>
    );
  },
  args: {
    anchor: "right",
    title: "聯絡我們",
    align: "start",
    actions: (
      <>
        <Button variant="outlined">Clear</Button>
        <Button>Despatch</Button>
      </>
    ),
  },
};
