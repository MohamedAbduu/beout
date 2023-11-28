'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Blogs', [
      {
        title: 'Marvelous Mexico: Land of Festivals and Culture',
        body: `Mexico, a country rich in culture and history, hosts an array of colorful festivals year-round. From the iconic Day of the Dead celebrations honoring departed loved ones to the exuberant Cinco de Mayo commemorating the Mexican army's victory over the French Empire, the nation is alive with vibrant traditions and festivities. Music, dance, and art fill the streets during these events, offering a glimpse into Mexico's diverse cultural tapestry.

        Beyond its festivals, Mexico boasts a renowned culinary heritage. Tacos, a quintessential Mexican dish, have gained worldwide popularity. Additionally, the country is home to a wide variety of chiles used in traditional dishes, adding depth and flavor to Mexican cuisine.

        Mexico's landscape is as diverse as its culture. From the stunning beaches of Cancun and the Mayan ruins of Chichen Itza to the lush jungles of Chiapas, the country offers a treasure trove of natural wonders waiting to be explored.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Incredible India: Birthplace of Yoga and Diverse Cultures',
        body: `India, often described as a land of contrasts, is the birthplace of yoga—a practice that has gained global recognition for its physical and spiritual benefits. With a history dating back thousands of years, yoga is deeply embedded in India's cultural heritage. From the serene banks of the Ganges River to yoga retreats nestled in the Himalayas, the practice continues to attract enthusiasts from around the world.

        Apart from yoga, India's cultural diversity is astounding. With over 20 recognized languages and a myriad of traditions, each region offers a unique experience. The country's festivals, such as Diwali, Holi, and Eid, are celebrated with unmatched enthusiasm, showcasing the richness of Indian customs and traditions.

        India's architectural wonders, including the Taj Mahal and ancient temples, stand as testaments to the country's rich history and craftsmanship, drawing visitors from all corners of the globe.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'United States: A Hub of Innovation and Diversity',
        body: `The United States has been a cradle of innovation, giving birth to groundbreaking inventions that have shaped the modern world. From Thomas Edison's light bulb to Alexander Graham Bell's telephone and more recently, the birth of the internet, American ingenuity has left an indelible mark on history.

        The diversity of the United States is a cornerstone of its identity. With a melting pot of cultures, languages, and traditions, each state offers a unique experience. The country's national parks, including the Grand Canyon and Yellowstone, showcase the breathtaking natural beauty preserved within its borders.

        The American spirit of entrepreneurship and creativity continues to drive advancements in technology, entertainment, and various industries, solidifying its position as a global leader in innovation.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Morocco: Gateway to Exotic Landscapes and Rich Heritage',
        body: `Morocco, a country brimming with cultural richness, serves as a gateway to the majestic Sahara Desert. Its bustling cities, like Marrakech and Fez, captivate visitors with their vibrant markets, historical sites, and architectural wonders, showcasing a blend of Arab, Berber, and European influences.

        The landscapes of Morocco offer a diverse tapestry of beauty. From the picturesque Atlas Mountains to the mesmerizing blue hues of Chefchaouen and the vast Sahara Desert, the country's terrain is as varied as it is breathtaking.

        Moroccan cuisine, renowned for its aromatic spices and flavorful dishes, tantalizes the taste buds of visitors. Traditional dishes like tagine and couscous reflect the country's culinary heritage, inviting exploration into its rich flavors and culinary traditions.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more entries if needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Blogs', null, {});
  }
};
