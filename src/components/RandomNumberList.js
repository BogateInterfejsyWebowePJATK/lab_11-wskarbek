import React from "react";
import List  from "./List";
import Table from "./Table";
import RandomNumber from "./RandomNumber";


export default function RandomNumberList({size, min, max}) {

    const [randomNumbersList, setRandomNumbersList] = React.useState([size]);
    const [table, setTable] = React.useState(false);


    React.useEffect(() => {
        generateRandomNumbers();
    }, []);

    function generateRandomNumbers() {
        let randomNumbers = [size];
        for(let i = 0; i < size; i++) {
            randomNumbers[i] = RandomNumber(min, max);
        }
        setRandomNumbersList(randomNumbers);
    }

    if(!table) {
        return (
            <div className="RandomNumberList">
                <List objs={randomNumbersList} type="numbers"/>
                <button onClick={generateRandomNumbers}>Wczytaj nowe liczby</button>
                <button onClick={() => setTable(true)}>Wyświetl jako tablica</button>
            </div>
        )
    } else {
        return (
            <div className="RandomNumberList">
                <Table objs={randomNumbersList}/>
                <button onClick={generateRandomNumbers}>Wczytaj nowe liczby</button>
                <button onClick={() => setTable(false)}>Wyświetl jako lista</button>
            </div>
        )
    }

}