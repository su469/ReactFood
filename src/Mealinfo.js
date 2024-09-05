import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Mealinfo = () => {
  const { mealid } = useParams()
  const [recipeinfo, setRecipeInfo] = useState();
  console.log('kk', recipeinfo)
  const getInfo = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`,
    )
    const jsonData = await data.json()
    setRecipeInfo(jsonData?.meals[0])
  }
  if (recipeinfo != '') {
    getInfo()
  }
  return (
    <div>
      {!recipeinfo ? (
        ''
      ) : (
        <div style={{display:'flex',alignItems:'flex-start',gap:'20px',alignItems:'center',justifyContent:'center',marginTop:'185px'}}>
          <img  style={{width:'400px', height:'400px',borderTopLeftRadius:'11px',borderTopRightRadius:'11px',marginLeft:'60px'}}src={recipeinfo?.strMealThumb}></img>
          <div className='Details-box'>
            <h2>Recipe Details</h2>
            <h4>{recipeinfo?.strMeal}</h4>
            <span className='recipeDetails'>Instruction's</span>
            <p className='recipe-instuction' style={{ lineHeight: '1.6', textAlign: 'justify' }}>{recipeinfo?.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Mealinfo
