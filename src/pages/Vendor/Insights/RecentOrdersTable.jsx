import moment from "moment";

/* eslint-disable react/prop-types */
export default function RecentOrdersTable({ data }) {
  const columns = [
    { id: "orderNo", title: "Order #" },
    { id: "itemsCount", title: "Items" },
    { id: "orderedDate", title: "Ordered On" },
    { id: "total", title: "Total Amount" },
  ];
  return (
    <>
      <div className="relative overflow-x-auto sm:rounded-lg px-3 pb-3">
        <table
          className="md:w-full w-[900px] text-left text-gray-500 dark:text-gray-400"
          style={{ textAlign: "center" }}
        >
          <thead style={{fontSize: 15}} className="text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((column) => (
                <th key={column.id} className="py-5">
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((el) => {
              const itemsCount = el.orders[0].items.reduce(
                (accumulator, object) => {
                  return accumulator + object.details.quantity;
                },
                0
              );
              return (
                <tr
                  key={el.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-4 py-4">{el.orderNumber}</td>
                  <td className="px-4 py-3">{itemsCount}</td>
                  <td className="px-4 py-3">
                    {moment(el.orderedAt).format("DD.MM.YYYY")}
                  </td>
                  <td className="px-4 py-3">
                    {el.orders[0].vendorBill.toLocaleString()}TK
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
