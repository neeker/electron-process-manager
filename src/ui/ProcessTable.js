import React from 'react';
import PropTypes from 'prop-types';

import ProcessRow from './ProcessRow';
import ProcessTableHeader from './ProcessTableHeader';

export default class ProcessTable extends React.Component {
  static propTypes = {
    processData: PropTypes.arrayOf(PropTypes.object),
    selectedPid: PropTypes.number,
    sorting: PropTypes.PropTypes.shape({
      path: PropTypes.string,
      how: PropTypes.string
    }),
    onSortingChange: PropTypes.func,
    onSelectedPidChange: PropTypes.func
  }

  render() {
    return (
      <table className="process-table table-striped">
        <thead>
          <tr>
            <ProcessTableHeader
              path='pid'
              sorting={this.props.sorting}
              onSortingChange={this.props.onSortingChange}
            >进程ID</ProcessTableHeader>

            <ProcessTableHeader
              path='webContents.0.URLDomain'
              sorting={this.props.sorting}
              onSortingChange={this.props.onSortingChange}
            >访问域名</ProcessTableHeader>

            <ProcessTableHeader
              path='webContents.0.type'
              sorting={this.props.sorting}
              onSortingChange={this.props.onSortingChange}
            >任务类型</ProcessTableHeader>

            <ProcessTableHeader
              path='memory.workingSetSize'
              sorting={this.props.sorting}
              onSortingChange={this.props.onSortingChange}
            >内存占用</ProcessTableHeader>

            <ProcessTableHeader
              path='cpu.percentCPUUsage'
              sorting={this.props.sorting}
              onSortingChange={this.props.onSortingChange}
            >% CPU</ProcessTableHeader>

            <ProcessTableHeader
              path='cpu.idleWakeupsPerSecond'
              sorting={this.props.sorting}
              onSortingChange={this.props.onSortingChange}
            >闲置状态唤醒</ProcessTableHeader>

            <ProcessTableHeader
              path='webContents.0.id'
              sorting={this.props.sorting}
              onSortingChange={this.props.onSortingChange}
            >任务ID</ProcessTableHeader>

            <ProcessTableHeader
              path='webContents.0.type'
              sorting={this.props.sorting}
              onSortingChange={this.props.onSortingChange}
            >任务类型</ProcessTableHeader>

            <ProcessTableHeader
              path='webContents.0.URL'
              sorting={this.props.sorting}
              onSortingChange={this.props.onSortingChange}
            >页面地址</ProcessTableHeader>
          </tr>
        </thead>
        <tbody>
        {
          this.props.processData.map(p =>
            <ProcessRow
              key={p.pid}
              {...p}
              onSelect={() => this.props.onSelectedPidChange(p.pid)}
              selected={this.props.selectedPid === p.pid}
            />
          )
        }
        </tbody>
      </table>
    )
  }
}
