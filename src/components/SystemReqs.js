import React from 'react';
function SystemReqs({ productData }) {
    const { systemRequirements } = productData;
    return (React.createElement("div", { className: 'SystemReqs' },
        React.createElement("h2", null, "System Requirements"),
        React.createElement("h3", null, "To operate the Software successfully the following computer configuration is required:"),
        React.createElement("div", { className: 'configholder' },
            React.createElement("div", { className: "colhalf" },
                React.createElement("ul", null,
                    "Minimum Computer Configuration",
                    systemRequirements.map((entry, i) => (entry.minimumComputerConfiguration !== null ? React.createElement("li", { key: i }, entry.minimumComputerConfiguration) : '')))),
            React.createElement("div", { className: "colhalf" },
                React.createElement("ul", null,
                    "Recommended Computer Configuration",
                    systemRequirements.map((entry, i) => (entry.recommendedComputerConfiguration !== null ? React.createElement("li", { key: i }, entry.recommendedComputerConfiguration) : '')))))));
}
export default SystemReqs;
