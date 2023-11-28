import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [firstName, setFirstName] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    fetch('/users')
      .then((res) => res.json())
      .then((data) => {
        setFirstName(data.firstName);
        setEmail(data.email);
        console.log(data);
      });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r ">
      <div className="w-3/4 p-8 bg-orange-100 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center italic">Profile</h1>
        <div className="flex items-center space-x-4">
          <img
            className="w-20 h-20 rounded-full object-cover"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <div>
            <h2 className="text-lg font-semibold">{firstName}</h2>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Bio</h3>
          <p className="text-gray-700 italic">
          Passionate nomad with an insatiable curiosity for exploring the world's hidden gems.
           A storyteller by heart, weaving tales of cultural encounters and breathtaking landscapes.
            From bustling cityscapes to remote corners, I've wandered, seeking moments that transcend maps.
             Embracing the unfamiliar, finding solace in the rhythm of travel, and cherishing connections made 
             along the winding paths.
           Each journey is a canvas, painting memories of adventures that resonate beyond borders.
          </p>
        </div>
        {/* Add more profile details or sections here */}
      </div>
    </div>
  );
};

export default Profile;
