import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    surgery_name: "",
    location: "",
    img: "",
    rate: "",
    Added_by: ""
  });

  const myfunc = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const ActionSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:7777/user/jsondata/${id}`, formData);
      if (res.status === 200) {
        alert("Data updated successfully");
      }
    } catch (err) {
      console.error("Error updating data:", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:7777/user/jsondata/${id}`);
        setFormData(response.data.request);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="bg-white min-h-screen bg-no-repeat bg-cover bg-[url('./assets/hospitalBg.jpg')]">
      <div className="absolute w-1/2 left-96 top-8">
        <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
          <h2 className="text-2xl font-bold text-white mb-6">Edit Hospital Details</h2>

          <form method="post" action="#" onSubmit={ActionSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="name">
                Name of the Hospital
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={myfunc}
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="description">
                Description of the hospital
              </label>
              <input
                name="description"
                value={formData.description}
                onChange={myfunc}
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="surgery_name">
                Treatments the hospital provide
              </label>
              <input
                name="surgery_name"
                value={formData.surgery_name}
                onChange={myfunc}
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="location">
                City
              </label>
              <input
                name="location"
                value={formData.location}
                onChange={myfunc}
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="img">
                Please provide Image Link
              </label>
              <input
                name="img"
                value={formData.img}
                onChange={myfunc}
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="rate">
                Rating out of 5
              </label>
              <input
                name="rate"
                value={formData.rate}
                onChange={myfunc}
                className="mt-1 p-2 w-52 bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
              />
            </div>

            <div className="flex justify-end">
              <button
                className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
