import "./App.scss";
import Expenses from "./components/expenses/Expenses";

function App() {

    const expenses = [
        {
            title:"Expense 1",
            amount: 50,
            date: new Date(2021, 11, 20)
        },
        {
            title:"Expense 2",
            amount: 100,
            date: new Date(2021, 11, 21)
        },
        {
            title:"Expense 3",
            amount: 150,
            date: new Date(2021, 11, 22)
        },
        {
            title:"Expense 4",
            amount: 200,
            date: new Date(2021, 11, 24)
        },
        {
            title:"Very Big Expense 5",
            amount: 250,
            date: new Date(2021, 11, 25)
        },
    ]

	return (
		<div className="App">
            <Expenses expenses={expenses}/>
		</div>
	);
}

export default App;
