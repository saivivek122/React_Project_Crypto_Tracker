import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const CryptoFallback = ({ message = "Failed to load data", onRetry }) => {
  console.log("Hii")
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 5,
        color: "white",
        opacity: 0.9,
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 60, opacity: 0.6 }} />

      <Typography variant="h5" sx={{ mt: 2, fontWeight: 600 }}>
        Oops!
      </Typography>

      <Typography sx={{ mt: 1, opacity: 0.7 }}>{message}</Typography>

      {onRetry && (
        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#f7931a",
            "&:hover": { backgroundColor: "#d67e12" },
          }}
          onClick={onRetry}
        >
          Retry
        </Button>
      )}
    </Box>
  );
};

export default CryptoFallback;
