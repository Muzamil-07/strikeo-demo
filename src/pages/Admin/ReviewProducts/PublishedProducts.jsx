import {
  Box,
  Chip,
  InputAdornment,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import ProductsDataTable from "./ProductsDataTable.jsx";
import { BiEditAlt, BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import http from "../../../api";
import {
  ErrorMessages,
  successMessages,
} from "../../../api/requestHandlers.js";
import MyTooltip from "../../../components/DynamoTooltip.jsx";
import { TablePagination } from "../../../components/TablePagination/TablePagination.jsx";

const PublishedProducts = ({
  paginatedData = {},
  searchText,
  setSearchText,
  getProducts,
  currentPage,
  handlePageChange,
  isPaginationLoading,
  setIsPaginationLoading,
  itemsPerPage,
  updateView
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
  const user = useSelector((state) => state.user);
  const isSuperAdmin =
    user?.isLoggedIn && user?.details?.role?.name === "SuperAdmin"
      ? true
      : false;

  const handleDisableProduct = async (e, id) => {
    const { checked } = e.target;
    setIsPaginationLoading(true);
    try {
      const res = await http.put(
        "/product/disable/" + id + "?disable=" + checked
      );
      successMessages(res);

      if (searchText.trim()) {
        setSearchText("");
      } else {
        getProducts(currentPage);
      }
    } catch (error) {
      ErrorMessages(error);
      setIsPaginationLoading(false);
    }
  };

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
              alignItems:'center'
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
            <MyTooltip
              title={`${product?.isActive ? "Disable" : "Enable"} Product`}
            >
              <Switch
                disabled={!isSuperAdmin}
                onChange={(e) => handleDisableProduct(e, product?.id)}
                checked={product?.isActive}
              />
            </MyTooltip>
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
      {/* </Toolbar> */}
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

export default PublishedProducts;
