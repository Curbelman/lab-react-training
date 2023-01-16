import { useState } from "react";

function Carrousel (props) {
    const { images } = props;
    const [imageIndex, setImageIndex] = useState(0);

    const handleLeftClick = () => {
        if (imageIndex > 0){
            setImageIndex(imageIndex - 1)
        } else {
            setImageIndex(images.length-1)
        }
    };

    const handleRightClick = () => {
        if (imageIndex < images.length-1){
            setImageIndex(imageIndex + 1)
        } else {
            setImageIndex(0)
        }
    };

    return (
        <div>
            <button onClick={handleLeftClick}>Left Click</button>
            <img src={images[imageIndex]} alt="" height="150" />
            <button onClick={handleRightClick}>Right Click</button>
        </div>
    )
}

export default Carrousel;