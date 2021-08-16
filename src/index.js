console.log("start");

const box = document.querySelector("#box");
box.addEventListener("click", fetchRandomFox);

window.addEventListener("keydown", (e) => {
	if (e.keyCode == 13 || e.key == 13 || e.keyIdentifier == 13) {
		console.log("Enter Key");
		fetchRandomFox();
	}
});

function fetchRandomFox() {
	console.log("fetch");
	const img = document.querySelector("#randomImage");
	img.src = "./loading.gif";
	fetch("https://randomfox.ca/floof/?ref=apilist.fun", {
		method: "GET",
		mode: "cors",
	})
		.then((res) => res.json())
		.then((data) => (img.src = data.image));
}
fetchRandomFox();
