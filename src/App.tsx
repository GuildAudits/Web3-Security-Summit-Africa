import { Herosection } from "./components/Herosection"
import { EventStats } from "./components/EventStats"
import { AboutSection } from "./components/AboutSection"
import { EventCards } from "./components/EventCards"
import { AttendSection } from "./components/AttendSection"
import Navbar from "./components/Navbar"
import { EventSponsors } from "./components/EventSponsors"
import { EventPartners } from "./components/EventPartners"
import Footer from "./components/Footer"
import { useHashRoute } from "./hooks/useHashRoute"
import LiveStream from "./Pages/LiveStream"
import Archive from "./Pages/Archive"
import RegisterAttendee from "./Pages/RegisterAttendee"
import RegisterSpeaker from "./Pages/RegisterSpeaker"
import ScrollingBanner from "./components/ScrollingBanner"

function App() {
  const [route] = useHashRoute();

  return (
    <>
    <Navbar />
    <ScrollingBanner text="Bug hunters welcome." />
    {route === '/' && (
      <>
        <Herosection/>
        <EventStats/>
        <AboutSection/>
        <EventCards/>
        <AttendSection/>
        <EventSponsors/>
        <EventPartners/>
      </>
    )}
    {route === '/live' && (
      <LiveStream />
    )}
    {route === '/archive' && (
      <Archive />
    )}
    {route === '/register' && (
      <RegisterAttendee />
    )}
    {route === '/speaker' && (
      <RegisterSpeaker />
    )}
    <Footer/>
    </>
  )
}

export default App
