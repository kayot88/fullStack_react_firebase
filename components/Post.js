import React from 'react';
import { Card } from "antd";



const Post = () => {
  return (
    <div className="article_container">
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="Article title"
        extra={<a href="#">More</a>}
      >
        <p className="article_container--p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          deserunt asperiores ipsa, fuga, illo libero quod assumenda esse itaque
          non in sed commodi aperiam animi dolor odio blanditiis modi voluptas
          eligendi velit voluptates qui quo alias. Natus, beatae? Illum dolore
          eligendi delectus ea earum dignissimos veniam incidunt aperiam, quas
          sapiente.
        </p>
        <p className="article_container--p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          deserunt asperiores ipsa, fuga, illo libero quod assumenda esse itaque
          non in sed commodi aperiam animi dolor odio blanditiis modi voluptas
          eligendi velit voluptates qui quo alias. Natus, beatae? Illum dolore
          eligendi delectus ea earum dignissimos veniam incidunt aperiam, quas
          sapiente.
        </p>
      </Card>
    </div>
  );
};

export default Post;