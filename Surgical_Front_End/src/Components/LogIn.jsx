export default function LogIn(){
    return(
       <div className="bg-white min-h-screen bg-no-repeat bg-cover bg-[url('./assets/hospitalBg.jpg')]">
       <div className="absolute w-1/2 left-96 top-8 mt-[100px]">
         <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
           <h2 className="text-2xl font-bold text-white mb-6">Log In</h2>
 
           <form method="post" action="#">
             <div className="mb-4">
               <label className="block text-sm font-medium text-gray-300" htmlFor="description">
                Email
               </label>
               <input
                 name="Email"
               
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
                 
                 className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                 type="password"
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
    )
}