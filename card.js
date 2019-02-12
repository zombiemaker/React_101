// every react compunent must return a sngle DOM element

function Card(props){
    // console.log(props)
    // const title = "React from the Beginning"

    const saleOn = true;
    return(
        <div className="col s2">
            <div className="card hoverable small">
                <div className="card-image">
                    <img src= {props.data.image} />
                </div>
                <div className="card-content">
                    <p>{props.data.course}</p>
                    <p>{props.data.instructor}</p>
                </div>
                <div className="card-action">
                    <a href="#">${saleOn ? 9.99 : 59.99}</a>
                </div>
            </div>
        </div>
        )
}
function Cards(props){
    // console.log(props)
    // const title = "React from the Beginning"
    const saleOn = true;
    // console.log (props.data[0].course)
    props.data.forEach((item)=>{
    return(
        <div className="col s2">
            <div className="card hoverable small">
                <div className="card-image">
                    <img src= {props.data[item].image} />
                </div>
                <div className="card-content">
                    <p>{props.data[item].course}</p>
                    <p>{props.data[item].instructor}</p>
                </div>
                <div className="card-action">
                    <a href="#">${saleOn ? 9.99 : 59.99}</a>
                </div>
            </div>
        </div>
        )
    })
}