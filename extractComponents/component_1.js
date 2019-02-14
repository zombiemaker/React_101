function UserInfo(props){
    return(
    <div className="UserInfo">
        <Avatar avatarUrl={props.avatarUrl} name={props.name}/>
        <div className="UserInfo-name">
            {props.name}
        </div>
    </div>
    )
}

function Avatar(props){
    return (
        <img className="Avatar"
            src={props.avatarUrl}
            alt={props.name}
        />
    )
}

function CommentBody(props){
    return(
        <div className="Comment-body">
            <h1>{props.commentHeading}</h1>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                {props.date}
            </div>
        </div>
    )
}

function Badges(props){
    return(
        <div className="UserBadges">
            <div className="badge">{props.badge1}</div>
            <div className="badge">{props.badge2}</div>
            <div className="badge">{props.badge3}</div>
        </div>
    )
}



function Application(props){
    return(
        <div className="Comment">
            <UserInfo avatarUrl={props.data.author.avatarUrl} name={props.data.author.name}/>
            <CommentBody commentHeading={props.data.commentHeading} text={props.data.text} date={props.data.date}/>
            <Badges badge1={props.data.userBadge[0]} badge2={props.data.userBadge[1]} badge3={props.data.userBadge[2]}/>
        </div>
    )
}[0]

let comments = data.map((obj)=>{
    return <Application data={obj} />
})

ReactDOM.render(
        comments,
        document.getElementById('root')
);