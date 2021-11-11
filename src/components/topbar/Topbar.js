import React from 'react'
import './topbar.css'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWraper">
                <div className="topLeft">
                    <span className="logo">Hotel Pet</span>
                </div>
                <div className="topRight">
                    <div className="topBarIconsContainer">
                        <img src="https://s2.glbimg.com/BjC-TgoLVXdLjWdAy9DUBr13lS4=/0x0:1080x1350/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/B/b/hldiGbQAm2mZUA1mjrVg/marlon-teixeira.jpg" alt="" className="topAvatar"></img>
                    </div>
                    <div className="topBarIconsContainer">
                        <p>Bruna Silva</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
