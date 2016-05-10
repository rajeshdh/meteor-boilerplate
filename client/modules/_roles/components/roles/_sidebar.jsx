import React from 'react';

export default class extends React.Component {

  render() {
    return (
      <div className="box box-solid">
        <div className="box-header with-border">
          <h3 className="box-title">Roles navigation</h3>
        </div>
        <div className="box-body no-padding">
          <ul className="nav nav-pills nav-stacked">
            <li><a href="/roles"><i className="fa "></i> Roles collection</a></li>
            <li><a href="/roles/add"><i className="fa "></i> Add role</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
