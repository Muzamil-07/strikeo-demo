import { useState } from "react";
import moment from "moment";
import { Table, Button } from "flowbite-react";
import { ClipLoader } from "react-spinners";
import AddReviewDialog from "./AddReviewDialog";
import { useGetProductsToReviewQuery } from "../../../services/nodeApi";

export default function ToReview() {
  const [open, setOpen] = useState(false);
  const [reviewBody, setReviewBody] = useState(null);
  const { data, isLoading: isGetProductsToReviewLoading } =
    useGetProductsToReviewQuery();
  if (isGetProductsToReviewLoading)
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader size={40} color="white" />
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
      <div className="max-h-[60vh] relative overflow-x-auto border shadow-md sm:rounded-lg">
        <Table striped hoverable>
          <Table.Head>
            <Table.HeadCell className="text-sm" align="center">
              Order no.
            </Table.HeadCell>
            <Table.HeadCell className="text-sm" align="center">
              Image
            </Table.HeadCell>
            <Table.HeadCell className="text-sm" align="center">
              Product
            </Table.HeadCell>
            <Table.HeadCell align="center" className="text-sm">
              Description
            </Table.HeadCell>
            <Table.HeadCell align="center" className="text-sm">
              Purchased on
            </Table.HeadCell>
            <Table.HeadCell align="center" className="text-sm">
              Action
            </Table.HeadCell>
          </Table.Head>
          {!data.length ? (
            <Table.Body>
              <Table.Row>
                <Table.Cell colSpan={12} align="center">
                  <p className="text-black">No Products to Review!</p>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ) : (
            <Table.Body className="divide-y">
              {data.map((el) => (
                <Table.Row
                  key={el.orderNumber}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell align="center" className="">
                    {el.orderNumber}
                  </Table.Cell>
                  <Table.Cell align="center" className="">
                    <div className="w-20 h-12">
                      <img
                        src="/apple-watch.png"
                        className="w-full h-full"
                        alt=""
                      />
                    </div>
                  </Table.Cell>
                  <Table.Cell
                    align="center"
                    className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                  >
                    <div>
                      {el.product.name} by {el.product.brand}
                    </div>
                  </Table.Cell>
                  <Table.Cell align="center">
                    {el.product.description}
                  </Table.Cell>
                  <Table.Cell align="center">
                    {moment(el.product.createdAt).format("DD-MM-YYYY")}
                  </Table.Cell>
                  <Table.Cell align="center">
                    <Button
                      type="button"
                      size="sm"
                      onClick={() => {
                        setOpen(true);
                        setReviewBody({
                          id: el.product._id,
                          orderNumber: el.orderNumber,
                          name: el.product.name,
                        });
                      }}
                      pill
                      color="dark"
                    >
                      Add a Review
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          )}
        </Table>
      </div>
    </>
  );
}
