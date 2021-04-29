import React from "react";

export const Attachments = ({ attachments }) => (
  <>
    <h2>Attachments</h2>
    <ul>
      {attachments.map((attachment) => (
        <a href={attachment.url} download>
          {attachment.title}
        </a>
      ))}
    </ul>
  </>
);
