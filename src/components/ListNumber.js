import React from 'react';

export default function ListNumber({number}) {
    const [format, setFormat] = React.useState(number);

    function toBin(x) { return parseInt(x).toString(2); }
    function toOct(x) { return parseInt(x).toString(8); }
    function toHex(x) { return parseInt(x).toString(16); }


    React.useEffect(() => {
        setFormat(number);
    }, [number]);

    return(
        <div className="TableNumber">
            <button onClick={() => setFormat(toBin(number))}>Binary</button>
            <button onClick={() => setFormat(toOct(number))}>Octal</button>
            <button onClick={() => setFormat(toHex(number))}>Hexadecimal</button>
            <br/>
            <h3>{format}</h3>
        </div>
    )
}