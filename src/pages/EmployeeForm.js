import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";

import { useForm, Form } from "../Components/useForm";
import Input from "../Components/controls/Input";

const initialFvalues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployeeForm() {
  const { values, setValues, handleInputChange } = useForm(initialFvalues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Input
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sm={6}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  );
}
