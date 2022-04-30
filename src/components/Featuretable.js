import React from 'react';
export default function Featuretable({ data }) {
    return (React.createElement("div", { className: "Featuretable" },
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "colheading" },
                React.createElement("div", null)),
            React.createElement("div", { className: "colheading" },
                React.createElement("div", { className: 'vcut' })),
            React.createElement("div", { className: "colheading" },
                React.createElement("div", { className: 'vltr' })),
            React.createElement("div", { className: "colheading" },
                React.createElement("div", { className: 'vpro' })),
            React.createElement("div", { className: "colheading" },
                React.createElement("div", { className: 'vdsr' })),
            React.createElement("div", { className: "colheading" },
                React.createElement("div", { className: 'vxpt' }))),
        data.info.map((entry, i) => {
            const { infoLabel, cut, dsr, xpt, pro, ltr } = entry;
            return (React.createElement("div", { className: "row", key: i },
                React.createElement("div", { className: "col" },
                    React.createElement("div", { dangerouslySetInnerHTML: { __html: infoLabel } })),
                React.createElement("div", { className: "col" },
                    React.createElement("div", { dangerouslySetInnerHTML: { __html: cut } })),
                React.createElement("div", { className: "col" },
                    React.createElement("div", { dangerouslySetInnerHTML: { __html: ltr } })),
                React.createElement("div", { className: "col" },
                    React.createElement("div", { dangerouslySetInnerHTML: { __html: pro } })),
                React.createElement("div", { className: "col" },
                    React.createElement("div", { dangerouslySetInnerHTML: { __html: dsr } })),
                React.createElement("div", { className: "col" },
                    React.createElement("div", { dangerouslySetInnerHTML: { __html: xpt } }))));
        }),
        React.createElement("div", { style: { display: "flex" } },
            React.createElement("div", { className: "platforms-heading" }, "Computer Platforms"),
            React.createElement("div", { className: "platforms-content" }, data.computerPlatform))));
}
