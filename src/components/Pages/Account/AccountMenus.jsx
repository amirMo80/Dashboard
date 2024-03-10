import { Box, Tabs, Tab, Typography } from "@mui/material";

const tabProps = (index) => {
  return {
    id: `account-menu-${index}`,
    "aria-controls": `account-menu-${index}`,
  };
};

const tabData = [
  {
    label: "عمومی",
  },
  {
    label: "صورت حساب",
  },
  {
    label: "تیم",
  },
  {
    label: "اطلاعیه",
  },
];

const AccountMenus = ({ value, handleChangeValue }) => {
  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Tabs
        onChange={handleChangeValue}
        value={value}
        variant="scrollable"
        indicatorColor="primary"
        orientation="horizontal"
        sx={{
          width: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #F2F4F7",
          mt: 5,
        }}
      >
        {tabData.map((item, index) => (
          <Tab
            sx={{
              minWidth: 60,
              color: "#6C737F",
              "&.Mui-selected": {
                color: "#6366F1",
              },
            }}
            key={index}
            {...tabProps(index)}
            label={
              <Typography
                variant="body1"
                sx={{ fontFamily: "IRANSans-DemiBold", fontSize: ".9rem" }}
              >
                {item.label}
              </Typography>
            }
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default AccountMenus;
