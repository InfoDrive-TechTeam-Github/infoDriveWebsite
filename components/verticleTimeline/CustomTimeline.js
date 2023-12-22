import React from "react";
import { motion } from "framer-motion";
function CustomTimeline({ data }) {
  return (
    <div>
      <section id="conference-timeline">
        <div class="conference-center-line"></div>
        <div class="conference-timeline-content">
          {data.map((item, index) => (
            <div class="timeline-article">
              <div class="content-left-container">
                <motion.div
                  class="content-left rounded-md shadow-md"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
                  transition={{ duration: 1.5 }}
                >
                  <h2 className="text-center">{item.left.card}</h2>
                  <p className="md:text-justify">
                    {item.left.cardDetailedText}
                  </p>
                </motion.div>
              </div>
              <div class="content-right-container ">
                <motion.div
                  class="content-right rounded-md shadow-md "
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0, visibility: "visible" }}
                  transition={{ duration: 1.5 }}
                >
                  <h2 className="text-center">{item.right.card}</h2>
                  <p className="md:text-justify">
                    {item.right.cardDetailedText}
                  </p>
                </motion.div>
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
