import React from "react";
import Paragraph from "../TextElements/Paragraph";
import "./form.css";

export default function Form(props) {
  const { formik } = props;

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
            placeholder="Name"
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
            placeholder="example@mail.com"
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
            placeholder="+49151163303"
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
            placeholder="Am Felde 58"
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
            placeholder="10178"
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
            placeholder="Berlin"
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
            placeholder="Germany"
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
    </form>
  );
}
