import './ItemModal.css';

const ItemModal = ({ selectedCard, onClose }) => {
    return (
        <div className='modal'>
            <div className='modal__content'>
                <button type='button' onClick={onClose} class='modal__close-button'>
                    <img src={require('../../images/close-icon.svg').default} />
                </button>
                <img src={selectedCard.link} className='modal__img' />
                <div className='modal__item-name'>{selectedCard.name}</div>
                <div className='modal__item-weather'>Weather: {selectedCard.weather}</div>
            </div>
        </div>
    )
}

export default ItemModal;
