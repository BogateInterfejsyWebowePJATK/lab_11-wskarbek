import React from "react";
import ListNumber from "./ListNumber";
import ListPhoto from "./ListPhoto";

export default function List({objs, type}){

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
                    if (type === "numbers") {
                        return (
                            <li key={key}>
                                <button onClick={() => del(key)}>Delete</button>
                                <ListNumber number={obj}/>
                            </li>
                        )
                    } else if (type === "photos") {
                        return (
                            <li key={key}>
                                <button onClick={() => del(key)}>Delete</button>
                                <ListPhoto photo={obj.photo} title={obj.title} date={obj.date}/>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    );
}