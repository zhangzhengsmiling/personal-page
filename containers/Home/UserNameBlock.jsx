import React from 'react';
import compose from '../../utils/compose';

const UserNameBlock = ({ name }) => {
  return (
    <div style={{ color: '#fff', textAlign: 'center', fontWeight: 600, fontSize: '24px', padding: '8px 0' }}>
      {name}
    </div>
  )
}

export default compose(
  React.memo
)(UserNameBlock)