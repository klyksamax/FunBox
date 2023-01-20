import React, { useEffect, useState } from 'react';
import { dataUrl } from '../DataCards/Data';
import Card from './Card';
import "./Home.css"
import NoCard from './NoCard';

const HomePage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selectPost, setPost] = useState()

  useEffect(() => {
    const time = setTimeout(()=>{
    fetch(dataUrl)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }, )
       }, 500);
       return()=>clearTimeout(time)
  }, [items])
  


  const [CornerStyle, setCornerStyle] = useState()
  const [TitleStyle, setTitleStyle] = useState()
  const [BodyStyle, setBodyStyle] = useState()

  const handelSelectPost = (blogPost) => {
    setPost(blogPost)
  }

  const dataCards = items.map((item, i) => {
    if (item.cardState !== 0) {
      return (
        <Card
          topText={item.topText}
          nomin={item.nomin}
          nominFood={item.nominFood}
          portions={item.portions}
          gift={item.gift}
          weight={item.weight}
          weightUnits={item.weightUnits}
          bottomTextSelected={item.bottomTextSelected}
          id={item.id}
          selected={item.selected}
        />
      )
    } else if (item.cardState === 0) {
      return (
        <NoCard
          topText={item.topText}
          nomin={item.nomin}
          nominFood={item.nominFood}
          portions={item.portions}
          gift={item.gift}
          weight={item.weight}
          weightUnits={item.weightUnits}
          bottomTextSelected={item.bottomTextSelected}
          id={item.id}
/>
      )
    }

  })

  return (
    <>
      <div className='GeneralBackground'>
        <div className='GeneralText'>
          <p>Ты сегодня покормил кота?</p>
        </div>
        <div className='GorizonСards'>
          <div className='Flex' >
            {dataCards}
          </div>
        </div>
      </div>
    </>
  )

}

export default HomePage;