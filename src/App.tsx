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
    } else if(form.username !== "" && form.password !== "" && form.username !== "admin" && form.password !== "administrator" ) {
      setIsLogin(true)
    }
  }

  React.useEffect(() => {
    navigate("/home")
  }, [isLogin])

  React.useEffect(() => {
    navigate("/admin")
  }, [isLoginAdmin])

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


  return (
    <>
      <Routes>
        <Route path="/login" element={<Login handle={handleSetForm} login={login}/>} />
        
        <Route path="/" element={<PrivateRouteAdmin />} >
          <Route path="/admin" element={<HomeAdmin />} />
        </Route>

        <Route path="/" element={<PrivateRoute />} >
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
