import React from "react";
import Summary from "../components/Summary/Summary";
import Form from "../components/Form/Form";
import { useFormik } from "formik";

export default function CheckoutPage(props) {
  const { cart } = props;

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }

    if (!values.tel) {
      errors.tel = "Required";
    } else if (!/^\d{9,16}/g.test(values.tel)) {
      errors.tel = "Invalid phone number";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.address) {
      errors.address = "Required";
    } else if (values.address.length < 10) {
      errors.address = "Invalid address";
    }

    if (!values.zipcode) {
      errors.zipcode = "Required";
    } else if (!/^\d{5}$/.test(values.zipcode)) {
      errors.zipcode = "Invalid zipcode";
    }

    if (!values.city) {
      errors.city = "Required";
    } else if (!/^[A-Za-z\s]{4,26}$/.test(values.city)) {
      errors.city = "Invalid city";
    }

    if (!values.country) {
      errors.country = "Required";
    } else if (!/^[A-Za-z\s]{4,56}$/.test(values.country)) {
      errors.country = "Invalid country";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      tel: "",
      address: "",
      zipcode: "",
      city: "",
      country: "",
      payment: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="container--checkout">
      <div className="checkout">
        <Form formik={formik} />
        <Summary cart={cart} formik={formik} />
      </div>
    </div>
  );
}
