import React from 'react';
import compose from '../../utils/compose';

const ReferenceLinksBlock = ({ links }) => {
  return (
    <ul style={{ display: 'inline-flex', marginLeft: '50%', width: 'auto', transform: 'translateX(-50%)', padding: '8px 0', marginTop: '40px' }}>
      {
        links.map((link) => (
          <a key={link.icon} key={link.icon} href={link.link}>
            <li style={{ color: '#fff', width: '48px', height: '32px', textAlign: 'center' }}>
              <i style={{ fontSize: 20 }} className={`iconfont ${link.icon}`} />
            </li>
          </a>
        ))
      }
    </ul>
  )
}


export default compose(
  React.memo
)(ReferenceLinksBlock)