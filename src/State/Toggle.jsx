import React, { useState } from 'react';
import  "./ToggleStyle.css"; 

function Toggle () {
    const [on, setOn] = useState (false);
    console.log(on)
    return (
    <div className="toggle">
    <div className="spinner"></div>
      
    </div>
    )
}

export default Toggle;