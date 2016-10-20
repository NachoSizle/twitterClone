var require = meteorInstall({"client":{"partialTemplates":{"template.editProfile.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.editProfile.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("editProfile");                                                                                   // 2
Template["editProfile"] = new Template("Template.editProfile", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("dataUserFound"));                                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", HTML.DIV({                                                                                      // 8
      class: "user-container"                                                                                          // 9
    }, "\n      ", HTML.DIV({                                                                                          // 10
      class: "panel panel-default userBox"                                                                             // 11
    }, "\n        ", HTML.DIV({                                                                                        // 12
      class: "panel-body"                                                                                              // 13
    }, "\n          ", HTML.Comment("Mensaje para el usuario registrado"), "\n          ", HTML.DIV({                  // 14
      class: "row"                                                                                                     // 15
    }, "\n            ", HTML.Comment("CONTENIDO DE LA PARTE IZQUIERDA DEL PERFIL DEL USUARIO"), "\n            ", HTML.DIV({
      class: "col-md-6 col-sm-6 col-xs-6",                                                                             // 17
      id: "leftDivCurrentUser"                                                                                         // 18
    }, "\n              ", HTML.Comment('EN LA ETIQUETA DE SRC, SE PONDRA EL NOMBRE DEL USUARIO ACTUAL\n              <img id="imgCurrentUser" src="/{{currentUser.username}}.png" class="img-responsive">\n              A MODO DE EJEMPLO, VAMOS A UTILIZAR UNO GENERICO PARA QUE CARGUE EN CUALQUIER USUARIO'), "\n              ", HTML.IMG({
      id: "imgCurrentUser",                                                                                            // 20
      src: function() {                                                                                                // 21
        return Spacebars.mustache(view.lookup("userImgFound"));                                                        // 22
      },                                                                                                               // 23
      class: "img-responsive"                                                                                          // 24
    }), "\n\n              ", HTML.LABEL({                                                                             // 25
      id: "btnCurrentUser",                                                                                            // 26
      class: "btn btn-default btn-lg btn-file iconToEditImg"                                                           // 27
    }, "\n                  ", HTML.SPAN({                                                                             // 28
      class: "glyphicon glyphicon-camera"                                                                              // 29
    }), " \n                  ", HTML.INPUT({                                                                          // 30
      id: "inputFile",                                                                                                 // 31
      type: "file",                                                                                                    // 32
      style: "display: none;"                                                                                          // 33
    }), "\n              "), "\n\n            "), "\n            ", HTML.Comment("CONTENIDO DE LA PARTE DERECHA DEL PERFIL DEL USUARIO"), "\n            ", HTML.DIV({
      class: "col-md-6 col-sm-6 col-xs-6",                                                                             // 35
      id: "rightDivCurrentUser"                                                                                        // 36
    }, "\n              ", HTML.Comment("ESTA DESCRIPCION ES GENERICA. HAY QUE CAMBIARLA POR LA QUE APAREZCA EN userData.description"), "\n              ", HTML.TEXTAREA({
      class: "form-control",                                                                                           // 38
      rows: "5",                                                                                                       // 39
      id: "userDescription",                                                                                           // 40
      placeholder: function() {                                                                                        // 41
        return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userDescription"));                     // 42
      }                                                                                                                // 43
    }), "\n            "), "\n          "), "\n\n          ", HTML.DIV({                                               // 44
      class: "currentUserName"                                                                                         // 45
    }, "\n            ", HTML.DIV({                                                                                    // 46
      class: "col-md-6 col-sm-6 col-xs-6"                                                                              // 47
    }, "\n              ", HTML.H3(HTML.STRONG(Blaze.View("lookup:dataUserFound.userName", function() {                // 48
      return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userName"));                              // 49
    }))), "\n              ", HTML.H5("@", Blaze.View("lookup:dataUserFound.userNameProfile", function() {             // 50
      return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userNameProfile"));                       // 51
    })), "\n            "), "\n            ", HTML.DIV({                                                               // 52
      class: "col-md-6 col-sm-6 col-xs-6"                                                                              // 53
    }, "\n              ", HTML.BUTTON({                                                                               // 54
      id: "saveChanges",                                                                                               // 55
      class: "btn btn-primary optionsUserProfile",                                                                     // 56
      type: "button"                                                                                                   // 57
    }, "\n                ", HTML.SPAN({                                                                               // 58
      class: "glyphicon glyphicon-ok"                                                                                  // 59
    }), "\n              "), "\n              ", HTML.BUTTON({                                                         // 60
      class: "btn btn-primary optionsUserProfile",                                                                     // 61
      type: "button",                                                                                                  // 62
      style: "margin-right:7px",                                                                                       // 63
      "data-toggle": "modal",                                                                                          // 64
      "data-target": "#dialog-NewSocialNetwork"                                                                        // 65
    }, "\n                ", HTML.SPAN({                                                                               // 66
      class: "glyphicon glyphicon-plus-sign"                                                                           // 67
    }), "\n                ", HTML.SPAN({                                                                              // 68
      class: "glyphicon glyphicon-user"                                                                                // 69
    }), "\n              "), "\n            "), "\n          "), "\n\n          ", HTML.DIV({                          // 70
      class: "modal fade",                                                                                             // 71
      id: "dialog-NewSocialNetwork"                                                                                    // 72
    }, "\n            ", Spacebars.include(view.lookupTemplate("socialNetworkBox")), "\n          "), "\n        "), "\n      "), "\n    "), "\n  " ];
  });                                                                                                                  // 74
}));                                                                                                                   // 75
                                                                                                                       // 76
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.followUsers.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.followUsers.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("followUsers");                                                                                   // 2
Template["followUsers"] = new Template("Template.followUsers", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return HTML.FORM({                                                                                                   // 5
    class: "form-inline"                                                                                               // 6
  }, HTML.Raw(' \n\t\t<input type="text" class="form-control" id="searchUser" placeholder="Search for user">\n\t\t<button type="submit" class="btn btn-info">Search</button>\n\n\t\t'), Blaze.If(function() {
    return Spacebars.call(view.lookup("foundUser"));                                                                   // 8
  }, function() {                                                                                                      // 9
    return [ "\n\t\t\t", HTML.DIV({                                                                                    // 10
      class: "found-user"                                                                                              // 11
    }, "\n\t\t\t\t", HTML.BUTTON({                                                                                     // 12
      type: "button",                                                                                                  // 13
      class: "btn btn-default",                                                                                        // 14
      id: "follow"                                                                                                     // 15
    }, "Follow @", Blaze.View("lookup:foundUser.username", function() {                                                // 16
      return Spacebars.mustache(Spacebars.dot(view.lookup("foundUser"), "username"));                                  // 17
    })), "\n\t\t\t"), "\n\t\t" ];                                                                                      // 18
  }), "\n  \t\n\t  \t", HTML.DIV({                                                                                     // 19
    class: "recommend-users"                                                                                           // 20
  }, " \n\t\t  ", HTML.Raw("<h5>Who to follow:</h5>"), "\n\t\t  ", Blaze.Each(function() {                             // 21
    return Spacebars.call(view.lookup("recommendedUsers"));                                                            // 22
  }, function() {                                                                                                      // 23
    return [ "\n\t\t    ", HTML.BUTTON({                                                                               // 24
      type: "button",                                                                                                  // 25
      class: "btn btn-default",                                                                                        // 26
      id: "followRec"                                                                                                  // 27
    }, "Follow @", Blaze.View("lookup:..username", function() {                                                        // 28
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "username"));                                          // 29
    })), "\n\t\t  " ];                                                                                                 // 30
  }), "\n\t\t"), "\n\t\t\n\t");                                                                                        // 31
}));                                                                                                                   // 32
                                                                                                                       // 33
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.loading.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.loading.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("loading");                                                                                       // 2
Template["loading"] = new Template("Template.loading", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return Spacebars.include(view.lookupTemplate("spinner"));                                                            // 5
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.navBarTemplate.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.navBarTemplate.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("navBarTemplate");                                                                                // 2
Template["navBarTemplate"] = new Template("Template.navBarTemplate", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.NAV({                                                                                                    // 5
    class: "navbar navbar-default"                                                                                     // 6
  }, "\n\t  ", HTML.DIV({                                                                                              // 7
    class: "container-fluid"                                                                                           // 8
  }, "\n\t    ", HTML.Raw("<!-- Brand and toggle get grouped for better mobile display -->"), "\n\t    ", HTML.DIV({   // 9
    class: "navbar-header"                                                                                             // 10
  }, "\n\t      ", HTML.Raw('<button type="button" id="btnNewTweet" class="navbar-toggle collapsed" data-toggle="modal" data-target="#dialog-NewTwiit">\n\t        <span class="glyphicon glyphicon-pencil"></span>\n\t      </button>'), "\n\n\t      ", HTML.BUTTON({
    type: "button",                                                                                                    // 12
    id: "btnMenuNavBar",                                                                                               // 13
    class: "navbar-toggle collapsed",                                                                                  // 14
    "data-toggle": "collapse",                                                                                         // 15
    "data-target": "#bs-example-navbar-collapse-1",                                                                    // 16
    "aria-expanded": "false"                                                                                           // 17
  }, "\n      \t\t", HTML.Raw('<span class="sr-only">Toggle navigation</span>'), "\n      \t\t", HTML.Raw('<span class="glyphicon glyphicon-tasks"></span>'), "\n      \t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("notificationCount"));                                                           // 19
  }, function() {                                                                                                      // 20
    return [ "\n      \t\t\t", Blaze.Unless(function() {                                                               // 21
      return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                                   // 22
    }, function() {                                                                                                    // 23
      return [ "\n\t\t      \t\t", HTML.SPAN({                                                                         // 24
        class: "badge badge-notify"                                                                                    // 25
      }, Blaze.View("lookup:notificationCount", function() {                                                           // 26
        return Spacebars.mustache(view.lookup("notificationCount"));                                                   // 27
      })), "\n      \t\t\t" ];                                                                                         // 28
    }), "\n\t\t    " ];                                                                                                // 29
  }), "\n    \t  "), "\n    \t  ", HTML.Raw('<img id="imgLogTwiiterClone" src="/imgLogTwiiterClone.png" class="img-responsive navbar-brand">'), "\n\t    "), "\n\n\t    ", HTML.DIV({
    class: "modal fade",                                                                                               // 31
    id: "dialog-NewTwiit"                                                                                              // 32
  }, "\n\t    \t", Spacebars.include(view.lookupTemplate("tweetBox")), "\n\t    "), "\n\n\t\t", HTML.Raw("<!--PARTE DERECHA DE LA BARRA DE NAVEGACION-->"), "\n\t    ", HTML.DIV({
    class: "collapse navbar-collapse",                                                                                 // 34
    id: "bs-example-navbar-collapse-1"                                                                                 // 35
  }, "\n\t      ", HTML.UL({                                                                                           // 36
    id: "dropDownMenu",                                                                                                // 37
    class: "nav navbar-nav navbar-right"                                                                               // 38
  }, "\n\t      \t\n\t      \t", HTML.LI({                                                                             // 39
    class: "dropdown"                                                                                                  // 40
  }, "\n\t            ", Spacebars.include(view.lookupTemplate("notifications")), "\n\t      \t"), "\n\t      \t\n\t      \t", HTML.LI("\n\t            ", Spacebars.include(view.lookupTemplate("notificationsNew")), "\n\t      \t"), "\n\t      \t\n\t        ", HTML.Raw('<li>\n\t        \t<a href="/whoToFollow" id="recommendationsBtn">\n\t        \t\t<span class="glyphicon glyphicon-search"></span>\n\t        \t</a>\n\t        </li>'), "\n\t        ", HTML.LI("\n\t        \t", Blaze.Unless(function() {
    return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                                     // 42
  }, function() {                                                                                                      // 43
    return [ "\n\t\t\t  \t\t", HTML.A({                                                                                // 44
      id: "btnNewTwiit",                                                                                               // 45
      type: "button",                                                                                                  // 46
      href: "#",                                                                                                       // 47
      class: "navbar-btn",                                                                                             // 48
      "data-toggle": "modal",                                                                                          // 49
      "data-target": "#dialog-NewTwiit"                                                                                // 50
    }, "\n\t\t\t        \t", HTML.SPAN({                                                                               // 51
      class: "glyphicon glyphicon-pencil"                                                                              // 52
    }), "\n\t\t\t      \t"), "\n\t\t\t  \t" ];                                                                         // 53
  }), "\n\t        "), "\n\t        ", HTML.LI("\n              ", HTML.Raw("<!--A MODO DE EJEMPLO, VAMOS A UTILIZAR UNO GENERICO PARA QUE CARGUE EN CUALQUIER USUARIO-->"), "\n              ", HTML.IMG({
    id: "imgProfile",                                                                                                  // 55
    src: function() {                                                                                                  // 56
      return Spacebars.mustache(view.lookup("userImgFound"));                                                          // 57
    },                                                                                                                 // 58
    class: "img-responsive"                                                                                            // 59
  }), "\n\t        "), "\n\t      "), "\n\t    "), "\n\t  "), "\n\t");                                                 // 60
}));                                                                                                                   // 61
                                                                                                                       // 62
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.not_found.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.not_found.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("notFound");                                                                                      // 2
Template["notFound"] = new Template("Template.notFound", (function() {                                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.Raw('<div class="not-found page jumbotron">\n    <h2>404</h2>\n    <p>Sorry, we couldn\'t find a page at this address.</p>\n  </div>');
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.notifications.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.notifications.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("notifications");                                                                                 // 2
Template["notifications"] = new Template("Template.notifications", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return [ HTML.A({                                                                                                    // 5
    href: "#",                                                                                                         // 6
    class: "dropdown-toggle",                                                                                          // 7
    "data-toggle": "dropdown",                                                                                         // 8
    role: "button",                                                                                                    // 9
    "aria-haspopup": "true",                                                                                           // 10
    "aria-expanded": "false"                                                                                           // 11
  }, "\n    ", HTML.Raw("<!--Notificaciones-->"), "\n    ", HTML.Raw('<span class="glyphicon glyphicon-inbox"></span>'), "\n\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("notificationCount"));                                                           // 13
  }, function() {                                                                                                      // 14
    return [ "\n        ", Blaze.If(function() {                                                                       // 15
      return Spacebars.call(view.lookup("modeDisplay"));                                                               // 16
    }, function() {                                                                                                    // 17
      return [ "\n          ", HTML.SPAN({                                                                             // 18
        class: "badge badge-inverse"                                                                                   // 19
      }, Blaze.View("lookup:notificationCount", function() {                                                           // 20
        return Spacebars.mustache(view.lookup("notificationCount"));                                                   // 21
      })), "\n        " ];                                                                                             // 22
    }, function() {                                                                                                    // 23
      return [ "\n          ", Blaze.If(function() {                                                                   // 24
        return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                                 // 25
      }, function() {                                                                                                  // 26
        return [ "\n            ", HTML.SPAN({                                                                         // 27
          class: "badge badge-inverse"                                                                                 // 28
        }, Blaze.View("lookup:notificationCount", function() {                                                         // 29
          return Spacebars.mustache(view.lookup("notificationCount"));                                                 // 30
        })), "\n          " ];                                                                                         // 31
      }), "\n        " ];                                                                                              // 32
    }), "\n      " ];                                                                                                  // 33
  }), "\n  "), "\n  ", HTML.UL({                                                                                       // 34
    class: "notification dropdown-menu dropdown-menu-center"                                                           // 35
  }, "\n    ", Blaze.If(function() {                                                                                   // 36
    return Spacebars.call(view.lookup("notificationCount"));                                                           // 37
  }, function() {                                                                                                      // 38
    return [ "\n      ", Blaze.Each(function() {                                                                       // 39
      return Spacebars.call(view.lookup("notifications"));                                                             // 40
    }, function() {                                                                                                    // 41
      return [ "\n        ", Spacebars.include(view.lookupTemplate("notificationItem")), "\n      " ];                 // 42
    }), "\n    " ];                                                                                                    // 43
  }, function() {                                                                                                      // 44
    return [ "\n      ", HTML.LI(HTML.SPAN("No Notifications")), "\n    " ];                                           // 45
  }), "\n  ") ];                                                                                                       // 46
}));                                                                                                                   // 47
                                                                                                                       // 48
Template.__checkName("notificationItem");                                                                              // 49
Template["notificationItem"] = new Template("Template.notificationItem", (function() {                                 // 50
  var view = this;                                                                                                     // 51
  return HTML.LI("\n    ", HTML.A({                                                                                    // 52
    href: function() {                                                                                                 // 53
      return Spacebars.mustache(view.lookup("pathFor"), "twiitPage");                                                  // 54
    }                                                                                                                  // 55
  }, "\n      ", HTML.STRONG(Blaze.View("lookup:twiitNotifUserName", function() {                                      // 56
    return Spacebars.mustache(view.lookup("twiitNotifUserName"));                                                      // 57
  })), " ha twiiteado\n    "), "\n  ");                                                                                // 58
}));                                                                                                                   // 59
                                                                                                                       // 60
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.notificationsNew.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.notificationsNew.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("notificationsNew");                                                                              // 2
Template["notificationsNew"] = new Template("Template.notificationsNew", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return [ HTML.A({                                                                                                    // 5
    id: "linkToNotif",                                                                                                 // 6
    class: "dropdown-toggle",                                                                                          // 7
    "data-toggle": "dropdown",                                                                                         // 8
    role: "button",                                                                                                    // 9
    "aria-haspopup": "true",                                                                                           // 10
    "aria-expanded": "false"                                                                                           // 11
  }, "\n    ", HTML.Raw("<!--Notificaciones-->"), "\n    ", HTML.Raw('<span class="glyphicon glyphicon-inbox"></span>'), "\n\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("notificationCount"));                                                           // 13
  }, function() {                                                                                                      // 14
    return [ "\n        ", Blaze.If(function() {                                                                       // 15
      return Spacebars.call(view.lookup("modeDisplay"));                                                               // 16
    }, function() {                                                                                                    // 17
      return [ "\n          ", HTML.SPAN({                                                                             // 18
        class: "badge badge-inverse"                                                                                   // 19
      }, Blaze.View("lookup:notificationCount", function() {                                                           // 20
        return Spacebars.mustache(view.lookup("notificationCount"));                                                   // 21
      })), "\n        " ];                                                                                             // 22
    }, function() {                                                                                                    // 23
      return [ "\n          ", Blaze.If(function() {                                                                   // 24
        return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                                 // 25
      }, function() {                                                                                                  // 26
        return [ "\n            ", HTML.SPAN({                                                                         // 27
          class: "badge badge-inverse"                                                                                 // 28
        }, Blaze.View("lookup:notificationCount", function() {                                                         // 29
          return Spacebars.mustache(view.lookup("notificationCount"));                                                 // 30
        })), "\n          " ];                                                                                         // 31
      }), "\n        " ];                                                                                              // 32
    }), "\n      " ];                                                                                                  // 33
  }), "\n  "), "\n  ", Blaze.Unless(function() {                                                                       // 34
    return Spacebars.call(view.lookup("notificationCount"));                                                           // 35
  }, function() {                                                                                                      // 36
    return [ "\n  ", HTML.UL({                                                                                         // 37
      class: "notification dropdown-menu dropdown-menu-center"                                                         // 38
    }, "\n    ", HTML.LI(HTML.SPAN("No Notifications")), "\n  "), "\n  " ];                                            // 39
  }) ];                                                                                                                // 40
}));                                                                                                                   // 41
                                                                                                                       // 42
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.socialNetworkBox.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.socialNetworkBox.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("socialNetworkBox");                                                                              // 2
Template["socialNetworkBox"] = new Template("Template.socialNetworkBox", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.Raw('<div class="tweetbox-container">\n    <div class="panel panel-default tweetbox col-md-6">\n      <div class="panel-body">\n\t<!-- CONTAINER TO ADD NEW SOCIAL NETWORK -->\n\t\t<div class="row">\n\t\t  <h3>Añade tu red social a twiiterClone!</h3>\n\t\t  <div class="col-lg-6" id="containerInputs">\n\t\t  \t\n\t\t  </div><!-- /.col-lg-6 -->\n\t\t  <div>\n\t\t\t  <button id="btnNewSN" class="btn btn-primary" type="button">\n\t\t\t\t<span class="glyphicon glyphicon-plus-sign"></span>\n\t  \t\t  </button>\n\t  \t\t  <button id="saveData" class="btn btn-primary" type="button">\n\t\t\t\t<span class="glyphicon glyphicon-ok"></span>\n\t  \t\t  </button>\n  \t\t  </div>\n\t\t</div>\n      </div>\n    </div>\n  </div>');
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.tweetBox.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.tweetBox.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("tweetBox");                                                                                      // 2
Template["tweetBox"] = new Template("Template.tweetBox", (function() {                                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "tweetbox-container"                                                                                        // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    class: "panel panel-default tweetbox col-md-6"                                                                     // 8
  }, "\n      ", HTML.DIV({                                                                                            // 9
    class: "panel-body"                                                                                                // 10
  }, "\n        ", HTML.Raw("<!--Caja para el texto del twitt -->"), "\n      ", HTML.TEXTAREA({                       // 11
    class: "form-control",                                                                                             // 12
    id: "tweetText",                                                                                                   // 13
    placeholder: "¿Qué te cuentas?",                                                                                   // 14
    rows: "3"                                                                                                          // 15
  }), "\n          ", HTML.Raw("<!--Contador y botón-->"), "\n        ", HTML.DIV({                                    // 16
    class: "pull-right btnGroup"                                                                                       // 17
  }, "\n          ", HTML.STRONG({                                                                                     // 18
    class: function() {                                                                                                // 19
      return Spacebars.mustache(view.lookup("charClass"));                                                             // 20
    }                                                                                                                  // 21
  }, Blaze.View("lookup:charCount", function() {                                                                       // 22
    return Spacebars.mustache(view.lookup("charCount"));                                                               // 23
  })), "\n          ", Blaze.If(function() {                                                                           // 24
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 25
  }, function() {                                                                                                      // 26
    return [ "\n            ", HTML.BUTTON(HTML.Attrs({                                                                // 27
      class: "btn btn-info pull-right",                                                                                // 28
      type: "button",                                                                                                  // 29
      "data-dismiss": "modal"                                                                                          // 30
    }, function() {                                                                                                    // 31
      return Spacebars.attrMustache(view.lookup("disableButton"));                                                     // 32
    }), "Twittear\n              ", HTML.SPAN({                                                                        // 33
      class: "glyphicon glyphicon-send"                                                                                // 34
    }), "\n            "), "\n          " ];                                                                           // 35
  }, function() {                                                                                                      // 36
    return [ "\n            ", HTML.BUTTON({                                                                           // 37
      class: "btn btn-info pull-right",                                                                                // 38
      type: "button",                                                                                                  // 39
      disabled: ""                                                                                                     // 40
    }, "Por favor inicia sesión"), "\n          " ];                                                                   // 41
  }), "\n        "), "\n      "), "\n    "), "\n  ");                                                                  // 42
}));                                                                                                                   // 43
                                                                                                                       // 44
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.tweetFeed.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.tweetFeed.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("tweetFeed");                                                                                     // 2
Template["tweetFeed"] = new Template("Template.tweetFeed", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return [ Blaze.View("lookup:infoNotif", function() {                                                                 // 5
    return Spacebars.mustache(view.lookup("infoNotif"));                                                               // 6
  }), "\n  ", HTML.DIV({                                                                                               // 7
    class: "tweetfeed-container"                                                                                       // 8
  }, "\n    ", HTML.DIV({                                                                                              // 9
    class: "panel panel-default tweetfeed"                                                                             // 10
  }, "\n      ", HTML.DIV({                                                                                            // 11
    class: "panel-body"                                                                                                // 12
  }, "\n        ", HTML.Raw("<!-- Texto para el contenido del Twitt -->"), "\n        ", Blaze.Each(function() {       // 13
    return Spacebars.call(view.lookup("tweetMessage"));                                                                // 14
  }, function() {                                                                                                      // 15
    return [ "\n          ", HTML.DIV({                                                                                // 16
      class: "panel panel-info"                                                                                        // 17
    }, HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n            ", HTML.DIV({                   // 18
      class: "panel-heading"                                                                                           // 19
    }, HTML.Comment("Cabecera del twiit"), "\n              ", HTML.H3({                                               // 20
      class: "panel-title"                                                                                             // 21
    }, "@", Blaze.View("lookup:..user", function() {                                                                   // 22
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                              // 23
    }), " \n                ", HTML.SPAN({                                                                             // 24
      class: "glyphicon glyphicon-triangle-right",                                                                     // 25
      "aria-hidden": "true"                                                                                            // 26
    }), "\n                ", Blaze.View("lookup:convertDateTime", function() {                                        // 27
      return Spacebars.mustache(view.lookup("convertDateTime"));                                                       // 28
    }), "\n              "), "\n            "), HTML.Comment("Cabecera del twiit"), "\n            ", HTML.DIV({       // 29
      class: "panel-body"                                                                                              // 30
    }, HTML.Comment("Contenido del twiit"), "\n              ", Blaze.View("lookup:..message", function() {            // 31
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                           // 32
    }), "\n            "), HTML.Comment("Contenido del twiit"), "\n\n            ", HTML.DIV({                         // 33
      class: "btn-group",                                                                                              // 34
      role: "group",                                                                                                   // 35
      id: "btnGroupInteractions"                                                                                       // 36
    }, "\n              ", HTML.A({                                                                                    // 37
      class: "btn btn-secondary"                                                                                       // 38
    }, "\n                ", HTML.SPAN({                                                                               // 39
      class: "glyphicon glyphicon-bullhorn"                                                                            // 40
    }), "\n              "), "\n              ", Blaze.If(function() {                                                 // 41
      return Spacebars.call(view.lookup("numComment"));                                                                // 42
    }, function() {                                                                                                    // 43
      return [ "\n                ", HTML.A({                                                                          // 44
        href: function() {                                                                                             // 45
          return Spacebars.mustache(view.lookup("pathFor"), "twiitCommentPage", Spacebars.kw({                         // 46
            _id: Spacebars.dot(view.lookup("."), "_id")                                                                // 47
          }));                                                                                                         // 48
        },                                                                                                             // 49
        class: "btn"                                                                                                   // 50
      }, "\n                  ", HTML.SPAN({                                                                           // 51
        class: "glyphicon glyphicon-comment"                                                                           // 52
      }), "\n                  ", HTML.SPAN({                                                                          // 53
        class: "badge badge-numFav "                                                                                   // 54
      }, Blaze.View("lookup:..numComment", function() {                                                                // 55
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                      // 56
      })), "\n                "), "\n              " ];                                                                // 57
    }, function() {                                                                                                    // 58
      return [ "\n                ", HTML.A({                                                                          // 59
        id: "btnComm",                                                                                                 // 60
        class: "btn btn-secondary"                                                                                     // 61
      }, "\n                  ", HTML.SPAN({                                                                           // 62
        class: "glyphicon glyphicon-comment"                                                                           // 63
      }), "\n              "), "\n              " ];                                                                   // 64
    }), "\n              ", Blaze.If(function() {                                                                      // 65
      return Spacebars.call(view.lookup("numFav"));                                                                    // 66
    }, function() {                                                                                                    // 67
      return [ "\n              ", HTML.A({                                                                            // 68
        id: "btnFav",                                                                                                  // 69
        class: "btn btn-secondary"                                                                                     // 70
      }, "\n                ", HTML.SPAN({                                                                             // 71
        id: function() {                                                                                               // 72
          return Spacebars.mustache(view.lookup("idToFavBtn"));                                                        // 73
        },                                                                                                             // 74
        class: function() {                                                                                            // 75
          return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                        // 76
        }                                                                                                              // 77
      }), "\n                ", HTML.SPAN({                                                                            // 78
        class: "badge badge-numFav"                                                                                    // 79
      }, Blaze.View("lookup:..numFav", function() {                                                                    // 80
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                          // 81
      })), "\n              "), "\n              " ];                                                                  // 82
    }, function() {                                                                                                    // 83
      return [ "\n                ", HTML.A({                                                                          // 84
        id: "btnFav",                                                                                                  // 85
        class: "btn btn-secondary"                                                                                     // 86
      }, "\n                ", HTML.SPAN({                                                                             // 87
        id: function() {                                                                                               // 88
          return Spacebars.mustache(view.lookup("idToFavBtn"));                                                        // 89
        },                                                                                                             // 90
        class: function() {                                                                                            // 91
          return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                        // 92
        }                                                                                                              // 93
      }), "\n              "), "\n              " ];                                                                   // 94
    }), "\n            "), "\n          "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n        " ];
  }), "\n      "), "\n    "), "\n  ") ];                                                                               // 96
}));                                                                                                                   // 97
                                                                                                                       // 98
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.tweetFeedProfile.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.tweetFeedProfile.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("tweetFeedProfile");                                                                              // 2
Template["tweetFeedProfile"] = new Template("Template.tweetFeedProfile", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "tweetfeed-container"                                                                                       // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    class: "panel panel-default tweetfeed"                                                                             // 8
  }, "\n      ", HTML.DIV({                                                                                            // 9
    class: "panel-body"                                                                                                // 10
  }, "\n        ", HTML.Raw("<!-- Texto para el contenido del Twitt -->"), "\n        ", Blaze.Each(function() {       // 11
    return Spacebars.call(view.lookup("tweetMessageProfile"));                                                         // 12
  }, function() {                                                                                                      // 13
    return [ "\n          ", HTML.DIV({                                                                                // 14
      class: "panel panel-info"                                                                                        // 15
    }, HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n            ", HTML.DIV({                   // 16
      class: "panel-heading"                                                                                           // 17
    }, HTML.Comment("Cabecera del twiit"), "\n              ", HTML.H3({                                               // 18
      class: "panel-title"                                                                                             // 19
    }, "@", Blaze.View("lookup:..user", function() {                                                                   // 20
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                              // 21
    }), " \n                ", HTML.SPAN({                                                                             // 22
      class: "glyphicon glyphicon-triangle-right",                                                                     // 23
      "aria-hidden": "true"                                                                                            // 24
    }), "\n                ", Blaze.View("lookup:convertDateTime", function() {                                        // 25
      return Spacebars.mustache(view.lookup("convertDateTime"));                                                       // 26
    }), "\n              "), "\n            "), HTML.Comment("Cabecera del twiit"), "\n            ", HTML.DIV({       // 27
      class: "panel-body"                                                                                              // 28
    }, HTML.Comment("Contenido del twiit"), "\n              ", Blaze.View("lookup:..message", function() {            // 29
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                           // 30
    }), "\n            "), HTML.Comment("Contenido del twiit"), "\n\n            ", HTML.DIV({                         // 31
      class: "btn-group",                                                                                              // 32
      role: "group",                                                                                                   // 33
      id: "btnGroupInteractions"                                                                                       // 34
    }, "\n              ", HTML.A({                                                                                    // 35
      class: "btn btn-secondary"                                                                                       // 36
    }, "\n                ", HTML.SPAN({                                                                               // 37
      class: "glyphicon glyphicon-bullhorn"                                                                            // 38
    }), "\n              "), "\n              ", Blaze.If(function() {                                                 // 39
      return Spacebars.call(view.lookup("numComment"));                                                                // 40
    }, function() {                                                                                                    // 41
      return [ "\n                ", HTML.A({                                                                          // 42
        href: function() {                                                                                             // 43
          return Spacebars.mustache(view.lookup("pathFor"), "twiitCommentPage", Spacebars.kw({                         // 44
            _id: Spacebars.dot(view.lookup("."), "_id")                                                                // 45
          }));                                                                                                         // 46
        },                                                                                                             // 47
        class: "btn btn-secondary"                                                                                     // 48
      }, "\n                  ", HTML.SPAN({                                                                           // 49
        class: "glyphicon glyphicon-comment"                                                                           // 50
      }), "\n                  ", HTML.SPAN({                                                                          // 51
        class: "badge-numFav badge"                                                                                    // 52
      }, Blaze.View("lookup:..numComment", function() {                                                                // 53
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                      // 54
      })), "\n                "), "\n              " ];                                                                // 55
    }), "\n              ", Blaze.If(function() {                                                                      // 56
      return Spacebars.call(view.lookup("numFav"));                                                                    // 57
    }, function() {                                                                                                    // 58
      return [ "\n                ", HTML.A({                                                                          // 59
        id: "btnFav",                                                                                                  // 60
        class: "btn btn-secondary"                                                                                     // 61
      }, "\n                  ", HTML.SPAN({                                                                           // 62
        id: function() {                                                                                               // 63
          return Spacebars.mustache(view.lookup("idToFavBtn"));                                                        // 64
        },                                                                                                             // 65
        class: function() {                                                                                            // 66
          return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                        // 67
        }                                                                                                              // 68
      }), "\n                  ", HTML.SPAN({                                                                          // 69
        class: "badge badge-numFav"                                                                                    // 70
      }, Blaze.View("lookup:..numFav", function() {                                                                    // 71
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                          // 72
      })), "\n                "), "\n              " ];                                                                // 73
    }, function() {                                                                                                    // 74
      return [ "\n                ", HTML.A({                                                                          // 75
        id: "btnFav",                                                                                                  // 76
        class: "btn btn-secondary"                                                                                     // 77
      }, "\n                  ", HTML.SPAN({                                                                           // 78
        id: function() {                                                                                               // 79
          return Spacebars.mustache(view.lookup("idToFavBtn"));                                                        // 80
        },                                                                                                             // 81
        class: function() {                                                                                            // 82
          return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                        // 83
        }                                                                                                              // 84
      }), "\n                "), "\n              " ];                                                                 // 85
    }), "\n            "), "\n          "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");                                                                                 // 87
}));                                                                                                                   // 88
                                                                                                                       // 89
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.twiitCommentPage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.twiitCommentPage.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("twiitCommentPage");                                                                              // 2
Template["twiitCommentPage"] = new Template("Template.twiitCommentPage", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "tweetfeed-container"                                                                                       // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    class: "panel panel-default tweetfeed"                                                                             // 8
  }, "\n      ", HTML.DIV({                                                                                            // 9
    class: "panel-body"                                                                                                // 10
  }, "\n        ", HTML.Raw("<!-- Texto para el contenido del Twitt -->"), "\n        ", Blaze.Each(function() {       // 11
    return Spacebars.call(view.lookup("tweetMessage"));                                                                // 12
  }, function() {                                                                                                      // 13
    return [ "\n          ", HTML.DIV({                                                                                // 14
      class: "panel panel-info"                                                                                        // 15
    }, HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n            ", HTML.DIV({                   // 16
      class: "panel-heading"                                                                                           // 17
    }, HTML.Comment("Cabecera del twiit"), "\n              ", HTML.H3({                                               // 18
      class: "panel-title"                                                                                             // 19
    }, "@", Blaze.View("lookup:..user", function() {                                                                   // 20
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                              // 21
    }), " \n                ", HTML.SPAN({                                                                             // 22
      class: "glyphicon glyphicon-triangle-right",                                                                     // 23
      "aria-hidden": "true"                                                                                            // 24
    }), "\n                ", Blaze.View("lookup:convertDateTime", function() {                                        // 25
      return Spacebars.mustache(view.lookup("convertDateTime"));                                                       // 26
    }), "\n              "), "\n            "), HTML.Comment("Cabecera del twiit"), "\n            ", HTML.DIV({       // 27
      class: "panel-body"                                                                                              // 28
    }, HTML.Comment("Contenido del twiit"), "\n              ", Blaze.View("lookup:..message", function() {            // 29
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                           // 30
    }), "\n            "), HTML.Comment("Contenido del twiit"), "\n\n            ", HTML.DIV({                         // 31
      class: "btn-group",                                                                                              // 32
      role: "group",                                                                                                   // 33
      id: "btnGroupInteractions"                                                                                       // 34
    }, "\n              ", HTML.A({                                                                                    // 35
      class: "btn btn-secondary"                                                                                       // 36
    }, "\n                ", HTML.SPAN({                                                                               // 37
      class: "glyphicon glyphicon-bullhorn"                                                                            // 38
    }), "\n              "), "\n\n              ", HTML.A({                                                            // 39
      id: "btnComm",                                                                                                   // 40
      class: "btn btn-secondary"                                                                                       // 41
    }, "\n                ", HTML.SPAN({                                                                               // 42
      class: "glyphicon glyphicon-comment"                                                                             // 43
    }), "\n                ", HTML.SPAN({                                                                              // 44
      class: "badge-numFav badge"                                                                                      // 45
    }, Blaze.View("lookup:..numComment", function() {                                                                  // 46
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                        // 47
    })), "\n              "), "\n\n              ", Blaze.If(function() {                                              // 48
      return Spacebars.call(view.lookup("numFav"));                                                                    // 49
    }, function() {                                                                                                    // 50
      return [ "\n                ", HTML.A({                                                                          // 51
        id: "btnFav",                                                                                                  // 52
        class: "btn btn-secondary"                                                                                     // 53
      }, "\n                  ", HTML.SPAN({                                                                           // 54
        id: function() {                                                                                               // 55
          return Spacebars.mustache(view.lookup("idToFavBtn"));                                                        // 56
        },                                                                                                             // 57
        class: function() {                                                                                            // 58
          return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                        // 59
        }                                                                                                              // 60
      }), "\n                  ", HTML.SPAN({                                                                          // 61
        class: "badge badge-numFav"                                                                                    // 62
      }, Blaze.View("lookup:..numFav", function() {                                                                    // 63
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                          // 64
      })), "\n                "), "\n              " ];                                                                // 65
    }, function() {                                                                                                    // 66
      return [ "\n                ", HTML.A({                                                                          // 67
        id: "btnFav",                                                                                                  // 68
        class: "btn btn-secondary"                                                                                     // 69
      }, "\n                  ", HTML.SPAN({                                                                           // 70
        id: function() {                                                                                               // 71
          return Spacebars.mustache(view.lookup("idToFavBtn"));                                                        // 72
        },                                                                                                             // 73
        class: function() {                                                                                            // 74
          return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                        // 75
        }                                                                                                              // 76
      }), "\n                "), "\n              " ];                                                                 // 77
    }), "\n            "), "\n          "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n        " ];
  }), "\n        ", Blaze.Each(function() {                                                                            // 79
    return Spacebars.call(view.lookup("tweetThatCommentMessage"));                                                     // 80
  }, function() {                                                                                                      // 81
    return [ "\n          ", HTML.DIV({                                                                                // 82
      class: "panel panel-info"                                                                                        // 83
    }, HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n            ", HTML.DIV({                   // 84
      class: "panel-heading"                                                                                           // 85
    }, HTML.Comment("Cabecera del twiit"), "\n              ", HTML.H3({                                               // 86
      class: "panel-title"                                                                                             // 87
    }, "@", Blaze.View("lookup:..user", function() {                                                                   // 88
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                              // 89
    }), " \n                ", HTML.SPAN({                                                                             // 90
      class: "glyphicon glyphicon-triangle-right",                                                                     // 91
      "aria-hidden": "true"                                                                                            // 92
    }), "\n                ", Blaze.View("lookup:convertDateTime", function() {                                        // 93
      return Spacebars.mustache(view.lookup("convertDateTime"));                                                       // 94
    }), "\n              "), "\n            "), HTML.Comment("Cabecera del twiit"), "\n            ", HTML.DIV({       // 95
      class: "panel-body"                                                                                              // 96
    }, HTML.Comment("Contenido del twiit"), "\n              ", Blaze.View("lookup:..message", function() {            // 97
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                           // 98
    }), "\n            "), HTML.Comment("Contenido del twiit"), "\n\n            ", HTML.DIV({                         // 99
      class: "btn-group",                                                                                              // 100
      role: "group",                                                                                                   // 101
      id: "btnGroupInteractions"                                                                                       // 102
    }, "\n              ", HTML.A({                                                                                    // 103
      class: "btn btn-secondary"                                                                                       // 104
    }, "\n                ", HTML.SPAN({                                                                               // 105
      class: "glyphicon glyphicon-bullhorn"                                                                            // 106
    }), "\n              "), "\n              ", Blaze.If(function() {                                                 // 107
      return Spacebars.call(view.lookup("numFav"));                                                                    // 108
    }, function() {                                                                                                    // 109
      return [ "\n              ", HTML.A({                                                                            // 110
        id: "btnFav",                                                                                                  // 111
        class: "btn btn-secondary"                                                                                     // 112
      }, "\n                ", HTML.SPAN({                                                                             // 113
        id: function() {                                                                                               // 114
          return Spacebars.mustache(view.lookup("idToFavBtn"));                                                        // 115
        },                                                                                                             // 116
        class: function() {                                                                                            // 117
          return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                        // 118
        }                                                                                                              // 119
      }), "\n                ", HTML.SPAN({                                                                            // 120
        class: "badge badge-numFav"                                                                                    // 121
      }, Blaze.View("lookup:..numFav", function() {                                                                    // 122
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                          // 123
      })), "\n              "), "\n              " ];                                                                  // 124
    }, function() {                                                                                                    // 125
      return [ "\n                ", HTML.A({                                                                          // 126
        id: "btnFav",                                                                                                  // 127
        class: "btn btn-secondary"                                                                                     // 128
      }, "\n                ", HTML.SPAN({                                                                             // 129
        id: function() {                                                                                               // 130
          return Spacebars.mustache(view.lookup("idToFavBtn"));                                                        // 131
        },                                                                                                             // 132
        class: function() {                                                                                            // 133
          return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                        // 134
        }                                                                                                              // 135
      }), "\n              "), "\n              " ];                                                                   // 136
    }), "\n            "), "\n          "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");                                                                                 // 138
}));                                                                                                                   // 139
                                                                                                                       // 140
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.twiitPage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.twiitPage.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("twiitPage");                                                                                     // 2
Template["twiitPage"] = new Template("Template.twiitPage", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "tweetfeed-container"                                                                                       // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    class: "panel panel-default tweetfeed"                                                                             // 8
  }, "\n      ", HTML.DIV({                                                                                            // 9
    class: "panel-body"                                                                                                // 10
  }, "\n        ", HTML.Raw("<!-- Texto para el contenido del Twitt -->"), "\n        ", Blaze.If(function() {         // 11
    return Spacebars.call(view.lookup("countNotifTwiit"));                                                             // 12
  }, function() {                                                                                                      // 13
    return [ "\n          ", Blaze.Each(function() {                                                                   // 14
      return Spacebars.call(view.lookup("tweetMessage"));                                                              // 15
    }, function() {                                                                                                    // 16
      return [ "\n            ", HTML.DIV({                                                                            // 17
        class: "panel panel-info"                                                                                      // 18
      }, "\n              ", HTML.DIV({                                                                                // 19
        class: "panel-heading"                                                                                         // 20
      }, "\n                ", HTML.H3({                                                                               // 21
        class: "panel-title"                                                                                           // 22
      }, "@", Blaze.View("lookup:..twiitNotifUserName", function() {                                                   // 23
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitNotifUserName"));                              // 24
      }), " \n                  ", HTML.SPAN({                                                                         // 25
        class: "glyphicon glyphicon-triangle-right",                                                                   // 26
        "aria-hidden": "true"                                                                                          // 27
      }), "\n                   ", Blaze.View("lookup:convertDateTime", function() {                                   // 28
        return Spacebars.mustache(view.lookup("convertDateTime"));                                                     // 29
      }), "\n                 "), "\n              "), "\n              ", HTML.DIV({                                  // 30
        class: "panel-body"                                                                                            // 31
      }, "\n                ", Blaze.View("lookup:..twiitMessage", function() {                                        // 32
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitMessage"));                                    // 33
      }), "\n              "), "\n            "), "\n          " ];                                                    // 34
    }), "\n           ", HTML.BUTTON({                                                                                 // 35
      class: "btn btn-info pull-right",                                                                                // 36
      type: "button"                                                                                                   // 37
    }, "OK"), "\n        " ];                                                                                          // 38
  }, function() {                                                                                                      // 39
    return [ "\n          ", HTML.DIV({                                                                                // 40
      class: "panel-info"                                                                                              // 41
    }, "\n            ", HTML.P("Oooooooops"), "    \n          "), "\n        " ];                                    // 42
  }), "\n      "), "\n    "), "\n  ");                                                                                 // 43
}));                                                                                                                   // 44
                                                                                                                       // 45
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.twiitPageNew.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.twiitPageNew.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("twiitPageNew");                                                                                  // 2
Template["twiitPageNew"] = new Template("Template.twiitPageNew", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<!--\n  <nav class="navbar navbar-default">\n    <div class="container">\n      Brand and toggle get grouped for better mobile display\n      <div class="navbar-header">\n\n        <button type="button" id="btnNewTweet" class="navbar-toggle">\n          <span class="glyphicon glyphicon-heart"></span>\n        </button>\n\n        <button type="button" id="btnNewTweet" class="navbar-toggle">\n          <span class="glyphicon glyphicon-comment"></span>\n        </button>\n\n        <button type="button" id="btnNewTweet" class="navbar-toggle">\n          <span class="glyphicon glyphicon-pencil"></span>\n        </button>\n\n      </div>\n    </div>\n  </nav>\n  -->\n\n  '), HTML.DIV({
    class: "tweetfeed-container"                                                                                       // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    class: "panel panel-default tweetfeed"                                                                             // 8
  }, "\n      ", HTML.DIV({                                                                                            // 9
    class: "panel-body"                                                                                                // 10
  }, "\n        ", HTML.Raw("<!-- Texto para el contenido del Twitt -->"), "\n        ", Blaze.If(function() {         // 11
    return Spacebars.call(view.lookup("countNotifTwiit"));                                                             // 12
  }, function() {                                                                                                      // 13
    return [ "\n          ", Blaze.Each(function() {                                                                   // 14
      return Spacebars.call(view.lookup("tweetMessage"));                                                              // 15
    }, function() {                                                                                                    // 16
      return [ "\n            ", Blaze.View("lookup:saveIdInArr", function() {                                         // 17
        return Spacebars.mustache(view.lookup("saveIdInArr"));                                                         // 18
      }), "\n            ", HTML.DIV({                                                                                 // 19
        class: "panel panel-info"                                                                                      // 20
      }, "\n              ", HTML.DIV({                                                                                // 21
        class: "panel-heading"                                                                                         // 22
      }, "\n                ", HTML.H3({                                                                               // 23
        class: "panel-title"                                                                                           // 24
      }, "@", Blaze.View("lookup:..actorNotif", function() {                                                           // 25
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "actorNotif"));                                      // 26
      }), " \n                  ", HTML.SPAN({                                                                         // 27
        class: "glyphicon glyphicon-triangle-right",                                                                   // 28
        "aria-hidden": "true"                                                                                          // 29
      }), "\n                   ", Blaze.View("lookup:convertDateTime", function() {                                   // 30
        return Spacebars.mustache(view.lookup("convertDateTime"));                                                     // 31
      }), "\n                 "), "\n              "), "\n              ", HTML.DIV({                                  // 32
        class: "panel-body"                                                                                            // 33
      }, "\n                ", Blaze.View("lookup:..twiitMessage", function() {                                        // 34
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitMessage"));                                    // 35
      }), "\n              "), "\n              ", HTML.DIV({                                                          // 36
        class: "btn-group",                                                                                            // 37
        role: "group",                                                                                                 // 38
        id: "btnGroupInteractions"                                                                                     // 39
      }, "\n                ", HTML.A({                                                                                // 40
        class: "btn btn-secondary"                                                                                     // 41
      }, "\n                  ", HTML.SPAN({                                                                           // 42
        class: "glyphicon glyphicon-bullhorn"                                                                          // 43
      }), "\n                "), "\n                ", Blaze.If(function() {                                           // 44
        return Spacebars.call(view.lookup("findNumComment"));                                                          // 45
      }, function() {                                                                                                  // 46
        return [ "\n                  ", HTML.A({                                                                      // 47
          href: function() {                                                                                           // 48
            return Spacebars.mustache(view.lookup("pathFor"), "twiitCommentPage", Spacebars.kw({                       // 49
              _id: Spacebars.dot(view.lookup("."), "_id")                                                              // 50
            }));                                                                                                       // 51
          },                                                                                                           // 52
          class: "btn btn-secondary"                                                                                   // 53
        }, "\n                    ", HTML.SPAN({                                                                       // 54
          class: "glyphicon glyphicon-comment"                                                                         // 55
        }), "\n                    ", HTML.SPAN({                                                                      // 56
          class: "badge-numFav badge"                                                                                  // 57
        }, Blaze.View("lookup:numComment", function() {                                                                // 58
          return Spacebars.mustache(view.lookup("numComment"));                                                        // 59
        })), "\n                  "), "\n                " ];                                                          // 60
      }, function() {                                                                                                  // 61
        return [ "\n                  ", HTML.A({                                                                      // 62
          id: "btnComm",                                                                                               // 63
          class: "btn btn-secondary"                                                                                   // 64
        }, "\n                  ", HTML.SPAN({                                                                         // 65
          class: "glyphicon glyphicon-comment"                                                                         // 66
        }), "\n                "), "\n                " ];                                                             // 67
      }), "\n                ", Blaze.If(function() {                                                                  // 68
        return Spacebars.call(view.lookup("numFavorite"));                                                             // 69
      }, function() {                                                                                                  // 70
        return [ "\n                  ", HTML.A({                                                                      // 71
          id: "btnFav",                                                                                                // 72
          class: "btn btn-secondary"                                                                                   // 73
        }, "\n                    ", HTML.SPAN({                                                                       // 74
          id: function() {                                                                                             // 75
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 76
          },                                                                                                           // 77
          class: function() {                                                                                          // 78
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 79
          }                                                                                                            // 80
        }), "\n                    ", HTML.SPAN({                                                                      // 81
          class: "badge badge-numFav"                                                                                  // 82
        }, Blaze.View("lookup:numFav", function() {                                                                    // 83
          return Spacebars.mustache(view.lookup("numFav"));                                                            // 84
        })), "\n                  "), "\n                " ];                                                          // 85
      }, function() {                                                                                                  // 86
        return [ "\n                  ", HTML.A({                                                                      // 87
          id: "btnFav",                                                                                                // 88
          class: "btn btn-secondary"                                                                                   // 89
        }, "\n                    ", HTML.SPAN({                                                                       // 90
          id: function() {                                                                                             // 91
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 92
          },                                                                                                           // 93
          class: function() {                                                                                          // 94
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 95
          }                                                                                                            // 96
        }), "\n                  "), "\n                " ];                                                           // 97
      }), "\n              "), "\n            "), "\n          " ];                                                    // 98
    }), "\n           ", HTML.BUTTON({                                                                                 // 99
      id: "btnDismissNotif",                                                                                           // 100
      class: "btn btn-info pull-right",                                                                                // 101
      type: "button"                                                                                                   // 102
    }, "OK"), "\n        " ];                                                                                          // 103
  }, function() {                                                                                                      // 104
    return [ "\n          ", HTML.DIV({                                                                                // 105
      class: "panel-info"                                                                                              // 106
    }, "\n            ", HTML.P("Oooooooops Twiit Page New"), "    \n          "), "\n        " ];                     // 107
  }), "\n      "), "\n    "), "\n  ") ];                                                                               // 108
}));                                                                                                                   // 109
                                                                                                                       // 110
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.userManagement.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.userManagement.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("userManagement");                                                                                // 2
Template["userManagement"] = new Template("Template.userManagement", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", HTML.Comment(' LA CAJA DE PONER UN NUEVO TWIIT SE HA IMPLEMENTADO EN UN MODAL QUE SALTA \n    CUANDO SE DA AL BOTON QUE SE ENCUENTRA EN LA BARRA DE NAVEGACIÓN\n    <div id="divTweetBox" class="col-md-8 col-sm-8">{{> tweetBox}}</div>\n    '), "\n    \n    ", HTML.DIV({
      id: "divTweetFeed",                                                                                              // 9
      class: "col-md-8 col-sm-8"                                                                                       // 10
    }, Spacebars.include(view.lookupTemplate("tweetFeed"))), "\n  " ];                                                 // 11
  }, function() {                                                                                                      // 12
    return [ "\n    ", HTML.DIV({                                                                                      // 13
      class: "user-container"                                                                                          // 14
    }, "\n      ", HTML.DIV({                                                                                          // 15
      class: "panel panel-default userBox"                                                                             // 16
    }, "\n        ", HTML.DIV({                                                                                        // 17
      class: "panel-body"                                                                                              // 18
    }, "\n          ", HTML.Comment("módulo de acceso "), "\n          ", HTML.H4("¿Ya tienes una cuenta?"), "\n          ", HTML.DIV({
      class: "form-group"                                                                                              // 20
    }, "\n            ", HTML.INPUT({                                                                                  // 21
      class: "form-control input-sm",                                                                                  // 22
      id: "login-nameProfile",                                                                                         // 23
      placeholder: "Nombre de Usuario"                                                                                 // 24
    }), "\n            ", HTML.INPUT({                                                                                 // 25
      class: "form-control input-sm",                                                                                  // 26
      id: "login-password",                                                                                            // 27
      placeholder: "Contraseña",                                                                                       // 28
      type: "password"                                                                                                 // 29
    }), "\n          "), "\n\n          ", HTML.BUTTON({                                                               // 30
      type: "button",                                                                                                  // 31
      class: "btn btn-info fullbutton login",                                                                          // 32
      id: "login"                                                                                                      // 33
    }, "Acceder"), "\n\n          ", HTML.Comment("módulo de registro"), "\n          ", HTML.H4("¿Nuevo por aquí?"), "\n          ", HTML.DIV({
      class: "form-group"                                                                                              // 35
    }, "\n            ", HTML.INPUT({                                                                                  // 36
      class: "form-control input-sm",                                                                                  // 37
      id: "signup-username",                                                                                           // 38
      placeholder: "Nombre"                                                                                            // 39
    }), "\n            ", HTML.INPUT({                                                                                 // 40
      class: "form-control input-sm",                                                                                  // 41
      id: "signup-nameProfile",                                                                                        // 42
      placeholder: "Nombre de Usuario"                                                                                 // 43
    }), "\n            ", HTML.INPUT({                                                                                 // 44
      class: "form-control input-sm",                                                                                  // 45
      id: "signup-password",                                                                                           // 46
      placeholder: "Contraseña",                                                                                       // 47
      type: "password"                                                                                                 // 48
    }), "\n          "), "\n          ", HTML.BUTTON({                                                                 // 49
      type: "button",                                                                                                  // 50
      class: "btn btn-info fullbutton",                                                                                // 51
      id: "signup"                                                                                                     // 52
    }, "Regístrate"), " \n        "), "\n      "), "\n    "), "\n  " ];                                                // 53
  });                                                                                                                  // 54
}));                                                                                                                   // 55
                                                                                                                       // 56
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.userProfile.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.userProfile.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("userProfile");                                                                                   // 2
Template["userProfile"] = new Template("Template.userProfile", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", Blaze.If(function() {                                                                           // 8
      return Spacebars.call(view.lookup("dataUserFound"));                                                             // 9
    }, function() {                                                                                                    // 10
      return [ "\n      ", HTML.DIV({                                                                                  // 11
        class: "user-container"                                                                                        // 12
      }, "\n        ", HTML.DIV({                                                                                      // 13
        class: "panel panel-default userBox"                                                                           // 14
      }, "\n          ", HTML.DIV({                                                                                    // 15
        class: "panel-body"                                                                                            // 16
      }, "\n            ", HTML.Comment("Mensaje para el usuario registrado"), "\n            ", HTML.DIV({            // 17
        class: "row"                                                                                                   // 18
      }, "\n              ", HTML.Comment("CONTENIDO DE LA PARTE IZQUIERDA DEL PERFIL DEL USUARIO"), "\n              ", HTML.DIV({
        class: "col-md-6 col-sm-6 col-xs-6",                                                                           // 20
        id: "leftDivCurrentUser"                                                                                       // 21
      }, "\n                ", HTML.Comment('EN LA ETIQUETA DE SRC, SE PONDRA EL NOMBRE DEL USUARIO ACTUAL\n                <img id="imgCurrentUser" src="/{{currentUser.username}}.png" class="img-responsive">\n                A MODO DE EJEMPLO, VAMOS A UTILIZAR UNO GENERICO PARA QUE CARGUE EN CUALQUIER USUARIO'), "\n                ", HTML.IMG({
        id: "imgCurrentUser",                                                                                          // 23
        src: function() {                                                                                              // 24
          return Spacebars.mustache(view.lookup("userImgFound"));                                                      // 25
        },                                                                                                             // 26
        class: "img-responsive"                                                                                        // 27
      }), "\n              "), "\n              ", HTML.Comment("CONTENIDO DE LA PARTE DERECHA DEL PERFIL DEL USUARIO"), "\n              ", HTML.DIV({
        class: "col-md-6 col-sm-6 col-xs-6",                                                                           // 29
        id: "rightDivCurrentUser"                                                                                      // 30
      }, "\n                ", HTML.Comment("ESTA DESCRIPCION ES GENERICA. HAY QUE CAMBIARLA POR LA QUE APAREZCA EN userData.description"), "\n                ", Blaze.View("lookup:dataUserFound.userDescription", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userDescription"));                     // 32
      }), "\n              "), "\n            "), "\n\n            ", HTML.DIV({                                       // 33
        class: "currentUserName"                                                                                       // 34
      }, "\n              ", HTML.DIV({                                                                                // 35
        class: "col-md-5 col-sm-5 col-xs-5 nameUserAndProfile"                                                         // 36
      }, "\n                ", HTML.H3(HTML.STRONG(Blaze.View("lookup:dataUserFound.userName", function() {            // 37
        return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userName"));                            // 38
      }))), "\n                ", HTML.H5("@", Blaze.View("lookup:dataUserFound.userNameProfile", function() {         // 39
        return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userNameProfile"));                     // 40
      })), "\n              "), "\n              ", HTML.DIV({                                                         // 41
        class: "col-md-7 col-sm-7 col-xs-7 dropdown btnOptionsProfile"                                                 // 42
      }, "\n                ", HTML.BUTTON({                                                                           // 43
        id: "dropdownOptionsUser",                                                                                     // 44
        class: "btn btn-primary dropdown-toggle optionsUserProfile",                                                   // 45
        type: "button",                                                                                                // 46
        "data-toggle": "dropdown",                                                                                     // 47
        "aria-haspopup": "true",                                                                                       // 48
        "aria-expanded": "true"                                                                                        // 49
      }, "\n                  ", HTML.SPAN({                                                                           // 50
        class: "glyphicon glyphicon-option-vertical"                                                                   // 51
      }), "\n                "), "\n                ", HTML.UL({                                                       // 52
        class: "dropdown-menu",                                                                                        // 53
        "aria-labelledby": "dropdownOptionsUser"                                                                       // 54
      }, "\n                  ", HTML.LI(HTML.A({                                                                      // 55
        href: "#",                                                                                                     // 56
        id: "editProfile"                                                                                              // 57
      }, "Editar Perfil")), "\n                  ", HTML.LI(HTML.A({                                                   // 58
        href: "#",                                                                                                     // 59
        id: "logout"                                                                                                   // 60
      }, "Salir")), "\n                "), "\n                ", Blaze.If(function() {                                 // 61
        return Spacebars.call(view.lookup("existsSocialNetwork"));                                                     // 62
      }, function() {                                                                                                  // 63
        return [ "\n                  ", HTML.Comment('\n                    <div id="optionsUserProfile">\n                    </div>\n                  '), "\n                " ];
      }), "\n              "), "\n            "), "\n              \n            ", HTML.Comment('\n            <button type="button" class="btn btn-info fullbutton" id="modProfile">Editar Perfil</button>\n            <button type="button" class="btn btn-info fullbutton" id="logout">Salir</button>\n            '), "\n            ", HTML.TABLE({
        class: "table"                                                                                                 // 66
      }, "  \n              ", HTML.TR("\n                ", HTML.TD({                                                 // 67
        class: "tableHeader"                                                                                           // 68
      }, "Twitts"), "\n                ", HTML.TD({                                                                    // 69
        class: "tableHeader"                                                                                           // 70
      }, "Siguiendo"), "\n                ", HTML.TD({                                                                 // 71
        class: "tableHeader"                                                                                           // 72
      }, "Seguidores"), "\n              "), "\n              ", HTML.TR("\n                ", HTML.TD({               // 73
        class: "tableContent"                                                                                          // 74
      }, Blaze.View("lookup:tweets", function() {                                                                      // 75
        return Spacebars.mustache(view.lookup("tweets"), Spacebars.dot(view.lookup("currentUser"), "username"));       // 76
      })), "\n                ", HTML.TD({                                                                             // 77
        class: "tableContent"                                                                                          // 78
      }, Blaze.View("lookup:following", function() {                                                                   // 79
        return Spacebars.mustache(view.lookup("following"));                                                           // 80
      })), "\n                ", HTML.TD({                                                                             // 81
        class: "tableContent"                                                                                          // 82
      }, Blaze.View("lookup:followers", function() {                                                                   // 83
        return Spacebars.mustache(view.lookup("followers"));                                                           // 84
      })), "\n              "), "\n            "), "\n          "), "\n        "), "\n      "), "\n      ", HTML.DIV({
        id: "divTweetFeed",                                                                                            // 86
        class: "col-md-8 col-sm-8"                                                                                     // 87
      }, Spacebars.include(view.lookupTemplate("tweetFeedProfile"))), "\n    " ];                                      // 88
    }), "\n  " ];                                                                                                      // 89
  });                                                                                                                  // 90
}));                                                                                                                   // 91
                                                                                                                       // 92
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"editProfile.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/editProfile.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.editProfile.onCreated(function () {                                                                           // 1
		Meteor.subscribe('images');                                                                                          // 2
		Meteor.call('findUserData', this.data, function (err, res) {                                                         // 3
				Session.set('datauser', res);                                                                                      // 4
		});                                                                                                                  // 5
});                                                                                                                    // 6
                                                                                                                       //
Template.editProfile.events({                                                                                          // 8
		'click #saveChanges': function () {                                                                                  // 9
				function clickSaveChanges() {                                                                                      // 9
						userAux = Session.get('datauser');                                                                               // 10
						newData = new Object();                                                                                          // 11
						newData.description = document.getElementById("userDescription").value;                                          // 12
						if (newData.description === "") {                                                                                // 13
								newData.description = $('#userDescription').attr("placeholder");                                               // 14
						}                                                                                                                // 15
						newData.userId = userAux._id;                                                                                    // 16
                                                                                                                       //
						//AHORA NOS GUARDAMOS EL _id DEL DOCUEMNTO QUE VAMSO A INSERTAR EN LA COLECCION Images                           //
						//QUE ALMACENARÁ LA NUEVA FOTO                                                                                   //
						var codeImg = $('#imgCurrentUser').attr("src");                                                                  // 20
                                                                                                                       //
						Meteor.call('insertNewImage', codeImg, function (err, res) {                                                     // 22
								newData.imgId = res;                                                                                           // 23
								console.log(newData.imgId);                                                                                    // 24
								Meteor.call('updUserData', newData);                                                                           // 25
								window.location = "/Profile/" + userAux.userNameProfile;                                                       // 26
						});                                                                                                              // 27
                                                                                                                       //
						/*                                                                                                               //
      //REALIZAMOS LA PETICION AJAX PARA GUARDAR LA IMAGEN EN PUBLIC                                                   //
      //RECUPERAMOS LA IMAGEN QUE HEMOS SUBIDO                                                                         //
      		var file = $('#inputFile')[0].files[0];                                                                        //
      		var readFile = new FileReader();                                                                               //
      		readFile.readAsDataURL(file);                                                                                  //
        		console.log(readFile);                                                                                       //
      		var ruta = "img-ajax.php";                                                                                     //
            $.ajax({                                                                                                   //
                url: ruta,                                                                                             //
                type: "POST",                                                                                          //
                data: readFile,                                                                                        //
                contentType: false,                                                                                    //
                processData: false,                                                                                    //
                success: function(datos)                                                                               //
                {                                                                                                      //
                    console.log(datos);                                                                                //
                }                                                                                                      //
            });                                                                                                        //
            */                                                                                                         //
				}                                                                                                                  // 51
                                                                                                                       //
				return clickSaveChanges;                                                                                           // 9
		}(),                                                                                                                 // 9
		'change #inputFile': function () {                                                                                   // 52
				function changeInputFile() {                                                                                       // 52
                                                                                                                       //
						//RECUPERAMOS LA IMAGEN QUE HEMOS SUBIDO                                                                         //
						var file = $('#inputFile')[0].files[0];                                                                          // 55
                                                                                                                       //
						reader = new FileReader();                                                                                       // 57
						reader.onload = function (file) {                                                                                // 58
								return function (e) {                                                                                          // 59
										$('#imgCurrentUser').attr("src", e.target.result);                                                           // 60
								};                                                                                                             // 61
						}(file);                                                                                                         // 62
                                                                                                                       //
						reader.readAsDataURL(file);                                                                                      // 64
				}                                                                                                                  // 65
                                                                                                                       //
				return changeInputFile;                                                                                            // 52
		}()                                                                                                                  // 52
});                                                                                                                    // 8
                                                                                                                       //
Template.editProfile.helpers({                                                                                         // 68
		'dataUserFound': function () {                                                                                       // 69
				function dataUserFound() {                                                                                         // 69
						dataUser = Session.get('datauser');                                                                              // 70
						return dataUser;                                                                                                 // 71
				}                                                                                                                  // 72
                                                                                                                       //
				return dataUserFound;                                                                                              // 69
		}(),                                                                                                                 // 69
		'userImgFound': function () {                                                                                        // 73
				function userImgFound() {                                                                                          // 73
						if (dataUser.userImg) {                                                                                          // 74
								Meteor.call('findUserImg', dataUser.userImg, function (err, res) {                                             // 75
										$('#imgCurrentUser').attr("src", res);                                                                       // 76
								});                                                                                                            // 77
						} else {                                                                                                         // 78
								console.log("Imagen test");                                                                                    // 79
								$('#imgCurrentUser').attr("src", "/profileImgTest.png");                                                       // 80
						}                                                                                                                // 81
				}                                                                                                                  // 82
                                                                                                                       //
				return userImgFound;                                                                                               // 73
		}(),                                                                                                                 // 73
		'tweets': function () {                                                                                              // 83
				function tweets(username) {                                                                                        // 83
						Meteor.call('tweetsPublish', username, function (err, res) {                                                     // 84
								Session.set('numTweets', res);                                                                                 // 85
						});                                                                                                              // 86
						return Session.get('numTweets');                                                                                 // 87
				}                                                                                                                  // 88
                                                                                                                       //
				return tweets;                                                                                                     // 83
		}(),                                                                                                                 // 83
		'following': function () {                                                                                           // 89
				function following() {                                                                                             // 89
						Meteor.call('usersFollowings', function (err, res) {                                                             // 90
								Session.set('numFollowings', res);                                                                             // 91
						});                                                                                                              // 92
						return Session.get('numFollowings');                                                                             // 93
				}                                                                                                                  // 94
                                                                                                                       //
				return following;                                                                                                  // 89
		}(),                                                                                                                 // 89
		'followers': function () {                                                                                           // 95
				function followers() {                                                                                             // 95
						Meteor.call('usersFollowers', function (err, res) {                                                              // 96
								Session.set('numFollowers', res);                                                                              // 97
						});                                                                                                              // 98
						return Session.get('numFollowers');                                                                              // 99
				}                                                                                                                  // 100
                                                                                                                       //
				return followers;                                                                                                  // 95
		}()                                                                                                                  // 95
});                                                                                                                    // 68
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"followUsers.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/followUsers.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.followUsers.events({                                                                                          // 1
  'submit form': function () {                                                                                         // 2
    function submitForm(event) {                                                                                       // 2
                                                                                                                       //
      var searchUser = event.target.searchUser.value;                                                                  // 4
      var foundUser = Meteor.call('findUser', searchUser, function (err, res) {                                        // 5
        if (res) Session.set('foundUser', res);                                                                        // 6
      });                                                                                                              // 7
      return false;                                                                                                    // 8
    }                                                                                                                  // 9
                                                                                                                       //
    return submitForm;                                                                                                 // 2
  }(),                                                                                                                 // 2
                                                                                                                       //
  'click #follow': function () {                                                                                       // 11
    function clickFollow() {                                                                                           // 11
      Meteor.call('followUser', Session.get('foundUser').username);                                                    // 12
    }                                                                                                                  // 13
                                                                                                                       //
    return clickFollow;                                                                                                // 11
  }(),                                                                                                                 // 11
                                                                                                                       //
  'click #followRec': function () {                                                                                    // 15
    function clickFollowRec(event) {                                                                                   // 15
      Meteor.call('followUser', this.username);                                                                        // 16
    }                                                                                                                  // 17
                                                                                                                       //
    return clickFollowRec;                                                                                             // 15
  }()                                                                                                                  // 15
});                                                                                                                    // 1
                                                                                                                       //
Template.followUsers.helpers({                                                                                         // 20
  'foundUser': function () {                                                                                           // 21
    function foundUser() {                                                                                             // 21
      return Session.get('foundUser');                                                                                 // 22
    }                                                                                                                  // 23
                                                                                                                       //
    return foundUser;                                                                                                  // 21
  }(),                                                                                                                 // 21
                                                                                                                       //
  'recommendedUsers': function () {                                                                                    // 25
    function recommendedUsers() {                                                                                      // 25
      return Session.get('recommendedUsers');                                                                          // 26
    }                                                                                                                  // 27
                                                                                                                       //
    return recommendedUsers;                                                                                           // 25
  }()                                                                                                                  // 25
});                                                                                                                    // 20
                                                                                                                       //
Template.followUsers.onRendered(function () {                                                                          // 31
  Meteor.call('recommendUsers', function (err, res) {                                                                  // 32
    Session.set('recommendedUsers', res);                                                                              // 33
  });                                                                                                                  // 34
});                                                                                                                    // 35
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"navBarTemplate.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/navBarTemplate.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.navBarTemplate.onCreated(function () {                                                                        // 1
	Session.set('sizeDisplay', $(window).width());                                                                        // 2
	Session.set('navBarCollapse', false);                                                                                 // 3
	Session.set('currentUser', Meteor.user().username);                                                                   // 4
                                                                                                                       //
	//PEDIMOS PERMISO AL USUARIO PARA MOSTRARLE NOTIFICACIONES                                                            //
	console.log(navigator.platform);                                                                                      // 7
                                                                                                                       //
	/*                                                                                                                    //
 HAY QUE CONTROLAR ESTO PORQUE NO FUNCIONA EL NOTIFICATION EN IPHONE                                                   //
 if(navigator.platform != 'iPad' || navigator.platform != 'iPhone' || navigator.platform != 'iPod'){                   //
 	Notification.requestPermission();                                                                                    //
 }                                                                                                                     //
 */                                                                                                                    //
});                                                                                                                    // 15
                                                                                                                       //
Template.navBarTemplate.events({                                                                                       // 17
	'click #recommendationsBtn': function () {                                                                            // 18
		function clickRecommendationsBtn() {                                                                                 // 18
			//console.log("A quien seguir");                                                                                    //
		}                                                                                                                    // 20
                                                                                                                       //
		return clickRecommendationsBtn;                                                                                      // 18
	}(),                                                                                                                  // 18
	'click #imgProfile': function () {                                                                                    // 21
		function clickImgProfile() {                                                                                         // 21
			window.location = "/Profile/" + Session.get('currentUser');                                                         // 22
		}                                                                                                                    // 23
                                                                                                                       //
		return clickImgProfile;                                                                                              // 21
	}(),                                                                                                                  // 21
	'click #imgLogTwiiterClone': function () {                                                                            // 24
		function clickImgLogTwiiterClone() {                                                                                 // 24
			window.location = "/";                                                                                              // 25
		}                                                                                                                    // 26
                                                                                                                       //
		return clickImgLogTwiiterClone;                                                                                      // 24
	}(),                                                                                                                  // 24
	'show.bs.collapse': function () {                                                                                     // 27
		function showBsCollapse() {                                                                                          // 27
			Session.set('navBarCollapse', true);                                                                                // 28
		}                                                                                                                    // 29
                                                                                                                       //
		return showBsCollapse;                                                                                               // 27
	}(),                                                                                                                  // 27
	'hide.bs.collapse': function () {                                                                                     // 30
		function hideBsCollapse() {                                                                                          // 30
			Session.set('navBarCollapse', false);                                                                               // 31
		}                                                                                                                    // 32
                                                                                                                       //
		return hideBsCollapse;                                                                                               // 30
	}(),                                                                                                                  // 30
	'click #btnNewTweet': function () {                                                                                   // 33
		function clickBtnNewTweet() {                                                                                        // 33
			Session.set('commentMode', false);                                                                                  // 34
		}                                                                                                                    // 35
                                                                                                                       //
		return clickBtnNewTweet;                                                                                             // 33
	}(),                                                                                                                  // 33
	'click #btnNewTwiit': function () {                                                                                   // 36
		function clickBtnNewTwiit() {                                                                                        // 36
			Session.set('commentMode', false);                                                                                  // 37
		}                                                                                                                    // 38
                                                                                                                       //
		return clickBtnNewTwiit;                                                                                             // 36
	}()                                                                                                                   // 36
});                                                                                                                    // 17
                                                                                                                       //
Template.navBarTemplate.helpers({                                                                                      // 41
	'notificationCount': function () {                                                                                    // 42
		function notificationCount() {                                                                                       // 42
			return UserUtils.findNumberNotif(Meteor.user().username);                                                           // 43
		}                                                                                                                    // 44
                                                                                                                       //
		return notificationCount;                                                                                            // 42
	}(),                                                                                                                  // 42
	'infoStateCollapseNavBar': function () {                                                                              // 45
		function infoStateCollapseNavBar() {                                                                                 // 45
			return Session.get('navBarCollapse');                                                                               // 46
		}                                                                                                                    // 47
                                                                                                                       //
		return infoStateCollapseNavBar;                                                                                      // 45
	}(),                                                                                                                  // 45
	'userImgFound': function () {                                                                                         // 48
		function userImgFound() {                                                                                            // 48
			Meteor.call('findUserData', Meteor.user().username, function (err, res) {                                           // 49
				console.log(res);                                                                                                  // 50
				if (res.userImg) {                                                                                                 // 51
					Meteor.call('findUserImg', res.userImg, function (err, res) {                                                     // 52
						$('#imgProfile').attr("src", res);                                                                               // 53
					});                                                                                                               // 54
				} else {                                                                                                           // 55
					$('#imgProfile').attr("src", "/profileImgTest.png");                                                              // 56
				}                                                                                                                  // 57
			});                                                                                                                 // 59
		}                                                                                                                    // 60
                                                                                                                       //
		return userImgFound;                                                                                                 // 48
	}()                                                                                                                   // 48
});                                                                                                                    // 41
//PARA CONTROLAR SI SE CAMBIA EL TAMAÑO DE PANTALLA                                                                    //
$(window).resize(function () {                                                                                         // 63
	console.log("Change");                                                                                                // 64
	Session.set('sizeDisplay', $(window).width());                                                                        // 65
});                                                                                                                    // 66
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notifications.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/notifications.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.notifications.onCreated(function () {                                                                         // 1
  //console.log("Usuario: ");                                                                                          //
  //console.log(Meteor.user().username);                                                                               //
  Meteor.subscribe('notifications', Meteor.user().username);                                                           // 4
});                                                                                                                    // 5
                                                                                                                       //
Template.notifications.helpers({                                                                                       // 7
  modeDisplay: function () {                                                                                           // 8
    function modeDisplay() {                                                                                           // 8
      var size = Session.get('sizeDisplay');                                                                           // 9
      if (size > 768) {                                                                                                // 10
        return true;                                                                                                   // 11
      } else {                                                                                                         // 12
        return false;                                                                                                  // 13
      }                                                                                                                // 14
    }                                                                                                                  // 15
                                                                                                                       //
    return modeDisplay;                                                                                                // 8
  }(),                                                                                                                 // 8
  notifications: function () {                                                                                         // 16
    function notifications() {                                                                                         // 16
      return Notifications.find({ recepNotif: Meteor.user().username, read: false });                                  // 17
    }                                                                                                                  // 18
                                                                                                                       //
    return notifications;                                                                                              // 16
  }(),                                                                                                                 // 16
  notificationCount: function () {                                                                                     // 19
    function notificationCount() {                                                                                     // 19
      /*                                                                                                               //
      var followings = UserUtils.findFollowings(Meteor.user().username);                                               //
      return Notifications.find({twiitNotifUserName: { $nin: followings }, read: false}).count();                      //
      */                                                                                                               //
      return UserUtils.findNumberNotif(Meteor.user().username);                                                        // 24
    }                                                                                                                  // 25
                                                                                                                       //
    return notificationCount;                                                                                          // 19
  }(),                                                                                                                 // 19
  'infoStateCollapseNavBar': function () {                                                                             // 26
    function infoStateCollapseNavBar() {                                                                               // 26
      return Session.get('navBarCollapse');                                                                            // 27
    }                                                                                                                  // 28
                                                                                                                       //
    return infoStateCollapseNavBar;                                                                                    // 26
  }()                                                                                                                  // 26
});                                                                                                                    // 7
                                                                                                                       //
/*                                                                                                                     //
Template.notificationItem.helpers({                                                                                    //
  notificationTwiitPath: function() {                                                                                  //
    var path = this.twiitId;                                                                                           //
    console.log(path);                                                                                                 //
    return path;                                                                                                       //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
                                                                                                                       //
Template.notificationItem.events({                                                                                     //
  'click a': function() {                                                                                              //
    Notifications.update(this._id, {$set: {read: true}});                                                              //
  }                                                                                                                    //
});                                                                                                                    //
*/                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notificationsNew.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/notificationsNew.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.notificationsNew.onCreated(function () {                                                                      // 1
  //console.log("Usuario: ");                                                                                          //
  //console.log(Meteor.user().username);                                                                               //
  Meteor.subscribe('notifications', Meteor.user().username);                                                           // 4
});                                                                                                                    // 5
                                                                                                                       //
Template.notificationsNew.helpers({                                                                                    // 7
  modeDisplay: function () {                                                                                           // 8
    function modeDisplay() {                                                                                           // 8
      var size = Session.get('sizeDisplay');                                                                           // 9
      if (size > 768) {                                                                                                // 10
        return true;                                                                                                   // 11
      } else {                                                                                                         // 12
        return false;                                                                                                  // 13
      }                                                                                                                // 14
    }                                                                                                                  // 15
                                                                                                                       //
    return modeDisplay;                                                                                                // 8
  }(),                                                                                                                 // 8
  notifications: function () {                                                                                         // 16
    function notifications() {                                                                                         // 16
      //followings = UserUtils.findFollowings(Meteor.user().username);                                                 //
      return Notifications.find({ recepNotif: Meteor.user().username, read: false });                                  // 18
    }                                                                                                                  // 19
                                                                                                                       //
    return notifications;                                                                                              // 16
  }(),                                                                                                                 // 16
  notificationCount: function () {                                                                                     // 20
    function notificationCount() {                                                                                     // 20
      /*                                                                                                               //
      var followings = UserUtils.findFollowings(Meteor.user().username);                                               //
      return Notifications.find({twiitNotifUserName: { $nin: followings }, read: false}).count();                      //
      */                                                                                                               //
      numNotif = UserUtils.findNumberNotif(Meteor.user().username);                                                    // 25
      return numNotif;                                                                                                 // 26
    }                                                                                                                  // 27
                                                                                                                       //
    return notificationCount;                                                                                          // 20
  }(),                                                                                                                 // 20
  'infoStateCollapseNavBar': function () {                                                                             // 28
    function infoStateCollapseNavBar() {                                                                               // 28
      return Session.get('navBarCollapse');                                                                            // 29
    }                                                                                                                  // 30
                                                                                                                       //
    return infoStateCollapseNavBar;                                                                                    // 28
  }(),                                                                                                                 // 28
  'currentUser': function () {                                                                                         // 31
    function currentUser() {                                                                                           // 31
      return Meteor.user().username;                                                                                   // 32
    }                                                                                                                  // 33
                                                                                                                       //
    return currentUser;                                                                                                // 31
  }()                                                                                                                  // 31
});                                                                                                                    // 7
                                                                                                                       //
Template.notificationsNew.events({                                                                                     // 36
                                                                                                                       //
  'click #linkToNotif': function () {                                                                                  // 38
    function clickLinkToNotif() {                                                                                      // 38
      if (numNotif > 0) {                                                                                              // 39
        window.location = "/Notifications/" + Meteor.user().username;                                                  // 40
      }                                                                                                                // 41
    }                                                                                                                  // 42
                                                                                                                       //
    return clickLinkToNotif;                                                                                           // 38
  }()                                                                                                                  // 38
                                                                                                                       //
});                                                                                                                    // 36
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"socialNetworkBox.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/socialNetworkBox.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.socialNetworkBox.onRendered(function () {                                                                     // 1
  Session.set('countSocialNetworks', 0);                                                                               // 2
});                                                                                                                    // 3
                                                                                                                       //
Template.socialNetworkBox.events({                                                                                     // 5
  'click #btnNewSN': function () {                                                                                     // 6
    function clickBtnNewSN() {                                                                                         // 6
      var numSocialNetworks = Session.get('countSocialNetworks');                                                      // 7
      if (numSocialNetworks < 3) {                                                                                     // 8
        Session.set('countSocialNetworks', numSocialNetworks + 1);                                                     // 9
                                                                                                                       //
        $('#containerInputs').append("<div class='input-group' style='margin-bottom: 10px;'>" + "<div class='input-group-btn' id='containerInputs'>" + "<button id='" + numSocialNetworks + "' type='button' class='btn btn-default dropdown-toggle btnDropDown' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Choose " + "<span class='caret'></span>" + "</button>" + "<ul id='dropdownMenu'" + numSocialNetworks + " class='dropdown-menu'>" + "<li><a href='#'>WhatsApp</a></li><li><a href='#'>Facebook</a></li><li><a href='#'>Instagram</a></li>" + "</ul>" + "</div>" + "<input type='text' class='form-control' aria-label='...' placeholder='Username...'>" + "</div>");
      };                                                                                                               // 22
    }                                                                                                                  // 23
                                                                                                                       //
    return clickBtnNewSN;                                                                                              // 6
  }(),                                                                                                                 // 6
  'click .btnDropDown': function () {                                                                                  // 24
    function clickBtnDropDown(event) {                                                                                 // 24
      Session.set('btnTap', event.target.id);                                                                          // 25
    }                                                                                                                  // 26
                                                                                                                       //
    return clickBtnDropDown;                                                                                           // 24
  }(),                                                                                                                 // 24
  'click .dropdown-menu li a': function () {                                                                           // 27
    function clickDropdownMenuLiA(event) {                                                                             // 27
                                                                                                                       //
      var btnTap = Session.get('btnTap');                                                                              // 29
      var selectOption = event.target.text;                                                                            // 30
                                                                                                                       //
      $('#' + btnTap).html(selectOption + " " + "<span class='caret'></span>");                                        // 32
    }                                                                                                                  // 33
                                                                                                                       //
    return clickDropdownMenuLiA;                                                                                       // 27
  }(),                                                                                                                 // 27
  'click #saveData': function () {                                                                                     // 34
    function clickSaveData() {                                                                                         // 34
      //DE ESTA MANERA OBTENEMOS TODOS LOS BLOQUES QUE HEMOS AÑADIDO DINÁMICAMENTE                                     //
      console.log($('.input-group'));                                                                                  // 36
      //HAY QUE OBTENER TODOS LOS VALORES SELECCIONADOS EN CADA DROPDOWN Y EL CONTENIDO DE SUS RESPECTIVOS INPUT       //
      //TODO                                                                                                           //
    }                                                                                                                  // 39
                                                                                                                       //
    return clickSaveData;                                                                                              // 34
  }()                                                                                                                  // 34
});                                                                                                                    // 5
                                                                                                                       //
Template.socialNetworkBox.helpers({});                                                                                 // 42
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweetBox.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/tweetBox.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//DETECTAMOS QUE SE ENCUENTRA EN EL CLIENTE EL CODIGO QUE SE VA  AEJECUTAR                                             //
if (Meteor.isClient) {                                                                                                 // 2
                                                                                                                       //
	Template.tweetBox.onRendered(function () {                                                                            // 4
		Session.set('numChars', 0);                                                                                          // 5
	});                                                                                                                   // 6
                                                                                                                       //
	Template.tweetBox.events({                                                                                            // 8
		'input #tweetText': function () {                                                                                    // 9
			function inputTweetText() {                                                                                         // 9
				Session.set('numChars', $('#tweetText').val().length);                                                             // 10
			}                                                                                                                   // 11
                                                                                                                       //
			return inputTweetText;                                                                                              // 9
		}(),                                                                                                                 // 9
		'click button': function () {                                                                                        // 12
			function clickButton() {                                                                                            // 12
				var message = $('#tweetText').val();                                                                               // 13
				var type = Session.get('commentMode');                                                                             // 14
                                                                                                                       //
				if (type) {                                                                                                        // 16
					var twiitId = Session.get('idCurrentTwiit');                                                                      // 17
					var numComment = UserUtils.findNumComment(twiitId);                                                               // 18
					numComment++;                                                                                                     // 19
				}                                                                                                                  // 20
                                                                                                                       //
				$('#tweetText').val("");                                                                                           // 22
				Session.set('numChars', 0);                                                                                        // 23
                                                                                                                       //
				var tweet = new Object();                                                                                          // 25
				tweet.message = message;                                                                                           // 26
				tweet.type = type;                                                                                                 // 27
                                                                                                                       //
				if (twiitId != null) {                                                                                             // 29
					tweet.twiitId = twiitId;                                                                                          // 30
					tweet.numComment = numComment;                                                                                    // 31
					tweet.typeOfNotif = "comment";                                                                                    // 32
					//recepNotif                                                                                                      //
					tweet.recepUser = UserUtils.findUserFromTwiit(twiitId);                                                           // 34
				} else {                                                                                                           // 35
					tweet.typeOfNotif = "twiit";                                                                                      // 36
					//recepNotif                                                                                                      //
					tweet.recepUser = Meteor.user().username;                                                                         // 38
				}                                                                                                                  // 39
                                                                                                                       //
				tweet.actorUser = Meteor.user().username;                                                                          // 41
                                                                                                                       //
				Meteor.call('insertTweet', tweet);                                                                                 // 43
			}                                                                                                                   // 44
                                                                                                                       //
			return clickButton;                                                                                                 // 12
		}()                                                                                                                  // 12
	});                                                                                                                   // 8
                                                                                                                       //
	Template.tweetBox.helpers({                                                                                           // 48
		charCount: function () {                                                                                             // 49
			function charCount() {                                                                                              // 49
				return 140 - Session.get('numChars');                                                                              // 50
			}                                                                                                                   // 51
                                                                                                                       //
			return charCount;                                                                                                   // 49
		}(),                                                                                                                 // 49
                                                                                                                       //
		charClass: function () {                                                                                             // 53
			function charClass() {                                                                                              // 53
				if (Session.get('numChars') > 140) {                                                                               // 54
					return 'errCharCount'; // o el nombre que le disteis en el fichero css                                            // 55
				} else {                                                                                                           // 56
						return 'charCount'; //o el nombre que le disteis en el fichero css                                               // 57
					}                                                                                                                 // 58
			}                                                                                                                   // 59
                                                                                                                       //
			return charClass;                                                                                                   // 53
		}(),                                                                                                                 // 53
                                                                                                                       //
		disableButton: function () {                                                                                         // 61
			function disableButton() {                                                                                          // 61
				if (Session.get('numChars') <= 0 || Session.get('numChars') > 140 || !Meteor.user()) {                             // 62
					return 'disabled';                                                                                                // 65
				}                                                                                                                  // 66
			}                                                                                                                   // 67
                                                                                                                       //
			return disableButton;                                                                                               // 61
		}()                                                                                                                  // 61
	});                                                                                                                   // 48
}                                                                                                                      // 69
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweetFeed.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/tweetFeed.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.tweetFeed.onCreated(function () {                                                                             // 1
  this.subscribe('twitts');                                                                                            // 2
  this.subscribe('favs');                                                                                              // 3
});                                                                                                                    // 4
                                                                                                                       //
Template.tweetFeed.helpers({                                                                                           // 6
  'tweetMessage': function () {                                                                                        // 7
    function tweetMessage() {                                                                                          // 7
      var tweet = Twitts.find({}, { sort: { timestamp: -1 } });                                                        // 8
      return tweet;                                                                                                    // 9
    }                                                                                                                  // 10
                                                                                                                       //
    return tweetMessage;                                                                                               // 7
  }(),                                                                                                                 // 7
  'convertDateTime': function () {                                                                                     // 11
    function convertDateTime() {                                                                                       // 11
      var dateNew = new Date(this.timestamp);                                                                          // 12
      var dateCon = dateNew.toLocaleString();                                                                          // 13
      return dateCon;                                                                                                  // 14
    }                                                                                                                  // 15
                                                                                                                       //
    return convertDateTime;                                                                                            // 11
  }(),                                                                                                                 // 11
  'numComment': function () {                                                                                          // 16
    function numComment() {                                                                                            // 16
      var num = UserUtils.findNumComment(this._id);                                                                    // 17
      if (num > 0) {                                                                                                   // 18
        return true;                                                                                                   // 19
      } else return false;                                                                                             // 20
    }                                                                                                                  // 21
                                                                                                                       //
    return numComment;                                                                                                 // 16
  }(),                                                                                                                 // 16
  'idToFavBtn': function () {                                                                                          // 22
    function idToFavBtn() {                                                                                            // 22
      return this._id;                                                                                                 // 23
    }                                                                                                                  // 24
                                                                                                                       //
    return idToFavBtn;                                                                                                 // 22
  }(),                                                                                                                 // 22
  'classFav': function () {                                                                                            // 25
    function classFav() {                                                                                              // 25
      var num = UserUtils.findNumberFavPerTwiit(this._id);                                                             // 26
      if (num > 0) {                                                                                                   // 27
        return "heartFav";                                                                                             // 28
      } else return "heartNoFav";                                                                                      // 29
    }                                                                                                                  // 30
                                                                                                                       //
    return classFav;                                                                                                   // 25
  }(),                                                                                                                 // 25
  'infoNotif': function () {                                                                                           // 31
    function infoNotif() {                                                                                             // 31
      var username = Meteor.user().username;                                                                           // 32
                                                                                                                       //
      var numNotif = UserUtils.findNumberNotif(username);                                                              // 34
      //PRIMERO TENEMOS QUE COMPROBAR SI HAY NOTIFICACIONES                                                            //
      if (numNotif === 1) {                                                                                            // 36
        //BUSCAMOS LAS NOTIFICACIONES DISPONIBLES                                                                      //
        var notif = UserUtils.findOneNotification(username);                                                           // 38
                                                                                                                       //
        UserUtils.createNotifToBrowser(notif.typeOfNotif, notif.actorNotif);                                           // 40
      } else if (numNotif > 1) {                                                                                       // 41
        UserUtils.createNotifToBrowser("moreNotif", username);                                                         // 42
      }                                                                                                                // 43
    }                                                                                                                  // 44
                                                                                                                       //
    return infoNotif;                                                                                                  // 31
  }()                                                                                                                  // 31
});                                                                                                                    // 6
                                                                                                                       //
Template.tweetFeed.events({                                                                                            // 47
  'click #btnFav': function () {                                                                                       // 48
    function clickBtnFav() {                                                                                           // 48
      var currentUser = Session.get('currentUser');                                                                    // 49
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                                // 50
                                                                                                                       //
      console.log(this._id);                                                                                           // 52
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                            //
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                           // 54
                                                                                                                       //
      //HACEMOS UNA COMPROBACION DE QUE EL TWIIT NO TIENE NINGUN FAV O QUE SI LO TIENE                                 //
      if (!userTapFav) {                                                                                               // 57
        //console.log("No tiene FAVS");                                                                                //
        UserUtils.addFavToTwiit(this._id, idUser);                                                                     // 59
        $("#" + this._id).addClass("heartFav");                                                                        // 60
        $("#" + this._id).removeClass("heartNoFav");                                                                   // 61
      } else {                                                                                                         // 62
        var arrAux = userTapFav.idUserTapFav;                                                                          // 63
      }                                                                                                                // 64
                                                                                                                       //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                       //
      if (arrAux.indexOf(idUser) === -1) {                                                                             // 67
        UserUtils.addFavToTwiit(this._id, idUser);                                                                     // 68
                                                                                                                       //
        var notif = new Object();                                                                                      // 70
        notif._id = this._id;                                                                                          // 71
        notif.typeOfNotif = "fav";                                                                                     // 72
        notif.actorNotif = currentUser;                                                                                // 73
        notif.recepNotif = UserUtils.findUserFromTwiit(this._id);                                                      // 74
                                                                                                                       //
        Meteor.call('createTwiitNotification', notif);                                                                 // 76
                                                                                                                       //
        $("#" + this._id).addClass("heartFav");                                                                        // 78
        $("#" + this._id).removeClass("heartNoFav");                                                                   // 79
      } else {                                                                                                         // 80
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                                //
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                             //
        //LA OPERACION INVERSA                                                                                         //
        UserUtils.removeFavToTwiit(this._id, idUser);                                                                  // 84
        $("#" + this._id).addClass("heartNoFav");                                                                      // 85
        $("#" + this._id).removeClass("heartFav");                                                                     // 86
      }                                                                                                                // 87
    }                                                                                                                  // 88
                                                                                                                       //
    return clickBtnFav;                                                                                                // 48
  }(),                                                                                                                 // 48
  'click #btnComm': function () {                                                                                      // 89
    function clickBtnComm() {                                                                                          // 89
      var numComment = UserUtils.findNumComment(this._id);                                                             // 90
      //SI EL TWIIT TIENE POR LO MENOS 1 COMENTARIO, ENTONCES REDIRIGIMOS AL USUARIO A                                 //
      //LA RUTA /Comments. SI NO, SE ABRE EL MODAL Y SE PUEDE HACER EL COMENTARIO                                      //
      if (numComment === 0) {                                                                                          // 93
        $("#dialog-NewTwiit").modal();                                                                                 // 94
        Session.set('commentMode', true);                                                                              // 95
        Session.set('idCurrentTwiit', this._id);                                                                       // 96
      }                                                                                                                // 97
    }                                                                                                                  // 98
                                                                                                                       //
    return clickBtnComm;                                                                                               // 89
  }()                                                                                                                  // 89
                                                                                                                       //
});                                                                                                                    // 47
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweetFeedProfile.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/tweetFeedProfile.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.tweetFeedProfile.onCreated(function () {                                                                      // 1
  this.subscribe('twittsProfile');                                                                                     // 2
  this.subscribe('favs');                                                                                              // 3
});                                                                                                                    // 4
                                                                                                                       //
Template.tweetFeedProfile.helpers({                                                                                    // 6
  'tweetMessageProfile': function () {                                                                                 // 7
    function tweetMessageProfile() {                                                                                   // 7
      var tweet = Twitts.find({}, {                                                                                    // 8
        sort: { timestamp: -1 },                                                                                       // 9
        limit: 10                                                                                                      // 10
      });                                                                                                              // 8
      return tweet;                                                                                                    // 12
    }                                                                                                                  // 13
                                                                                                                       //
    return tweetMessageProfile;                                                                                        // 7
  }(),                                                                                                                 // 7
  'convertDateTime': function () {                                                                                     // 14
    function convertDateTime() {                                                                                       // 14
      var dateNew = new Date(this.timestamp);                                                                          // 15
      var dateCon = dateNew.toLocaleString();                                                                          // 16
      return dateCon;                                                                                                  // 17
    }                                                                                                                  // 18
                                                                                                                       //
    return convertDateTime;                                                                                            // 14
  }(),                                                                                                                 // 14
  'numComment': function () {                                                                                          // 19
    function numComment() {                                                                                            // 19
      var num = UserUtils.findNumComment(this._id);                                                                    // 20
      if (num > 0) {                                                                                                   // 21
        return true;                                                                                                   // 22
      } else return false;                                                                                             // 23
    }                                                                                                                  // 24
                                                                                                                       //
    return numComment;                                                                                                 // 19
  }(),                                                                                                                 // 19
  'idToFavBtn': function () {                                                                                          // 25
    function idToFavBtn() {                                                                                            // 25
      return this._id;                                                                                                 // 26
    }                                                                                                                  // 27
                                                                                                                       //
    return idToFavBtn;                                                                                                 // 25
  }(),                                                                                                                 // 25
  'classFav': function () {                                                                                            // 28
    function classFav() {                                                                                              // 28
      var num = UserUtils.findNumberFavPerTwiit(this._id);                                                             // 29
      if (num > 0) {                                                                                                   // 30
        return "heartFav";                                                                                             // 31
      } else return "heartNoFav";                                                                                      // 32
    }                                                                                                                  // 33
                                                                                                                       //
    return classFav;                                                                                                   // 28
  }()                                                                                                                  // 28
});                                                                                                                    // 6
                                                                                                                       //
Template.tweetFeedProfile.events({                                                                                     // 36
  'click #btnFav': function () {                                                                                       // 37
    function clickBtnFav() {                                                                                           // 37
      var currentUser = Session.get('currentUser');                                                                    // 38
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                                // 39
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                            //
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                           // 41
      var arrAux = userTapFav.idUserTapFav;                                                                            // 42
                                                                                                                       //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                       //
      if (arrAux.indexOf(idUser) === -1) {                                                                             // 45
        UserUtils.addFavToTwiit(this._id, idUser);                                                                     // 46
                                                                                                                       //
        var notif = new Object();                                                                                      // 48
        notif._id = this._id;                                                                                          // 49
        notif.typeOfNotif = "fav";                                                                                     // 50
        notif.actorNotif = currentUser;                                                                                // 51
        notif.recepNotif = UserUtils.findUserFromTwiit(this._id);                                                      // 52
                                                                                                                       //
        console.log(notif);                                                                                            // 54
                                                                                                                       //
        Meteor.call('createTwiitNotification', notif);                                                                 // 56
                                                                                                                       //
        $("#" + this._id).addClass("heartFav");                                                                        // 58
        $("#" + this._id).removeClass("heartNoFav");                                                                   // 59
      } else {                                                                                                         // 60
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                                //
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                             //
        //LA OPERACION INVERSA                                                                                         //
        UserUtils.removeFavToTwiit(this._id, idUser);                                                                  // 64
        $("#" + this._id).addClass("heartNoFav");                                                                      // 65
        $("#" + this._id).removeClass("heartFav");                                                                     // 66
      }                                                                                                                // 67
    }                                                                                                                  // 68
                                                                                                                       //
    return clickBtnFav;                                                                                                // 37
  }() /*,                                                                                                              // 37
      'click #btnComm' : function(){                                                                                   //
       var numComment = UserUtils.findNumComment(this._id);                                                            //
       //SI EL TWIIT TIENE POR LO MENOS 1 COMENTARIO, ENTONCES REDIRIGIMOS AL USUARIO A                                //
       //LA RUTA /Comments. SI NO, SE ABRE EL MODAL Y SE PUEDE HACER EL COMENTARIO                                     //
       if(numComment === 0){                                                                                           //
           $("#dialog-NewTwiit").modal();                                                                              //
           Session.set('commentMode', true);                                                                           //
           Session.set('idCurrentTwiit', this._id);                                                                    //
       }                                                                                                               //
      }*/                                                                                                              //
});                                                                                                                    // 36
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"twiitCommentPage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/twiitCommentPage.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.twiitCommentPage.onCreated(function () {                                                                      // 1
  this.subscribe('twittsWithComment');                                                                                 // 2
  this.subscribe('favs');                                                                                              // 3
});                                                                                                                    // 4
                                                                                                                       //
Template.twiitCommentPage.helpers({                                                                                    // 6
  //DEVUELVE EL MENSAJE ORIGINAL DEL QUE SE PRODUCEN LOS COMENTARIOS                                                   //
  'tweetMessage': function () {                                                                                        // 8
    function tweetMessage() {                                                                                          // 8
      //HAY QUE CONSEGUIR PASAR A ESTA VISTA EL this._id DE tweetFeed PARA PODER                                       //
      //DEVOLVER EL TWEET INICIAL Y DE AHI PASAR A MOSTRAR CON tweetThatCommentMessage                                 //
      //TODOS LOS COMENTARIOS QUE TENGA!                                                                               //
      if (this.mode) {                                                                                                 // 12
        id = UserUtils.findTwiitFromNotif(this._id);                                                                   // 13
        return Twitts.find(id, { sort: { timestamp: -1 } });                                                           // 14
      } else {                                                                                                         // 15
        return Twitts.find(this._id, { sort: { timestamp: -1 } });                                                     // 16
      }                                                                                                                // 17
    }                                                                                                                  // 18
                                                                                                                       //
    return tweetMessage;                                                                                               // 8
  }(),                                                                                                                 // 8
  'tweetThatCommentMessage': function () {                                                                             // 19
    function tweetThatCommentMessage() {                                                                               // 19
      if (this.mode) {                                                                                                 // 20
        id = UserUtils.findTwiitFromNotif(this._id);                                                                   // 21
        return Twitts.find({ twiitIdComment: id }, { sort: { timestamp: -1 } });                                       // 22
      } else {                                                                                                         // 23
        return Twitts.find({ twiitIdComment: this._id }, { sort: { timestamp: -1 } });                                 // 24
      }                                                                                                                // 25
    }                                                                                                                  // 26
                                                                                                                       //
    return tweetThatCommentMessage;                                                                                    // 19
  }(),                                                                                                                 // 19
  'convertDateTime': function () {                                                                                     // 27
    function convertDateTime() {                                                                                       // 27
      var dateNew = new Date(this.timestamp);                                                                          // 28
      var dateCon = dateNew.toLocaleString();                                                                          // 29
      return dateCon;                                                                                                  // 30
    }                                                                                                                  // 31
                                                                                                                       //
    return convertDateTime;                                                                                            // 27
  }(),                                                                                                                 // 27
  'idToFavBtn': function () {                                                                                          // 32
    function idToFavBtn() {                                                                                            // 32
      return this._id;                                                                                                 // 33
    }                                                                                                                  // 34
                                                                                                                       //
    return idToFavBtn;                                                                                                 // 32
  }(),                                                                                                                 // 32
  'classFav': function () {                                                                                            // 35
    function classFav() {                                                                                              // 35
      var num = UserUtils.findNumberFavPerTwiit(this._id);                                                             // 36
      if (num > 0) {                                                                                                   // 37
        return "heartFav";                                                                                             // 38
      } else return "heartNoFav";                                                                                      // 39
    }                                                                                                                  // 40
                                                                                                                       //
    return classFav;                                                                                                   // 35
  }()                                                                                                                  // 35
});                                                                                                                    // 6
                                                                                                                       //
Template.twiitCommentPage.events({                                                                                     // 43
  'click #btnFav': function () {                                                                                       // 44
    function clickBtnFav() {                                                                                           // 44
      var currentUser = Session.get('currentUser');                                                                    // 45
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                                // 46
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                            //
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                           // 48
      var arrAux = userTapFav.idUserTapFav;                                                                            // 49
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                       //
      if (arrAux.indexOf(idUser) === -1) {                                                                             // 51
        UserUtils.addFavToTwiit(this._id, idUser);                                                                     // 52
                                                                                                                       //
        var notif = new Object();                                                                                      // 54
        notif._id = this._id;                                                                                          // 55
        notif.typeOfNotif = "fav";                                                                                     // 56
        notif.actorNotif = currentUser;                                                                                // 57
        notif.recepNotif = UserUtils.findUserFromTwiit(this._id);                                                      // 58
                                                                                                                       //
        console.log(notif);                                                                                            // 60
                                                                                                                       //
        Meteor.call('createTwiitNotification', notif);                                                                 // 62
                                                                                                                       //
        $("#" + this._id).addClass("heartFav");                                                                        // 64
        $("#" + this._id).removeClass("heartNoFav");                                                                   // 65
      } else {                                                                                                         // 66
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                                //
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                             //
        //LA OPERACION INVERSA                                                                                         //
        UserUtils.removeFavToTwiit(this._id, idUser);                                                                  // 70
        $("#" + this._id).addClass("heartNoFav");                                                                      // 71
        $("#" + this._id).removeClass("heartFav");                                                                     // 72
      }                                                                                                                // 73
    }                                                                                                                  // 74
                                                                                                                       //
    return clickBtnFav;                                                                                                // 44
  }(),                                                                                                                 // 44
  'click #btnComm': function () {                                                                                      // 75
    function clickBtnComm() {                                                                                          // 75
      $("#dialog-NewTwiit").modal();                                                                                   // 76
      Session.set('idCurrentTwiit', this._id);                                                                         // 77
      Session.set('commentMode', true);                                                                                // 78
    }                                                                                                                  // 79
                                                                                                                       //
    return clickBtnComm;                                                                                               // 75
  }()                                                                                                                  // 75
});                                                                                                                    // 43
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"twiitPage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/twiitPage.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.twiitPage.helpers({                                                                                           // 1
  'convertDateTime': function () {                                                                                     // 2
    function convertDateTime() {                                                                                       // 2
      var dateNew = new Date(this.twiitTimeStamp);                                                                     // 3
      var dateCon = dateNew.toLocaleString();                                                                          // 4
      return dateCon;                                                                                                  // 5
    }                                                                                                                  // 6
                                                                                                                       //
    return convertDateTime;                                                                                            // 2
  }(),                                                                                                                 // 2
                                                                                                                       //
  'tweetMessage': function () {                                                                                        // 8
    function tweetMessage() {                                                                                          // 8
      console.log(this._id);                                                                                           // 9
      var notify = Notifications.find({ _id: this._id });                                                              // 10
      return notify;                                                                                                   // 11
    }                                                                                                                  // 12
                                                                                                                       //
    return tweetMessage;                                                                                               // 8
  }(),                                                                                                                 // 8
                                                                                                                       //
  'countNotifTwiit': function () {                                                                                     // 14
    function countNotifTwiit() {                                                                                       // 14
      var num = Notifications.find({ _id: this._id }).count();                                                         // 15
      if (num === 0) {                                                                                                 // 16
        return false;                                                                                                  // 17
      } else {                                                                                                         // 18
        return true;                                                                                                   // 19
      }                                                                                                                // 20
    }                                                                                                                  // 21
                                                                                                                       //
    return countNotifTwiit;                                                                                            // 14
  }()                                                                                                                  // 14
});                                                                                                                    // 1
                                                                                                                       //
Template.twiitPage.events({                                                                                            // 24
  'click button': function () {                                                                                        // 25
    function clickButton() {                                                                                           // 25
      console.log(this._id);                                                                                           // 26
      Notifications.update(this._id, { $set: { read: true } });                                                        // 27
      console.log("Clean!");                                                                                           // 28
      window.location = "/";                                                                                           // 29
    }                                                                                                                  // 30
                                                                                                                       //
    return clickButton;                                                                                                // 25
  }()                                                                                                                  // 25
});                                                                                                                    // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"twiitPageNew.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/twiitPageNew.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.twiitPageNew.onCreated(function () {                                                                          // 1
  this.subscribe('twittsWithComment');                                                                                 // 2
  this.subscribe('favs');                                                                                              // 3
  this.subscribe('allNotifications');                                                                                  // 4
  arrWithId = [];                                                                                                      // 5
  Session.set('notificationsModeOn', true);                                                                            // 6
});                                                                                                                    // 7
                                                                                                                       //
Template.twiitPageNew.helpers({                                                                                        // 9
  'convertDateTime': function () {                                                                                     // 10
    function convertDateTime() {                                                                                       // 10
      var dateNew = new Date(this.twiitTimeStamp);                                                                     // 11
      var dateCon = dateNew.toLocaleString();                                                                          // 12
      return dateCon;                                                                                                  // 13
    }                                                                                                                  // 14
                                                                                                                       //
    return convertDateTime;                                                                                            // 10
  }(),                                                                                                                 // 10
                                                                                                                       //
  'tweetMessage': function () {                                                                                        // 16
    function tweetMessage() {                                                                                          // 16
      return UserUtils.findNotifications(this.name);                                                                   // 17
    }                                                                                                                  // 18
                                                                                                                       //
    return tweetMessage;                                                                                               // 16
  }(),                                                                                                                 // 16
                                                                                                                       //
  'countNotifTwiit': function () {                                                                                     // 20
    function countNotifTwiit() {                                                                                       // 20
      var numNotif = UserUtils.findNumberNotif(this.name);                                                             // 21
      if (numNotif === 0) {                                                                                            // 22
        return false;                                                                                                  // 23
      } else {                                                                                                         // 24
        return true;                                                                                                   // 25
      }                                                                                                                // 26
    }                                                                                                                  // 27
                                                                                                                       //
    return countNotifTwiit;                                                                                            // 20
  }(),                                                                                                                 // 20
                                                                                                                       //
  'saveIdInArr': function () {                                                                                         // 29
    function saveIdInArr() {                                                                                           // 29
      arrWithId.push(this._id);                                                                                        // 30
    }                                                                                                                  // 31
                                                                                                                       //
    return saveIdInArr;                                                                                                // 29
  }(),                                                                                                                 // 29
                                                                                                                       //
  'numFavPerTwiit': function () {                                                                                      // 33
    function numFavPerTwiit() {                                                                                        // 33
      return UserUtils.findNumberFavPerTwiit(this.twiitId);                                                            // 34
    }                                                                                                                  // 35
                                                                                                                       //
    return numFavPerTwiit;                                                                                             // 33
  }(),                                                                                                                 // 33
  'findNumComment': function () {                                                                                      // 36
    function findNumComment() {                                                                                        // 36
      //AQUI this._id ES EL _ID DE LA COLLECTION NOTIFICATIONS                                                         //
      //POR LO QUE HABRA QUE SACAR EL CAMPO twiitId                                                                    //
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                            // 39
                                                                                                                       //
      var num = UserUtils.findNumComment(twiitId);                                                                     // 41
      if (num > 0) {                                                                                                   // 42
        return true;                                                                                                   // 43
      } else return false;                                                                                             // 44
    }                                                                                                                  // 45
                                                                                                                       //
    return findNumComment;                                                                                             // 36
  }(),                                                                                                                 // 36
  'numComment': function () {                                                                                          // 46
    function numComment() {                                                                                            // 46
      var num = UserUtils.findNumComment(UserUtils.findTwiitFromNotif(this._id));                                      // 47
      return num;                                                                                                      // 48
    }                                                                                                                  // 49
                                                                                                                       //
    return numComment;                                                                                                 // 46
  }(),                                                                                                                 // 46
  'idToFavBtn': function () {                                                                                          // 50
    function idToFavBtn() {                                                                                            // 50
      return this._id;                                                                                                 // 51
    }                                                                                                                  // 52
                                                                                                                       //
    return idToFavBtn;                                                                                                 // 50
  }(),                                                                                                                 // 50
  'classFav': function () {                                                                                            // 53
    function classFav() {                                                                                              // 53
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                            // 54
      var num = UserUtils.findNumberFavPerTwiit(twiitId);                                                              // 55
      if (num > 0) {                                                                                                   // 56
        return "heartFav";                                                                                             // 57
      } else return "heartNoFav";                                                                                      // 58
    }                                                                                                                  // 59
                                                                                                                       //
    return classFav;                                                                                                   // 53
  }(),                                                                                                                 // 53
  'numFavorite': function () {                                                                                         // 60
    function numFavorite() {                                                                                           // 60
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                            // 61
      var num = UserUtils.findNumberFavPerTwiit(twiitId);                                                              // 62
      if (num > 0) {                                                                                                   // 63
        return true;                                                                                                   // 64
      } else return false;                                                                                             // 65
    }                                                                                                                  // 66
                                                                                                                       //
    return numFavorite;                                                                                                // 60
  }(),                                                                                                                 // 60
  'numFav': function () {                                                                                              // 67
    function numFav() {                                                                                                // 67
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                            // 68
      var num = UserUtils.findNumberFavPerTwiit(twiitId);                                                              // 69
      return num;                                                                                                      // 70
    }                                                                                                                  // 71
                                                                                                                       //
    return numFav;                                                                                                     // 67
  }()                                                                                                                  // 67
});                                                                                                                    // 9
                                                                                                                       //
Template.twiitPageNew.events({                                                                                         // 74
  'click #btnDismissNotif': function () {                                                                              // 75
    function clickBtnDismissNotif() {                                                                                  // 75
      console.log(arrWithId);                                                                                          // 76
      for (var aux in meteorBabelHelpers.sanitizeForInObject(arrWithId)) {                                             // 77
        var id = arrWithId[aux];                                                                                       // 78
        Notifications.update(id, { $set: { read: true } });                                                            // 79
      }                                                                                                                // 80
      window.location = "/";                                                                                           // 81
    }                                                                                                                  // 82
                                                                                                                       //
    return clickBtnDismissNotif;                                                                                       // 75
  }(),                                                                                                                 // 75
  'click #btnFav': function () {                                                                                       // 83
    function clickBtnFav() {                                                                                           // 83
      var currentUser = Session.get('currentUser');                                                                    // 84
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                                // 85
                                                                                                                       //
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                            //
      var idAux = UserUtils.findTwiitFromNotif(this._id);                                                              // 88
      var userTapFav = UserUtils.findFavsForTwiit(idAux);                                                              // 89
      var arrAux = userTapFav.idUserTapFav;                                                                            // 90
                                                                                                                       //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                       //
      if (arrAux.indexOf(idUser) === -1) {                                                                             // 93
        UserUtils.addFavToTwiit(idAux, idUser);                                                                        // 94
                                                                                                                       //
        var notif = new Object();                                                                                      // 96
        notif._id = idAux;                                                                                             // 97
        notif.typeOfNotif = "fav";                                                                                     // 98
        notif.actorNotif = currentUser;                                                                                // 99
        notif.recepNotif = UserUtils.findUserFromTwiit(idAux);                                                         // 100
                                                                                                                       //
        console.log(notif);                                                                                            // 102
                                                                                                                       //
        Meteor.call('createTwiitNotification', notif);                                                                 // 104
                                                                                                                       //
        $("#" + this._id).addClass("heartFav");                                                                        // 106
        $("#" + this._id).removeClass("heartNoFav");                                                                   // 107
      } else {                                                                                                         // 108
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                                //
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                             //
        //LA OPERACION INVERSA                                                                                         //
        UserUtils.removeFavToTwiit(idAux, idUser);                                                                     // 112
        $("#" + this._id).addClass("heartNoFav");                                                                      // 113
        $("#" + this._id).removeClass("heartFav");                                                                     // 114
      }                                                                                                                // 115
    }                                                                                                                  // 116
                                                                                                                       //
    return clickBtnFav;                                                                                                // 83
  }(),                                                                                                                 // 83
  'click #btnComm': function () {                                                                                      // 117
    function clickBtnComm() {                                                                                          // 117
      var numComment = UserUtils.findNumComment(UserUtils.findTwiitFromNotif(this._id));                               // 118
      //SI EL TWIIT TIENE POR LO MENOS 1 COMENTARIO, ENTONCES REDIRIGIMOS AL USUARIO A                                 //
      //LA RUTA /Comments. SI NO, SE ABRE EL MODAL Y SE PUEDE HACER EL COMENTARIO                                      //
      if (numComment === 0) {                                                                                          // 121
        $("#dialog-NewTwiit").modal();                                                                                 // 122
        Session.set('commentMode', true);                                                                              // 123
        Session.set('idCurrentTwiit', UserUtils.findTwiitFromNotif(this._id));                                         // 124
      }                                                                                                                // 125
    }                                                                                                                  // 126
                                                                                                                       //
    return clickBtnComm;                                                                                               // 117
  }()                                                                                                                  // 117
});                                                                                                                    // 74
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userManagement.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/userManagement.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.userManagement.events({                                                                                       // 1
  'click #signup': function () {                                                                                       // 2
    function clickSignup() {                                                                                           // 2
      var user = {                                                                                                     // 3
        username: $('#signup-nameProfile').val(),                                                                      // 4
        password: $('#signup-password').val(),                                                                         // 5
        profile: {                                                                                                     // 6
          fullname: $('#signup-username').val()                                                                        // 7
        }                                                                                                              // 6
      };                                                                                                               // 3
                                                                                                                       //
      Accounts.createUser(user, function (error) {                                                                     // 11
        if (error) alert(error);                                                                                       // 12
      });                                                                                                              // 13
                                                                                                                       //
      //Creamos el nuevo usuario en DataUser                                                                           //
      var userData = new Object();                                                                                     // 16
      userData.userName = user.profile.fullname;                                                                       // 17
      userData.userNameProfile = user.username;                                                                        // 18
      userData.userImg = "";                                                                                           // 19
      userData.userDescription = "";                                                                                   // 20
                                                                                                                       //
      Meteor.call('insertDataUser', userData);                                                                         // 22
    }                                                                                                                  // 23
                                                                                                                       //
    return clickSignup;                                                                                                // 2
  }(),                                                                                                                 // 2
                                                                                                                       //
  'click #login': function () {                                                                                        // 25
    function clickLogin() {                                                                                            // 25
      var username = $('#login-nameProfile').val();                                                                    // 26
      var password = $('#login-password').val();                                                                       // 27
                                                                                                                       //
      Meteor.loginWithPassword(username, password, function (error) {                                                  // 29
        if (error) alert(error);                                                                                       // 30
      });                                                                                                              // 31
      loggingIn = true;                                                                                                // 32
    }                                                                                                                  // 33
                                                                                                                       //
    return clickLogin;                                                                                                 // 25
  }(),                                                                                                                 // 25
                                                                                                                       //
  'click #recommendationsBtn': function () {                                                                           // 35
    function clickRecommendationsBtn() {                                                                               // 35
      Session.set('recommendations', true);                                                                            // 36
    }                                                                                                                  // 37
                                                                                                                       //
    return clickRecommendationsBtn;                                                                                    // 35
  }()                                                                                                                  // 35
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userProfile.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/userProfile.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.userProfile.onCreated(function () {                                                                           // 1
	currentUserName = this.data.name;                                                                                     // 2
});                                                                                                                    // 3
                                                                                                                       //
Template.userProfile.events({                                                                                          // 5
	'click #logout': function () {                                                                                        // 6
		function clickLogout() {                                                                                             // 6
			Meteor.logout();                                                                                                    // 7
			window.location = "/";                                                                                              // 8
		}                                                                                                                    // 9
                                                                                                                       //
		return clickLogout;                                                                                                  // 6
	}(),                                                                                                                  // 6
	'click #editProfile': function () {                                                                                   // 10
		function clickEditProfile() {                                                                                        // 10
			window.location = "/editProfile/" + currentUserName;                                                                // 11
		}                                                                                                                    // 12
                                                                                                                       //
		return clickEditProfile;                                                                                             // 10
	}()                                                                                                                   // 10
});                                                                                                                    // 5
                                                                                                                       //
Template.userProfile.helpers({                                                                                         // 15
	'dataUserFound': function () {                                                                                        // 16
		function dataUserFound() {                                                                                           // 16
			Meteor.call('findUserData', currentUserName, function (err, res) {                                                  // 17
				Session.set('dataUser', res);                                                                                      // 18
			});                                                                                                                 // 19
                                                                                                                       //
			dataUser = Session.get('dataUser');                                                                                 // 21
			return dataUser;                                                                                                    // 22
		}                                                                                                                    // 23
                                                                                                                       //
		return dataUserFound;                                                                                                // 16
	}(),                                                                                                                  // 16
	'userImgFound': function () {                                                                                         // 24
		function userImgFound() {                                                                                            // 24
			console.log(dataUser);                                                                                              // 25
			if (dataUser.userImg) {                                                                                             // 26
				Meteor.call('findUserImg', dataUser.userImg, function (err, res) {                                                 // 27
					$('#imgCurrentUser').attr("src", res);                                                                            // 28
				});                                                                                                                // 29
			} else {                                                                                                            // 30
				console.log("Imagen test");                                                                                        // 31
				$('#imgCurrentUser').attr("src", "/profileImgTest.png");                                                           // 32
			}                                                                                                                   // 33
		}                                                                                                                    // 34
                                                                                                                       //
		return userImgFound;                                                                                                 // 24
	}(),                                                                                                                  // 24
	'tweets': function () {                                                                                               // 35
		function tweets(username) {                                                                                          // 35
			Meteor.call('tweetsPublish', username, function (err, res) {                                                        // 36
				Session.set('numTweets', res);                                                                                     // 37
			});                                                                                                                 // 38
			return Session.get('numTweets');                                                                                    // 39
		}                                                                                                                    // 40
                                                                                                                       //
		return tweets;                                                                                                       // 35
	}(),                                                                                                                  // 35
	'following': function () {                                                                                            // 41
		function following() {                                                                                               // 41
			Meteor.call('usersFollowings', function (err, res) {                                                                // 42
				Session.set('numFollowings', res);                                                                                 // 43
			});                                                                                                                 // 44
			return Session.get('numFollowings');                                                                                // 45
		}                                                                                                                    // 46
                                                                                                                       //
		return following;                                                                                                    // 41
	}(),                                                                                                                  // 41
	'followers': function () {                                                                                            // 47
		function followers() {                                                                                               // 47
			Meteor.call('usersFollowers', function (err, res) {                                                                 // 48
				Session.set('numFollowers', res);                                                                                  // 49
			});                                                                                                                 // 50
			return Session.get('numFollowers');                                                                                 // 51
		}                                                                                                                    // 52
                                                                                                                       //
		return followers;                                                                                                    // 47
	}(),                                                                                                                  // 47
	'existsSocialNetwork': function () {                                                                                  // 53
		function existsSocialNetwork() {                                                                                     // 53
			var btnSocial = "";                                                                                                 // 54
			if (dataUser.userFb) {                                                                                              // 55
				btnSocial += "<button type='button' class='btn btn-warning btn-circle optionsUserProfile'><i class='fa fa-facebook' style='font-size: 24px;'></i></button>";
			}                                                                                                                   // 57
                                                                                                                       //
			if (dataUser.userInsta) {                                                                                           // 59
				btnSocial += "<button type='button' class='btn btn-warning btn-circle optionsUserProfile'><i class='fa fa-instagram' style='font-size: 24px;'></i></button>";
			}                                                                                                                   // 61
                                                                                                                       //
			if (dataUser.userWhats) {                                                                                           // 63
				btnSocial += "<button type='button' class='btn btn-warning btn-circle optionsUserProfile'><i class='fa fa-whatsapp' style='font-size: 24px;'></i></button>";
			}                                                                                                                   // 65
                                                                                                                       //
			return btnSocial;                                                                                                   // 67
		}                                                                                                                    // 68
                                                                                                                       //
		return existsSocialNetwork;                                                                                          // 53
	}()                                                                                                                   // 53
});                                                                                                                    // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"main.html":["./template.main.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.html                                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.main.js");                                                                        // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.main.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.body.addContent((function() {                                                                                 // 2
  var view = this;                                                                                                     // 3
  return HTML.DIV({                                                                                                    // 4
    class: "row"                                                                                                       // 5
  }, "\n\t\t", Blaze.If(function() {                                                                                   // 6
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 7
  }, function() {                                                                                                      // 8
    return [ "\n\t    \t", Spacebars.include(view.lookupTemplate("navBarTemplate")), "\n\t  \t" ];                     // 9
  }), HTML.Raw("\n\t\t<!--{{> btnFloating}}-->\n\t"));                                                                 // 10
}));                                                                                                                   // 11
Meteor.startup(Template.body.renderToDocument);                                                                        // 12
Meteor.startup(function() {                                                                                            // 13
  var attrs = {"id":"bodyPpal"};                                                                                       // 14
  for (var prop in attrs) {                                                                                            // 15
    document.body.setAttribute(prop, attrs[prop]);                                                                     // 16
  }                                                                                                                    // 17
});                                                                                                                    // 18
                                                                                                                       // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/templating","meteor/reactive-var","./main.html",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});var ReactiveVar;module.import('meteor/reactive-var',{"ReactiveVar":function(v){ReactiveVar=v}});module.import('./main.html');
                                                                                                                       // 2
                                                                                                                       //
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"lib":{"collections":{"collections.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/collections/collections.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Twitts = new Meteor.Collection('twitts');                                                                              // 1
Relationships = new Meteor.Collection('relationships');                                                                // 2
DataUser = new Meteor.Collection('dataUser');                                                                          // 3
Favs = new Meteor.Collection('favs');                                                                                  // 4
Notifications = new Mongo.Collection('notifications');                                                                 // 5
Images = new Mongo.Collection('images');                                                                               // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"router.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/router.js                                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Router.configure({                                                                                                     // 1
	loadingTemplate: 'loading',                                                                                           // 2
	notFoundTemplate: 'notFound'                                                                                          // 3
});                                                                                                                    // 1
                                                                                                                       //
Router.route('/', { name: 'userManagement' });                                                                         // 6
/*SE ACCEDE POR WINDOW.LOCATION*/                                                                                      //
Router.route('/whoToFollow', { name: 'followUsers' });                                                                 // 8
Router.route('/Profile/:username', {                                                                                   // 9
	name: 'userProfile',                                                                                                  // 10
	data: function () {                                                                                                   // 11
		function data() {                                                                                                    // 11
			var user = new Object();                                                                                            // 12
			user.name = this.params.username;                                                                                   // 13
			return user;                                                                                                        // 14
		}                                                                                                                    // 15
                                                                                                                       //
		return data;                                                                                                         // 11
	}()                                                                                                                   // 11
});                                                                                                                    // 9
Router.route('/Notifications/:userName', {                                                                             // 17
	name: 'twiitPageNew',                                                                                                 // 18
	data: function () {                                                                                                   // 19
		function data() {                                                                                                    // 19
			var user = new Object();                                                                                            // 20
			user.name = this.params.userName;                                                                                   // 21
			return user;                                                                                                        // 22
		}                                                                                                                    // 23
                                                                                                                       //
		return data;                                                                                                         // 19
	}()                                                                                                                   // 19
});                                                                                                                    // 17
//Router.route('/Comments', {name: 'twiitCommentPage'});                                                               //
/*SE ACCEDE POR PATHFOR*/                                                                                              //
Router.route('/Comments/:_id', {                                                                                       // 27
	name: 'twiitCommentPage',                                                                                             // 28
	data: function () {                                                                                                   // 29
		function data() {                                                                                                    // 29
			var mode = Session.get('notificationsModeOn');                                                                      // 30
			var idTwiit = new Object();                                                                                         // 31
			idTwiit._id = this.params._id;                                                                                      // 32
                                                                                                                       //
			if (mode) {                                                                                                         // 34
				idTwiit.mode = mode;                                                                                               // 35
			}                                                                                                                   // 36
                                                                                                                       //
			return idTwiit;                                                                                                     // 38
		}                                                                                                                    // 39
                                                                                                                       //
		return data;                                                                                                         // 29
	}()                                                                                                                   // 29
});                                                                                                                    // 27
Router.route('/twiits/:_id', {                                                                                         // 41
	name: 'twiitPage',                                                                                                    // 42
	data: function () {                                                                                                   // 43
		function data() {                                                                                                    // 43
			return this.params;                                                                                                 // 44
		}                                                                                                                    // 45
                                                                                                                       //
		return data;                                                                                                         // 43
	}()                                                                                                                   // 43
});                                                                                                                    // 41
                                                                                                                       //
Router.route('/editProfile/:userName', {                                                                               // 48
	name: 'editProfile',                                                                                                  // 49
	data: function () {                                                                                                   // 50
		function data() {                                                                                                    // 50
			return this.params.userName;                                                                                        // 51
		}                                                                                                                    // 52
                                                                                                                       //
		return data;                                                                                                         // 50
	}()                                                                                                                   // 50
});                                                                                                                    // 48
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userUtils.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/userUtils.js                                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
UserUtils = function UserUtils() {}; //no var in front                                                                 // 1
                                                                                                                       //
UserUtils.findTweets = function (username) {                                                                           // 3
  var currentTweets = Twitts.find({ user: username }).fetch().map(function (data) {                                    // 4
    return data.following;                                                                                             // 5
  });                                                                                                                  // 6
  console.log("Tweets: ");                                                                                             // 7
  console.log(currentTweets);                                                                                          // 8
                                                                                                                       //
  return currentTweets;                                                                                                // 10
};                                                                                                                     // 11
//SIGUIENDO                                                                                                            //
UserUtils.findFollowings = function (username) {                                                                       // 13
  var currentFollowings = Relationships.find({ follower: username }).fetch().map(function (data) {                     // 14
    return data.following;                                                                                             // 15
  });                                                                                                                  // 16
  //console.log("Siguiendo: ");                                                                                        //
  //console.log(currentFollowings);                                                                                    //
                                                                                                                       //
  return currentFollowings;                                                                                            // 20
};                                                                                                                     // 21
//SEGUIDORES                                                                                                           //
UserUtils.findFollowers = function (username) {                                                                        // 23
  var currentFollowers = Relationships.find({ following: username }).fetch().map(function (data) {                     // 24
    return data.following;                                                                                             // 25
  });                                                                                                                  // 26
  //console.log("Seguidores: ");                                                                                       //
  //console.log(currentFollowers);                                                                                     //
                                                                                                                       //
  return currentFollowers;                                                                                             // 30
};                                                                                                                     // 31
                                                                                                                       //
UserUtils.findNotifications = function (username) {                                                                    // 33
  return Notifications.find({ recepNotif: username, read: false, isOwnTwiit: false }, { sort: { twiitTimeStamp: -1 } });
};                                                                                                                     // 35
                                                                                                                       //
UserUtils.findOneNotification = function (username) {                                                                  // 37
  return Notifications.findOne({ recepNotif: username, read: false, isOwnTwiit: false }, { sort: { twiitTimeStamp: -1 } });
};                                                                                                                     // 39
                                                                                                                       //
UserUtils.findNumberNotif = function (username) {                                                                      // 41
  return Notifications.find({ recepNotif: username, read: false, isOwnTwiit: false }).count();                         // 42
};                                                                                                                     // 43
                                                                                                                       //
UserUtils.findNumberFavPerTwiit = function (idTwiit) {                                                                 // 45
  var twiitNumFav = Twitts.findOne({ _id: idTwiit }).numFav;                                                           // 46
  return twiitNumFav;                                                                                                  // 47
};                                                                                                                     // 48
                                                                                                                       //
UserUtils.findFavsForTwiit = function (id) {                                                                           // 50
  return Favs.findOne({ idTwiit: id });                                                                                // 51
};                                                                                                                     // 52
                                                                                                                       //
UserUtils.addFavToTwiit = function (id, idUser) {                                                                      // 54
  var resultToUpdate = false;                                                                                          // 55
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT                 //
  var favObject = UserUtils.findFavsForTwiit(id);                                                                      // 57
                                                                                                                       //
  if (!favObject) {                                                                                                    // 59
    //console.log("No tiene FAVS");                                                                                    //
                                                                                                                       //
  } else {                                                                                                             // 62
      var arrAux = favObject.idUserTapFav;                                                                             // 63
      var idFav = favObject._id;                                                                                       // 64
                                                                                                                       //
      arrAux.push(idUser);                                                                                             // 66
      var num = UserUtils.findNumberFavPerTwiit(id);                                                                   // 67
      num++;                                                                                                           // 68
                                                                                                                       //
      //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                                        //
      res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                                    // 71
      resT = Twitts.update(id, { $set: { numFav: num } });                                                             // 72
                                                                                                                       //
      //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                                             //
      if (res && resT) {                                                                                               // 75
        resultToUpdate = true;                                                                                         // 76
      }                                                                                                                // 77
    }                                                                                                                  // 78
                                                                                                                       //
  return resultToUpdate;                                                                                               // 80
};                                                                                                                     // 81
                                                                                                                       //
UserUtils.removeFavToTwiit = function (id, idUser) {                                                                   // 83
  var resultToUpdate = false;                                                                                          // 84
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT                 //
  var favObject = UserUtils.findFavsForTwiit(id);                                                                      // 86
  var arrAux = favObject.idUserTapFav;                                                                                 // 87
  var idFav = favObject._id;                                                                                           // 88
                                                                                                                       //
  //HAY QUE AVERIGUAR LA POSICION DEL idUser DENTRO DEL ARRAY DE LA BBDD                                               //
  var posIdUser = arrAux.indexOf(idUser);                                                                              // 91
  //AHORA ELIMINAMOS EL ELEMENTO ASOCIADO A ESA POSICION                                                               //
  delete arrAux[posIdUser];                                                                                            // 93
                                                                                                                       //
  var num = UserUtils.findNumberFavPerTwiit(id);                                                                       // 95
  num--;                                                                                                               // 96
                                                                                                                       //
  //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                                            //
  res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                                        // 99
  resT = Twitts.update(id, { $set: { numFav: num } });                                                                 // 100
                                                                                                                       //
  //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                                                 //
  if (res && resT) {                                                                                                   // 103
    resultToUpdate = true;                                                                                             // 104
  }                                                                                                                    // 105
                                                                                                                       //
  return resultToUpdate;                                                                                               // 107
};                                                                                                                     // 108
                                                                                                                       //
UserUtils.findTwiitFromNotif = function (id) {                                                                         // 110
  var twiitId = Notifications.findOne(id).twiitId;                                                                     // 111
  return twiitId;                                                                                                      // 112
};                                                                                                                     // 113
                                                                                                                       //
UserUtils.findNumComment = function (idTweet) {                                                                        // 115
  return Twitts.findOne({ _id: idTweet }).numComment;                                                                  // 116
};                                                                                                                     // 117
                                                                                                                       //
//PARA MOSTRAR NOTIFICACIONES EN EL NAVEGADOR WEB                                                                      //
UserUtils.createNotifToBrowser = function (typeNotif, userName) {                                                      // 120
  if (Notification) {                                                                                                  // 121
    if (Notification.permission !== "granted") {                                                                       // 122
      Notification.requestPermission();                                                                                // 123
    }                                                                                                                  // 124
    var title = "TwiitClone";                                                                                          // 125
    var bodyNotif = "";                                                                                                // 126
                                                                                                                       //
    if (typeNotif === "fav") {                                                                                         // 128
      bodyNotif = "El usuario " + userName + " ha dado fav a un twiit tuyo";                                           // 129
    } else if (typeNotif === "comment") {                                                                              // 130
      bodyNotif = "El usuario " + userName + " ha comentado un twiit tuyo";                                            // 131
    } else if (typeNotif === "twiit") {                                                                                // 132
      bodyNotif = "El usuario " + userName + " ha publicado a un twiit nuevo";                                         // 133
    } else if (typeNotif === "moreNotif") {                                                                            // 134
      bodyNotif = "Tienes muchas Notificaciones";                                                                      // 135
    }                                                                                                                  // 136
                                                                                                                       //
    var extra = { body: bodyNotif };                                                                                   // 138
                                                                                                                       //
    var noti = new Notification(title, extra);                                                                         // 140
                                                                                                                       //
    noti.onclick = function () {                                                                                       // 142
      // Al hacer click                                                                                                //
      window.location = "/Notifications/" + Meteor.user().username;                                                    // 144
    };                                                                                                                 // 145
                                                                                                                       //
    noti.onclose = {                                                                                                   // 147
      // Al cerrar                                                                                                     //
    };                                                                                                                 // 147
                                                                                                                       //
    setTimeout(function () {                                                                                           // 151
      noti.close();                                                                                                    // 151
    }, 5000);                                                                                                          // 151
  }                                                                                                                    // 152
};                                                                                                                     // 153
                                                                                                                       //
UserUtils.findUserFromTwiit = function (twiitId) {                                                                     // 155
  return Twitts.findOne({ _id: twiitId }).user;                                                                        // 156
};                                                                                                                     // 157
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".scss",".css"]});
require("./client/partialTemplates/template.editProfile.js");
require("./client/partialTemplates/template.followUsers.js");
require("./client/partialTemplates/template.loading.js");
require("./client/partialTemplates/template.navBarTemplate.js");
require("./client/partialTemplates/template.not_found.js");
require("./client/partialTemplates/template.notifications.js");
require("./client/partialTemplates/template.notificationsNew.js");
require("./client/partialTemplates/template.socialNetworkBox.js");
require("./client/partialTemplates/template.tweetBox.js");
require("./client/partialTemplates/template.tweetFeed.js");
require("./client/partialTemplates/template.tweetFeedProfile.js");
require("./client/partialTemplates/template.twiitCommentPage.js");
require("./client/partialTemplates/template.twiitPage.js");
require("./client/partialTemplates/template.twiitPageNew.js");
require("./client/partialTemplates/template.userManagement.js");
require("./client/partialTemplates/template.userProfile.js");
require("./client/template.main.js");
require("./lib/collections/collections.js");
require("./lib/router.js");
require("./lib/userUtils.js");
require("./client/partialTemplates/editProfile.js");
require("./client/partialTemplates/followUsers.js");
require("./client/partialTemplates/navBarTemplate.js");
require("./client/partialTemplates/notifications.js");
require("./client/partialTemplates/notificationsNew.js");
require("./client/partialTemplates/socialNetworkBox.js");
require("./client/partialTemplates/tweetBox.js");
require("./client/partialTemplates/tweetFeed.js");
require("./client/partialTemplates/tweetFeedProfile.js");
require("./client/partialTemplates/twiitCommentPage.js");
require("./client/partialTemplates/twiitPage.js");
require("./client/partialTemplates/twiitPageNew.js");
require("./client/partialTemplates/userManagement.js");
require("./client/partialTemplates/userProfile.js");
require("./client/main.js");