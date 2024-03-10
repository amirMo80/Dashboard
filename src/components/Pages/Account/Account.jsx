import { Box } from "@mui/material";
import { useState } from "react";

import Title from "../../Title";
import MenuPages from "./MenuPages";

import { AccountMenus, Billing, General, Team, Notification } from "./";

const Account = () => {
  const [value, setValue] = useState(0);

  const handleChangeValue = (value, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title titleName="حساب" showBtn={false} btnName={null} icon={null} />
      <AccountMenus value={value} handleChangeValue={handleChangeValue} />
      <MenuPages value={value} index={0}>
        <General />
      </MenuPages>
      <MenuPages value={value} index={1}>
        <Billing />
      </MenuPages>
      <MenuPages value={value} index={2}>
        <Team />
      </MenuPages>
      <MenuPages value={value} index={3}>
        <Notification />
      </MenuPages>
    </Box>
  );
};

export default Account;
