import React, { Component } from "react";
import PropTypes from "prop-types";
class AddFishForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func.isRequired
  };

  createFish = event => {
    event.preventDefault();
    console.log("making a fish");

    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addFish(fish);
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" name="name" ref={this.nameRef} placeholder="Name" />
        <input
          type="text"
          name="price"
          ref={this.priceRef}
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out!!</option>
        </select>
        <textarea name="desc" placeholder="Desc" ref={this.descRef} />
        <input
          type="text"
          name="image"
          placeholder="Image"
          ref={this.imageRef}
        />
        <button type="submit">+ Add fish</button>
      </form>
    );
  }
}
export default AddFishForm;
