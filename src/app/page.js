"use client"

import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Lenis from 'lenis';
import {useEffect} from "react"


export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])
  return (
    <div className="relative">
      <Navbar/>
      <Homepage/>
      <Testimonials/>
    </div>
  );
}
