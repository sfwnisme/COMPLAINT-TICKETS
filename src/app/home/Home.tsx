import { Outlet } from "react-router-dom";
import HomeLayout from "../../features/home/homeLayout/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  )
}