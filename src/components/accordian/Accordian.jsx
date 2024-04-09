import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [showMultiSelection, setShowMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    console.log("getCurrentId", getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    // console.log("inside multi");
    // console.log("getCurrentId", getCurrentId);

    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    // console.log("findIndexOfCurrentId", findIndexOfCurrentId);

    // -1 means that id is not present in array

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    // if id is present the remove that 1 element
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    // console.log("copyMultiple", copyMultiple);
    setMultiple(copyMultiple);
  };

console.log("multiple", multiple);

  return (
    <div className="acc-wrapper">
      <button onClick={() => setShowMultiSelection(!showMultiSelection)}>
        {showMultiSelection ? "Multiple Selection" : "Single selection"}
      </button>
      {/* {console.log("data",data.length > 0)} */}
      <div className="accordian">
        {/* {console.log(showMultiSelection)} */}
        {data && 
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  showMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

                {console.log("index of ", multiple.indexOf(dataItem.id))}
              {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                <div>{dataItem.answer}</div>
              ) : null}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Accordian;
