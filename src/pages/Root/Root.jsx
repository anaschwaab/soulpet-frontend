import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Toaster } from "react-hot-toast";

export function Root(){
    return (
        <>
            <Header/>
            <main>
                <Outlet />
            </main>
            <Toaster />
        </>
    )
}