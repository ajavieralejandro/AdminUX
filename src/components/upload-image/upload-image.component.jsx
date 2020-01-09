import React,{useState} from 'react';
import {connect} from 'react-redux';
import {setImage} from "../../redux/curso/curso.actions";
import {createStructuredSelector} from 'reselect';
import {getImage} from "../../redux/curso/curso.selectors";
import './upload-image.styles.scss';

const ImageUpload = ({route,setImage,getImage}) => {
    const image = getImage;


    const fileSelectHandler = event => {
       
        if(event.target.files[0]){
        //Si hay una anterior la elimino    
        if(image)
            URL.revokeObjectURL(image);
            const aux = URL.createObjectURL(event.target.files[0])
            setImage(aux);

        }
    }

    return(
        <div>
            <label>
            {image?
                <img className="pic" src={image} alt="Italian Trulli" />
                :
                <img className="bigAvatar" src={route} alt="Italian Trulli" />
                }
            <input className="input-button" type="file" onChange={fileSelectHandler} />
            </label>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setImage : image => dispatch(setImage(image))
})

const mapStateToProps = createStructuredSelector({
    getImage : getImage
}
)

export default connect(mapStateToProps,mapDispatchToProps) (ImageUpload);