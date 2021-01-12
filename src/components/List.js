import React from "react";
import ListNumber from "./ListNumber";

export default function Table({objs}){

    const [newObjs, setNewObjs] = React.useState(objs);

    React.useEffect(() => {
        setNewObjs(objs);
    }, [objs]);

    function del(key) {
        let n = [...newObjs];
        n.splice(key, 1);
        setNewObjs(n);
    }

    return (
        <div className="List">
            <ul>
                {newObjs.map((obj, key) => {
                    return (
                        <li key={key}>
                            <button onClick={() => del(key)}>Delete</button>
                            <ListNumber number={obj}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}