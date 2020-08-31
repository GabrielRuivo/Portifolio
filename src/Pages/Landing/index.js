import React from 'react';

import { ArrowDownOutlined } from '@ant-design/icons';

import './styles.css'

function Landing() {
  return (
    <div id="container" >
      <div className="landing" >
        <div className="box-title">
          <div className="title">
            <p className="hello" >Hello I'm</p> <br/>
            <span className="name" >Gabriel Ruivo</span> <br/>
            <p className="description" >A studant front-end</p>

            <button className="see-project" >See my projects <ArrowDownOutlined /> </button> 

          </div>
        </div>
        <div className="image-bg" />
      </div>      
    </div>
  );
}

export default Landing;