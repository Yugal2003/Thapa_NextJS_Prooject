import HeroSection from "./components/HeroSection";
import img2 from '../app/assets/home.svg'

const Home = () => {
  return (
    <div>
          <HeroSection title={'LET\'S WATCH MOVIE TOGETHER'} imageUrl={img2}/>
    </div>
  );
}

export default Home;