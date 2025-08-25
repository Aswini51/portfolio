import React from "react";
import "./prof.css";

function Profile() {
  return (
    <div className="profile-card">
      <img src="/ME PASSPORT PHOTO.jpg" alt="G Aswini" className="profile-img" />

      <div className="name">
        <h1>G ASWINI</h1>
        <p>Department:B.E CSE</p>
        <p>Register No.:212224040037</p>
      </div>

      <div className="profile-section">
        <h2>About Me</h2>
        <p>
          I am G ASWINI. I am currently pursuing my B.E in Computer Science
          Engineering at Saveetha Engineering College. I am passionate about
          coding and web development.
        </p>
      </div>

      <div className="profile-section">
        <h2>Skills</h2>
        <ul>
          <li>HTML & CSS</li>
          <li>C & Python</li>
          <li>React (Basics)</li>
        </ul>
      </div>

      <div className="profile-section">
        <h2>Learning Journey</h2>
        <p>
          Currently exploring React, JavaScript frameworks, and Advanced C.
          I enjoy building mini projects to practice and improve my skills.
        </p>
      </div>

      <div className="profile-section">
        <h2>Goals</h2>
        <p>To become a skilled web developer and work on impactful projects.</p>
      </div>

      <div className="profile-section">
        <h2>Contact</h2>
        <p>Email: valendev@gmail.com</p>
      </div>
    </div>
  );
}

export default Profile;
