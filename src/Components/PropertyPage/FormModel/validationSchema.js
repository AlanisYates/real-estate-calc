import * as Yup from "yup";
import propertyFormModel from "./propertyFormModel";
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
    downPay,
    closing,
    rehab,
  },
} = propertyFormModel;

export default [
  Yup.object().shape({
    [nickName.name]: Yup.string().required(`${nickName.requiredErrorMsg}`),
    [address.name]: Yup.string().required(`${address.requiredErrorMsg}`),
    [link.name]: Yup.string().required(`${link.requiredErrorMsg}`),
    [price.name]: Yup.number().required(`${price.requiredErrorMsg}`),
    [mortgage.name]: Yup.number().required(`${mortgage.requiredErrorMsg}`),
    [lawn.name]: Yup.number().required(`${lawn.requiredErrorMsg}`),
    [vacancy.name]: Yup.number().required(`${vacancy.requiredErrorMsg}`),
    [capX.name]: Yup.number().required(`${capX.requiredErrorMsg}`),
    [repairs.name]: Yup.number().required(`${repairs.requiredErrorMsg}`),
    [insurance.name]: Yup.number().required(`${insurance.requiredErrorMsg}`),
    [tax.name]: Yup.number().required(`${tax.requiredErrorMsg}`),
    [hoa.name]: Yup.number().required(`${hoa.requiredErrorMsg}`),
    [rentalIncome.name]: Yup.number().required(
      `${rentalIncome.requiredErrorMsg}`
    ),
  }),

  Yup.object().shape({
    [downPay.name]: Yup.number().required(`${downPay.requiredErrorMsg}`),
    [closing.name]: Yup.number().required(`${closing.requiredErrorMsg}`),
    [rehab.name]: Yup.number().required(`${rehab.requiredErrorMsg}`),
  }),
];
