import { Link } from "react-router-dom";
import {
  ProductAbout,
  ProductImage,
  ProductItem,
  ProductRating,
} from "../../theme/themes";
import { Typography } from "@mui/material";
import format from "../../../../../utils/format";

const ProductCard = ({ item, bgWhite = false }) => {
  return (
    <ProductItem item xs={5.6}>
      <Link to={`/products/${item.id ? item.id : item._id}`}>
        <ProductImage component="div">
          <img src={item.image} style={{ width: "100%", height: "100%" }} />
        </ProductImage>
        <ProductAbout>
          <Typography
            variant="body2"
            color={bgWhite ? "text.primary" : "background.default"}
          >
            {item.name}
          </Typography>

          <Typography variant="caption" color="text.secondary">
            {item.description.slice(0, 200)}{" "}
            {item.description.length > 100 && " ..."}
          </Typography>
          <Typography variant="body2" color="primary.main">
            {format.formatMoney(item.salePrice)}
          </Typography>
          <ProductRating
            name="read-only"
            value={item.averageRating}
            readOnly
            size="small"
          />
        </ProductAbout>
      </Link>
    </ProductItem>
  );
};

export default ProductCard;
