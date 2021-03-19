import React from 'react';

function Orange(props) {
  return (
    <div>
      <div class='row'>
        <div class='col-md-3 col-xs-3 col2 colClass1 border1'>{props.v1}</div>
        <div class='col-md-3 col-xs-3 col2'>{props.v2}</div>
        <div class='col-md-3 col-xs-3 col2'>{props.v3}</div>
        <div class='col-md-3 col-xs-3 col3 border2'>{props.v4}</div>
      </div>
    </div>
  );
}

export default Orange;
