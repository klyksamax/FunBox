import React, { useEffect, useState } from 'react';
import { dataUrl } from '../DataCards/Data';
import "./Home.css"

const Card = ({
    topText,
    nomin,
    nominFood,
    portions,
    gift,
    weight,
    weightUnits,
    bottomTextSelected,
    id,
    selected
}) => {


    const [itemState, setItemState] = useState()
    const [CornerStyle, setCornerStyle] = useState()
    const [TitleStyle, setTitleStyle] = useState()
    const [BodyStyle, setBodyStyle] = useState()
    const [CircleStyle, setCircleStyle] = useState()
    const [TextSelected, setTextSelected] = useState({})

    // selected
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState();

    const [selectedObj, setItems] = useState()
    
    const objT = {
        selected: true
    }
    const objF = {
        selected: false
    }

    
   
    


    const handleMouseEnter = (e) => {

        const CornerStyle = {
            
            background: "linear-gradient(135deg, transparent, transparent 47%, #9e2567 47%,#9e2567 56%, #f2f2f2 54%)"
        }
        const TitleStyle = {
            borderTop: "6px solid #9e2567",
            borderRight: "6px solid #9e2567"
        }
        const BodyStyle = {
            borderRight: "6px solid #9e2567",
            borderBottom: "6px solid #9e2567",
            borderLeft: "6px solid #9e2567",
        }
        const CircleStyle = {
            backgroundColor: "#9e2567"
        }
        const TextSelected = {
            TextSelected: bottomTextSelected
        }

        setCornerStyle(CornerStyle)
        setTitleStyle(TitleStyle)
        setBodyStyle(BodyStyle)
        setCircleStyle(CircleStyle)
        setTextSelected(TextSelected)
    }

    const handleMouseLeave = (e) => {

        const CornerStyle = {
            background: "linear-gradient(135deg, transparent, transparent 47%, #1698d9 47%,#1698d9 56%, #f2f2f2 54%)"
        }
        const TitleStyle = {
            borderTop: "6px solid #1698d9 ",
            borderRight: "6px solid #1698d9 "
        }
        const BodyStyle = {
            borderRight: "6px solid #1698d9",
            borderBottom: "6px solid #1698d9",
            borderLeft: "6px solid #1698d9",
        }
        const CircleStyle = {
            backgroundColor: "#1698d9"
        }
        const TextSelected = {
            TextSelected: null
        }
        setCornerStyle(CornerStyle)
        setTitleStyle(TitleStyle)
        setBodyStyle(BodyStyle)
        setCircleStyle(CircleStyle)
        setTextSelected(TextSelected)
    }
    const editForm = async () =>{
        if (selected===false){
            fetch(`${dataUrl}/${id}`,
        {method: 'put',
         headers: {
            'Content-type': 'application/json'},
         body: JSON.stringify(objT)   
        }
        )
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              handleMouseLeave()
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
        } else if (selected===true){
            fetch(`${dataUrl}/${id}`,
        {method: 'put',
         headers: {
            'Content-type': 'application/json'},
         body: JSON.stringify(objF)   
        }
        )
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              handleMouseEnter()
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
        }       
    }

    return (
        <div className='FlexZone' key={id} onClick={editForm}>
            <div className='FonPic' >
                <article>
                    <div className="corner" style={CornerStyle}>

                    </div>
                    <div className="title"
                        style={TitleStyle}
                    >
                        {topText}</div>
                    <div className="body"
                        style={BodyStyle}
                    >
                        <div className='Grid1'>

                            <div className='ProductName'>{nomin}</div>
                            <div className='СompositionProduct'>{nominFood}</div>
                            <div className='NumberServings'>{portions}</div>
                            <div className='GiftProduct'>{gift}</div>
                        </div>
                        <div className='CatPicture'>
                            <div className='Grid2'>
                                <div className='WeightCircle' style={CircleStyle}>
                                    <h1>{weight}</h1>
                                    <p>{weightUnits}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div className='BottomText'>
                {TextSelected.TextSelected ? TextSelected.TextSelected : <p>Чего сидишь? Прадуй котэ, <a> купи.</a></p>}
            </div>
        </div>
    )
}

export default Card