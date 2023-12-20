import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  return (
      <div id="app">

        <div id="pupList">
          { 
            puppies.map((puppy) => {
              return <p id="listItems" onClick = {()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
            })
          }
        </div>

      <div id='pupFeature'>
          {(() => {
            if (featuredPup) {
              return <div>
                        <h1>{featuredPup.name}</h1>
                        <ul>
                          <li>Age: {featuredPup.age}</li>
                          <li>Email: {featuredPup.email}</li>
                        </ul>
                      </div>
            } else {
              return <h1>No Featured Pup.</h1>;
            }
          })()}
      </div>

      </div>
  )
}

export default App
