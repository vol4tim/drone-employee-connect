import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Menu } from '../components/common';

const ContainerPage = props => (
  <div>
    <h1>Interfaces</h1>
    <hr />
    <div className="row">
      <div className="col-md-3">
        <Menu {...props.menu} />
      </div>
      <div className="col-md-9">
        <div className="panel panel-default">
          <div className="panel-body">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

ContainerPage.propTypes = {
  children: PropTypes.element.isRequired,
  menu: PropTypes.shape({
    list: PropTypes.arrayOf(React.PropTypes.object).isRequired,
    active: PropTypes.string
  }).isRequired,
};

function mapStateToProps(state, props) {
  return {
    menu: {
      active: props.params.name,
      list: state.interfaces.list
    }
  };
}

export default connect(mapStateToProps)(ContainerPage);
