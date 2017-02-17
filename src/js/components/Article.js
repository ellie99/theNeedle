import React from "react";

export default class Article extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div class="col-md-12">
        <h4>{title}</h4>
        <img src={this.props.photo} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}
