import React, { useState } from 'react';
import "./Header.css";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AddIcon from "@material-ui/icons/Add";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";

function Header() {
	const [menus, setMenu] = useState(["Pull requests", "Issues", "Marketplace", "Explore"]);
	return (
    <div className="header">
      <div className="header__left">
       <GitHubIcon></GitHubIcon>
        <div className="header__search">
          <input type="text" className="header__input" placeholder="Search or jump to..."></input>
        </div>
        <div className="header__menus">
          {menus?.map((m) => (
            <div className="header__menu">{m}</div>
          ))}
        </div>
      </div>
      <div className="header__icons">
        <NotificationsNoneIcon className="header__icon"></NotificationsNoneIcon>
        <Button>
          <AddIcon />
          <ArrowDropDownIcon></ArrowDropDownIcon>
        </Button>
        <Button>
          <AccountCircleIcon />
          <ArrowDropDownIcon></ArrowDropDownIcon>
        </Button>
      </div>
    </div>
  );
}

export default Header;
