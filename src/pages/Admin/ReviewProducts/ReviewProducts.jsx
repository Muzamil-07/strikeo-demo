import {
  Box,
  Chip,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import ProductsDataTable from "./ProductsDataTable";
import { TablePagination } from "../../../components/TablePagination/TablePagination";
import { BiBlock, BiEditAlt, BiSearch } from "react-icons/bi";
import MyTooltip from "../../../components/DynamoTooltip";

const Reviewproducts = ({
  paginatedData = {},
  searchText,
  setSearchText,
  currentPage,
  updateView,
  handlePageChange,
  isPaginationLoading,
  openModal,
  itemsPerPage,
}) => {
  const headCells = [
    { id: "image", lbl: "Image", is_sortable: false },
    { id: "product", lbl: "Product", is_sortable: true },
    { id: "category", lbl: "Category", is_sortable: false },
    { id: "costPrice", lbl: "Cost Price", is_sortable: true },
    { id: "salesPrice", lbl: "Sales Price", is_sortable: false },
    { id: "status", lbl: "Status" },
    { id: "action", lbl: "Action" },
  ];
  const [sortConfig, sortConfigSet] = useState({});

  const createStatusBadge = (status) => {
    // <Stack direction="row" spacing={1}>
    return (
      <Chip
        size="small"
        label={status}
        color={
          status === "Pending"
            ? "warning"
            : status === "Published"
            ? "info"
            : "error"
        }
      />
    );

    // </Stack>;
  };

  let sortedData = useMemo(() => {
    const customAlphanumericSort = (a, b) => {
      const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "");

      const nameA = normalize(a?.name);
      const nameB = normalize(b?.name);

      if (sortConfig?.direction === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    };

    return [...paginatedData?.products]
      ?.sort((a, b) => {
        if (sortConfig?.key === "product") {
          return customAlphanumericSort(a, b);
        } else if (sortConfig?.key === "costPrice") {
          if (sortConfig?.direction === "asc") {
            return parseFloat(a?.costPrice) - parseFloat(b?.costPrice);
          } else {
            return parseFloat(b?.costPrice) - parseFloat(a?.costPrice);
          }
        }
        return 0;
      })
      .map((product) => ({
        image: (
          <Box
            sx={{
              boxShadow: 1,
              m: 0,
              p: 0,
              border: "1px solid lightGray",
              borderRadius: "5px",
              objectFit: "contain",
            }}
          >
            <img
              loading="lazy"
              width={60}
              height={60}
              style={{ borderRadius: "5px" }}
              src={product?.image || noImage}
              alt={product?.name || ""}
            />
          </Box>
        ),
        product: product?.name,
        category: product?.category?.name,
        costPrice: `${product?.costPrice} T.K.`,
        salesPrice: `${product?.salePrice ? product.salePrice + " T.K." : ""}`,
        status: createStatusBadge(product?.status),
        action: (
          <Box
            sx={{
              display: "flex",
              justifyItems: "center",
              gap: "0px 14px",
              fontSize: "18px",
            }}
          >
            <MyTooltip title={"Edit Product"}>
              <div>
                <BiEditAlt
                  color="green"
                  cursor={"pointer"}
                  onClick={() => updateView("update-product", product)}
                />
              </div>
            </MyTooltip>

            {product?.status !== "Rejected" && (
              <MyTooltip title={"Reject Product"}>
                <div>
                  <BiBlock
                    cursor={"pointer"}
                    color="red"
                    onClick={() => openModal(product)}
                  />
                </div>
              </MyTooltip>
            )}
          </Box>
        ),
      }));
  }, [paginatedData, sortConfig]);

  return (
    <>
      {/* <Toolbar> */}
      <Typography
        color={"primary"}
        sx={{ flex: "1 1 100%", my: 3 }}
        component="div"
      >
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BiSearch />
              </InputAdornment>
            ),
          }}
          color="primary"
          disabled={isPaginationLoading}
          type="search"
          value={searchText}
          size="small"
          id="search-product-label"
          label="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </Typography>

      <Paper sx={{ borderRadius: "8px" }}>
        <ProductsDataTable
          sortConfig={sortConfig}
          sortConfigSet={sortConfigSet}
          columns={headCells}
          rows={sortedData}
          isPaginationLoading={isPaginationLoading}
        />
      </Paper>

      <TablePagination
        handlePageChange={handlePageChange}
        totalItems={paginatedData?.totalProducts || 0}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        isLoading={isPaginationLoading}
      />
    </>
  );
};

export default Reviewproducts;
