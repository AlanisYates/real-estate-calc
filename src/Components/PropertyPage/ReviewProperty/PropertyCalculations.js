import React from "react";
import { Typography, Grid, Divider } from "@material-ui/core";
import { numberWithCommas } from "../../utils/format";
import useStyles from "./styles";

export default function PropertyCalculations(props) {
  const { formValues } = props;
  const classes = useStyles();
  const {
    mortgage,
    lawn,
    vacancy,
    capX,
    repairs,
    insurance,
    tax,
    hoa,
    rentalIncome,
    downPay,
    closing,
    rehab,
  } = formValues;

  // Calculations
  function sumUp(a, b) {
    return Number(a) + Number(b);
  }

  const moneyIn = [downPay, closing, rehab];

  const monthlyExpenses = [
    tax,
    lawn,
    capX,
    mortgage,
    repairs,
    insurance,
    vacancy,
    hoa,
  ];

  const totalExpense = monthlyExpenses.reduce(sumUp);
  const totalDown = moneyIn.reduce(sumUp);
  const yearlyCash = Math.round(
    (Number(rentalIncome) - Number(totalExpense)) * 12
  );
  const cashFlow = Number(rentalIncome) - Number(totalExpense);

  const roi = Number(yearlyCash) / Number(totalDown);
  const returnPercent = Math.round((roi + Number.EPSILON) * 100);
  return (
    <>
      <Divider />
      <Grid item container direction="column" xs={12}>
        <Grid container>
          <>
            <Grid item xs={6}>
              <Typography gutterBottom>Cash Flow</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>
                ${numberWithCommas(cashFlow)}
              </Typography>
            </Grid>
          </>
          <>
            <Grid item xs={6}>
              <Typography gutterBottom>Total Down</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>
                ${numberWithCommas(totalDown)}
              </Typography>
            </Grid>
          </>
          <>
            <Grid item xs={6}>
              <Typography gutterBottom>ROI</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{returnPercent}%</Typography>
            </Grid>
          </>
        </Grid>
      </Grid>
    </>
  );
}
