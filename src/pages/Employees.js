import React, { Fragment } from "react";
import EmployeeForm from "./EmployeeForm";
import { PeopleOutlineTwoTone } from "@material-ui/icons";
import { makeStyles, Paper } from "@material-ui/core";

import PageHeader from "../Components/PageHeader";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function Employees() {
  const classes = useStyles();
  return (
    <Fragment>
      <PageHeader
        title="New Employee"
        subtitle="Form design with validation"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </Fragment>
  );
}
