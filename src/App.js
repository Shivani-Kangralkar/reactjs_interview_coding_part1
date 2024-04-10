

import './App.css';
// import Star from './components/star-rating/Star';
// import Accordian from './components/accordian/Accordian';
// import Timer from './components/countdowmTimer/Timer'
// import FilterProducts from './components/filterCategory/FilterProducts'
// import ModalTest from './components/custom-modal-popup/ModalTest'
import LightDark from './components/light-dark-mode/LightDark';



function App() {
  return (
    <div className="App">
      {/* Accordian */}
      {/* <Accordian /> */}

      {/* Star Rating */}
      {/* <Star noOfStars ={10} /> */}

      {/* timer */}
      {/* <Timer /> */}

      {/* filter products */}
      {/* <FilterProducts /> */}

      {/* custom Pop up modal */}
      {/* <ModalTest /> */}

      {/* change theme "dark " "light" */}

      <LightDark/>
    </div>
  );
}

export default App;
