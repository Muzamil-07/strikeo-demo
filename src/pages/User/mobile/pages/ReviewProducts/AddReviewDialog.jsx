/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import * as Yup from "yup";
import { Label, Rating, Textarea } from "flowbite-react";
import { toast } from "react-toastify";
import { useAddReviewMutation } from "../../../../../services/nodeApi";
import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { DividerDot, StyledDivider } from "../../theme/themes";

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
        toast.success(`Product ${reviewBody.name} reviewed successfully!`);
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
    <>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>
          <Stack pt={1}>
            <Typography
              sx={{
                textAlign: "center",
                letterSpacing: "4px",
                fontWeight: 400,
              }}
            >
              Add your review here
            </Typography>
            <StyledDivider>
              <DividerDot />
            </StyledDivider>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-6">
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
                  <small className="text-red-700">
                    {formik.errors.comment}
                  </small>
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
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
              formik.resetForm();
            }}
            color="error"
            sx={{ fontSize: 11 }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isAddReviewLoading}
            sx={{ fontSize: 11 }}
            onClick={formik.handleSubmit}
          >
            Add {isAddReviewLoading && <CircularProgress size={15} />}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
