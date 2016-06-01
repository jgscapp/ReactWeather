var React = require('react');
var {Link} = require('react-router');


// var Examples = React.createClass({
//   render: function () {
//     return (
//       <h3>Examples Component</h3>
//     )
//   }
// });

//refacto to stateless functional component
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are few examples locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Groton CT'>Groton, CT</Link>
        </li>
        <li>
          <Link to='/?Monterrey NL'>Monterrey, NL</Link>
        </li>
      </ol>
  </div>

  )
};

module.exports = Examples;
