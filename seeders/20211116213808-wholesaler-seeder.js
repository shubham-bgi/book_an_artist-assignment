'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('wholesalers', [
      {
        name: "Om Prakash",
        mobile_number: "+91 9932199546"
      },
      {
        name: "Rakesh Sharma",
        mobile_number: "+91 7874416952"
      },
      {
        name: "Shubhash Agarwal",
        mobile_number: "+91 9865482820"
      },
      {
        name: "Yusuf Khan",
        mobile_number: "+91 8755854695"
      },
      {
        name: "Carl Kahn",
        mobile_number: "+44 69584752"
      },
      {
        name: "Shruti Jain",
        mobile_number: "+91 9549584816"
      },
      {
        name: "Hari Om Sweets",
        mobile_number: "+91 9958444752"
      },
      {
        name: "Bosch",
        mobile_number: "+44 45144752"
      },
      {
        name: "Finolex Cables",
        mobile_number: "+44 69454452"
      },
      {
        name: "Kiran Garg",
        mobile_number: "+91 9969454752"
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('wholesalers', null, {});
     
  }
};
