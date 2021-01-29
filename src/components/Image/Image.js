import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Image = (props) => (
    <LazyLoadImage
        effect="blur"
        alt={props.alt}
        height={props.height}
        src={props.src} // use normal <Image> attributes as props
        width={props.width}
        className={props.className}
        style={props.style}
    />
)

export default Image;