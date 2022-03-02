import React from 'react';

const About = () => {
  return (
    <div>
      <div style={{ width: 40, height: 'auto', background: 'orange', float: 'left' }}>
        <div style={{ width: '8px', height: '8px', background: 'green', marginLeft: '50%', transform: 'translateX(-50%)', borderRadius: '50%' }}></div>
        <div style={{ width: '3px', height: '80px', background: 'green', marginLeft: '50%', transform: 'translateX(-50%)' }}></div>
      </div>
      <div style={{ width: '100px', height: '100px', background: '#eee', float: 'left' }}>
        this is asdf content...
      </div>
    </div>
  )
}

export default About;
