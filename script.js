

function pageLoad() {

	let aNumber = 1; // itt egy számot adtunk meg változó értékének

	let aText = "This is a text."; // itt egy szöveget adtunk meg a változó értékének.
	
	let aMultilineText = `
		This 
		is
		a 
		multiline 
		text.
	`; // itt egy többsoros szöveget adtunk meg a változó értékének.

	let theRoot = document.getElementById("root"); // itt egy html elemet mentettünk el a változóba.

	let aFunction = function () {


	} // itt egy függvényt adtunk meg a változó értékének.

		console.log(aNumber);
		console.log(aNumber + aText);

		if(aNumber === 1) {
			console.log("The aNumber variable's value is: " + aNumber + ", and i'm happy with it.");

			let anotherNumber = 1000;

			console.log(`
				The aNumber variable's value is: ${aNumber},
				and i'm happy with it.
				${anotherNumber}
			`);
			
			
			console.log(anotherNumber);
		}
		//console.log(anotherNumber);


		// var vs. let
		for (let index = 0; index < 100; index++) {
			//console.log(index);

			theRoot.insertAdjacentHTML("beforeend", `
				<div class="mondayClass">
					I love Mondays.
					Especially when index is ${index}
				</div>
			
			`);
			
		}

		//console.log(index);
		let allTheMondayDivs = theRoot.querySelectorAll(".mondayClass");
		console.log(allTheMondayDivs[0]);
		
}



window.addEventListener("load", pageLoad);