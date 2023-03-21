import { useState } from "react";

const Banner = () => {
    const [expand, setExpand] = useState(false);
    const toggleExpand = () => setExpand(prevExpand => !prevExpand)
    
    return <div className="banner">
        <button onClick={toggleExpand}>F1TV banner  <span>{expand ? '-' : '+'}</span></button>
        { expand && <div className="bannerLink">Link to F1tv website</div>}
    </div>
}

export default Banner;
