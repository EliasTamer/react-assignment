import itemTypes from "../../utils/itemTypes";
import { useDrop } from "react-dnd";

const BoxTarget = ({ children, handleDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: itemTypes.CARD,
    drop: (item, monitor) => {
      handleDrop(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return <div ref={drop}>{children}</div>;
};

export default BoxTarget;
