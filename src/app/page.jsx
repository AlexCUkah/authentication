"use client"
import Header from "./components/header"
import Login from "./login/login"

export default function Home() {    
  

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white text-black">
        <Header/>
        <main className="flex flex-1 items-center justify-center ">
        <Login/>
        </main>
      </div>
    </>
  );
}
