const Header = (props) => {
    return props.children
}

const element = <div>
    <Header>
        <button>Logo</button>
        Header of the app
    </Header>
    <h1>Todo list:</h1>
    <ul>
        <li>hello</li>
        <li>world</li>

            <li>This</li>
            <li>is</li>
            <li>array!</li>

    </ul>
    <footer>2021 kolumbetko</footer>
</div>
const container = document.querySelector("#app_container")
ReactDOM.render(element, container)