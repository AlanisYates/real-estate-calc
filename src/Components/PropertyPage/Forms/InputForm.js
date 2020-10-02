import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { InputField, InputNumber } from "../../FormFields";

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
          <InputField name={nickName.name} label={nickName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address.name} label={address.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={link.name} label={link.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputNumber name={price.name} label={price.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputNumber name={mortgage.name} label={mortgage.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputNumber name={lawn.name} label={lawn.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputNumber name={vacancy.name} label={vacancy.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputNumber name={capX.name} label={capX.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputNumber name={repairs.name} label={repairs.label} on fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputNumber
            name={insurance.name}
            label={insurance.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputNumber name={tax.name} label={tax.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputNumber name={hoa.name} label={hoa.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputNumber
            name={rentalIncome.name}
            label={rentalIncome.label}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
}
