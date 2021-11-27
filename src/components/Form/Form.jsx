import React from "react";
import Paragraph from "../TextElements/Paragraph";
import "./form.css";
import { useFormik } from "formik";
import { Formik, Field } from "formik";

export default function Form() {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      tel: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      payment: "",
    },
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
        </div>
        <div className="form__email">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
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
