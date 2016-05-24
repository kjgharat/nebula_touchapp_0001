


var sidemenu_main = {
  view: "sidemenu",
  id: "topmenu",
  width: 200,
  position: "left",
  state: function (state) {
    var toolbarHeight = $$("toptoolbar").$height;
    state.top = toolbarHeight;
    state.height -= toolbarHeight;
  },
  css: "topmenu",
  body: {
    view: "list",
    borderless: true,
    scroll: false,
    template: "<span class='webix_icon fa-#icon#'></span> #value#",
    data: [
      {id: 1, value: "User Profile", icon: "user"},
      {id: 2, value: "Settings", icon: "cog"},
      {id: 3, value: "Contact us", icon: "phone"}
    ],
    select: true,
    type: {
      height: 40
    }
  }
};

function show_details(inputText) {
  var displayText = "-"
  var section = $$('listSection').getValue();
  var sectionNo = $$('sectionNo').getValue();

  if (section == 1) {


    if (sectionNo == 123 && inputText == "Compundability") {
      displayText = "Non-Compoundable";
    } else if (sectionNo == 123 && inputText == "Cognizability") {
      displayText = "Cognizable";
    } else if (sectionNo == 123 && inputText == "Nature of Case") {
      displayText = "Summon Case";
    } else if (sectionNo == 123 && inputText == "Triable by") {
      displayText = "Session Court";
    } else if (sectionNo == 336 && inputText == "Compundability") {
      displayText = "Non-Compoundable";
    } else if (sectionNo == 336 && inputText == "Cognizability") {
      displayText = "Cognizable";
    } else if (sectionNo == 336 && inputText == "Nature of Case") {
      displayText = "Summon Case";
    } else if (sectionNo == 336 && inputText == "Triable by") {
      displayText = "MM Court";
    } else if (sectionNo == 339 && inputText == "Compundability") {
      displayText = "Non-Compoundable";
    } else if (sectionNo == 339 && inputText == "Cognizability") {
      displayText = "Non-Cognizable";
    } else if (sectionNo == 339 && inputText == "Nature of Case") {
      displayText = "Warrant Case";
    } else if (sectionNo == 339 && inputText == "Triable by") {
      displayText = "Session Court";
    } else if (sectionNo == 343 && inputText == "Compundability") {
      displayText = "Compoundable";
    } else if (sectionNo == 343 && inputText == "Cognizability") {
      displayText = "Cognizable";
    } else if (sectionNo == 343 && inputText == "Nature of Case") {
      displayText = "Warrant Case";
    } else if (sectionNo == 343 && inputText == "Triable by") {
      displayText = "MM Court";
    }


  }
//displayText = displayText.concat(section, sectionNo, inputText)


  webix.alert(displayText);
}

function update_section() {
  $$('topwin').show();
  //webix.message("Data Updated");
}

///////////////////////////////////





/*
var caselaw_Text =
        "Abettor when liable to cumulative punishment for act abetted and for act done"
        ;

var definition =
        "When an act is abetted with the intention on the part of the abettor of causing a particular effect, and an act for which the abettor is liable in consequence of the abetment, causes a different effect from that intended by the abettor, the abettor is liable for the effect caused, in the same manner and to the same extent as if he had abetted the act with the intention of causing that effect, provided he knew that the act abetted was likely to cause that effect."
        ;



var topmenu = {view: "menu", width: 200, css: "blue", data:
          [
            {id: "1", value: "Classes", width: 100, submenu: [{value: "Activities"}, {value: "Vendors"}, {value: "Studios"}]},
            {id: "2", value: "User", width: 100, submenu: [{value: "My Profile"}, {$template: "Separator"}, {value: "Logout"}]}
          ],
  on: {
    onMenuItemClick: function (id) {
      menuClick(this.getMenuItem(id).value);
    }
  }};


function menuClick(value) {

  if (value === "Activities") {
    $$("mainlayout").removeView("view1id");
    $$("mainlayout").addView(view2, -1);
    $$("view2listid").refresh();
    $$("view2listid").resize();
  }
  webix.message(value);
}
*/