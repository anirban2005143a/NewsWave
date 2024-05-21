import React from "react";

const card = (props) => {
  return (
    <div
      className="card"
      style={{
        width: "25%",
        maxWidth: " 260px",
        height: "auto",
        marginTop: "20px",
      }}
    >
      <img
        src={props.imgurl}
        className="card-img-top"
        alt="image-url"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div className="card-body" style={{ padding: "8px" }}>
        <span class="position-absolute top-0 start-100  badge rounded-pill bg-danger" style={{left: "90% !important",zIndex:1,     transform:" translate(-90px, -10px)"}}>
          {props.source}
        </span>

        <h5
          className="card-title"
          style={{
            height: "85px",
            margin: 0,
            overflowY: "auto",
            scrollbarWidth: "none",
            paddingBottom: "5px",
          }}
        >
          {props.title}
        </h5>
        <p
          style={{
            fontSize: "13px",
            fontWeight: 400,
            height: "100px",
            overflowY: "auto",
            scrollbarWidth: "none",
            marginBottom: 0,
          }}
          className="card-text"
        >
          {props.desc}
        </p>
        <p class="card-text" style={{ marginBottom: "8px" }}>
          <small class=" text-danger">
            By {props.author} on {new Date(props.date).toGMTString()}
          </small>
        </p>
        <a href={props.url} target="_blank" className="btn btn-primary btn-sm">
          Read More
        </a>
      </div>
    </div>
  );
};

export default card;
