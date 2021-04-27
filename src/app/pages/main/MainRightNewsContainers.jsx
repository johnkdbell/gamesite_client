import React from "react";

import NewsContainer from "./NewsContainer";

import Articles from "../data/newsArticles.js";

var ArticlesInfo = Articles.articles;


function Article() 
{
  
  {
      return (
        <>
          {ArticlesInfo.map((article) => (
            <NewsContainer
              selector={article.selector}
              articleID={article.articleID}
              title={article.articleTitle}
              paragraph={article.articleText}
              img={article.articleImage}
              articleType={article.articleType}
            />
          )).slice(Math.max(ArticlesInfo.length - 6, 0))}
        </>
      )
  }

};


export default Article;