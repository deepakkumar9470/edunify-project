"use client"
import { useState } from "react";
import ShowSchools from "./showSchools/page";

export default function Home() {
  const [loading,setLoading] = useState(false)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ShowSchools loading={loading}/>
    </main>
  )
}
