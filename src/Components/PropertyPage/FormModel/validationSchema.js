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
    [price.name]: Yup.string().required(`${price.requiredErrorMsg}`),
    [mortgage.name]: Yup.string().required(`${mortgage.requiredErrorMsg}`),
    [lawn.name]: Yup.string().required(`${lawn.requiredErrorMsg}`),
    [vacancy.name]: Yup.string().required(`${vacancy.requiredErrorMsg}`),
    [capX.name]: Yup.string().required(`${capX.requiredErrorMsg}`),
    [repairs.name]: Yup.string().required(`${repairs.requiredErrorMsg}`),
    [insurance.name]: Yup.string().required(`${insurance.requiredErrorMsg}`),
    [tax.name]: Yup.string().required(`${tax.requiredErrorMsg}`),
    [hoa.name]: Yup.string().required(`${hoa.requiredErrorMsg}`),
    [rentalIncome.name]: Yup.string().required(
      `${rentalIncome.requiredErrorMsg}`
    ),
  }),

  Yup.object().shape({
    [downPay.name]: Yup.string().required(`${downPay.requiredErrorMsg}`),
    [closing.name]: Yup.string().required(`${closing.requiredErrorMsg}`),
    [rehab.name]: Yup.string().required(`${rehab.requiredErrorMsg}`),
  }),
];
