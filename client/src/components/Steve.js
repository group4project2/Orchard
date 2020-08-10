import React from "react";

function Steve() {
    return (
        <div>
            <div className="card card-about">
                <img className="card-img-top" src={require("./banana.png")} alt="steve" />
                <div className="card-body">
                    <h5 className="card-title">Steve!</h5>
                    <p className="card-text">Steve worked a ton on the back end of this project. He also likes bananas!</p>
                    <a href="https://github.com/Steve-Munoz" className="btn btn-primary">Steve's Github</a>
                </div>
            </div>
        </div>
    );
}

export default Steve;