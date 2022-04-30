import React from 'react';
export default function Static1({ data }) {
    return (React.createElement("div", { className: 'static1' },
        React.createElement("div", { className: "colhalf" },
            React.createElement("div", null, data.upgradeText),
            React.createElement("div", { className: "roundbutton" }, "Upgrade")),
        React.createElement("div", { className: "colhalf" },
            React.createElement("div", null, data.downloadText),
            React.createElement("div", { className: "roundbutton" }, "Download FREE Demo"))));
}
