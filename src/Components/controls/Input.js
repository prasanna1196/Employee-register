import { TextField } from "@material-ui/core";
import React from "react";

export default function Input(props) {
  const { name, label, value, onchange } = props;
  return (
    <div>
      <TextField
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={onchange}
      />
    </div>
  );
}
