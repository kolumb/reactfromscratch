const element = React.createElement("div", null,
    React.createElement("h1", null, "Todo list:"),
    React.createElement("ul", null,
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
