import data from "../../public/list.json";
import { CardItem } from "./CardItem";

export function CardList() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {data.map((item, index) => (
        <CardItem key={index} {...item} />
      ))}
    </div>
  );
}
