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

// function Car(make,model){
    // this.make = make;
    // this.model = model
// }

// when setting up prototypes, it is useful for memory. If they all have this,
// it saves memory to reference it once, not every time the new car function is 
// run.
// Car.prototype.updateModel = function (newModel){
    // this.model=newModel;
// }
// let myCar = new Car('Chevy','Silverado')
// class Car {
    // if you want to use the word this inside of a class, you must call the 
    // constructor f(n). In python it's __init__, but in JS it is
    // constructor(make,model, mpg, tankSize){
        // this.make = make;
        // this.model = model;
        // this.mpg = mpg;
        // this.tankSize=tankSize;
    // }
    // instead of making a model prototype, just put it inside the car class but not in the constructor
    // updateModel(newModel){
        // this.model = newModel
    // }
    // distanceToEmpty(){
        // console.log(this.mpg * this.tankSize + "Miles left");
    // }
// }
// let gregsCar = new Car('toyota,'camry',37.6, 15)
// gregsCar.distanceToEmpty()
// for inheritance (this just adds prototypes in the background), just do:
// class electricCar extends Car{
    // constructor(make, model,batteryLife){
        // super (make,model,null,null);
        // this.batteryLife = batteryLife
    // }
     // distanceToEmpty(){
        // console.log(this.batteryLife * 10 + "Miles left");
    // }
    // turnOn(){
        // console.log('the car is on!')
    // }
// }
// let davidCummingsCar = new electricCar('tesla','x',100);