import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemCard.css";
import { useContext } from "react";

const ItemCard = ({ item, onSelectCard, handleLikeButton }) => {
  const {currentUser} = useContext(CurrentUserContext);
  const isLiked = item.likes.some((user) => {
    if (currentUser) {
      return user === currentUser._id;
    } else {
      return false;
    }
  });

  const handleClickLike = () => {
    console.log(isLiked, currentUser, item);
    handleLikeButton(item._id, isLiked);
  };

  return (
    <div className="card">
      <div className="card__info">
        <p className="card__name">{item.name}</p>
        <button onClick={handleClickLike} className={isLiked? 'card__like-button card__like-button_active' : 'card__like-button'}></button>
      </div>
      <img
        src={item.imageUrl}
        className="card__image"
        alt={item.name}
        onClick={() => {
          onSelectCard(item);
        }}
      />
    </div>
  );
};

export default ItemCard;
