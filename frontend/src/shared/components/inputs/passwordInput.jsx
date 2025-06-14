import "./style.css";
import { useState } from "react";

// Icons
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

// React hook form
import { Controller } from "react-hook-form";

// MUI
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

export default function ControlledPasswordInput({
  name,
  label,
  placeholder,
  control,
  errors,
  labelSx,
  inputFieldSx,
  formControlSx,
  ...rest
}) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div>
          <InputLabel
            htmlFor={`outlined-adornment-${name}`}
            sx={{
              ...labelSx,
              "&.MuiInputLabel-root": {
                color: "black",
              },
            }}
          >
            {label}
          </InputLabel>
          <FormControl fullWidth variant="outlined" sx={formControlSx}>
            <OutlinedInput
              {...field}
              id={`outlined-adornment-${name}`}
              aria-describedby="outlined-weight-helper-text"
              sx={{
                borderRadius: "10px",
                ...inputFieldSx,
              }}
              error={errors?.[name]}
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              onChange={(e) => field.onChange(e.target.value)}
              value={field.value || ""}
              endAdornment={
                <InputAdornment position="end">
                  <button
                    className="password-toggle-icon"
                    onClick={togglePasswordVisibility}
                    type="button"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </InputAdornment>
              }
              {...rest}
            />
            {errors?.[name] && (
              <FormHelperText sx={{ color: "red" }}>
                {errors?.[name]?.message}
              </FormHelperText>
            )}
          </FormControl>
        </div>
      )}
    />
  );
}
