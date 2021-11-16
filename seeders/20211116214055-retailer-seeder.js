'use strict';

module.exports = {
  
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('retailers', [
      {
        name: "Ram Nath Puri",
        mobile_number: "+91 9599891525"
      },
      {
        name: "Gita Jain",
        mobile_number: "+91 9166723498"
      },
      {
        name: "Bhagwati Sweets",
        mobile_number: "+91 9429874365"
      },
      {
        name: "Krishna",
        mobile_number: "+91 7826439856"
      },
      {
        name: "Mangal Sen",
        mobile_number: "+91 9945762148"
      },
      {
        name: "Twenty Four Seven",
        mobile_number: "+1 685-259-3845"
      },
      {
        name: "Baniya General Store",
        mobile_number: "+91 9814683249"
      },
      {
        name: "Jatin Yadav",
        mobile_number: "+91 9745631986"
      },
      {
        name: "Shubham Aggarwal",
        mobile_number: "+91 9965471398"
      },
      {
        name: "Rahul Garg",
        mobile_number: "+91 9715349341"
      },
      {
        name: "Ramesh Kumar",
        mobile_number: "+91 9453615976"
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('retailers', null, {});

  }
};
