// Форма автозаполнения с выпадающим списком при внесении данных

// var countries = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cura?ao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'R?union', 'Romania', 'Russia', 'Rwanda', 'Saint Barth?lemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'S?o Tom? and Pr?ncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];
// function autocomplete(inp, arr) {
// 	var currentFocus;
// 	inp.addEventListener("input", function (e) {
// 		var a, b, i, val = this.value;
// 		console.log(this.value);
// 		console.log("a", a);
// 		console.log("b",b);
// 		console.log("i",i);
// 		console.log("val",val);
// 		closeAllLists();
// 		if (!val) { return false; }
// 		currentFocus = -1;
// 		a = document.createElement("UL");
// 		a.setAttribute("id", this.id + "autocomplete-list");
// 		a.setAttribute("class", "autocomplete-items");
// 		this.parentNode.appendChild(a);
// 		for (i = 0; i < arr.length; i++) {
// 			if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
// 				b = document.createElement("LI");
// 				b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
// 				b.innerHTML += arr[i].substr(val.length);
// 				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
// 				b.addEventListener("click", function (e) {
// 					inp.value = this.getElementsByTagName("input")[0].value;
// 					closeAllLists();
// 				});
// 				a.appendChild(b);
// 			}
// 		}
// 	});
// 	inp.addEventListener("keydown", function (e) {
// 		var x = document.getElementById(this.id + "autocomplete-list");
// 		if (x) x = x.getElementsByTagName("li");
// 		if (e.keyCode == 40) {
// 			currentFocus++;
// 			addActive(x);
// 		} else if (e.keyCode == 38) {
// 			currentFocus--;
// 			addActive(x);
// 		} else if (e.keyCode == 13) {
// 			e.preventDefault();
// 			if (currentFocus > -1) {
// 				if (x) x[currentFocus].click();
// 			}
// 		}
// 	});
// 	function addActive(x) {
// 		if (!x) return false;
// 		removeActive(x);
// 		if (currentFocus >= x.length) currentFocus = 0;
// 		if (currentFocus < 0) currentFocus = (x.length - 1);
// 		x[currentFocus].classList.add("autocomplete-active");
// 	}
// 	function removeActive(x) {
// 		for (var i = 0; i < x.length; i++) {
// 			x[i].classList.remove("autocomplete-active");
// 		}
// 	}
// 	function closeAllLists(elmnt) {
// 		var x = document.getElementsByClassName("autocomplete-items");
// 		for (var i = 0; i < x.length; i++) {
// 			if (elmnt != x[i] && elmnt != inp) {
// 				x[i].parentNode.removeChild(x[i]);
// 			}
// 		}
// 	}

// 	document.addEventListener("click", function (e) {
// 		closeAllLists(e.target);
// 	});
// }

// autocomplete(document.getElementById("input"), countries);
