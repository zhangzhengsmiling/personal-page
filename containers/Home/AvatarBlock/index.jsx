import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import compose from '../../../utils/compose';
import style from './style';

const AvatarBlock = ({ avatar }) => {
  return (
    <div className="border">
      <div className="dot" />
      <div className="dot2" />
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