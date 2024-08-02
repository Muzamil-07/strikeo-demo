import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import http from "../../../api";
// import validator from "validator";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { BsArrowRight } from "react-icons/bs";
// import countryList from "country-list";
// import { environment } from "../../../constants";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Stepper from "../../../components/Stepper";
import { useDebounce } from "use-debounce";
import VendorTabs from "./VendorTabs";
import VendorsTable from "./VendorsTable";
import NewVendor from "./NewVendor";

const Vendors = () => {
  const vendorBody = {
    name: "",
    email: "",
    password: "",
    profileImage: "",
    file: null,
    company: {
      name: "",
      description: "",
      country: "",
      address: "",
      contact: {
        phone: "",
        email: "",
      },
      website: "",
      logo: "",
      file: null,
    },
  };
  const [view, setView] = useState("list");
  const [selectedVendor, setSelectedVendor] = useState(vendorBody);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState({});

  const [searchText, setSearchText] = useState("");
  const [searchedVendor] = useDebounce(searchText, 1000);

  const [isLoading, setIsLoading] = useState(false);
  const [isPaginationLoading, setIsPaginationLoading] = useState(false);

  const getVendors = async (page) => {
    setIsPaginationLoading(true);
    try {
      const res = await http
        .get(
          "/vendor?page=" +
            (page ? page : "1") +
            (searchedVendor ? "&search=" + searchedVendor : "")
        )
        .finally(() => setIsPaginationLoading(false));
      setCurrentPage(res.data.data.currentPage);
      setPaginatedData(res.data.data);
    } catch (error) {
      //
    }
  };

  const updateView = (view, vendor) => {
    setView(view);
    if (view === "list") {
      getVendors();
      setSelectedVendor(vendorBody);
    } else if (view === "single-vendor" && vendor) {
      setSelectedVendor(vendor);
    }
  };
  const handlePageChange = (page) => {
    if (page === currentPage) return;
    getVendors(page);
  };

  const getPageData = async () => {
    setIsLoading(true);
    await Promise.all([getVendors(currentPage)])
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    getVendors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedVendor]);
  useEffect(() => {
    getPageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="flex-grow px-5 md:px-16 py-4">
        {isLoading || !paginatedData.vendors ? (
          <div className="flex justify-center items-center h-full">
            <ClipLoader size={60} color="#201F20" />
          </div>
        ) : view === "list" ? (
          <>
            <caption className="pt-4 pb-4 text-xl font-semibold text-left text-black-900 bg-white dark:text-white dark:bg-gray-800 flex justify-between">
              <div className="flex justify-between w-full">
                <div>
                  Manage Vendors
                  <p className="mt-1 text-sm font-normal text-black-500 dark:text-black-400">
                    Effortlessly control vendors in one central hub.
                  </p>
                </div>
                <button
                  className="text-white bg-primary text-sm px-3 py-1 rounded-md h-12"
                  onClick={() => updateView("add-vendor")}
                >
                  Add New Vendor
                </button>
              </div>
            </caption>
            <VendorsTable
              paginatedData={paginatedData}
              searchText={searchText}
              setSearchText={setSearchText}
              getVendors={getVendors}
              currentPage={currentPage}
              updateView={updateView}
              setCurrentPage={setCurrentPage}
              handlePageChange={handlePageChange}
              isPaginationLoading={isPaginationLoading}
            />
          </>
        ) : view === "add-vendor" ? (
          <div className="py-4">
            <div className="grid grid-cols-1">
              <div className="flex items-center gap-4">
                <HiArrowNarrowLeft
                  className="text-black-500 cursor-pointer hover:text-black-900 dark:text-black-400 dark:hover:text-white text-4xl pl-2"
                  onClick={() => updateView("list")}
                />
                GO BACK
              </div>
            </div>
            <NewVendor setView={setView} getVendors={getVendors} />
          </div>
        ) : view === "single-vendor" ? (
          <div className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <HiArrowNarrowLeft
                  className="text-black-500 cursor-pointer hover:text-black-900 dark:text-black-400 dark:hover:text-white text-4xl pl-2"
                  onClick={() => updateView("list")}
                />
                {`${selectedVendor?.firstName} ${selectedVendor?.lastName}`}
                {selectedVendor?.company?.name &&
                  ` (${selectedVendor?.company?.name || ""})`}
              </div>
            </div>
            <VendorTabs
              selectedVendor={selectedVendor}
              setSelectedVendor={setSelectedVendor}
              getVendors={getVendors}
              currentPage={currentPage}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Vendors;
