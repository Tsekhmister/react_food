import { CategoryItem } from "./CategoryItem";

export const CategoryList = ({ catalog = [] }) => {
  return (
    <div className="list">
      {catalog.map(element => (
        <CategoryItem key={element.idCategory} {...element}/>
      ))}
    </div>
  );
}