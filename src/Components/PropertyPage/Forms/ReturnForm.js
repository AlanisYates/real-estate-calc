import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { InputField } from "../../FormFields";

export default function ReturnForm(props) {
  const {
    formField: { downPay, closing, rehab },
  } = props;
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Return Form
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField name={downPay.name} label={downPay.label} fullwidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={closing.name} label={closing.label} fullwidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={rehab.name} label={rehab.label} fullwidth />
        </Grid>
      </Grid>
    </>
  );
}
