import React, { useState } from 'react';
export default function Accordion({ data, accordiondata }) {
    function openaccordion(id) {
        let elem = document.getElementById(id);
        elem.classList.contains("open") ? elem.classList.remove("open") : elem.classList.add("open");
    }
    function selecticon(elem) {
        let parentelem = elem.parentNode;
        for (let child of parentelem.children) {
            child.classList.remove("selected");
        }
        elem.classList.add("selected");
    }
    const { iconForFeature } = accordiondata;
    let defaultContent = [];
    let toplevelfeature = [];
    data.forEach((entry) => {
        const { wpParent, wpChildren } = entry;
        if (wpParent === null) {
            toplevelfeature.push(entry);
            if (wpChildren.nodes[0] !== undefined) {
                let feature = iconForFeature.find((elem) => elem.feature.name === wpChildren.nodes[0].name);
                defaultContent.push({ "text": feature.bodyText, "image": feature.image.sourceUrl });
            }
            else {
                defaultContent.push("");
            }
        }
    });
    const [Content, setContent] = useState(defaultContent);
    return (React.createElement("div", { className: "Accordion" }, toplevelfeature.map((entry, parentindex) => {
        const { name, wpChildren } = entry;
        return (React.createElement("div", { key: `accordion-${name}` },
            React.createElement("div", { className: "item", onClick: () => { openaccordion(`accordion-${name}`); }, "aria-hidden": true },
                name,
                React.createElement("div", { className: "plus" })),
            React.createElement("div", { className: "itemcontent", id: `accordion-${name}` },
                React.createElement("ul", null, wpChildren.nodes.map((child, index) => {
                    let feature = iconForFeature.find((elem) => elem.feature.name === child.name);
                    let url = feature.icon.sourceUrl;
                    let array = [...Content];
                    array[parentindex] = { "text": feature.bodyText, "image": feature.image.sourceUrl };
                    return (React.createElement("li", { className: index === 0 ? "selected" : "", onClick: (event) => { setContent(array); selecticon(event.currentTarget); }, "aria-hidden": true, key: `accordioncontent-${feature.name}-${index}` },
                        React.createElement("div", { className: 'imageholder' },
                            React.createElement("img", { width: "80", height: "80", src: url, alt: "" })),
                        React.createElement("h5", null, child.name)));
                })),
                React.createElement("div", { className: entry.wpChildren.nodes.length !== 0 ? 'contentholder' : 'hidden' },
                    Content[parentindex].text,
                    React.createElement("div", { className: 'monitorimage' },
                        React.createElement("img", { alt: "", src: Content[parentindex].image }))))));
    })));
}
