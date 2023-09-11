import SideBar from "../SideBar/SideBar";
import ItemCard from "../ItemCard/ItemCard";
import avatar from "../../images/avatar.svg";
import "./Profile.css";

const Profile = ({ onSelectCard, onCreateModal, clothingItems }) => {
  return (
    <div className="profile__container">
      <SideBar />
      <div className="profile__main">
        <div className="profile__header">
          <h2 className="profile__items-heading">Your Items</h2>
          <button className="profile__add-button" onClick={onCreateModal}>
            + Add New
          </button>
        </div>
        <div className="profile__card-items">
          {clothingItems.map((item) => {
            return (
              <ItemCard
                item={item}
                onSelectCard={onSelectCard}
                key={item._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
