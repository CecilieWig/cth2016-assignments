var program = require('commander');
 
var book1_author = "Mark Frost";
var book1_title = "The Secret History of Twin Peaks";
var book1_price = "27.50";
var book1_kind = "Hardback";

var book2_author = "Jon Ronson";
var book2_title = "So You've Been Publicly Shamed";
var book2_price = "25.50";
var book2_kind = "Paperback";

var book3_author = "Jeffrey Toobin";
var book3_title = "The Run of His Life: The People V. O. J. Simpson";
var book3_price = "22.99";
var book3_kind = "Trade Paperback";

var book4_author = "Patrick Andries";
var book4_title = "Owners Manual for the Mind";
var book4_price = "20.50";
var book4_kind = "Trade Paperback";

var book5_author = "Niels Shoe Meulman";
var book5_title = "Shoe is my Middle Name";
var book5_price = "59.99";
var book5_kind = "Hardcover";

program
  .version('0.0.1')
  .option('-a, --author [value]', 'Author of the book', 'empty')
  .option('-t, --title [value]', 'Title of the book')
  .option('-p, --price [value]', 'Price of the book')
  .option('-k, --kind [value]', 'Kind of the book')
  .parse(process.argv);

console.log(program.author); 

switch(program.author)
{
	case book1_author:
		console.log(book1_author);
		console.log(book1_title);
		console.log(book1_price);
		console.log(book1_kind);
		break;
	case book2_author: 
		console.log(book2_author);
		console.log(book2_title);
		console.log(book2_price);
		console.log(book2_kind);
		break;
	case book3_author: 
		console.log(book3_author);
		console.log(book3_title);
		console.log(book3_price);
		console.log(book3_kind);
		break;
	case book4_author: 
		console.log(book4_author);
		console.log(book4_title);
		console.log(book4_price);
		console.log(book4_kind);
		break;
	case book5_author:
		console.log(book5_author);
		console.log(book5_title);
		console.log(book5_price);
		console.log(book5_kind);
		break;
	case "empty":
		break; 
	default: 
		console.log('No match...');
		break;
}

switch(program.title)
{
	case book1_title:
		console.log(book1_title);
		console.log(book1_author);
		console.log(book1_price);
		console.log(book1_kind);
		break;
	case book2_title: 
		console.log(book2_title);
		console.log(book2_author);
		console.log(book2_price);
		console.log(book2_kind);
		break;
	case book3_title: 
		console.log(book3_title);
		console.log(book3_author);
		console.log(book3_price);
		console.log(book3_kind);
		break;
	case book4_title: 
		console.log(book4_title);
		console.log(book4_author);
		console.log(book4_price);
		console.log(book4_kind);
		break;
	case book5_title:
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break; 
	default: 
		console.log('No match...');
		break;
}

switch(program.price)
{
	case book1_price:
		console.log(book1_price);
		console.log(book1_title);
		console.log(book1_author);
		console.log(book1_kind);
		break;
	case book2_price: 
		console.log(book2_price);
		console.log(book2_title);
		console.log(book2_author);
		console.log(book2_kind);
		break;
	case book3_price: 
		console.log(book3_price);
		console.log(book3_title);
		console.log(book3_author);
		console.log(book3_kind);
		break;
	case book4_price: 
		console.log(book4_price);
		console.log(book4_title);
		console.log(book4_author);
		console.log(book4_kind);
		break;
	case book5_price:
		console.log(book5_price);
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_kind);
		break;
	default: 
		console.log('No match...');
		break;
}

switch(program.kind)
{
	case book1_kind:
		console.log(book1_kind);
		console.log(book1_title);
		console.log(book1_price);
		console.log(book1_author);
		break;
	case book2_kind: 
		console.log(book2_kind);
		console.log(book2_title);
		console.log(book2_price);
		console.log(book2_author);
		break;
	case book3_kind: 
		console.log(book3_kind);
		console.log(book3_title);
		console.log(book3_price);
		console.log(book3_author);
		break;
	case book4_kind: 
		console.log(book4_kind);
		console.log(book4_title);
		console.log(book4_price);
		console.log(book4_author);
		break;
	case book5_kind:
		console.log(book5_kind);
		console.log(book5_title);
		console.log(book5_price);
		console.log(book5_author);
		break;
	default: 
		console.log('No match...');
		break;
}