import { Box } from "@mui/material";

const Page = ({ value, index, children }) => {
  return (
    <Box
      role="tabpanel"
      hidden={index !== value}
      id={`tabpanel-${index}`}
    >
      {index === value && (
        <Box
          sx={{
            width: 0.95,
            maxHeight: "100vh",
            mx: "auto",
            py: 6,
            overflowY: "auto",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
};

export default Page;
