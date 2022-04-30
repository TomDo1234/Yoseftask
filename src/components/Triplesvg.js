import React from 'react';
export default function Triplesvg({ data }) {
    return (React.createElement("div", { className: "Triplesvg" }, data.map((entry, i) => {
        const { image, bodyText } = entry;
        return (React.createElement("div", { className: "col", key: i },
            React.createElement("div", { className: "img", style: { backgroundImage: `url(${image.sourceUrl})` } }),
            bodyText));
    })));
}
