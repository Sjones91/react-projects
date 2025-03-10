import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState (true);
  const [tours, setTours] = useState([]);

  const removeTour = (id)=> {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  }
  const fetchTours = async () => {
    setLoading(true);
    
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours();
  },[])
  
  if(loading){
    return (
      <main>
        <Loading/>
      </main>
    )
  } 
  if(tours.length === 0) {
    return(
    <div className='title'>
      <h2 >No Tours Left</h2>
      <button className='btn' onClick={()=> fetchTours()}>Refresh</button>
    </div>
    )
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}/>
    </div>

  )
}

export default App
