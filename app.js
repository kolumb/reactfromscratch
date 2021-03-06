"use strict"

const Header = (props) => {
    return React.createElement("header", null, props.children)
}

const element = React.createElement("div", null,
    React.createElement(Header, {className: "header"},
        React.createElement("button", null, "Logo"),
        "Header of the app"
    ),
    React.createElement("h1", null, "Todo list:"),
    React.createElement("ul", {className: "list"},
        React.createElement("li", null, "hello"),
        React.createElement("li", null, "world"),
        [
            React.createElement("li", null, "This"),
            React.createElement("li", null, "is"),
            React.createElement("li", null, "array!")
        ]
    ),
    React.createElement("footer", null, "2021 kolumbetko")
)
const container = document.querySelector("#app_container")
ReactDOM.render(element, container)
