import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <>
        <div className="row mx-3 my-2">
          <div className="col-12">
            <div className="card py-3 px-3">
              <div className="row">
                <div className="col-1 my-auto">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={"check" + this.props.todo.id}
                      onChange={() => this.props.onCheckbox(this.props.todo)}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor={"check" + this.props.todo.id}
                    ></label>
                  </div>
                </div>
                <div className="col-8 my-auto">
                  <h5 className="my-auto">{this.props.todo.title}</h5>
                </div>
                <div className="col-3 my-auto">
                  <button
                    className="btn btn-danger"
                    style={{ width: "100%" }}
                    onClick={() => this.props.onDelete(this.props.todo.id)}
                  >
                    Radera
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

export default Todo;
