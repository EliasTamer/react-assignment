import { useDrag } from "react-dnd";
import itemTypes from "../../utils/itemTypes";
import "./ListingItem.scss";

const ListItem = (props) => {
  const { id, title, image, price, category } = props;

  const [{ isDragging }, drag] = useDrag({
    type: itemTypes.CARD,
    item: {
      id: id,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div className="item" ref={drag}>
      <div className="image-holder">
        <div className="category">{category}</div>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="price">Price: ${price}</div>
    </div>
  );
};

export default ListItem;
