import { Schema, model, models } from 'mongoose';

const RegisterFormSchema = new Schema(
  {
    companyName: {
      type: String
    },
    vatNumber: {
      type: Number
    },
    ckNumber: {
      type: String
    },
    userName: {
      type: String
    },
    passWord: {
      type: String
    },
    email: {
      type: String
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    phoneNumber: {
      type: String
    },
    natureOfBussiness: {
      type: String
    },
    supplierOption: {
      type: String
    },
    ifOther: {
      type: String
    },
    webLink: {
      type: String
    },
    posInComp: {
      type: String
    },
    streetOne: {
      type: String
    },
    streetTwo: {
      type: String
    },
    suburb: {
      type: String
    },
    city: {
      type: String
    },
    zipCode: {
      type: String
    },
    country: {
      type: String
    },
    salesRep: {
      type: String
    },
    termsAgree: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true,
  }
);

const Form = models.RegisterUser || model('RegisterUser', RegisterFormSchema);

export default Form;