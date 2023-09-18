import React from "react";
import List from "./components/List";
import { getData } from "../utills/contact";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getData(),
    };

    this.onDeleteHandle = this.onDeleteHandle.bind(this);
  }

  onDeleteHandle(id) {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-2xl text-black">Daftar Kontak</h1>
        <List contacts={this.state.contacts} onDelete={this.onDeleteHandle} />
      </div>
    );
  }
}
