import React from "react";

const withStatus = (Component) => {

  class WithStatus extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false,
      };

      this._handelActiveChange = this._handelActiveChange.bind(this);
    }

    _handelActiveChange() {
      this.setState(
          (prevState) => ({isActive: !prevState.isActive})
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          isActive={this.state.isActive}
          onActiveChange={this._handelActiveChange}
        />
      );
    }
  }

  return WithStatus;
};

export default withStatus;
