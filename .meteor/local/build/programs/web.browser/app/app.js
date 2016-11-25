var require = meteorInstall({"client":{"partialTemplates":{"template.editLicenses.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.editLicenses.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("editLicenses");                                                                                  // 2
Template["editLicenses"] = new Template("Template.editLicenses", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n  \t\t\n\t  \t\t", HTML.DIV({                                                                          // 8
      class: "sentPet-container"                                                                                       // 9
    }, "\n\t\t\t    ", HTML.DIV({                                                                                      // 10
      class: "panel panel-default col-sm-6 col-md-6 col-lg-6"                                                          // 11
    }, "\n\t\t      \t\t", HTML.DIV({                                                                                  // 12
      class: "panel-body"                                                                                              // 13
    }, "\n\t\t      \t\t\t", Blaze.If(function() {                                                                     // 14
      return Spacebars.call(view.lookup("userWhatsCount"));                                                            // 15
    }, function() {                                                                                                    // 16
      return [ "\n\t\t\t      \t\t\t", HTML.P("Permisos concedidos"), "\n\n\t\t\t      \t\t\t", HTML.DIV({             // 17
        id: "scrollSpy"                                                                                                // 18
      }, "\n\t\t\t\t\t\t\t  \t", HTML.UL({                                                                             // 19
        class: "list-group"                                                                                            // 20
      }, "\n\t\t\t\t\t\t\t  \t", Blaze.Each(function() {                                                               // 21
        return Spacebars.call(view.lookup("responseLicenses"));                                                        // 22
      }, function() {                                                                                                  // 23
        return [ "\n\t\t\t\t\t\t\t\t  ", HTML.A({                                                                      // 24
          href: "#",                                                                                                   // 25
          id: function() {                                                                                             // 26
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "userId"));                                      // 27
          },                                                                                                           // 28
          class: "list-group-item alignTextToCenter"                                                                   // 29
        }, Blaze.View("lookup:..name", function() {                                                                    // 30
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "name"));                                          // 31
        })), "\n\t\t\t\t\t\t\t\t" ];                                                                                   // 32
      }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\n\t\t\t\t\t\t\t", HTML.BUTTON({                              // 33
        id: "remLicense",                                                                                              // 34
        type: "button",                                                                                                // 35
        class: "btn btn-info"                                                                                          // 36
      }, "Eliminar"), "\n\t\t\t\t      \t" ];                                                                          // 37
    }, function() {                                                                                                    // 38
      return [ "\n\t\t\t\t      \t\t", HTML.P("Todavía no has dado permiso a ningun usuario."), "\n\t\t\t\t\t\t" ];    // 39
    }), "\n\t\t\t\t\t"), "\n\t\t    \t"), "\n\t\t  \t"), "\n\t\t\n\t" ];                                               // 40
  }, function() {                                                                                                      // 41
    return [ "\n\t  ", Spacebars.include(view.lookupTemplate("loading")), "\n\t" ];                                    // 42
  });                                                                                                                  // 43
}));                                                                                                                   // 44
                                                                                                                       // 45
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.editProfile.js":function(){

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
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
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
      }), "\n\n                ", HTML.LABEL({                                                                         // 28
        id: "btnCurrentUser",                                                                                          // 29
        class: "btn btn-default btn-lg btn-file iconToEditImg"                                                         // 30
      }, "\n                    ", HTML.SPAN({                                                                         // 31
        class: "glyphicon glyphicon-camera"                                                                            // 32
      }), " \n                    ", HTML.INPUT({                                                                      // 33
        id: "inputFile",                                                                                               // 34
        type: "file",                                                                                                  // 35
        style: "display: none;"                                                                                        // 36
      }), "\n                "), "\n\n              "), "\n              ", HTML.Comment("CONTENIDO DE LA PARTE DERECHA DEL PERFIL DEL USUARIO"), "\n              ", HTML.DIV({
        class: "col-md-6 col-sm-6 col-xs-6",                                                                           // 38
        id: "rightDivCurrentUser"                                                                                      // 39
      }, "\n                ", HTML.Comment("ESTA DESCRIPCION ES GENERICA. HAY QUE CAMBIARLA POR LA QUE APAREZCA EN userData.description"), "\n                ", HTML.TEXTAREA({
        class: "form-control",                                                                                         // 41
        rows: "5",                                                                                                     // 42
        id: "userDescription",                                                                                         // 43
        placeholder: function() {                                                                                      // 44
          return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userDescription"));                   // 45
        }                                                                                                              // 46
      }), "\n              "), "\n            "), "\n\n            ", HTML.DIV({                                       // 47
        class: "currentUserName"                                                                                       // 48
      }, "\n              ", HTML.DIV({                                                                                // 49
        class: "col-md-6 col-sm-6 col-xs-6"                                                                            // 50
      }, "\n                ", HTML.H3(HTML.STRONG(Blaze.View("lookup:dataUserFound.userName", function() {            // 51
        return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userName"));                            // 52
      }))), "\n                ", HTML.H5("@", Blaze.View("lookup:dataUserFound.userNameProfile", function() {         // 53
        return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userNameProfile"));                     // 54
      })), "\n              "), "\n              ", HTML.DIV({                                                         // 55
        class: "col-md-6 col-sm-6 col-xs-6"                                                                            // 56
      }, "\n                ", HTML.BUTTON({                                                                           // 57
        id: "saveChanges",                                                                                             // 58
        class: "btn btn-primary optionsUserProfile",                                                                   // 59
        type: "button"                                                                                                 // 60
      }, "\n                  ", HTML.SPAN({                                                                           // 61
        class: "glyphicon glyphicon-ok"                                                                                // 62
      }), "\n                "), "\n                ", Blaze.If(function() {                                           // 63
        return Spacebars.dataMustache(view.lookup("userHaveSN"), view.lookup("dataUserFound"));                        // 64
      }, function() {                                                                                                  // 65
        return [ "\n                  ", HTML.BUTTON({                                                                 // 66
          class: "btn btn-primary optionsUserProfile",                                                                 // 67
          type: "button",                                                                                              // 68
          style: "margin-right:7px",                                                                                   // 69
          "data-toggle": "modal",                                                                                      // 70
          "data-target": "#dialog-NewSocialNetwork"                                                                    // 71
        }, "\n                    ", HTML.SPAN({                                                                       // 72
          class: "glyphicon glyphicon-plus-sign"                                                                       // 73
        }), "\n                    ", HTML.SPAN({                                                                      // 74
          class: "glyphicon glyphicon-user"                                                                            // 75
        }), "\n                  "), "\n                " ];                                                           // 76
      }, function() {                                                                                                  // 77
        return [ "\n                  ", HTML.BUTTON({                                                                 // 78
          class: "btn btn-primary optionsUserProfile",                                                                 // 79
          type: "button",                                                                                              // 80
          style: "margin-right:7px",                                                                                   // 81
          "data-toggle": "modal",                                                                                      // 82
          "data-target": "#dialog-NewSocialNetwork"                                                                    // 83
        }, "\n                    ", HTML.SPAN({                                                                       // 84
          class: "glyphicon glyphicon-pencil"                                                                          // 85
        }), "\n                    ", HTML.SPAN({                                                                      // 86
          class: "glyphicon glyphicon-user"                                                                            // 87
        }), "\n                  "), "\n                " ];                                                           // 88
      }), "\n              "), "\n            "), "\n\n            ", HTML.DIV({                                       // 89
        class: "modal fade",                                                                                           // 90
        id: "dialog-NewSocialNetwork"                                                                                  // 91
      }, "\n              ", Spacebars.include(view.lookupTemplate("socialNetworkBox")), "\n            "), "\n          "), "\n        "), "\n      "), "\n    " ];
    }), "\n  " ];                                                                                                      // 93
  }, function() {                                                                                                      // 94
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 95
  });                                                                                                                  // 96
}));                                                                                                                   // 97
                                                                                                                       // 98
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
  return Blaze.Unless(function() {                                                                                     // 5
    return Spacebars.call(view.lookup("noRender"));                                                                    // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t", HTML.NAV({                                                                                        // 8
      class: "navbar navbar-default"                                                                                   // 9
    }, "\n\t  ", HTML.DIV({                                                                                            // 10
      class: "container-fluid"                                                                                         // 11
    }, "\n\t    ", HTML.Comment(" Brand and toggle get grouped for better mobile display "), "\n\t    ", HTML.DIV({    // 12
      class: "navbar-header"                                                                                           // 13
    }, "\n\t      ", HTML.BUTTON({                                                                                     // 14
      type: "button",                                                                                                  // 15
      id: "btnNewTweet",                                                                                               // 16
      class: "navbar-toggle collapsed",                                                                                // 17
      "data-toggle": "modal",                                                                                          // 18
      "data-target": "#dialog-NewTwiit"                                                                                // 19
    }, "\n\t        ", HTML.SPAN({                                                                                     // 20
      class: "glyphicon glyphicon-pencil"                                                                              // 21
    }), "\n\t      "), "\n\n\t      ", HTML.BUTTON({                                                                   // 22
      type: "button",                                                                                                  // 23
      id: "btnMenuNavBar",                                                                                             // 24
      class: "navbar-toggle collapsed",                                                                                // 25
      "data-toggle": "collapse",                                                                                       // 26
      "data-target": "#bs-example-navbar-collapse-1",                                                                  // 27
      "aria-expanded": "false"                                                                                         // 28
    }, "\n      \t\t", HTML.SPAN({                                                                                     // 29
      class: "sr-only"                                                                                                 // 30
    }, "Toggle navigation"), "\n      \t\t", HTML.SPAN({                                                               // 31
      class: "glyphicon glyphicon-tasks"                                                                               // 32
    }), "\n      \t\t", Blaze.If(function() {                                                                          // 33
      return Spacebars.call(view.lookup("notificationCount"));                                                         // 34
    }, function() {                                                                                                    // 35
      return [ "\n      \t\t\t", Blaze.Unless(function() {                                                             // 36
        return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                                 // 37
      }, function() {                                                                                                  // 38
        return [ "\n\t\t      \t\t", HTML.SPAN({                                                                       // 39
          class: "badge badge-notify"                                                                                  // 40
        }, Blaze.View("lookup:notificationCount", function() {                                                         // 41
          return Spacebars.mustache(view.lookup("notificationCount"));                                                 // 42
        })), "\n      \t\t\t" ];                                                                                       // 43
      }), "\n      \t\t" ];                                                                                            // 44
    }, function() {                                                                                                    // 45
      return [ "\n      \t\t\t", Blaze.Unless(function() {                                                             // 46
        return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                                 // 47
      }, function() {                                                                                                  // 48
        return [ "\n\t\t      \t\t", HTML.SPAN({                                                                       // 49
          class: "badge badge-notify whatsBadge"                                                                       // 50
        }, Blaze.View("lookup:whatsNotifCount", function() {                                                           // 51
          return Spacebars.mustache(view.lookup("whatsNotifCount"));                                                   // 52
        })), "\n      \t\t\t" ];                                                                                       // 53
      }), "\n\t\t    " ];                                                                                              // 54
    }), "\n    \t  "), "\n    \t  ", HTML.IMG({                                                                        // 55
      id: "imgLogTwiiterClone",                                                                                        // 56
      src: "/imgLogTwiiterClone.png",                                                                                  // 57
      class: "img-responsive navbar-brand"                                                                             // 58
    }), "\n\t    "), "\n\n\t    ", HTML.DIV({                                                                          // 59
      class: "modal fade",                                                                                             // 60
      id: "dialog-NewTwiit"                                                                                            // 61
    }, "\n\t    \t", Spacebars.include(view.lookupTemplate("tweetBox")), "\n\t    "), "\n\n\t\t", HTML.Comment("PARTE DERECHA DE LA BARRA DE NAVEGACION"), "\n\t    ", HTML.DIV({
      class: "collapse navbar-collapse",                                                                               // 63
      id: "bs-example-navbar-collapse-1"                                                                               // 64
    }, "\n\t      ", HTML.UL({                                                                                         // 65
      id: "dropDownMenu",                                                                                              // 66
      class: "nav navbar-nav navbar-right"                                                                             // 67
    }, "\n\n\t      \t", Blaze.If(function() {                                                                         // 68
      return Spacebars.call(view.lookup("whatsAppReq"));                                                               // 69
    }, function() {                                                                                                    // 70
      return [ "\n\t      \t", HTML.LI({                                                                               // 71
        id: "whatsNotif"                                                                                               // 72
      }, "\n\t            ", Spacebars.include(view.lookupTemplate("whatsAppNotif")), "\n\t      \t"), "\n\t      \t" ];
    }), "\n\n\t      \t", HTML.LI("\n\t            ", Spacebars.include(view.lookupTemplate("notificationsNew")), "\n\t      \t"), "\n\t      \t\n\t        ", HTML.LI("\n\t        \t", HTML.A({
      href: "/whoToFollow",                                                                                            // 75
      id: "recommendationsBtn"                                                                                         // 76
    }, "\n\t        \t\t", HTML.SPAN({                                                                                 // 77
      class: "glyphicon glyphicon-search"                                                                              // 78
    }), "\n\t        \t"), "\n\t        "), "\n\t        ", HTML.LI("\n\t        \t", Blaze.Unless(function() {        // 79
      return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                                   // 80
    }, function() {                                                                                                    // 81
      return [ "\n\t\t\t  \t\t", HTML.A({                                                                              // 82
        id: "btnNewTwiit",                                                                                             // 83
        type: "button",                                                                                                // 84
        href: "#",                                                                                                     // 85
        class: "navbar-btn",                                                                                           // 86
        "data-toggle": "modal",                                                                                        // 87
        "data-target": "#dialog-NewTwiit"                                                                              // 88
      }, "\n\t\t\t        \t", HTML.SPAN({                                                                             // 89
        class: "glyphicon glyphicon-pencil"                                                                            // 90
      }), "\n\t\t\t      \t"), "\n\t\t\t  \t" ];                                                                       // 91
    }), "\n\t        "), "\n\t        ", HTML.LI("\n              ", HTML.Comment("A MODO DE EJEMPLO, VAMOS A UTILIZAR UNO GENERICO PARA QUE CARGUE EN CUALQUIER USUARIO"), "\n              ", HTML.IMG({
      id: "imgProfile",                                                                                                // 93
      src: function() {                                                                                                // 94
        return Spacebars.mustache(view.lookup("userImgFound"));                                                        // 95
      },                                                                                                               // 96
      class: "img-responsive"                                                                                          // 97
    }), "\n\t        "), "\n\t      "), "\n\t    "), "\n\t  "), "\n\t"), "\n\t" ];                                     // 98
  });                                                                                                                  // 99
}));                                                                                                                   // 100
                                                                                                                       // 101
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
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", HTML.A({                                                                                        // 8
      id: "linkToNotif",                                                                                               // 9
      class: "dropdown-toggle",                                                                                        // 10
      "data-toggle": "dropdown",                                                                                       // 11
      role: "button",                                                                                                  // 12
      "aria-haspopup": "true",                                                                                         // 13
      "aria-expanded": "false"                                                                                         // 14
    }, "\n    ", HTML.Comment("Notificaciones"), "\n    ", HTML.SPAN({                                                 // 15
      class: "glyphicon glyphicon-inbox"                                                                               // 16
    }), "\n\n      ", Blaze.If(function() {                                                                            // 17
      return Spacebars.call(view.lookup("notificationCount"));                                                         // 18
    }, function() {                                                                                                    // 19
      return [ "\n        ", Blaze.If(function() {                                                                     // 20
        return Spacebars.call(view.lookup("modeDisplay"));                                                             // 21
      }, function() {                                                                                                  // 22
        return [ "\n          ", HTML.SPAN({                                                                           // 23
          class: "badge badge-inverse"                                                                                 // 24
        }, Blaze.View("lookup:notificationCount", function() {                                                         // 25
          return Spacebars.mustache(view.lookup("notificationCount"));                                                 // 26
        })), "\n        " ];                                                                                           // 27
      }, function() {                                                                                                  // 28
        return [ "\n          ", Blaze.If(function() {                                                                 // 29
          return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                               // 30
        }, function() {                                                                                                // 31
          return [ "\n            ", HTML.SPAN({                                                                       // 32
            class: "badge badge-inverse"                                                                               // 33
          }, Blaze.View("lookup:notificationCount", function() {                                                       // 34
            return Spacebars.mustache(view.lookup("notificationCount"));                                               // 35
          })), "\n          " ];                                                                                       // 36
        }), "\n        " ];                                                                                            // 37
      }), "\n      " ];                                                                                                // 38
    }), "\n\n    "), "\n    ", Blaze.Unless(function() {                                                               // 39
      return Spacebars.call(view.lookup("notificationCount"));                                                         // 40
    }, function() {                                                                                                    // 41
      return [ "\n    ", HTML.UL({                                                                                     // 42
        class: "notification dropdown-menu dropdown-menu-center"                                                       // 43
      }, "\n      ", HTML.LI(HTML.SPAN("No Notifications")), "\n    "), "\n    " ];                                    // 44
    }), "\n  " ];                                                                                                      // 45
  }, function() {                                                                                                      // 46
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 47
  });                                                                                                                  // 48
}));                                                                                                                   // 49
                                                                                                                       // 50
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.pageNotFound.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.pageNotFound.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("pageNotFound");                                                                                  // 2
Template["pageNotFound"] = new Template("Template.pageNotFound", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.Raw("<h1>La página a la que se intenta acceder no existe</h1>");                                         // 5
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.removeProfile.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.removeProfile.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("removeProfile");                                                                                 // 2
Template["removeProfile"] = new Template("Template.removeProfile", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", HTML.DIV({                                                                                      // 8
      class: "removeProfile-container"                                                                                 // 9
    }, "\n      ", HTML.DIV({                                                                                          // 10
      class: "panel panel-default col-sm-6 col-md-6 col-lg-6"                                                          // 11
    }, "\n        ", HTML.DIV({                                                                                        // 12
      class: "panel-body"                                                                                              // 13
    }, "\n          ", HTML.IMG({                                                                                      // 14
      src: "/emoticonoSad.png",                                                                                        // 15
      class: "img-responsive"                                                                                          // 16
    }), "\n          ", HTML.P("Estas a punto de eliminar completamente tu perfil. ¿Deseas continuar?"), "\n          ", HTML.BUTTON({
      id: "remove",                                                                                                    // 18
      type: "button",                                                                                                  // 19
      class: "btn btn-primary"                                                                                         // 20
    }, "\n            ", HTML.I({                                                                                      // 21
      class: "glyphicon glyphicon-ok-circle"                                                                           // 22
    }), "\n          "), "\n          ", HTML.BUTTON({                                                                 // 23
      id: "noRemove",                                                                                                  // 24
      type: "button",                                                                                                  // 25
      class: "btn btn-danger"                                                                                          // 26
    }, "\n            ", HTML.I({                                                                                      // 27
      class: "glyphicon glyphicon-remove-circle"                                                                       // 28
    }), "\n          "), "\n        "), "\n      "), "\n    "), "\n  " ];                                              // 29
  }, function() {                                                                                                      // 30
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 31
  });                                                                                                                  // 32
}));                                                                                                                   // 33
                                                                                                                       // 34
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.sendRequest.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.sendRequest.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("sendRequest");                                                                                   // 2
Template["sendRequest"] = new Template("Template.sendRequest", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n  \t\t", HTML.DIV({                                                                                    // 8
      class: "sentPet-container"                                                                                       // 9
    }, "\n\t\t    ", HTML.DIV({                                                                                        // 10
      class: "panel panel-default col-sm-6 col-md-6 col-lg-6"                                                          // 11
    }, "\n\t      \t\t", HTML.DIV({                                                                                    // 12
      class: "panel-body"                                                                                              // 13
    }, "\n\t  \t\t\t\t", HTML.Comment('<img src="/emoticonoSad.png" class="img-responsive">'), "\n\t\t          \t", HTML.P("Se va a enviar una petición de WhatsApp a ", Blaze.View("lookup:userNameToSentPet", function() {
      return Spacebars.mustache(view.lookup("userNameToSentPet"));                                                     // 15
    }), ". ¿Deseas continuar?"), "\n\t\t          \t", HTML.BUTTON({                                                   // 16
      id: "sent",                                                                                                      // 17
      type: "button",                                                                                                  // 18
      class: "btn btn-primary"                                                                                         // 19
    }, "\n\t\t            \t", HTML.I({                                                                                // 20
      class: "glyphicon glyphicon-ok-circle"                                                                           // 21
    }), "\n\t\t          \t"), "\n\t\t          \t", HTML.BUTTON({                                                     // 22
      id: "noSent",                                                                                                    // 23
      type: "button",                                                                                                  // 24
      class: "btn btn-danger"                                                                                          // 25
    }, "\n\t\t            \t", HTML.I({                                                                                // 26
      class: "glyphicon glyphicon-remove-circle"                                                                       // 27
    }), "\n\t\t         \t"), "\n\t\t      \t"), "\n\t    \t"), "\n\t  \t"), "\n\t" ];                                 // 28
  }, function() {                                                                                                      // 29
    return [ "\n\t  ", Spacebars.include(view.lookupTemplate("loading")), "\n\t" ];                                    // 30
  });                                                                                                                  // 31
}));                                                                                                                   // 32
                                                                                                                       // 33
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.showSocialNetwork.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.showSocialNetwork.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("showSocialNetwork");                                                                             // 2
Template["showSocialNetwork"] = new Template("Template.showSocialNetwork", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n  \t\t", HTML.DIV({                                                                                    // 8
      class: "sentPet-container"                                                                                       // 9
    }, "\n\t\t    ", HTML.DIV({                                                                                        // 10
      class: "panel panel-default col-sm-6 col-md-6 col-lg-6"                                                          // 11
    }, "\n\t      \t\t", HTML.DIV({                                                                                    // 12
      class: "panel-body"                                                                                              // 13
    }, "\n\t      \t\t\t", Blaze.Unless(function() {                                                                   // 14
      return Spacebars.call(view.lookup("showProfileOtherUser"));                                                      // 15
    }, function() {                                                                                                    // 16
      return [ "\n\t\t  \t\t\t\t", HTML.Comment('<img src="/emoticonoSad.png" class="img-responsive">'), "\n\t\t\t          \t", HTML.P("Se va a enviar una petición de WhatsApp a ", Blaze.View("lookup:userNameToSentPet", function() {
        return Spacebars.mustache(view.lookup("userNameToSentPet"));                                                   // 18
      }), ". ¿Deseas continuar?"), "\n\t\t\t          \t", HTML.BUTTON({                                               // 19
        id: "sent",                                                                                                    // 20
        type: "button",                                                                                                // 21
        class: "btn btn-primary"                                                                                       // 22
      }, "\n\t\t\t            \t", HTML.I({                                                                            // 23
        class: "glyphicon glyphicon-ok-circle"                                                                         // 24
      }), "\n\t\t\t          \t"), "\n\t\t\t          \t", HTML.BUTTON({                                               // 25
        id: "noSent",                                                                                                  // 26
        type: "button",                                                                                                // 27
        class: "btn btn-danger"                                                                                        // 28
      }, "\n\t\t\t            \t", HTML.I({                                                                            // 29
        class: "glyphicon glyphicon-remove-circle"                                                                     // 30
      }), "\n\t\t\t         \t"), "\n\t\t         \t" ];                                                               // 31
    }), "\n\t\t      \t"), "\n\t    \t"), "\n\t  \t"), "\n\t" ];                                                       // 32
  }, function() {                                                                                                      // 33
    return [ "\n\t  ", Spacebars.include(view.lookupTemplate("loading")), "\n\t" ];                                    // 34
  });                                                                                                                  // 35
}));                                                                                                                   // 36
                                                                                                                       // 37
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
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n  \t\t", HTML.DIV({                                                                                    // 8
      class: "tweetbox-container"                                                                                      // 9
    }, "\n\t\t    ", HTML.DIV({                                                                                        // 10
      class: "panel panel-default tweetbox col-md-6"                                                                   // 11
    }, "\n\t\t      ", HTML.DIV({                                                                                      // 12
      class: "panel-body"                                                                                              // 13
    }, "\n\t\t\t", HTML.Comment(" CONTAINER TO ADD NEW SOCIAL NETWORK "), "\n\t\t\t\t", HTML.FORM({                    // 14
      role: "form",                                                                                                    // 15
      class: "row"                                                                                                     // 16
    }, "\n\t\t\t\t", Blaze.If(function() {                                                                             // 17
      return Spacebars.call(view.lookup("modeAddNewSN"));                                                              // 18
    }, function() {                                                                                                    // 19
      return [ "\n\t\t\t\t\t", HTML.H3(Blaze.View("lookup:modeAddNewSN.messageMode", function() {                      // 20
        return Spacebars.mustache(Spacebars.dot(view.lookup("modeAddNewSN"), "messageMode"));                          // 21
      })), "\n\t\t\t\t\t", HTML.DIV({                                                                                  // 22
        class: "col-lg-6",                                                                                             // 23
        id: "containerInputs"                                                                                          // 24
      }, "\n\t\t\t\t\t", Blaze.Each(function() {                                                                       // 25
        return Spacebars.call(view.lookup("contentToAppend"));                                                         // 26
      }, function() {                                                                                                  // 27
        return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                          // 28
          class: "input-group",                                                                                        // 29
          id: function() {                                                                                             // 30
            return [ "inputGroup", Spacebars.mustache(Spacebars.dot(view.lookup("."), "id")) ];                        // 31
          },                                                                                                           // 32
          style: "margin-bottom: 10px;"                                                                                // 33
        }, "\n\t\t\t          \t\t", HTML.DIV({                                                                        // 34
          class: "input-group-btn"                                                                                     // 35
        }, "\n\t\t\t          \t\t\t", HTML.BUTTON({                                                                   // 36
          id: function() {                                                                                             // 37
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                          // 38
          },                                                                                                           // 39
          type: "button",                                                                                              // 40
          class: "btn btn-default btnOptionsSN",                                                                       // 41
          "aria-haspopup": "true",                                                                                     // 42
          "aria-expanded": "false"                                                                                     // 43
        }, Blaze.View("lookup:..valueBtn", function() {                                                                // 44
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "valueBtn"));                                      // 45
        })), "\n\t\t\t          \t\t"), "\n\n\t\t\t          \t\t", HTML.INPUT({                                       // 46
          required: "",                                                                                                // 47
          id: function() {                                                                                             // 48
            return [ "input", Spacebars.mustache(Spacebars.dot(view.lookup("."), "id")) ];                             // 49
          },                                                                                                           // 50
          type: "text",                                                                                                // 51
          class: "form-control inputSN",                                                                               // 52
          "aria-label": "...",                                                                                         // 53
          placeholder: function() {                                                                                    // 54
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "placeholder"));                                 // 55
          }                                                                                                            // 56
        }), "\n\n\t\t\t          \t\t", HTML.BUTTON({                                                                  // 57
          id: function() {                                                                                             // 58
            return [ "clearDataUser", Spacebars.mustache(Spacebars.dot(view.lookup("."), "id")) ];                     // 59
          },                                                                                                           // 60
          type: "button",                                                                                              // 61
          class: "btn btn-danger",                                                                                     // 62
          "aria-haspopup": "true",                                                                                     // 63
          "aria-expanded": "false"                                                                                     // 64
        }, "\n\t\t\t          \t\t\t", HTML.SPAN({                                                                     // 65
          id: function() {                                                                                             // 66
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                          // 67
          },                                                                                                           // 68
          class: "glyphicon glyphicon-remove"                                                                          // 69
        }), "\n\t\t\t      \t\t\t"), "\n\t\t\t          \t"), "\n\t\t\t        " ];                                    // 70
      }), "\n\t\t\t\t\t"), HTML.Comment(" /.col-lg-6 "), "\n\t\t\t\t" ];                                               // 71
    }), "\n\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t", Blaze.If(function() {                                               // 72
      return Spacebars.call(view.lookup("userHaveSN"));                                                                // 73
    }, function() {                                                                                                    // 74
      return [ "\n\t\t\t\t\t\t  \t", HTML.BUTTON({                                                                     // 75
        id: "btnNewSN",                                                                                                // 76
        class: "btn btn-primary",                                                                                      // 77
        type: "button"                                                                                                 // 78
      }, "\n\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                             // 79
        class: "glyphicon glyphicon-plus-sign"                                                                         // 80
      }), "\n\t\t\t\t  \t\t  \t"), "\n\t\t\t\t  \t\t" ];                                                               // 81
    }), "\n\t\t\t\t  \t\t", HTML.Comment('\n\t\t\t\t  \t\tHAY QUE VER COMO PODER BLOQUEAR EL RECARGA DE PAGINA QUE PROVOCA EL SUBMIT\n\t\t\t\t  \t\tOTRA OPCION ES IMPLEMENTAR EL MENSAJE EMERGENTE: "Completa este campo" QUE HTML5\n\t\t\t\t  \t\tNOS OFRECE CON LA ETIQUETA required PARA PRESCINDIR DE LA PROPIEDAD SUBMIT DEL BOTON\n\t\t\t\t  \t\t'), "\n\t\t\t  \t\t  \t", HTML.BUTTON({
      id: "saveData",                                                                                                  // 83
      class: "btn btn-primary",                                                                                        // 84
      type: "button"                                                                                                   // 85
    }, "\n\t\t\t\t\t\t\t", HTML.SPAN({                                                                                 // 86
      class: "glyphicon glyphicon-ok"                                                                                  // 87
    }), "\n\t\t\t  \t\t  \t"), "\n\n\t\t\t  \t\t  \t", HTML.DIV({                                                      // 88
      class: "msgFieldEmpty",                                                                                          // 89
      hidden: "true"                                                                                                   // 90
    }, "\n\t\t\t  \t\t  \t\t", HTML.SPAN(HTML.I("Completa los campos vacíos")), "\n\t\t\t  \t\t  \t"), "\n\t\t\t  \t\t"), "\n\t\t\t\t"), "\n\t\t      "), "\n\t\t    "), "\n\t\t  "), "\n\t" ];
  }, function() {                                                                                                      // 92
    return [ "\n\t  ", Spacebars.include(view.lookupTemplate("loading")), "\n\t" ];                                    // 93
  });                                                                                                                  // 94
}));                                                                                                                   // 95
                                                                                                                       // 96
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
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", Blaze.View("lookup:infoNotif", function() {                                                     // 8
      return Spacebars.mustache(view.lookup("infoNotif"));                                                             // 9
    }), "\n    ", HTML.DIV({                                                                                           // 10
      class: "tweetfeed-container"                                                                                     // 11
    }, "\n      ", HTML.DIV({                                                                                          // 12
      class: "panel panel-default tweetfeed"                                                                           // 13
    }, "\n        ", HTML.DIV({                                                                                        // 14
      class: "panel-body"                                                                                              // 15
    }, "\n          ", HTML.Comment(" Texto para el contenido del Twitt "), "\n          ", Blaze.Each(function() {    // 16
      return Spacebars.call(view.lookup("tweetMessage"));                                                              // 17
    }, function() {                                                                                                    // 18
      return [ "\n            ", HTML.DIV({                                                                            // 19
        class: "panel panel-info"                                                                                      // 20
      }, HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n              ", HTML.DIV({               // 21
        class: "panel-heading"                                                                                         // 22
      }, HTML.Comment("Cabecera del twiit"), "\n                ", HTML.H3({                                           // 23
        class: "panel-title"                                                                                           // 24
      }, "\n                  ", HTML.A({                                                                              // 25
        href: function() {                                                                                             // 26
          return Spacebars.mustache(view.lookup("pathFor"), "userProfile", Spacebars.kw({                              // 27
            username: Spacebars.dot(view.lookup("."), "user")                                                          // 28
          }));                                                                                                         // 29
        }                                                                                                              // 30
      }, "@", Blaze.View("lookup:..user", function() {                                                                 // 31
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                            // 32
      })), " \n                  ", HTML.SPAN({                                                                        // 33
        class: "glyphicon glyphicon-triangle-right",                                                                   // 34
        "aria-hidden": "true"                                                                                          // 35
      }), "\n                  ", Blaze.View("lookup:convertDateTime", function() {                                    // 36
        return Spacebars.mustache(view.lookup("convertDateTime"));                                                     // 37
      }), "\n                "), "\n              "), HTML.Comment("Cabecera del twiit"), "\n              ", HTML.DIV({
        class: "panel-body"                                                                                            // 39
      }, HTML.Comment("Contenido del twiit"), "\n                ", Blaze.View("lookup:..message", function() {        // 40
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                         // 41
      }), "\n              "), HTML.Comment("Contenido del twiit"), "\n\n              ", HTML.DIV({                   // 42
        class: "btn-group",                                                                                            // 43
        role: "group",                                                                                                 // 44
        id: "btnGroupInteractions"                                                                                     // 45
      }, "\n                ", HTML.A({                                                                                // 46
        class: "btn btn-secondary"                                                                                     // 47
      }, "\n                  ", HTML.SPAN({                                                                           // 48
        class: "glyphicon glyphicon-bullhorn"                                                                          // 49
      }), "\n                "), "\n                ", Blaze.If(function() {                                           // 50
        return Spacebars.call(view.lookup("numComment"));                                                              // 51
      }, function() {                                                                                                  // 52
        return [ "\n                  ", HTML.A({                                                                      // 53
          href: function() {                                                                                           // 54
            return Spacebars.mustache(view.lookup("pathFor"), "twiitCommentPage", Spacebars.kw({                       // 55
              _id: Spacebars.dot(view.lookup("."), "_id")                                                              // 56
            }));                                                                                                       // 57
          },                                                                                                           // 58
          class: "btn"                                                                                                 // 59
        }, "\n                    ", HTML.SPAN({                                                                       // 60
          class: "glyphicon glyphicon-comment"                                                                         // 61
        }), "\n                    ", HTML.SPAN({                                                                      // 62
          class: "badge badge-numFav "                                                                                 // 63
        }, Blaze.View("lookup:..numComment", function() {                                                              // 64
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                    // 65
        })), "\n                  "), "\n                " ];                                                          // 66
      }, function() {                                                                                                  // 67
        return [ "\n                  ", HTML.A({                                                                      // 68
          id: "btnComm",                                                                                               // 69
          class: "btn btn-secondary"                                                                                   // 70
        }, "\n                    ", HTML.SPAN({                                                                       // 71
          class: "glyphicon glyphicon-comment"                                                                         // 72
        }), "\n                "), "\n                " ];                                                             // 73
      }), "\n                ", Blaze.If(function() {                                                                  // 74
        return Spacebars.call(view.lookup("numFav"));                                                                  // 75
      }, function() {                                                                                                  // 76
        return [ "\n                ", HTML.A({                                                                        // 77
          id: "btnFav",                                                                                                // 78
          class: "btn btn-secondary"                                                                                   // 79
        }, "\n                  ", HTML.SPAN({                                                                         // 80
          id: function() {                                                                                             // 81
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 82
          },                                                                                                           // 83
          class: function() {                                                                                          // 84
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 85
          }                                                                                                            // 86
        }), "\n                  ", HTML.SPAN({                                                                        // 87
          class: "badge badge-numFav"                                                                                  // 88
        }, Blaze.View("lookup:..numFav", function() {                                                                  // 89
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                        // 90
        })), "\n                "), "\n                " ];                                                            // 91
      }, function() {                                                                                                  // 92
        return [ "\n                  ", HTML.A({                                                                      // 93
          id: "btnFav",                                                                                                // 94
          class: "btn btn-secondary"                                                                                   // 95
        }, "\n                  ", HTML.SPAN({                                                                         // 96
          id: function() {                                                                                             // 97
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 98
          },                                                                                                           // 99
          class: function() {                                                                                          // 100
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 101
          }                                                                                                            // 102
        }), "\n                "), "\n                " ];                                                             // 103
      }), "\n              "), "\n            "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n          " ];
    }), "\n        "), "\n      "), "\n    "), "\n  " ];                                                               // 105
  }, function() {                                                                                                      // 106
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 107
  });                                                                                                                  // 108
}));                                                                                                                   // 109
                                                                                                                       // 110
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
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", HTML.DIV({                                                                                      // 8
      class: "tweetfeed-container"                                                                                     // 9
    }, "\n      ", HTML.DIV({                                                                                          // 10
      class: "panel panel-default tweetfeed"                                                                           // 11
    }, "\n        ", HTML.DIV({                                                                                        // 12
      class: "panel-body"                                                                                              // 13
    }, "\n          ", HTML.Comment(" Texto para el contenido del Twitt "), "\n          ", Blaze.Each(function() {    // 14
      return Spacebars.call(view.lookup("tweetMessageProfile"));                                                       // 15
    }, function() {                                                                                                    // 16
      return [ "\n            ", HTML.DIV({                                                                            // 17
        class: "panel panel-info"                                                                                      // 18
      }, HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n              ", HTML.DIV({               // 19
        class: "panel-heading"                                                                                         // 20
      }, HTML.Comment("Cabecera del twiit"), "\n                ", HTML.H3({                                           // 21
        class: "panel-title userNameProfile",                                                                          // 22
        id: function() {                                                                                               // 23
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                          // 24
        }                                                                                                              // 25
      }, "@", Blaze.View("lookup:..user", function() {                                                                 // 26
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                            // 27
      }), "\n                  ", HTML.SPAN({                                                                          // 28
        class: "glyphicon glyphicon-triangle-right",                                                                   // 29
        "aria-hidden": "true"                                                                                          // 30
      }), "\n                  ", Blaze.View("lookup:convertDateTime", function() {                                    // 31
        return Spacebars.mustache(view.lookup("convertDateTime"));                                                     // 32
      }), "\n                "), "\n              "), HTML.Comment("Cabecera del twiit"), "\n              ", HTML.DIV({
        class: "panel-body"                                                                                            // 34
      }, HTML.Comment("Contenido del twiit"), "\n                ", Blaze.View("lookup:..message", function() {        // 35
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                         // 36
      }), "\n              "), HTML.Comment("Contenido del twiit"), "\n\n              ", HTML.DIV({                   // 37
        class: "btn-group",                                                                                            // 38
        role: "group",                                                                                                 // 39
        id: "btnGroupInteractions"                                                                                     // 40
      }, "\n                ", HTML.A({                                                                                // 41
        class: "btn btn-secondary"                                                                                     // 42
      }, "\n                  ", HTML.SPAN({                                                                           // 43
        class: "glyphicon glyphicon-bullhorn"                                                                          // 44
      }), "\n                "), "\n                ", Blaze.If(function() {                                           // 45
        return Spacebars.call(view.lookup("numComment"));                                                              // 46
      }, function() {                                                                                                  // 47
        return [ "\n                  ", HTML.A({                                                                      // 48
          href: function() {                                                                                           // 49
            return Spacebars.mustache(view.lookup("pathFor"), "twiitCommentPage", Spacebars.kw({                       // 50
              _id: Spacebars.dot(view.lookup("."), "_id")                                                              // 51
            }));                                                                                                       // 52
          },                                                                                                           // 53
          class: "btn btn-secondary"                                                                                   // 54
        }, "\n                    ", HTML.SPAN({                                                                       // 55
          class: "glyphicon glyphicon-comment"                                                                         // 56
        }), "\n                    ", HTML.SPAN({                                                                      // 57
          class: "badge-numFav badge"                                                                                  // 58
        }, Blaze.View("lookup:..numComment", function() {                                                              // 59
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                    // 60
        })), "\n                  "), "\n                " ];                                                          // 61
      }), "\n                ", Blaze.If(function() {                                                                  // 62
        return Spacebars.call(view.lookup("numFav"));                                                                  // 63
      }, function() {                                                                                                  // 64
        return [ "\n                  ", HTML.A({                                                                      // 65
          id: "btnFav",                                                                                                // 66
          class: "btn btn-secondary"                                                                                   // 67
        }, "\n                    ", HTML.SPAN({                                                                       // 68
          id: function() {                                                                                             // 69
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 70
          },                                                                                                           // 71
          class: function() {                                                                                          // 72
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 73
          }                                                                                                            // 74
        }), "\n                    ", HTML.SPAN({                                                                      // 75
          class: "badge badge-numFav"                                                                                  // 76
        }, Blaze.View("lookup:..numFav", function() {                                                                  // 77
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                        // 78
        })), "\n                  "), "\n                " ];                                                          // 79
      }, function() {                                                                                                  // 80
        return [ "\n                  ", HTML.A({                                                                      // 81
          id: "btnFav",                                                                                                // 82
          class: "btn btn-secondary"                                                                                   // 83
        }, "\n                    ", HTML.SPAN({                                                                       // 84
          id: function() {                                                                                             // 85
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 86
          },                                                                                                           // 87
          class: function() {                                                                                          // 88
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 89
          }                                                                                                            // 90
        }), "\n                  "), "\n                " ];                                                           // 91
      }), "\n              "), "\n            "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n          " ];
    }), "\n        "), "\n      "), "\n    "), "\n  " ];                                                               // 93
  }, function() {                                                                                                      // 94
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 95
  });                                                                                                                  // 96
}));                                                                                                                   // 97
                                                                                                                       // 98
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
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", HTML.DIV({                                                                                      // 8
      class: "tweetfeed-container"                                                                                     // 9
    }, "\n      ", HTML.DIV({                                                                                          // 10
      class: "panel panel-default tweetfeed"                                                                           // 11
    }, "\n        ", HTML.DIV({                                                                                        // 12
      class: "panel-body"                                                                                              // 13
    }, "\n          ", HTML.Comment(" Texto para el contenido del Twitt "), "\n          ", Blaze.Each(function() {    // 14
      return Spacebars.call(view.lookup("tweetMessage"));                                                              // 15
    }, function() {                                                                                                    // 16
      return [ "\n            ", HTML.DIV({                                                                            // 17
        class: "panel panel-info"                                                                                      // 18
      }, HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n              ", HTML.DIV({               // 19
        class: "panel-heading"                                                                                         // 20
      }, HTML.Comment("Cabecera del twiit"), "\n                ", HTML.H3({                                           // 21
        class: "panel-title"                                                                                           // 22
      }, "\n                  ", HTML.A({                                                                              // 23
        href: function() {                                                                                             // 24
          return Spacebars.mustache(view.lookup("pathFor"), "userProfile", Spacebars.kw({                              // 25
            username: Spacebars.dot(view.lookup("."), "user")                                                          // 26
          }));                                                                                                         // 27
        }                                                                                                              // 28
      }, "@", Blaze.View("lookup:..user", function() {                                                                 // 29
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                            // 30
      })), " \n                  ", HTML.SPAN({                                                                        // 31
        class: "glyphicon glyphicon-triangle-right",                                                                   // 32
        "aria-hidden": "true"                                                                                          // 33
      }), "\n                  ", Blaze.View("lookup:convertDateTime", function() {                                    // 34
        return Spacebars.mustache(view.lookup("convertDateTime"));                                                     // 35
      }), "\n                "), "\n              "), HTML.Comment("Cabecera del twiit"), "\n              ", HTML.DIV({
        class: "panel-body"                                                                                            // 37
      }, HTML.Comment("Contenido del twiit"), "\n                ", Blaze.View("lookup:..message", function() {        // 38
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                         // 39
      }), "\n              "), HTML.Comment("Contenido del twiit"), "\n\n              ", HTML.DIV({                   // 40
        class: "btn-group",                                                                                            // 41
        role: "group",                                                                                                 // 42
        id: "btnGroupInteractions"                                                                                     // 43
      }, "\n                ", HTML.A({                                                                                // 44
        class: "btn btn-secondary"                                                                                     // 45
      }, "\n                  ", HTML.SPAN({                                                                           // 46
        class: "glyphicon glyphicon-bullhorn"                                                                          // 47
      }), "\n                "), "\n\n                ", HTML.A({                                                      // 48
        id: "btnComm",                                                                                                 // 49
        class: "btn btn-secondary"                                                                                     // 50
      }, "\n                  ", HTML.SPAN({                                                                           // 51
        class: "glyphicon glyphicon-comment"                                                                           // 52
      }), "\n                  ", HTML.SPAN({                                                                          // 53
        class: "badge-numFav badge"                                                                                    // 54
      }, Blaze.View("lookup:..numComment", function() {                                                                // 55
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                      // 56
      })), "\n                "), "\n\n                ", Blaze.If(function() {                                        // 57
        return Spacebars.call(view.lookup("numFav"));                                                                  // 58
      }, function() {                                                                                                  // 59
        return [ "\n                  ", HTML.A({                                                                      // 60
          id: "btnFav",                                                                                                // 61
          class: "btn btn-secondary"                                                                                   // 62
        }, "\n                    ", HTML.SPAN({                                                                       // 63
          id: function() {                                                                                             // 64
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 65
          },                                                                                                           // 66
          class: function() {                                                                                          // 67
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 68
          }                                                                                                            // 69
        }), "\n                    ", HTML.SPAN({                                                                      // 70
          class: "badge badge-numFav"                                                                                  // 71
        }, Blaze.View("lookup:..numFav", function() {                                                                  // 72
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                        // 73
        })), "\n                  "), "\n                " ];                                                          // 74
      }, function() {                                                                                                  // 75
        return [ "\n                  ", HTML.A({                                                                      // 76
          id: "btnFav",                                                                                                // 77
          class: "btn btn-secondary"                                                                                   // 78
        }, "\n                    ", HTML.SPAN({                                                                       // 79
          id: function() {                                                                                             // 80
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 81
          },                                                                                                           // 82
          class: function() {                                                                                          // 83
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 84
          }                                                                                                            // 85
        }), "\n                  "), "\n                " ];                                                           // 86
      }), "\n              "), "\n            "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n          " ];
    }), "\n          ", Blaze.Each(function() {                                                                        // 88
      return Spacebars.call(view.lookup("tweetThatCommentMessage"));                                                   // 89
    }, function() {                                                                                                    // 90
      return [ "\n            ", HTML.DIV({                                                                            // 91
        class: "panel panel-info"                                                                                      // 92
      }, HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n              ", HTML.DIV({               // 93
        class: "panel-heading"                                                                                         // 94
      }, HTML.Comment("Cabecera del twiit"), "\n                ", HTML.H3({                                           // 95
        class: "panel-title"                                                                                           // 96
      }, "@", Blaze.View("lookup:..user", function() {                                                                 // 97
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                            // 98
      }), " \n                  ", HTML.SPAN({                                                                         // 99
        class: "glyphicon glyphicon-triangle-right",                                                                   // 100
        "aria-hidden": "true"                                                                                          // 101
      }), "\n                  ", Blaze.View("lookup:convertDateTime", function() {                                    // 102
        return Spacebars.mustache(view.lookup("convertDateTime"));                                                     // 103
      }), "\n                "), "\n              "), HTML.Comment("Cabecera del twiit"), "\n              ", HTML.DIV({
        class: "panel-body"                                                                                            // 105
      }, HTML.Comment("Contenido del twiit"), "\n                ", Blaze.View("lookup:..message", function() {        // 106
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                         // 107
      }), "\n              "), HTML.Comment("Contenido del twiit"), "\n\n              ", HTML.DIV({                   // 108
        class: "btn-group",                                                                                            // 109
        role: "group",                                                                                                 // 110
        id: "btnGroupInteractions"                                                                                     // 111
      }, "\n                ", HTML.A({                                                                                // 112
        class: "btn btn-secondary"                                                                                     // 113
      }, "\n                  ", HTML.SPAN({                                                                           // 114
        class: "glyphicon glyphicon-bullhorn"                                                                          // 115
      }), "\n                "), "\n                ", Blaze.If(function() {                                           // 116
        return Spacebars.call(view.lookup("numFav"));                                                                  // 117
      }, function() {                                                                                                  // 118
        return [ "\n                ", HTML.A({                                                                        // 119
          id: "btnFav",                                                                                                // 120
          class: "btn btn-secondary"                                                                                   // 121
        }, "\n                  ", HTML.SPAN({                                                                         // 122
          id: function() {                                                                                             // 123
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 124
          },                                                                                                           // 125
          class: function() {                                                                                          // 126
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 127
          }                                                                                                            // 128
        }), "\n                  ", HTML.SPAN({                                                                        // 129
          class: "badge badge-numFav"                                                                                  // 130
        }, Blaze.View("lookup:..numFav", function() {                                                                  // 131
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                        // 132
        })), "\n                "), "\n                " ];                                                            // 133
      }, function() {                                                                                                  // 134
        return [ "\n                  ", HTML.A({                                                                      // 135
          id: "btnFav",                                                                                                // 136
          class: "btn btn-secondary"                                                                                   // 137
        }, "\n                  ", HTML.SPAN({                                                                         // 138
          id: function() {                                                                                             // 139
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 140
          },                                                                                                           // 141
          class: function() {                                                                                          // 142
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 143
          }                                                                                                            // 144
        }), "\n                "), "\n                " ];                                                             // 145
      }), "\n              "), "\n            "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n          " ];
    }), "\n        "), "\n      "), "\n    "), "\n  " ];                                                               // 147
  }, function() {                                                                                                      // 148
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 149
  });                                                                                                                  // 150
}));                                                                                                                   // 151
                                                                                                                       // 152
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
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", HTML.DIV({                                                                                      // 8
      class: "tweetfeed-container"                                                                                     // 9
    }, "\n      ", HTML.DIV({                                                                                          // 10
      class: "panel panel-default tweetfeed"                                                                           // 11
    }, "\n        ", HTML.DIV({                                                                                        // 12
      class: "panel-body"                                                                                              // 13
    }, "\n          ", HTML.Comment(" Texto para el contenido del Twitt "), "\n          ", Blaze.If(function() {      // 14
      return Spacebars.call(view.lookup("countNotifTwiit"));                                                           // 15
    }, function() {                                                                                                    // 16
      return [ "\n            ", Blaze.Each(function() {                                                               // 17
        return Spacebars.call(view.lookup("tweetMessage"));                                                            // 18
      }, function() {                                                                                                  // 19
        return [ "\n              ", HTML.DIV({                                                                        // 20
          class: "panel panel-info"                                                                                    // 21
        }, "\n                ", HTML.DIV({                                                                            // 22
          class: "panel-heading"                                                                                       // 23
        }, "\n                  ", HTML.H3({                                                                           // 24
          class: "panel-title"                                                                                         // 25
        }, "@", Blaze.View("lookup:..twiitNotifUserName", function() {                                                 // 26
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitNotifUserName"));                            // 27
        }), " \n                    ", HTML.SPAN({                                                                     // 28
          class: "glyphicon glyphicon-triangle-right",                                                                 // 29
          "aria-hidden": "true"                                                                                        // 30
        }), "\n                     ", Blaze.View("lookup:convertDateTime", function() {                               // 31
          return Spacebars.mustache(view.lookup("convertDateTime"));                                                   // 32
        }), "\n                   "), "\n                "), "\n                ", HTML.DIV({                          // 33
          class: "panel-body"                                                                                          // 34
        }, "\n                  ", Blaze.View("lookup:..twiitMessage", function() {                                    // 35
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitMessage"));                                  // 36
        }), "\n                "), "\n              "), "\n            " ];                                            // 37
      }), "\n             ", HTML.BUTTON({                                                                             // 38
        class: "btn btn-info pull-right",                                                                              // 39
        type: "button"                                                                                                 // 40
      }, "OK"), "\n          " ];                                                                                      // 41
    }, function() {                                                                                                    // 42
      return [ "\n            ", HTML.DIV({                                                                            // 43
        class: "panel-info"                                                                                            // 44
      }, "\n              ", HTML.P("Oooooooops"), "    \n            "), "\n          " ];                            // 45
    }), "\n        "), "\n      "), "\n    "), "\n  " ];                                                               // 46
  }, function() {                                                                                                      // 47
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 48
  });                                                                                                                  // 49
}));                                                                                                                   // 50
                                                                                                                       // 51
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
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", HTML.DIV({                                                                                      // 8
      class: "tweetfeed-container"                                                                                     // 9
    }, "\n      ", HTML.DIV({                                                                                          // 10
      class: "panel panel-default tweetfeed"                                                                           // 11
    }, "\n        ", HTML.DIV({                                                                                        // 12
      class: "panel-body"                                                                                              // 13
    }, "\n          ", HTML.Comment(" Texto para el contenido del Twitt "), "\n          ", Blaze.If(function() {      // 14
      return Spacebars.call(view.lookup("countNotifTwiit"));                                                           // 15
    }, function() {                                                                                                    // 16
      return [ "\n            ", Blaze.If(function() {                                                                 // 17
        return Spacebars.call(view.lookup("btnShowComm"));                                                             // 18
      }, function() {                                                                                                  // 19
        return [ "\n              ", Blaze.Each(function() {                                                           // 20
          return Spacebars.call(view.lookup("showComments"));                                                          // 21
        }, function() {                                                                                                // 22
          return [ "\n                ", Blaze.View("lookup:saveIdInArr", function() {                                 // 23
            return Spacebars.mustache(view.lookup("saveIdInArr"));                                                     // 24
          }), "\n                ", HTML.DIV({                                                                         // 25
            class: "panel panel-info"                                                                                  // 26
          }, "\n                  ", HTML.DIV({                                                                        // 27
            class: "panel-heading"                                                                                     // 28
          }, "\n                    ", HTML.H3({                                                                       // 29
            class: "panel-title"                                                                                       // 30
          }, "\n                      ", HTML.A({                                                                      // 31
            href: function() {                                                                                         // 32
              return Spacebars.mustache(view.lookup("pathFor"), "userProfile", Spacebars.kw({                          // 33
                username: Spacebars.dot(view.lookup("."), "actorNotif")                                                // 34
              }));                                                                                                     // 35
            }                                                                                                          // 36
          }, "@", Blaze.View("lookup:..actorNotif", function() {                                                       // 37
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "actorNotif"));                                  // 38
          })), " \n                      ", HTML.SPAN({                                                                // 39
            class: "glyphicon glyphicon-triangle-right",                                                               // 40
            "aria-hidden": "true"                                                                                      // 41
          }), "\n                       ", Blaze.View("lookup:convertDateTime", function() {                           // 42
            return Spacebars.mustache(view.lookup("convertDateTime"));                                                 // 43
          }), "\n                     "), "\n                  "), "\n                  ", HTML.DIV({                  // 44
            class: "panel-body"                                                                                        // 45
          }, "\n                    ", Blaze.View("lookup:..twiitMessage", function() {                                // 46
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitMessage"));                                // 47
          }), "\n                  "), "\n                  ", HTML.DIV({                                              // 48
            class: "btn-group",                                                                                        // 49
            role: "group",                                                                                             // 50
            id: "btnGroupInteractions"                                                                                 // 51
          }, "\n                    ", HTML.A({                                                                        // 52
            class: "btn btn-secondary"                                                                                 // 53
          }, "\n                      ", HTML.SPAN({                                                                   // 54
            class: "glyphicon glyphicon-bullhorn"                                                                      // 55
          }), "\n                    "), "\n                    ", Blaze.If(function() {                               // 56
            return Spacebars.call(view.lookup("findNumComment"));                                                      // 57
          }, function() {                                                                                              // 58
            return [ "\n                      ", HTML.A({                                                              // 59
              href: function() {                                                                                       // 60
                return Spacebars.mustache(view.lookup("pathFor"), "twiitCommentPage", Spacebars.kw({                   // 61
                  _id: Spacebars.dot(view.lookup("."), "_id")                                                          // 62
                }));                                                                                                   // 63
              },                                                                                                       // 64
              class: "btn btn-secondary"                                                                               // 65
            }, "\n                        ", HTML.SPAN({                                                               // 66
              class: "glyphicon glyphicon-comment"                                                                     // 67
            }), "\n                        ", HTML.SPAN({                                                              // 68
              class: "badge-numFav badge"                                                                              // 69
            }, Blaze.View("lookup:numComment", function() {                                                            // 70
              return Spacebars.mustache(view.lookup("numComment"));                                                    // 71
            })), "\n                      "), "\n                    " ];                                              // 72
          }, function() {                                                                                              // 73
            return [ "\n                      ", HTML.A({                                                              // 74
              id: "btnComm",                                                                                           // 75
              class: "btn btn-secondary"                                                                               // 76
            }, "\n                      ", HTML.SPAN({                                                                 // 77
              class: "glyphicon glyphicon-comment"                                                                     // 78
            }), "\n                    "), "\n                    " ];                                                 // 79
          }), "\n                    ", Blaze.If(function() {                                                          // 80
            return Spacebars.call(view.lookup("numFavorite"));                                                         // 81
          }, function() {                                                                                              // 82
            return [ "\n                      ", HTML.A({                                                              // 83
              id: "btnFav",                                                                                            // 84
              class: "btn btn-secondary"                                                                               // 85
            }, "\n                        ", HTML.SPAN({                                                               // 86
              id: function() {                                                                                         // 87
                return Spacebars.mustache(view.lookup("idToFavBtn"));                                                  // 88
              },                                                                                                       // 89
              class: function() {                                                                                      // 90
                return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                  // 91
              }                                                                                                        // 92
            }), "\n                        ", HTML.SPAN({                                                              // 93
              class: "badge badge-numFav"                                                                              // 94
            }, Blaze.View("lookup:numFav", function() {                                                                // 95
              return Spacebars.mustache(view.lookup("numFav"));                                                        // 96
            })), "\n                      "), "\n                    " ];                                              // 97
          }, function() {                                                                                              // 98
            return [ "\n                      ", HTML.A({                                                              // 99
              id: "btnFav",                                                                                            // 100
              class: "btn btn-secondary"                                                                               // 101
            }, "\n                        ", HTML.SPAN({                                                               // 102
              id: function() {                                                                                         // 103
                return Spacebars.mustache(view.lookup("idToFavBtn"));                                                  // 104
              },                                                                                                       // 105
              class: function() {                                                                                      // 106
                return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                  // 107
              }                                                                                                        // 108
            }), "\n                      "), "\n                    " ];                                               // 109
          }), "\n                  "), "\n                "), "\n              " ];                                    // 110
        }), "\n              ", Blaze.If(function() {                                                                  // 111
          return Spacebars.call(view.lookup("noCommNotif"));                                                           // 112
        }, function() {                                                                                                // 113
          return [ "\n                ", HTML.P("No tienes comentarios nuevos"), "    \n              " ];             // 114
        }, function() {                                                                                                // 115
          return [ "\n                ", HTML.BUTTON({                                                                 // 116
            id: "dismissCommNotif",                                                                                    // 117
            class: "btn btn-info pull-right btnDismissNotif",                                                          // 118
            type: "button"                                                                                             // 119
          }, "OK"), "\n              " ];                                                                              // 120
        }), "\n            " ];                                                                                        // 121
      }, function() {                                                                                                  // 122
        return [ "\n              ", Blaze.Each(function() {                                                           // 123
          return Spacebars.call(view.lookup("showFavs"));                                                              // 124
        }, function() {                                                                                                // 125
          return [ "\n                ", Blaze.View("lookup:saveIdInArr", function() {                                 // 126
            return Spacebars.mustache(view.lookup("saveIdInArr"));                                                     // 127
          }), "\n                ", HTML.DIV({                                                                         // 128
            class: "panel panel-info"                                                                                  // 129
          }, "\n                  ", HTML.DIV({                                                                        // 130
            class: "panel-heading"                                                                                     // 131
          }, "\n                    ", HTML.H3({                                                                       // 132
            class: "panel-title"                                                                                       // 133
          }, "\n                      ", HTML.A({                                                                      // 134
            href: function() {                                                                                         // 135
              return Spacebars.mustache(view.lookup("pathFor"), "userProfile", Spacebars.kw({                          // 136
                username: Spacebars.dot(view.lookup("."), "actorNotif")                                                // 137
              }));                                                                                                     // 138
            }                                                                                                          // 139
          }, "@", Blaze.View("lookup:..actorNotif", function() {                                                       // 140
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "actorNotif"));                                  // 141
          })), " \n                      ", HTML.SPAN({                                                                // 142
            class: "glyphicon glyphicon-triangle-right",                                                               // 143
            "aria-hidden": "true"                                                                                      // 144
          }), "\n                       ", Blaze.View("lookup:convertDateTime", function() {                           // 145
            return Spacebars.mustache(view.lookup("convertDateTime"));                                                 // 146
          }), "\n                     "), "\n                  "), "\n                  ", HTML.DIV({                  // 147
            class: "panel-body"                                                                                        // 148
          }, "\n                    ", Blaze.View("lookup:..twiitMessage", function() {                                // 149
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitMessage"));                                // 150
          }), "\n                  "), "\n                  ", HTML.DIV({                                              // 151
            class: "btn-group",                                                                                        // 152
            role: "group",                                                                                             // 153
            id: "btnGroupInteractions"                                                                                 // 154
          }, "\n                    ", HTML.A({                                                                        // 155
            class: "btn btn-secondary"                                                                                 // 156
          }, "\n                      ", HTML.SPAN({                                                                   // 157
            class: "glyphicon glyphicon-bullhorn"                                                                      // 158
          }), "\n                    "), "\n                    ", Blaze.If(function() {                               // 159
            return Spacebars.call(view.lookup("findNumComment"));                                                      // 160
          }, function() {                                                                                              // 161
            return [ "\n                      ", HTML.A({                                                              // 162
              href: function() {                                                                                       // 163
                return Spacebars.mustache(view.lookup("pathFor"), "twiitCommentPage", Spacebars.kw({                   // 164
                  _id: Spacebars.dot(view.lookup("."), "_id")                                                          // 165
                }));                                                                                                   // 166
              },                                                                                                       // 167
              class: "btn btn-secondary"                                                                               // 168
            }, "\n                        ", HTML.SPAN({                                                               // 169
              class: "glyphicon glyphicon-comment"                                                                     // 170
            }), "\n                        ", HTML.SPAN({                                                              // 171
              class: "badge-numFav badge"                                                                              // 172
            }, Blaze.View("lookup:numComment", function() {                                                            // 173
              return Spacebars.mustache(view.lookup("numComment"));                                                    // 174
            })), "\n                      "), "\n                    " ];                                              // 175
          }, function() {                                                                                              // 176
            return [ "\n                      ", HTML.A({                                                              // 177
              id: "btnComm",                                                                                           // 178
              class: "btn btn-secondary"                                                                               // 179
            }, "\n                      ", HTML.SPAN({                                                                 // 180
              class: "glyphicon glyphicon-comment"                                                                     // 181
            }), "\n                    "), "\n                    " ];                                                 // 182
          }), "\n                    ", Blaze.If(function() {                                                          // 183
            return Spacebars.call(view.lookup("numFavorite"));                                                         // 184
          }, function() {                                                                                              // 185
            return [ "\n                      ", HTML.A({                                                              // 186
              id: "btnFav",                                                                                            // 187
              class: "btn btn-secondary"                                                                               // 188
            }, "\n                        ", HTML.SPAN({                                                               // 189
              id: function() {                                                                                         // 190
                return Spacebars.mustache(view.lookup("idToFavBtn"));                                                  // 191
              },                                                                                                       // 192
              class: function() {                                                                                      // 193
                return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                  // 194
              }                                                                                                        // 195
            }), "\n                        ", HTML.SPAN({                                                              // 196
              class: "badge badge-numFav"                                                                              // 197
            }, Blaze.View("lookup:numFav", function() {                                                                // 198
              return Spacebars.mustache(view.lookup("numFav"));                                                        // 199
            })), "\n                      "), "\n                    " ];                                              // 200
          }, function() {                                                                                              // 201
            return [ "\n                      ", HTML.A({                                                              // 202
              id: "btnFav",                                                                                            // 203
              class: "btn btn-secondary"                                                                               // 204
            }, "\n                        ", HTML.SPAN({                                                               // 205
              id: function() {                                                                                         // 206
                return Spacebars.mustache(view.lookup("idToFavBtn"));                                                  // 207
              },                                                                                                       // 208
              class: function() {                                                                                      // 209
                return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                  // 210
              }                                                                                                        // 211
            }), "\n                      "), "\n                    " ];                                               // 212
          }), "\n                  "), "\n                "), "\n              " ];                                    // 213
        }), "\n              ", Blaze.If(function() {                                                                  // 214
          return Spacebars.call(view.lookup("noFavsNotif"));                                                           // 215
        }, function() {                                                                                                // 216
          return [ "\n                ", HTML.P("No tienes favoritos nuevos"), "    \n              " ];               // 217
        }, function() {                                                                                                // 218
          return [ "\n                ", HTML.BUTTON({                                                                 // 219
            id: "dismissFavsNotif",                                                                                    // 220
            class: "btn btn-info pull-right btnDismissNotif",                                                          // 221
            type: "button"                                                                                             // 222
          }, "OK"), "\n              " ];                                                                              // 223
        }), "\n            " ];                                                                                        // 224
      }), "\n          " ];                                                                                            // 225
    }), "\n        "), "\n      "), "\n    "), "\n\n    ", HTML.NAV({                                                  // 226
      id: "navBarBtnShowNotif",                                                                                        // 227
      class: "navbar navbar-default navbar-fixed-bottom"                                                               // 228
    }, "\n      ", HTML.DIV({                                                                                          // 229
      class: "container"                                                                                               // 230
    }, "\n        ", HTML.DIV({                                                                                        // 231
      class: "navbar-header"                                                                                           // 232
    }, "\n          ", HTML.DIV({                                                                                      // 233
      class: "btn-group",                                                                                              // 234
      role: "group"                                                                                                    // 235
    }, "\n\n            ", HTML.BUTTON({                                                                               // 236
      style: function() {                                                                                              // 237
        return [ "width: ", Spacebars.mustache(view.lookup("setStyleNavBar")) ];                                       // 238
      },                                                                                                               // 239
      type: "button",                                                                                                  // 240
      id: "btnShowFavsNotif",                                                                                          // 241
      class: "btn btn-secondary btnGroupsShowNotif"                                                                    // 242
    }, "\n              ", HTML.SPAN({                                                                                 // 243
      class: "glyphicon glyphicon-heart"                                                                               // 244
    }), "\n              ", HTML.SPAN({                                                                                // 245
      class: "badge badge-notify-navbarFooter"                                                                         // 246
    }, Blaze.View("lookup:notifFavsCount", function() {                                                                // 247
      return Spacebars.mustache(view.lookup("notifFavsCount"));                                                        // 248
    })), "\n            "), "\n\n            ", HTML.BUTTON({                                                          // 249
      style: function() {                                                                                              // 250
        return [ "width: ", Spacebars.mustache(view.lookup("setStyleNavBar")) ];                                       // 251
      },                                                                                                               // 252
      type: "button",                                                                                                  // 253
      id: "btnShowCommNotif",                                                                                          // 254
      class: "btn btn-secondary btnGroupsShowNotif"                                                                    // 255
    }, "\n              ", HTML.SPAN({                                                                                 // 256
      class: "glyphicon glyphicon-comment"                                                                             // 257
    }), "\n              ", HTML.SPAN({                                                                                // 258
      class: "badge badge-notify-navbarFooter"                                                                         // 259
    }, Blaze.View("lookup:notifCommCount", function() {                                                                // 260
      return Spacebars.mustache(view.lookup("notifCommCount"));                                                        // 261
    })), "\n            "), "\n            \n          "), "\n        "), "\n      "), "\n    "), "\n\n    ", Blaze.View("lookup:selectTypeNotifToShow", function() {
      return Spacebars.mustache(view.lookup("selectTypeNotifToShow"));                                                 // 263
    }), "\n\n  " ];                                                                                                    // 264
  }, function() {                                                                                                      // 265
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 266
  });                                                                                                                  // 267
}));                                                                                                                   // 268
                                                                                                                       // 269
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
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", Blaze.If(function() {                                                                           // 8
      return Spacebars.call(view.lookup("currentUser"));                                                               // 9
    }, function() {                                                                                                    // 10
      return [ "\n      ", HTML.Comment(' LA CAJA DE PONER UN NUEVO TWIIT SE HA IMPLEMENTADO EN UN MODAL QUE SALTA \n      CUANDO SE DA AL BOTON QUE SE ENCUENTRA EN LA BARRA DE NAVEGACIÓN\n      <div id="divTweetBox" class="col-md-8 col-sm-8">{{> tweetBox}}</div>\n      '), "\n      \n      ", HTML.DIV({
        id: "divTweetFeed",                                                                                            // 12
        class: "col-md-8 col-sm-8"                                                                                     // 13
      }, Spacebars.include(view.lookupTemplate("tweetFeed"))), "\n    " ];                                             // 14
    }, function() {                                                                                                    // 15
      return [ "\n      ", HTML.DIV({                                                                                  // 16
        class: "user-container"                                                                                        // 17
      }, "\n        ", HTML.DIV({                                                                                      // 18
        class: "panel panel-default userBox"                                                                           // 19
      }, "\n          ", HTML.DIV({                                                                                    // 20
        class: "panel-body"                                                                                            // 21
      }, "\n            ", HTML.Comment("módulo de acceso "), "\n            ", HTML.H4("¿Ya tienes una cuenta?"), "\n            ", HTML.DIV({
        class: "form-group"                                                                                            // 23
      }, "\n              ", HTML.INPUT({                                                                              // 24
        class: "form-control input-sm",                                                                                // 25
        id: "login-nameProfile",                                                                                       // 26
        placeholder: "Nombre de Usuario"                                                                               // 27
      }), "\n              ", HTML.INPUT({                                                                             // 28
        class: "form-control input-sm",                                                                                // 29
        id: "login-password",                                                                                          // 30
        placeholder: "Contraseña",                                                                                     // 31
        type: "password"                                                                                               // 32
      }), "\n            "), "\n\n            ", HTML.BUTTON({                                                         // 33
        type: "button",                                                                                                // 34
        class: "btn btn-info fullbutton login",                                                                        // 35
        id: "login"                                                                                                    // 36
      }, "Acceder"), "\n\n            ", HTML.Comment("módulo de registro"), "\n            ", HTML.H4("¿Nuevo por aquí?"), "\n            ", HTML.DIV({
        class: "form-group"                                                                                            // 38
      }, "\n              ", HTML.INPUT({                                                                              // 39
        class: "form-control input-sm",                                                                                // 40
        id: "signup-username",                                                                                         // 41
        placeholder: "Nombre"                                                                                          // 42
      }), "\n              ", HTML.INPUT({                                                                             // 43
        class: "form-control input-sm",                                                                                // 44
        id: "signup-nameProfile",                                                                                      // 45
        placeholder: "Nombre de Usuario"                                                                               // 46
      }), "\n              ", HTML.INPUT({                                                                             // 47
        class: "form-control input-sm",                                                                                // 48
        id: "signup-password",                                                                                         // 49
        placeholder: "Contraseña",                                                                                     // 50
        type: "password"                                                                                               // 51
      }), "\n            "), "\n            ", HTML.BUTTON({                                                           // 52
        type: "button",                                                                                                // 53
        class: "btn btn-info fullbutton",                                                                              // 54
        id: "signup"                                                                                                   // 55
      }, "Regístrate"), " \n          "), "\n        "), "\n      "), "\n    " ];                                      // 56
    }), "\n  " ];                                                                                                      // 57
  }, function() {                                                                                                      // 58
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 59
  });                                                                                                                  // 60
}));                                                                                                                   // 61
                                                                                                                       // 62
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
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", Blaze.If(function() {                                                                           // 8
      return Spacebars.call(view.lookup("currentUser"));                                                               // 9
    }, function() {                                                                                                    // 10
      return [ "\n      ", Blaze.If(function() {                                                                       // 11
        return Spacebars.call(view.lookup("dataUserFound"));                                                           // 12
      }, function() {                                                                                                  // 13
        return [ "\n        ", HTML.DIV({                                                                              // 14
          class: "user-container"                                                                                      // 15
        }, "\n          ", HTML.DIV({                                                                                  // 16
          class: "panel panel-default userBox"                                                                         // 17
        }, "\n            ", HTML.DIV({                                                                                // 18
          class: "panel-body"                                                                                          // 19
        }, "\n              ", HTML.Comment("Mensaje para el usuario registrado"), "\n              ", HTML.DIV({      // 20
          class: "row"                                                                                                 // 21
        }, "\n                ", HTML.Comment("CONTENIDO DE LA PARTE IZQUIERDA DEL PERFIL DEL USUARIO"), "\n                ", HTML.DIV({
          class: "col-md-6 col-sm-6 col-xs-6",                                                                         // 23
          id: "leftDivCurrentUser"                                                                                     // 24
        }, "\n                  ", HTML.Comment('EN LA ETIQUETA DE SRC, SE PONDRA EL NOMBRE DEL USUARIO ACTUAL\n                  <img id="imgCurrentUser" src="/{{currentUser.username}}.png" class="img-responsive">\n                  A MODO DE EJEMPLO, VAMOS A UTILIZAR UNO GENERICO PARA QUE CARGUE EN CUALQUIER USUARIO'), "\n                  ", HTML.IMG({
          id: "imgCurrentUser",                                                                                        // 26
          src: function() {                                                                                            // 27
            return Spacebars.mustache(view.lookup("userImgFound"));                                                    // 28
          },                                                                                                           // 29
          class: "img-responsive"                                                                                      // 30
        }), "\n                "), "\n                ", HTML.Comment("CONTENIDO DE LA PARTE DERECHA DEL PERFIL DEL USUARIO"), "\n                ", HTML.DIV({
          class: "col-md-6 col-sm-6 col-xs-6",                                                                         // 32
          id: "rightDivCurrentUser"                                                                                    // 33
        }, "\n                  ", HTML.Comment("ESTA DESCRIPCION ES GENERICA. HAY QUE CAMBIARLA POR LA QUE APAREZCA EN userData.description"), "\n                  ", Blaze.View("lookup:dataUserFound.userDescription", function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userDescription"));                   // 35
        }), "\n                "), "\n              "), "\n\n              ", HTML.DIV({                               // 36
          class: "currentUserName"                                                                                     // 37
        }, "\n                ", HTML.DIV({                                                                            // 38
          class: "col-md-5 col-sm-5 col-xs-5 nameUserAndProfile"                                                       // 39
        }, "\n                  ", HTML.H3(HTML.STRONG(Blaze.View("lookup:dataUserFound.userName", function() {        // 40
          return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userName"));                          // 41
        }))), "\n                  ", HTML.H5("@", Blaze.View("lookup:dataUserFound.userNameProfile", function() {     // 42
          return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userNameProfile"));                   // 43
        })), "\n                "), "\n                ", HTML.DIV({                                                   // 44
          class: "col-md-7 col-sm-7 col-xs-7 dropdown btnOptionsProfile"                                               // 45
        }, "\n                  ", Blaze.If(function() {                                                               // 46
          return Spacebars.call(view.lookup("showProfileOtherUser"));                                                  // 47
        }, function() {                                                                                                // 48
          return [ "\n                    ", HTML.BUTTON({                                                             // 49
            id: "dropdownOptionsUser",                                                                                 // 50
            class: "btn btn-primary dropdown-toggle optionsUserProfile",                                               // 51
            type: "button",                                                                                            // 52
            "data-toggle": "dropdown",                                                                                 // 53
            "aria-haspopup": "true",                                                                                   // 54
            "aria-expanded": "true"                                                                                    // 55
          }, "\n                      ", HTML.SPAN({                                                                   // 56
            class: "glyphicon glyphicon-option-vertical"                                                               // 57
          }), "\n                    "), "\n                    ", HTML.UL({                                           // 58
            class: "dropdown-menu",                                                                                    // 59
            "aria-labelledby": "dropdownOptionsUser"                                                                   // 60
          }, "\n                      ", HTML.LI(HTML.A({                                                              // 61
            href: "#",                                                                                                 // 62
            id: "editProfile"                                                                                          // 63
          }, "Editar Perfil")), "\n                      ", HTML.LI(HTML.A({                                           // 64
            href: "#",                                                                                                 // 65
            id: "editWhatsLicenses"                                                                                    // 66
          }, "Editar Permisos de WhatsApp")), "\n                      ", HTML.LI(HTML.A({                             // 67
            href: "#",                                                                                                 // 68
            id: "removeProfile",                                                                                       // 69
            "data-toggle": "modal",                                                                                    // 70
            "data-target": "#dialog-removeProfile"                                                                     // 71
          }, "Eliminar Perfil")), "\n                      ", HTML.LI({                                                // 72
            role: "separator",                                                                                         // 73
            class: "divider"                                                                                           // 74
          }), "\n                      ", HTML.LI(HTML.A({                                                             // 75
            href: "#",                                                                                                 // 76
            id: "logout"                                                                                               // 77
          }, "Salir")), "\n                    "), "\n                  " ];                                           // 78
        }), "\n                  ", HTML.DIV({                                                                         // 79
          id: "optionsUserProfile"                                                                                     // 80
        }, "\n                    ", Blaze.Each(function() {                                                           // 81
          return Spacebars.call(view.lookup("existsSocialNetwork"));                                                   // 82
        }, function() {                                                                                                // 83
          return [ "  \n                      ", Blaze.If(function() {                                                 // 84
            return Spacebars.call(view.lookup("showProfileOtherUser"));                                                // 85
          }, function() {                                                                                              // 86
            return [ "\n                        ", Blaze.If(function() {                                               // 87
              return Spacebars.call(view.lookup("isWhatsapp"));                                                        // 88
            }, function() {                                                                                            // 89
              return [ "\n                          ", HTML.BUTTON({                                                   // 90
                type: "button",                                                                                        // 91
                id: function() {                                                                                       // 92
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                    // 93
                },                                                                                                     // 94
                class: function() {                                                                                    // 95
                  return [ "btn btn-", Spacebars.mustache(Spacebars.dot(view.lookup("."), "color")), " btn-circle optionsUserProfile btnShowSN" ];
                },                                                                                                     // 97
                "data-toggle": "tooltip",                                                                              // 98
                title: function() {                                                                                    // 99
                  return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userWhats"));                 // 100
                },                                                                                                     // 101
                "data-placement": "top"                                                                                // 102
              }, "\n                            ", HTML.I({                                                            // 103
                id: function() {                                                                                       // 104
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                    // 105
                },                                                                                                     // 106
                class: function() {                                                                                    // 107
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "class"));                                 // 108
                },                                                                                                     // 109
                style: "font-size: 24px;"                                                                              // 110
              }), "\n                          "), "\n                        " ];                                     // 111
            }, function() {                                                                                            // 112
              return [ "\n                          ", HTML.BUTTON({                                                   // 113
                type: "button",                                                                                        // 114
                id: function() {                                                                                       // 115
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                    // 116
                },                                                                                                     // 117
                class: function() {                                                                                    // 118
                  return [ "btn btn-", Spacebars.mustache(Spacebars.dot(view.lookup("."), "color")), " btn-circle optionsUserProfile btnShowSN" ];
                }                                                                                                      // 120
              }, "\n                            ", HTML.I({                                                            // 121
                id: function() {                                                                                       // 122
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                    // 123
                },                                                                                                     // 124
                class: function() {                                                                                    // 125
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "class"));                                 // 126
                },                                                                                                     // 127
                style: "font-size: 24px;"                                                                              // 128
              }), "\n                          "), "\n                        " ];                                     // 129
            }), "\n                      " ];                                                                          // 130
          }, function() {                                                                                              // 131
            return [ "\n                        ", HTML.BUTTON({                                                       // 132
              type: "button",                                                                                          // 133
              id: function() {                                                                                         // 134
                return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                      // 135
              },                                                                                                       // 136
              class: function() {                                                                                      // 137
                return [ "btn btn-", Spacebars.mustache(Spacebars.dot(view.lookup("."), "color")), " btn-circle optionsUserProfile btnShowSN" ];
              },                                                                                                       // 139
              "data-toggle": "tooltip",                                                                                // 140
              title: ""                                                                                                // 141
            }, "\n                          ", HTML.I({                                                                // 142
              id: function() {                                                                                         // 143
                return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                      // 144
              },                                                                                                       // 145
              class: function() {                                                                                      // 146
                return Spacebars.mustache(Spacebars.dot(view.lookup("."), "class"));                                   // 147
              },                                                                                                       // 148
              style: "font-size: 24px;"                                                                                // 149
            }), "\n                        "), "\n                      " ];                                           // 150
          }), "\n                    " ];                                                                              // 151
        }), "\n                  "), "\n                "), "\n              "), "\n                \n              ", HTML.Comment('\n              <button type="button" class="btn btn-info fullbutton" id="modProfile">Editar Perfil</button>\n              <button type="button" class="btn btn-info fullbutton" id="logout">Salir</button>\n              '), "\n              ", HTML.TABLE({
          class: "table"                                                                                               // 153
        }, "  \n                ", HTML.TR("\n                  ", HTML.TD({                                           // 154
          class: "tableHeader"                                                                                         // 155
        }, "Twitts"), "\n                  ", HTML.TD({                                                                // 156
          class: "tableHeader"                                                                                         // 157
        }, "Siguiendo"), "\n                  ", HTML.TD({                                                             // 158
          class: "tableHeader"                                                                                         // 159
        }, "Seguidores"), "\n                "), "\n                ", HTML.TR("\n                  ", HTML.TD({       // 160
          class: "tableContent"                                                                                        // 161
        }, Blaze.View("lookup:tweets", function() {                                                                    // 162
          return Spacebars.mustache(view.lookup("tweets"));                                                            // 163
        })), "\n                  ", HTML.TD({                                                                         // 164
          class: "tableContent"                                                                                        // 165
        }, Blaze.View("lookup:following", function() {                                                                 // 166
          return Spacebars.mustache(view.lookup("following"));                                                         // 167
        })), "\n                  ", HTML.TD({                                                                         // 168
          class: "tableContent"                                                                                        // 169
        }, Blaze.View("lookup:followers", function() {                                                                 // 170
          return Spacebars.mustache(view.lookup("followers"));                                                         // 171
        })), "\n                "), "\n              "), "\n              \n              ", HTML.DIV({                // 172
          class: "modal fade",                                                                                         // 173
          id: "dialog-showSocialNetwork"                                                                               // 174
        }, "\n                ", Spacebars.include(view.lookupTemplate("sendRequest")), "\n              "), "\n\n              ", HTML.DIV({
          class: "modal fade",                                                                                         // 176
          id: "dialog-removeProfile"                                                                                   // 177
        }, "\n                ", Spacebars.include(view.lookupTemplate("removeProfile")), "\n              "), "\n\n              ", HTML.DIV({
          class: "modal fade",                                                                                         // 179
          id: "dialog-editLicenses"                                                                                    // 180
        }, "\n                ", Spacebars.include(view.lookupTemplate("editLicenses")), "\n              "), "\n\n              ", HTML.DIV({
          class: "modal fade",                                                                                         // 182
          id: "dialog-operationSuccess"                                                                                // 183
        }, "\n                ", HTML.DIV({                                                                            // 184
          class: "sentPet-container"                                                                                   // 185
        }, "\n                    ", HTML.DIV({                                                                        // 186
          class: "panel panel-default col-sm-6 col-md-6 col-lg-6"                                                      // 187
        }, "\n                        ", HTML.DIV({                                                                    // 188
          class: "panel-body"                                                                                          // 189
        }, "\n                        ", HTML.Comment('<img src="/emoticonoSad.png" class="img-responsive">'), "\n                            ", HTML.P({
          style: "margin: 0px;"                                                                                        // 191
        }, "La petición se ha enviado a ", HTML.STRONG(Blaze.View("lookup:dataUserFound.userNameProfile", function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userNameProfile"));                   // 193
        }))), "\n                        "), "\n                    "), "\n                  "), "\n              "), "\n\n            "), "\n          "), "\n        "), "\n        ", HTML.DIV({
          id: "divTweetFeed",                                                                                          // 195
          class: "col-md-8 col-sm-8"                                                                                   // 196
        }, Spacebars.include(view.lookupTemplate("tweetFeedProfile"))), "\n      " ];                                  // 197
      }, function() {                                                                                                  // 198
        return [ "\n        ", Spacebars.include(view.lookupTemplate("pageNotFound")), "\n      " ];                   // 199
      }), "\n    " ];                                                                                                  // 200
    }), "\n  " ];                                                                                                      // 201
  }, function() {                                                                                                      // 202
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 203
  });                                                                                                                  // 204
}));                                                                                                                   // 205
                                                                                                                       // 206
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.whatsAppNotif.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.whatsAppNotif.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("whatsAppNotif");                                                                                 // 2
Template["whatsAppNotif"] = new Template("Template.whatsAppNotif", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", HTML.A({                                                                                        // 8
      id: "linkToWhatsNotif",                                                                                          // 9
      href: function() {                                                                                               // 10
        return Spacebars.mustache(view.lookup("pathFor"), "whatsAppRequestPage", Spacebars.kw({                        // 11
          userName: Spacebars.dot(view.lookup("."), "currentUser")                                                     // 12
        }));                                                                                                           // 13
      },                                                                                                               // 14
      class: "dropdown-toggle",                                                                                        // 15
      "data-toggle": "dropdown",                                                                                       // 16
      role: "button",                                                                                                  // 17
      "aria-haspopup": "true",                                                                                         // 18
      "aria-expanded": "false"                                                                                         // 19
    }, "\n    ", HTML.Comment("Notificaciones"), "\n    ", HTML.SPAN({                                                 // 20
      class: "glyphicon glyphicon-inbox whatsInbox"                                                                    // 21
    }), "\n\n      ", Blaze.If(function() {                                                                            // 22
      return Spacebars.call(view.lookup("whatsNotifCount"));                                                           // 23
    }, function() {                                                                                                    // 24
      return [ "\n        ", Blaze.If(function() {                                                                     // 25
        return Spacebars.call(view.lookup("modeDisplay"));                                                             // 26
      }, function() {                                                                                                  // 27
        return [ "\n          ", HTML.SPAN({                                                                           // 28
          class: "badge badge-inverse"                                                                                 // 29
        }, Blaze.View("lookup:whatsNotifCount", function() {                                                           // 30
          return Spacebars.mustache(view.lookup("whatsNotifCount"));                                                   // 31
        })), "\n        " ];                                                                                           // 32
      }, function() {                                                                                                  // 33
        return [ "\n          ", Blaze.If(function() {                                                                 // 34
          return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                               // 35
        }, function() {                                                                                                // 36
          return [ "\n            ", HTML.SPAN({                                                                       // 37
            class: "badge badge-inverse"                                                                               // 38
          }, Blaze.View("lookup:whatsNotifCount", function() {                                                         // 39
            return Spacebars.mustache(view.lookup("whatsNotifCount"));                                                 // 40
          })), "\n          " ];                                                                                       // 41
        }), "\n        " ];                                                                                            // 42
      }), "\n      " ];                                                                                                // 43
    }), "\n\n    "), "\n    ", Blaze.Unless(function() {                                                               // 44
      return Spacebars.call(view.lookup("whatsNotifCount"));                                                           // 45
    }, function() {                                                                                                    // 46
      return [ "\n    ", HTML.UL({                                                                                     // 47
        class: "notification dropdown-menu dropdown-menu-center"                                                       // 48
      }, "\n      ", HTML.LI(HTML.SPAN("No Notifications")), "\n    "), "\n    " ];                                    // 49
    }), "\n  " ];                                                                                                      // 50
  }, function() {                                                                                                      // 51
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 52
  });                                                                                                                  // 53
}));                                                                                                                   // 54
                                                                                                                       // 55
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.whatsAppRequestPage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.whatsAppRequestPage.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("whatsAppRequestPage");                                                                           // 2
Template["whatsAppRequestPage"] = new Template("Template.whatsAppRequestPage", (function() {                           // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n\n    ", Blaze.If(function() {                                                                         // 8
      return Spacebars.call(view.lookup("countNotifRequest"));                                                         // 9
    }, function() {                                                                                                    // 10
      return [ "\n      ", Blaze.Each(function() {                                                                     // 11
        return Spacebars.call(view.lookup("whatsRequestNotif"));                                                       // 12
      }, function() {                                                                                                  // 13
        return [ "\n      ", HTML.DIV({                                                                                // 14
          class: "tweetfeed-container",                                                                                // 15
          id: ""                                                                                                       // 16
        }, "\n        ", HTML.DIV({                                                                                    // 17
          class: "panel panel-default tweetfeed"                                                                       // 18
        }, "\n          ", HTML.DIV({                                                                                  // 19
          class: "panel-body"                                                                                          // 20
        }, "\n          ", HTML.Comment(" Texto para el contenido del Twitt "), "\n            ", HTML.DIV({           // 21
          class: "panel panel-info"                                                                                    // 22
        }, "\n              ", HTML.DIV({                                                                              // 23
          class: "panel-heading"                                                                                       // 24
        }, "\n                ", HTML.H3({                                                                             // 25
          class: "panel-title"                                                                                         // 26
        }, "\n                  Solicitud de WhatsApp de @", HTML.STRONG(Blaze.View("lookup:..actorNotif", function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "actorNotif"));                                    // 28
        })), "\n                "), "\n              "), "\n              ", HTML.DIV({                                // 29
          class: "panel-body"                                                                                          // 30
        }, "\n                ", HTML.P("¿Desea aceptar o rechazar la solicitud?"), "\n              "), "\n            "), "\n            ", HTML.BUTTON({
          id: "sentYes",                                                                                               // 32
          type: "button",                                                                                              // 33
          class: "btn btn-info"                                                                                        // 34
        }, "\n              ", HTML.I({                                                                                // 35
          class: "glyphicon glyphicon-ok-circle"                                                                       // 36
        }), "\n            "), "\n            ", HTML.BUTTON({                                                         // 37
          id: "sentNo",                                                                                                // 38
          type: "button",                                                                                              // 39
          class: "btn btn-danger"                                                                                      // 40
        }, "\n              ", HTML.I({                                                                                // 41
          class: "glyphicon glyphicon-remove-circle"                                                                   // 42
        }), "\n            "), "\n          "), "\n        "), "\n      "), "\n    " ];                                // 43
      }), "\n    " ];                                                                                                  // 44
    }), "\n\n    ", Blaze.If(function() {                                                                              // 45
      return Spacebars.call(view.lookup("countNotifResponse"));                                                        // 46
    }, function() {                                                                                                    // 47
      return [ "\n    ", HTML.DIV({                                                                                    // 48
        class: "tweetfeed-container"                                                                                   // 49
      }, "\n      ", HTML.DIV({                                                                                        // 50
        class: "panel panel-default tweetfeed"                                                                         // 51
      }, "\n        ", HTML.DIV({                                                                                      // 52
        class: "panel-body"                                                                                            // 53
      }, "\n          ", Blaze.Each(function() {                                                                       // 54
        return Spacebars.call(view.lookup("whatsResponseNotif"));                                                      // 55
      }, function() {                                                                                                  // 56
        return [ "\n            ", HTML.Comment(" Texto para el contenido del Twitt "), "\n            ", HTML.DIV({   // 57
          class: "panel panel-info",                                                                                   // 58
          id: function() {                                                                                             // 59
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "actorNotif"));                                  // 60
          }                                                                                                            // 61
        }, "\n              ", HTML.DIV({                                                                              // 62
          class: "panel-heading"                                                                                       // 63
        }, "\n                ", HTML.H3({                                                                             // 64
          class: "panel-title"                                                                                         // 65
        }, "\n                  Respuesta de solicitud de WhatsApp de @", HTML.STRONG(Blaze.View("lookup:..actorNotif", function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "actorNotif"));                                    // 67
        })), "\n                "), "\n              "), "\n              ", HTML.DIV({                                // 68
          class: "panel-body"                                                                                          // 69
        }, "\n                ", Blaze.If(function() {                                                                 // 70
          return Spacebars.call(Spacebars.dot(view.lookup("."), "stateResponse"));                                     // 71
        }, function() {                                                                                                // 72
          return [ "\n                  ", HTML.P("Ha sido aceptada!"), "\n                " ];                        // 73
        }, function() {                                                                                                // 74
          return [ "\n                  ", HTML.P("Ha sido rechazada =("), "\n                " ];                     // 75
        }), "\n              "), "\n              ", HTML.DIV({                                                        // 76
          class: "btn-group",                                                                                          // 77
          role: "group",                                                                                               // 78
          id: "btnGroupResWhatsNotif"                                                                                  // 79
        }, "\n                ", HTML.A({                                                                              // 80
          id: "goToProfile",                                                                                           // 81
          class: "btn btn-secondary"                                                                                   // 82
        }, "\n                  ", HTML.SPAN({                                                                         // 83
          class: "glyphicon glyphicon-user"                                                                            // 84
        }), "\n                "), "\n                ", HTML.A({                                                      // 85
          class: "btn btn-secondary"                                                                                   // 86
        }, "\n                  ", HTML.SPAN({                                                                         // 87
          id: "clearNotif",                                                                                            // 88
          class: "glyphicon glyphicon-remove"                                                                          // 89
        }), "\n                "), "\n              "), "\n            "), "\n          " ];                           // 90
      }), "\n        "), "\n      "), "\n    "), "\n    " ];                                                           // 91
    }), "\n  " ];                                                                                                      // 92
  }, function() {                                                                                                      // 93
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 94
  });                                                                                                                  // 95
}));                                                                                                                   // 96
                                                                                                                       // 97
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"editLicenses.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/editLicenses.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.editLicenses.onCreated(function () {                                                                          // 1
  currentUserName = this.data.name;                                                                                    // 2
  currDataUser = Session.get('dataUser');                                                                              // 3
  arrAux = currDataUser.showWhatsTo;                                                                                   // 4
});                                                                                                                    // 5
                                                                                                                       //
Template.editLicenses.events({                                                                                         // 7
  'click #scrollSpy a': function () {                                                                                  // 8
    function clickScrollSpyA(event) {                                                                                  // 8
      selectUser = event.target.id;                                                                                    // 9
    }                                                                                                                  // 10
                                                                                                                       //
    return clickScrollSpyA;                                                                                            // 8
  }(),                                                                                                                 // 8
                                                                                                                       //
  'click #remLicense': function () {                                                                                   // 12
    function clickRemLicense(event) {                                                                                  // 12
      var pos = arrAux.indexOf(selectUser);                                                                            // 13
      arrAux.splice(pos, 1);                                                                                           // 14
                                                                                                                       //
      var data = new Object();                                                                                         // 16
      data.userId = currDataUser.userId;                                                                               // 17
      data.showWhats = arrAux;                                                                                         // 18
                                                                                                                       //
      //POR ULTIMO ACTUALIZAMOS EL VALOR DE ESTE ARRAY EN LA BBDD                                                      // 20
      Meteor.call('updateShowWhatsTo', data);                                                                          // 21
    }                                                                                                                  // 22
                                                                                                                       //
    return clickRemLicense;                                                                                            // 12
  }()                                                                                                                  // 12
});                                                                                                                    // 7
                                                                                                                       //
Template.editLicenses.helpers({                                                                                        // 25
  'userWhatsCount': function () {                                                                                      // 26
    function userWhatsCount() {                                                                                        // 26
      if (arrAux.length > 0) {                                                                                         // 27
        return true;                                                                                                   // 28
      }                                                                                                                // 29
    }                                                                                                                  // 30
                                                                                                                       //
    return userWhatsCount;                                                                                             // 26
  }(),                                                                                                                 // 26
                                                                                                                       //
  'responseLicenses': function () {                                                                                    // 32
    function responseLicenses() {                                                                                      // 32
      var usersFound = new Array();                                                                                    // 33
      for (var i in meteorBabelHelpers.sanitizeForInObject(arrAux)) {                                                  // 34
        Meteor.call('findUserDataWithId', arrAux[i], function (err, res) {                                             // 35
          var aux = new Object();                                                                                      // 36
          aux.name = res.userNameProfile;                                                                              // 37
          aux.userId = res.userId;                                                                                     // 38
          usersFound.push(aux);                                                                                        // 39
          Session.set('usersFound', usersFound);                                                                       // 40
        });                                                                                                            // 41
      };                                                                                                               // 42
      return Session.get('usersFound');                                                                                // 43
    }                                                                                                                  // 44
                                                                                                                       //
    return responseLicenses;                                                                                           // 32
  }()                                                                                                                  // 32
});                                                                                                                    // 25
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
		currentDataUser = Session.get('datauser');                                                                           // 6
});                                                                                                                    // 7
                                                                                                                       //
Template.editProfile.events({                                                                                          // 9
		'click #saveChanges': function () {                                                                                  // 10
				function clickSaveChanges() {                                                                                      // 10
						userAux = Session.get('datauser');                                                                               // 11
						newData = new Object();                                                                                          // 12
						newData.description = document.getElementById("userDescription").value;                                          // 13
						if (newData.description === "") {                                                                                // 14
								newData.description = $('#userDescription').attr("placeholder");                                               // 15
						}                                                                                                                // 16
						newData.userId = userAux._id;                                                                                    // 17
                                                                                                                       //
						//AHORA NOS GUARDAMOS EL _id DEL DOCUEMNTO QUE VAMSO A INSERTAR EN LA COLECCION Images                           // 19
						//QUE ALMACENARÁ LA NUEVA FOTO                                                                                   // 20
						var codeImg = $('#imgCurrentUser').attr("src");                                                                  // 21
                                                                                                                       //
						Meteor.call('insertNewImage', codeImg, function (err, res) {                                                     // 23
								newData.imgId = res;                                                                                           // 24
								console.log(newData.imgId);                                                                                    // 25
								Meteor.call('updUserData', newData);                                                                           // 26
								window.location = "/Profile/" + userAux.userNameProfile;                                                       // 27
						});                                                                                                              // 28
                                                                                                                       //
						/*                                                                                                               // 30
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
				}                                                                                                                  // 52
                                                                                                                       //
				return clickSaveChanges;                                                                                           // 10
		}(),                                                                                                                 // 10
		'change #inputFile': function () {                                                                                   // 53
				function changeInputFile() {                                                                                       // 53
                                                                                                                       //
						//RECUPERAMOS LA IMAGEN QUE HEMOS SUBIDO                                                                         // 55
						var file = $('#inputFile')[0].files[0];                                                                          // 56
                                                                                                                       //
						reader = new FileReader();                                                                                       // 58
						reader.onload = function (file) {                                                                                // 59
								return function (e) {                                                                                          // 60
										$('#imgCurrentUser').attr("src", e.target.result);                                                           // 61
								};                                                                                                             // 62
						}(file);                                                                                                         // 63
                                                                                                                       //
						reader.readAsDataURL(file);                                                                                      // 65
				}                                                                                                                  // 66
                                                                                                                       //
				return changeInputFile;                                                                                            // 53
		}()                                                                                                                  // 53
});                                                                                                                    // 9
                                                                                                                       //
Template.editProfile.helpers({                                                                                         // 69
		'dataUserFound': function () {                                                                                       // 70
				function dataUserFound() {                                                                                         // 70
						dataUser = Session.get('datauser');                                                                              // 71
						return dataUser;                                                                                                 // 72
				}                                                                                                                  // 73
                                                                                                                       //
				return dataUserFound;                                                                                              // 70
		}(),                                                                                                                 // 70
		'userImgFound': function () {                                                                                        // 74
				function userImgFound() {                                                                                          // 74
						if (dataUser.userImg) {                                                                                          // 75
								Meteor.call('findUserImg', dataUser.userImg, function (err, res) {                                             // 76
										$('#imgCurrentUser').attr("src", res);                                                                       // 77
								});                                                                                                            // 78
						} else {                                                                                                         // 79
								console.log("Imagen test");                                                                                    // 80
								$('#imgCurrentUser').attr("src", "/profileImgTest.png");                                                       // 81
						}                                                                                                                // 82
				}                                                                                                                  // 83
                                                                                                                       //
				return userImgFound;                                                                                               // 74
		}(),                                                                                                                 // 74
		'tweets': function () {                                                                                              // 84
				function tweets(username) {                                                                                        // 84
						Meteor.call('tweetsPublish', username, function (err, res) {                                                     // 85
								Session.set('numTweets', res);                                                                                 // 86
						});                                                                                                              // 87
						return Session.get('numTweets');                                                                                 // 88
				}                                                                                                                  // 89
                                                                                                                       //
				return tweets;                                                                                                     // 84
		}(),                                                                                                                 // 84
		'following': function () {                                                                                           // 90
				function following() {                                                                                             // 90
						Meteor.call('usersFollowings', function (err, res) {                                                             // 91
								Session.set('numFollowings', res);                                                                             // 92
						});                                                                                                              // 93
						return Session.get('numFollowings');                                                                             // 94
				}                                                                                                                  // 95
                                                                                                                       //
				return following;                                                                                                  // 90
		}(),                                                                                                                 // 90
		'followers': function () {                                                                                           // 96
				function followers() {                                                                                             // 96
						Meteor.call('usersFollowers', function (err, res) {                                                              // 97
								Session.set('numFollowers', res);                                                                              // 98
						});                                                                                                              // 99
						return Session.get('numFollowers');                                                                              // 100
				}                                                                                                                  // 101
                                                                                                                       //
				return followers;                                                                                                  // 96
		}(),                                                                                                                 // 96
		'userHaveSN': function () {                                                                                          // 102
				function userHaveSN(dataUserFound) {                                                                               // 102
						if (dataUserFound.userWhats && dataUserFound.userFb && dataUserFound.userInsta) {                                // 103
								return false;                                                                                                  // 104
						} else {                                                                                                         // 105
								return true;                                                                                                   // 106
						}                                                                                                                // 107
				}                                                                                                                  // 108
                                                                                                                       //
				return userHaveSN;                                                                                                 // 102
		}()                                                                                                                  // 102
});                                                                                                                    // 69
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
	//PEDIMOS PERMISO AL USUARIO PARA MOSTRARLE NOTIFICACIONES                                                            // 6
	console.log(navigator.platform);                                                                                      // 7
                                                                                                                       //
	/*                                                                                                                    // 9
 HAY QUE CONTROLAR ESTO PORQUE NO FUNCIONA EL NOTIFICATION EN IPHONE                                                   //
 if(navigator.platform != 'iPad' || navigator.platform != 'iPhone' || navigator.platform != 'iPod'){                   //
 	Notification.requestPermission();                                                                                    //
 }                                                                                                                     //
 */                                                                                                                    //
});                                                                                                                    // 16
                                                                                                                       //
//ESTA ES OTRA FORMA DE HACER APARECER EL SPINNER CUANDO NO SE HA CARGADO LA TEMPLATE                                  // 18
/*                                                                                                                     // 19
	Session.set("onRender", true);                                                                                        //
});                                                                                                                    //
                                                                                                                       //
Template.navBarTemplate.onRendered(function() {                                                                        //
	Session.set("onRender", false);                                                                                       //
    return Session.get("onRender");                                                                                    //
});                                                                                                                    //
*/                                                                                                                     //
Template.navBarTemplate.events({                                                                                       // 28
	'click #recommendationsBtn': function () {                                                                            // 29
		function clickRecommendationsBtn() {                                                                                 // 29
			//console.log("A quien seguir");                                                                                    // 30
		}                                                                                                                    // 31
                                                                                                                       //
		return clickRecommendationsBtn;                                                                                      // 29
	}(),                                                                                                                  // 29
	'click #imgProfile': function () {                                                                                    // 32
		function clickImgProfile() {                                                                                         // 32
			window.location = "/Profile/" + Session.get('currentUser');                                                         // 33
		}                                                                                                                    // 34
                                                                                                                       //
		return clickImgProfile;                                                                                              // 32
	}(),                                                                                                                  // 32
	'click #imgLogTwiiterClone': function () {                                                                            // 35
		function clickImgLogTwiiterClone() {                                                                                 // 35
			window.location = "/";                                                                                              // 36
		}                                                                                                                    // 37
                                                                                                                       //
		return clickImgLogTwiiterClone;                                                                                      // 35
	}(),                                                                                                                  // 35
	'show.bs.collapse': function () {                                                                                     // 38
		function showBsCollapse() {                                                                                          // 38
			Session.set('navBarCollapse', true);                                                                                // 39
		}                                                                                                                    // 40
                                                                                                                       //
		return showBsCollapse;                                                                                               // 38
	}(),                                                                                                                  // 38
	'hide.bs.collapse': function () {                                                                                     // 41
		function hideBsCollapse() {                                                                                          // 41
			Session.set('navBarCollapse', false);                                                                               // 42
		}                                                                                                                    // 43
                                                                                                                       //
		return hideBsCollapse;                                                                                               // 41
	}(),                                                                                                                  // 41
	'click #btnNewTweet': function () {                                                                                   // 44
		function clickBtnNewTweet() {                                                                                        // 44
			Session.set('commentMode', false);                                                                                  // 45
		}                                                                                                                    // 46
                                                                                                                       //
		return clickBtnNewTweet;                                                                                             // 44
	}(),                                                                                                                  // 44
	'click #btnNewTwiit': function () {                                                                                   // 47
		function clickBtnNewTwiit() {                                                                                        // 47
			Session.set('commentMode', false);                                                                                  // 48
		}                                                                                                                    // 49
                                                                                                                       //
		return clickBtnNewTwiit;                                                                                             // 47
	}()                                                                                                                   // 47
});                                                                                                                    // 28
                                                                                                                       //
Template.navBarTemplate.helpers({                                                                                      // 52
	'notificationCount': function () {                                                                                    // 53
		function notificationCount() {                                                                                       // 53
			console.log("NUMERO DE NOTIFICACIONES NORMALES");                                                                   // 54
			var resultNotif = UserUtils.findNumberNotif(Meteor.user().username);                                                // 55
			return resultNotif;                                                                                                 // 56
		}                                                                                                                    // 57
                                                                                                                       //
		return notificationCount;                                                                                            // 53
	}(),                                                                                                                  // 53
	'whatsNotifCount': function () {                                                                                      // 58
		function whatsNotifCount() {                                                                                         // 58
			//OBTENEMOS EL NUMERO DE NOTIFICACIONES DE LAS PETICIONES DE WHATSAPP Y LAS                                         // 59
			//RESPUESTAS A LAS PETICIONES REALIZADAS POR EL USUARIO                                                             // 60
			resultNotifRequest = Notifications.find({ recepNotif: Meteor.user().username, read: false, typeOfNotif: "whatsAppNotif" });
			resultNotifResponse = Notifications.find({ recepNotif: Meteor.user().username, read: false, typeOfNotif: "responseWhatsAppNotif" });
			auxTotalCount = 0;                                                                                                  // 63
                                                                                                                       //
			if (resultNotifRequest.count() > 0) {                                                                               // 65
				auxTotalCount = resultNotifRequest.count();                                                                        // 66
				if (resultNotifResponse.count() > 0) {                                                                             // 67
					auxTotalCount += resultNotifResponse.count();                                                                     // 68
				};                                                                                                                 // 69
			} else {                                                                                                            // 70
				if (resultNotifResponse.count() > 0) {                                                                             // 71
					auxTotalCount = resultNotifResponse.count();                                                                      // 72
				};                                                                                                                 // 73
			}                                                                                                                   // 74
			//NO SE ESTA OBTENIENDO CORRECTAMENTE ESTE TIPO DE NOTIF                                                            // 75
			//REVISAR publications.js                                                                                           // 76
			//console.log(resultNotifResponse);                                                                                 // 77
			//console.log(resultNotifResponse.count());                                                                         // 78
                                                                                                                       //
			//DEVOLVEMOS LA SUMA TOTAL DE LAS NOTIFICACIONES                                                                    // 80
			if (auxTotalCount > 0) {                                                                                            // 81
				return auxTotalCount;                                                                                              // 82
			}                                                                                                                   // 83
		}                                                                                                                    // 84
                                                                                                                       //
		return whatsNotifCount;                                                                                              // 58
	}(),                                                                                                                  // 58
	'whatsAppReq': function () {                                                                                          // 85
		function whatsAppReq() {                                                                                             // 85
			console.log("NUMERO DE NOTIFICACIONES DE PETICIONES DE WHATSAPP");                                                  // 86
			console.log("Req: " + resultNotifRequest.count());                                                                  // 87
			console.log("Res: " + resultNotifResponse.count());                                                                 // 88
			var cont = 0;                                                                                                       // 89
			var req = [];                                                                                                       // 90
			var res = [];                                                                                                       // 91
                                                                                                                       //
			resultNotifRequest.forEach(function (item) {                                                                        // 93
				req.push(item._id);                                                                                                // 94
				cont++;                                                                                                            // 95
			});                                                                                                                 // 96
                                                                                                                       //
			resultNotifResponse.forEach(function (item) {                                                                       // 98
				res.push(item._id);                                                                                                // 99
				cont++;                                                                                                            // 100
			});                                                                                                                 // 101
                                                                                                                       //
			if (cont > 0) {                                                                                                     // 103
				Session.set('whatsAppRequest', true);                                                                              // 104
				Session.set('requestWhats', req);                                                                                  // 105
				Session.set('responseWhats', res);                                                                                 // 106
				return true;                                                                                                       // 107
			} else {                                                                                                            // 108
				Session.set('whatsAppRequest', false);                                                                             // 109
				return false;                                                                                                      // 110
			}                                                                                                                   // 111
		}                                                                                                                    // 112
                                                                                                                       //
		return whatsAppReq;                                                                                                  // 85
	}(),                                                                                                                  // 85
	'infoStateCollapseNavBar': function () {                                                                              // 113
		function infoStateCollapseNavBar() {                                                                                 // 113
			return Session.get('navBarCollapse');                                                                               // 114
		}                                                                                                                    // 115
                                                                                                                       //
		return infoStateCollapseNavBar;                                                                                      // 113
	}(),                                                                                                                  // 113
	'userImgFound': function () {                                                                                         // 116
		function userImgFound() {                                                                                            // 116
			Meteor.call('findUserData', Meteor.user().username, function (err, res) {                                           // 117
				if (res.userImg) {                                                                                                 // 118
					Meteor.call('findUserImg', res.userImg, function (err, res) {                                                     // 119
						$('#imgProfile').attr("src", res);                                                                               // 120
					});                                                                                                               // 121
				} else {                                                                                                           // 122
					$('#imgProfile').attr("src", "/profileImgTest.png");                                                              // 123
				}                                                                                                                  // 124
			});                                                                                                                 // 126
		}                                                                                                                    // 127
                                                                                                                       //
		return userImgFound;                                                                                                 // 116
	}()                                                                                                                   // 116
});                                                                                                                    // 52
//PARA CONTROLAR SI SE CAMBIA EL TAMAÑO DE PANTALLA                                                                    // 129
$(window).resize(function () {                                                                                         // 130
	console.log("Change Display Size");                                                                                   // 131
	Session.set('sizeDisplay', $(window).width());                                                                        // 132
});                                                                                                                    // 133
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notifications.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/notifications.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.notifications.onCreated(function () {                                                                         // 1
  //console.log("Usuario: ");                                                                                          // 2
  //console.log(Meteor.user().username);                                                                               // 3
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
      /*                                                                                                               // 20
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
/*                                                                                                                     // 31
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
  //console.log("Usuario: ");                                                                                          // 2
  //console.log(Meteor.user().username);                                                                               // 3
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
      //followings = UserUtils.findFollowings(Meteor.user().username);                                                 // 17
      console.log(Meteor.user().username);                                                                             // 18
      return Notifications.find({ recepNotif: Meteor.user().username, read: false });                                  // 19
    }                                                                                                                  // 20
                                                                                                                       //
    return notifications;                                                                                              // 16
  }(),                                                                                                                 // 16
  notificationCount: function () {                                                                                     // 21
    function notificationCount() {                                                                                     // 21
      /*                                                                                                               // 22
      var followings = UserUtils.findFollowings(Meteor.user().username);                                               //
      return Notifications.find({twiitNotifUserName: { $nin: followings }, read: false}).count();                      //
      */                                                                                                               //
      numNotif = UserUtils.findNumberNotif(Meteor.user().username);                                                    // 26
                                                                                                                       //
      return numNotif;                                                                                                 // 28
    }                                                                                                                  // 29
                                                                                                                       //
    return notificationCount;                                                                                          // 21
  }(),                                                                                                                 // 21
  'infoStateCollapseNavBar': function () {                                                                             // 30
    function infoStateCollapseNavBar() {                                                                               // 30
      return Session.get('navBarCollapse');                                                                            // 31
    }                                                                                                                  // 32
                                                                                                                       //
    return infoStateCollapseNavBar;                                                                                    // 30
  }(),                                                                                                                 // 30
  'currentUser': function () {                                                                                         // 33
    function currentUser() {                                                                                           // 33
      return Meteor.user().username;                                                                                   // 34
    }                                                                                                                  // 35
                                                                                                                       //
    return currentUser;                                                                                                // 33
  }()                                                                                                                  // 33
});                                                                                                                    // 7
                                                                                                                       //
Template.notificationsNew.events({                                                                                     // 38
                                                                                                                       //
  'click #linkToNotif': function () {                                                                                  // 40
    function clickLinkToNotif() {                                                                                      // 40
      if (numNotif > 0) {                                                                                              // 41
                                                                                                                       //
        window.location = "/Notifications/" + Meteor.user().username;                                                  // 43
      }                                                                                                                // 44
    }                                                                                                                  // 45
                                                                                                                       //
    return clickLinkToNotif;                                                                                           // 40
  }()                                                                                                                  // 40
                                                                                                                       //
});                                                                                                                    // 38
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"removeProfile.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/removeProfile.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.removeProfile.events({                                                                                        // 1
    'click #remove': function () {                                                                                     // 2
        function clickRemove() {                                                                                       // 2
            var userToRemove = new Object();                                                                           // 3
            var aux = Session.get('dataUser');                                                                         // 4
                                                                                                                       //
            userToRemove.id = aux.userId;                                                                              // 6
            userToRemove.name = aux.userNameProfile;                                                                   // 7
                                                                                                                       //
            console.log(userToRemove);                                                                                 // 9
                                                                                                                       //
            Meteor.call('removeThisUser', userToRemove);                                                               // 11
                                                                                                                       //
            window.location = "/";                                                                                     // 13
        }                                                                                                              // 14
                                                                                                                       //
        return clickRemove;                                                                                            // 2
    }(),                                                                                                               // 2
    'click #noRemove': function () {                                                                                   // 15
        function clickNoRemove() {                                                                                     // 15
            //HAY QUE DECIRLE AL MODAL QUE SE CIERRE                                                                   // 16
            $('#dialog-removeProfile').modal('hide');                                                                  // 17
        }                                                                                                              // 18
                                                                                                                       //
        return clickNoRemove;                                                                                          // 15
    }()                                                                                                                // 15
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"sendRequest.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/sendRequest.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.sendRequest.onRendered(function () {});                                                                       // 1
                                                                                                                       //
Template.sendRequest.events({                                                                                          // 5
  'click #sent': function () {                                                                                         // 6
    function clickSent() {                                                                                             // 6
                                                                                                                       //
      var notif = new Object();                                                                                        // 8
                                                                                                                       //
      notif.recepNotif = Session.get('userToSentPet'); //EL USUARIO QUE VA A RECIBIR LA PETICION                       // 10
      notif.actorNotif = Meteor.user().username; //EL USUARIO QUE REALIZA LA PETICION                                  // 11
      notif.timestamp = new Date();                                                                                    // 12
      notif.typeOfNotif = "whatsAppNotif";                                                                             // 13
                                                                                                                       //
      Meteor.call('createWhatsAppNotification', notif);                                                                // 15
      $('#dialog-showSocialNetwork').modal('hide');                                                                    // 16
      //POR ULTIMO INFORMAMOS AL USUARIO QUE LA PETICION SE HA ENVIADO                                                 // 17
                                                                                                                       //
      $('#dialog-operationSuccess').modal('show');                                                                     // 19
    }                                                                                                                  // 20
                                                                                                                       //
    return clickSent;                                                                                                  // 6
  }(),                                                                                                                 // 6
  'click #noSent': function () {                                                                                       // 21
    function clickNoSent() {                                                                                           // 21
      $('#dialog-showSocialNetwork').modal('hide');                                                                    // 22
    }                                                                                                                  // 23
                                                                                                                       //
    return clickNoSent;                                                                                                // 21
  }()                                                                                                                  // 21
});                                                                                                                    // 5
                                                                                                                       //
Template.sendRequest.helpers({                                                                                         // 26
  'userNameToSentPet': function () {                                                                                   // 27
    function userNameToSentPet() {                                                                                     // 27
      return Session.get('userToSentPet');                                                                             // 28
    }                                                                                                                  // 29
                                                                                                                       //
    return userNameToSentPet;                                                                                          // 27
  }()                                                                                                                  // 27
});                                                                                                                    // 26
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"showSocialNetwork.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/showSocialNetwork.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.showSocialNetwork.onRendered(function () {});                                                                 // 1
                                                                                                                       //
Template.showSocialNetwork.events({                                                                                    // 5
  'click #sent': function () {                                                                                         // 6
    function clickSent() {}                                                                                            // 6
                                                                                                                       //
    return clickSent;                                                                                                  // 6
  }(),                                                                                                                 // 6
  'click #noSent': function () {                                                                                       // 9
    function clickNoSent() {}                                                                                          // 9
                                                                                                                       //
    return clickNoSent;                                                                                                // 9
  }()                                                                                                                  // 9
});                                                                                                                    // 5
                                                                                                                       //
Template.showSocialNetwork.helpers({                                                                                   // 14
  'userNameToSentPet': function () {                                                                                   // 15
    function userNameToSentPet() {                                                                                     // 15
      return Session.get('userToSentPet');                                                                             // 16
    }                                                                                                                  // 17
                                                                                                                       //
    return userNameToSentPet;                                                                                          // 15
  }(),                                                                                                                 // 15
  'showProfileOtherUser': function () {                                                                                // 18
    function showProfileOtherUser() {                                                                                  // 18
      return Session.get('showProfileOtherUser');                                                                      // 19
    }                                                                                                                  // 20
                                                                                                                       //
    return showProfileOtherUser;                                                                                       // 18
  }()                                                                                                                  // 18
});                                                                                                                    // 14
                                                                                                                       //
//EN EL MODAL EMERGENTE QUE MSTRARÁ LA INFORMACION AÑADIDA DEL USUARIO SOBRE SU RED SOCIAL                             // 24
//SE IMPLEMENTARA QUE PINCHE EN EL NOMBRE DE USUARIO Y QUE SE REDIRIJA LA PAGINA A LA                                  // 25
//PAGINA DE PERFIL DE USUARIO QUE CORRESPONDA                                                                          // 26
                                                                                                                       //
//EN INSTAGRAM SE REDIRIGIRÁ A: https://www.instagram.com/{{currentUser.userInsta}}/                                   // 28
//EN FACEBOOK SE REDIRIGIRÁ A: https://www.facebook.com/search/all/?q={{currentUser.userFb}}                           // 29
                                                                                                                       //
//EL CASO DE WHATSAPP ES MAS DIFERENTE. LO QUE HAREMOS SERÁ SOLICITAR AL USUARIO QUE SI QUIERE                         // 31
//AÑADIR EL NUMERO DE TELEFONO EN SU AGENDA (SOLO PARA DISPOSITIVOS MÓVILES)                                           // 32
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"socialNetworkBox.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/socialNetworkBox.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.socialNetworkBox.onRendered(function () {                                                                     // 1
  selectOptions = Session.get('optionsAva');                                                                           // 2
  currentDataUser = Session.get('datauser');                                                                           // 3
  Session.set('inputNotEmpty', true);                                                                                  // 4
  Session.set('removeDataSN', false);                                                                                  // 5
  $('[data-toggle="tooltip"]').tooltip();                                                                              // 6
});                                                                                                                    // 7
                                                                                                                       //
Template.socialNetworkBox.events({                                                                                     // 9
  'click #btnNewSN': function () {                                                                                     // 10
    function clickBtnNewSN() {                                                                                         // 10
      var numSocialNetworks = Session.get('countSocialNetworks');                                                      // 11
                                                                                                                       //
      if (numSocialNetworks < 3) {                                                                                     // 13
                                                                                                                       //
        var avaSelecOptions = "";                                                                                      // 15
        var selectOptionsArray = Session.get('optionsAva');                                                            // 16
                                                                                                                       //
        for (var i = 0; i < selectOptionsArray.length; i++) {                                                          // 18
          avaSelecOptions += "<li><a href='#'>" + selectOptionsArray[i] + "</a></li>";                                 // 19
        }                                                                                                              // 20
                                                                                                                       //
        $('#containerInputs').append("<div class='input-group' id='inputGroup" + numSocialNetworks + "' style='margin-bottom: 10px;'>" + "<div class='input-group-btn'>" + "<button id='" + numSocialNetworks + "' type='button' class='btn btn-default dropdown-toggle btnDropDown btnOptionsSN' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Choose" + "<span class='caret'></span>" + "</button>" + "<ul id='dropdownMenu" + numSocialNetworks + "' class='dropdown-menu'>" + avaSelecOptions + "</ul>" + "</div>" + "<input required id='input" + numSocialNetworks + "' type='text' class='form-control inputSN inputNewSN' aria-label='...' placeholder='Username...'>" + "<button id='clearDataUser" + numSocialNetworks + "' type='button' class='btn btn-danger' aria-haspopup='true' aria-expanded='false'>" + "<span id='" + numSocialNetworks + "' class='glyphicon glyphicon-remove'></span>" + "</button>" + "</div>");
        numSocialNetworks++;                                                                                           // 36
        Session.set('countSocialNetworks', numSocialNetworks);                                                         // 37
      };                                                                                                               // 38
                                                                                                                       //
      if (numSocialNetworks === 3) {                                                                                   // 40
        $('#btnNewSN').hide();                                                                                         // 41
        Session.set('removeDataSN', false);                                                                            // 42
      };                                                                                                               // 43
    }                                                                                                                  // 44
                                                                                                                       //
    return clickBtnNewSN;                                                                                              // 10
  }(),                                                                                                                 // 10
  'click .btnDropDown': function () {                                                                                  // 45
    function clickBtnDropDown(event) {                                                                                 // 45
      Session.set('btnTap', event.target.id);                                                                          // 46
    }                                                                                                                  // 47
                                                                                                                       //
    return clickBtnDropDown;                                                                                           // 45
  }(),                                                                                                                 // 45
  'click .dropdown-menu li a': function () {                                                                           // 48
    function clickDropdownMenuLiA(event) {                                                                             // 48
      var btnTap = Session.get('btnTap');                                                                              // 49
      var selectOption = event.target.text;                                                                            // 50
      //AÑADIR A UN ARRAY LAS SELECCIONES QUE HACEMOS PARA QUE NO SE PUEDAN REPETIR.                                   // 51
      //ES DECIR, UN USUARIO SOLO VA A PODER ENLAZAR 1 CUENTA DE FACEBOOK, INSTAGRAM                                   // 52
      //O WHATSAPP.                                                                                                    // 53
      var arrOptions = Session.get('optionsAva');                                                                      // 54
                                                                                                                       //
      var numSele = arrOptions.indexOf(selectOption);                                                                  // 56
      if (numSele >= 0) {                                                                                              // 57
        arrOptions.splice(numSele, 1);                                                                                 // 58
      }                                                                                                                // 59
                                                                                                                       //
      //VAMOS A COMPROBAR QUE SI selectOption ES WHATSAPP LE VAMOS A PONER AL INPUT UN FORMATO PARA QUE                // 61
      //EL USUARIO SOLO PUEDA INTRODUCIR NUMEROS                                                                       // 62
      if (selectOption === "WhatsApp") {                                                                               // 63
        $('#input' + btnTap).attr("type", "number");                                                                   // 64
      }                                                                                                                // 65
                                                                                                                       //
      //UNA VEZ SELECCIONADO LA OPCION DEL DROPDOWN, TRANSFORMAMOS EL DROPDOWN A UN BTN DESHABILITADO                  // 67
      $('#' + btnTap).html(selectOption);                                                                              // 68
                                                                                                                       //
      $('#dropdownMenu' + btnTap).remove();                                                                            // 70
                                                                                                                       //
      Session.set('optionsAva', arrOptions);                                                                           // 72
    }                                                                                                                  // 73
                                                                                                                       //
    return clickDropdownMenuLiA;                                                                                       // 48
  }(),                                                                                                                 // 48
  'click .btn-danger': function () {                                                                                   // 74
    function clickBtnDanger(event) {                                                                                   // 74
                                                                                                                       //
      //GUARDAMOS EL ID (numero entre 0 y 2) PARA DESPUES IDENTIFICAR EL INPUT-GROUP Y ASI ELIMINAR LOS DATOS DE MONGODB
      var selectOption = event.target.id;                                                                              // 77
      //AHORA BUSCAMOS EL CAMPO A ELIMINAR Y LLAMAMOS AL METODO DE userData.js                                         // 78
      var btnToRem = $('#' + selectOption).text();                                                                     // 79
      var newData = new Object();                                                                                      // 80
                                                                                                                       //
      if (btnToRem != 'Choose') {                                                                                      // 82
        newData.userId = Session.get('datauser')._id;                                                                  // 83
        newData.propertyToRem = btnToRem;                                                                              // 84
                                                                                                                       //
        Meteor.call('removeDataSocialNetworks', newData);                                                              // 86
      };                                                                                                               // 87
                                                                                                                       //
      //POR ULTIMO VAMOS A INFORMAR AL USUARIO QUE SE HA ELIMINADO LA RED SOCIAL                                       // 89
      //PARA ELLO, VAMOS A ELIMINAR EL inputGroup DE LA SN QUE SE HA ELIMINADO                                         // 90
      $('#inputGroup' + selectOption).remove();                                                                        // 91
      Session.set('removeDataSN', true);                                                                               // 92
                                                                                                                       //
      //ACTUALIZAMOS EL VALOR DE optionsAva EN Session.keys                                                            // 94
      var auxOptions = Session.get('optionsAva');                                                                      // 95
                                                                                                                       //
      if (btnToRem != "Choose") {                                                                                      // 97
        if (auxOptions.indexOf(newData.propertyToRem) === -1) {                                                        // 98
          auxOptions.push(newData.propertyToRem);                                                                      // 99
          Session.set('optionsAva', auxOptions);                                                                       // 100
        };                                                                                                             // 101
      };                                                                                                               // 102
                                                                                                                       //
      //ACTUALIZAMOS EL VALOR DE countSocialNetworks EN Session.keys                                                   // 104
      var auxCount = Session.get('countSocialNetworks');                                                               // 105
      auxCount--;                                                                                                      // 106
      Session.set('countSocialNetworks', auxCount);                                                                    // 107
                                                                                                                       //
      //CUANDO SE BORRA UN INPUTGROUP HAY QUE REESTABLECER LOS ID PARA QUE EMPIECEN POR 0 HASTA 2                      // 109
                                                                                                                       //
      for (var i = 0; i < auxCount; i++) {                                                                             // 111
        $('.input-group').attr('id', 'inputGroup' + i);                                                                // 112
                                                                                                                       //
        $('.btnOptionsSN').attr('id', i);                                                                              // 114
                                                                                                                       //
        $('.dropdown-menu').attr('id', 'dropdownMenu' + i);                                                            // 116
                                                                                                                       //
        $('.inputSN').attr('id', 'input' + i);                                                                         // 118
                                                                                                                       //
        $('.glyphicon-remove').attr('id', i);                                                                          // 120
                                                                                                                       //
        $('.btn-danger').attr('id', 'clearDataUser' + i);                                                              // 122
      }                                                                                                                // 123
                                                                                                                       //
      if (auxCount < 3) {                                                                                              // 125
        Session.set('modeToAdd', true);                                                                                // 126
        $('#btnNewSN').show();                                                                                         // 127
      }                                                                                                                // 128
    }                                                                                                                  // 129
                                                                                                                       //
    return clickBtnDanger;                                                                                             // 74
  }(),                                                                                                                 // 74
  'click #saveData': function () {                                                                                     // 130
    function clickSaveData() {                                                                                         // 130
      //DE ESTA MANERA OBTENEMOS TODOS LOS BLOQUES QUE HEMOS AÑADIDO DINÁMICAMENTE                                     // 131
      //HAY QUE OBTENER TODOS LOS VALORES SELECCIONADOS EN CADA DROPDOWN Y EL CONTENIDO DE SUS RESPECTIVOS INPUT       // 132
      //TODO                                                                                                           // 133
      var valuesInput = [];                                                                                            // 134
      var valuesButton = [];                                                                                           // 135
      var foundInputNewSN = false;                                                                                     // 136
                                                                                                                       //
      //PARA CADA CASO HAY QUE COMPROBAR QUE LOS INPUT QUE TIENEN, ESTAN RELLENADOS. EN EL CASO DE LAS REDES QUE       // 138
      //YA EXISTEN EN MNONGODB, SE COGERÁ SU PLACEHOLDER.                                                              // 139
      if (Session.get('modeToAdd') === true) {                                                                         // 140
        //ESTE ES EL CASO QUE SE DA CUANDO SE HA INTRODUCIDO UNA NUEVA RED SOCIAL PARA ANIADIRLA A MONGODB             // 141
        //ESTE CASO SALTA CUANDO SE HA DADO AL BOTON DE addNewSN                                                       // 142
                                                                                                                       //
        //RECORREMOS LOS INPUT QUE VIENEN DIRECTAMENTE DE MONGODB                                                      // 144
        $('.inputSN').each(function () {                                                                               // 145
          if ($(this).val() != "") {                                                                                   // 146
            valuesInput.push($(this).val());                                                                           // 147
          }                                                                                                            // 148
        });                                                                                                            // 149
                                                                                                                       //
        //RECORREMOS LOS INPUT CREADOS CON EL BTN addNewSN                                                             // 152
        $('.inputNewSN').each(function () {                                                                            // 153
          if ($(this).val() != "") {                                                                                   // 154
            valuesInput.push($(this).val());                                                                           // 155
            Session.set('inputNotEmpty', true);                                                                        // 156
          } else {                                                                                                     // 157
            Session.set('inputNotEmpty', false);                                                                       // 158
          }                                                                                                            // 159
          foundInputNewSN = true;                                                                                      // 160
        });                                                                                                            // 161
                                                                                                                       //
        if (valuesInput.length === 0) {                                                                                // 164
          //SI SE HA AÑADIDO UN INPUT EN EL QUE NO SE HA INTRODUCIDO NADA,                                             // 165
          //HAY QUE AVISAR AL USUARIO DE QUE TIENE QUE INTRODUCIR UN VALOR                                             // 166
          $('.inputSN').each(function () {                                                                             // 167
            if ($(this).val() === "") {                                                                                // 168
              console.log("NO hay val");                                                                               // 169
              $(this).addClass("fieldEmpty");                                                                          // 170
              $('.msgFieldEmpty').attr("hidden", false);                                                               // 171
            };                                                                                                         // 172
          });                                                                                                          // 173
        }                                                                                                              // 174
                                                                                                                       //
        if (foundInputNewSN) {                                                                                         // 176
          valuesInput.splice(valuesInput.length - 1, 1);                                                               // 177
          foundInputNewSN = false;                                                                                     // 178
        }                                                                                                              // 179
      } else {                                                                                                         // 181
        //ESTE CASO SE PRODUCE CUANDO LAS REDES QUE SE MUESTRAN AL USUARIO SON TODAS YA EXISTENTES EN MONGODB          // 182
        //POR TANTO, SOLO RECORREMOS LOS INPUT QUE VIENEN DIRECTAMENTE DE MONGODB                                      // 183
        $('.inputSN').each(function () {                                                                               // 184
          if ($(this).val() === "") {                                                                                  // 185
            valuesInput.push($(this).attr('placeholder'));                                                             // 186
          } else {                                                                                                     // 187
            valuesInput.push($(this).val());                                                                           // 188
          }                                                                                                            // 189
        });                                                                                                            // 190
                                                                                                                       //
        Session.set('inputNotEmpty', true);                                                                            // 192
      };                                                                                                               // 193
                                                                                                                       //
      //RECOGEMOS LOS VALORES DE LOS BOTONES DESACTIVADOS (NOMBRES REDES SOCIALES)                                     // 195
      $('.btnOptionsSN').each(function () {                                                                            // 196
        valuesButton.push($(this).text());                                                                             // 197
      });                                                                                                              // 198
                                                                                                                       //
      if (Session.get('inputNotEmpty')) {                                                                              // 200
        //COMPROBAMOS QUE SE HA INTRODUCIDO ALGUN VALOR O SELECCIONADO ALGUNA RED SOCIAL PARA AÑADIRLA                 // 201
        if (valuesInput && valuesButton) {                                                                             // 202
          //AHORA OBTENEMOS EL _id DEL USUARIO Y LO AÑADIMOS AL OBJETO QUE LE VAMOS A PASAR                            // 203
          //A LA LLAMADA A userData.js QUE SE ENCARGARÁ DE ACTUALIZAR EL REGISTRO.                                     // 204
          var newData = new Object();                                                                                  // 205
          newData.userId = Session.get('datauser')._id;                                                                // 206
                                                                                                                       //
          for (i = 0; i < valuesButton.length; i++) {                                                                  // 208
            var valu = valuesButton[i];                                                                                // 209
            var num = valuesButton.indexOf(valu);                                                                      // 210
                                                                                                                       //
            if (num >= 0) {                                                                                            // 212
              if ("WhatsApp" === valu) {                                                                               // 213
                newData.userWhats = valuesInput[num];                                                                  // 214
              } else if ("Facebook" === valu) {                                                                        // 215
                newData.userFb = valuesInput[num];                                                                     // 216
              } else if ("Instagram" === valu) {                                                                       // 217
                newData.userInsta = valuesInput[num];                                                                  // 218
              }                                                                                                        // 219
            }                                                                                                          // 220
          }                                                                                                            // 221
          //POR ULTIMO, REALIZAMOS LA LLAMADA A userData.js                                                            // 222
          Meteor.call('updUserDataSocialNetworks', newData);                                                           // 223
        }                                                                                                              // 224
                                                                                                                       //
        //HAY QUE DECIRLE AL MODAL QUE SE CIERRE                                                                       // 227
        $('#dialog-NewSocialNetwork').modal('hide');                                                                   // 228
      }                                                                                                                // 229
                                                                                                                       //
      //EN EL CASO DE QUE SE DE CLICK A SALVAR DATOS DESPUES DE HABER ELIMINADO UNA RED SOCIAL                         // 231
      //SE TENDRÁ QUE DECIR AL SISTEMA QUE CAMBIE LA OPCION DE EDITAR SN A AÑADIR SN                                   // 232
      if (Session.get('removeDataSN')) {                                                                               // 233
        Session.set('modeToAdd', false);                                                                               // 234
        Session.set('removeDataSN', false);                                                                            // 235
      };                                                                                                               // 236
    }                                                                                                                  // 237
                                                                                                                       //
    return clickSaveData;                                                                                              // 130
  }()                                                                                                                  // 130
});                                                                                                                    // 9
                                                                                                                       //
Template.socialNetworkBox.helpers({                                                                                    // 240
  'modeAddNewSN': function () {                                                                                        // 241
    function modeAddNewSN() {                                                                                          // 241
      var result = new Object();                                                                                       // 242
                                                                                                                       //
      var currentDataUser = Session.get('datauser');                                                                   // 244
                                                                                                                       //
      var selectOptions = ["WhatsApp", "Instagram", "Facebook"];                                                       // 246
      var numSocialNetworks = 0;                                                                                       // 247
                                                                                                                       //
      var datauserSN = [];                                                                                             // 249
                                                                                                                       //
      if (currentDataUser.userWhats) {                                                                                 // 251
        var numSele = selectOptions.indexOf("WhatsApp");                                                               // 252
        selectOptions.splice(numSele, 1);                                                                              // 253
        numSocialNetworks += 1;                                                                                        // 254
        datauserSN.push(currentDataUser.userWhats);                                                                    // 255
      }                                                                                                                // 256
                                                                                                                       //
      if (currentDataUser.userFb) {                                                                                    // 258
        var numSele = selectOptions.indexOf("Facebook");                                                               // 259
        selectOptions.splice(numSele, 1);                                                                              // 260
        numSocialNetworks += 1;                                                                                        // 261
        datauserSN.push(currentDataUser.userFb);                                                                       // 262
      }                                                                                                                // 263
                                                                                                                       //
      if (currentDataUser.userInsta) {                                                                                 // 265
        var numSele = selectOptions.indexOf("Instagram");                                                              // 266
        selectOptions.splice(numSele, 1);                                                                              // 267
        numSocialNetworks += 1;                                                                                        // 268
        datauserSN.push(currentDataUser.userInsta);                                                                    // 269
      }                                                                                                                // 270
                                                                                                                       //
      Session.set('getDataUserSN', datauserSN);                                                                        // 272
                                                                                                                       //
      Session.set('countSocialNetworks', numSocialNetworks);                                                           // 274
                                                                                                                       //
      Session.set('optionsAva', selectOptions);                                                                        // 276
                                                                                                                       //
      if (selectOptions.length > 0 && selectOptions.length <= 3) {                                                     // 279
        result.messageMode = "Añade tu red social a twiiterClone";                                                     // 280
        Session.set('modeToAdd', true);                                                                                // 281
      } else if (selectOptions.length === 0) {                                                                         // 282
        //POR ULTIMO VAMOS A AÑADIR LOS CAMPOS PARA PODER SER EDITADOS                                                 // 283
        var aux = ["WhatsApp", "Facebook", "Instagram"];                                                               // 284
        var contentToAppend = [];                                                                                      // 285
        for (var i = 0; i < numSocialNetworks; i++) {                                                                  // 286
          var objAux = new Object();                                                                                   // 287
          objAux.id = i;                                                                                               // 288
          objAux.valueBtn = aux[i];                                                                                    // 289
          objAux.placeholder = datauserSN[i];                                                                          // 290
                                                                                                                       //
          contentToAppend.push(objAux);                                                                                // 292
        }                                                                                                              // 293
        result.messageMode = "Edita tu red social";                                                                    // 294
        Session.set('appendThis', contentToAppend);                                                                    // 295
        Session.set('modeToAdd', false);                                                                               // 296
      }                                                                                                                // 297
                                                                                                                       //
      return result;                                                                                                   // 299
    }                                                                                                                  // 300
                                                                                                                       //
    return modeAddNewSN;                                                                                               // 241
  }(),                                                                                                                 // 241
                                                                                                                       //
  'contentToAppend': function () {                                                                                     // 302
    function contentToAppend() {                                                                                       // 302
      return Session.get('appendThis');                                                                                // 303
    }                                                                                                                  // 304
                                                                                                                       //
    return contentToAppend;                                                                                            // 302
  }(),                                                                                                                 // 302
                                                                                                                       //
  'userHaveSN': function () {                                                                                          // 306
    function userHaveSN() {                                                                                            // 306
      if (Session.get('optionsAva').length > 0) {                                                                      // 307
        return true;                                                                                                   // 308
      } else if (Session.get('modeToAdd')) {                                                                           // 309
        return true;                                                                                                   // 310
      } else {                                                                                                         // 311
        return false;                                                                                                  // 312
      }                                                                                                                // 313
    }                                                                                                                  // 314
                                                                                                                       //
    return userHaveSN;                                                                                                 // 306
  }()                                                                                                                  // 306
});                                                                                                                    // 240
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweetBox.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/tweetBox.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//DETECTAMOS QUE SE ENCUENTRA EN EL CLIENTE EL CODIGO QUE SE VA  AEJECUTAR                                             // 1
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
					//recepNotif                                                                                                      // 33
					tweet.recepUser = UserUtils.findUserFromTwiit(twiitId);                                                           // 34
				} else {                                                                                                           // 35
					tweet.typeOfNotif = "twiit";                                                                                      // 36
					//recepNotif                                                                                                      // 37
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
					return 'charCount'; //o el nombre que le disteis en el fichero css                                                // 57
				}                                                                                                                  // 58
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
      //PRIMERO TENEMOS QUE COMPROBAR SI HAY NOTIFICACIONES                                                            // 35
      if (numNotif === 1) {                                                                                            // 36
        //BUSCAMOS LAS NOTIFICACIONES DISPONIBLES                                                                      // 37
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
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                            // 53
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                           // 54
                                                                                                                       //
      //HACEMOS UNA COMPROBACION DE QUE EL TWIIT NO TIENE NINGUN FAV O QUE SI LO TIENE                                 // 56
      if (!userTapFav) {                                                                                               // 57
        //console.log("No tiene FAVS");                                                                                // 58
        UserUtils.addFavToTwiit(this._id, idUser);                                                                     // 59
        $("#" + this._id).addClass("heartFav");                                                                        // 60
        $("#" + this._id).removeClass("heartNoFav");                                                                   // 61
      } else {                                                                                                         // 62
        var arrAux = userTapFav.idUserTapFav;                                                                          // 63
      }                                                                                                                // 64
                                                                                                                       //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                       // 66
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
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                                // 81
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                             // 82
        //LA OPERACION INVERSA                                                                                         // 83
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
      //SI EL TWIIT TIENE POR LO MENOS 1 COMENTARIO, ENTONCES REDIRIGIMOS AL USUARIO A                                 // 91
      //LA RUTA /Comments. SI NO, SE ABRE EL MODAL Y SE PUEDE HACER EL COMENTARIO                                      // 92
      if (numComment === 0) {                                                                                          // 93
        $("#dialog-NewTwiit").modal();                                                                                 // 94
        Session.set('commentMode', true);                                                                              // 95
        Session.set('idCurrentTwiit', this._id);                                                                       // 96
      }                                                                                                                // 97
    }                                                                                                                  // 98
                                                                                                                       //
    return clickBtnComm;                                                                                               // 89
  }()                                                                                                                  // 89
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
      /*                                                                                                               // 8
      var tweet =  Twitts.find({user: this.name}, {                                                                    //
          sort: {timestamp: -1},                                                                                       //
          limit: 10                                                                                                    //
      });                                                                                                              //
      */                                                                                                               //
      return UserUtils.findTweets(this.name);                                                                          // 14
    }                                                                                                                  // 15
                                                                                                                       //
    return tweetMessageProfile;                                                                                        // 7
  }(),                                                                                                                 // 7
  'convertDateTime': function () {                                                                                     // 16
    function convertDateTime() {                                                                                       // 16
      var dateNew = new Date(this.timestamp);                                                                          // 17
      var dateCon = dateNew.toLocaleString();                                                                          // 18
      return dateCon;                                                                                                  // 19
    }                                                                                                                  // 20
                                                                                                                       //
    return convertDateTime;                                                                                            // 16
  }(),                                                                                                                 // 16
  'numComment': function () {                                                                                          // 21
    function numComment() {                                                                                            // 21
      var num = UserUtils.findNumComment(this._id);                                                                    // 22
      if (num > 0) {                                                                                                   // 23
        return true;                                                                                                   // 24
      } else return false;                                                                                             // 25
    }                                                                                                                  // 26
                                                                                                                       //
    return numComment;                                                                                                 // 21
  }(),                                                                                                                 // 21
  'idToFavBtn': function () {                                                                                          // 27
    function idToFavBtn() {                                                                                            // 27
      return this._id;                                                                                                 // 28
    }                                                                                                                  // 29
                                                                                                                       //
    return idToFavBtn;                                                                                                 // 27
  }(),                                                                                                                 // 27
  'classFav': function () {                                                                                            // 30
    function classFav() {                                                                                              // 30
      var num = UserUtils.findNumberFavPerTwiit(this._id);                                                             // 31
      if (num > 0) {                                                                                                   // 32
        return "heartFav";                                                                                             // 33
      } else return "heartNoFav";                                                                                      // 34
    }                                                                                                                  // 35
                                                                                                                       //
    return classFav;                                                                                                   // 30
  }()                                                                                                                  // 30
});                                                                                                                    // 6
                                                                                                                       //
Template.tweetFeedProfile.events({                                                                                     // 38
  'click #btnFav': function () {                                                                                       // 39
    function clickBtnFav() {                                                                                           // 39
      var currentUser = Session.get('currentUser');                                                                    // 40
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                                // 41
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                            // 42
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                           // 43
      var arrAux = userTapFav.idUserTapFav;                                                                            // 44
                                                                                                                       //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                       // 46
      if (arrAux.indexOf(idUser) === -1) {                                                                             // 47
        UserUtils.addFavToTwiit(this._id, idUser);                                                                     // 48
                                                                                                                       //
        var notif = new Object();                                                                                      // 50
        notif._id = this._id;                                                                                          // 51
        notif.typeOfNotif = "fav";                                                                                     // 52
        notif.actorNotif = currentUser;                                                                                // 53
        notif.recepNotif = UserUtils.findUserFromTwiit(this._id);                                                      // 54
                                                                                                                       //
        console.log(notif);                                                                                            // 56
                                                                                                                       //
        Meteor.call('createTwiitNotification', notif);                                                                 // 58
                                                                                                                       //
        $("#" + this._id).addClass("heartFav");                                                                        // 60
        $("#" + this._id).removeClass("heartNoFav");                                                                   // 61
      } else {                                                                                                         // 62
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                                // 63
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                             // 64
        //LA OPERACION INVERSA                                                                                         // 65
        UserUtils.removeFavToTwiit(this._id, idUser);                                                                  // 66
        $("#" + this._id).addClass("heartNoFav");                                                                      // 67
        $("#" + this._id).removeClass("heartFav");                                                                     // 68
      }                                                                                                                // 69
    }                                                                                                                  // 70
                                                                                                                       //
    return clickBtnFav;                                                                                                // 39
  }(), /*                                                                                                              // 39
       'click #btnComm' : function(){                                                                                  //
       var numComment = UserUtils.findNumComment(this._id);                                                            //
       //SI EL TWIIT TIENE POR LO MENOS 1 COMENTARIO, ENTONCES REDIRIGIMOS AL USUARIO A                                //
       //LA RUTA /Comments. SI NO, SE ABRE EL MODAL Y SE PUEDE HACER EL COMENTARIO                                     //
       if(numComment === 0){                                                                                           //
           $("#dialog-NewTwiit").modal();                                                                              //
           Session.set('commentMode', true);                                                                           //
           Session.set('idCurrentTwiit', this._id);                                                                    //
       }                                                                                                               //
       }*/                                                                                                             //
  'click .userNameProfile': function () {                                                                              // 81
    function clickUserNameProfile(event) {                                                                             // 81
      window.location = "/Profile/" + event.target.id;                                                                 // 82
    }                                                                                                                  // 83
                                                                                                                       //
    return clickUserNameProfile;                                                                                       // 81
  }()                                                                                                                  // 81
});                                                                                                                    // 38
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
  //DEVUELVE EL MENSAJE ORIGINAL DEL QUE SE PRODUCEN LOS COMENTARIOS                                                   // 7
  'tweetMessage': function () {                                                                                        // 8
    function tweetMessage() {                                                                                          // 8
      //HAY QUE CONSEGUIR PASAR A ESTA VISTA EL this._id DE tweetFeed PARA PODER                                       // 9
      //DEVOLVER EL TWEET INICIAL Y DE AHI PASAR A MOSTRAR CON tweetThatCommentMessage                                 // 10
      //TODOS LOS COMENTARIOS QUE TENGA!                                                                               // 11
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
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                            // 47
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                           // 48
      var arrAux = userTapFav.idUserTapFav;                                                                            // 49
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                       // 50
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
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                                // 67
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                             // 68
        //LA OPERACION INVERSA                                                                                         // 69
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
  arrWithCommNotif = [];                                                                                               // 6
  arrWithFavsNotif = [];                                                                                               // 7
  countArrFavs = 0;                                                                                                    // 8
  countArrComm = 0;                                                                                                    // 9
                                                                                                                       //
  foundNotifComm = UserUtils.findNotifForTypeNotif(this.data.name, 'comment');                                         // 11
                                                                                                                       //
  foundNotifFavs = UserUtils.findNotifForTypeNotif(this.data.name, 'fav');                                             // 13
                                                                                                                       //
  Session.set('notificationsModeOn', true);                                                                            // 15
});                                                                                                                    // 16
                                                                                                                       //
Template.twiitPageNew.helpers({                                                                                        // 18
  'setStyleNavBar': function () {                                                                                      // 19
    function setStyleNavBar() {                                                                                        // 19
      var widthNav = $(window).width();                                                                                // 20
      //RESTAMOS DOS PIXELES POR LOS BORDES                                                                            // 21
      widthNav -= 2;                                                                                                   // 22
      return widthNav / 2 + "px";                                                                                      // 23
    }                                                                                                                  // 24
                                                                                                                       //
    return setStyleNavBar;                                                                                             // 19
  }(),                                                                                                                 // 19
                                                                                                                       //
  'convertDateTime': function () {                                                                                     // 26
    function convertDateTime() {                                                                                       // 26
      var dateNew = new Date(this.twiitTimeStamp);                                                                     // 27
      var dateCon = dateNew.toLocaleString();                                                                          // 28
      return dateCon;                                                                                                  // 29
    }                                                                                                                  // 30
                                                                                                                       //
    return convertDateTime;                                                                                            // 26
  }(),                                                                                                                 // 26
                                                                                                                       //
  'showComments': function () {                                                                                        // 32
    function showComments() {                                                                                          // 32
      countArrComm = foundNotifComm.count();                                                                           // 33
      Session.set('lengthArrComm', countArrComm);                                                                      // 34
      return foundNotifComm;                                                                                           // 35
    }                                                                                                                  // 36
                                                                                                                       //
    return showComments;                                                                                               // 32
  }(),                                                                                                                 // 32
                                                                                                                       //
  'showFavs': function () {                                                                                            // 38
    function showFavs() {                                                                                              // 38
      countArrFavs = foundNotifFavs.count();                                                                           // 39
      Session.set('lengthArrFavs', countArrFavs);                                                                      // 40
      return foundNotifFavs;                                                                                           // 41
    }                                                                                                                  // 42
                                                                                                                       //
    return showFavs;                                                                                                   // 38
  }(),                                                                                                                 // 38
                                                                                                                       //
  'countNotifTwiit': function () {                                                                                     // 44
    function countNotifTwiit() {                                                                                       // 44
      var numNotif = UserUtils.findNumberNotif(this.name);                                                             // 45
      if (numNotif === 0) {                                                                                            // 46
        return false;                                                                                                  // 47
      } else {                                                                                                         // 48
        return true;                                                                                                   // 49
      }                                                                                                                // 50
    }                                                                                                                  // 51
                                                                                                                       //
    return countNotifTwiit;                                                                                            // 44
  }(),                                                                                                                 // 44
                                                                                                                       //
  'saveIdInArr': function () {                                                                                         // 53
    function saveIdInArr() {                                                                                           // 53
      arrWithId.push(this._id);                                                                                        // 54
      if (this.typeOfNotif === 'comment') {                                                                            // 55
        if (arrWithCommNotif.length < countArrComm) {                                                                  // 56
          arrWithCommNotif.push(this._id);                                                                             // 57
        }                                                                                                              // 58
      } else if (this.typeOfNotif === 'fav') {                                                                         // 59
        if (arrWithFavsNotif.length < countArrFavs) {                                                                  // 60
          arrWithFavsNotif.push(this._id);                                                                             // 61
        }                                                                                                              // 62
      }                                                                                                                // 63
    }                                                                                                                  // 64
                                                                                                                       //
    return saveIdInArr;                                                                                                // 53
  }(),                                                                                                                 // 53
                                                                                                                       //
  'selectTypeNotifToShow': function () {                                                                               // 66
    function selectTypeNotifToShow() {                                                                                 // 66
                                                                                                                       //
      var lengthFavs = Session.get('lengthArrFavs');                                                                   // 68
      var lengthComm = Session.get('lengthArrComm');                                                                   // 69
                                                                                                                       //
      if (lengthFavs > lengthComm) {                                                                                   // 71
        //SOLO MOSTRAMOS LAS NOTIF DE TIPO FAVS Y HAY QUE DEJAR SELECCIONADO                                           // 72
        //EL BTN DE FAVS DE LA NAVBAR FOOTER                                                                           // 73
        Session.set('btnShowCommIsPulse', false);                                                                      // 74
      } else if (lengthFavs < lengthComm) {                                                                            // 75
        //SOLO MOSTRAMOS LAS NOTIF DE TIPO COMM Y HAY QUE DEJAR SELECCIONADO                                           // 76
        //EL BTN DE COMM DE LA NAVBAR FOOTER                                                                           // 77
        Session.set('btnShowCommIsPulse', true);                                                                       // 78
      } else {                                                                                                         // 79
        //SI TENEMOS EL MISMO NUMERO DE NOTIF, NO HACEMOS NADA. MOSTRAMOS TODAS.                                       // 80
        console.log("OLI");                                                                                            // 81
      }                                                                                                                // 82
    }                                                                                                                  // 83
                                                                                                                       //
    return selectTypeNotifToShow;                                                                                      // 66
  }(),                                                                                                                 // 66
                                                                                                                       //
  'numFavPerTwiit': function () {                                                                                      // 85
    function numFavPerTwiit() {                                                                                        // 85
      return UserUtils.findNumberFavPerTwiit(this.twiitId);                                                            // 86
    }                                                                                                                  // 87
                                                                                                                       //
    return numFavPerTwiit;                                                                                             // 85
  }(),                                                                                                                 // 85
  'findNumComment': function () {                                                                                      // 88
    function findNumComment() {                                                                                        // 88
      //AQUI this._id ES EL _ID DE LA COLLECTION NOTIFICATIONS                                                         // 89
      //POR LO QUE HABRA QUE SACAR EL CAMPO twiitId                                                                    // 90
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                            // 91
                                                                                                                       //
      var num = UserUtils.findNumComment(twiitId);                                                                     // 93
      if (num > 0) {                                                                                                   // 94
        return true;                                                                                                   // 95
      } else return false;                                                                                             // 96
    }                                                                                                                  // 97
                                                                                                                       //
    return findNumComment;                                                                                             // 88
  }(),                                                                                                                 // 88
  'numComment': function () {                                                                                          // 98
    function numComment() {                                                                                            // 98
      var num = UserUtils.findNumComment(UserUtils.findTwiitFromNotif(this._id));                                      // 99
      return num;                                                                                                      // 100
    }                                                                                                                  // 101
                                                                                                                       //
    return numComment;                                                                                                 // 98
  }(),                                                                                                                 // 98
  'idToFavBtn': function () {                                                                                          // 102
    function idToFavBtn() {                                                                                            // 102
      return this._id;                                                                                                 // 103
    }                                                                                                                  // 104
                                                                                                                       //
    return idToFavBtn;                                                                                                 // 102
  }(),                                                                                                                 // 102
  'classFav': function () {                                                                                            // 105
    function classFav() {                                                                                              // 105
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                            // 106
      var num = UserUtils.findNumberFavPerTwiit(twiitId);                                                              // 107
      if (num > 0) {                                                                                                   // 108
        return "heartFav";                                                                                             // 109
      } else return "heartNoFav";                                                                                      // 110
    }                                                                                                                  // 111
                                                                                                                       //
    return classFav;                                                                                                   // 105
  }(),                                                                                                                 // 105
  'numFavorite': function () {                                                                                         // 112
    function numFavorite() {                                                                                           // 112
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                            // 113
      var num = UserUtils.findNumberFavPerTwiit(twiitId);                                                              // 114
      if (num > 0) {                                                                                                   // 115
        return true;                                                                                                   // 116
      } else return false;                                                                                             // 117
    }                                                                                                                  // 118
                                                                                                                       //
    return numFavorite;                                                                                                // 112
  }(),                                                                                                                 // 112
  'numFav': function () {                                                                                              // 119
    function numFav() {                                                                                                // 119
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                            // 120
      var num = UserUtils.findNumberFavPerTwiit(twiitId);                                                              // 121
      return num;                                                                                                      // 122
    }                                                                                                                  // 123
                                                                                                                       //
    return numFav;                                                                                                     // 119
  }(),                                                                                                                 // 119
  'btnShowComm': function () {                                                                                         // 124
    function btnShowComm() {                                                                                           // 124
      return Session.get('btnShowCommIsPulse');                                                                        // 125
    }                                                                                                                  // 126
                                                                                                                       //
    return btnShowComm;                                                                                                // 124
  }(),                                                                                                                 // 124
  'noCommNotif': function () {                                                                                         // 127
    function noCommNotif() {                                                                                           // 127
      if (Session.get('lengthArrComm') === 0) {                                                                        // 128
        return true;                                                                                                   // 129
      } else {                                                                                                         // 130
        return false;                                                                                                  // 131
      }                                                                                                                // 132
    }                                                                                                                  // 133
                                                                                                                       //
    return noCommNotif;                                                                                                // 127
  }(),                                                                                                                 // 127
  'noFavsNotif': function () {                                                                                         // 134
    function noFavsNotif() {                                                                                           // 134
      if (Session.get('lengthArrFavs') === 0) {                                                                        // 135
        return true;                                                                                                   // 136
      } else {                                                                                                         // 137
        return false;                                                                                                  // 138
      }                                                                                                                // 139
    }                                                                                                                  // 140
                                                                                                                       //
    return noFavsNotif;                                                                                                // 134
  }(),                                                                                                                 // 134
  'notifCommCount': function () {                                                                                      // 141
    function notifCommCount() {                                                                                        // 141
      return Session.get('lengthArrComm');                                                                             // 142
    }                                                                                                                  // 143
                                                                                                                       //
    return notifCommCount;                                                                                             // 141
  }(),                                                                                                                 // 141
  'notifFavsCount': function () {                                                                                      // 144
    function notifFavsCount() {                                                                                        // 144
      return Session.get('lengthArrFavs');                                                                             // 145
    }                                                                                                                  // 146
                                                                                                                       //
    return notifFavsCount;                                                                                             // 144
  }()                                                                                                                  // 144
});                                                                                                                    // 18
                                                                                                                       //
Template.twiitPageNew.events({                                                                                         // 149
  'click .btnDismissNotif': function () {                                                                              // 150
    function clickBtnDismissNotif(event) {                                                                             // 150
      console.log(arrWithCommNotif.length);                                                                            // 151
      console.log(arrWithFavsNotif.length);                                                                            // 152
                                                                                                                       //
      console.log(arrWithId);                                                                                          // 154
                                                                                                                       //
      var idBtn = event.target.id;                                                                                     // 156
                                                                                                                       //
      if (idBtn === 'dismissCommNotif') {                                                                              // 158
        for (var aux in meteorBabelHelpers.sanitizeForInObject(arrWithCommNotif)) {                                    // 159
          var id = arrWithCommNotif[aux];                                                                              // 160
          Notifications.update(id, { $set: { read: true } });                                                          // 161
          arrWithCommNotif.splice(aux, 1);                                                                             // 162
        }                                                                                                              // 163
      } else if (idBtn === 'dismissFavsNotif') {                                                                       // 164
        for (var aux in meteorBabelHelpers.sanitizeForInObject(arrWithFavsNotif)) {                                    // 165
          var id = arrWithFavsNotif[aux];                                                                              // 166
          Notifications.update(id, { $set: { read: true } });                                                          // 167
          arrWithFavsNotif.splice(aux, 1);                                                                             // 168
        }                                                                                                              // 169
      }                                                                                                                // 170
                                                                                                                       //
      Session.set('lengthArrFavs', arrWithFavsNotif.length);                                                           // 172
      Session.set('lengthArrComm', arrWithCommNotif.length);                                                           // 173
                                                                                                                       //
      if (arrWithCommNotif.length === 0 && arrWithFavsNotif.length === 0) {                                            // 175
        window.location = "/";                                                                                         // 176
      }                                                                                                                // 177
    }                                                                                                                  // 178
                                                                                                                       //
    return clickBtnDismissNotif;                                                                                       // 150
  }(),                                                                                                                 // 150
  'click #btnFav': function () {                                                                                       // 179
    function clickBtnFav() {                                                                                           // 179
      var currentUser = Session.get('currentUser');                                                                    // 180
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                                // 181
                                                                                                                       //
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                            // 183
      var idAux = UserUtils.findTwiitFromNotif(this._id);                                                              // 184
      var userTapFav = UserUtils.findFavsForTwiit(idAux);                                                              // 185
      var arrAux = userTapFav.idUserTapFav;                                                                            // 186
                                                                                                                       //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                       // 188
      if (arrAux.indexOf(idUser) === -1) {                                                                             // 189
        UserUtils.addFavToTwiit(idAux, idUser);                                                                        // 190
                                                                                                                       //
        var notif = new Object();                                                                                      // 192
        notif._id = idAux;                                                                                             // 193
        notif.typeOfNotif = "fav";                                                                                     // 194
        notif.actorNotif = currentUser;                                                                                // 195
        notif.recepNotif = UserUtils.findUserFromTwiit(idAux);                                                         // 196
                                                                                                                       //
        console.log(notif);                                                                                            // 198
                                                                                                                       //
        Meteor.call('createTwiitNotification', notif);                                                                 // 200
                                                                                                                       //
        $("#" + this._id).addClass("heartFav");                                                                        // 202
        $("#" + this._id).removeClass("heartNoFav");                                                                   // 203
      } else {                                                                                                         // 204
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                                // 205
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                             // 206
        //LA OPERACION INVERSA                                                                                         // 207
        UserUtils.removeFavToTwiit(idAux, idUser);                                                                     // 208
        $("#" + this._id).addClass("heartNoFav");                                                                      // 209
        $("#" + this._id).removeClass("heartFav");                                                                     // 210
      }                                                                                                                // 211
    }                                                                                                                  // 212
                                                                                                                       //
    return clickBtnFav;                                                                                                // 179
  }(),                                                                                                                 // 179
  'click #btnComm': function () {                                                                                      // 213
    function clickBtnComm() {                                                                                          // 213
      var numComment = UserUtils.findNumComment(UserUtils.findTwiitFromNotif(this._id));                               // 214
      //SI EL TWIIT TIENE POR LO MENOS 1 COMENTARIO, ENTONCES REDIRIGIMOS AL USUARIO A                                 // 215
      //LA RUTA /Comments. SI NO, SE ABRE EL MODAL Y SE PUEDE HACER EL COMENTARIO                                      // 216
      if (numComment === 0) {                                                                                          // 217
        $("#dialog-NewTwiit").modal();                                                                                 // 218
        Session.set('commentMode', true);                                                                              // 219
        Session.set('idCurrentTwiit', UserUtils.findTwiitFromNotif(this._id));                                         // 220
      }                                                                                                                // 221
    }                                                                                                                  // 222
                                                                                                                       //
    return clickBtnComm;                                                                                               // 213
  }(),                                                                                                                 // 213
  'click #btnShowFavsNotif': function () {                                                                             // 223
    function clickBtnShowFavsNotif() {                                                                                 // 223
      Session.set('btnShowCommIsPulse', false);                                                                        // 224
    }                                                                                                                  // 225
                                                                                                                       //
    return clickBtnShowFavsNotif;                                                                                      // 223
  }(),                                                                                                                 // 223
  'click #btnShowCommNotif': function () {                                                                             // 226
    function clickBtnShowCommNotif() {                                                                                 // 226
      Session.set('btnShowCommIsPulse', true);                                                                         // 227
    }                                                                                                                  // 228
                                                                                                                       //
    return clickBtnShowCommNotif;                                                                                      // 226
  }()                                                                                                                  // 226
});                                                                                                                    // 149
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
      //Creamos el nuevo usuario en DataUser                                                                           // 15
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
  currentUserName = this.data.name;                                                                                    // 2
});                                                                                                                    // 3
                                                                                                                       //
Template.userProfile.events({                                                                                          // 5
  'click #logout': function () {                                                                                       // 6
    function clickLogout() {                                                                                           // 6
      Meteor.logout();                                                                                                 // 7
      window.location = "/";                                                                                           // 8
    }                                                                                                                  // 9
                                                                                                                       //
    return clickLogout;                                                                                                // 6
  }(),                                                                                                                 // 6
  'click #editProfile': function () {                                                                                  // 10
    function clickEditProfile() {                                                                                      // 10
      window.location = "/editProfile/" + currentUserName;                                                             // 11
    }                                                                                                                  // 12
                                                                                                                       //
    return clickEditProfile;                                                                                           // 10
  }(),                                                                                                                 // 10
  'click #editWhatsLicenses': function () {                                                                            // 13
    function clickEditWhatsLicenses() {                                                                                // 13
      $('#dialog-editLicenses').modal('show');                                                                         // 14
    }                                                                                                                  // 15
                                                                                                                       //
    return clickEditWhatsLicenses;                                                                                     // 13
  }(),                                                                                                                 // 13
  'click .btnShowSN': function () {                                                                                    // 16
    function clickBtnShowSN(event) {                                                                                   // 16
                                                                                                                       //
      var idSN = event.target.id;                                                                                      // 18
      if (idSN === "Facebook") {                                                                                       // 19
        window.open("https://www.facebook.com/search/all/?q=" + Session.get('dataUser').userFb);                       // 20
      } else if (idSN === "Instagram") {                                                                               // 21
        window.open("https://www.instagram.com/" + Session.get('dataUser').userInsta + "/");                           // 22
      } else if (idSN === "WhatsApp") {                                                                                // 23
        //EL CASO DE WHATSAPP ES MAS DIFERENTE. LO QUE HAREMOS SERÁ SOLICITAR AL USUARIO QUE SI QUIERE                 // 24
        //AÑADIR EL NUMERO DE TELEFONO EN SU AGENDA (SOLO PARA DISPOSITIVOS MÓVILES)                                   // 25
        //EN EL CASO DE QUE EL USUARIO ACCEDA A LA APP POR DISPOSITIVOS NO MÓVILES, SE MOSTRARÁ UN MODAL               // 26
        //EN EL QUE INFORMARA AL USUARIO: ¿Quiere solicitar a {{currentUser.userName}} su numero de telefono?          // 27
        //SI EL USUARIO SELECCIONA QUE SI, SE MANDARA UNA SOLICITUD AL USUARIO DEL QUE SE QUIERE CONOCER               // 28
        //SU NUMERO DE MOVIL Y SI DIHCO USUARIO ACEPTA, SE LE REVELARA AL USUARIO.                                     // 29
        Session.set('userToSentPet', currentUserName);                                                                 // 30
                                                                                                                       //
        //COMPARAMOS EL userId DEL USUARIO ACTUAL EN METEOR Y LO COMPARAMOS CON EL ARRAY                               // 32
        //showWhatsTo PARA VER SI PODEMOS MOSTRAR EL WHATSAPP                                                          // 33
                                                                                                                       //
        console.log(dataUser.userId);                                                                                  // 35
                                                                                                                       //
        var userActName = Meteor.user().username;                                                                      // 37
        console.log(userActName);                                                                                      // 38
                                                                                                                       //
        var arrWhats = dataUser.showWhatsTo;                                                                           // 40
                                                                                                                       //
        Meteor.call('findUserData', userActName, function (err, res) {                                                 // 42
          if (arrWhats.length > 0) {                                                                                   // 43
            if (arrWhats.indexOf(res.userId) >= 0) {                                                                   // 44
              //MOSTRAMOS EL WHATSAPP                                                                                  // 45
              console.log($('[data-toggle="tooltip"]'));                                                               // 46
              $('[data-toggle="tooltip"]').attr("title", dataUser.userWhats);                                          // 47
              $('[data-toggle="tooltip"]').tooltip('show');                                                            // 48
            }                                                                                                          // 49
          } else if (!Session.get('showProfileOtherUser')) {                                                           // 50
            //ESTE PROCESO NO ES INSTANTANEO YA QUE EL USUARIO TIENE QUE ACEPTAR LA PETICION                           // 51
            $('#dialog-showSocialNetwork').modal('show');                                                              // 52
          } else {                                                                                                     // 53
            //INICIALIZAMOS EL TOOLTIP                                                                                 // 54
            $('[data-toggle="tooltip"]').tooltip('show');                                                              // 55
          }                                                                                                            // 56
        });                                                                                                            // 57
      }                                                                                                                // 58
    }                                                                                                                  // 59
                                                                                                                       //
    return clickBtnShowSN;                                                                                             // 16
  }()                                                                                                                  // 16
});                                                                                                                    // 5
                                                                                                                       //
Template.userProfile.helpers({                                                                                         // 62
  'dataUserFound': function () {                                                                                       // 63
    function dataUserFound() {                                                                                         // 63
      Meteor.call('findUserData', currentUserName, function (err, res) {                                               // 64
        Session.set('dataUser', res);                                                                                  // 65
      });                                                                                                              // 66
                                                                                                                       //
      dataUser = Session.get('dataUser');                                                                              // 68
                                                                                                                       //
      return dataUser;                                                                                                 // 70
    }                                                                                                                  // 71
                                                                                                                       //
    return dataUserFound;                                                                                              // 63
  }(),                                                                                                                 // 63
  'userImgFound': function () {                                                                                        // 72
    function userImgFound() {                                                                                          // 72
      if (dataUser.userImg != "") {                                                                                    // 73
        Meteor.call('findUserImg', dataUser.userImg, function (err, res) {                                             // 74
          $('#imgCurrentUser').attr("src", res);                                                                       // 75
        });                                                                                                            // 76
      } else {                                                                                                         // 77
        console.log("No Img Profile");                                                                                 // 78
        //$('#imgCurrentUser').attr("src", "/profileImgTest.png");                                                     // 79
        return "/profileImgTest.png";                                                                                  // 80
      }                                                                                                                // 81
    }                                                                                                                  // 82
                                                                                                                       //
    return userImgFound;                                                                                               // 72
  }(),                                                                                                                 // 72
  'tweets': function () {                                                                                              // 83
    function tweets() {                                                                                                // 83
      return UserUtils.findTweets(currentUserName).count();                                                            // 84
    }                                                                                                                  // 85
                                                                                                                       //
    return tweets;                                                                                                     // 83
  }(),                                                                                                                 // 83
  'following': function () {                                                                                           // 86
    function following() {                                                                                             // 86
      Meteor.call('usersFollowings', currentUserName, function (err, res) {                                            // 87
        Session.set('numFollowings', res);                                                                             // 88
      });                                                                                                              // 89
      return Session.get('numFollowings');                                                                             // 90
    }                                                                                                                  // 91
                                                                                                                       //
    return following;                                                                                                  // 86
  }(),                                                                                                                 // 86
  'followers': function () {                                                                                           // 92
    function followers() {                                                                                             // 92
      Meteor.call('usersFollowers', currentUserName, function (err, res) {                                             // 93
        Session.set('numFollowers', res);                                                                              // 94
      });                                                                                                              // 95
      return Session.get('numFollowers');                                                                              // 96
    }                                                                                                                  // 97
                                                                                                                       //
    return followers;                                                                                                  // 92
  }(),                                                                                                                 // 92
  'existsSocialNetwork': function () {                                                                                 // 98
    function existsSocialNetwork() {                                                                                   // 98
                                                                                                                       //
      var btnSocial = [];                                                                                              // 100
                                                                                                                       //
      if (dataUser.userFb) {                                                                                           // 102
        var newData = new Object();                                                                                    // 103
        newData.color = "primary";                                                                                     // 104
        newData['class'] = "fa fa-facebook";                                                                           // 105
        newData.id = "Facebook";                                                                                       // 106
        btnSocial.push(newData);                                                                                       // 107
      }                                                                                                                // 108
                                                                                                                       //
      if (dataUser.userInsta) {                                                                                        // 110
        var newData = new Object();                                                                                    // 111
        newData.color = "warning";                                                                                     // 112
        newData['class'] = "fa fa-instagram";                                                                          // 113
        newData.id = "Instagram";                                                                                      // 114
        btnSocial.push(newData);                                                                                       // 115
      }                                                                                                                // 116
                                                                                                                       //
      if (dataUser.userWhats) {                                                                                        // 118
        var newData = new Object();                                                                                    // 119
        newData.color = "success";                                                                                     // 120
        newData['class'] = "fa fa-whatsapp";                                                                           // 121
        newData.id = "WhatsApp";                                                                                       // 122
        btnSocial.push(newData);                                                                                       // 123
      }                                                                                                                // 124
                                                                                                                       //
      return btnSocial;                                                                                                // 126
    }                                                                                                                  // 127
                                                                                                                       //
    return existsSocialNetwork;                                                                                        // 98
  }(),                                                                                                                 // 98
  'showProfileOtherUser': function () {                                                                                // 128
    function showProfileOtherUser() {                                                                                  // 128
      return Session.get('showProfileOtherUser');                                                                      // 129
    }                                                                                                                  // 130
                                                                                                                       //
    return showProfileOtherUser;                                                                                       // 128
  }(),                                                                                                                 // 128
  'isWhatsapp': function () {                                                                                          // 131
    function isWhatsapp() {                                                                                            // 131
      if (this.id === "WhatsApp") {                                                                                    // 132
        return true;                                                                                                   // 133
      }                                                                                                                // 134
    }                                                                                                                  // 135
                                                                                                                       //
    return isWhatsapp;                                                                                                 // 131
  }()                                                                                                                  // 131
});                                                                                                                    // 62
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"whatsAppNotif.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/whatsAppNotif.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.whatsAppNotif.onCreated(function () {                                                                         // 1
  //console.log("Usuario: ");                                                                                          // 2
  //console.log(Meteor.user().username);                                                                               // 3
  Meteor.subscribe('whatsAppNotifications', Meteor.user().username);                                                   // 4
});                                                                                                                    // 5
                                                                                                                       //
Template.whatsAppNotif.helpers({                                                                                       // 7
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
  whatsNotifCount: function () {                                                                                       // 16
    function whatsNotifCount() {                                                                                       // 16
      numNotif = Session.get('requestWhats').length;                                                                   // 17
      numNotif += Session.get('responseWhats').length;                                                                 // 18
      return numNotif;                                                                                                 // 19
    }                                                                                                                  // 20
                                                                                                                       //
    return whatsNotifCount;                                                                                            // 16
  }(),                                                                                                                 // 16
  'infoStateCollapseNavBar': function () {                                                                             // 21
    function infoStateCollapseNavBar() {                                                                               // 21
      return Session.get('navBarCollapse');                                                                            // 22
    }                                                                                                                  // 23
                                                                                                                       //
    return infoStateCollapseNavBar;                                                                                    // 21
  }()                                                                                                                  // 21
});                                                                                                                    // 7
                                                                                                                       //
Template.whatsAppNotif.events({                                                                                        // 26
                                                                                                                       //
  'click #linkToWhatsNotif': function () {                                                                             // 28
    function clickLinkToWhatsNotif() {                                                                                 // 28
      if (numNotif > 0) {                                                                                              // 29
        window.location = "/RequestWhatsApp/" + Meteor.user().username;                                                // 30
      }                                                                                                                // 31
    }                                                                                                                  // 32
                                                                                                                       //
    return clickLinkToWhatsNotif;                                                                                      // 28
  }()                                                                                                                  // 28
                                                                                                                       //
});                                                                                                                    // 26
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"whatsAppRequestPage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/whatsAppRequestPage.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.whatsAppRequestPage.helpers({                                                                                 // 1
  'countNotifRequest': function () {                                                                                   // 2
    function countNotifRequest() {                                                                                     // 2
      arrWhatsAppReqNotif = Session.get('requestWhats');                                                               // 3
      if (arrWhatsAppReqNotif) {                                                                                       // 4
        countNumReqWhatsAppNotif = arrWhatsAppReqNotif.length;                                                         // 5
        if (countNumReqWhatsAppNotif === 0) {                                                                          // 6
          return false;                                                                                                // 7
        } else {                                                                                                       // 8
          return true;                                                                                                 // 9
        }                                                                                                              // 10
      };                                                                                                               // 11
    }                                                                                                                  // 12
                                                                                                                       //
    return countNotifRequest;                                                                                          // 2
  }(),                                                                                                                 // 2
  'countNotifResponse': function () {                                                                                  // 13
    function countNotifResponse() {                                                                                    // 13
      arrWhatsAppResNotif = Session.get('responseWhats');                                                              // 14
      if (arrWhatsAppResNotif) {                                                                                       // 15
        countNumResWhatsAppNotif = arrWhatsAppResNotif.length;                                                         // 16
        if (countNumResWhatsAppNotif === 0) {                                                                          // 17
          return false;                                                                                                // 18
        } else {                                                                                                       // 19
          return true;                                                                                                 // 20
        }                                                                                                              // 21
      };                                                                                                               // 22
    }                                                                                                                  // 23
                                                                                                                       //
    return countNotifResponse;                                                                                         // 13
  }(),                                                                                                                 // 13
  'whatsRequestNotif': function () {                                                                                   // 24
    function whatsRequestNotif() {                                                                                     // 24
      var arrAux = [];                                                                                                 // 25
      arrWhatsAppReqNotif.forEach(function (item) {                                                                    // 26
        console.log(item);                                                                                             // 27
        var dataFound = UserUtils.findWhatsAppNotifications(item);                                                     // 28
        console.log(dataFound);                                                                                        // 29
        arrAux.push(dataFound);                                                                                        // 30
      });                                                                                                              // 31
      console.log(arrAux);                                                                                             // 32
                                                                                                                       //
      return arrAux;                                                                                                   // 34
    }                                                                                                                  // 35
                                                                                                                       //
    return whatsRequestNotif;                                                                                          // 24
  }(),                                                                                                                 // 24
  'whatsResponseNotif': function () {                                                                                  // 36
    function whatsResponseNotif() {                                                                                    // 36
      var arrAux = [];                                                                                                 // 37
      arrWhatsAppResNotif.forEach(function (item) {                                                                    // 38
        console.log(item);                                                                                             // 39
        var dataFound = UserUtils.findWhatsAppNotifications(item);                                                     // 40
        console.log(dataFound);                                                                                        // 41
        arrAux.push(dataFound);                                                                                        // 42
      });                                                                                                              // 43
      console.log(arrAux);                                                                                             // 44
                                                                                                                       //
      return arrAux;                                                                                                   // 46
    }                                                                                                                  // 47
                                                                                                                       //
    return whatsResponseNotif;                                                                                         // 36
  }()                                                                                                                  // 36
});                                                                                                                    // 1
                                                                                                                       //
Template.whatsAppRequestPage.events({                                                                                  // 50
  //SE PRODUCE CUANDO EL USUARIO ACEPTA LA SOLICITUD                                                                   // 51
  'click #sentYes': function () {                                                                                      // 52
    function clickSentYes() {                                                                                          // 52
      var idWhatsNotif = this._id;                                                                                     // 53
      //HAY QUE REALIZAR UNA NOTIFICACION AL USUARIO QUE HA SOLICITADO EL WHATSAPP                                     // 54
      //INFORMANDOLE QUE SE HA ACEPTADO DICHA SOLICITUD                                                                // 55
                                                                                                                       //
      var notif = new Object();                                                                                        // 57
                                                                                                                       //
      notif.recepNotif = this.actorNotif; //EL USUARIO QUE VA A RECIBIR LA RESPUESTA DE LA PETICION                    // 59
      notif.actorNotif = this.recepNotif; //EL USUARIO QUE CONFIRMA LA PETICION                                        // 60
      notif.timestamp = new Date();                                                                                    // 61
      notif.idNotifRequestWhatsApp = idWhatsNotif;                                                                     // 62
      notif.typeOfNotif = "responseWhatsAppNotif";                                                                     // 63
      notif.stateResponse = true;                                                                                      // 64
                                                                                                                       //
      Meteor.call('createResponseWhatsAppNotification', notif);                                                        // 66
                                                                                                                       //
      countNumReqWhatsAppNotif--;                                                                                      // 68
                                                                                                                       //
      //ADEMAS HAY QUE AÑADIR A showWhatsTo[] A QUIEN ACABAMOS DE ACEPTAR                                              // 70
      var update = new Object();                                                                                       // 71
      update.user = this.recepNotif;                                                                                   // 72
      update.userToShow = this.actorNotif;                                                                             // 73
      Meteor.call('updateArrayWhatsAppAuthorize', update);                                                             // 74
    }                                                                                                                  // 75
                                                                                                                       //
    return clickSentYes;                                                                                               // 52
  }(),                                                                                                                 // 52
  //SE PRODUCE CUANDO EL USUARIO RECHAZA LA SOLICITUD                                                                  // 76
  'click #sentNo': function () {                                                                                       // 77
    function clickSentNo() {                                                                                           // 77
      var idWhatsNotif = this._id;                                                                                     // 78
      //HAY QUE REALIZAR UNA NOTIFICACION AL USUARIO QUE HA SOLICITADO EL WHATSAPP                                     // 79
      //INFORMANDOLE QUE SE HA RECHAZADO DICHA SOLICITUD                                                               // 80
                                                                                                                       //
      var notif = new Object();                                                                                        // 82
                                                                                                                       //
      notif.recepNotif = Session.get('userToSentPet'); //EL USUARIO QUE VA A RECIBIR LA PETICION                       // 84
      notif.actorNotif = Meteor.user().username; //EL USUARIO QUE REALIZA LA PETICION                                  // 85
      notif.timestamp = new Date();                                                                                    // 86
      notif.idNotifRequestWhatsApp = idWhatsNotif;                                                                     // 87
      notif.typeOfNotif = "responseWhatsAppNotif";                                                                     // 88
      notif.stateResponse = false;                                                                                     // 89
                                                                                                                       //
      Meteor.call('createResponseWhatsAppNotification', notif);                                                        // 91
                                                                                                                       //
      countNumReqWhatsAppNotif--;                                                                                      // 93
    }                                                                                                                  // 95
                                                                                                                       //
    return clickSentNo;                                                                                                // 77
  }(),                                                                                                                 // 77
  //PULSEMOS EL BTN QUE PULSEMOS SE HARAN DOS COSAS:                                                                   // 96
  //1) REDIRECCION A LA PAGINA PPAL SI SE HAN ACABADO LAS NOTIFICACIONES                                               // 97
  //2) PONER LA NOTIFICACION A LEIDA                                                                                   // 98
  'click .btn': function () {                                                                                          // 99
    function clickBtn() {                                                                                              // 99
                                                                                                                       //
      var idNotifToClear = this._id;                                                                                   // 101
                                                                                                                       //
      Notifications.update(idNotifToClear, { $set: { read: true } });                                                  // 103
                                                                                                                       //
      console.log("Clean!");                                                                                           // 105
      console.log(countNumReqWhatsAppNotif + " " + countNumResWhatsAppNotif);                                          // 106
                                                                                                                       //
      if (countNumReqWhatsAppNotif === 0 && countNumResWhatsAppNotif === 0) {                                          // 108
        window.location = "/";                                                                                         // 109
      }                                                                                                                // 110
    }                                                                                                                  // 112
                                                                                                                       //
    return clickBtn;                                                                                                   // 99
  }(),                                                                                                                 // 99
  'click #goToProfile': function () {                                                                                  // 113
    function clickGoToProfile() {                                                                                      // 113
      window.location = "/Profile/" + this.actorNotif;                                                                 // 114
      countNumResWhatsAppNotif--;                                                                                      // 115
    }                                                                                                                  // 116
                                                                                                                       //
    return clickGoToProfile;                                                                                           // 113
  }(),                                                                                                                 // 113
  'click #clearNotif': function () {                                                                                   // 117
    function clickClearNotif() {                                                                                       // 117
      var idNotifToClear = this._id;                                                                                   // 118
                                                                                                                       //
      countNumResWhatsAppNotif--;                                                                                      // 120
      Notifications.update(idNotifToClear, { $set: { read: true } });                                                  // 121
                                                                                                                       //
      $('#' + this.actorNotif).remove();                                                                               // 123
                                                                                                                       //
      console.log(countNumReqWhatsAppNotif + " " + countNumResWhatsAppNotif);                                          // 125
                                                                                                                       //
      if (countNumReqWhatsAppNotif === 0 && countNumResWhatsAppNotif === 0) {                                          // 127
        window.location = "/";                                                                                         // 128
      }                                                                                                                // 129
    }                                                                                                                  // 130
                                                                                                                       //
    return clickClearNotif;                                                                                            // 117
  }()                                                                                                                  // 117
});                                                                                                                    // 50
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
    class: "row",                                                                                                      // 5
    id: "containerNavBar"                                                                                              // 6
  }, "\n\t\t", Blaze.If(function() {                                                                                   // 7
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 8
  }, function() {                                                                                                      // 9
    return [ "\n\t\t    ", Blaze.If(function() {                                                                       // 10
      return Spacebars.call(view.lookup("currentUser"));                                                               // 11
    }, function() {                                                                                                    // 12
      return [ "\n\t\t    \t", Spacebars.include(view.lookupTemplate("navBarTemplate")), "\n\t\t  \t" ];               // 13
    }), "\n\t  \t" ];                                                                                                  // 14
  }, function() {                                                                                                      // 15
    return [ "\n\t\t    ", Spacebars.include(view.lookupTemplate("loading")), "\n\t  \t" ];                            // 16
  }), HTML.Raw("\n\t\t<!--{{> btnFloating}}-->\n\t"));                                                                 // 17
}));                                                                                                                   // 18
Meteor.startup(Template.body.renderToDocument);                                                                        // 19
Meteor.startup(function() {                                                                                            // 20
  var attrs = {"id":"bodyPpal"};                                                                                       // 21
  for (var prop in attrs) {                                                                                            // 22
    document.body.setAttribute(prop, attrs[prop]);                                                                     // 23
  }                                                                                                                    // 24
});                                                                                                                    // 25
                                                                                                                       // 26
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
/*SE ACCEDE POR WINDOW.LOCATION*/                                                                                      // 7
Router.route('/whoToFollow', { name: 'followUsers' });                                                                 // 8
Router.route('/Profile/:username', {                                                                                   // 9
	name: 'userProfile',                                                                                                  // 10
	data: function () {                                                                                                   // 11
		function data() {                                                                                                    // 11
			var user = new Object();                                                                                            // 12
			user.name = this.params.username;                                                                                   // 13
                                                                                                                       //
			var currentUser = Session.get('currentUser');                                                                       // 15
                                                                                                                       //
			Meteor.call('findUserData', user.name, function (err, res) {                                                        // 17
				Session.set('dataUserShowProfile', res);                                                                           // 18
			});                                                                                                                 // 19
                                                                                                                       //
			dataUserShowProfile = Session.get('dataUserShowProfile');                                                           // 21
                                                                                                                       //
			if (dataUserShowProfile) {                                                                                          // 23
				if (dataUserShowProfile.userNameProfile != currentUser) {                                                          // 24
					Session.set('showProfileOtherUser', false);                                                                       // 25
				} else {                                                                                                           // 26
					Session.set('showProfileOtherUser', true);                                                                        // 27
				}                                                                                                                  // 28
			}                                                                                                                   // 29
                                                                                                                       //
			return user;                                                                                                        // 31
		}                                                                                                                    // 32
                                                                                                                       //
		return data;                                                                                                         // 11
	}()                                                                                                                   // 11
});                                                                                                                    // 9
Router.route('/Notifications/:userName', {                                                                             // 34
	name: 'twiitPageNew',                                                                                                 // 35
	data: function () {                                                                                                   // 36
		function data() {                                                                                                    // 36
			var user = new Object();                                                                                            // 37
			user.name = this.params.userName;                                                                                   // 38
			return user;                                                                                                        // 39
		}                                                                                                                    // 40
                                                                                                                       //
		return data;                                                                                                         // 36
	}()                                                                                                                   // 36
});                                                                                                                    // 34
                                                                                                                       //
Router.route('/RequestWhatsApp/:userName', {                                                                           // 43
	name: 'whatsAppRequestPage',                                                                                          // 44
	data: function () {                                                                                                   // 45
		function data() {                                                                                                    // 45
			var user = new Object();                                                                                            // 46
			user.name = this.params.userName;                                                                                   // 47
			return user;                                                                                                        // 48
		}                                                                                                                    // 49
                                                                                                                       //
		return data;                                                                                                         // 45
	}()                                                                                                                   // 45
});                                                                                                                    // 43
                                                                                                                       //
//Router.route('/Comments', {name: 'twiitCommentPage'});                                                               // 52
/*SE ACCEDE POR PATHFOR*/                                                                                              // 53
Router.route('/Comments/:_id', {                                                                                       // 54
	name: 'twiitCommentPage',                                                                                             // 55
	data: function () {                                                                                                   // 56
		function data() {                                                                                                    // 56
			var mode = Session.get('notificationsModeOn');                                                                      // 57
			var idTwiit = new Object();                                                                                         // 58
			idTwiit._id = this.params._id;                                                                                      // 59
                                                                                                                       //
			if (mode) {                                                                                                         // 61
				idTwiit.mode = mode;                                                                                               // 62
			}                                                                                                                   // 63
                                                                                                                       //
			return idTwiit;                                                                                                     // 65
		}                                                                                                                    // 66
                                                                                                                       //
		return data;                                                                                                         // 56
	}()                                                                                                                   // 56
});                                                                                                                    // 54
Router.route('/twiits/:_id', {                                                                                         // 68
	name: 'twiitPage',                                                                                                    // 69
	data: function () {                                                                                                   // 70
		function data() {                                                                                                    // 70
			return this.params;                                                                                                 // 71
		}                                                                                                                    // 72
                                                                                                                       //
		return data;                                                                                                         // 70
	}()                                                                                                                   // 70
});                                                                                                                    // 68
                                                                                                                       //
Router.route('/editProfile/:userName', {                                                                               // 75
	name: 'editProfile',                                                                                                  // 76
	data: function () {                                                                                                   // 77
		function data() {                                                                                                    // 77
			return this.params.userName;                                                                                        // 78
		}                                                                                                                    // 79
                                                                                                                       //
		return data;                                                                                                         // 77
	}()                                                                                                                   // 77
});                                                                                                                    // 75
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
  /*                                                                                                                   // 4
  var currentTweets = Twitts.find({ user: username }).fetch().map(function(data) {                                     //
    								return data;                                                                                               //
  						  });                                                                                                          //
                */                                                                                                     //
  return Twitts.find({ user: username }, { sort: { timestamp: -1 } });                                                 // 9
};                                                                                                                     // 10
//SIGUIENDO                                                                                                            // 11
UserUtils.findFollowings = function (username) {                                                                       // 12
  var currentFollowings = Relationships.find({ follower: username }).fetch().map(function (data) {                     // 13
    return data.following;                                                                                             // 14
  });                                                                                                                  // 15
  //console.log("Siguiendo: ");                                                                                        // 16
  //console.log(currentFollowings);                                                                                    // 17
                                                                                                                       //
  return currentFollowings;                                                                                            // 19
};                                                                                                                     // 20
//SEGUIDORES                                                                                                           // 21
UserUtils.findFollowers = function (username) {                                                                        // 22
  var currentFollowers = Relationships.find({ following: username }).fetch().map(function (data) {                     // 23
    return data.following;                                                                                             // 24
  });                                                                                                                  // 25
  //console.log("Seguidores: ");                                                                                       // 26
  //console.log(currentFollowers);                                                                                     // 27
                                                                                                                       //
  return currentFollowers;                                                                                             // 29
};                                                                                                                     // 30
                                                                                                                       //
UserUtils.findNotifications = function (username) {                                                                    // 32
  return Notifications.find({ recepNotif: username, read: false, isOwnTwiit: false }, { sort: { twiitTimeStamp: -1 } });
};                                                                                                                     // 34
                                                                                                                       //
UserUtils.findNotifForTypeNotif = function (username, type) {                                                          // 36
  return Notifications.find({ recepNotif: username, read: false, isOwnTwiit: false, typeOfNotif: type }, { sort: { twiitTimeStamp: -1 } });
};                                                                                                                     // 38
                                                                                                                       //
UserUtils.findOneNotification = function (username) {                                                                  // 40
  return Notifications.findOne({ recepNotif: username, read: false, isOwnTwiit: false }, { sort: { twiitTimeStamp: -1 } });
};                                                                                                                     // 42
                                                                                                                       //
UserUtils.findNumberNotif = function (username) {                                                                      // 44
  return Notifications.find({ recepNotif: username, read: false, isOwnTwiit: false, $or: [{ typeOfNotif: 'twiit' }, { typeOfNotif: 'fav' }, { typeOfNotif: 'comment' }] }).count();
};                                                                                                                     // 46
                                                                                                                       //
UserUtils.findWhatsAppNotifications = function (notifId) {                                                             // 48
  return Notifications.findOne({ _id: notifId });                                                                      // 49
};                                                                                                                     // 50
                                                                                                                       //
UserUtils.findNumberFavPerTwiit = function (idTwiit) {                                                                 // 52
  var twiitNumFav = Twitts.findOne({ _id: idTwiit }).numFav;                                                           // 53
  return twiitNumFav;                                                                                                  // 54
};                                                                                                                     // 55
                                                                                                                       //
UserUtils.findFavsForTwiit = function (id) {                                                                           // 57
  return Favs.findOne({ idTwiit: id });                                                                                // 58
};                                                                                                                     // 59
                                                                                                                       //
UserUtils.addFavToTwiit = function (id, idUser) {                                                                      // 61
  var resultToUpdate = false;                                                                                          // 62
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT                 // 63
  var favObject = UserUtils.findFavsForTwiit(id);                                                                      // 64
                                                                                                                       //
  if (!favObject) {                                                                                                    // 66
    //console.log("No tiene FAVS");                                                                                    // 67
                                                                                                                       //
  } else {                                                                                                             // 69
    var arrAux = favObject.idUserTapFav;                                                                               // 70
    var idFav = favObject._id;                                                                                         // 71
                                                                                                                       //
    arrAux.push(idUser);                                                                                               // 73
    var num = UserUtils.findNumberFavPerTwiit(id);                                                                     // 74
    num++;                                                                                                             // 75
                                                                                                                       //
    //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                                          // 77
    res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                                      // 78
    resT = Twitts.update(id, { $set: { numFav: num } });                                                               // 79
                                                                                                                       //
    //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                                               // 81
    if (res && resT) {                                                                                                 // 82
      resultToUpdate = true;                                                                                           // 83
    }                                                                                                                  // 84
  }                                                                                                                    // 85
                                                                                                                       //
  return resultToUpdate;                                                                                               // 87
};                                                                                                                     // 88
                                                                                                                       //
UserUtils.removeFavToTwiit = function (id, idUser) {                                                                   // 90
  var resultToUpdate = false;                                                                                          // 91
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT                 // 92
  var favObject = UserUtils.findFavsForTwiit(id);                                                                      // 93
  var arrAux = favObject.idUserTapFav;                                                                                 // 94
  var idFav = favObject._id;                                                                                           // 95
                                                                                                                       //
  //HAY QUE AVERIGUAR LA POSICION DEL idUser DENTRO DEL ARRAY DE LA BBDD                                               // 97
  var posIdUser = arrAux.indexOf(idUser);                                                                              // 98
  //AHORA ELIMINAMOS EL ELEMENTO ASOCIADO A ESA POSICION                                                               // 99
  delete arrAux[posIdUser];                                                                                            // 100
                                                                                                                       //
  var num = UserUtils.findNumberFavPerTwiit(id);                                                                       // 102
  num--;                                                                                                               // 103
                                                                                                                       //
  //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                                            // 105
  res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                                        // 106
  resT = Twitts.update(id, { $set: { numFav: num } });                                                                 // 107
                                                                                                                       //
  //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                                                 // 109
  if (res && resT) {                                                                                                   // 110
    resultToUpdate = true;                                                                                             // 111
  }                                                                                                                    // 112
                                                                                                                       //
  return resultToUpdate;                                                                                               // 114
};                                                                                                                     // 115
                                                                                                                       //
UserUtils.findTwiitFromNotif = function (id) {                                                                         // 117
  var twiitId = Notifications.findOne(id).twiitId;                                                                     // 118
  return twiitId;                                                                                                      // 119
};                                                                                                                     // 120
                                                                                                                       //
UserUtils.findNumComment = function (idTweet) {                                                                        // 122
  return Twitts.findOne({ _id: idTweet }).numComment;                                                                  // 123
};                                                                                                                     // 124
                                                                                                                       //
//PARA MOSTRAR NOTIFICACIONES EN EL NAVEGADOR WEB                                                                      // 126
UserUtils.createNotifToBrowser = function (typeNotif, userName) {                                                      // 127
  if (Notification) {                                                                                                  // 128
    if (Notification.permission !== "granted") {                                                                       // 129
      Notification.requestPermission();                                                                                // 130
    }                                                                                                                  // 131
    var title = "TwiitClone";                                                                                          // 132
    var bodyNotif = "";                                                                                                // 133
                                                                                                                       //
    if (typeNotif === "fav") {                                                                                         // 135
      bodyNotif = "El usuario " + userName + " ha dado fav a un twiit tuyo";                                           // 136
    } else if (typeNotif === "comment") {                                                                              // 137
      bodyNotif = "El usuario " + userName + " ha comentado un twiit tuyo";                                            // 138
    } else if (typeNotif === "twiit") {                                                                                // 139
      bodyNotif = "El usuario " + userName + " ha publicado a un twiit nuevo";                                         // 140
    } else if (typeNotif === "moreNotif") {                                                                            // 141
      bodyNotif = "Tienes muchas Notificaciones";                                                                      // 142
    }                                                                                                                  // 143
                                                                                                                       //
    var extra = { body: bodyNotif };                                                                                   // 145
                                                                                                                       //
    var noti = new Notification(title, extra);                                                                         // 147
                                                                                                                       //
    noti.onclick = function () {                                                                                       // 149
      // Al hacer click                                                                                                // 150
      window.location = "/Notifications/" + Meteor.user().username;                                                    // 151
    };                                                                                                                 // 152
                                                                                                                       //
    noti.onclose = {                                                                                                   // 154
      // Al cerrar                                                                                                     // 155
    };                                                                                                                 // 154
                                                                                                                       //
    setTimeout(function () {                                                                                           // 158
      noti.close();                                                                                                    // 158
    }, 5000);                                                                                                          // 158
  }                                                                                                                    // 159
};                                                                                                                     // 160
                                                                                                                       //
UserUtils.findUserFromTwiit = function (twiitId) {                                                                     // 162
  return Twitts.findOne({ _id: twiitId }).user;                                                                        // 163
};                                                                                                                     // 164
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/partialTemplates/template.editLicenses.js");
require("./client/partialTemplates/template.editProfile.js");
require("./client/partialTemplates/template.followUsers.js");
require("./client/partialTemplates/template.loading.js");
require("./client/partialTemplates/template.navBarTemplate.js");
require("./client/partialTemplates/template.not_found.js");
require("./client/partialTemplates/template.notifications.js");
require("./client/partialTemplates/template.notificationsNew.js");
require("./client/partialTemplates/template.pageNotFound.js");
require("./client/partialTemplates/template.removeProfile.js");
require("./client/partialTemplates/template.sendRequest.js");
require("./client/partialTemplates/template.showSocialNetwork.js");
require("./client/partialTemplates/template.socialNetworkBox.js");
require("./client/partialTemplates/template.tweetBox.js");
require("./client/partialTemplates/template.tweetFeed.js");
require("./client/partialTemplates/template.tweetFeedProfile.js");
require("./client/partialTemplates/template.twiitCommentPage.js");
require("./client/partialTemplates/template.twiitPage.js");
require("./client/partialTemplates/template.twiitPageNew.js");
require("./client/partialTemplates/template.userManagement.js");
require("./client/partialTemplates/template.userProfile.js");
require("./client/partialTemplates/template.whatsAppNotif.js");
require("./client/partialTemplates/template.whatsAppRequestPage.js");
require("./client/template.main.js");
require("./lib/collections/collections.js");
require("./lib/router.js");
require("./lib/userUtils.js");
require("./client/partialTemplates/editLicenses.js");
require("./client/partialTemplates/editProfile.js");
require("./client/partialTemplates/followUsers.js");
require("./client/partialTemplates/navBarTemplate.js");
require("./client/partialTemplates/notifications.js");
require("./client/partialTemplates/notificationsNew.js");
require("./client/partialTemplates/removeProfile.js");
require("./client/partialTemplates/sendRequest.js");
require("./client/partialTemplates/showSocialNetwork.js");
require("./client/partialTemplates/socialNetworkBox.js");
require("./client/partialTemplates/tweetBox.js");
require("./client/partialTemplates/tweetFeed.js");
require("./client/partialTemplates/tweetFeedProfile.js");
require("./client/partialTemplates/twiitCommentPage.js");
require("./client/partialTemplates/twiitPage.js");
require("./client/partialTemplates/twiitPageNew.js");
require("./client/partialTemplates/userManagement.js");
require("./client/partialTemplates/userProfile.js");
require("./client/partialTemplates/whatsAppNotif.js");
require("./client/partialTemplates/whatsAppRequestPage.js");
require("./client/main.js");