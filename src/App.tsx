import Home from "./pages/User/Home"
import HomeAdmin from "./pages/Admin/HomeAdmin"
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom"
import React, { ChangeEvent } from "react"
import Login from "./pages/Login"
import { IAuth } from "./interface/Auth"

const App: React.FC = () => {
  const navigate = useNavigate()
  const [isLoginAdmin, setIsLoginAdmin] = React.useState<boolean>(false)
  const [isLogin, setIsLogin] = React.useState<boolean>(false)
  const [form, setForm] = React.useState<IAuth>({
    username: "",
    password: ""
  })

  function handleSetForm(event: ChangeEvent<HTMLInputElement>) : void {    
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    if(form.username === "admin" && form.password === "administrator") {
      setIsLoginAdmin(true)
      localStorage.setItem("isLogin", "administrator")
    } else if(form.username !== "" && form.password !== "" && form.username !== "admin" && form.password !== "administrator" ) {
      navigate("/home")
      setIsLogin(true)
      localStorage.setItem("userLogin", "users")
    }
  }
  
  React.useEffect(() => {
    navigate("/home")
  }, [isLogin])

  React.useEffect(() => {
    navigate("/admin")
  }, [isLoginAdmin])

  React.useEffect(() => {
    const isLoginUser = localStorage.getItem("userLogin")  
    if(isLoginUser == "users") {    
      setIsLogin(!isLogin)
    } 
  }, [])

  React.useEffect(() => {
    const isLogin = localStorage.getItem("isLogin")

    if(isLogin == "administrator") {
      setIsLoginAdmin(!isLoginAdmin)
    } 
  }, [])


  function PrivateRoute() {
    if(isLogin) {
      return <Outlet />
    } else {
      return <Navigate to="/login" />
    }
  }

  function PrivateRouteAdmin() {
    if(isLoginAdmin) {
      return <Outlet />
    } else {
      return <Navigate to="/login" />
    }
  }

  console.log("user, ", isLogin);
  console.log("admin, ", isLoginAdmin);
  

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login handle={handleSetForm} login={login}/>} />
        
        <Route path="/home" element={<PrivateRoute />} >
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<PrivateRouteAdmin />} >
          <Route path="/admin" element={<HomeAdmin />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
