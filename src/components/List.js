import React from "react";

export default function List({objs}){
    return (
        <div className="List">
            <ul>
                {objs.map((obj, key) => {
                    return (
                        <li key={key}>
                            {obj}
                        </li>
                    )
                })}
            </ul>
            <button onClick={}>Wczytaj nowe liczby</button>
        </div>
    );
}