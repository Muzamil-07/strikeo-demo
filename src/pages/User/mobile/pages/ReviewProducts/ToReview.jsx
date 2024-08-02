import { useState } from "react";
import moment from "moment";
import {
  Box,
  CircularProgress,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Table,
  Button,
} from "@mui/material";
import { useGetProductsToReviewQuery } from "../../../../../services/nodeApi";
import AddReviewDialog from "./AddReviewDialog";

const columns = [
  {
    id: "orderNo",
    label: "Order No.",
    width: "15%",
  },
  {
    id: "img",
    label: "Image",
    width: "20%",
  },
  {
    id: "product",
    width: "15%",
    label: "Product",
  },
  {
    id: "desc",
    label: "Description",
    width: "20%",
  },
  {
    id: "purchasedOn",
    label: "Purchased On",
    width: "10%",
  },
  {
    id: "action",
    label: "Action",
    width: "20%",
  },
];

export default function ToReview() {
  const [open, setOpen] = useState(false);
  const [reviewBody, setReviewBody] = useState(null);
  const { data, isLoading: isGetProductsToReviewLoading } =
    useGetProductsToReviewQuery();
  if (isGetProductsToReviewLoading)
    return (
      <div className="flex justify-center items-center h-full">
        <CircularProgress size={40} />
      </div>
    );
  return (
    <>
      {reviewBody && (
        <AddReviewDialog
          open={open}
          reviewBody={reviewBody}
          setOpen={setOpen}
        />
      )}
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center"
                  style={{
                    backgroundColor: "white",
                    width: column.width,
                  }}
                >
                  <Typography fontSize={11}>{column.label}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: "white" }}>
            {!data?.length ? (
              <TableRow>
                <TableCell colSpan={12} align="center">
                  <Typography fontSize={12}>Nothing to show here!</Typography>
                </TableCell>
              </TableRow>
            ) : (
              data?.map((el) => {
                return (
                  <TableRow key={el.id}>
                    <TableCell align="center" width="15%">
                      <Typography fontSize={12}>{el.orderNumber}</Typography>
                    </TableCell>
                    <TableCell align="center" width="20%">
                      <Box width="4rem" height="3rem">
                        <img
                          src="/apple-watch.png"
                          alt=""
                          style={{ width: "100%", height: "100%" }}
                        />
                      </Box>
                    </TableCell>
                    <TableCell width="15%" align="center">
                      <Typography fontSize={12}>
                        {el.product.name} by {el.product.brand}
                      </Typography>
                    </TableCell>
                    <TableCell width="20%" align="center">
                      <Typography fontSize={12}>
                        {el.product.description}
                      </Typography>
                    </TableCell>
                    <TableCell align="center" width="10%">
                      <Typography fontSize={12}>
                        {moment(el.product.createdAt).format("DD-MM-YYYY")}
                      </Typography>
                    </TableCell>
                    <TableCell align="center" width="20%">
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ fontSize: 9 }}
                        onClick={() => {
                          setOpen(true);
                          setReviewBody({
                            id: el.product._id,
                            orderNumber: el.orderNumber,
                            name: el.product.name,
                          });
                        }}
                      >
                        Review
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
