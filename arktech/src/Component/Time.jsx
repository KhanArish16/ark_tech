import { Component } from "react";

class Time extends Component {
    constructor() {
        super()
        this.state = {
            date: Date(),
            // location: "India"
        }
    };
    componentDidMount() {
        this.newTime = setInterval(() =>
            this.click(), 1000)
    };

    click() {
        this.setState({
            date: Date(),
            // location: "New India"
        })
    }

    render() {
        return <>
            <h4>{this.state.date}</h4>

        </>
    }
}

export default Time;