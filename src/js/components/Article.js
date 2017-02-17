import React from "react";

export default class Article extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div class="col-md-12">
        <h2>{title}</h2>
        <img src={this.props.photo} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}
