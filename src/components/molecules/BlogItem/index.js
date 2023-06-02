import react from 'react';
import {RegisterBg} from '../../../assets';
import './blogItem.scss';

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="autor">Autor - Date post</p>
        <p className="body">Lorem laljdfljasjfopsdhp-0gpn opasjgopsjgsd 0igjsopj ffo0sjolsjdf s-fjp[asjfp[jspfj as[0gj [psajgp]oasdj gp0sdjgsja gjsg</p>
      </div>
      
    </div>
  )
}

export default BlogItem; 
