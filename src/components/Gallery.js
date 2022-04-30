import React from 'react';
export default function Gallery({ gallery }) {
    return (React.createElement("div", { className: "Gallery" }, gallery.map((entry, i) => {
        const { header, bodyText, image } = entry;
        return (React.createElement("div", { className: "col", key: i },
            React.createElement("div", { style: { backgroundImage: `url(${image.sourceUrl})` } }),
            React.createElement("h3", null, header),
            bodyText));
    })));
}
