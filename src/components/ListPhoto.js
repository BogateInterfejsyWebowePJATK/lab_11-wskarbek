export default function ListPhoto({photo, title, date}) {
    return (
        <div className="ListPhoto">
            <h3>{title}</h3>
            <img src={photo}/>
            <p>{date}</p>
        </div>
    )
}