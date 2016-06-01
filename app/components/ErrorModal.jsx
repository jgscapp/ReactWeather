var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
getDefaultProps: function () {
  return {
    title: 'Error'
  };
},

propTypes: {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
},
//this function is automaticcall called by react after
//the dom has been updated with whatever you have in render function
 componentDidMount: function () {
   var {title, message} = this.props;
   var modalMarkup = (
     <div id="error-modal" className="reveal tiny text-center" data-reveal="">
       <h4>{title}</h4>
       <p>{message}</p>
       <p>
         <button className="button hollow" data-close="">
           Okay
         </button>
       </p>
     </div>
   );

   var $modal = $(ReactDOMServer.renderToString(modalMarkup));
   $(ReactDOM.findDOMNode(this)).html($modal);

   var modal = new Foundation.Reveal($('#error-modal'));
   //this function cause problems with react, so all the code above has to be
   //added from render function in order to work properly during
   //the search function,  if you search for a invalid city, the next time
   // you search for a valid city the function did not work
   modal.open();

 },


    render: function () {

      return (
        // this was done to fix the problem during the error modal
        //because of foundation, you have to create an empty div
        //and move all the code here to componentDidMount
        <div>
        </div>
      );

    }
});

module.exports = ErrorModal;
