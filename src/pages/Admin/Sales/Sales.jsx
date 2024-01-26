/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useDebounce } from "use-debounce";
import SalesTable from "./SalesTable";
import AdminSidebar from "../../../components/AdminSidebar";
import http from "../../../api";
import SaleTabs from "./SaleTab";

const Sales = () => {
  const [selectedSale, setSelectedSale] = useState(null);
  const [view, setView] = useState("list");
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [roles, setRoles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedSale] = useDebounce(searchText, 1000);
  const [paginatedData, setPaginatedData] = useState({});
  const updateView = (view, sale) => {
    setView(view);
    if (view === "list") {
      setSelectedSale(null);
    } else if (view === "single-user" && sale) {
      setSelectedSale(sale);
    } else if (view === "edit-user" && sale) {
      setSelectedSale({
        ...sale,
        updated: {
          ...sale,
        },
      });
    }
  };
  const getSales = (page) => {
    http
      .get(
        "/user/all?page=" +
          (page ? page : "1") +
          (searchedSale ? "&search=" + searchedSale : "")
      )
      .then((res) => {
        setCurrentPage(res.data.data.currentPage);
        setPaginatedData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getRoles = () => {
    http
      .get("/role?all=true")
      .then((res) => {
        setRoles(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getPageData = async () => {
    setIsLoading(true);
    await Promise.all([getSales(currentPage), getRoles()])
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getSales();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedSale]);

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className="w-full flex flex-col flex-grow bg-white text-gray-500"
      style={{ paddingLeft: "220px" }}
    >
      <div className="flex flex-grow">
        <AdminSidebar />
        <div className="flex-grow px-5 md:px-16 py-4">
          {isLoading || !paginatedData.users ? (
            <div className="flex justify-center items-center h-full">
              <ClipLoader size={60} color="#201F20" />
            </div>
          ) : view === "list" ? (
            <>
              <caption className="pt-4 pb-4 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 flex justify-between">
                <div className="flex justify-between w-full">
                  <div>
                    Manage Sales
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                      Effortlessly control sales in one central hub.
                    </p>
                  </div>
                </div>
              </caption>
              <SalesTable
                paginatedData={paginatedData}
                getSales={getSales}
                currentPage={currentPage}
                updateView={updateView}
                searchText={searchText}
                setSearchText={setSearchText}
              />
            </>
          ) : view === "single-user" ? (
            <div className="py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <HiArrowNarrowLeft
                    className="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-4xl pl-2"
                    onClick={() => updateView("list")}
                  />
                  12.10.2023 - 12.11.2023
                </div>
              </div>
              <div className="px-2 mt-8">
                <SaleTabs
                  getSales={getSales}
                  currentPage={currentPage}
                  setSelectedSale={setSelectedSale}
                  selectedSale={selectedSale}
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sales;
