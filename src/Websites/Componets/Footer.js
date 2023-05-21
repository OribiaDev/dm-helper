const Footer = () => {
    const copyrightyear = '2023';
    const version = 'v0.1.0';


    return ( 
        <div className="footer">
            <p> Copyright © {copyrightyear} Oribia. All rights reserved </p>
            <p>{version} | <a href="https://oribia.dev"  target="_blank" rel="noopener noreferrer">Oribia.Dev</a></p>
            <br />
        </div>
     );
}
 
export default Footer;