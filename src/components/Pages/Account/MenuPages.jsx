import { Box } from "@mui/material";

const MenuPages = ({ value, index, children }) => {
  return (
    <Box
      sx={{ width: 1 }}
      role="tabpanel"
      hidden={index !== value}
      id={`tabpanel-${index}`}
    >
      {index === value && (
        <Box
          sx={{
            width: 1,
            height: "auto",
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
};

export default MenuPages;
