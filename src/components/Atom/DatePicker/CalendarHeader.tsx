import { Box, IconButton, Typography } from "@mui/material";
import dayjs from "dayjs";
import { CaretLeft, CaretRight, CaretDown } from "phosphor-react";
import Divider from "@mui/material";

// props 直接 any，省得沾內部型別
export function CalendarHeader(props: any) {
  const {
    currentMonth,
    onMonthChange,
    onViewChange,
    views = [],
    labelId,
    sx,
    ...rest
  } = props;

  const handlePrevMonth = () =>
    onMonthChange(dayjs(currentMonth).subtract(1, "month"));
  const handleNextMonth = () =>
    onMonthChange(dayjs(currentMonth).add(1, "month"));

  // 年：用「前後 12 個月」達到同樣效果
  const handlePrevYear = () =>
    onMonthChange(dayjs(currentMonth).subtract(1, "year"));
  const handleNextYear = () =>
    onMonthChange(dayjs(currentMonth).add(1, "year"));

  const openView = props.view;

  return (
    <Box
      sx={{
        bgcolor: "#F5F5F6",
        height: "64px",
        p: 1,
        display: "flex",
        justifyContent: "space-around",
        borderBottom: openView !== "day" && "1px solid #E1E1E1",
        ...sx,
      }}
      {...rest}
    >
      {/* 月份列 */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {openView === "day" && (
          <IconButton size="small" onClick={handlePrevMonth}>
            <CaretLeft fontSize="inherit" />
          </IconButton>
        )}

        <Typography
          id={labelId}
          onClick={() => onViewChange("month")}
          sx={{
            fontSize: "0.875rem",
            mx: 1,
            cursor: "pointer",
            fontWeight: 500,
            color: "#7A7D80",
            opacity: openView === "year" ? 0.38 : 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          {currentMonth.format("MMM")}
          {openView !== "year" && <CaretDown weight="fill" />}
        </Typography>

        {openView === "day" && (
          <IconButton size="small" onClick={handleNextMonth}>
            <CaretRight fontSize="inherit" />
          </IconButton>
        )}
      </Box>

      {/* 年份列 */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {openView === "day" && (
          <IconButton size="small" onClick={handlePrevYear}>
            <CaretLeft fontSize="inherit" />
          </IconButton>
        )}

        <Typography
          onClick={() => onViewChange("year")}
          sx={{
            fontSize: "0.875rem",
            mx: 1,
            cursor: "pointer",
            fontWeight: 500,
            color: "#7A7D80",
            opacity: openView === "month" ? 0.38 : 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          {currentMonth.format("YYYY")}
          {openView !== "month" && <CaretDown weight="fill" />}
        </Typography>

        {openView === "day" && (
          <IconButton size="small" onClick={handleNextYear}>
            <CaretRight fontSize="inherit" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
}
