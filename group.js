function addGroup() {
  let names = [];
  let groupName = "";
  // Input from the user on how many people are required in this group
  let nPersons = window.prompt("How Many People You Want To Add In this group");
  if (Number(nPersons) > 0) {
    // Input: Group Name
    groupName = window.prompt("Enter your group name");
    // Input: Members names
    for (
      let index = 0, person_num = 1;
      index < nPersons;
      index++, person_num++
    ) {
      let name = window.prompt("Enter the name of the Person " + person_num);
      if (name.length > 0) {
        names.push(name);
      }
    }
  }
  displayGroupInfo(names, groupName);
}

function displayGroupInfo(members, grpName) {
  //It will display the group info with group name and member names
  let grp_name_html, grp_mems_html, grp_mem_html;
  let groupInfo = document.getElementById("group-info");
  // group name html element
  grp_name_html = `<h1>${grpName}</h1>`;
  groupInfo.insertAdjacentHTML("beforeend", grpName_html);
  grp_mems_html = `<span>Members of the group are: </span>`;
  groupInfo.insertAdjacentHTML("beforeend", grp_mems_html);
  // group name members html elements
  for (let index = 0; index < members.length; index++) {
    grp_mem_html = `<span>${members[index]}</span>`;
    groupInfo.insertAdjacentHTML("beforeend", grp_mem_html);
  }
}
