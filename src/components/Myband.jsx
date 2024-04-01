import Album from "../models/Album";
import Band from "../models/Band";
import Singer from "../models/Singer";
import Firstimg from "../img/hotel-key.png";
import Secondimg from "../img/hotel-key.png";
import Albumcomponent from "./Albumcomponent";
import Singercomponent from "./Singercomponent";

function Myband(){
    let singerId=1;
    let albumId=1;
    let myBand=new Band("My favorite music band",[new Singer("singer 1"),new Singer("singer 2")],[new Album("Album1",Firstimg),new Album("Album2",Secondimg)])
    
    return <div>
        <h1>My favorite music band</h1>
        <p>Title: {myBand.name}</p>
        <ul>
            {myBand.singers.map((s)=> <Singercomponent key={++singerId} name={s.name}/>)}
        </ul>
        <ul>
            {myBand.albums.map((s)=> <Albumcomponent key={++albumId} title={s.title} image={s.image}/>)}
        </ul>
    </div>
}
export default Myband