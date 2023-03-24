import React, { Component } from 'react';
import "./style/MadLibContent.css";

class MadlibContent extends Component {
    render() {
        this.count = 1
        const data = this.props.data;
        return (
            <div className={data.completedForm ? 'showContent' : 'hideContent'}>
                <div className="content-wrapper">
                   There was a {(this.renderLabel(data.color))} {(this.renderLabel(data.noun))} who loved a {(this.renderLabel(data.adjective))} {(this.renderLabel(data.noun2))}

                </div>
            </div>
        )
    }

    renderLabel = function(state) {
        return (
            <span>
                <label className="black-label">{this.count++}</label><b className="bold-text">{state}</b>
            </span>
        )
    }.bind(this);
}

export default MadlibContent;