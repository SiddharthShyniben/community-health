import AsciiTable, { AsciiAlign } from 'https://deno.land/x/ascii_table@v0.1.0/mod.ts';

const files = [
	['Readme', 'templates/README.md'],
	['Contributing', 'templates/CONTRIBUTING.md'],
	['Bug report', 'templates/issues-templates/bug-report.md'],
	['Feature request', 'templates/issues-templates/feature-request.md'],
];

let decreases = [];

const table = new AsciiTable('Comments');

table
	.setBorder('│', '─', '┌', '┘')
	.setHeadingAlign(AsciiAlign.CENTER)
	.setHeading('Name', 'Original Length', 'New length', 'Decrease', '% Decrease');

for (const file of files) {
	let contents = await Deno.readTextFile(file[1]);
	const initialLength = contents.length;

	contents = contents.replace(/<!--[^!]([\s\S]*?)-->/gi, '');
	const finalLength = contents.length;

	const percentDecrease = (initialLength - finalLength) / initialLength * 100;
	decreases.push(percentDecrease);

	table.addRow(file[0], initialLength + '', finalLength + '', (initialLength - finalLength) + '', percentDecrease + '');
}

let tableString = table.toString();

tableString = tableString.split('\n');
tableString[0] = tableString[0].substring(0, tableString[0].length - 1) + '┐';
tableString.reverse();
tableString[0] = '└' + tableString[0].substring(1);
tableString.reverse();
tableString = tableString.join('\n');

console.log(tableString);
console.log();
console.log(`Average: ${eval(decreases.join('+')) / decreases.length + 1}`);
