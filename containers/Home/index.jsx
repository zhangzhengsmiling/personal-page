import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import style from './style';
import compose from '../../utils/compose';
import AvatarBlock from './AvatarBlock';
import UserNameBlock from './UserNameBlock';
import QuoteBlock from './QuoteBlock';
import MenusBlock from './MenusBlock';
import ReferenceLinksBlock from './ReferenceLinksBlock';

const name = "zhangzhengsmiling";
const quote = {
  text: '顺其自然地过日子是非常安宁的，不应该背上懒惰的骂名。',
  author: '梭罗',
  from: '瓦尔登湖',
};
const menus = [
  {
    label: '首页',
    link: '#',
  },
  {
    label: '关于',
    link: '#'
  }
];

const links = [
  { icon: 'icon-github-fill', link: '#' },
  { icon: 'icon-youxiang', link: '#' }
];
const avatar = 'https://avatars.githubusercontent.com/u/40157660?v=4';
const background = 'http://h2.ioliu.cn/bing/Aoraki_ZH-CN7776353328_1920x1080.jpg?imageslim'


const Home = () => {
  return (
    <div className="background" style={{ 
      background: `url("${background}")`
     }}>
      <div className="mask">
        <div className="info-block absolute-align-center">
          <AvatarBlock avatar={avatar} />
          <UserNameBlock name={name} />
          <QuoteBlock quote={quote} />
          <MenusBlock menus={menus} />
          <ReferenceLinksBlock links={links} />
        </div>
      </div>
    </div>
  )
}

export default compose(
  withStyles(style),
  React.memo
)(Home);
