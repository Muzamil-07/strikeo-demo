/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import * as yup from "yup";

const addSaleSchema = yup.object({
  from: yup.string().required("From date is mandatory"),
  to: yup.string().required("To date is mandatory"),
});
export default function AddSaleDialog({ open, setOpen }) {
  const formik = useFormik({
    validationSchema: addSaleSchema,
    initialValues: {
      from: "",
      to: "",
    },
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      //
    },
  });
  return (
    <>
      {open && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <p
                        className="text-lg font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Add Sale
                      </p>
                      <small>
                        Please select the range of which you want to add sale
                      </small>
                      <div className="mt-5">
                        <div className="">
                          <div>
                            <small>From</small>
                          </div>
                          <input
                            required
                            type="date"
                            name="from"
                            value={formik.values.from || ""}
                            onChange={formik.handleChange}
                            style={{ width: "130%" }}
                            className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3"
                          />
                          {formik.touched.from && formik.errors.from && (
                            <div className="text-red-700">
                              <small> {formik.errors.from}</small>
                            </div>
                          )}
                        </div>
                        <div className="mt-4">
                          <div>
                            <small>To</small>
                          </div>
                          <input
                            required
                            type="date"
                            name="to"
                            value={formik.values.to || ""}
                            onChange={formik.handleChange}
                            style={{ width: "130%" }}
                            className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3"
                          />
                          {formik.touched.to && formik.errors.to && (
                            <div className="text-red-700">
                              <small>{formik.errors.to}</small>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 pb-6">
                  <button
                    type="button"
                    onClick={formik.handleSubmit}
                    className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      formik.resetForm();
                    }}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
