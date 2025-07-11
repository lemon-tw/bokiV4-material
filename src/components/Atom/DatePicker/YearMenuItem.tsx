import React, { forwardRef } from "react";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Check } from "phosphor-react";

export interface YearMenuItemProps extends MenuItemProps {
  selected?: boolean;
  autoFocus?: boolean;
  /** internal slot-only props – strip them before forwarding */
  focusedView?: unknown;
  hasFocus?: unknown;
  timeViewsCount?: unknown;
}

export const YearMenuItem = forwardRef<HTMLLIElement, YearMenuItemProps>(
  function YearMenuItem(
    {
      disabled,
      selected,
      autoFocus,
      onClick,
      children,
      focusedView,
      hasFocus,
      timeViewsCount,
      ...rest
    },
    ref
  ) {
    return (
      <MenuItem
        ref={ref}
        disabled={disabled}
        selected={selected}
        autoFocus={autoFocus}
        dense
        sx={{
          width: "100%",
          justifyContent: "center",
          minHeight: 36,
          bgcolor: "#F5F5F6",
          "&.Mui-selected": {
            backgroundColor: "#37373714",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#37373714",
          },
        }}
        onClick={onClick}
        {...rest}
      >
        <div style={{ width: "30px" }}>
          {rest["aria-checked"] && (
            <Check size={"1.25rem"} color="#7A7D80" weight="bold" />
          )}
        </div>

        <ListItemText primary={children} sx={{ textAlign: "left", m: 0 }} />
      </MenuItem>
    );
  }
);
