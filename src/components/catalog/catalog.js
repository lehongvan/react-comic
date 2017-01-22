var React = require('react');

var Catalog = React.createClass({
  componentDidMount: function() {
    $.material.init();
  },
  render: function() {
    return (
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
        <a
          className="btn btn-default btn-raised"
          href={'#/catalog/' + this.props.catalog.ID + '/'}
          style={{paddingLeft: 15, paddingRight: 15}}
        >
          <div className="crop">
            <img className="img-responsive" src={this.props.catalog.thumbnailURL} />
          </div>
          <p style={{
              marginTop: 10,
              marginBottom: 0,
              marginLeft: 6,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              width: 120
          }}>
            {this.props.catalog.title}
          </p>
        </a>
      </div>
    );
  }
});

module.exports = Catalog;
