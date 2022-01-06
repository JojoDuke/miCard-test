import './CardItem.css'

function CardItem() {
    return (
        <div className='card-div'>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "0px 20px", }}>
                <h4>Dollar amount</h4>
                <h4>CSV</h4>
            </div>

            <h1 style={{ margin: "auto", }}>Card no.</h1>
            
            <div style={{ display: "flex", justifyContent: "space-between", padding: "0px 20px", }}>
                <h4>Name</h4>
                <h4>Expiry</h4>
            </div>
        </div>
    )
}

export default CardItem;
