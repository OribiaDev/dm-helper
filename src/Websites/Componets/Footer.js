const Footer = () => {
    const copyrightyear = '2025';
    const version = 'v1.1.1';


    return ( 
        <div className="footer">
            <p> Copyright © {copyrightyear} Oribia. All rights reserved </p>
            <p>{version} | <a href="https://oribia.dev"  target="_blank" rel="noopener noreferrer">Oribia.Dev</a> | <a href="https://meiibot.xyz"  target="_blank" rel="noopener noreferrer">Meii</a></p>
            <br />
        </div>
     );
}
 
export default Footer;