import React, { Component } from "react";
import MensajeEstatico from "./MensajeEstatico";

class Bowls extends Component {
    render() {
        return (
            <div id="bowls">
                <h4>I´m the bowls component</h4>
                <MensajeEstatico />
            </div>
        );
    }
}

export default Bowls