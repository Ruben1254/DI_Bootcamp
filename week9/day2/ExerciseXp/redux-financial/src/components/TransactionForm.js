import React ,{useState} from 'react'
// import {connect} from "react-redux"

const TransactionForm = () => {
    const [accountNumber, setAccountNumber] = useState (0)
    const [Fsc, setFsc] = useState (0)
    const [name, setName] = useState ("")
    const [amount, setAmount] = useState(0)

    const handleInputChange = (e) => {
        setAccountNumber(e.target.value)
        setFsc(e.target.value)
        setName(e.target.value)
        setAmount(e.target.value)
    }

    const handleSubmit = () => {
        return(
            {
                account : accountNumber,
                fsc: Fsc,
                name: name,
                amount: amount
            }
        )
    }
    return (
        <div>
            <h1>Finaciale Transactions:</h1>
            <input type="text" onChange={e => handleInputChange(e)} placeholder="Account Number"/><br/>
            <input type="text" onChange={e => handleInputChange(e)} placeholder="Fsc"/><br/>
            <input type="text" onChange={e => handleInputChange(e)} placeholder="Name"/><br/>
            <input type="text" onChange={e => handleInputChange(e)} placeholder="Amount"/><br/>
            <input type="submit" value="submit" onClick={handleSubmit}/> 
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {

//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//     }
// }

export default TransactionForm
// export default connect(mapStateToProps,mapDispatchToProps)(TransactionForm)