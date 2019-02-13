// Application is uppercase because React looks for propercase stuff to find out that it is a component
// all components, without exception, must return a single dom element
// it's a front end ui, so the component has no purpose if it doesn't return a dom element
function Header(props){
    return (
        <div className="header">
        <h1>{props.title}</h1>
    </div>
    )
}

function Player(props){
    return (
        <div className = "player1">
            <div className = "player-name">{props.name}</div>
            <Counter/>
        </div>
    )
}

function Counter(props){
    return(
        <div className="counter">
            <button className="minus waves-effect waves-light btn">-</button>                           
            <div className="player-score">0</div>
            <button className="minus waves-effect waves-light btn">-</button>
        </div>
    )
}


function Application(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col s6 s3-offset board">
                    <Header title={props.title}/>
                    <div className = "players">
                        <Player name="Michael"/>
                        <Player name="Jim"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

// reactDOM.render puts react stuff in the dom
// takes 2 args
    // 1.what
    // 2. where
    
ReactDOM.render(
    <Application title="Ping Pong Tourney"/>,
    document.getElementById('root')
)