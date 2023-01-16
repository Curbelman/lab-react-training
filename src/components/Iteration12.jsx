import { useState } from "react";

function NumbersTable (props) {
    const { limit } = props;
    const [numberColor, setNumberColor] = useState("");
    const numberArray = Array.from(1, limit, 1);

    const listArray = numberArray.map((number) => {
        const isEven = () => {
            if (number%2===0){
                setNumberColor("red")
            } else {
                setNumberColor("grey")
            }
            return (numberColor)
        }


         return (
            <li key={number.toString()} style={{color:{isEven}}}> {number} </li>
         )
      }
    )

    return (
        <div>
            <ul>{listArray}</ul>
        </div>
    );
}

export default NumbersTable;