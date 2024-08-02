import { useState } from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import ClipLoader from "react-spinners/ClipLoader";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MdOutlineSell } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import TopSellingProductCard from "./TopSellingProductCard";
import RecentOrdersTable from "./RecentOrdersTable";
import http from "./../../../api";
import { useEffect } from "react";
import format from "./../../../utils/format";

export default function VendorInsights() {
  const [insights, setInsights] = useState(null);
  const [isInsightsLoading, setIsInsightsLoading] = useState(false);
  const [dateRange, setDateRange] = useState({
    from: dayjs(new Date()).subtract(1, "week").format("YYYY-MM-DD"),
    to: dayjs(new Date()).format("YYYY-MM-DD"),
  });
  const getInsights = async () => {
    if (!dateRange.from || !dateRange.to) return;
    setIsInsightsLoading(true);
    http
      .get(`/order/vendor/insights?from=${dateRange.from}&to=${dateRange.to}`)
      .then(res => {
        setInsights(res.data.data);
        setIsInsightsLoading(false);
      })
      .catch(() => {
        //
      });
  };
  useEffect(() => {
    getInsights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateRange]);
  return (
    <>
      <div className="flex-grow py-4">
        {!insights || isInsightsLoading ? (
          <div className="flex justify-center items-center h-full">
            <ClipLoader size={60} color="#201F20" />
          </div>
        ) : (
          <div className="flex-grow px-5 md:px-16 py-4">
            <div className="flex justify-between">
              <p className="py-5 text-xl font-semibold text-left text-black-900 bg-white dark:text-white dark:bg-gray-800 flex justify-between">
                <div className="flex justify-between w-full">
                  <div>
                    Insights
                    <p className="mt-1 text-sm font-normal text-black-500 dark:text-black-400">
                      Get all your insights at one place
                    </p>
                  </div>
                </div>
              </p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="pt-10 flex gap-4">
                  <div>
                    <DatePicker
                      label="From"
                      name="from"
                      slotProps={{
                        textField: {
                          size: "small",
                          onChange: e => {
                            e.preventDefault();
                          },
                        },
                      }}
                      onChange={newVal => {
                        setDateRange(prev => {
                          return { ...prev, from: newVal };
                        });
                      }}
                      value={dayjs(dateRange.from)}
                      maxDate={dayjs(dateRange.to).subtract(1, "day")}
                    />
                  </div>
                  <div>
                    <DatePicker
                      label="To"
                      name="to"
                      minDate={dayjs(dateRange.from)}
                      value={dayjs(dateRange.to)}
                      disableFuture
                      slotProps={{
                        textField: {
                          size: "small",
                          onChange: e => {
                            e.preventDefault();
                          },
                        },
                      }}
                      onChange={newVal =>
                        setDateRange(prev => {
                          return { ...prev, to: newVal };
                        })
                      }
                    />
                  </div>
                </div>
              </LocalizationProvider>
            </div>
            <div className="flex gap-8 mt-5">
              <div className="w-1/4 rounded overflow-hidden shadow-lg border-solid border-2 border-gray-100">
                <div className="py-7">
                  <div className="flex justify-around">
                    <div className="pt-3">
                      <BsFillBagCheckFill className="text-xl" size={"2rem"} />
                    </div>
                    <div>
                      <div>
                        <span className="text-2xl font-semibold">{insights.totalOrders}+</span>
                      </div>
                      <div>
                        <span>Total Orders</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/4 rounded overflow-hidden shadow-lg  border-solid border-2 border-gray-100">
                <div className="py-6">
                  <div className="flex justify-around">
                    <div className="pt-3">
                      <FaMoneyBillWave className="text-xl" size={"2rem"} />
                    </div>
                    <div>
                      <div>
                        <span className="text-2xl font-semibold">
                          {format.formatMoney(insights.totalRevenue)}
                        </span>
                      </div>
                      <div>
                        <span>Total Revenue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/4 rounded overflow-hidden shadow-lg  border-solid border-2 border-gray-100">
                <div className="py-6">
                  <div className="flex justify-around">
                    <div className="pt-3">
                      <MdOutlineSell className=" text-xl" size={"2rem"} />
                    </div>
                    <div>
                      <div>
                        <span className="text-2xl font-semibold">{insights?.totalItemsSold}+</span>
                      </div>
                      <div>
                        <span>Items Sold</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/4 rounded overflow-hidden shadow-lg  border-solid border-2 border-gray-100">
                <div className="py-6">
                  <div className="flex justify-around">
                    <div className="pt-3">
                      <FaPeopleGroup className="text-xl" size={"2rem"} />
                    </div>
                    <div>
                      <div>
                        <span className="text-2xl font-semibold">{insights.customerCount}+</span>
                      </div>
                      <div>
                        <span>Customers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="flex gap-4">
                <div className="bg-gray-100 py-5 rounded-md" style={{ width: "60%" }}>
                  <LineChart lineChartData={insights.dateWiseOrderCount} />
                </div>
                <div className="bg-gray-100 py-5 rounded-md" style={{ width: "40%" }}>
                  <PieChart pieChartData={insights.statusCounts} />
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-5">
              <div className="bg-gray-100 rounded-md" style={{ width: "60%" }}>
                <div className="py-5 pl-8">
                  <p className="font-medium text-lg">Recent Order</p>
                </div>
                <RecentOrdersTable data={insights.recentOrders} />
              </div>
              <div className="bg-gray-100 pl-8 py-5 pr-8 rounded-md" style={{ width: "40%" }}>
                <p className="text-lg font-medium mb-5">Top Selling Products</p>
                {insights.hotSellingProducts.map(product => (
                  <TopSellingProductCard key={product.name} data={product} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
