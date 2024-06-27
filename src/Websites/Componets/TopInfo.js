var Version = 'v1.1.0'


const TopInfo = () => {
    return ( 
        <div className="TopInfoContent">
            <div className="topInfoTitle">AutoZone DM-Helper</div>
            <div className="author">Made by <a href="https://oribia.dev" target="_blank" rel="noopener noreferrer">Oribia</a></div>
            <div className="version">{Version}</div>
        </div>
     );
}
 
export default TopInfo;