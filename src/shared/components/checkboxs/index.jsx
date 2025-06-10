import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import Link from "next/link";

export default function CheckboxLabels({isChecked, setIsChecked, label='',sx}) {
  return (
    <FormGroup sx={{ display: "flex", flexDirection: "row", alignItems: "center", ...sx }}>
      <FormControlLabel control={<Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)} />} label={label} />
            <Link href={'/terms'} style={{marginLeft:-12}}>Terms and Conditions</Link>
    </FormGroup>
  );
}
