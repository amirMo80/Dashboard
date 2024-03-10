import { Tabs, Tab, Typography } from "@mui/material";

import { useContext } from "react";
import { DashboardContext } from "../context/dashboardContext";

import {
  tabsPagesData,
  tabsProductionData,
  tabsConceptsData,
  tabProps,
} from "../data/tabsData";

const Sidebar = () => {
  const { value, handleChangeValue } = useContext(DashboardContext);

  return (
    <Tabs
      value={value}
      onChange={handleChangeValue}
      orientation="vertical"
      variant="scrollable"
      scrollButtons={false}
      TabIndicatorProps={{
        sx: {
          display: "none",
        },
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1C2536",
        py: 3,
      }}
    >
      {tabsProductionData.map((item, index) => (
        <Tab
          key={index}
          {...tabProps(index)}
          label={
            <Typography variant="body2" sx={{ ml: 2 }}>
              {item.label}
            </Typography>
          }
          icon={item.icon}
          iconPosition="start"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            color: "#9DA4AE",
            "&.MuiTab-root": {
              width: 1,
              minHeight: 30,
              my: 0.4,
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderRadius: "8px",
            },
            "&.Mui-selected": {
              color: "#fff",
            },

            "&.Mui-selected  .MuiTab-iconWrapper": {
              color: "rgb(99, 102, 241)",
            },
          }}
        />
      ))}
      <Typography
        variant="h6"
        sx={{
          color: "#9DA4AE",
          fontFamily: "IRANSans-Bold",
          fontSize: "1.1rem",
          my: 2,
        }}
      >
        مفاهیم
      </Typography>
      {tabsConceptsData.map((item, index) => (
        <Tab
          key={index}
          {...tabProps(index)}
          disabled={item.disabled}
          label={
            <Typography variant="body2" sx={{ ml: 2 }}>
              {item.label}
            </Typography>
          }
          icon={item.icon}
          iconPosition="start"
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            color: "#9DA4AE",
            "&.MuiTab-root": {
              minHeight: 40,
              my: 0.4,
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderRadius: "8px",
            },
            "&.Mui-selected": {
              color: "#fff",
            },

            "&.Mui-selected  .MuiTab-iconWrapper": {
              color: "primary.main",
            },
            "&.Mui-disabled": {
              color: "#fff",
              opacity: 0.3,
            },
          }}
        />
      ))}
      <Typography
        variant="h6"
        sx={{
          color: "#9DA4AE",
          fontFamily: "IRANSans-Bold",
          fontSize: "1.1rem",
          my: 2,
        }}
      >
        صفحات
      </Typography>
      {tabsPagesData.map((item, index) => (
        <Tab
          key={index}
          {...tabProps(index)}
          disabled={item.disabled}
          label={
            <Typography variant="body2" sx={{ ml: 2 }}>
              {item.label}
            </Typography>
          }
          icon={item.icon}
          iconPosition="start"
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            color: "#9DA4AE",
            "&.MuiTab-root": {
              minHeight: 40,
              my: 0.4,

              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderRadius: "8px",
            },
            "&.Mui-selected": {
              color: "#fff",
            },

            "&.Mui-selected  .MuiTab-iconWrapper": {
              color: "primary.main",
            },
            "&.Mui-disabled": {
              color: "#fff",
              opacity: 0.3,
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default Sidebar;
