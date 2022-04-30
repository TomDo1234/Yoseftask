import React from 'react';
export default function Header() {
    return (React.createElement("header", { className: 'theheader' },
        React.createElement("div", { className: "thelogo" }),
        React.createElement("div", { className: "headercontainer" },
            React.createElement("div", { className: "headerlink" },
                "Products\u00A0\u00A0",
                React.createElement("img", { className: "downarrow", alt: "" })),
            React.createElement("div", { className: "headerlink" },
                "Industries\u00A0\u00A0",
                React.createElement("img", { className: "downarrow", alt: "" })),
            React.createElement("div", { className: "headerlink" }, "Pricing"),
            React.createElement("div", { className: "headerlink" }, "About"),
            React.createElement("div", { className: "headerlink" }, "Downloads"),
            React.createElement("div", { className: "headerlink" }, "Dealers"),
            React.createElement("div", { className: "headerlink" }, "Support"),
            React.createElement("div", { className: "headerlink" }, "Contact")),
        React.createElement("div", { className: "theshoppingbag" })));
}
