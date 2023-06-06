let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];

Array.prototype.heroesRender = function(folder) {
	let tableHTML = `
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Icon</th>
				</tr>
			</thead>
			<tbody>
	`;
	this.forEach(function(item) {
		let imageName = item.name.replace(/\s+/g, '').toLowerCase();
		let imageSrc = `images/${folder}/${imageName}.svg`;

		tableHTML += `
			<tr>
				<td>${item.name}</td>
				<td>
					<img src="${imageSrc}">
				</td>
			</tr>
		`;
	});

	tableHTML += `
			</tbody>
		</table>
	`;

	return tableHTML;
}

document.write(dcHeroes.heroesRender('dc'));
document.write(marvelHeroes.heroesRender('marvel'));
 