class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            moviesToShow:[]
        }  
    }
    render(){
        return(
            <h1>Sanity Check</h1>
        )
    }
}




ReactDOM.render(
    <App/>, 
    document.getElementById('root')
);