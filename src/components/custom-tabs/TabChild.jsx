import React, { useState } from 'react'
import "./tabs.css"

const TabChild = ({tabsContent,onChange}) => {
    
    const [ currentTabIndex, setCurrentTabIndex ] = useState(0);


    const handleTabClick = (getItemIndex) => {
        // console.log("index",getItemIndex);
        setCurrentTabIndex(getItemIndex)

        // passed index to parent component
        onChange(getItemIndex)
    }
  return (
    <div className='wrapper'>
        <div className='heading'>
            {tabsContent.map((item,index) => (
                <div
                className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
                onClick={()=>handleTabClick(index)}>
                    <span className="label">{item.label}</span>
                </div>
            ))}

        </div>
        {/* display content of tabs */}

        <div className="content" style={{ color: "red" }} >{tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}</div>
      
    </div>
  )
}

export default TabChild
