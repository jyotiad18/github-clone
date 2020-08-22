import React, { useState } from 'react';
import "./ExploreRepo.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Divider from "@material-ui/core/Divider";

function ExploreRepo() {
	const [expoRepos, setExpoRepos] = useState([
    {
      title: "r1/HackerRank-Solutions",
      detail: "My HackerRank Solutions in JavaScript",
      color: "yellow",
      language: "JavaScript",
      star: 17,
    },
    {
      title: "MrinmoiHossain/HackerRank",
      detail:
        "HackerRank Online Judge Problem Solutions included Algorithms, Data Structure, Mathematics, Programming Language",
      color: "red",
      language: "C++",
      star: 28,
    },
    {
      title: "f/react-hooks-todo-app",
      detail:
        "A highly testable TodoList app that uses React hooks and Context.",
      color: "yellow",
      language: "JavaScript",
      star: 167,
    },
  ]);
	return (
    <div className="exploreRepo">
      <p className="exploreRepo__title">Explore repositories</p>
      <div className="exploreRepo__details">
        {expoRepos?.map((expo) => (
          <div className="exploreRepo__detail">
            <p className="exploreRepo__detailTitle">{expo.title}</p>
            <p className="exploreRepo__detaildesc">{expo.detail}</p>
            <div className="exploreRepo__detailranks">
              <div className="exploreRepo__detailranks__lang">
                <FiberManualRecordIcon
                  style={{ color: expo.color }}
                ></FiberManualRecordIcon>
                {expo.language}
              </div>
              <div className="exploreRepo__detailranks__star">
                <StarBorderIcon></StarBorderIcon> {expo.star}
              </div>
            </div>
            <Divider></Divider>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreRepo;
