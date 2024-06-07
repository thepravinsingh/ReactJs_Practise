import React from "react";
import "./FolderSecond.css";
import SectionLayout from "../../components/component-2/SectionLayout";
import cardImg from "../../assets/card.png";
import protoType from "../../assets/prototype.png";
import click from "../../assets/click.png";
import surveys from "../../assets/surveys.png";
import preference from "../../assets/preference.png";
import test from "../../assets/test.png";

const FolderSecond = () => {
  return (
    <div className="appContainer">
      <div className="app-upper-div">
        <h2 className="f2Heading">Your user research Swiss Army knife</h2>
        <button>See all features ➡️</button>
      </div>
      <SectionLayout
        icon={cardImg}
        heading="Card sorting"
        para="Discover how people group and label information"
      />
      <SectionLayout
        icon={protoType}
        heading="Prototype tests"
        para="Discover how people navigate your Figma prototypes"
      />
      <SectionLayout
        icon={click}
        heading="First click tests"
        para="Test interaction with first click and navigation tests"
      />
      <SectionLayout
        icon={surveys}
        heading="Design surveys"
        para="Get feedback on images, videos for audio files"
      />
      <SectionLayout
        icon={preference}
        heading="Preference tests"
        para="Find out which designs users prefer and why taat"
      />
      <SectionLayout
        icon={test}
        heading="Five second tests"
        para="Test comprehensibility by measuring first impressions"
      />
    </div>
  );
};

export default FolderSecond;
