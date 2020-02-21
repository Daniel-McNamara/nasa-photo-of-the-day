import React from 'react';

export default function Image(props) {
    console.log("Image Props", props);
    return <img src={props.picture.url} alt={props.picture.title}></img>
}
