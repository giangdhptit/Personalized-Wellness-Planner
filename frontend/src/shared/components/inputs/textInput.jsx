import React from "react";

// React Hook Form
import { Controller } from "react-hook-form";

// MUI
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";

export default function ControlledTextInput({
  label,
  name,
  type = "text",
  control,
  placeholder,
  errors,
  labelSx,
  inputFieldSx,
  formControlSx,
  ...rest
}) {
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
              error={errors?.[name]}
              {...field}
              id={`outlined-adornment-${name}`}
              sx={{
                borderRadius: "10px",
                ...inputFieldSx,
              }}
              type={type}
              placeholder={placeholder}
              onChange={(e) => field.onChange(e.target.value)}
              value={field.value || ""}
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
