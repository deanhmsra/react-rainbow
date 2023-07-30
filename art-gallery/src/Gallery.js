export default function Gallery(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.artistDisplayName}</h2>
            <p>{props.medium}</p>
            <p>{props.culture}</p>
            <img style={{width: '80vw'}} src={props.primaryImage} alt={props.title}/>
        </div>
    )
}