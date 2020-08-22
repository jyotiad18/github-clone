import React, { useState } from 'react';
import "./Repository.css";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@material-ui/icons/Description";
import Divider from "@material-ui/core/Divider";
import ClassIcon from "@material-ui/icons/Class";

function Repository() {
	const [repositories, setRepositories] = useState([
    "jyotiad18/Maharish-QA",
    "jyotiad18/upwork-clone",
    "jyotiad18/amazone-clone",
    "jyotiad18/MY-SHOP",
    "jyotiad18/twitter-clone",
    "jyotiad18/hamro-baglung-server",
    "jyotiad18/GK",
    "jyotiad18/start-node-express-test",
    "jyotiad18/LMB",
  ]);
	return (
    <div className="repository">
      <div className="repository__header">
        <h4>Repositories</h4>
			<Button className="repository__headerButton">
				<ClassIcon />
				New
			</Button>
      </div>
      <input
        className="repository__text"
        type="text"
        placeholder="Find a repository..."
      ></input>
      <div className="repository__lists">
        {repositories?.map((repository) => (
          <div className="repository__list">
            <DescriptionIcon className="repository__listIcon"></DescriptionIcon>
            <div className="repository__info">{repository}</div>
          </div>
        ))}
      </div>
      <div className="repository__showmore">
        <Button>Show more</Button>
      </div>
      <Divider className="repository__divider"></Divider>
      <div className="repository__team">
        <p>
          <strong>Working with a team?</strong>
        </p>
        <p className="repository__teamDetail">
          GitHub is built for collaboration. Set up an organization to improve
          the way your team works together, and get access to more features.
        </p>
        <Button className="repository__buttonOrg" variant="outlined">
          Create an organisation
        </Button>
      </div>
    </div>
  );
}

export default Repository;
