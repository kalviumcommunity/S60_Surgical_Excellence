import React, { useState} from 'react';
import axios from 'axios';

export default function LogIn() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Login Data:', loginData);
    try {
      const res = await axios.post('http://localhost:7777/user/checkData', loginData);
      if (res.data.message === "Successfully reached") {
        console.log("done", res.data.message);

        handleCookieManipulation();
      } else {
        console.log(res.data.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  function logout(){
  axios.post('http://localhost:7777/user/logout')
  .then(() => {

    document.cookie = "username=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    console.log("Logout successful. Cookie removed.");
  })
  .catch(error => {
    console.error("Error while removing cookie:", error);
  });}
  const handleCookieManipulation = () => {

    axios.post('http://localhost:7777/user/login', { username: loginData.email })
      .then(response => {

        document.cookie = `useremail=${loginData.email}`;
        console.log("Login successful. Cookie set.");
      })
      .catch(error => {
        console.error("Error while setting cookie:", error);
      });
  };

  return (
    <div className="bg-white min-h-screen bg-no-repeat bg-cover bg-[url('./assets/hospitalBg.jpg')]">
      <div className="absolute w-1/2 left-96 top-8 mt-[100px]">
        <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
          <h2 className="text-2xl font-bold text-white mb-6">Log In</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="description">
                Email
              </label>
              <input
                name="Email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="location">
                Password
              </label>
              <input
                name="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="password"
              />
            </div>
          
            <div className="flex justify-end justify-between">
              <button
                className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                type="submit"
              >
                Login
              </button>
              <button
              onClick={logout}
                className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                type="submit"
              >
                Logout
              </button>
            </div>
           
          </form>
        
          
        </div>
      </div>
    </div>
  );
}
