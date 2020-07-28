import React, { Component } from "react";

class ClearTodos extends Component {
  render() {
    return (
      <>
        <hr />
        <div className="row mx-3 my-4">
          <div className="col-12">
            <div className="card py-3 px-3">
              <div className="row">
                <div className="col-4 mx-auto">
                  <button
                    className="btn btn-danger"
                    style={{ width: "100%" }}
                    onClick={this.props.onClear}
                  >
                    Rensa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ClearTodos;
