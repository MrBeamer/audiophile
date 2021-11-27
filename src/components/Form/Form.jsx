import React from "react";
import Paragraph from "../TextElements/Paragraph";
import "./form.css";
import { useFormik } from "formik";

export default function Form() {
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

  console.log(formik.values);

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h3 className="form__title">Checkout</h3>

      <div className="form__billing">
        <p className="form__subtitle">Billing Details</p>
        <div className="form__name">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            type="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div className="form__error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form__email">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className={`form__input`}
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="form__error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form__phone">
          <label className="form__label" htmlFor="tel">
            Phone Number
          </label>
          <input
            className="form__input"
            type="tel"
            name="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tel}
          />
          {formik.errors.tel ? (
            <div className="form__error">{formik.errors.tel}</div>
          ) : null}
        </div>
      </div>

      <div className="form__shipping-info">
        <p className="form__subtitle">Shipping Info</p>
        <div className="form__address">
          <label className="form__label" htmlFor="address">
            Address
          </label>
          <input
            className="form__input"
            type="address"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.errors.address ? (
            <div className="form__error">{formik.errors.address}</div>
          ) : null}
        </div>
        <div className="form__zipcode">
          <label className="form__label" htmlFor="zipcode">
            ZIP Code
          </label>
          <input
            className="form__input"
            type="zipcode"
            name="zipcode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zipcode}
          />
          {formik.errors.zipcode ? (
            <div className="form__error">{formik.errors.zipcode}</div>
          ) : null}
        </div>
        <div className="form__city">
          <label className="form__label" htmlFor="city">
            City
          </label>
          <input
            className="form__input"
            type="city"
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          {formik.errors.city ? (
            <div className="form__error">{formik.errors.city}</div>
          ) : null}
        </div>
        <div className="form__country">
          <label className="form__label" htmlFor="country">
            Country
          </label>
          <input
            className="form__input"
            type="country"
            name="country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
          />
          {formik.errors.country ? (
            <div className="form__error">{formik.errors.country}</div>
          ) : null}
        </div>
      </div>
      <div role="group" className="form__payment">
        <p className="form__subtitle">Payment Method</p>
        <div className="form__payment-option">
          <input
            className="form__radio"
            id="paymentChoice1"
            type="radio"
            name="payment"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value="credit"
          />
          <label className="form__label" htmlFor="paymentChoice1">
            Credit Card
          </label>
        </div>
        <div className="form__payment-option">
          <input
            id="paymentChoice2"
            className="form__radio"
            type="radio"
            name="payment"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value="cash"
          />
          <label className="form__label" htmlFor="paymentChoice2">
            Cash on Delivery
          </label>
        </div>
      </div>
      {formik.values.payment === "cash" && (
        <div className="form__cash-info">
          <img src="/images/pay.svg" alt="hands and money" />
          <Paragraph margin="0">
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </Paragraph>
        </div>
      )}

      {/* <button type="submit" disabled={isSubmitting}>
              Submit
            </button> */}
    </form>
  );
}
