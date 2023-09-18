import React from "react";
import List from "./components/List";
import Form from "./components/Form";
import { getData } from "../utills/contact";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getData(),
    };

    this.onDeleteHandle = this.onDeleteHandle.bind(this);
    this.onAddHandle = this.onAddHandle.bind(this);
  }

  onAddHandle({ name, tag }) {
    this.setState((prev) => {
      return {
        contacts: [
          ...prev.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: "/images/default.jpg",
          },
        ],
      };
    });
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
        <Form add={this.onAddHandle} />
        <List contacts={this.state.contacts} onDelete={this.onDeleteHandle} />
      </div>
    );
  }
}
