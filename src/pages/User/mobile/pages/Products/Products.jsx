import ProductCard from "../../components/ProductCard";
import { ProductContainer } from "../../theme/themes";
import { Typography } from "@mui/material";

const Products = ({ products }) => {
  return (
    <ProductContainer container spacing={2}>
      {products?.map((item, index) => {
        return <ProductCard key={index} item={item} />;
      })}
      {!products?.length && (
        <Typography
          sx={{
            letterSpacing: "4px",
          }}
          textAlign="center"
          my={8}
          px={6}
          fontSize={18}
          color="white"
          fontWeight="bold"
        >
          Unfortunately, No product found!
        </Typography>
      )}
    </ProductContainer>
  );
};

export default Products;
