"use strict";

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

//const axios = require("axios");

module.exports =  () => {
/*  try {
    const { data } = await axios.get("http://api.mediastack.com/v1/news", {
      params: {
        access_key: "acd225f637f61bbf96c7a7d05ab89249",
        languages: "en",
        countries: "",
        limit: 50,
        categories: "health",
        sources:"",
        keyword: ""
        
      },
    });
    console.log(data);
   strapi.query("health-news").create({
      news: data,
    });     
  } catch (err) {
    //alert(err.message || "An error occurred.");
    console.log(err);
  }*/
 /* let feeds =  []
;
  return feeds.forEach(feed => {
    if(feed.image !== null && feed.title !== null && feed.description !== null){
      strapi.query("general").create({
        publishedAt: feed.published_at,
        author: feed.author,
        url: feed.url,
        country: feed.country,
        title: feed.title,
        language: feed.language,
        source: feed.source,
        image: feed.image,
        description: feed.description,
        category: feed.category,
      });
    }
    
  })*/
};
