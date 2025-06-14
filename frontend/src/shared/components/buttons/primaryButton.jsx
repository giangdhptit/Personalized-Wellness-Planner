// MUI
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export default function PrimaryButton({
  buttonText = "submit",
  type = "submit",
  loading = false,
  variant = "contained",
  disabled,
  onClick = () => {},
  sx,
  ...reset
}) {
  return (
    <Button
      variant={variant}
      disabled={loading || disabled}
      onClick={onClick}
      type={type}
      sx={{
        textTransform: "none",
        padding: "8px 50px",
        backgroundColor: "var(--primary-color)",
        fontWeight: 600,
        fontSize: "18px",
        "&:hover": {
          backgroundColor: "var(--primary-color)",
        },
        ...sx,
      }}
      {...reset}
      fullWidth
    >
      {loading ? <CircularProgress size={20} /> : buttonText}
    </Button>
  );
}
