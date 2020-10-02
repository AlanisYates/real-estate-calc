import React from "react";
import { Typography, Grid } from "@material-ui/core";
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
  const yearlyCash = (Number(rentalIncome) - Number(totalExpense)) * 12;
  const roi = (yearlyCash / totalDown) * 100;

  return (
    <div>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Input Detals
      </Typography>
      <p>yearly: ${numberWithCommas(yearlyCash)}</p>
      <p>total exp: ${numberWithCommas(totalExpense)}</p>
      <p>total down: ${numberWithCommas(totalDown)}</p>
      <p>roi: {roi}%</p>
    </div>
  );
}
