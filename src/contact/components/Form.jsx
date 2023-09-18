import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tag: "",
    };

    this.onNameChangeHandle = this.onNameChangeHandle.bind(this);
    this.onTagChangeHandle = this.onTagChangeHandle.bind(this);
    this.onSubmitChangeHandle = this.onSubmitChangeHandle.bind(this);
  }

  onNameChangeHandle(e) {
    this.setState(() => {
      return {
        name: e.target.value,
      };
    });
  }

  onTagChangeHandle(e) {
    this.setState(() => {
      return {
        tag: e.target.value,
      };
    });
  }

  onSubmitChangeHandle(e) {
    e.preventDefault();
    this.props.add(this.state);
  }

  render() {
    return (
      <form className="w-full p-4" onSubmit={this.onSubmitChangeHandle}>
        <input
          placeholder="Nama"
          value={this.state.name}
          onChange={this.onNameChangeHandle}
        />
        <input
          placeholder="Tag"
          value={this.state.tag}
          onChange={this.onTagChangeHandle}
        />
        <button className="px-4 py-2 bg-blue-600 text-white" type="submit">
          Tambah
        </button>
      </form>
    );
  }
}
