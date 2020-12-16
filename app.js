function getCovidStats() {
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/180')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
        console.log(data);
		let population = data.location.country_population;
		let update = data.location.last_updated;
		let confirmedCases = data.location.latest.confirmed;
		let deaths = data.location.latest.deaths;

		document.getElementById('population').innerHTML = population.toLocaleString('en');
		document.getElementById('update').innerHTML = update.substr(0, 10);
		document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
		document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
		document.getElementById('percent').innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";

	})
	.catch(function() {
		console.log("error");
	})
	setTimeout(getCovidStats, 43200000) // update every 12 hours
}
/////Mexico

function getCovidStats2() {
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/224')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		let population2 = data.location.country_population;
		let update2 = data.location.last_updated;
		let confirmedCases2 = data.location.latest.confirmed;
		let deaths2 = data.location.latest.deaths;

		document.getElementById('population2').innerHTML = population2.toLocaleString('en');
		document.getElementById('update2').innerHTML = update2.substr(0, 10);
		document.getElementById('cases2').innerHTML = confirmedCases2.toLocaleString('en');
		document.getElementById('deaths2').innerHTML = deaths2.toLocaleString('en');
		document.getElementById('percent2').innerHTML = ((Number(deaths2)/Number(confirmedCases2))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";

	})
	.catch(function() {
		console.log("error");
	})
	setTimeout(getCovidStats2, 43200000) // update every 12 hours
}

function getCovidStats3() {
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/205')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		let population3 = data.location.country_population;
		let update3 = data.location.last_updated;
		let confirmedCases3 = data.location.latest.confirmed;
		let deaths3 = data.location.latest.deaths;

		document.getElementById('population3').innerHTML = population3.toLocaleString('en');
		document.getElementById('update3').innerHTML = update3.substr(0, 10);
		document.getElementById('cases3').innerHTML = confirmedCases3.toLocaleString('en');
		document.getElementById('deaths3').innerHTML = deaths3.toLocaleString('en');
		document.getElementById('percent3').innerHTML = ((Number(deaths3)/Number(confirmedCases3))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";

	})
	.catch(function() {
		console.log("error");
	})
	setTimeout(getCovidStats3, 43200000) // update every 12 hours
}

function getCovidStats4() {
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/8')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		let population4 = data.location.country_population;
		let update4 = data.location.last_updated;
		let confirmedCases4 = data.location.latest.confirmed;
		let deaths4 = data.location.latest.deaths;

		document.getElementById('population4').innerHTML = population4.toLocaleString('en');
		document.getElementById('update4').innerHTML = update4.substr(0, 10);
		document.getElementById('cases4').innerHTML = confirmedCases4.toLocaleString('en');
		document.getElementById('deaths4').innerHTML = deaths4.toLocaleString('en');
		document.getElementById('percent4').innerHTML = ((Number(deaths4)/Number(confirmedCases4))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";

	})
	.catch(function() {
		console.log("error");
	})
	setTimeout(getCovidStats4, 43200000) // update every 12 hours
}

window.onload = function() {
    getCovidStats();
    getCovidStats2();
    getCovidStats3();
    getCovidStats4();
}