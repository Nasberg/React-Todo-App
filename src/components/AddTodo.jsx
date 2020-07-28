import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    return (
      <>
        <div>
          <div className="row mx-3 my-4">
            <div className="col-12">
              <div className="card px-3 py-3">
                <div className="row">
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Skriv in syssla..."
                      onChange={this.props.onInput}
                      value={this.props.value}
                    />
                  </div>
                  <div className="col-4">
                    <button
                      className="btn btn-primary"
                      style={{ width: "100%" }}
                      onClick={this.props.onAddTodo}
                    >
                      Lägg till
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </>
    );
  }
}

export default AddTodo;
