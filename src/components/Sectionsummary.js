import React from 'react';
export default function Sectionsummary({ data }) {
    return (React.createElement("div", { className: "sectionsummary", style: { backgroundColor: data.color } },
        React.createElement("h3", null, data.header),
        React.createElement("div", { className: 'thetext' }, data.bodyText)));
}
