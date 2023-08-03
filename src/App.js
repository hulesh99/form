import { Formik, Form, Field, ErrorMessage } from "formik";

import * as yup from "yup";

function App() {
  return (
    <div className="container-fluid">
      <Formik
        initialValues={{
          title: "",
          desc: "",
        }}
        validationSchema={yup.object({
          title: yup
            .string()
            .required("Title is required")
            .min(20, " at least 20 characters")
            .matches(
              /^(.*[A-Za-z0-9].*){10,}$/,
              "Title must contain at least 10 alphanumeric characters"
            ),
          desc: yup
            .string()
            .min(100, " at least 100 characters")
            .required("Description is required")
            .matches(
              /^(.*[A-Za-z0-9].*){30,}$/,
              "Desciption must contain at least 30 alphanumeric characters"
            ),
        })}
      >
        <Form>
          {
            <div>
              <dl>
                <dt>Title</dt>
                <dd>
                  <Field type="text" name="title"></Field>
                </dd>
                <dd className="text-danger">
                  <ErrorMessage name="title"></ErrorMessage>
                </dd>
                <dt>Description</dt>
                <dd>
                  <Field as="textarea" name="desc"></Field>
                </dd>
                <dd className="text-danger">
                  <ErrorMessage name="desc"></ErrorMessage>
                </dd>
              </dl>
              <button className="btn btn-success">Submit</button>
            </div>
          }
        </Form>
      </Formik>
    </div>
  );
}

export default App;
