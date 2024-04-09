

import './App.css';
import Star from './components/star-rating/Star';
// import Accordian from './components/accordian/Accordian';



function App() {
  return (
    <div className="App">
      {/* Accordian */}
      {/* <Accordian /> */}

      {/* Star Rating */}
      <Star noOfStars ={10} />
    </div>
  );
}

export default App;
