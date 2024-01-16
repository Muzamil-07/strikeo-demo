/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Label, Modal, Rating, Textarea } from "flowbite-react";
import { toast } from "react-toastify";
import { useAddReviewMutation } from "../../../services/nodeApi";

const validationSchema = Yup.object().shape({
  comment: Yup.string().required("Comment is required"),
  rating: Yup.number()
    .required("Rating is required")
    .min(1, "Select rating")
    .max(5, "Rating must be at most 5"),
});

export default function AddReviewDialog({ open, setOpen, reviewBody }) {
  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation();
  const formik = useFormik({
    initialValues: {
      comment: "",
      rating: 0,
    },
    validationSchema,
    onSubmit: async (values) => {
      const payload = {
        id: reviewBody.id,
        body: {
          rating: values.rating,
          description: values.comment,
          orderNumber: reviewBody.orderNumber,
        },
      };
      const res = await addReview(payload);
      if (res.data) {
        toast.error(`Product ${reviewBody.name} reviewed successfully!`);
      } else {
        toast.error("Error Occured!");
      }
      setOpen(false);
      formik.resetForm();
    },
  });
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Rating.Star
          key={i}
          filled={i <= formik.values.rating}
          onClick={() => formik.setFieldValue("rating", i)}
          className="cursor-pointer"
        />
      );
    }
    return stars;
  };
  return (
    <Modal show={open} size="lg" popup onClose={() => setOpen(false)}>
      <Modal.Header />
      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add your Review here
            </h3>
            <div className="max-w-md">
              <div className="mb-2">
                <Label htmlFor="comment" value="Comment" />
              </div>
              <Textarea
                className="p-2"
                id="comment"
                name="comment"
                placeholder="Write your review here..."
                rows={4}
                onChange={formik.handleChange}
                value={formik.values.comment}
              />
              {formik.touched.comment && formik.errors.comment && (
                <small className="text-red-700">{formik.errors.comment}</small>
              )}
            </div>
            <div>
              <div className="mb-2">
                <Label htmlFor="rating" value="Rating" />
              </div>
              <Rating>{renderStars()}</Rating>
              {formik.touched.rating && formik.errors.rating && (
                <small className="text-red-700">{formik.errors.rating}</small>
              )}
            </div>
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                onClick={() => {
                  setOpen(false);
                  formik.resetForm();
                }}
                color="failure"
              >
                Cancel
              </Button>
              <Button
                color="dark"
                type="submit"
                isProcessing={isAddReviewLoading}
                disabled={isAddReviewLoading}
              >
                Add
              </Button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
