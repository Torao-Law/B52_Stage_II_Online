import React from "react";
import Logo from "../assets/images/logo-image.png"

const Navbar: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState<boolean>(true)

  const loggedIn = () : void => {
    setIsLogin(!isLogin)
  }

  return (
    <div className="flex justify-between items-center bg-black text-white px-20 py-2 ">
      <div className="flex items-center">
        <div className="h-9">
          <img className="h-full" src={Logo} alt="logo-img" />
        </div>

        <p>PEMILU PRESIDEN DUMBWAYS.ID</p>
      </div>

      <div className="flex">
        <ul className="flex">
          <li>Partai</li>
          <li>|</li>
          <li>Paslon</li>
          <li>|</li>
          <li>Voting</li>
        </ul>

        <div>
          {isLogin ? (
            <p className="bg-white text-black h-9 w-9 rounded-full flex items-center justify-center">
              D
            </p>
          ) : (
            <button className="ms-4 px-4 py-1 bg-white text-black rounded" onClick={loggedIn}>
              Login
            </button>
          )}
        </div>
        
      </div>
    </div>
  )
}

export default Navbar;

// <p>Tes conditional rendering</p>
// <p>{isLogin ? "Kamu sudah login" : "Tolong Login dulu"}</p>

// <button className="bg-gray-400 px-8 py-2" onClick={loggedIn}>
//   Login
// </button>

// Conditional Rendering
// Kita merender sebuah komponent berdasarkan kondisi (?)