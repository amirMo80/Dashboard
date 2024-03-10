import { useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { salesData } from "../../../data/E_CommerceData";

import { SalesRevenueTooltip } from "./";

const SalesRevenue = () => {
  const [isMouseOverNewCustomer, setIsMouseOverNewCustomer] = useState(false);
  const [isMouseOverUpSelling, setIsMouseOverUpSelling] = useState(false);

  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        m: 2,
        backgroundColor: "#FFF",
        boxShadow:
          "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
        border: "1px solid #F2F4F7",
        borderRadius: "20px",
        padding: "32px 24px",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontFamily: "IRANSans-Demibold",
          fontSize: "1.1rem",
          color: "text.main",
          mb: 2,
        }}
      >
        درآمد از فروش
      </Typography>
      <Box
        sx={{
          width: 1,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box
          component="button"
          onMouseOver={() => setIsMouseOverNewCustomer(true)}
          onMouseLeave={() => setIsMouseOverNewCustomer(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: 2,
            background: "transparent",
            border: "none",
            outline: "none",
            cursor: "pointer",
          }}
        >
          <Box
            component="span"
            sx={{
              display: "inline-block",
              width: 10,
              height: 10,
              mr: 1,
              borderRadius: "50%",
              backgroundColor: "#6366f1",
            }}
          />
          <Typography
            variant="body1"
            sx={{ fontSize: ".9rem", color: "#6c737f" }}
          >
            مشتریان جدید
          </Typography>
        </Box>
        <Box
          component="button"
          onMouseOver={() => setIsMouseOverUpSelling(true)}
          onMouseLeave={() => setIsMouseOverUpSelling(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "transparent",
            border: "none",
            outline: "none",
            cursor: "pointer",
          }}
        >
          <Box
            component="span"
            sx={{
              display: "inline-block",
              width: 10,
              height: 10,
              mr: 1,
              borderRadius: "50%",
              backgroundColor: "#f79009",
            }}
          />
          <Typography
            variant="body1"
            sx={{ fontSize: ".9rem", color: "#6c737f" }}
          >
            فروش متقابل
          </Typography>
        </Box>
      </Box>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="2" vertical={false} opacity={0.2} />
          <XAxis
            dataKey="تاریخ"
            type="category"
            fontFamily="IRANSans-Regular"
            fontSize={10}
            axisLine={false}
            tickLine={false}
            tickMargin={12}
            padding={{ left: 24, right: 24 }}
            angle={isSmDown ? 45 : 0}
          />
          <YAxis type="number" hide />
          <Tooltip
            content={SalesRevenueTooltip}
            cursor={{ strokeDasharray: "4" }}
          />
          <Line
            type="bumpX"
            dataKey="مشتریان جدید"
            stroke="#6366f1"
            strokeWidth={3}
            activeDot={{ r: 4, stroke: "#6366f1" }}
            dot={{ r: 3, fill: "#6366f1" }}
            opacity={isMouseOverUpSelling ? 0.2 : 1}
          />
          <Line
            type="bumpX"
            dataKey="فروش متقابل"
            stroke="#f79009"
            strokeWidth={3}
            activeDot={{ r: 4, stroke: "#f79009" }}
            dot={{ r: 3, strokeDasharray: 0, fill: "#f79009" }}
            opacity={isMouseOverNewCustomer ? 0.2 : 1}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SalesRevenue;
