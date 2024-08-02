/* eslint-disable react/prop-types */
import { toast } from "react-toastify";
import http from "../../../api";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableContainer,
  Table,
  TableBody,
  Typography,
} from "@mui/material";
import { StyledTableHeadCell } from "../../../themes/themes";
import { useMemo, useState } from "react";
import { TablePagination } from "../../../components/TablePagination/TablePagination";
const headCells = [
  { id: "name", lbl: "Name", is_sortable: false },
  { id: "email", lbl: "Email", is_sortable: false },
  { id: "company", lbl: "Company", is_sortable: true },
  { id: "status", lbl: "Status", is_sortable: false },
  { id: "action", lbl: "Action", is_sortable: false },
];

function EnhancedTableHead({ sortConfig, onClick }) {
  const handleSortClick = (key) => {
    onClick(key);
  };

  const getSortDirection = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction;
    }
    return "asc";
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <StyledTableHeadCell key={headCell.id}>
            {headCell.is_sortable ? (
              <TableSortLabel
                active={sortConfig.key === headCell.id}
                direction={getSortDirection(headCell.id)}
                onClick={() => handleSortClick(headCell.id)}
              >
                {headCell.lbl}
              </TableSortLabel>
            ) : (
              <div>{headCell.lbl}</div>
            )}
          </StyledTableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function VendorsTable({
  paginatedData,
  searchText,
  setSearchText,
  getVendors,
  currentPage,
  updateView,
  setCurrentPage,
  handlePageChange,
  isPaginationLoading,
}) {
  const [sortConfig, sortConfigSet] = useState({
    key: "company",
    direction: "asc",
  });
  const sortedData = useMemo(() => {
    return paginatedData.vendors?.sort((a, b) => {
      if (sortConfig.key === "company") {
        if (sortConfig.direction === "asc") {
          return a.company?.name.localeCompare(b.company?.name);
        } else {
          return b.company?.name.localeCompare(a.company?.name);
        }
      }
      return 0;
    });
  }, [paginatedData, sortConfig]);
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    sortConfigSet({ key, direction });
  };
  const toggleVendorActivaition = (user) => {
    if (user?.isActive) {
      blockUser(user?.id);
    } else {
      unblockUser(user?.id);
    }
  };
  const blockUser = (id) => {
    http
      .put("vendor/block/" + id)
      .then(() => {
        toast.success("User blocked successfully.");
        getVendors(currentPage);
      })
      .catch(() => {
        toast.error("Something went wrong.");
      });
  };

  const unblockUser = (id) => {
    http
      .put("vendor/unblock/" + id)
      .then(() => {
        toast.success("User unblocked successfully.");
        getVendors(currentPage);
      })
      .catch(() => {
        toast.error("Something went wrong.");
      });
  };
  return (
    <>
      <div className="mb-5">
        <h3 className="text-primary text-lg font-semibold">Search Filters</h3>
        <p className="text-sm mb-2">
          With the help of filters, you can easily find vendors.
        </p>
        <div>
          <label
            htmlFor="default-search"
            className="text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              id="default-search"
              className="block px-4 py-2 ps-10 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search vendor..."
            />
          </div>
        </div>
      </div>
      {isPaginationLoading && (
        <Typography fontSize={11} mb={1}>
          Loading...
        </Typography>
      )}
      <div className="max-h-[83%] relative overflow-x-auto border shadow-md sm:rounded-lg">
        <TableContainer className="h-full w-full">
          <Table>
            {paginatedData.vendors?.length === 0 ? (
              <thead className="text-md text-gray-700 uppercase bg-gray-50 flex justify-center p-3">
                <tr>
                  <th>No Vendor available to show.</th>
                </tr>
              </thead>
            ) : (
              <>
                {paginatedData.vendors && (
                  <EnhancedTableHead
                    sortConfig={sortConfig}
                    onClick={handleSort}
                  />
                )}
                <TableBody>
                  {paginatedData.vendors &&
                    sortedData.map((vendor, i) => (
                      <TableRow
                        key={i}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <TableCell>
                          <div className="flex items-center gap-x-2">
                            <div>
                              {vendor.firstName + " " + vendor.lastName}
                            </div>
                            <div>
                              {vendor?.isVerified ? (
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                  Verified
                                </span>
                              ) : (
                                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                                  Unverified
                                </span>
                              )}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{vendor.contact.email}</TableCell>
                        <TableCell>{vendor.company?.name}</TableCell>
                        <TableCell>
                          <span
                            className={`${
                              vendor?.company ? "bg-green-100" : "bg-yellow-100"
                            } text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded-full`}
                          >
                            {vendor?.company ? "Completed" : "Draft"}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                onChange={() => toggleVendorActivaition(vendor)}
                                checked={vendor?.isActive}
                                className="sr-only peer"
                              />
                              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                            <MdKeyboardArrowRight
                              className="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-2xl pl-2"
                              onClick={() =>
                                updateView("single-vendor", vendor)
                              }
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </>
            )}
          </Table>
        </TableContainer>
      </div>

      <TablePagination
        handlePageChange={handlePageChange}
        totalItems={paginatedData.totalVendors || 0}
        itemsPerPage={8}
        currentPage={currentPage}
        isLoading={isPaginationLoading}
      />
    </>
  );
}
