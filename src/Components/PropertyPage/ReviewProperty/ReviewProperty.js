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
      <Typography variant="h4" gutterBottom>
        Review
      </Typography>
      <Grid container direction="column" spacing={2}>
        <PropertyCalculations formValues={formValues} />
        <InputDetails formValues={formValues} />
        <ReturnDetails formValues={formValues} />
      </Grid>
    </>
  );
}
