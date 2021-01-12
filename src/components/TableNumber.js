import React from 'react';

export default function TableNumber({number}) {

    function toBin(x) { return parseInt(x).toString(2); }
    function toOct(x) { return parseInt(x).toString(8); }
    function toHex(x) { return parseInt(x).toString(16); }

    return(
        <tr>
            <td>{toBin(number)}</td>
            <td>{toOct(number)}</td>
            <td>{toHex(number)}</td>
            <td>{number}</td>
        </tr>
    )
}