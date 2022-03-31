import React from "react";

class Lifecycle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }


    componentDidMount() {
        console.log('ComponentDidMunt');
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Component will unmount');    
    }

    render() {
        return (
            <div>
                Lifecycle
                <button onClick={
                    () => this.setState({count : this.state.count + 1 } ) 
                    } > Update </button>

            </div>
        )
    }
}

export default Lifecycle;