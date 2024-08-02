import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";

export const TablePagination = ({
  isLoading,
  handlePageChange = () => {},
  totalItems = 0,
  itemsPerPage = 0,
  currentPage = 1,
  isInfo = false,
  variant = "outlined",
  sx = {},
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  return (
    totalItems > 0 &&
    totalPages > 1 && (
      <Box
        component={"div"}
        sx={{
          p: 3,
          justifyContent: !isInfo ? "space-between" : "end",
          alignItems: "center",
          display: "flex",
        }}
      >
        {!isInfo && (
          <Stack>
            <Box sx={{ justifyContent: "start", gap: "5px", display: "flex" }}>
              <Typography>
                {`Showing ${(currentPage - 1) * itemsPerPage + 1} - 
            ${Math.min(
              currentPage * itemsPerPage,
              totalItems
            )} of ${totalItems}`}
              </Typography>
            </Box>
          </Stack>
        )}
        <Stack spacing={2}>
          <Pagination
            page={currentPage}
            count={totalPages}
            itemsPerPage={itemsPerPage}
            onChange={(e, page) => {
              handlePageChange(page);
            }}
            disabled={isLoading}
            variant={variant}
            shape="rounded"
            color="primary"
            sx={{ ...sx }}
          />
        </Stack>
      </Box>
    )
  );
};
