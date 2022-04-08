import React from 'react';

const AboutScreen = () => {
  return (
    <div>
      <h1>About This App</h1>
      <h3>App Name: NotesKeeper</h3>
      <h3>About: Store your notes online</h3>
      <h3>
        By -{' '}
        <a
          href='https://www.linkedin.com/in/ranjan-kumar-m-818367158/'
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          Ranjan Kumar Mandal
        </a>
      </h3>
    </div>
  );
};

export default AboutScreen;
