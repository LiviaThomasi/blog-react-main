import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Posts = ( obj ) => {
  const {blog: 
    { description, title, thumbImageAltText, postDate, profileName, profileThumbImage, thumbImage }} = obj
  const { id } = obj
  return (
    <div className="blogitem-dv">
      <img src={`https://api-fake-blog.herokuapp.com${thumbImage}`} alt={thumbImageAltText} className="blogItem-cover" />
      <h3>{title}</h3>
      <p className="blogitem-desc">{description}</p>
      <footer>
        <div className="blogitem-eu">
        <img src={profileThumbImage} />
          <div>
            <h4>{profileName}</h4>  
            <p>{postDate}</p>
          </div>
        </div>
        <Link className="blogItem-link" to={`/postagens/${id}`}>
          Ler mais
        </Link>
      </footer>
    </div>
  );
};

export default Posts;