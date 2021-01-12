//import React from "react";

export default function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}