import React from 'react';

export default function Avatar({ className, src, alt, circle }) {


    return !circle ? <img className={"avatar " + className} src={src} alt={alt ? alt : "avatar"} />
        :
        <img className={"avatar square " + className} src={src} alt={alt ? alt : "avatar"} />
}
