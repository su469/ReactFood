import React, { useState } from 'react'
import Cards from './Cards'
import './App.css'

const SearchBox = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  console.log('data', data)
  const submitForm = (e) => {
    e.preventDefault()
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json())
      .then((data) => setData(data.meals))
  }
  return (
    <div>
      <h3>Food Recipe App</h3>
      <div>
      <form onSubmit={submitForm} className='formDiv'>
        <input
          type="text"
          className="input-box"
          placeholder="Search...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />
        <br />
        <img
          style={{
            position: 'absolute',
            top: '150px',
            background: 'none',
            left: '52%',
            width: '30px',
            height: '30px',
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hHJDpv2CxarRnrIN7X_9z9USMwjx-CNU1A&s"
          width="50px"
          height="50px"
          alt="searchicon"
        ></img>
        <input type="submit" className='submit-button' value="Search" />
      </form>
      </div>
      <div className="main-container">
        <Cards details={data} />
      </div>
    </div>
  )
}

export default SearchBox
