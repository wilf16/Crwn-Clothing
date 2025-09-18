import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((item) => {
        return <CategoryItem key={`${item.id}`} item={item} />;
      })}
    </div>
  );
};

export default Directory;
