import React, { Component } from 'react'

export default class BoxComponent extends Component {

    render() {
        return (
            <>
                <div className="card border-info" style={{ maxWidth: "18rem", margin: "15px" }}>
                    <div className="card-header">ID: {this.props.data.id}</div>
                    <div className="card-body text-info">
                        <h5 className="card-title">{this.props.data.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </>
        )
    }
}
