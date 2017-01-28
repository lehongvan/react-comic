var React = require('react');

var ReturnTop = React.createClass({
  componentDidMount: function() {
    var offset = 250;
    var duration = 300;
    var returnTop = $('.return-top');
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        returnTop.fadeIn(duration);
      } else {
        returnTop.fadeOut(duration);
      }
    });
  },
  returntop: function() {
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({
      scrollTop: 0
    }, 600);
  },
  render: function() {
    return (
      <button type="button" className="btn btn-info btn-raised return-top" onClick={this.returntop}>
        <span className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
      </button>
    );
  }
});

module.exports = ReturnTop;
