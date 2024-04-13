import './tool-tip.css'
import ToolTipChild from "./ToolTipChild"

const ToolTipParent = () => {
  return (
    <div>
        <h1>Tool Tip</h1>
        <ToolTipChild
        delay={500}
        content={'I am tool tip'}
        children={<p>Hover Me</p>}/>      
    </div>
  )
}

export default ToolTipParent
