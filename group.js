function addGroup() {
  let names = [];
  let groupName = "";
  let nPersons = window.prompt("How Many People You Want To Add In this group");
  if (Number(nPersons) > 0) {
    groupName = window.prompt("Enter your group name");
    for (let i = 0, j = 1; i < nPersons; i++, j++) {
      let name = window.prompt("Enter the name of the Person " + j + "");
      if (name.length > 0) {
        names.push(name);
      }
    }
  }
  console.log(names);
  displayGroupInfo(names, groupName);
}

function displayGroupInfo(members, grpName) {
  let html = `<h1>${grpName}</h1>`;
  document.getElementById("group-info").insertAdjacentHTML("beforeend", html);
  html = `<span>Members of the group are: </span>`;
  document.getElementById("group-info").insertAdjacentHTML("beforeend", html);
  for (let i = 0; i < members.length; i++) {
    html = `<span>${members[i]},</span>`;
    document.getElementById("group-info").insertAdjacentHTML("beforeend", html);
  }
}
