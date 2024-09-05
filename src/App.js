import './App.css'
import Imagecrop from '../src/Imagecrop'
import SearchBox from '../src/SearchBox'
import { Route, Routes } from 'react-router-dom'
import Mealinfo from './Mealinfo'

function App() {
  return (
    <div className="mainDiv">
      <Imagecrop />
      <div style={{ margin: '50px' }}>
        <Routes>
          <Route
            path="/"
            element={
              <center>
                <SearchBox />
              </center>
            }
          ></Route>
          <Route
            path="/:mealid"
            element={
              <center>
                <Mealinfo></Mealinfo>
              </center>
            }
          ></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
