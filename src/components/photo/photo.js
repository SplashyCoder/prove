import './photo.css'

const Photo = (props) => {
    return(
        <div className="principalPhoto">
            {props.children}
        </div>
    )
}

export default Photo