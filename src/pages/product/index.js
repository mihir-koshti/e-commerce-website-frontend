import React, { useContext } from "react";
import { ProductStyled } from "./ProductStyled";
import { ShopContext } from "../../context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrumbCom from "../../components/Breadcrumb";
import { Container } from "react-bootstrap";
import ProductDisplay from "../../components/ProductDisplay";
import DescriptionBox from "../../components/DescriptionBox";
import RelatedProducts from "../../components/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <ProductStyled>
      <Container>
        <div className="my-4 fs-24 fw-600">
          <BreadCrumbCom
            screens={[
              { link: "/", name: "Home" },
              { link: "/", name: "Shop" },
              { link: `/${product.category}`, name: product?.category },
              { link: `/${product.id}`, name: product.name },
            ]}
          />
        </div>
        <ProductDisplay product={product} />
        <DescriptionBox />
        <RelatedProducts />
      </Container>
    </ProductStyled>
  );
};

export default Product;
