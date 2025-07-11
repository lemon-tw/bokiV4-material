import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker as MuiDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Global, css } from "@emotion/react";

import { YearMenuItem } from "./YearMenuItem";
import { MonthMenuItem } from "./MonthMenuItem";
import { CalendarHeader } from "./CalendarHeader";
import { Box, Button } from "@mui/material";

export type YearMonthDatePickerProps = Omit<
  React.ComponentProps<typeof MuiDatePicker>,
  "slots" | "viewRenderers" | "views" | "openTo"
>;

export function DatePicker(props: YearMonthDatePickerProps) {
  function MyCalendarFooter({ onClear }: any) {
    return (
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
        <Button size="small" onClick={onClear}>
          Clear
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Global
        styles={css`
          .MuiYearCalendar-root {
            width: 100% !important;
            flex-direction: column !important;
            flex-wrap: nowrap !important;
            background-color: #f5f5f6 !important;
          }
          .MuiMonthCalendar-root {
            width: 100% !important;
            flex-direction: column !important;
            flex-wrap: nowrap !important;
            max-height: 280px;
            overflow-y: auto;
            background-color: #f5f5f6 !important;
          }
        `}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MuiDatePicker
          autoFocus={true}
          showDaysOutsideCurrentMonth
          views={["year", "month", "day"]}
          slots={{
            yearButton: YearMenuItem,
            monthButton: MonthMenuItem,
            calendarHeader: CalendarHeader,
          }}
          slotProps={{
            layout: {
              sx: {
                ".MuiDateCalendar-root": {
                  width: "360px",
                },
                ".MuiDayCalendar-root": {
                  backgroundColor: "#F5F5F6",
                },
                ".MuiPickersDay-root": {
                  fontSize: "1rem",
                  width: "40px",
                  height: "40px",
                  "&.Mui-selected": {
                    backgroundColor: "#1994FC",
                    ":hover": {
                      backgroundColor: "#1994FC",
                    },
                    ":focus": {
                      backgroundColor: "#1994FC",
                    },
                  },
                },
                ".MuiDayCalendar-weekDayLabel": {
                  fontSize: "1rem",
                  width: "40px",
                  height: "40px",
                },
              },
            },
          }}
          // {...(props as any)}
        />
      </LocalizationProvider>
    </>
  );
}
