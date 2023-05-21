//Packages
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom';

//CSS
import Four04 from '../CSS/Websites/404.module.css'

const four04 = () => {
    return ( 
        <><Helmet>
            <title>404 • DM-Helper</title>
            <meta property="og:title" content="404 • DM-Helper" />
            <meta property="og:description" content="404 Page Not Found" />
            <meta name="description" content="404 Page Not Found" />
        </Helmet>
        <div className="404Content">
            <div className={Four04.four04title}>404</div>
            <div className={Four04.four04subTitle}>Page Not Found</div>
            <Link className={Four04.four04link} to='/'>Click to go home</Link>
        </div></>
     );
}
 
export default four04;