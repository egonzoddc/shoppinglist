window.onload = function() {
	initShoppingList();
};

function initShoppingList() {
	let form = document.getElementById("item-form");

	form.addEventListener("submit", (event) => {
		handleItemForm(event, form);
	});
}

function handleItemForm(event, formRef) {
	if(event.preventDefault) {
		event.preventDefault();
	}

	addItemToShoppingList();

	return false;
}

function addItemToShoppingList() {
	let itemName = document.getElementById("item-name");
	let itemAmount = document.getElementById("item-amount");
	let id = getRandomInt(0, 10000000);

	// Creates list item html and appends to page.
	let itemHtml = createListeItemHtml(itemName.value, itemAmount.value, id);
	console.log("Item HTML: ", itemHtml);
	let itemListRef = document.getElementById("shopping-list");
	itemListRef.insertAdjacentHTML("afterend", itemHtml);
}

function createListeItemHtml(itemName, itemAmount, id) {
	return `<li id="item${id}">
					${itemName} - ${itemAmount}
					<button id="button${id}" type="button">Delete Item</button>
			</li>`;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}