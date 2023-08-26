import './ModalWithForm.css';
import grayCloseIcon from '../../images/close-icon-gray.svg'

const ModalWithForm = ({
    children,
    buttonText = 'Add garment',
    title,
    onClose,
    name
}) => {
    return (
        <div className={`modal modal_type_${name}`}>
            <div className='modal__content'>
                <button className='modal__close-button_gray' type='button' onClick={onClose}>
                    <img src={grayCloseIcon} />
                </button>
                <h3 className='modal__title'>{title}</h3>
                <form className='modal__form'>{children}</form>
                <button className='modal__submit-button' type='submit'>{buttonText}</button>
            </div>
        </div>
    )
}

export default ModalWithForm;
