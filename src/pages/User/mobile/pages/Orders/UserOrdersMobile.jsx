/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDebounce } from "use-debounce";
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
  Stack,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Pagination,
} from "@mui/material";
import { CiSearch } from "react-icons/ci";
import moment from "moment";
import Navbar from "../../components/Navbar";
import { useGetOrdersQuery } from "../../../../../services/nodeApi";
import { DividerDot, StyledDivider } from "../../theme/themes";

const columns = [
  { id: "orderNo", label: "Order No.", width: "20%" },
  { id: "items", label: "Items", width: "5%" },
  { id: "totalBill", label: "Total Bill", width: "20%" },
  { id: "orderedOn", label: "Ordered On", width: "25%" },
  { id: "paymentMethod", label: "Payment Method", width: "10%" },
  { id: "status", label: "Status", width: "20%" },
];

const UserOrdersMobile = () => {
  const itemsPerPage = 5;
  const [status, setStatus] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [searchedOrder] = useDebounce(searchText, 1000);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: paginatedData, isLoading } = useGetOrdersQuery({
    page: currentPage,
    limit: itemsPerPage,
    completed:
      status === "Completed" ? "true" : status === "Progressing" ? "false" : "",
    search: searchedOrder,
  });
  const statusOptions = ["All", "Completed", "Progressing"];

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const statusColor = {
    Pending: ["gray", "500/10"],
    Processing: ["blue", "700/10"],
    Shipped: ["yellow", "600/20"],
    Delivered: ["green", "600/20"],
    Cancelled: ["red", "600/10"],
    Progressing: ["blue", "700/10"],
    Completed: ["green", "600/20"],
  };
  const createStatusBadge = (status) =>
    `inline-flex items-center rounded-md bg-${statusColor[status][0]}-50 px-2 py-1 text-xs font-medium text-${statusColor[status][0]}-700 ring-1 ring-inset ring-${statusColor[status][0]}-${statusColor[status][1]}`;
  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "white", height: "100vh" }} pt={10}>
        <Stack mt={4}>
          <Typography
            sx={{
              textAlign: "center",
              letterSpacing: "4px",
              fontWeight: 400,
            }}
          >
            ORDERS
          </Typography>
          <StyledDivider>
            <DividerDot />
          </StyledDivider>
        </Stack>
        {isLoading || !paginatedData?.orders ? (
          <div className="h-3/4 flex justify-center items-center">
            <CircularProgress size={60} />
          </div>
        ) : (
          <div className="pt-4 px-4">
            <div className="mb-5">
              <TextField
                fullWidth
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                variant="standard"
                placeholder="Search orders..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CiSearch />
                    </InputAdornment>
                  ),
                }}
              />
              <Box mt={2}>
                <Select
                  variant="standard"
                  fullWidth
                  value={status}
                  onChange={(e) => {
                    setCurrentPage(1);
                    setStatus(e.target.value);
                  }}
                >
                  {statusOptions &&
                    statusOptions.map((statusOption) => (
                      <MenuItem key={statusOption} value={statusOption}>
                        {statusOption}
                      </MenuItem>
                    ))}
                </Select>
              </Box>
            </div>
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
                        <Typography fontSize={12}>{column.label}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody style={{ backgroundColor: "white" }}>
                  {!paginatedData.orders?.length ? (
                    <TableRow>
                      <TableCell colSpan={12} align="center">
                        <Typography fontSize={12}>
                          Nothing to show here!
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ) : (
                    paginatedData.orders?.map((order) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={order.id}
                        >
                          <TableCell align="center" width="20%">
                            <Typography fontSize={10}>
                              {order.orderNumber}
                            </Typography>
                          </TableCell>
                          <TableCell align="center" width="5%">
                            <Typography fontSize={10}>
                              {order.orders.reduce(
                                (acc, _order) => acc + _order.items.length,
                                0
                              )}
                            </Typography>
                          </TableCell>
                          <TableCell width="20%" align="center">
                            <Typography fontSize={10}>{order?.bill}</Typography>
                          </TableCell>
                          <TableCell align="center" width="25%">
                            <Typography fontSize={10}>
                              {moment(order?.orderedAt).format("DD-MM-YYYY")}
                            </Typography>
                          </TableCell>
                          <TableCell width="10%" align="center">
                            <Typography fontSize={10}>
                              {order?.payment.method}
                            </Typography>
                          </TableCell>
                          <TableCell align="center" width="20%">
                            <Typography
                              fontSize={10}
                              className={createStatusBadge(
                                order?.isCompleted ? "Completed" : "Progressing"
                              )}
                            >
                              {order?.isCompleted ? "Completed" : "Progressing"}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            {paginatedData && paginatedData.totalPages > 1 && (
              <Box display="flex" justifyContent="right" mt={2}>
                <Pagination
                  count={paginatedData?.totalPages || 0}
                  page={currentPage}
                  onChange={handleChange}
                  size="small"
                  showFirstButton
                  showLastButton
                />
              </Box>
            )}
          </div>
        )}
      </Box>
    </>
  );
};

export default UserOrdersMobile;
