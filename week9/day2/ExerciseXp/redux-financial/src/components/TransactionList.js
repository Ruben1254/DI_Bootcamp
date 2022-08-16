import TransactionForm from "./TransactionForm";

const TransactionList = () => {
    return (
        exemple.map((item,i) => {
            <table>
                <tr>
                    <td>{item.account}</td>
                    <td>{item.fsc}</td>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td><button>edit</button></td>
                    <td><button>delete</button></td>
                </tr>
            </table>
        })
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

export default TransactionList
// export default connect(mapStateToProps,mapDispatchToProps)(TransactionList)