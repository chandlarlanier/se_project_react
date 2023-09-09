import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

const Profile = ({onSelectCard}) => {
  return (
    <div className="card-items">
      {defaultClothingItems.map((item) => {
        return (
          <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
        );
      })}
    </div>
  );
};

export default Profile;
