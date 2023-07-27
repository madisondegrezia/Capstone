'use strict';
const bcrypt = require("bcryptjs");
const user = require("../models/user");
const post = require("../models/post");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

// insert "user" seeders rows into db
    await queryInterface.bulkInsert("user", [{
      username: "Jane Doe",
      email: "janeDoe@gmail.com",
      password: await bcrypt.hash("password",10),
      has_restaurant: false,
    },
  {
      username: "Jane Doe Third Account",
      email: "janeDoe3@gmail.com",
      password: await bcrypt.hash("password",10),
      has_restaurant: false,
  },
  {
    username: "Jane Doe Second Account",
    email: "janeDoe2@gmail.com",
    password: await bcrypt.hash("password",10),
    has_restaurant: false,
},
  ]);

  //insert "tag" seeders rows into db
  await queryInterface.bulkInsert("tag", [
    {
    tag: "japanese food"
    },
    {
      tag: "game"
    },
    {
      tag: "movies"
    }
]);

//fetch for user's first id
const users = await queryInterface.sequelize.query(`SELECT id FROM "user"`);
const userId = users[0][0].id;
// fetch for first tag
const tags = await queryInterface.sequelize.query(`SELECT id FROM "tag"`);
const tagId = tags[0][0].id;

// insert data for "user_tag" table, where we can know tags each user likes
  await queryInterface.bulkInsert("user_tag", [
    {
     UserId:  userId,
     TagId: tagId
    }
  ]);

// insert data for "restaurant" table
  await queryInterface.bulkInsert("restaurant", [
    {
      UserId: userId,
      restaurant_name: "Hawaii Poke Bowl",
      rate: 4.5, // the rating will be decided based on another table named "user_rate"
      popularity: 102, // the popularity will be based on another table named "user_favorite"
      address: "1430 Richmond Ave, Staten Island, NY 10314",
      longtitude: -74.15901282328339,
      latitude: 40.61389640713802
    },
    {
      UserId: userId,
      restaurant_name: "Buffalo Wild Wings",
      rate: 3.9, // the rating will be decided based on another table named "user_rate"
      popularity: 102, // the popularity will be based on another table named "user_favorite"
      address: "1447 Richmond Ave, Staten Island, NY 10314",
      longtitude: -74.15826389821179,
      latitude: 40.61250571654796
    },
  ]);

  // fetch for restaurant id to use as FK for other table
  const restaurants = await queryInterface.sequelize.query(`SELECT id FROM "restaurant"`);
  const restaurantId = restaurants[0][0].id;

  // insert data row for "post" table, note: RestaurantId(fk) is optional to indicate whether is is a restaurant post or a normal user post
  await queryInterface.bulkInsert("post", [
    {
      UserId: userId,
      RestaurantId: restaurantId,
      post_title: "25% OFF on All Menu Items!!",
      post_content: "The promotion will be availiable from 07/12/23 to 07/25/23!!",
    },
    {
      UserId: userId,
      RestaurantId: null,
      post_title: "Experience of Mine in Hawaii Poke Bowl",
      post_content: "Meh, not bad, but took a long time since there were lots of people. But I like it overall",
    }
  ]);

  // fetch for post id to be used in the "post_tag"
  const posts = await queryInterface.sequelize.query(`SELECT id FROM "post"`);
  const postId = posts[0][0].id;

  await queryInterface.bulkInsert("post_tag", [
    {
      TagId: tagId,
      PostId: postId,
    }
  ]);

  await queryInterface.bulkInsert("user_favorite", [
    {
      UserId: userId,
      RestaurantId: restaurantId,
    }
  ]);

  await queryInterface.bulkInsert("user_rate", [
    {
      UserId: userId,
      RestaurantId: restaurantId,
      rate: 5,
      review: "Great service! Really like it!"
    }
  ]);

  await queryInterface.bulkInsert("comment", [
    {
      UserId: userId,
      PostId: postId,
      content: "This restaurant is amazing! I love it! I would come next time"
    },
    {
      UserId: userId,
      PostId: postId,
      content: "This restaurant is amazing! I love it! I would come next time"
    }
  ])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user", null, {});
    await queryInterface.bulkDelete("tag", null, {});
    await queryInterface.bulkDelete("user_tag", null, {});
  }
};
