import React from 'react';
import Review from './Review';
function App() {






  return (
    <main>
      <section className='container'>
        <div>
          <h2 className='title'>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <div>
          <Review />
        </div>
      </section>
    </main>
  )
}

export default App;
