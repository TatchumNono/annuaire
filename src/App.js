import "./App.css";

const App = () => {
	return (
		<div className="h-full">
			<header className="bg-clip-border rounded-bl-[50%]  rounded-br-[50%] bg-gradient-to-r from-pink-500 to-violet-500 pt-5 pb-16 px-4 ">
				<div className="text-slate-50 flex flex-1 justify-between mb-6 font-bold text-base">
					<div id="logo" className="basis-1/2">
						<p>Annuaire</p>
					</div>

					<div id="menu" className="basis-1/2">
						<nav>
							<ul className="flex justify-end">
								<li className="px-2">Home</li>
								<li className="px-2">About</li>
							</ul>
						</nav>
					</div>
				</div>

				<h1 className="text-slate-50 text-left text-3xl font-bold not-italic  md:text-center">
					Hello world Your Favorite Phonebook at your reach <br />
					<br />
					Find the contact you want in an instant
				</h1>

				<div className="flex justify-center pt-12">
					<button className="text-slate-50 bg-violet-500 px-5 py-3 rounded-md hover:bg-pink-500 transition-colors">
						Get Started
					</button>
				</div>
			</header>

			<div className="px-4 py-10">
				<h1 className=" font-bold text-2xl">About</h1>
				<p>The goal of this platform is to ...</p>
			</div>

			<footer className=" text-slate-300 text-center bg-slate-800 mb-0 py-5">
				<p>By @HaibaSoft</p>
			</footer>
		</div>
	);
};

export default App;
