"use strict"

const flattenArray = (acc, el) => {
    if (Array.isArray(el)){
        return acc.concat(el)
    } else {
        acc.push(el)
        return acc
    }
}

const React = {
    createElement: function (kind, config, children) {
        const props = {}
        if (config !== null) {
            for (const propName in config) {
                if (config.hasOwnProperty(propName)) {
                    props[propName] = config[propName]
                }
            }
        }
        children = Array.from(arguments).slice(2).reduce(flattenArray, [])

        return {kind, props, children}
    }
}
