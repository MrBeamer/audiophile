// import React from "react";
// import Paragraph from "../TextElements/Paragraph";
// import "./form.css";
// import { Formik } from "formik";
// import { useFormik } from "formik";

// export default function Form() {
//   return (
//     <>
//       <Formik
//         initialValues={{
//           email: "",
//           name: "",
//           tel: "",
//           address: "",
//           zipCode: "",
//           city: "",
//           country: "",
//           payment: "",
//         }}
//         validate={(values) => {
//           const errors = {};
//           if (!values.email) {
//             errors.email = "Required";
//           } else if (
//             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//           ) {
//             errors.email = "Wrong format";
//           }
//           return errors;
//         }}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//           /* and other goodies */
//         }) => (
//           <form className="form" onSubmit={handleSubmit}>
//             <h3 className="form__title">Checkout</h3>

//             <div className="form__billing">
//               <p className="form__subtitle">Billing Details</p>
//               <div className="form__name">
//                 <label className="form__label" for="name">
//                   Name
//                 </label>
//                 <input
//                   className="form__input"
//                   type="name"
//                   name="name"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.name}
//                 />
//               </div>
//               <div className="form__email">
//                 <label className="form__label" for="email">
//                   Email
//                 </label>
//                 <input
//                   className="form__input"
//                   type="email"
//                   name="email"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.email}
//                 />
//                 {errors.email && touched.email && errors.email}
//               </div>
//               <div className="form__phone">
//                 <label className="form__label" for="tel">
//                   Phone Number
//                 </label>
//                 <input
//                   className="form__input"
//                   type="tel"
//                   name="tel"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.password}
//                 />
//                 {errors.password && touched.password && errors.password}
//               </div>
//             </div>

//             <div className="form__shipping-info">
//               <p className="form__subtitle">Shipping Info</p>
//               <div className="form__address">
//                 <label className="form__label" for="address">
//                   Address
//                 </label>
//                 <input
//                   className="form__input"
//                   type="address"
//                   name="address"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.password}
//                 />
//               </div>
//               <div className="form__zipcode">
//                 <label className="form__label" for="zipcode">
//                   ZIP Code
//                 </label>
//                 <input
//                   className="form__input"
//                   type="zipcode"
//                   name="zipcode"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.password}
//                 />
//               </div>
//               <div className="form__city">
//                 <label className="form__label" for="city">
//                   City
//                 </label>
//                 <input
//                   className="form__input"
//                   type="city"
//                   name="city"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.password}
//                 />
//               </div>
//               <div className="form__country">
//                 <label className="form__label" for="country">
//                   Country
//                 </label>
//                 <input
//                   className="form__input"
//                   type="country"
//                   name="country"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.password}
//                 />
//               </div>
//             </div>
//             <div className="form__payment">
//               <p className="form__subtitle">Payment Method</p>
//               <div className="form__payment-option">
//                 <input
//                   className="form__radio"
//                   type="radio"
//                   name="payment"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.password}
//                 />
//                 <label className="form__label" for="payment">
//                   Stripe
//                 </label>
//               </div>
//               <div className="form__payment-option">
//                 <input
//                   className="form__radio"
//                   type="radio"
//                   name="payment"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.password}
//                 />
//                 <label className="form__label" for="payment">
//                   Cash on Delivery
//                 </label>
//               </div>
//             </div>
//             <div className="form__cash-info">
//               <img src="/images/pay.svg" alt="hands and money" />
//               <Paragraph margin="0">
//                 The ‘Cash on Delivery’ option enables you to pay in cash when
//                 our delivery courier arrives at your residence. Just make sure
//                 your address is correct so that your order will not be
//                 cancelled.
//               </Paragraph>
//             </div>
//             {/* <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button> */}
//           </form>
//         )}
//       </Formik>
//     </>
//   );
// }
