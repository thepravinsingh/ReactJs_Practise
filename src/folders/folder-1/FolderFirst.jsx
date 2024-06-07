import React from "react";
import "./FolderFirst.css";
import YoutubeCard from "../../components/component-1/YoutubeCard";
import img1 from "../../assets/thumnail1.jpg";
import img2 from "../../assets/thumnail2.jpg";
import img3 from "../../assets/thumnail3.jpeg";
import img4 from "../../assets/thumnail4.jpeg";
import img5 from "../../assets/thumnail.5.jpeg";
import img7 from "../../assets/thumnail7.jpg";

const FolderFirst = () => {
  return (
    <div className="gridContainer">
      <div className="uprPortion">
        <button className="button-big">Recently uploaded</button>
        <button className="button-small">Popular</button>
      </div>
      <YoutubeCard
        image={img1}
        alt="Image title"
        heading="CSS variables | Toggle to the Dark Mode using CSS Variables !..."
        para="1.2K views . 2 days ago"
      />
      <YoutubeCard
        image={img2}
        alt="Image title"
        heading="Responsive Website Design with CSS Media Queries | Complete We..."
        para="2.3K views . 4 days ago"
      />
      <YoutubeCard
        image={img3}
        alt="Image title"
        heading="Build this Portfolio Gallery using CSS Grid | Complete Website..."
        para="2K views . 4 days ago"
      />
      <YoutubeCard
        image={img4}
        alt="Image title"
        heading="Css Grid Layout in One Video | Complete Web Development Cour..."
        para="4K views . 8 days ago"
      />
      <YoutubeCard
        image={img5}
        alt="Image title"
        heading="Build This Complete Modern Website Using Only HTML And CS..."
        para="paragraph"
      />
      <YoutubeCard
        image={img4}
        alt="Image title"
        heading="Flexbox in CSS in One Video | Easy Tutorial | Complete Web..."
        para="5.3K views . 3 weeks age"
      />
      <YoutubeCard
        image={img7}
        alt="Image title"
        heading="Make a Glassmorphic SignUp Page using Basic CSS | Mini Project | W..."
        para="10K views . 1 month ago"
      />
      <YoutubeCard
        image={img2}
        alt="Image title"
        heading="CSS Float & Clear Overflow | Complete Web Development Cour..."
        para="7.1K views . 1 month ago"
      />
    </div>
  );
};

export default FolderFirst;
