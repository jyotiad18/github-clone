import React from 'react';
import "./GitAds.css";
import CloseIcon from "@material-ui/icons/Close";

function GitAds() {
	return (
    <div className="gitAds">
      <div className="gitAds__detail">
        <CloseIcon className="gitAds__close"></CloseIcon>
        <p className="gitAds__title">GitHub for mobile</p>
        <p className="gitAds__description">
          Projects, ideas, & code to go. Available natively for Android and iOS.
        </p>
      </div>
    </div>
  );
}

export default GitAds;
