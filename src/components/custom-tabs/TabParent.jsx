import TabChild from './TabChild'


// Calling parent to child , than child to parent
const TabParent = () => {

    const tabs = [
        {
            label: "Tab 1",
            content: <div>This is content for Tab1</div>
        },
        {
            label: "Tab 2",
            content : <div>This is content for Tab2 </div>
        },
        {
            label: "Tab 3",
            content: <RandomComponent />
        }
    ]

    function RandomComponent () {
        return <h1>Random text from random function</h1>
    }

    function handleChange(currentTabIndex){
        console.log("parent " , currentTabIndex);
    }

  return <TabChild tabsContent={tabs} onChange={handleChange}/>
}

export default TabParent
