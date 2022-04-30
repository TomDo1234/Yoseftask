import React from "react";
export default function Banner({ data }) {
    return (React.createElement("div", { style: { backgroundImage: `url(${data.image.sourceUrl})` }, className: "Banner" },
        React.createElement("div", { className: "container" },
            React.createElement("h2", null, data.heading),
            React.createElement("h3", null, data.subheading),
            React.createElement("div", { className: "firstrow" },
                React.createElement("div", { className: "roundbutton" }, "Buy Now"),
                React.createElement("div", { className: "roundbutton" }, "Upgrade To V5")),
            React.createElement("br", null),
            React.createElement("div", { className: "roundbutton download" }, "Download FREE Demo"))));
}
