import React from "react";
import "./Mywork.css";
import marksheet from "../../assets/MARKSHEET.JPG";
import event from "../../assets/EVENT.JPG";
import powerTheft from "../../assets/POWER_THEFT.JPG";
import energyMeter from "../../assets/ENERGY_METER.JPG";
import smartGrid from "../../assets/SMART_GRID.JPG";
import sms from "../../assets/SMS.JPG";

const workItems = [
  { img: marksheet, title: "Marksheet Generator" },
  { img: event, title: "Event Management App" },
  { img: powerTheft, title: "Power Theft Detection" },
  { img: energyMeter, title: "Energy Meter Monitoring" },
  { img: smartGrid, title: "Smart Grid Control" },
  { img: sms, title: "SMS Alert System" },
];

const Mywork = () => {
  return (
    <div id='work' className="mywork">
      <h2 className="section-title">My Latest Work</h2>
      <div className="work-grid">
        {workItems.map((work, index) => (
          <div className="work-card" key={index}>
            <img src={work.img} alt={work.title} />
            <div className="work-info">
              <h3>{work.title}</h3>
              <button className="read-more">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mywork;
