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
      <h1 className="text-center">About</h1>
      <p>This is a weather application build on React.
        I have built for The Complete React Web Developer Course.
      </p>
      <p>
        Here are some of the tools I use:
      </p>
      <ul>
         <li>
           <a href="https://facebook.github.io/react">React</a> -This was there
             JavaScript framework used.
         </li>
         <li>
           <a href="http://openweathermap.org">Open Weather Map</a> - I used
             Open Weather Map to search for weather data by city name.
         </li>
      </ul>
    </div>

  )
};

module.exports = About;
