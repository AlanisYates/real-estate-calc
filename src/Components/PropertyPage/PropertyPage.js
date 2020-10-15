import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import axios from "axios";

import InputForm from "./Forms/InputForm";
import ReturnForm from "./Forms/ReturnForm";
import ReviewProperty from "./ReviewProperty";
import PropertySuccess from "./PropertySuccess";

import validationSchema from "./FormModel/validationSchema";
import propertyFormModel from "./FormModel/propertyFormModel";
// import formInitalValues from "./FormModel/formInitalValues";

import useStyles from "./styles";

const steps = ["Input Numbers", "ROA", "Reivew your property"];
const { formId, formField } = propertyFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <InputForm formField={formField} />;
    case 1:
      return <ReturnForm formField={formField} />;
    case 2:
      return <ReviewProperty />;
    default:
      return <div>Not Found</div>;
  }
}

export default function PropertyPage(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const initalVals = {
    repairs: "100",
    vacancy: "95",
    mortgage: "62",
    rehab: "5000",
    address: "11922 Your address, Tamp, florida, 22345",
    hoa: "0",
    rentalIncome: "1900",
    nickName: "Property 23",
    tax: "170",
    lawn: "0",
    insurance: "67",
    price: "224000",
    closing: "1200",
    link: "https://material-ui.com/components/typography/",
    capX: "100",
    downPay: "1000004",
  };

  async function getPropertyInfo(id) {
    const res = await axios.get(
      `https://us-central1-real-estate-backend-8b77f.cloudfunctions.net/app/properties/${id}`
    );
    return res.data;
  }

  async function _submitForm(values, actions) {
    await axios.post(
      "https://us-central1-real-estate-backend-8b77f.cloudfunctions.net/app/properties",
      values
    );
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <>
      <Typography component="h1" variant="h2" align="center">
        Property Calculator
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          <PropertySuccess />
        ) : (
          <Formik
            enableReinitialize={true}
            initialValues={initalVals}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? "Submit Property" : "Next"}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </>
    </>
  );
}
