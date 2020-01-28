import React from "react";

function Image(props) {
  const { image } = props;
  return (
    <div>
      <div>
        <img src={image.url} alt="pic"></img>
        <ul>
          {image.tags.map((tag, id) => {
            return (
              <li className="tags" key={id}>
                #{tag}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Image;
