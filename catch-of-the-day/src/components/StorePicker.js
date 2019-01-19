import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  // declare a property instead of a method
  // goToStore as a property is not part of the instance of the component
  // property with an arrow function
  goToStore = e => {
    e.preventDefault();
    console.log(this.myInput.current.value);
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };

  //   // method that will run before the storepicke component is created
  //   constructor() {
  //     // super() needs to be called first before anything will
  //     // run in the constructor. It will run the component first -> (React.component)
  //     super();
  //     this.goToStore = this.goToStore.bind(this);
  //   }
  /* this is the METHOD goToStore()
   *   that is NOT bound to the instance
   *   of the component
   */
  //   goToStore(e) {
  //     // 1. Stop the form from submitting
  //     e.preventDefault();
  //     // 2. get the test from that input
  //     console.log(this);
  //     // 3. changethe page to /store/whatever-they-entered
  //   }

  render() {
    return (
      <React.Fragment>
        <form action="" className="store-selector" onClick={this.goToStore}>
          <h2>Please Enter a Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
