import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((item) => {
        return <DirectoryItem key={`${item.id}`} item={item} />;
      })}
    </div>
  );
};

export default Directory;
