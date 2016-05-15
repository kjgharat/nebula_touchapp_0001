


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


///////////////////////////////////
var detailsList = [
  {title: "Non Bailable"},
  {title: "Non Compensate"},
  {title: "Non Punishable"},
  {title: "Session Court"},
  {title: "Warrant"},
  {title: "Defensable"},
  {title: "Non Bailable1"},
  {title: "Non Compensate1"},
  {title: "Non Punishable1"},
  {title: "Session Court1"},
  {title: "Warrant1"},
  {title: "Defensable1"},
  {title: "Non Bailable2"},
  {title: "Non Compensate2"},
  {title: "Non Punishable3"},
  {title: "Session Court4"},
  {title: "Warrant5"},
  {title: "Defensable5"}
];

var caselaw_Text =
        "Abettor when liable to cumulative punishment for act abetted and for act done"
        ;

var definition =
        "When an act is abetted with the intention on the part of the abettor of causing a particular effect, and an act for which the abettor is liable in consequence of the abetment, causes a different effect from that intended by the abettor, the abettor is liable for the effect caused, in the same manner and to the same extent as if he had abetted the act with the intention of causing that effect, provided he knew that the act abetted was likely to cause that effect."
        ;

function update_section() {
  webix.message("Data Updated");
}

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
var view1 = {
  view: "tabview", id: "view1id",
  cells: [
    {
      header: "Details12",
      body: {
        view: "list",
        scroll: "y",
        width: 150,
        height: 500,
        template: " #title# ",
        select: true,
        data: detailsList
      }
    },
    {
      header: "Case Law",
      body: {view: "label", label: caselaw_Text}
    },
    {
      header: "Definition",
      body: {view: "label", label: definition}
    }
  ]
};
var view2 = {
  view: "tabview", id: "view2id",
  cells: [
    {
      header: "DetailsABC",
      body: {
        view: "list",
        id: "view2listid",
        scroll: "y",
        width: 150,
        height: 500,
        template: " #title# ",
        select: true,
        data: detailsList
      }
    },
    {
      header: "Case Law",
      body: {view: "label", label: caselaw_Text}
    },
    {
      header: "Definition",
      body: {view: "label", label: definition}
    }
  ]
};

var view = {
  view: "tabview",
  cells: [
    {
      header: "DetailsABC",
      body: {
        view: "list",
        scroll: "y",
        template: " #title# ",
        select: true,
        data: detailsList
      }
    },
    {
      header: "Case Law",
      body: {view: "label", label: caselaw_Text}
    },
    {
      header: "Definition",
      body: {view: "label", label: definition}
    }
  ]
};

