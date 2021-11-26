import React from "react";

const Card = ({picURL, title, category, description, time,instURL}) => {
    return (
        <div class="ui card">
            <div className="image">
                <img src={picURL} />
            </div>
            <div className="content">
                <a className="header">{title}</a>
                <div className="meta">
                <span className="date">{category}</span>
                </div>
                <div className="description">
                {description}
                </div>
                <a>
                <i className="instagram"></i>
                {instURL}
                </a>
            </div>
            <div className="extra content">
                <a>
                <i className="clock outline icon"></i>
                {time}
                </a>
            </div>
        </div>
    )
}

export default Card;