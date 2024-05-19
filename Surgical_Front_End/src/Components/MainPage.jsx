import React, { useState } from "react";
import img1 from "../assets/hospitalBg.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
function MainPage() {
  const [data, Setdata] = useState({
    name: "",
    description: "",
    surgery_name: "",  
    city: "",
    img: "",
    rate: "",
  });

  function ActionSubmit(e) {
    e.preventDefault();
    postFunc();
    console.log("Form Data:", data);
  }

  function myfunc(e) {
    const name = e.target.name;
    const value = e.target.value;

    Setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const postFunc = async () => {
    try {
     const res = await axios.post("http://localhost:7777/user/add",data);
     console.log(res.data)
    }
    catch(er){
     console.log("error",er)
    }

 };
 

  return (
    <div className="bg-white min-h-screen bg-no-repeat bg-cover bg-[url('./assets/hospitalBg.jpg')]">
      <div className="absolute w-1/2 left-96 top-8">
        <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
          <h2 className="text-2xl font-bold text-white mb-6">Add Your New List</h2>

          <form method="post" action="#" onSubmit={ActionSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="name">
                Name of the Hospital
              </label>
              <input
                name="name"
                onChange={myfunc}
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="email">
                Description of the hospital
              </label>
              <input
                onChange={myfunc}
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                name="description"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="treatment">
                Treatments the hospital provide
              </label>
              <input
                name="surgery_name"
                onChange={myfunc}
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="location">
                city
              </label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
                name="location"
                onChange={myfunc}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="image">
                Please provide Image Link
              </label>
              <input
                name="img"
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
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
