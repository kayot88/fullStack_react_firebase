import React from "react";
import { PageHeader } from "antd";
import _ from "lodash";
import Post from "./Post";
import {api} from "../mock_api";
const Posts = () => {
  return (
    <div className="posts_container">
      <div className="page_header_container">
        <PageHeader
          style={{
            border: "1px solid rgb(235, 237, 240)"
          }}
          title="Posts"
        />
      </div>

      <div className="articles_container">
        {
        _.map(api, (article) => {
          console.log(article);
          return <Post/>;
        })
        }
      </div>
    </div>
  );
};

export default Posts;
