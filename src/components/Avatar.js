import React from 'react';

export default function Avatar({ className, src, alt, circle }) {

    const avatarClass = className ? className : null;

    return <img className={"avatar " + avatarClass} src={src} alt={alt ? alt : "avatar"} />
}
