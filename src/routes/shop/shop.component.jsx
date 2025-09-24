import { Routes, Route } from "react-router";
import CategoriesPreview from "../categories-preview/categories-preview.component";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
};

export default Shop;
