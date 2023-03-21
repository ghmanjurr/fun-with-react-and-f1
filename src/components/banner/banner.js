import { useState } from "react";

const Banner = () => {
    const [expand, setExpand] = useState(false);
    const toggleExpand = () => setExpand(prevExpand => !prevExpand)
    
    return <div className="banner">
        <button onClick={toggleExpand}>F1TV banner  <span>{expand ? '-' : '+'}</span></button>
        { expand && <div className="bannerLink">
            <a
          className="App-link"
          href="https://f1tv.formula1.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch F1 TV
        </a></div>}
    </div>
}

export default Banner;
