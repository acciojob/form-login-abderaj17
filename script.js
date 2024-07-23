function getFormvalue() {
    //Write your code here
	let input1 = document.querySelector('[name="fname"]');
	let input2 = document.querySelector('[name="lname"]');
	let btn = document.querySelector('[type="submit"]');

	btn.addEventListener('click', printName);

	function printName(event) {
                // Prevent the form from submitting and refreshing the page
                event.preventDefault();
		let output = alert(input1.value + " " + input2.value);
	}
}