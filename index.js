const snippetTableHeaders = snippets.length > 0 ? Object.keys(snippets[0]) : [];

const thead = document.getElementById("thead");
let snippetTableHeaderHtml = "<tr>";
snippetTableHeaders.forEach((header) => {
  snippetTableHeaderHtml += `<th>${header}</th>`;
});
snippetTableHeaderHtml += "</tr>";
thead.innerHTML = snippetTableHeaderHtml;

const tbody = document.getElementById("tbody");
let snippetTableBodyHtml = "";
snippets.forEach((snippet, index) => {
  snippetTableBodyHtml += "<tr>";
  snippetTableHeaders.forEach((header) => {
    snippetTableBodyHtml += `<td>${snippet[header]}</td>`;
  });
  snippetTableBodyHtml += `<td><button class="fab" id="button_${index}" title="Copy to clipboard" type="button">Copy</button></td></tr>`;
});
tbody.innerHTML = snippetTableBodyHtml;

if (snippetTableHeaders.length > 0) {
  snippets.forEach((snippet, index) => {
    document.getElementById(`button_${index}`).onclick = () => copyToClipboard(snippet[snippetTableHeaders[snippetTableHeaders.length - 1]]);
  });
}

const body = document.getElementById("body");
const header = document.getElementsByClassName("header");
const th = document.getElementsByTagName("th");
const footer = document.getElementsByClassName("footer");
const fab = document.getElementsByClassName("fab");

const elements = [body, ...header, ...th, ...footer, ...fab];

let darkTheme = false;

function changeTheme() {
  darkTheme = !darkTheme;

  if (darkTheme) {
    for (const element of elements) {
      element.classList.add("dark");
    }

    document.getElementById("themeSwitchLabel").innerHTML = "Dark Theme";
  } else {
    for (const element of elements) {
      element.classList.remove("dark");
    }

    document.getElementById("themeSwitchLabel").innerHTML = "Light Theme";
  }
}

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => console.log(`Copied ${text} to clipboard`))
    .catch((error) => console.error(error));
}

document.getElementById("themeChanger").onclick = () => changeTheme();

changeTheme();
