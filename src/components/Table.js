import React from "react";
import TableNumber from "./TableNumber";

export default function Table({objs}){

    return (
        <div className="List">
            <table>
                <tr>
                    <th>BIN</th>
                    <th>OCT</th>
                    <th>HEX</th>
                    <th>DEC</th>
                </tr>
                {objs.map((obj, key) => {
                    return (
                        <TableNumber number={obj}/>
                    )
                })}
            </table>
        </div>
    );
}