import React, { useState } from "react";
import Image from "next/image";

type ICustomImage = {
    alt?: string
    imgsrc?: string
    objectFit?: string
    layout?: string
    onErrorSRC?: string
    quality?: number
    classes?: string
    sizes?: string
}

export const CustomImage = (props: ICustomImage) => {
    const [src, setSrc] = useState(props.imgsrc);

    return (
        <Image
            {...props}
            className={props.classes}
            src={src}
            onError={() => setSrc(props.onErrorSRC)}
        />
    );
};
