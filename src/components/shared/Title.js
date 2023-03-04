import React from "react";

const Title = ({ title, paragraph }) => {
  return (
    <div className="container sm:mx-auto pt-24 p-4">
      <h3 className="text-4xl text-gray-700 helveticaBlack">{title}</h3>
      <p className="mt-6 text-gray-500">{paragraph}</p>
    </div>
  );
};

export default Title;
