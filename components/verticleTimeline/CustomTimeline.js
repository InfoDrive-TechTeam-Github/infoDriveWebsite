import React from "react";

function CustomTimeline({ data }) {
  return (
    <div>
      <section id="conference-timeline">
        <div class="conference-center-line"></div>
        <div class="conference-timeline-content">
          {data.map((item, index) => (
            <div class="timeline-article">
              <div class="content-left-container">
                <div class="content-left rounded-md shadow-md">
                  <h2 className="text-center">{item.left.card}</h2>
                  <p>{item.left.cardDetailedText}</p>
                </div>
              </div>
              <div class="content-right-container ">
                <div class="content-right rounded-md shadow-md ">
                  <h2 className="text-center">{item.right.card}</h2>
                  <p>{item.right.cardDetailedText}</p>
                </div>
              </div>
              <div class="meta-date">
                <span class="date"></span>
                <span class="month"></span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CustomTimeline;
