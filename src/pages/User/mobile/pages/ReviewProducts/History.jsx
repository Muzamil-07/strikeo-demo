import { Rating } from "flowbite-react";
import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import moment from "moment";
import { useGetAllReviewedProductsQuery } from "../../../../../services/nodeApi";

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
    label: "Product",
    width: "15%",
  },
  {
    id: "comment",
    label: "Comment",
    width: "20%",
  },
  {
    id: "rating",
    label: "Rating",
    width: "20%",
  },
  {
    id: "purchasedOn",
    label: "Purchased On",
    width: "10%",
  },
];

export default function History() {
  const { data, isLoading: isGetReviewedProdsLoading } =
    useGetAllReviewedProductsQuery();
  if (isGetReviewedProdsLoading)
    return (
      <div className="flex justify-center items-center h-full">
        <CircularProgress size={40} />
      </div>
    );
  return (
    <>
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
                const starElements = Array.from({ length: 5 }, (_, index) => (
                  <Rating.Star key={index} filled={index < el.rating} />
                ));
                return (
                  <TableRow key={el.id}>
                    <TableCell align="center" width="15%">
                      <Typography fontSize={12}>
                        {el.order.orderNumber}
                      </Typography>
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
                      <Typography fontSize={12}>{el.description}</Typography>
                    </TableCell>
                    <TableCell width="20%" align="center">
                      <Rating>{starElements}</Rating>
                    </TableCell>
                    <TableCell align="center" width="10%">
                      <Typography fontSize={12}>
                        {moment(el.reviewedDate).format("DD-MM-YYYY")}
                      </Typography>
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
