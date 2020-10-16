import React, { useState, useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import queryString from "query-string";
import axios from "axios";

import InputForm from "./Forms/InputForm";
import ReturnForm from "./Forms/ReturnForm";
import ReviewProperty from "./ReviewProperty";
import PropertySuccess from "./PropertySuccess";

import validationSchema from "./FormModel/validationSchema";
import propertyFormModel from "./FormModel/propertyFormModel";
import formInitalValues from "./FormModel/formInitalValues";

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

export default function PropertyPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [editVals, setEditVals] = useState();
  const [loading, setLoading] = useState(true);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const value = queryString.parse(window.location.search);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://us-central1-real-estate-backend-8b77f.cloudfunctions.net/app/properties/${value.id}`
      );
      const initValFromDB = res.data;
      if (window.location.search) {
        console.log(true);
      } else {
        console.log(false);
      }
      setEditVals(initValFromDB);
      setLoading(false);
    }
    getData();
  }, []);

  async function _submitNewForm(values, actions) {
    actions.setSubmitting(true);
    await axios.post(
      "https://us-central1-real-estate-backend-8b77f.cloudfunctions.net/app/properties",
      values
    );
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  async function _submitUpdateForm(values, actions) {
    actions.setSubmitting(true);
    await axios.put(
      `https://us-central1-real-estate-backend-8b77f.cloudfunctions.net/app/properties/${value.id}`,
      values
    );
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      if (value) {
        _submitUpdateForm(values, actions);
      } else {
        _submitNewForm(values, actions);
      }
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  if (!loading) {
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
              initialValues={
                window.location.search ? editVals : formInitalValues
              }
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
  } else {
    return <h1>Loading ...</h1>;
  }
}
