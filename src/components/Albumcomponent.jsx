export default function Albumcomponent(props){
    // eslint-disable-next-line react/prop-types
    return <li><p>{props.title}</p> <img src={props.image}/></li>
}