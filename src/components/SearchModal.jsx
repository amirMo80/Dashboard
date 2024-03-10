import { DashboardContext } from "../context/dashboardContext";
import { useContext } from "react";

import {
  Modal,
  Box,
  Typography,
  TextField,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { CloseRounded, EmojiObjectsOutlined } from "@mui/icons-material";

const SearchModal = () => {
  const { openModal, handleCloseModal } = useContext(DashboardContext);

  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          width: smDown ? 0.8 : 0.4,
          height: 226,
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#fff",
          color: "rgb(17, 25, 39)",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            width: 1,
            height: 40,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "rgb(17, 25, 39)", fontFamily: "IRANSans-DemiBold" }}
          >
            جستجو
          </Typography>
          <Box
            component="button"
            onClick={handleCloseModal}
            sx={{
              backgroundColor: "transparent",
              outline: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <CloseRounded
              sx={{ fontSize: "1.5rem", color: "rgb(17, 25, 39)" }}
            />
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            width: 1,
            height: 40,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            background: "#ccc",
            p: 2,
            borderRadius: "2px",
            backgroundColor: "rgb(243,244,246)",
            color: "rgb(108, 115, 127)",
          }}
        >
          <EmojiObjectsOutlined sx={{ alignSelf: "center", mr: 1 }} />
          <Typography variant="subtitle2" sx={{ fontSize: ".75rem" }}>
            نکته : با وارد کردن کلمه کلیدی و فشردن Enter جستجو کنید.
          </Typography>
        </Box>
        <TextField
          sx={{
            width: 1,
          }}
          color="primary"
          label="جستجو"
          variant="outlined"
        />
      </Box>
    </Modal>
  );
};

export default SearchModal;
