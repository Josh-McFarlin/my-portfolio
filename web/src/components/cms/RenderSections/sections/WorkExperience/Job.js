import React from "react";
import PropTypes from "prop-types";

import SimpleBlockContent from "../../../../SimpleBlockContent";
import styles from "./Job.module.scss";

const Job = ({
  company,
  position,
  location,
  startDate,
  endDate,
  description,
}) => {
  const startForm = new Date(startDate);
  const endForm = new Date(endDate);

  const onlyMonth = {
    month: "long",
    timeZone: "UTC",
  };

  const monYear = {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  };

  let startMonth;
  let startMonYear;
  try {
    startMonth = new Intl.DateTimeFormat("en-US", onlyMonth).format(startForm);
    startMonYear = new Intl.DateTimeFormat("en-US", monYear).format(startForm);
  } catch (e) {
    console.log("DT Error", e);
  }

  let dateString;
  let endMonYear;
  if (endDate != null) {
    try {
      endMonYear = new Intl.DateTimeFormat("en-US", monYear).format(endForm);
    } catch (e) {
      console.log("DT Error", e);
    }

    dateString =
      startForm.getUTCFullYear() === endForm.getUTCFullYear()
        ? `${startMonth} - ${endMonYear}`
        : `${startMonYear} - ${endMonYear}`;
  } else {
    dateString = `${startMonYear} - Present`;
  }

  return (
    <div className={styles.root} id={`work-${company}`}>
      <section className={styles.job}>
        <h2 className={styles.heading}>
          {position} @ {company}
        </h2>
        <div className={styles.details}>
          {dateString}
          {location && ` in ${location}`}
        </div>
        {description && <SimpleBlockContent blocks={description} />}
      </section>
    </div>
  );
};

Job.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Job;
