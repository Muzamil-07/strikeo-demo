/* eslint-disable react/prop-types */

import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableContainer,
  Table,
  TableBody,
  Box,
} from "@mui/material";
import { StyledTableHeadCell } from "../../../themes/themes";
import { TbArrowsSort } from "react-icons/tb";
import Spinner from "../../../components/TablePagination/Spinner";

const ProductsDataTable = ({
  columns = [],
  rows = [],
  isPaginationLoading = false,
  sortConfig = {},
  sortConfigSet,
}) => {
  const getSortDirection = (key) => {
    if (sortConfig?.key === key) {
      return sortConfig?.direction;
    }
    return "asc";
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig?.key === key && sortConfig?.direction === "asc") {
      direction = "desc";
    }
    sortConfigSet({ key, direction });
  };

  const EnhancedTableHead = ({ sortConfig, onClick }) => {
    const handleSortClick = (key) => {
      onClick(key);
    };
    return (
      <TableHead>
        <TableRow>
          {columns.map((headCell) => (
            <StyledTableHeadCell key={headCell?.id}>
              {headCell?.is_sortable ? (
                <TableSortLabel
                  active={sortConfig?.key === headCell?.id}
                  direction={getSortDirection(headCell?.id)}
                  onClick={() => handleSortClick(headCell?.id)}
                >
                  {headCell?.is_sortable &&
                    sortConfig?.key !== headCell?.id && (
                      <TbArrowsSort style={{ marginRight: "4px" }} />
                    )}{" "}
                  {headCell?.lbl || "N/A"}
                </TableSortLabel>
              ) : (
                <div>{headCell?.lbl}</div>
              )}
            </StyledTableHeadCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };
  return (
    <>
      <Box sx={{ position: "relative", borderRadius: "8px" }}>
        <Spinner loading={isPaginationLoading} />
        <TableContainer
          sx={{
            ...{ borderRadius: "8px" },
            ...(isPaginationLoading ? { pointerEvents: "none" } : {}),
          }}
        >
          {columns?.length === 0 && rows?.length === 0 ? (
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell color="red" align="center">
                    No Products to show!
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          ) : (
            <Table stickyHeader={true}>
              <EnhancedTableHead sortConfig={sortConfig} onClick={handleSort} />
              <TableBody>
                {columns?.length === 0 ? (
                  <>
                    <TableRow>
                      <TableCell color="red" align="center">
                        Table columns required!
                      </TableCell>
                    </TableRow>
                  </>
                ) : rows?.length === 0 ? (
                  <TableRow>
                    <TableCell color="red" align="center">
                      No Products found!
                    </TableCell>
                  </TableRow>
                ) : (
                  <>
                    {rows.map((row, i) => (
                      <TableRow key={i} sx={{ whiteSpace: "pre-line" }}>
                        {columns.map((column, columnIndex) => (
                          <TableCell key={columnIndex}>
                            {column?.Cell
                              ? column?.Cell(row)
                              : row[column?.id] || "N/A"}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </>
                )}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Box>
    </>
  );
};

export default ProductsDataTable;
