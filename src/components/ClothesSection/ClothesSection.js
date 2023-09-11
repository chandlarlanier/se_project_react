import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({onSelectCard, onCreateModal, clothingItems}) => {
  return (
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
            <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
