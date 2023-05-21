//Packages
import Helmet from 'react-helmet'

//Componets
import TopInfo from "./Componets/TopInfo";
import MainComponet from "./Componets/MainComponent";
import Footer from "./Componets/Footer";

const Home = () => {
    return (
        <><Helmet>
            <title>DM-Helper</title>
            <meta property="og:title" content="DM-Helper" />
            <meta property="og:description" content="An AutoZone District Manager store visit email generator" />
            <meta name="description" content="An AutoZone District Manager store visit email generator" />
        </Helmet>
        <div className="HomeContent">
            <TopInfo />
            <hr />
            <MainComponet />
            <Footer />
        </div></>
     );
}
 
export default Home;