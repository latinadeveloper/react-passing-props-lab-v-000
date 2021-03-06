import React, { Component } from 'react';


const FilteredFruitList = ({
  fruit,
  filter
}) => {
const fruitList = !filter ?  fruit : fruit.filter(i => i.fruit_type == filter);

  return (
    <ul className="fruit-list">
      {fruitList.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  )}

  // componentWillMount() {
  //   fetch('/api/fruit')
  //     .then(response => response.json())
  //     .then(items => this.setState({ items }));
  // }

//   render() {
//     const list = !this.props.filter ? this.state.items : this.state.items.filter(i => i.fruit_type === this.props.filter);

//     return (
//       <ul className="fruit-list">
//         {list.map((item, index) => <li key={index}>{item.char}</li>)}
//       </ul>
//     );
//   }
// }
  FilteredFruitList.defaultProps = {
    fruit: [],
    filter: null
  }
export default FilteredFruitList;


// const list = !this.props.filter ? this.state.items : this.state.items.filter(i => i.fruit_type === this.props.filter);

//     return (
//       <ul className="fruit-list">
//         {list.map((item, index) => <li key={index}>{item.char}</li>)}
//       </ul>
//     );