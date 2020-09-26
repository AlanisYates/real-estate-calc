import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";

export default function ReturnDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { downPay, closing, rehab } = formValues;
  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Input Detals
      </Typography>
      <Grid container>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Down Payment</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{downPay}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Closing Costs</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{closing}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Rehab</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{rehab}</Typography>
          </Grid>
        </>
      </Grid>
    </Grid>
  );
}
