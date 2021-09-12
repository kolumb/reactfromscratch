

const Header = (props) => {
    return <header> { props.children } </header>
}

const element = <div>
    <Header className="header">
        <button>Logo</button>
        Header of the app
    </Header>
    <h1>Todo list:</h1>
    <ul className="list">
        <li>hello</li>
        <li>world</li>
        {[
            <li>This</li>,
            <li>is</li>,
            <li>array!</li>
        ]}
    </ul>
    <footer>2021 kolumbetko</footer>
</div>
const container = document.querySelector("#app_container")
ReactDOM.render(element, container)