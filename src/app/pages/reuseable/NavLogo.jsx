import React, { Component } from 'react';
import { Popover } from 'antd';

import './styles/navLogo.scss';


const content1 = (
  <div>
    <div className="buuton"><div className="navLogoButton"></div></div>
    <div className="buuton"><div className="navLogoButton"></div></div>
  </div>
);

class NavLogo extends Component
{
  render()
  {
    return (
      <>
        <div>
          <Popover id="logoPopContainer" className="navSet" placement="bottom" content={content1} trigger="click contextMenu">
            <label className="logo"><div className="navLogoButton"></div></label>
          </Popover>
        </div>
      </>
    );
  }
}
export default NavLogo;








