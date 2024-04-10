import React, { useState } from "react";
import TreeViewChild from "./TreeViewChild";
import { FaMinus, FaPlus } from "react-icons/fa";

const TreeViewSubChild = ({ item }) => {

  const [currentChild, setCurrentChild ] = useState({})

  

  const handleToggleChild = (getCurrentLabel) => {
    console.log("getCurrentLabel", getCurrentLabel);
    // onclick of + it will show its childrens,  
    setCurrentChild({
      ...currentChild,

      // behave like on ,off .On click of (+)[profile: true] , (-)[profile: false]
      [getCurrentLabel] : !currentChild[getCurrentLabel]
    })
  }

  console.log("currentChild", currentChild);


  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? 
        <span onClick={()=>handleToggleChild(item.label)}>

          {/* If {Profile: true} than show - , else + */}
          {currentChild[item.label] ? <FaMinus/> : <FaPlus />}
        </span> : null}
        
      </div>


      {/* over her we added currentChild[item.label] is present , 
      // that is if it has children than onclick of parent, show child , than onclick of child show sub-child */}
      {item && item.children && item.children.length > 0  && currentChild[item.label]? (
        <TreeViewChild list={item.children} />
      ) : null}
    </li>
  );
};

export default TreeViewSubChild;
