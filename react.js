const flattenArray = (acc, el) => {
    if (Array.isArray(el)){
        return acc.concat(el)
    } else {
        acc.push(el)
        return acc
    }
}

const React = {
    createElement: function (type, config, children) {
        children = Array.from(arguments).slice(2).reduce(flattenArray, [])
        let element
        switch (typeof type) {
            case "string":
            element = document.createElement(type)
            children.forEach(child => {
                switch (typeof child) {
                    case "string":
                    const text = document.createTextNode(child)
                    element.appendChild(text)
                    break
                    case "object":
                    if (child !== null) {
                        element.appendChild(child)
                    }
                    break
                }
            })
            break
            case "function":
            const props = {children}
            element = type(props)
            break
        }
        return element
    }
}
