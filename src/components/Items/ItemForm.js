import { Component } from "react";

  class ItemForm extends Component {
    state = { title: '', price: 0, complete: false }
    handleChange = (e) => {
      const { title, value } = e.target
      this.setState({ [title]: value})
    }

    handleSubmit = (e) => {

      e.preventDefault()
      this.props.addItem(this.state)
      this.setState({ title: '', price: 0, complete: false})
    }

    render () {
      const { title, price} = this.state
      return (
        <form onSubmit={this.handleSubmit}>
          <input
          name="title"
          value={title}
          onChange={this.handleChange}
          required
          placeholder= "Item title"
          />
          <input>
          name=""
          value={price}
          onChange={this.handleChange}
          required
          placeholder= "Item price"
          </input>
          <button type="submit">Submit</button>
        </form>
    )
  }
}

export default ItemForm;