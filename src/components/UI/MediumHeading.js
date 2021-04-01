import React from "react";

/**
 * @author
 * @function MediumHeading
 **/

const MediumHeading = ({ text, style }) => {
  return (
    <p
      style={style}
      className="font-25 capitalize ls-1 textColor bold-600 text-center"
    >
      {text}
    </p>
  );
};

export default MediumHeading;
