import React from 'react';
import {
  DividerLarge,
  DividerSmall,
  DividerText,
} from '../../components/dividers/dividers';
import Description from '../../components/description/description';

import './italy.css';

const Italy = () => {
  return (
    <>
      <section id="intro">
        <h1 className="title">Italy</h1>
        <h3 className="subtitle">
          A very witty and inspiring subtitle here
        </h3>
      </section>

      <DividerLarge
        img={require('../../assets/img/italy/piemonte.jpeg')}
        alt={'piemonte vineyard'}
      />

      <DividerText
        text={
          'This is a test quote for my text divider component testing testing testing testing testing'
        }
      />

      <Description
        img={require('../../assets/img/italy/sicilia.jpeg')}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </Description>
      <Description
        img={require('../../assets/img/italy/sicilia.jpeg')}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </Description>

      <DividerSmall
        img={require('../../assets/img/italy/abruzzo.jpeg')}
        alt={'Abruzzo Hillside Village'}
      />
    </>
  );
};

export default Italy;
