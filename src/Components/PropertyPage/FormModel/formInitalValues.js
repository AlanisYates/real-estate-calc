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
  },
} = propertyFormModel;

export default {
  [nickName.name]: "",
  [address.name]: "",
  [link.name]: "",
  [price.name]: "",
  [mortgage.name]: "",
  [lawn.name]: "",
  [vacancy.name]: "",
  [capX.name]: "",
  [repairs.name]: "",
  [insurance.name]: "",
  [tax.name]: "",
  [hoa.name]: "",
  [rentalIncome.name]: "",
};
