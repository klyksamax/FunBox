import React, { useEffect, useState } from 'react';
import "./Home.css"

const NoCard = ({
    topText,
    nomin,
    nominFood,
    portions,
    gift,
    weight,
    weightUnits,
    bottomTextSelected,
    id
}) => {

    const [itemState, setItemState] = useState()
    const [CornerStyle, setCornerStyle] = useState()
    const [TitleStyle, setTitleStyle] = useState()
    const [BodyStyle, setBodyStyle] = useState()
    const [CircleStyle, setCircleStyle] = useState()
    const [TextSelected, setTextSelected] = useState({})



    const handleMouseEnter = (e) => {

        const CornerStyle = {
            background: "linear-gradient(135deg, transparent, transparent 47%, #b1b1b1 47%,#b1b1b1 56%, #f2f2f2 54%)"
        }
        const TitleStyle = {
            borderTop: "6px solid #b1b1b1",
            borderRight: "6px solid #b1b1b1",
        }
        const BodyStyle = {
            borderRight: "6px solid #b1b1b1",
            borderBottom: "6px solid #b1b1b1",
            borderLeft: "6px solid #b1b1b1",
        }
        const CircleStyle = {
            backgroundColor: "#b1b1b1"
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

    return (
        <div className='FlexZone' key={id} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
            <div className='FonPic'>

                <article>
                    <div className="corner"
                        style={CornerStyle}
                    >
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
                        <div className='CatPicture' >

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
                {TextSelected.TextSelected ? `Печалька, ${nominFood} закончился.` : <p>Чего сидишь? Прадуй котэ, <a href='https://cssgradient.io/'>купи.</a></p>}
            </div>
        </div>
    )

}
export default NoCard
