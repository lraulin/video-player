import React from "react";

export const Description = ({ description }) => (
  <>
    <h2>Description</h2>
    {description.map((p) => (
      <p key={"".substr(0, 15)}>{p}</p>
    ))}
  </>
);
