import modalStyle from './modal.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight , faArrowLeft ,faXmark } from '@fortawesome/free-solid-svg-icons';
import './modal.sass'

const Modal = ({
    clickedImg,
    setClickedImg,
    handelRotationRight,
    handelRotationLeft,
    currentIndex,
    totalLength
  }) => {
    const handleClick = (e) => {
      if (e.target.classList.contains("dismiss")) {
        setClickedImg(null);
      }
    };
    const handleClickX = () =>{
      setClickedImg(null);
    }
  
    return (
      <>
        <div className={` ${modalStyle.overlay} dismiss `} onClick={handleClick}>
          <div className={modalStyle.bar}>
            <span>
              {currentIndex} / {totalLength}
            </span>

            <span className="dismiss" onClick={()=>handleClickX()}>
              <FontAwesomeIcon  icon={faXmark} />
            </span>
          </div>

          <img src={clickedImg} alt="bigger pic" />
          
          <div onClick={handelRotationLeft} className="overlayArrowsLeft">
            <div>
              <FontAwesomeIcon className={modalStyle.icon} icon={faArrowLeft} />
            </div>
          </div>
          <div onClick={handelRotationRight} className="overlayArrowsRight">
            <div>
              <FontAwesomeIcon className={modalStyle.icon} icon={faArrowRight} />
            </div>
          </div>
        </div>

        
      </>
    );
  };
  
  export default Modal;