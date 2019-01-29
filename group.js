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
  let text;
  let h1 = document.createElement("H1");
  text = document.createTextNode("Your group name is: " + grpName);
  h1.appendChild(text);
  document.getElementById("group-info").appendChild(h1);
  let p = document.createElement("span");
  text = document.createTextNode("Members of the group are: ");
  p.appendChild(text);
  document.getElementById("group-info").appendChild(p);
  for (let i = 0; i < members.length; i++) {
    let span = document.createElement("SPAN");
    text = document.createTextNode(members[i] + ", ");
    span.appendChild(text);
    document.getElementById("group-info").appendChild(span);
  }
}
