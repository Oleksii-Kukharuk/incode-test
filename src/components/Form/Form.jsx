import React from 'react';
import { Formik } from 'formik';

export default function IssuesForm() {
  return (
    <Formik
      initialValues={{
        url: '',
      }}
      isSubmitting={true}
      onSubmit={async (values, actions) => {
        console.log(values);
        // await dispatch(authOperation.logIn({ email, password }));
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.url}
            name="url"
            placeholder="Enter repo URL"
          />
          {props.errors.url && <div id="feedback">{props.errors.name}</div>}
          <button type="submit">Load issues</button>
        </form>
      )}
    </Formik>
  );
}
