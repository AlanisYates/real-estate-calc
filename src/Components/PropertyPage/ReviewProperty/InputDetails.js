import React from "react";
import { Typography, Grid, Link, Divider } from "@material-ui/core";
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
    <>
      <Typography variant="h5" gutterBottom className={classes.title}>
        Input Detals
      </Typography>
      <Divider />
      <Grid item container direction="column" xs={12}>
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
              <Typography gutterBottom>
                ${numberWithCommas(mortgage)}
              </Typography>
            </Grid>
          </>
          <>
            <Grid item xs={6}>
              <Typography gutterBottom>Price</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>${numberWithCommas(price)}</Typography>
            </Grid>
          </>
          <>
            <Grid item xs={6}>
              <Typography gutterBottom>Link</Typography>
            </Grid>
            <Grid item xs={6}>
              <Link href={link} target="_blank" gutterBottom>
                {link}
              </Link>
            </Grid>
          </>
          <>
            <Grid item xs={6}>
              <Typography gutterBottom>Vacancy</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>${numberWithCommas(vacancy)}</Typography>
            </Grid>
          </>
          <>
            <Grid item xs={6}>
              <Typography gutterBottom>Lawn</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>${numberWithCommas(lawn)}</Typography>
            </Grid>
          </>
          <>
            <Grid item xs={6}>
              <Typography gutterBottom>CapX</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>${numberWithCommas(capX)}</Typography>
            </Grid>
          </>
          <>
            <Grid item xs={6}>
              <Typography gutterBottom>Repairs</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>${numberWithCommas(repairs)}</Typography>
            </Grid>
          </>
          <>
            <Grid item xs={6}>
              <Typography gutterBottom>Insurance</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>
                ${numberWithCommas(insurance)}
              </Typography>
            </Grid>
          </>
          <>
            <Grid item xs={6}>
              <Typography gutterBottom>Tax</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>${numberWithCommas(tax)}</Typography>
            </Grid>
          </>
          <>
            <Grid item xs={6}>
              <Typography gutterBottom>HOA</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>${numberWithCommas(hoa)}</Typography>
            </Grid>
          </>
          <>
            <Grid item xs={6}>
              <Typography gutterBottom>Rental Income</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>
                ${numberWithCommas(rentalIncome)}
              </Typography>
            </Grid>
          </>
        </Grid>
      </Grid>
    </>
  );
}
