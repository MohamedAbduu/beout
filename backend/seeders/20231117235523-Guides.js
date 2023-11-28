'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const guidesData = [
      // Mexico
      { name: 'Diego Hernández', age: 40, expertise: 'Tequila distillery tours and cultural heritage exploration', photo: 'https://example.com/diego_photo.jpg', countryId: 6, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sofia Ramirez', age: 31, expertise: 'Urban exploration and modern Mexican art scene', photo: 'https://example.com/sofia_photo.jpg', countryId: 6, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gabriela Morales', age: 28, expertise: 'Eco-tourism and nature trails in the Yucatan Peninsula', photo: 'https://example.com/gabriela_photo.jpg', countryId: 6, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alejandro García', age: 34, expertise: 'Mayan archaeology and historical tours', photo: 'https://example.com/alejandro_photo.jpg', countryId: 6, createdAt: new Date(), updatedAt: new Date() },

      // United States
      { name: 'Samantha Johnson', age: 32, expertise: 'Wilderness trekking and national park adventures', photo: 'https://example.com/samantha_photo.jpg', countryId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nathan Thompson', age: 36, expertise: 'Historical walking tours in major cities like New York and Boston', photo: 'https://example.com/nathan_photo.jpg', countryId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Emily White', age: 29, expertise: 'Food tours and culinary experiences across different states', photo: 'https://example.com/emily_photo.jpg', countryId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Daniel Lee', age: 41, expertise: 'Outdoor expeditions, especially in the Rocky Mountains', photo: 'https://example.com/daniel_photo.jpg', countryId: 3, createdAt: new Date(), updatedAt: new Date() },

      // Spain
      { name: 'Javier Rodríguez', age: 39, expertise: 'Flamenco history and performances in Andalusia', photo: 'https://example.com/javier_photo.jpg', countryId: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Marta López', age: 27, expertise: 'Tapas tours and local markets in Barcelona', photo: 'https://example.com/marta_photo.jpg', countryId: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Carlos Martínez', age: 33, expertise: 'Gaudi architecture tours in Barcelona', photo: 'https://example.com/carlos_photo.jpg', countryId: 4, createdAt: new Date(), updatedAt: new Date() },

      // France
      { name: 'Camille Dubois', age: 35, expertise: 'Art history tours in Parisian museums like the Louvre and Musée d\'Orsay', photo: 'https://example.com/camille_photo.jpg', countryId: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Antoine Bernard', age: 30, expertise: 'Wine tasting and vineyard tours in Bordeaux', photo: 'https://example.com/antoine_photo.jpg', countryId: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Juliette Moreau', age: 37, expertise: 'Cycling tours through the French countryside and Provence', photo: 'https://example.com/juliette_photo.jpg', countryId: 5, createdAt: new Date(), updatedAt: new Date() },

      // Morocco
      { name: 'Fatima El Amrani', age: 42, expertise: 'Desert safaris and Berber culture in the Atlas Mountains', photo: 'https://example.com/fatima_photo.jpg', countryId: 7, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jamal Malik', age: 33, expertise: 'Medina tours and traditional Moroccan craftsmanship', photo: 'https://example.com/jamal_photo.jpg', countryId: 7, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Aisha Rahman', age: 26, expertise: 'Atlas trekking and cultural immersion in rural villages', photo: 'https://example.com/aisha_photo.jpg', countryId: 7, createdAt: new Date(), updatedAt: new Date() },

      // India
      { name: 'Rajesh Patel', age: 31, expertise: 'Heritage tours of ancient temples and historical sites in Rajasthan', photo: 'https://example.com/rajesh_photo.jpg', countryId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Priya Sharma', age: 29, expertise: 'Yoga and spiritual retreats in the Himalayas', photo: 'https://example.com/priya_photo.jpg', countryId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Arjun Kapoor', age: 36, expertise: 'Wildlife safaris and biodiversity exploration in national parks', photo: 'https://example.com/arjun_photo.jpg', countryId: 2, createdAt: new Date(), updatedAt: new Date() },
    ];

    // Insert guide data into the table
    await queryInterface.bulkInsert('Guides', guidesData, {});


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
