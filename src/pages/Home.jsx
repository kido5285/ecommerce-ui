import Announcement from "../comps/Announcement"
import Categories from "../comps/Categories"
import Footer from "../comps/Footer"
import Navbar from "../comps/Navbar"
import Newsletter from "../comps/Newsletter"
import Products from "../comps/Products"
import Slider from "../comps/Slider"

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>    
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home