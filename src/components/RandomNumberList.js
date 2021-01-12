import React from "react";
import List  from "./List";
import RandomNumber from "./RandomNumber";


export default function RandomNumberList({size, min, max}) {

    const [randomNumbersList, setRandomNumbersList] = React.useState([size]);


    React.useEffect(() => {
        generateRandomNumbers();
    },[]);

    function generateRandomNumbers() {
        let randomNumbers = [size];
        for(let i = 0; i < size; i++) {
            randomNumbers[i] = RandomNumber(min, max);
        }
        setRandomNumbersList(randomNumbers);
    }

    return (
        <div className="RandomNumberList">
            <List objs={randomNumbersList}/>
            <button onClick={generateRandomNumbers}>Wczytaj nowe liczby</button>
        </div>
    )
}