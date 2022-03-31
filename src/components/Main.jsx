import React from "react";
import Counter from "./Counter";
import Info from "./Info";
import Lifecycle from "./Lifecycle";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showLifeCycle: true
        };
    }


    render() {
        return (
            <main>
                <h2> Main Komponent</h2>
                <Info remind="Köp kakor" />
                <Counter />
                {this.state.showLifeCycle ? <Lifecycle /> : null }
                <button onClick={() => this.setState({
                    showLifeCycle : !this.state.showLifeCycle
                })}> Toggle Lifecycle</button>
            </main>
        )
    }
}

export default Main;