import React from 'react';
import Image from 'assets/images/image.png';
import './frontpage.scss';

const Frontpage = () => {
  return (
    <>
      <h1>Welcome!</h1>
      <img src={Image} />
    </>
  );
};

export default Frontpage;
