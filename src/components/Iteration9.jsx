import { useState } from "react";

function ClickablePicture () {
    const [clicked, setClicked] = useState(false);

    return (
        <div>
            <img src={ clicked ? "maxence-glasses.png" : "maxence.png"} alt="clickable" onClick={() => setClicked(!clicked)}></img>
        </div>
    )
}

export default ClickablePicture;