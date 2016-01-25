var React = require('react');
var Catalog = require('./catalog');
var CatalogDetail = require('./catalogDetail');
var ScrollView = require('./scrollView');
var PagingView = require('./pagingView');
var LoadMore = require('./loadMore');
var NoMore = require('./noMore');
var ReturnTop = require('./returnTop');
var NotFound = require('./notFound');

var Wrapper = React.createClass({
  componentToRender: function() {
    var catalogNodes = this.props.catalogs.map(function(catalog, index) {
      return (
        <Catalog catalog={catalog} key={index} />
      );
    });
    var component = null;
    switch (this.props.lookup) {
      case 'catalog':
        component = (
          <div>
            <div className="row catalog-nodes">
              {catalogNodes}
            </div>
            <div className="clearfix"></div>
            <div className="misc">
              {this.props.more ? <LoadMore loadMore={this.handleLoadMore} /> : <NoMore />}
            </div>
            <ReturnTop />
          </div>
        );
        break;
      case 'catalogDetail':
        component = <CatalogDetail catalog={this.props.catalog} chapters={this.props.chapters} />;
        break;
      case 'page':
        var viewMode = localStorage.getItem('viewMode') ? localStorage.getItem('viewMode') : this.props.viewMode
        component = viewMode === 'scroll'
        ? <ScrollView
            pages={this.props.pages}
            pageIndex={this.props.pageIndex}
            catalog={this.props.catalog}
            chapter={this.props.chapter}
            nextChapter={this.props.nextChapter}
            prevChapter={this.props.prevChapter}
            viewMode={this.props.viewMode}
          />
        : <PagingView
            pages={this.props.pages}
            pageIndex={this.props.pageIndex}
            catalog={this.props.catalog}
            chapter={this.props.chapter}
            nextChapter={this.props.nextChapter}
            prevChapter={this.props.prevChapter}
            viewMode={this.props.viewMode}
         />;
        break;
      case '404':
        component = <NotFound />
        break;
    }
    return component;
  },
  handleLoadMore: function() {
    this.props.onSearch(this.props.query, true);
  },
  render: function() {
    return this.componentToRender();
  }
});

module.exports = Wrapper;
