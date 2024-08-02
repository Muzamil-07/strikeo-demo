import { useEffect, useState } from "react";
import { NavLink, Navigate, useLocation, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import { useGetAllProductsQuery } from "../../../services/nodeApi";
import ContentLoader from "../components/ContentLoader/ContentLoader";
import ExportModel from "../components/ModelExporter";
// import { Pagination } from "flowbite-react";
import VideoComponent from "../components/Video/VideoComponent";
import { useSelector } from "react-redux";
import Navbar from "../mobile/components/Navbar";
// import { TablePagination } from "../../../components/TablePagination/TablePagination";

import Grid from "@mui/material/Grid";

const Products = () => {
  const { state } = useLocation();
  const contentvisibilty = useSelector((state) => state.contentvisibilty);

  if (!state) return <Navigate to="/" />;
  const [currentPage, setCurrentPage] = useState(1);

  const { category } = useParams();

  const { data, isLoading, refetch, error } = useGetAllProductsQuery(
    {
      category: category,
      page: currentPage,
      limit: 10,
      all: true,
    },
    { skip: !currentPage }
  );

  const [products, setProducts] = useState(null);

  const onPageChange = (page) => {
    setCurrentPage(page);

    // Call refetch to fetch data with the updated page number
    refetch({
      category: category,
      page: page,
      limit: 10,
      all: true,
    });
  };

  useEffect(() => {
    if (data && data.data) {
      setProducts(data.data.products);
    }
  }, [data]);

  return (
    <>
      <VideoComponent />

      {contentvisibilty && (
        <>
          <Navbar bgLight />
          <div className="bg-[url('/strikeo.webp')] h-screen bg-cover bg-no-repeat bg-center bg-fixed text-white px-24">
            <div className="fixed left-0 top-0 bg-black bg-opacity-60 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"></div>
            <div className="fixed inset-0 z-[1065] h-full  pt-[5rem]">
              <div className="h-full  mx-auto rounded-2xl bg-primary bg-opacity-70 pl-4 pr-3 py-4 ">
                <div className="text-2xl font-semibold flex justify-center items-start relative">
                  <NavLink to="/">
                    <svg
                      className="w-6 h-6 text-white absolute left-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 5H1m0 0 4 4M1 5l4-4"
                      />
                    </svg>
                  </NavLink>
                  <h3 className="text-2xl">Products</h3>
                </div>
                <div className="h-full py-6 overflow-auto">
                  <div className={`h-full w-full items-start flex gap-3`}>
                    <div className="w-[28%] h-full rounded-lg bg-black flex justify-center items-center">
                      <ExportModel type={state.item} category={category} />
                    </div>

                    <div className="flex flex-1 flex-wrap overflow-auto h-full items-center justify-center">
                      {isLoading ? (
                        <ContentLoader />
                      ) : !products || products?.length === 0 ? (
                        <>
                          <p className="text-[white] text-2xl font-bold">
                            {error
                              ? "Something wrong "
                              : "No products found "}
                            for{" "}
                            <span className="text-tertiary">"{category}"</span>!
                          </p>
                        </>
                      ) : (
                        // <>
                        //   {products &&
                        //     products.map((product, index) => {
                        //       return (
                        //         <ProductCard
                        //           key={index}
                        //           product={product}
                        //           item={state.item}
                        //           category={product.category} //temporary
                        //         />
                        //       );
                        //     })}
                        // </>
                        <>
                          <Grid container rowSpacing={0} columnSpacing={0}>
                            {products &&
                              products.map((product, index) => {
                                return (
                                  <Grid item lg={3} md={4} sm={6} xs={12}>
                                    <ProductCard
                                      key={index}
                                      product={product}
                                      item={state.item}
                                      category={product.category} //temporary
                                    />
                                  </Grid>
                                );
                              })}
                          </Grid>
                        </>
                      )}
                      {/* <TablePagination
                        sx={{
                          background: "lightgray",
                          p: 0.5,
                          borderRadius: "5px",
                        }}
                        // variant="text"
                        isLoading={isLoading}
                        isInfo={"false"}
                        handlePageChange={onPageChange}
                        currentPage={currentPage}
                        itemsPerPage={10}
                        totalItems={data?.data?.totalProducts || 0}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Products;
