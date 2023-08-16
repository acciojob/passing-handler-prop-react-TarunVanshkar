import React,{useState} from 'react';


const Selection = (props) => {
  const [color, setColor] = useState({});
  const { applyColor } = props;
  // console.log(color.background)
  return (
    <div className='fix-box' style={{backgroundColor : color.background}} onClick={() => applyColor(setColor)}>
        <h1>Selection</h1>
    </div>
  )
}
export default Selection;

