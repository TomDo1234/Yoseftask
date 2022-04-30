import React from 'react';
export default function LoveUsing({ data }) {
    return (React.createElement("div", { className: 'loveusing' },
        React.createElement("div", { className: "left" },
            React.createElement("h3", null, data.heading),
            React.createElement("div", null,
                React.createElement("div", { className: "feedback" }, data.subheading),
                React.createElement("div", { className: "writeareview" }))),
        React.createElement("div", { className: "message" }, data.bodyText)));
}
