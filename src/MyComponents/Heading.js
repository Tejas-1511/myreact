import React from 'react'
import './Heading.css';

export const Heading = () => {
    return (
        <div className="temp" style={{display:"flex"}}>
            <img className='image' src="https://i.pinimg.com/736x/5f/7a/ff/5f7aff7fcf3ebcfaf8038b480a5b51c8.jpg"
                 alt="" />
            <figure className="text-center">
                <blockquote className="blockquote">
                    <h1>AbhiP Institute of Tech</h1>
                </blockquote>
                <figcaption className="blockquote-footer" style={{font:"status-bar"}}>
                    <b>Path Towards Excellence</b>
                </figcaption>
            </figure>
        </div>
    )
}
// 12.style={"font-family: Sofia, sans-serif"}