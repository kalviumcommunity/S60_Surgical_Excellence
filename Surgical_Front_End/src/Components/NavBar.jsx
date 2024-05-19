import React, { useState, useEffect } from "react";
import logo from "../assets/Surgical_Excellence_logo.jpg";
import Images from "./images.jsx";
import axios from "axios";
import details from "./details.jsx";
import "../index.css";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

function NavBar() {
  const [count, setCount] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState([]);
  const datas = { ...Images };
  const detail = { ...details };

  const images = [
    datas["img1"]["img1"],
    datas["img4"]["img4"],
    datas["img3"]["img3"],
    datas["img2"]["img2"],
  ];

  const fetchData = async () => {
    try {
        const response = await axios.get("http://localhost:7777/user/jsondata");
        setData(response.data.request);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      setCount((val) => (val % 4) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentSlide(count - 1);
  }, [count]);



  function LocData(e) {
    const a = e.target.value.toLowerCase();
    let filteredData = [...data];
    
    if (a) {
        filteredData = filteredData.filter(function (ele) {
            let name = ele.city.toLowerCase();
            return name.includes(a);
        });
    }
    
    const b = document.querySelector(".Bar2").value.toLowerCase();
    if (b) {
        filteredData = filteredData.filter(function (ele) {
            let name = ele.name.toLowerCase();
            return name.includes(b);
        });
    }

    const c = document.querySelector(".Bar3").value.toLowerCase();
    if (c) {
        filteredData = filteredData.filter(function (ele) {
            let name = ele.surgery_name.toLowerCase();
            return name.includes(c);
        });
    }

    setData(filteredData);
}

function HosData(e) {
    const b = e.target.value.toLowerCase();
    let filteredData = [...data];
    
    if (b) {
        filteredData = filteredData.filter(function (ele) {
            let name = ele.name.toLowerCase();
            return name.includes(b);
        });
    }

    const a = document.querySelector(".Bar1").value.toLowerCase();
    if (a) {
        filteredData = filteredData.filter(function (ele) {
            let name = ele.city.toLowerCase();
            return name.includes(a);
        });
    }

    const c = document.querySelector(".Bar3").value.toLowerCase();
    if (c) {
        filteredData = filteredData.filter(function (ele) {
            let name = ele.surgery_name.toLowerCase();
            return name.includes(c);
        });
    }

    setData(filteredData);
}

function DisData(e) {
    const c = e.target.value.toLowerCase();
    let filteredData = [...data];
    
    if (c) {
        filteredData = filteredData.filter(function (ele) {
            let name = ele.surgery_name.toLowerCase();
            return name.includes(c);
        });
    }

    const a = document.querySelector(".Bar1").value.toLowerCase();
    if (a) {
        filteredData = filteredData.filter(function (ele) {
            let name = ele.city.toLowerCase();
            return name.includes(a);
        });
    }

    const b = document.querySelector(".Bar2").value.toLowerCase();
    if (b) {
        filteredData = filteredData.filter(function (ele) {
            let name = ele.name.toLowerCase();
            return name.includes(b);
        });
    }

    setData(filteredData);
}
const deletingTheItem = (id) => {
  console.log('deletingTheItem called with ID:', id);
  axios
    .delete(`http://localhost:7777/user/jsondata/${id}`)  
    .then(() => {
      console.log('Item deleted successfully');
      fetchData();  
    })
    .catch((error) => {
      console.log('Error', error);
    });
};

  return (
    <div className="bg-white min-h-screen bg-no-repeat bg-cover bg-[url('./assets/hospitalBg.jpg')]">
      <div className="flex justify-between items-center px-4 py-2 w-full">
        <div className="w-1/12">
          <img
            src={logo}
            alt="logo"
            className="absolute top-5 w-1/6 left-0"
          />
        </div>
        <div className="flex justify-between bg-teal-500 shadow-md h-24 absolute top-10 left-56 ml-7 w-10/12 pl-20 pr-20">
          <div className="flex items-center text-gray-800 font-bold">
            Location:
            <input
              type="search"
              className="search Bar1 px-2 py-1 ml-2"
              placeholder="Location"
              onChange={LocData}
            />
          </div>
          <div className="flex items-center text-gray-800 font-bold ">
            Hospital Name:
            <input
              type="search"
              className="search Bar2 px-2 py-1 ml-2"
              placeholder="hospital name"
              onChange={HosData}
            />
          </div>
          <div className="flex items-center text-gray-800 font-bold">
            Disorder:
            <input
              type="search"
              className="search Bar3 px-2 py-1 ml-2"
              placeholder="Medical Problem"
              onChange={DisData}
            />
            
           <div className="flex justify-around w-[140%]">
            <button className="bg-blue-600">Sign Up</button>
           
           
            <button className="bg-yellow-600">Log In</button>
            </div>
             
            
          </div>
        </div>
      </div>
      <div className="relative bg-purple-300 bg-opacity-50 border-dashed border-4 border-purple-600 w-5/6 h-96 top-52 left-52">
        <img
          src={images[currentSlide]}
          alt=""
          className="w-2/5 absolute top-6 left-7 border-2 border-black shadow-xl"
        />
        <div className="absolute top-20 right-10 text-purple-1000 w-1/2">
          <h1 className="font-bold">{detail[currentSlide].name}</h1>
          <br />
          <br />
          <h3 className="font-medium">{detail[currentSlide].descrpition}</h3>
        </div>
      </div>
      <div className="bg-teal-500 flex flex-col w-full h-fit absolute top-full mt-18">
        <div className="flex justify-around items-center w-1/2 absolute top-4 right-0">
          <h2 className="absolute right-3/4">Add More Data:</h2>
          <Link to="/Add">
            <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-40 rounded-md bg-yellow-800 p-2 flex justify-center items-center font-extrabold">
              <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-yellow-900 delay-150 group-hover:delay-75"></div>
              <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-yellow-800 delay-150 group-hover:delay-100"></div>
              <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-yellow-700 delay-150 group-hover:delay-150"></div>
              <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-yellow-600 delay-150 group-hover:delay-200"></div>
              <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-yellow-500 delay-150 group-hover:delay-300"></div>
              <p className="z-10">Add</p>
            </button>
          </Link>
        </div>
        <h2 className="text-2xl font-bold ml-4 mt-28">List of Hospitals:</h2>
        <div className="grid grid-cols-2 gap-4 px-4">
          {data.map((detail, id) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center text-center gap-4 bg-pink-300 mt-14 p-4 rounded-lg"
            >
              <h3 className="font-bold">{detail.name}</h3>
              <img
                src={detail.img}
                alt={detail.name}
                className="w-60 h-40 object-cover"
              />
              <h4>{detail.description}</h4>
              <h3>Rating: {detail.rate}/5</h3>
              
              <div className="flex justify-around w-1/2">
              <Link to={`/edit/${detail._id}`}>
                <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-40 rounded-md bg-yellow-800 p-2 flex justify-center items-center font-extrabold">
                  <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                  <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                  <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                  <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                  <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                  <p className="z-10">Edit</p>
                </button>
              </Link>
              <button
                onClick={() => deletingTheItem(detail._id)}
                className="relative border hover:border-red-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-40 rounded-md bg-red-800 p-2 flex justify-center items-center font-extrabold"
              >
                <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-900 delay-150 group-hover:delay-75"></div>
                <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-800 delay-150 group-hover:delay-100"></div>
                <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-700 delay-150 group-hover:delay-150"></div>
                <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-600 delay-150 group-hover:delay-200"></div>
                <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-500 delay-150 group-hover:delay-300"></div>
                <p className="z-10">Remove</p>
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
