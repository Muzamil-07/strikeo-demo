import { Rating, Table, Flowbite } from "flowbite-react";
import { useGetAllReviewedProductsQuery } from "../../../services/nodeApi";
import { ClipLoader } from "react-spinners";
import moment from "moment";

const theme = {
  table: {
    root: {
      base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
      shadow:
        "absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
      wrapper: "relative",
    },
    body: {
      base: "group/body",
      cell: {
        base: "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4",
      },
    },
    head: {
      base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
      cell: {
        base: "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 dark:bg-gray-700 px-6 py-3",
      },
    },
    row: {
      base: "group/row",
      hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
      striped:
        "even:bg-gray-50 odd:bg-gradient-to-r odd:from-teal-200 odd:to-lime-200",
    },
  },
};

export default function History() {
  const { data, isLoading: isGetReviewedProdsLoading } =
    useGetAllReviewedProductsQuery();
  if (isGetReviewedProdsLoading)
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader size={40} color="white" />
      </div>
    );
  return (
    <>
      <div className="max-h-[60vh] relative overflow-x-auto border shadow-md sm:rounded-lg">
        <Flowbite theme={{ theme }}></Flowbite>
        <Table hoverable striped>
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
              Comment
            </Table.HeadCell>
            <Table.HeadCell align="center" className="text-sm">
              Rating
            </Table.HeadCell>
            <Table.HeadCell align="center" className="text-sm">
              Purchased on
            </Table.HeadCell>
          </Table.Head>
          {!data.length ? (
            <Table.Body>
              <Table.Row>
                <Table.Cell colSpan={12} align="center">
                  <p className="text-black">Nothing to show here!</p>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ) : (
            <Table.Body className="divide-y">
              {data.map((el) => {
                const starElements = Array.from({ length: 5 }, (_, index) => (
                  <Rating.Star key={index} filled={index < el.rating} />
                ));
                return (
                  <Table.Row
                    key={el.id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell align="center">
                      {el.order.orderNumber}
                    </Table.Cell>
                    <Table.Cell align="center">
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
                      {el.product.name} by {el.product.brand}
                    </Table.Cell>
                    <Table.Cell align="center">{el.description}</Table.Cell>
                    <Table.Cell
                      align="center"
                      className="flex justify-center pt-7"
                    >
                      <Rating>{starElements}</Rating>
                    </Table.Cell>
                    <Table.Cell align="center">
                      {moment(el.reviewedDate).format("DD-MM-YYYY")}
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          )}
        </Table>
      </div>
    </>
  );
}
