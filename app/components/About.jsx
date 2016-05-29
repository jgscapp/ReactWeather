var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

// when there is only a render method  and not
// maitain any state ,you can use
// stateless functional component
var About =  (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>Welcome to about page!</p>
    </div>

  )
};

module.exports = About;
