// conſtants
const HTML = document.querySelector("html");
const HEAD = document.querySelector("head");

const CHARSET = document.createElement("meta");
const VIEWPORT = document.createElement("meta");
const RESET = document.createElement("link");
const STYLE = document.createElement("link");
const TABTITLE = document.createElement("title");
const FAVICON = document.createElement("link");

const PAGEURL = location.pathname.split("/");

const HEADER = document.querySelector("header");
const NAVBAR = document.createElement("nav");
const MAINLIST = document.createElement("ul");
const LISTLINK = document.createElement("a");

const TESTTABLE = ["home", "stats", "form"];
const LIMIT = TESTTABLE.length;

//variables
let i;
let j;
let y;
let menuitem;
let link;
let navlink;
let number;
let pagename;
let radical;
let size;
let style;
let sublist;
let sublistname;

const padWithLeadingZeros = (num, totalLength) => {
	return String(num).padStart(totalLength, '0');
};

pagename = PAGEURL[PAGEURL.length - 1].split(".")[0];
if (pagename == "home") {
	pagename = "&#28450;&#23383;&#23383;&#20856;"
} else {}
