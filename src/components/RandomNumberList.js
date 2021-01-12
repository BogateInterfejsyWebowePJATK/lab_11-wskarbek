import React from "react";
import List  from "./List";
import RandomNumber from "./RandomNumber";


export default function RandomNumberList({size, min, max}) {
    let randomNumbers = [size];
    for(let i = 0; i < size; i++) {
        randomNumbers[i] = RandomNumber(min, max);
    }
    console.log(randomNumbers);
    return<List objs={randomNumbers}/>
}