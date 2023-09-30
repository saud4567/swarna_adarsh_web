import { Stack } from "@mui/material"
import Header from "../components/header"
import Footer from "../components/footer"
import {Outlet} from "react-router-dom"
const Layout = ()=>{
return(
    <>
    <Header />
    <Stack>
        <Outlet />
    </Stack>
    <Footer />
    </>
)
}

export default Layout