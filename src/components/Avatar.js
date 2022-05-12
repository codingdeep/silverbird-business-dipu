import React from 'react';

export default function Avatar({ className, src, alt, circle }) {

    console.log(!circle);
    return !circle ? <img className={"avatar " + className} src={src} alt={alt ? alt : "avatar"} />
        :
        <img className={"avatar  " + className} src={src} alt={alt ? alt : "avatar"} />
}
