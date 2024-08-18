import { lazy } from "react";

const ProductsPageAsync = lazy(() => import("./ProductsPage.jsx"));

export default ProductsPageAsync;
