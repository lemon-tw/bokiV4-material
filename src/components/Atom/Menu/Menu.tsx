import { styled } from "@mui/material/styles";
import MuiMenu from "@mui/material/Menu";
import { CustomMenuProps } from "../../../types/menuExtends";

const StyledMenu = styled(MuiMenu)<CustomMenuProps>(() => {
  return {
    "& .MuiPaper-root": {
      boxShadow: "0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D",
    },
  };
});

export const Menu = ({ open, ...rest }: CustomMenuProps) => (
  <StyledMenu open={open} {...rest}></StyledMenu>
);
