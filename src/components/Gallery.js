import React from 'react';
import List from "./List";


export default function Gallery() {

    function loadPhotos() {
        let json = require("../data/dogs.json");
        let photos = [];
        Object.keys(json).forEach((key) => {
            photos.push(json[key]);
        })
        return photos;
    }

    return (
        <div className="Gallery">
            <List objs={loadPhotos()} type="photos"/>
        </div>
    )
}