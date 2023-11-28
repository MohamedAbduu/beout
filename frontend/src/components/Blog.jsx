import React from 'react';

const Blog = () => {
  
  const blogPosts = [
    {
      title: " Where Culture Flourishes",
      content: "Mexico, known for its rich culture, boasts a diverse tapestry of traditions. From its ancient civilizations to modern-day marvels, here are some fun facts:\n\n- **Pyramids Galore:** Did you know Mexico has over 180 ancient pyramids? The Pyramid of the Sun in Teotihuacan is the third-largest pyramid globally!\n- **Chili Love:** Mexico gifted the world chili peppers! They've cultivated various chili types, from mild to fiery, enhancing global cuisine.\n- **Day of the Dead:** Celebrating life, not death, the Day of the Dead honors deceased loved ones with vibrant parades and colorful altars.",
      image: '', 
    },
    {
      title: "Land of Marvels and Diversity",
      content: "The United States is a land of diverse landscapes, innovations, and culture. Here are some intriguing aspects:\n\n- **National Parks:** The U.S. boasts over 400 national parks, preserving breathtaking natural wonders like the Grand Canyon and Yellowstone.\n- **Innovation Hub:** Silicon Valley isn’t just a place; it's an idea! It's where tech giants like Apple and Google originated, shaping modern life.\n- **Melting Pot:** With over 350 languages spoken, the USA is a melting pot of cultures, cuisine, and traditions from around the globe.",
      image: '', 
    },
    {
      title: " A Tapestry of Traditions",
      content: "India, a land of spirituality and contrasts, holds fascinating facts:\n\n- **Unity in Diversity:** India celebrates numerous festivals, from Diwali's vibrant lights to Holi's colorful chaos, reflecting unity amid diversity.\n- **Taj Mahal's Romance:** A testament to eternal love, the Taj Mahal, built by Shah Jahan, stands as a symbol of love for his wife, Mumtaz Mahal.\n- **Yoga's Birthplace:** Yoga, a globally practiced discipline, originated in India over 5,000 years ago, promoting physical and mental well-being.",
      image: '', 
    },
    {
      title: "Where History Unfolds",
      content: "Morocco, a land blending ancient allure with modernity, offers captivating elements:\n\n- **Medinas and Souks:** The vibrant markets and labyrinthine streets of medinas offer a blend of traditional crafts, spices, and cultural experiences.\n- **Desert Wonders:** The Sahara Desert, the world's largest hot desert, blankets a significant part of Morocco, showcasing mesmerizing landscapes.\n- **Culinary Magic:** Tagine, a slow-cooked stew, and mint tea are staples reflecting the rich flavors and hospitality of Moroccan culture.",
      image: '', 
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-9 ">
      <h1 className="text-4xl font-bold mb-4 mt-20vh"> Travel Destinations</h1>

      {blogPosts.map((post, index) => (
        <div key={index} className="max-w-2xl  p-6 mb-8 rounded-md shadow-md mt-8">
          <h2 className="text-3xl font-semibold mb-4">{post.title}</h2>
          <p className="text-gray-700 mb-4">{post.content}</p>
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
          )}
          <div className="flex justify-end">
            <button className="text-blue-500">Read more</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;