import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { InputField } from "../../FormFields";

export default function InputForm(props) {
  const {
    formField: {
      nickName,
      address,
      link,
      price,
      mortgage,
      lawn,
      vacancy,
      capX,
      repairs,
      insurance,
      tax,
      hoa,
      rentalIncome,
    },
  } = props;
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Input Form
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField name={nickName.name} label={nickName.label} fullwidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address.name} label={address.label} fullwidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={link.name} label={link.label} fullwidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={price.name} label={price.label} fullwidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={mortgage.name} label={mortgage.label} fullwidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lawn.name} label={lawn.label} fullwidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={vacancy.name} label={vacancy.label} fullwidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={capX.name} label={capX.label} fullwidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={repairs.name} label={repairs.label} fullwidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={insurance.name} label={insurance.label} fullwidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={tax.name} label={tax.label} fullwidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={hoa.name} label={hoa.label} fullwidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={rentalIncome.name}
            label={rentalIncome.label}
            fullwidth
          />
        </Grid>
      </Grid>
    </>
  );
}