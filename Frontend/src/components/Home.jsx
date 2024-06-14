import { Footer } from './Footer'
import Styles from './Home.module.css'
const Home = () => {
  return (
    <>
    <div className={Styles.home}>
        <div className={Styles.home1}>
        <p>CONNECTING </p>
        <p>PETS</p>
        <p className="text-white text-xl ">The #1 Network for Pet Lovers</p>
        <div className="text-white text-base flex items-center justify-center m-6">Get Started</div>
        </div>      
    </div>
    <Footer/>
    </>
  )
}

export default Home
