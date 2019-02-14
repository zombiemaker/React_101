class CoinFlip extends React.Component{
    constructor (props){
        // React component has a ton of cool things and prototypes, so we are 
        // gonna tap into that
        super (props)
        // react doesnt care about heads or tails, like at all.
        this.heads = "./images/buffalo-nickel-heads.jpg"
        this.tails = "./images/buffalo-nickel-tails.png"
        this.coin = [this.heads,this.tails]
        // state is special- react cares about state.. a lot.
        this.state = {
            image: this.coin[0]
        }
        this.flipCoin = this.flipCoin.bind(this)
    }
    flipCoin(){
        console.log("flip the coin ran!")
        let coinSide = Math.round(Math.random());
        this.setState({
            image:this.coin[coinSide]
        })
    }

    // just like when you dont go to a bar and just grab a bottle of bourbon and 
    // start to pour.. you ask. As such, don't change state. Tell React to change 
    // state, and react will do it for us.

    // local class method
    // every.. repeat EVERY class component must have a render method.
    render(){
        // it is my job to return a DOM element
        // whether you like it or not, render will run after the constructor.
        // react events are camelCased, and attached to the element
        return(
            <div className="coin-flip">
                <button onClick={this.flipCoin}>Flip!</button>
                <img src={this.state.image}/>
            </div>
        )
    }
}



ReactDOM.render(
    <CoinFlip/>, 
    document.getElementById('root')
);