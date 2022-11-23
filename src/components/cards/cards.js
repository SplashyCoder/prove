import React, { useState } from "react";
import './cards.css'

const Card = (props) =>{
    return(
        <div className="cardContent">
            {props.children}
        </div>
    )
}

const CardImage = ({image, link}) =>{
    return(
        <div className="image">
            <button className="imageButton">
                <a href={link} target="blank" className="imageLink">
                    <div className='imagePrincipalContainer'><img className = 'imagePrincipal'src={image} alt=''/></div>
                </a>
            </button>   
        </div>
    )
}

const CardCertificate = ({title,image,link}) =>{
    return(
        <div className="certificate">
            <button className="certificateButton">
                <a href={link} className="certificateLink" target="_blank" rel="noreferrer">
                    <aside className="certificateContainer">
                        <img src={image} alt="" className="certificateImage" />
                    </aside>
                    <aside className="certificateContainer">
                        <p className="certificateTitle">{title}</p>
                    </aside>
                </a>
            </button>
        </div>
    )
}

const CardPresentation = ({link,image,resume})=>{
    return(
        <div className="presentation">
            <button className="presentationButton">
                <a href={link} target="blank" className="presentationLink">
                    <div className='presentationPrincipal'><img src={image} alt=''/></div>
                    <p className="presentationText">{resume}</p>
                </a>
            </button>   
        </div>
    )
}

const CardModal = (props) =>{
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <div className="modalPresentation" onClick={toggleModal}>
                <button className="modalButton">
                    <div className='modalPrincipal'><img src={props.image} alt=''/></div>
                    <p className="modalText">{props.resume}</p>
                </button>   
            </div>

        {modal && (
            <div className="modalContainer">
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <h2>{props.resume}</h2>
                            <div className="modalList">{props.children}
                            </div>
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}
const CardModules = {
   Card, CardCertificate, CardImage, CardPresentation, CardModal
}

export default CardModules