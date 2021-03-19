import React from 'react';

function Orange1(props) {
  return (
    <div>
      <div class='row col1'>
        <div class='col-md-6 col-xs-6 col2 border1 border3'>{props.v1}</div>
        <div class='col-md-3 col-xs-3 col2 border3'>{props.v2}</div>
        <div class='col-md-3 col-xs-3 col3 border2 border3'>{props.v3}</div>
      </div>
    </div>
  );
}

export default Orange1;
