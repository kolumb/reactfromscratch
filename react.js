const React = {
    createElement: (tagName, props, text) => {
        const element = document.createElement(tagName)
        element.innerText = text
        return element
    }
}
