import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import withAuth from "../../utils/axiosWithAuth";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { FormStyled } from './FormStyle';
import { register } from "../../state/actions/authenticationActions";



const signUpForm = ({ userReducer, isSubmitting, errors, touched }) => {
  return (
    <FormStyled>
      <h1>Sign Up Here</h1>
      <Form className="signup-form">
        <div>
          <Field
            className="input"
            type="text"
            name="name"
            placeholder="Full Name"
          />
          {errors.name && touched.name && <div>{errors.name}</div>}
        </div>
        <div>
          <Field
            className="input"
            type="text"
            name="user_name"
            placeholder="Username"
          />
          {errors.user_name && touched.user_name && (
            <div>{errors.user_name}</div>
          )}
        </div>
        <div>
          <Field
            className="input"
            type="email"
            name="email"
            placeholder="Email"
          />
          {errors.email && touched.email && <div>{errors.email}</div>}
        </div>
        <div>
          <Field
            className="input"
            type="password"
            name="password"
            placeholder="Password"
          />
          {errors.password && touched.password && <div>{errors.password}</div>}
        </div>
        <div>
          <Field
            className="input"
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          {errors.confirm_password && touched.confirm_password && (
            <div>{errors.confirm_password}</div>
          )}
        </div>
        <div>
          <button disabled={isSubmitting} type="submit">
            Sign Up
          </button>
        </div>
        <p>Already have an account?</p>
        <Link to="/login">Sign in here</Link>
      </Form>
    </FormStyled>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues({ name, user_name, email, password, confirm_password }) {
    return {
      name: name || "",
      user_name: user_name || "",
      email: email || "",
      password: password || "",
      confirm_password: confirm_password || "",
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter full name"),
    user_name: Yup.string().required("Please enter a username"),
    email: Yup.string()
      .required("Please enter your email")
      .email("Please enter a valid email"),
    password: Yup.string()
      .required("Please enter your password")
      .min(6, "must be at least 6 characters"),
    confirm_password: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password"), null], "Your passwords do not match"),
  }),

  handleSubmit(values, { props, setSubmitting, resetForm }) {
    resetForm();
    setSubmitting(false);

    props.register(props, values);
  },
})(signUpForm);

export default connect((state) => state, { register })(FormikSignUpForm);
