"use strict"

const ReactDOM = {
    render: (element, container) => {
        while(container.firstChild) {
            container.removeChild(container.firstChild)
        }
        container.appendChild(element)
    }
}
