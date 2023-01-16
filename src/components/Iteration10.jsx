import { useState } from "react";

function Dice () {
    const [diceRoll, setDiceRoll] = useState(`dice${Math.floor(Math.random() * 5) + 1}.png`);

    // const rollDice = () => {
    //     const blankImage = setInterval(() => {
    //         setDiceRoll("dice-empty.png");
    //     }, 1000)

    //     return () => {
    //         clearInterval(blankImage);
    //         setDiceRoll(`dice${Math.floor(Math.random() * 5) + 1}.png`)
    //     }
    // }


    return (
        <div>
            <img
            src={diceRoll}
            alt="dice"
            onClick={() => setDiceRoll(`dice${Math.floor(Math.random() * 5) + 1}.png`)} //{rollDice}
            height="200"
            />
        </div>
    )
}

export default Dice;