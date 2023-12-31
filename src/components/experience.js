import React, { useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../App.scss";
import { useInView } from 'react-intersection-observer';

const MyVerticalTimeline = ({ data }) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
    } else {
    }
  }, [inView]);

  return (
    <section id="section-experience" className="containerTimeline" ref={ref}>
      <h1>{data?.infos_perso?.section_name?.experience}</h1>
      <VerticalTimeline>
        {data &&
          data.experience.map((data, index) => (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--work`}
              date={data.years}
              iconStyle={{
                background: "rgb(158, 132, 76)",
                color: "#fff",
                boxShadow: "2px 2px 12px rgba(0, 0, 0, 0.541)",
                border: "4px solid white",
              }}
              icon={<i className={`fas ${data.icon} experience-icon`}></i>}
            >
              <div className="infosContainer">
                <h3 className="vertical-timeline-element-title">{data.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{data.company}</h4>
                <p>{data.mainTech}</p>
                <p>{data.description}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        <VerticalTimelineElement
          iconStyle={{
            background: "#AE944F",
            color: "#fff",
            textAlign: "center",
            boxShadow: "2px 2px 12px rgba(0, 0, 0, 0.541)",
            border: "4px solid white",
          }}
          icon={<i className="fas fa-hourglass-start experience-icon"></i>}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default MyVerticalTimeline;


















