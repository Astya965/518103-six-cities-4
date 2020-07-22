import React from "react";

const withHover = (Component) => {

  class WithHover extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        hoveredItem: null,
      };

      this._handleItemHover = this._handleItemHover.bind(this);
    }

    _handleItemHover(item) {
      this.setState({
        hoveredItem: item
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          hoveredItem={this.state.hoveredItem}
          onItemHover={this._handleItemHover}
        />
      );
    }
  }

  return WithHover;
};

export default withHover;
