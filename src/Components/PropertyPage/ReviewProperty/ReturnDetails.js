import React from "react";
import { Typography, Grid, Divider } from "@material-ui/core";
import { numberWithCommas } from "../../utils/format";
import useStyles from "./styles";

export default function ReturnDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { downPay, closing, rehab } = formValues;
  return (
    <>
      <Typography variant="h5" gutterBottom className={classes.title}>
        Return Details
      </Typography>
      <Divider />
      <Grid item container direction="column" xs={12}>
        <Grid container>
          <>
            <Grid item xs={6}>
              <Typography gutterBottom>Down Payment</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>${numberWithCommas(downPay)}</Typography>
            </Grid>
          </>
          <>
            <Grid item xs={6}>
              <Typography gutterBottom>Closing Costs</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>${numberWithCommas(closing)}</Typography>
            </Grid>
          </>
          <>
            <Grid item xs={6}>
              <Typography gutterBottom>Rehab</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>${numberWithCommas(rehab)}</Typography>
            </Grid>
          </>
        </Grid>
      </Grid>
    </>
  );
}
