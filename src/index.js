import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];
//for more than one jsx component it should be in the div
function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}
function Header() {
	// one way of adding style is make a variable
	const style = {};
	return (
		<header className="header">
			<h1 style={style}>Fast React Pizza Co.</h1>
		</header>
	);
}

function Menu() {
	// we want to use conditional rendering for this part
	const pizzas = pizzaData;
	const numPizzas = pizzas.length;

	return (
		<main className="menu">
			<h2>Our Menu</h2>
			{/* list rendering */}
			{/* conditional rendering */}
			{/* the answer is truw it turns back the menu  */}
			{/* in React when we use conthinail it doesnt turn back true or false but actually it render 0  */}
			{numPizzas > 0 && (
				// <></> is react fragment it doesnt wrap up and mess up two property
				<>
					<p>Authentic italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
					<ul className="pizzas">
						{pizzas.map((pizza) => (
							<Pizza pizzaObj={pizza} key={pizza.name} />
						))}
					</ul>
				</>
			)}

			{/*<Pizza name="Pizza spinaci" ingredients="Tomato, Mozarella, spinach, and ricotta cheese " photoName="pizzas/spinaci.jpg" price={10} />
			<Pizza name="Pizza Fungi" ingredients="Tomato, mushroom" price={12} photoName="pizzas/funghi.jpg" />*/}
		</main>
	);
}

//this function is jsx component which can include it to the main function
//props = how we pass parent and child component
//with props we can customize each function that can not be repeated
function Pizza({ pizzaObj }) {
	console.log({ pizzaObj });
	// conditional ternary with return
	// if (pizzaObj.soldOut) return null;
	return (
		// sold-out is css class
		<li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openhour = 10;
	const closeHour = 22;
	const isOpen = hour >= openhour && hour <= closeHour;
	console.log(isOpen);

	// actually its better to use conditional rendering with ternaries beacouse of the else part
	// in {jsx} we cant use if for switch because it doesnt return value we should use ternary operator it returns value

	// for rendering a peices of jsx use ternary operator is better
	return (
		<footer className="footer">
			{isOpen ? (
				<Order closeHour={closeHour} openhour={openhour} />
			) : (
				<p>
					we're Happy to welcome you between {openhour}:00 and {closeHour}:00.
				</p>
			)}
		</footer>
	);

	//convert jxs to a component =  functional or class-based its reusable / gets rendered on the screen.
	function Order({ closeHour, openhour }) {
		//we use props like this and make it destructuring
		return (
			<div className="order">
				<p>
					{" "}
					we're open from {openhour}:00 Am until {closeHour}:00 Pm. Come to visit us or order online.
				</p>
				<button className="btn">order</button>
			</div>
		);
	}

	// 		{/* hear we use conditional rendering with end && operator too. if isopen is true it renders the footer */}

	// return (
	// 	<footer className="footer">
	// 		{isOpen && (
	// 			<div className="order">
	// 				<p> we're open until {closeHour}.Come to visit us or order online.</p>
	// 				<button className="btn">order</button>
	// 			</div>
	// 		)}
	// 	</footer>
	// );
}
// we should nest pizza component into App function
//for react function = the neame of function should be with uppercase / and it should return some thing and the thing it return is jsx

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
