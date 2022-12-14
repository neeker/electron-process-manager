import React from 'react';
import PropTypes from 'prop-types';

export default class ToolBar extends React.Component {

  static propTypes = {
    onKillClick: PropTypes.func,
    disableKill: PropTypes.bool,
    onOpenDevToolClick: PropTypes.func,
    disabelOpenDevTool: PropTypes.bool
  }

  render() {
    return (
        <div className="toolbar-actions">
            <div className="btn-group">
              <button
                className="btn btn-default"
                disabled={this.props.disableKill}
                onClick={this.props.onKillClick}
              >
                结束进程
              </button>
              <button
                className="btn btn-default"
                disabled={this.props.disabelOpenDevTool}
                onClick={this.props.onOpenDevToolClick}
              >
                打开调试
              </button>
            </div>
          </div>
    )
  }
}
