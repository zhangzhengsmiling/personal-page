import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import compose from '../../../utils/compose';
import style from './style';

const dots = [
  {
    width: '2px',
    height: '2px',
    animation: 'round 2s infinite linear',
    transform: 'translate(58px, 0) rotate(0)',
    transformOrigin: '-58px 0',
  },
  {
    width: '3px',
    height: '3px',
    animation: 'round 3s 500ms infinite ease-in-out',
    transform: 'translate(60px, 0) rotate(0)',
    transformOrigin: '-60px 0'
  },
  {
    width: '3px',
    height: '3px',
    animation: 'round 5s infinite linear',
    transform: 'translate(56px, 0) rotate(0)',
    transformOrigin: '-56px 0'
  },
  {
    width: '2px',
    height: '2px',
    animation: 'round 4s 500ms infinite ease-in-out reverse',
    transform: 'translate(64px, 0) rotate(0)',
    transformOrigin: '-64px 0'
  }
]

const AvatarBlock = ({ avatar }) => {
  return (
    <div className="border">
      {
        dots.map((style, index) => (
          <div
            key={index}
            className="dot"
            style={style}
          />
        ))
      }
      
      <div className="avatar-block">
        <img src={avatar} style={{ width: '100%', height: '100%', borderRadius: '50%' }} alt=""/>
      </div>
    </div>
  )
}

export default compose(
  withStyles(style),
  React.memo
)(AvatarBlock)