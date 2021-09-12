"use strict"

const ReactDOM = {
    render: (reactElement, container) => {
        while(container.firstChild) {
            container.removeChild(container.firstChild)
        }
        container.appendChild(ReactDOM.createDOMElement(reactElement))
    },
    createDOMElement: (reactElement) => {
        let element
        switch (typeof reactElement.kind) {
            case "string":
                element = document.createElement(reactElement.kind)
                reactElement.children.forEach(child => {
                    switch (typeof child) {
                        case "string":
                            const text = document.createTextNode(child)
                            element.appendChild(text)
                            break
                        case "object":
                            if (child !== null) {
                                const DOMchild = ReactDOM.createDOMElement(child)
                                element.appendChild(DOMchild)
                            }
                            break
                    }
                })
                break
            case "function":
                if (reactElement.children.length > 0) reactElement.props.children = reactElement.children
                const newReactElement = reactElement.kind(reactElement.props)
                if (Array.isArray(element)) {
                    console.error("React componen must return only one Element, not an array.")
                    return
                }
                element = ReactDOM.createDOMElement(newReactElement)
                break
        }
        return element
    }
}
