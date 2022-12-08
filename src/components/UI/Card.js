import './Card.css';
const card=(props)=>{
    return (
        <div className="card" style={props.style}>
            {props.children}
        </div>
    )
}
export default  card;