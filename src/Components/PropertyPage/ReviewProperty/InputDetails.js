import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { numberWithCommas } from "../../utils/format";
import useStyles from "./styles";

export default function InputDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const {
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
  } = formValues;
  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Input Detals
      </Typography>
      <Grid container>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Name</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{nickName}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Address</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{address}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Mortgage</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{numberWithCommas(mortgage)}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Price</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{price}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Link</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{link}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Vacancy</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{vacancy}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Lawn</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{lawn}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>CapX</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{capX}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Repairs</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{repairs}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Insurance</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{insurance}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Tax</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{tax}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>HOA</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{hoa}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Rental Income</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{rentalIncome}</Typography>
          </Grid>
        </>
      </Grid>
    </Grid>
  );
}
