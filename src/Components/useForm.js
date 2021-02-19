import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export function useForm(initialFvalues) {
  const [values, setValues] = useState(initialFvalues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleInputChange,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export function Form(props) {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
}
