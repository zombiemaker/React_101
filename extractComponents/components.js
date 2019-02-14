// From the snippet below extract the following components:
// - UserInfo
// - Avatar
// - Comment Body
// - Badges

// You may organize each however you want.
// I have not provided any data. Try and break it down without, and add in some dummy datat when ready to test.

var data = [
  {
    author:{
      avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
      name:"neo"
    },
    commentHeading: "I am the One.",
    text: "Humanity, relax. I will save you.",
    date: "Today",
    userBadge: [ 
      'Superman',
      'Herald',
      'Engineer'
    ]
  },
  {
    author:{
      avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
      name:"Morpheus"
    },
    commentHeading: "There is no spoon.",
    text: "Don't htink you are. KNow you are.",
    date: "Two days ago",
    userBadge: [ 
      'The man',
      'Bard',
      'Samurai swordsman'
    ]
  }
]


function Avatar(props){
    // console.log (props)
    return(
        <div className="UserInfo">
            <img className="Avatar" src={props.data[0].author.avatarUrl} alt={props.data[0].author.name}/>
            <div className="UserInfo-name">{props.data[0].author.name}</div>
        </div>
        // <h1>Sanity Check</h1>
    )
}

function CommentBody(props){
    console.log("got into body")
    console.log (props)
    return(
        <div className="Comment-body">
            <h1>{props.data[0].commentHeading}</h1>
            <div className="Comment-text">{props.data[0].text}</div>
            {/* <div className="Comment-date">{formatDate(props.data[0].date)}</div> */}
        </div>
        // <h1>Sanity Check</h1>
    )
}

function UserBadges(props){
    console.log("made it into badges")
    console.log(props)
    return(
        <div className="UserBadges">
            <div className="badge">{props.data[0].userBadge[0]}</div>
            <div className="badge">{props.data[0].userBadge[1]}</div>
            <div className="badge">{props.data[0].userBadge[2]}</div>
        </div>
        // <h1>Sanity Check</h1>
    )
}

class Comment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dataToShow:[]
        }
    }
    render(){
        return (
            <div className="Comment">
                <Avatar data={data}/>
                <CommentBody data={data}/>
                <UserBadges data={data}/>
            </div>
        )
    }
}

let comments = data.map((obj)=>{
    return <Comment data={obj}/>
})

ReactDOM.render(
<div className="row">{comments}</div>,
document.getElementById('root')
);