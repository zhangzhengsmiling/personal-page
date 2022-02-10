import React from 'react';
import compose from '../../utils/compose';

const AvatarBlock = ({ avatar }) => {
  return (
    <div style={{ width: '100px', height: '100px', borderRadius: '50%', marginLeft: '50%', transform: 'translateX(-50%)', padding: '8px' }}>
      <img src={avatar} style={{ width: '100%', height: '100%', borderRadius: '50%' }} alt=""/>
    </div>
  )
}

export default compose(
  React.memo
)(AvatarBlock)