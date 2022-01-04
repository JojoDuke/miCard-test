import './Inputs.css'

function Inputs() {
    return (
        <div>
            <form className="inputForm">
                <input type="text" placeholder="Name of Card"/>
                <input type="text" placeholder="Mobile Money Number"/>
                <input type="text" placeholder="Amount"/>
                <button className="card-btn">Create Card</button>
            </form>
        </div>
    )
}

export default Inputs;
