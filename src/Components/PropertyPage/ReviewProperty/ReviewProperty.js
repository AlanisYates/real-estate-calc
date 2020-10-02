import React from "react";
import { useFormikContext } from "formik";
import { Typography, Grid } from "@material-ui/core";
import InputDetails from "./InputDetails";
import ReturnDetails from "./ReturnDetails";
import PropertyCalculations from "./PropertyCalculations";

export default function ReviewProperty() {
  const { values: formValues } = useFormikContext();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Property Summary
      </Typography>
      <PropertyCalculations formValues={formValues} />
      <Grid container spacing={2}>
        <InputDetails formValues={formValues} />
        <ReturnDetails formValues={formValues} />
      </Grid>
      {/* <Typography variant="h6">Inputs</Typography>
      <Typography variant="h6">Return Inputs</Typography> */}
    </>
  );
}
