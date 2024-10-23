import { useState } from 'react';

import Header from './components/Header';

function App() {
  const firstName = 'Nina';

  // STATE VARIABLES 
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');



  //MORE EFFICIENT WAY TO DO THIS
  // const changeCount = (newVal: number) => {
  //   setCount(newVal); 
  //   console.log(count);
  // };


  
  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count) {
      setCount(count - 1);
    }

  };

  const startCountdown = () => {
    if (count > 0) {
      // Start an interval 
      // Store the interval so we can clear it 
      // In the code block,decrease count by one every second (1000 MS) 
      const timer = setInterval(() => {
        // If count has reached zero, clear the interval

        setCount((prevCount) => {
          if (prevCount === 0) {
            clearInterval(timer);
            return prevCount;
          }

          return prevCount - 1;
        })


      }, 1000)
    }
  };

  const handleInputChange = (eventObj: React.ChangeEvent<HTMLInputElement>) => {
    setColor(eventObj.target.value);
  };

  return (
    <>
      <Header color={color} count={count} userName={firstName} />

      <h2>{count}</h2>

      <div>
        <input onChange={handleInputChange} type="text" placeholder="Enter a color value" />
        <button>Set color</button>
      </div>

      <div>
        <button onClick={(increaseCount)}>Increase</button>
        <button onClick={(decreaseCount)}>Decrease</button>
        <button onClick={(startCountdown)}>Start Countdown</button>
      </div>
    </>
  )
}

export default App;



//-----------------------------------------
// NOTES ----------------------------------
//-----------------------------------------

// USE STATE NOTES: 
// function useState(initialValue) {
//   const updateFunction = (newVal) => {
//     innitialValue = newVal;
//   }

//   return [initialValue, updateFunction];
// }

// const [count, setCount] = useState(0);

//-----------------------------------------

// COMPLETE RELOAD OF DOM: 
// const el = document.querySelector('#some-el');
// el.innerText = 'something else';