import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.gray,
    color: theme.palette.common.black,
    border: "1px solid black",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    color: theme.palette.common.black,
    border: "1px solid black",
  },
}));

export default function DenseTable({ columns = [], rows = [] }) {
  return (
    <TableContainer component={"div"} sx={{ my: 3 }}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {columns.map((column, columnIndex) => (
              <StyledTableCell key={columnIndex}>
                {column.Header}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              {columns.map((column, cellIndex) => (
                <StyledTableCell key={cellIndex}>
                  {row[column.accessor]}
                </StyledTableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
