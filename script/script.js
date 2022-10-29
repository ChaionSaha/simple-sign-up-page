//[A-Za-z]+\s?[a-zA-Z]*

"use strict";
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const conPass = document.querySelector("#confirmPassword");
const passViewIcon = document.querySelector("#passwordView");
const inputBoxes = document.querySelectorAll(".inputBox");

document.addEventListener("click", (e) => {
	if (pass === document.activeElement || pass.value !== "") {
		passViewIcon.style.opacity = "1";
	} else {
		passViewIcon.style.opacity = "0";
	}

	inputBoxes.forEach((box) => {
		if (
			box.children[0] !== document.activeElement &&
			box.children[0] === ""
		) {
			inactiveElements(box.children[0]);
		}
	});

	if (e.target.classList.contains("signUpButton")) {
		let result = userName.value.split(" ").join("").match(/\W/gi);
		if (result || userName.value === "") {
			editElement(userName, "red", "Invalid Name");
		} else {
			userName.style.borderColor = "#57b846";
			userName.parentElement.children[1].style.color = "#57b846";
			userName.parentElement.children[1].style.borderColor = "#57b846";
			userName.parentElement.children[1].innerText = "Name";
		}

		logicWorks(email, "Email");

		if (pass.value === "") {
			editElement(pass, "red", "Invalid Password");
			editElement(conPass, "red", "Invalid Password");
		} else {
			editElement(pass, "#57b846", "Password");
			editElement(conPass, "#57b846", "Confirm Password");
			if (pass.value !== conPass.value && conPass.value !== "") {
				editElement(conPass, "red", "Password doesot match");
			} else {
				editElement(conPass, "#57b846", "Password Matches");
			}
		}
	}
});

//document.querySelector(".signUpButton").addEventListener("click", (e) => {});

passViewIcon.addEventListener("click", (e) => {
	if (passViewIcon.classList.contains("showPass")) {
		passViewIcon.src = `./img/eye-hidden.png`;
		passViewIcon.classList.remove("showPass");
		passViewIcon.classList.add("hidePass");
		pass.type = "text";
	} else if (passViewIcon.classList.contains("hidePass")) {
		passViewIcon.src = `./img/eye.png`;
		passViewIcon.classList.remove("hidePass");
		passViewIcon.classList.add("showPass");
		pass.type = "password";
	}
});

const editElement = function (nodeList, color, notificationText) {
	nodeList.style.borderColor = color;
	nodeList.parentElement.children[1].style.color = color;
	nodeList.parentElement.children[1].style.borderColor = color;
	nodeList.parentElement.children[1].innerText = notificationText;
};

const logicWorks = function (nodeList, nodeName) {
	if (nodeList.value === "") {
		editElement(nodeList, "red", `Invalid ${nodeName}`);
	} else {
		nodeList.style.borderColor = "#57b846";
		nodeList.parentElement.children[1].style.color = "#57b846";
		nodeList.parentElement.children[1].style.borderColor = "#57b846";
		nodeList.parentElement.children[1].innerText = nodeName;
	}
};

const inactiveElements = function (nodeList) {
	nodeList.style.borderColor = "rgba(0, 0, 0, 0.089)";
	nodeList.parentElement.children[1].style.color = "rgba(0, 0, 0, 0.5)";
	// nodeList.parentElement.children[1].style.borderColor = "#57b846";
};
