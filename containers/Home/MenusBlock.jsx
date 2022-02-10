import React from 'react';
import compose from '../../utils/compose';

const MenusBlock = ({ menus }) => {
  return (
    <ul style={{ display: 'inline-flex', marginLeft: '50%', width: 'auto', transform: 'translateX(-50%)', padding: '8px 0' }}>
      {
        menus.map(menu => (
          <div key={menu.label} style={{ width: 'auto', padding: '0 8px' }} >
            <a href={menu.link}>
              <li style={{ width: '80px', height: '24px', border: '1px solid #fff', color: '#fff', textAlign: 'center', borderRadius: '10px' }}>{menu.label}</li>
            </a>
          </div>
        ))
      }
    </ul>
  )
}

export default compose(
  React.memo
)(MenusBlock)
