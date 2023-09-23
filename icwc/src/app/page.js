"use client"
import Header from './components/Navigation/Header';
import Image from 'next/image'
import WatchesRow from '../../public/Images/WatchesRow.jpg'
import Services from './components/Home/Services';
import Sourcing from './components/Home/Sourcing';
import Footer from './components/Navigation/Footer';
import ContactUs from './components/Home/HomeContact';
import MainHero from './components/Home/MainHero';
import Transformations from './components/Home/Transformations';

export default function Page() {
  return (
    <>
    <Header/>
    <main className="relative flex min-h-screen flex-col items-center justify-between">
    
    <MainHero/>
    <Services/>
    <Transformations/>
    <Sourcing/>
    <ContactUs/>
    </main>
    <Footer/>
    </>
  )
}
