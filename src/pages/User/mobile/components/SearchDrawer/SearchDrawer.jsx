import { useState } from "react";
import {
  SwipeableDrawer,
  IconButton,
  Stack,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import {
  SearchContainer,
  SearchHeading,
  SearchBar,
  PopularSearchContainer,
} from "../../theme/themes";
import SearchIcon from "../../assets/SearchBlack.svg";
import CrossIcon from "../../assets/Cross.svg";
import { useDebounce } from "use-debounce";
import { useNavigate } from "react-router";
import { useGetAllProductsQuery } from "../../../../../services/nodeApi";

export default function SearchDrawer({ drawerState, toggleSearchDrawer }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [searchProduct] = useDebounce(search, 1000);
  const {
    data: products,
    isLoading,
    isFetching,
  } = useGetAllProductsQuery(
    {
      page: 1,
      search: searchProduct,
      limit: 10,
    },
    {
      skip: !search,
    }
  );
  return (
    <>
      <SwipeableDrawer
        anchor="bottom"
        open={drawerState}
        onClose={toggleSearchDrawer}
        onOpen={toggleSearchDrawer}
        PaperProps={{
          sx: {
            height: "80vh",
          },
        }}
      >
        <IconButton
          sx={{
            display: "flex",
            justifyContent: "right",
            paddingRight: 2,
            paddingTop: 2,
          }}
          onClick={toggleSearchDrawer}
        >
          <img src={CrossIcon} alt="CrossIcon" />
        </IconButton>
        <SearchContainer>
          <SearchBar
            placeholder="Search Items"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            disableUnderline
            startAdornment={<img src={SearchIcon} alt="SearchIcon" />}
          />
          <Stack gap={1}>
            <SearchHeading variant="subtitle2">Search Results</SearchHeading>
            <PopularSearchContainer>
              {isLoading || isFetching ? (
                <CircularProgress size={40} />
              ) : products?.data && !products.data?.products.length ? (
                <Typography variant="body2">No Product Found</Typography>
              ) : (
                products?.data.products.map((item, index) => (
                  <Box
                    component={"p"}
                    sx={{
                      cursor: "pointer",
                      padding: 1,
                      margin: 0,
                      borderRadius: "4px",
                      "&:hover": {
                        backgroundColor: "#f0f0f0",
                        textDecoration: "underline",
                      },
                    }}
                    key={index + item.id}
                    onClick={() => {
                      navigate(`/products/${item.id}`, {
                        state: {
                          category: item.category,
                          item,
                        },
                      });
                    }}
                  >
                    <Typography variant="body2">{item.name}</Typography>
                  </Box>
                ))
              )}
            </PopularSearchContainer>
          </Stack>
        </SearchContainer>
      </SwipeableDrawer>
    </>
  );
}
