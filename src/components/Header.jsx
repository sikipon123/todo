import React, { Component } from "react";

class Header extends Component {
  //state

  state = {
    grabbedValue: "",
    listOfToDos: [
      {
        text: "test1",
        isComplete: false
      }
    ]
  };
  // handlers
  handleOnChange = e => {
    this.setState({
      grabbedValue: e.target.value //input value
    });
  };

  handleOnSumbit = e => {
    e.preventDefault(); // do not refresh
    if (this.state.grabbedValue) {
      this.setState({
        listOfToDos: [
          ...this.state.listOfToDos,
          { text: this.state.grabbedValue, isComplete: false }
        ],
        grabbedValue: ""
      });
    } else {
      return alert("PUT A NEW TASK");
    }
  };

  handleDelete = i => {
    this.setState({
      listOfToDos: this.state.listOfToDos.filter((el, index) => index !== i)
    });
  };

  handleOnComplete = i => {
    this.setState({
      listOfToDos: this.state.listOfToDos.map((el, index) => {
        if (index === i) {
          return { ...el, isComplete: !el.isComplete };
        } else {
          return el;
        }
      })
    });
  };

  // rendering
  render() {
    return (
      <div>
        <div className="todo">
          <div className="header">
            <h1>To-Do App!</h1>
            <p>Add New To-Do</p>

            <form onSubmit={this.handleOnSumbit}>
              <input
                type="text"
                onChange={this.handleOnChange}
                value={this.state.grabbedValue}
              />
              <button className="btn btn-primary"> Add </button>
            </form>
          </div>
          <p className="workd">Let's get some work done!</p>

          {/* //LIST OF TODOS */}
          <div className="task">
            {this.state.listOfToDos.map((el, i) => (
              <div className="hide-el" key={i}>
                <button
                  className="btn btn-success btn-lg"
                  onClick={() => this.handleOnComplete(i)}
                >
                  {" "}
                  {el.isComplete ? "Undo" : "Complete"}{" "}
                </button>
                <button
                  className="btn btn-danger btn-lg"
                  onClick={() => this.handleDelete(i)}
                >
                  {" "}
                  Delete{" "}
                </button>
                <span
                  style={{
                    textDecoration: el.isComplete ? "line-through" : "none"
                  }}
                >
                  {" "}
                  {el.text}{" "}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
