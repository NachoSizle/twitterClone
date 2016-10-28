var require = meteorInstall({"client":{"partialTemplates":{"template.editProfile.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/template.editProfile.js                                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("editProfile");                                                                                // 2
Template["editProfile"] = new Template("Template.editProfile", (function() {                                        // 3
  var view = this;                                                                                                  // 4
  return Blaze.If(function() {                                                                                      // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                            // 6
  }, function() {                                                                                                   // 7
    return [ "\n    ", Blaze.If(function() {                                                                        // 8
      return Spacebars.call(view.lookup("dataUserFound"));                                                          // 9
    }, function() {                                                                                                 // 10
      return [ "\n      ", HTML.DIV({                                                                               // 11
        class: "user-container"                                                                                     // 12
      }, "\n        ", HTML.DIV({                                                                                   // 13
        class: "panel panel-default userBox"                                                                        // 14
      }, "\n          ", HTML.DIV({                                                                                 // 15
        class: "panel-body"                                                                                         // 16
      }, "\n            ", HTML.Comment("Mensaje para el usuario registrado"), "\n            ", HTML.DIV({         // 17
        class: "row"                                                                                                // 18
      }, "\n              ", HTML.Comment("CONTENIDO DE LA PARTE IZQUIERDA DEL PERFIL DEL USUARIO"), "\n              ", HTML.DIV({
        class: "col-md-6 col-sm-6 col-xs-6",                                                                        // 20
        id: "leftDivCurrentUser"                                                                                    // 21
      }, "\n                ", HTML.Comment('EN LA ETIQUETA DE SRC, SE PONDRA EL NOMBRE DEL USUARIO ACTUAL\n                <img id="imgCurrentUser" src="/{{currentUser.username}}.png" class="img-responsive">\n                A MODO DE EJEMPLO, VAMOS A UTILIZAR UNO GENERICO PARA QUE CARGUE EN CUALQUIER USUARIO'), "\n                ", HTML.IMG({
        id: "imgCurrentUser",                                                                                       // 23
        src: function() {                                                                                           // 24
          return Spacebars.mustache(view.lookup("userImgFound"));                                                   // 25
        },                                                                                                          // 26
        class: "img-responsive"                                                                                     // 27
      }), "\n\n                ", HTML.LABEL({                                                                      // 28
        id: "btnCurrentUser",                                                                                       // 29
        class: "btn btn-default btn-lg btn-file iconToEditImg"                                                      // 30
      }, "\n                    ", HTML.SPAN({                                                                      // 31
        class: "glyphicon glyphicon-camera"                                                                         // 32
      }), " \n                    ", HTML.INPUT({                                                                   // 33
        id: "inputFile",                                                                                            // 34
        type: "file",                                                                                               // 35
        style: "display: none;"                                                                                     // 36
      }), "\n                "), "\n\n              "), "\n              ", HTML.Comment("CONTENIDO DE LA PARTE DERECHA DEL PERFIL DEL USUARIO"), "\n              ", HTML.DIV({
        class: "col-md-6 col-sm-6 col-xs-6",                                                                        // 38
        id: "rightDivCurrentUser"                                                                                   // 39
      }, "\n                ", HTML.Comment("ESTA DESCRIPCION ES GENERICA. HAY QUE CAMBIARLA POR LA QUE APAREZCA EN userData.description"), "\n                ", HTML.TEXTAREA({
        class: "form-control",                                                                                      // 41
        rows: "5",                                                                                                  // 42
        id: "userDescription",                                                                                      // 43
        placeholder: function() {                                                                                   // 44
          return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userDescription"));                // 45
        }                                                                                                           // 46
      }), "\n              "), "\n            "), "\n\n            ", HTML.DIV({                                    // 47
        class: "currentUserName"                                                                                    // 48
      }, "\n              ", HTML.DIV({                                                                             // 49
        class: "col-md-6 col-sm-6 col-xs-6"                                                                         // 50
      }, "\n                ", HTML.H3(HTML.STRONG(Blaze.View("lookup:dataUserFound.userName", function() {         // 51
        return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userName"));                         // 52
      }))), "\n                ", HTML.H5("@", Blaze.View("lookup:dataUserFound.userNameProfile", function() {      // 53
        return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userNameProfile"));                  // 54
      })), "\n              "), "\n              ", HTML.DIV({                                                      // 55
        class: "col-md-6 col-sm-6 col-xs-6"                                                                         // 56
      }, "\n                ", HTML.BUTTON({                                                                        // 57
        id: "saveChanges",                                                                                          // 58
        class: "btn btn-primary optionsUserProfile",                                                                // 59
        type: "button"                                                                                              // 60
      }, "\n                  ", HTML.SPAN({                                                                        // 61
        class: "glyphicon glyphicon-ok"                                                                             // 62
      }), "\n                "), "\n                ", Blaze.If(function() {                                        // 63
        return Spacebars.dataMustache(view.lookup("userHaveSN"), view.lookup("dataUserFound"));                     // 64
      }, function() {                                                                                               // 65
        return [ "\n                  ", HTML.BUTTON({                                                              // 66
          class: "btn btn-primary optionsUserProfile",                                                              // 67
          type: "button",                                                                                           // 68
          style: "margin-right:7px",                                                                                // 69
          "data-toggle": "modal",                                                                                   // 70
          "data-target": "#dialog-NewSocialNetwork"                                                                 // 71
        }, "\n                    ", HTML.SPAN({                                                                    // 72
          class: "glyphicon glyphicon-plus-sign"                                                                    // 73
        }), "\n                    ", HTML.SPAN({                                                                   // 74
          class: "glyphicon glyphicon-user"                                                                         // 75
        }), "\n                  "), "\n                " ];                                                        // 76
      }, function() {                                                                                               // 77
        return [ "\n                  ", HTML.BUTTON({                                                              // 78
          class: "btn btn-primary optionsUserProfile",                                                              // 79
          type: "button",                                                                                           // 80
          style: "margin-right:7px",                                                                                // 81
          "data-toggle": "modal",                                                                                   // 82
          "data-target": "#dialog-NewSocialNetwork"                                                                 // 83
        }, "\n                    ", HTML.SPAN({                                                                    // 84
          class: "glyphicon glyphicon-pencil"                                                                       // 85
        }), "\n                    ", HTML.SPAN({                                                                   // 86
          class: "glyphicon glyphicon-user"                                                                         // 87
        }), "\n                  "), "\n                " ];                                                        // 88
      }), "\n              "), "\n            "), "\n\n            ", HTML.DIV({                                    // 89
        class: "modal fade",                                                                                        // 90
        id: "dialog-NewSocialNetwork"                                                                               // 91
      }, "\n              ", Spacebars.include(view.lookupTemplate("socialNetworkBox")), "\n            "), "\n          "), "\n        "), "\n      "), "\n    " ];
    }), "\n  " ];                                                                                                   // 93
  }, function() {                                                                                                   // 94
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                 // 95
  });                                                                                                               // 96
}));                                                                                                                // 97
                                                                                                                    // 98
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.followUsers.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/template.followUsers.js                                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("followUsers");                                                                                // 2
Template["followUsers"] = new Template("Template.followUsers", (function() {                                        // 3
  var view = this;                                                                                                  // 4
  return HTML.FORM({                                                                                                // 5
    class: "form-inline"                                                                                            // 6
  }, HTML.Raw(' \n\t\t<input type="text" class="form-control" id="searchUser" placeholder="Search for user">\n\t\t<button type="submit" class="btn btn-info">Search</button>\n\n\t\t'), Blaze.If(function() {
    return Spacebars.call(view.lookup("foundUser"));                                                                // 8
  }, function() {                                                                                                   // 9
    return [ "\n\t\t\t", HTML.DIV({                                                                                 // 10
      class: "found-user"                                                                                           // 11
    }, "\n\t\t\t\t", HTML.BUTTON({                                                                                  // 12
      type: "button",                                                                                               // 13
      class: "btn btn-default",                                                                                     // 14
      id: "follow"                                                                                                  // 15
    }, "Follow @", Blaze.View("lookup:foundUser.username", function() {                                             // 16
      return Spacebars.mustache(Spacebars.dot(view.lookup("foundUser"), "username"));                               // 17
    })), "\n\t\t\t"), "\n\t\t" ];                                                                                   // 18
  }), "\n  \t\n\t  \t", HTML.DIV({                                                                                  // 19
    class: "recommend-users"                                                                                        // 20
  }, " \n\t\t  ", HTML.Raw("<h5>Who to follow:</h5>"), "\n\t\t  ", Blaze.Each(function() {                          // 21
    return Spacebars.call(view.lookup("recommendedUsers"));                                                         // 22
  }, function() {                                                                                                   // 23
    return [ "\n\t\t    ", HTML.BUTTON({                                                                            // 24
      type: "button",                                                                                               // 25
      class: "btn btn-default",                                                                                     // 26
      id: "followRec"                                                                                               // 27
    }, "Follow @", Blaze.View("lookup:..username", function() {                                                     // 28
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "username"));                                       // 29
    })), "\n\t\t  " ];                                                                                              // 30
  }), "\n\t\t"), "\n\t\t\n\t");                                                                                     // 31
}));                                                                                                                // 32
                                                                                                                    // 33
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.loading.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/template.loading.js                                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("loading");                                                                                    // 2
Template["loading"] = new Template("Template.loading", (function() {                                                // 3
  var view = this;                                                                                                  // 4
  return Spacebars.include(view.lookupTemplate("spinner"));                                                         // 5
}));                                                                                                                // 6
                                                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.navBarTemplate.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/template.navBarTemplate.js                                                               //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("navBarTemplate");                                                                             // 2
Template["navBarTemplate"] = new Template("Template.navBarTemplate", (function() {                                  // 3
  var view = this;                                                                                                  // 4
  return Blaze.Unless(function() {                                                                                  // 5
    return Spacebars.call(view.lookup("noRender"));                                                                 // 6
  }, function() {                                                                                                   // 7
    return [ "\n\t", HTML.NAV({                                                                                     // 8
      class: "navbar navbar-default"                                                                                // 9
    }, "\n\t  ", HTML.DIV({                                                                                         // 10
      class: "container-fluid"                                                                                      // 11
    }, "\n\t    ", HTML.Comment(" Brand and toggle get grouped for better mobile display "), "\n\t    ", HTML.DIV({
      class: "navbar-header"                                                                                        // 13
    }, "\n\t      ", HTML.BUTTON({                                                                                  // 14
      type: "button",                                                                                               // 15
      id: "btnNewTweet",                                                                                            // 16
      class: "navbar-toggle collapsed",                                                                             // 17
      "data-toggle": "modal",                                                                                       // 18
      "data-target": "#dialog-NewTwiit"                                                                             // 19
    }, "\n\t        ", HTML.SPAN({                                                                                  // 20
      class: "glyphicon glyphicon-pencil"                                                                           // 21
    }), "\n\t      "), "\n\n\t      ", HTML.BUTTON({                                                                // 22
      type: "button",                                                                                               // 23
      id: "btnMenuNavBar",                                                                                          // 24
      class: "navbar-toggle collapsed",                                                                             // 25
      "data-toggle": "collapse",                                                                                    // 26
      "data-target": "#bs-example-navbar-collapse-1",                                                               // 27
      "aria-expanded": "false"                                                                                      // 28
    }, "\n      \t\t", HTML.SPAN({                                                                                  // 29
      class: "sr-only"                                                                                              // 30
    }, "Toggle navigation"), "\n      \t\t", HTML.SPAN({                                                            // 31
      class: "glyphicon glyphicon-tasks"                                                                            // 32
    }), "\n      \t\t", Blaze.If(function() {                                                                       // 33
      return Spacebars.call(view.lookup("notificationCount"));                                                      // 34
    }, function() {                                                                                                 // 35
      return [ "\n      \t\t\t", Blaze.Unless(function() {                                                          // 36
        return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                              // 37
      }, function() {                                                                                               // 38
        return [ "\n\t\t      \t\t", HTML.SPAN({                                                                    // 39
          class: "badge badge-notify"                                                                               // 40
        }, Blaze.View("lookup:notificationCount", function() {                                                      // 41
          return Spacebars.mustache(view.lookup("notificationCount"));                                              // 42
        })), "\n      \t\t\t" ];                                                                                    // 43
      }), "\n\t\t    " ];                                                                                           // 44
    }), "\n    \t  "), "\n    \t  ", HTML.IMG({                                                                     // 45
      id: "imgLogTwiiterClone",                                                                                     // 46
      src: "/imgLogTwiiterClone.png",                                                                               // 47
      class: "img-responsive navbar-brand"                                                                          // 48
    }), "\n\t    "), "\n\n\t    ", HTML.DIV({                                                                       // 49
      class: "modal fade",                                                                                          // 50
      id: "dialog-NewTwiit"                                                                                         // 51
    }, "\n\t    \t", Spacebars.include(view.lookupTemplate("tweetBox")), "\n\t    "), "\n\n\t\t", HTML.Comment("PARTE DERECHA DE LA BARRA DE NAVEGACION"), "\n\t    ", HTML.DIV({
      class: "collapse navbar-collapse",                                                                            // 53
      id: "bs-example-navbar-collapse-1"                                                                            // 54
    }, "\n\t      ", HTML.UL({                                                                                      // 55
      id: "dropDownMenu",                                                                                           // 56
      class: "nav navbar-nav navbar-right"                                                                          // 57
    }, "\n\t      \t\n\t      \t", HTML.LI({                                                                        // 58
      class: "dropdown"                                                                                             // 59
    }, "\n\t            ", Spacebars.include(view.lookupTemplate("notifications")), "\n\t      \t"), "\n\t      \t\n\t      \t", HTML.LI("\n\t            ", Spacebars.include(view.lookupTemplate("notificationsNew")), "\n\t      \t"), "\n\t      \t\n\t        ", HTML.LI("\n\t        \t", HTML.A({
      href: "/whoToFollow",                                                                                         // 61
      id: "recommendationsBtn"                                                                                      // 62
    }, "\n\t        \t\t", HTML.SPAN({                                                                              // 63
      class: "glyphicon glyphicon-search"                                                                           // 64
    }), "\n\t        \t"), "\n\t        "), "\n\t        ", HTML.LI("\n\t        \t", Blaze.Unless(function() {     // 65
      return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                                // 66
    }, function() {                                                                                                 // 67
      return [ "\n\t\t\t  \t\t", HTML.A({                                                                           // 68
        id: "btnNewTwiit",                                                                                          // 69
        type: "button",                                                                                             // 70
        href: "#",                                                                                                  // 71
        class: "navbar-btn",                                                                                        // 72
        "data-toggle": "modal",                                                                                     // 73
        "data-target": "#dialog-NewTwiit"                                                                           // 74
      }, "\n\t\t\t        \t", HTML.SPAN({                                                                          // 75
        class: "glyphicon glyphicon-pencil"                                                                         // 76
      }), "\n\t\t\t      \t"), "\n\t\t\t  \t" ];                                                                    // 77
    }), "\n\t        "), "\n\t        ", HTML.LI("\n              ", HTML.Comment("A MODO DE EJEMPLO, VAMOS A UTILIZAR UNO GENERICO PARA QUE CARGUE EN CUALQUIER USUARIO"), "\n              ", HTML.IMG({
      id: "imgProfile",                                                                                             // 79
      src: function() {                                                                                             // 80
        return Spacebars.mustache(view.lookup("userImgFound"));                                                     // 81
      },                                                                                                            // 82
      class: "img-responsive"                                                                                       // 83
    }), "\n\t        "), "\n\t      "), "\n\t    "), "\n\t  "), "\n\t"), "\n\t" ];                                  // 84
  });                                                                                                               // 85
}));                                                                                                                // 86
                                                                                                                    // 87
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.not_found.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/template.not_found.js                                                                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("notFound");                                                                                   // 2
Template["notFound"] = new Template("Template.notFound", (function() {                                              // 3
  var view = this;                                                                                                  // 4
  return HTML.Raw('<div class="not-found page jumbotron">\n    <h2>404</h2>\n    <p>Sorry, we couldn\'t find a page at this address.</p>\n  </div>');
}));                                                                                                                // 6
                                                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.notifications.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/template.notifications.js                                                                //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("notifications");                                                                              // 2
Template["notifications"] = new Template("Template.notifications", (function() {                                    // 3
  var view = this;                                                                                                  // 4
  return [ HTML.A({                                                                                                 // 5
    href: "#",                                                                                                      // 6
    class: "dropdown-toggle",                                                                                       // 7
    "data-toggle": "dropdown",                                                                                      // 8
    role: "button",                                                                                                 // 9
    "aria-haspopup": "true",                                                                                        // 10
    "aria-expanded": "false"                                                                                        // 11
  }, "\n    ", HTML.Raw("<!--Notificaciones-->"), "\n    ", HTML.Raw('<span class="glyphicon glyphicon-inbox"></span>'), "\n\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("notificationCount"));                                                        // 13
  }, function() {                                                                                                   // 14
    return [ "\n        ", Blaze.If(function() {                                                                    // 15
      return Spacebars.call(view.lookup("modeDisplay"));                                                            // 16
    }, function() {                                                                                                 // 17
      return [ "\n          ", HTML.SPAN({                                                                          // 18
        class: "badge badge-inverse"                                                                                // 19
      }, Blaze.View("lookup:notificationCount", function() {                                                        // 20
        return Spacebars.mustache(view.lookup("notificationCount"));                                                // 21
      })), "\n        " ];                                                                                          // 22
    }, function() {                                                                                                 // 23
      return [ "\n          ", Blaze.If(function() {                                                                // 24
        return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                              // 25
      }, function() {                                                                                               // 26
        return [ "\n            ", HTML.SPAN({                                                                      // 27
          class: "badge badge-inverse"                                                                              // 28
        }, Blaze.View("lookup:notificationCount", function() {                                                      // 29
          return Spacebars.mustache(view.lookup("notificationCount"));                                              // 30
        })), "\n          " ];                                                                                      // 31
      }), "\n        " ];                                                                                           // 32
    }), "\n      " ];                                                                                               // 33
  }), "\n  "), "\n  ", HTML.UL({                                                                                    // 34
    class: "notification dropdown-menu dropdown-menu-center"                                                        // 35
  }, "\n    ", Blaze.If(function() {                                                                                // 36
    return Spacebars.call(view.lookup("notificationCount"));                                                        // 37
  }, function() {                                                                                                   // 38
    return [ "\n      ", Blaze.Each(function() {                                                                    // 39
      return Spacebars.call(view.lookup("notifications"));                                                          // 40
    }, function() {                                                                                                 // 41
      return [ "\n        ", Spacebars.include(view.lookupTemplate("notificationItem")), "\n      " ];              // 42
    }), "\n    " ];                                                                                                 // 43
  }, function() {                                                                                                   // 44
    return [ "\n      ", HTML.LI(HTML.SPAN("No Notifications")), "\n    " ];                                        // 45
  }), "\n  ") ];                                                                                                    // 46
}));                                                                                                                // 47
                                                                                                                    // 48
Template.__checkName("notificationItem");                                                                           // 49
Template["notificationItem"] = new Template("Template.notificationItem", (function() {                              // 50
  var view = this;                                                                                                  // 51
  return HTML.LI("\n    ", HTML.A({                                                                                 // 52
    href: function() {                                                                                              // 53
      return Spacebars.mustache(view.lookup("pathFor"), "twiitPage");                                               // 54
    }                                                                                                               // 55
  }, "\n      ", HTML.STRONG(Blaze.View("lookup:twiitNotifUserName", function() {                                   // 56
    return Spacebars.mustache(view.lookup("twiitNotifUserName"));                                                   // 57
  })), " ha twiiteado\n    "), "\n  ");                                                                             // 58
}));                                                                                                                // 59
                                                                                                                    // 60
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.notificationsNew.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/template.notificationsNew.js                                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("notificationsNew");                                                                           // 2
Template["notificationsNew"] = new Template("Template.notificationsNew", (function() {                              // 3
  var view = this;                                                                                                  // 4
  return Blaze.If(function() {                                                                                      // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                            // 6
  }, function() {                                                                                                   // 7
    return [ "\n    ", HTML.A({                                                                                     // 8
      id: "linkToNotif",                                                                                            // 9
      class: "dropdown-toggle",                                                                                     // 10
      "data-toggle": "dropdown",                                                                                    // 11
      role: "button",                                                                                               // 12
      "aria-haspopup": "true",                                                                                      // 13
      "aria-expanded": "false"                                                                                      // 14
    }, "\n    ", HTML.Comment("Notificaciones"), "\n    ", HTML.SPAN({                                              // 15
      class: "glyphicon glyphicon-inbox"                                                                            // 16
    }), "\n\n      ", Blaze.If(function() {                                                                         // 17
      return Spacebars.call(view.lookup("notificationCount"));                                                      // 18
    }, function() {                                                                                                 // 19
      return [ "\n        ", Blaze.If(function() {                                                                  // 20
        return Spacebars.call(view.lookup("modeDisplay"));                                                          // 21
      }, function() {                                                                                               // 22
        return [ "\n          ", HTML.SPAN({                                                                        // 23
          class: "badge badge-inverse"                                                                              // 24
        }, Blaze.View("lookup:notificationCount", function() {                                                      // 25
          return Spacebars.mustache(view.lookup("notificationCount"));                                              // 26
        })), "\n        " ];                                                                                        // 27
      }, function() {                                                                                               // 28
        return [ "\n          ", Blaze.If(function() {                                                              // 29
          return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                            // 30
        }, function() {                                                                                             // 31
          return [ "\n            ", HTML.SPAN({                                                                    // 32
            class: "badge badge-inverse"                                                                            // 33
          }, Blaze.View("lookup:notificationCount", function() {                                                    // 34
            return Spacebars.mustache(view.lookup("notificationCount"));                                            // 35
          })), "\n          " ];                                                                                    // 36
        }), "\n        " ];                                                                                         // 37
      }), "\n      " ];                                                                                             // 38
    }), "\n\n    "), "\n    ", Blaze.Unless(function() {                                                            // 39
      return Spacebars.call(view.lookup("notificationCount"));                                                      // 40
    }, function() {                                                                                                 // 41
      return [ "\n    ", HTML.UL({                                                                                  // 42
        class: "notification dropdown-menu dropdown-menu-center"                                                    // 43
      }, "\n      ", HTML.LI(HTML.SPAN("No Notifications")), "\n    "), "\n    " ];                                 // 44
    }), "\n  " ];                                                                                                   // 45
  }, function() {                                                                                                   // 46
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                 // 47
  });                                                                                                               // 48
}));                                                                                                                // 49
                                                                                                                    // 50
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.showSocialNetwork.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/template.showSocialNetwork.js                                                            //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("showSocialNetwork");                                                                          // 2
Template["showSocialNetwork"] = new Template("Template.showSocialNetwork", (function() {                            // 3
  var view = this;                                                                                                  // 4
  return Blaze.If(function() {                                                                                      // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                            // 6
  }, function() {                                                                                                   // 7
    return [ "\n  \t\t", HTML.DIV({                                                                                 // 8
      class: "socialNetwork-container"                                                                              // 9
    }, "\n\t\t    ", HTML.DIV({                                                                                     // 10
      class: "panel panel-default col-sm-6 col-md-6 col-lg-6"                                                       // 11
    }, "\n\t      \t\t", HTML.DIV({                                                                                 // 12
      class: "panel-body"                                                                                           // 13
    }, "\n\t\t\t  \t\t", HTML.Comment(" CONTAINER TO ADD NEW SOCIAL NETWORK "), "\n\t\t\t\t\t", HTML.P(Blaze.View("lookup:socialNetwork", function() {
      return Spacebars.mustache(view.lookup("socialNetwork"));                                                      // 15
    })), "\t\n\t\t      \t"), "\n\t    \t"), "\n\t  \t"), "\n\t" ];                                                 // 16
  }, function() {                                                                                                   // 17
    return [ "\n\t  ", Spacebars.include(view.lookupTemplate("loading")), "\n\t" ];                                 // 18
  });                                                                                                               // 19
}));                                                                                                                // 20
                                                                                                                    // 21
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.socialNetworkBox.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/template.socialNetworkBox.js                                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("socialNetworkBox");                                                                           // 2
Template["socialNetworkBox"] = new Template("Template.socialNetworkBox", (function() {                              // 3
  var view = this;                                                                                                  // 4
  return Blaze.If(function() {                                                                                      // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                            // 6
  }, function() {                                                                                                   // 7
    return [ "\n  \t\t", HTML.DIV({                                                                                 // 8
      class: "tweetbox-container"                                                                                   // 9
    }, "\n\t\t    ", HTML.DIV({                                                                                     // 10
      class: "panel panel-default tweetbox col-md-6"                                                                // 11
    }, "\n\t\t      ", HTML.DIV({                                                                                   // 12
      class: "panel-body"                                                                                           // 13
    }, "\n\t\t\t", HTML.Comment(" CONTAINER TO ADD NEW SOCIAL NETWORK "), "\n\t\t\t\t", HTML.FORM({                 // 14
      role: "form",                                                                                                 // 15
      class: "row"                                                                                                  // 16
    }, "\n\t\t\t\t", Blaze.If(function() {                                                                          // 17
      return Spacebars.call(view.lookup("modeAddNewSN"));                                                           // 18
    }, function() {                                                                                                 // 19
      return [ "\n\t\t\t\t\t", HTML.H3(Blaze.View("lookup:modeAddNewSN.messageMode", function() {                   // 20
        return Spacebars.mustache(Spacebars.dot(view.lookup("modeAddNewSN"), "messageMode"));                       // 21
      })), "\n\t\t\t\t\t", HTML.DIV({                                                                               // 22
        class: "col-lg-6",                                                                                          // 23
        id: "containerInputs"                                                                                       // 24
      }, "\n\t\t\t\t\t", Blaze.Each(function() {                                                                    // 25
        return Spacebars.call(view.lookup("contentToAppend"));                                                      // 26
      }, function() {                                                                                               // 27
        return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                       // 28
          class: "input-group",                                                                                     // 29
          id: function() {                                                                                          // 30
            return [ "inputGroup", Spacebars.mustache(Spacebars.dot(view.lookup("."), "id")) ];                     // 31
          },                                                                                                        // 32
          style: "margin-bottom: 10px;"                                                                             // 33
        }, "\n\t\t\t          \t\t", HTML.DIV({                                                                     // 34
          class: "input-group-btn"                                                                                  // 35
        }, "\n\t\t\t          \t\t\t", HTML.BUTTON({                                                                // 36
          id: function() {                                                                                          // 37
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                       // 38
          },                                                                                                        // 39
          type: "button",                                                                                           // 40
          class: "btn btn-default btnOptionsSN",                                                                    // 41
          "aria-haspopup": "true",                                                                                  // 42
          "aria-expanded": "false"                                                                                  // 43
        }, Blaze.View("lookup:..valueBtn", function() {                                                             // 44
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "valueBtn"));                                   // 45
        })), "\n\t\t\t          \t\t"), "\n\t\t\t          \t\t", HTML.INPUT({                                      // 46
          id: function() {                                                                                          // 47
            return [ "input", Spacebars.mustache(Spacebars.dot(view.lookup("."), "id")) ];                          // 48
          },                                                                                                        // 49
          type: "text",                                                                                             // 50
          class: "form-control inputSN",                                                                            // 51
          "aria-label": "...",                                                                                      // 52
          placeholder: function() {                                                                                 // 53
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "placeholder"));                              // 54
          }                                                                                                         // 55
        }), "\n\t\t\t          \t\t", HTML.BUTTON({                                                                 // 56
          id: function() {                                                                                          // 57
            return [ "clearDataUser", Spacebars.mustache(Spacebars.dot(view.lookup("."), "id")) ];                  // 58
          },                                                                                                        // 59
          type: "button",                                                                                           // 60
          class: "btn btn-danger",                                                                                  // 61
          "aria-haspopup": "true",                                                                                  // 62
          "aria-expanded": "false"                                                                                  // 63
        }, "\n\t\t\t          \t\t\t", HTML.SPAN({                                                                  // 64
          id: function() {                                                                                          // 65
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                       // 66
          },                                                                                                        // 67
          class: "glyphicon glyphicon-remove"                                                                       // 68
        }), "\n\t\t\t      \t\t\t"), "\n\t\t\t          \t"), "\n\t\t\t        " ];                                 // 69
      }), "\n\t\t\t\t\t"), HTML.Comment(" /.col-lg-6 "), "\n\t\t\t\t" ];                                            // 70
    }), "\n\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t", Blaze.If(function() {                                            // 71
      return Spacebars.call(view.lookup("userHaveSN"));                                                             // 72
    }, function() {                                                                                                 // 73
      return [ "\n\t\t\t\t\t\t  \t", HTML.BUTTON({                                                                  // 74
        id: "btnNewSN",                                                                                             // 75
        class: "btn btn-primary",                                                                                   // 76
        type: "button"                                                                                              // 77
      }, "\n\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                          // 78
        class: "glyphicon glyphicon-plus-sign"                                                                      // 79
      }), "\n\t\t\t\t  \t\t  \t"), "\n\t\t\t\t  \t\t" ];                                                            // 80
    }), "\n\t\t\t\t  \t\t", HTML.Comment('\n\t\t\t\t  \t\tHAY QUE VER COMO PODER BLOQUEAR EL RECARGA DE PAGINA QUE PROVOCA EL SUBMIT\n\t\t\t\t  \t\tOTRA OPCION ES IMPLEMENTAR EL MENSAJE EMERGENTE: "Completa este campo" QUE HTML5\n\t\t\t\t  \t\tNOS OFRECE CON LA ETIQUETA required PARA PRESCINDIR DE LA PROPIEDAD SUBMIT DEL BOTON\n\t\t\t\t  \t\t'), "\n\t\t\t  \t\t  \t", HTML.BUTTON({
      id: "saveData",                                                                                               // 82
      class: "btn btn-primary",                                                                                     // 83
      type: "submit"                                                                                                // 84
    }, "\n\t\t\t\t\t\t\t", HTML.SPAN({                                                                              // 85
      class: "glyphicon glyphicon-ok"                                                                               // 86
    }), "\n\t\t\t  \t\t  \t"), "\n\t\t\t  \t\t"), "\n\t\t\t\t"), "\n\t\t      "), "\n\t\t    "), "\n\t\t  "), "\n\t" ];
  }, function() {                                                                                                   // 88
    return [ "\n\t  ", Spacebars.include(view.lookupTemplate("loading")), "\n\t" ];                                 // 89
  });                                                                                                               // 90
}));                                                                                                                // 91
                                                                                                                    // 92
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.tweetBox.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/template.tweetBox.js                                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("tweetBox");                                                                                   // 2
Template["tweetBox"] = new Template("Template.tweetBox", (function() {                                              // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    class: "tweetbox-container"                                                                                     // 6
  }, "\n    ", HTML.DIV({                                                                                           // 7
    class: "panel panel-default tweetbox col-md-6"                                                                  // 8
  }, "\n      ", HTML.DIV({                                                                                         // 9
    class: "panel-body"                                                                                             // 10
  }, "\n        ", HTML.Raw("<!--Caja para el texto del twitt -->"), "\n      ", HTML.TEXTAREA({                    // 11
    class: "form-control",                                                                                          // 12
    id: "tweetText",                                                                                                // 13
    placeholder: "¿Qué te cuentas?",                                                                                // 14
    rows: "3"                                                                                                       // 15
  }), "\n          ", HTML.Raw("<!--Contador y botón-->"), "\n        ", HTML.DIV({                                 // 16
    class: "pull-right btnGroup"                                                                                    // 17
  }, "\n          ", HTML.STRONG({                                                                                  // 18
    class: function() {                                                                                             // 19
      return Spacebars.mustache(view.lookup("charClass"));                                                          // 20
    }                                                                                                               // 21
  }, Blaze.View("lookup:charCount", function() {                                                                    // 22
    return Spacebars.mustache(view.lookup("charCount"));                                                            // 23
  })), "\n          ", Blaze.If(function() {                                                                        // 24
    return Spacebars.call(view.lookup("currentUser"));                                                              // 25
  }, function() {                                                                                                   // 26
    return [ "\n            ", HTML.BUTTON(HTML.Attrs({                                                             // 27
      class: "btn btn-info pull-right",                                                                             // 28
      type: "button",                                                                                               // 29
      "data-dismiss": "modal"                                                                                       // 30
    }, function() {                                                                                                 // 31
      return Spacebars.attrMustache(view.lookup("disableButton"));                                                  // 32
    }), "Twittear\n              ", HTML.SPAN({                                                                     // 33
      class: "glyphicon glyphicon-send"                                                                             // 34
    }), "\n            "), "\n          " ];                                                                        // 35
  }, function() {                                                                                                   // 36
    return [ "\n            ", HTML.BUTTON({                                                                        // 37
      class: "btn btn-info pull-right",                                                                             // 38
      type: "button",                                                                                               // 39
      disabled: ""                                                                                                  // 40
    }, "Por favor inicia sesión"), "\n          " ];                                                                // 41
  }), "\n        "), "\n      "), "\n    "), "\n  ");                                                               // 42
}));                                                                                                                // 43
                                                                                                                    // 44
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.tweetFeed.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/template.tweetFeed.js                                                                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("tweetFeed");                                                                                  // 2
Template["tweetFeed"] = new Template("Template.tweetFeed", (function() {                                            // 3
  var view = this;                                                                                                  // 4
  return Blaze.If(function() {                                                                                      // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                            // 6
  }, function() {                                                                                                   // 7
    return [ "\n    ", Blaze.View("lookup:infoNotif", function() {                                                  // 8
      return Spacebars.mustache(view.lookup("infoNotif"));                                                          // 9
    }), "\n    ", HTML.DIV({                                                                                        // 10
      class: "tweetfeed-container"                                                                                  // 11
    }, "\n      ", HTML.DIV({                                                                                       // 12
      class: "panel panel-default tweetfeed"                                                                        // 13
    }, "\n        ", HTML.DIV({                                                                                     // 14
      class: "panel-body"                                                                                           // 15
    }, "\n          ", HTML.Comment(" Texto para el contenido del Twitt "), "\n          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("tweetMessage"));                                                           // 17
    }, function() {                                                                                                 // 18
      return [ "\n            ", HTML.DIV({                                                                         // 19
        class: "panel panel-info"                                                                                   // 20
      }, HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n              ", HTML.DIV({            // 21
        class: "panel-heading"                                                                                      // 22
      }, HTML.Comment("Cabecera del twiit"), "\n                ", HTML.H3({                                        // 23
        class: "panel-title"                                                                                        // 24
      }, "\n                  ", HTML.A({                                                                           // 25
        href: function() {                                                                                          // 26
          return Spacebars.mustache(view.lookup("pathFor"), "userProfile", Spacebars.kw({                           // 27
            username: Spacebars.dot(view.lookup("."), "user")                                                       // 28
          }));                                                                                                      // 29
        }                                                                                                           // 30
      }, "@", Blaze.View("lookup:..user", function() {                                                              // 31
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                         // 32
      })), " \n                  ", HTML.SPAN({                                                                     // 33
        class: "glyphicon glyphicon-triangle-right",                                                                // 34
        "aria-hidden": "true"                                                                                       // 35
      }), "\n                  ", Blaze.View("lookup:convertDateTime", function() {                                 // 36
        return Spacebars.mustache(view.lookup("convertDateTime"));                                                  // 37
      }), "\n                "), "\n              "), HTML.Comment("Cabecera del twiit"), "\n              ", HTML.DIV({
        class: "panel-body"                                                                                         // 39
      }, HTML.Comment("Contenido del twiit"), "\n                ", Blaze.View("lookup:..message", function() {     // 40
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                      // 41
      }), "\n              "), HTML.Comment("Contenido del twiit"), "\n\n              ", HTML.DIV({                // 42
        class: "btn-group",                                                                                         // 43
        role: "group",                                                                                              // 44
        id: "btnGroupInteractions"                                                                                  // 45
      }, "\n                ", HTML.A({                                                                             // 46
        class: "btn btn-secondary"                                                                                  // 47
      }, "\n                  ", HTML.SPAN({                                                                        // 48
        class: "glyphicon glyphicon-bullhorn"                                                                       // 49
      }), "\n                "), "\n                ", Blaze.If(function() {                                        // 50
        return Spacebars.call(view.lookup("numComment"));                                                           // 51
      }, function() {                                                                                               // 52
        return [ "\n                  ", HTML.A({                                                                   // 53
          href: function() {                                                                                        // 54
            return Spacebars.mustache(view.lookup("pathFor"), "twiitCommentPage", Spacebars.kw({                    // 55
              _id: Spacebars.dot(view.lookup("."), "_id")                                                           // 56
            }));                                                                                                    // 57
          },                                                                                                        // 58
          class: "btn"                                                                                              // 59
        }, "\n                    ", HTML.SPAN({                                                                    // 60
          class: "glyphicon glyphicon-comment"                                                                      // 61
        }), "\n                    ", HTML.SPAN({                                                                   // 62
          class: "badge badge-numFav "                                                                              // 63
        }, Blaze.View("lookup:..numComment", function() {                                                           // 64
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                 // 65
        })), "\n                  "), "\n                " ];                                                       // 66
      }, function() {                                                                                               // 67
        return [ "\n                  ", HTML.A({                                                                   // 68
          id: "btnComm",                                                                                            // 69
          class: "btn btn-secondary"                                                                                // 70
        }, "\n                    ", HTML.SPAN({                                                                    // 71
          class: "glyphicon glyphicon-comment"                                                                      // 72
        }), "\n                "), "\n                " ];                                                          // 73
      }), "\n                ", Blaze.If(function() {                                                               // 74
        return Spacebars.call(view.lookup("numFav"));                                                               // 75
      }, function() {                                                                                               // 76
        return [ "\n                ", HTML.A({                                                                     // 77
          id: "btnFav",                                                                                             // 78
          class: "btn btn-secondary"                                                                                // 79
        }, "\n                  ", HTML.SPAN({                                                                      // 80
          id: function() {                                                                                          // 81
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                   // 82
          },                                                                                                        // 83
          class: function() {                                                                                       // 84
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                   // 85
          }                                                                                                         // 86
        }), "\n                  ", HTML.SPAN({                                                                     // 87
          class: "badge badge-numFav"                                                                               // 88
        }, Blaze.View("lookup:..numFav", function() {                                                               // 89
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                     // 90
        })), "\n                "), "\n                " ];                                                         // 91
      }, function() {                                                                                               // 92
        return [ "\n                  ", HTML.A({                                                                   // 93
          id: "btnFav",                                                                                             // 94
          class: "btn btn-secondary"                                                                                // 95
        }, "\n                  ", HTML.SPAN({                                                                      // 96
          id: function() {                                                                                          // 97
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                   // 98
          },                                                                                                        // 99
          class: function() {                                                                                       // 100
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                   // 101
          }                                                                                                         // 102
        }), "\n                "), "\n                " ];                                                          // 103
      }), "\n              "), "\n            "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n          " ];
    }), "\n        "), "\n      "), "\n    "), "\n  " ];                                                            // 105
  }, function() {                                                                                                   // 106
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                 // 107
  });                                                                                                               // 108
}));                                                                                                                // 109
                                                                                                                    // 110
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.tweetFeedProfile.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/template.tweetFeedProfile.js                                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("tweetFeedProfile");                                                                           // 2
Template["tweetFeedProfile"] = new Template("Template.tweetFeedProfile", (function() {                              // 3
  var view = this;                                                                                                  // 4
  return Blaze.If(function() {                                                                                      // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                            // 6
  }, function() {                                                                                                   // 7
    return [ "\n    ", HTML.DIV({                                                                                   // 8
      class: "tweetfeed-container"                                                                                  // 9
    }, "\n      ", HTML.DIV({                                                                                       // 10
      class: "panel panel-default tweetfeed"                                                                        // 11
    }, "\n        ", HTML.DIV({                                                                                     // 12
      class: "panel-body"                                                                                           // 13
    }, "\n          ", HTML.Comment(" Texto para el contenido del Twitt "), "\n          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("tweetMessageProfile"));                                                    // 15
    }, function() {                                                                                                 // 16
      return [ "\n            ", HTML.DIV({                                                                         // 17
        class: "panel panel-info"                                                                                   // 18
      }, HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n              ", HTML.DIV({            // 19
        class: "panel-heading"                                                                                      // 20
      }, HTML.Comment("Cabecera del twiit"), "\n                ", HTML.H3({                                        // 21
        class: "panel-title userNameProfile",                                                                       // 22
        id: function() {                                                                                            // 23
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                       // 24
        }                                                                                                           // 25
      }, "@", Blaze.View("lookup:..user", function() {                                                              // 26
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                         // 27
      }), "\n                  ", HTML.SPAN({                                                                       // 28
        class: "glyphicon glyphicon-triangle-right",                                                                // 29
        "aria-hidden": "true"                                                                                       // 30
      }), "\n                  ", Blaze.View("lookup:convertDateTime", function() {                                 // 31
        return Spacebars.mustache(view.lookup("convertDateTime"));                                                  // 32
      }), "\n                "), "\n              "), HTML.Comment("Cabecera del twiit"), "\n              ", HTML.DIV({
        class: "panel-body"                                                                                         // 34
      }, HTML.Comment("Contenido del twiit"), "\n                ", Blaze.View("lookup:..message", function() {     // 35
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                      // 36
      }), "\n              "), HTML.Comment("Contenido del twiit"), "\n\n              ", HTML.DIV({                // 37
        class: "btn-group",                                                                                         // 38
        role: "group",                                                                                              // 39
        id: "btnGroupInteractions"                                                                                  // 40
      }, "\n                ", HTML.A({                                                                             // 41
        class: "btn btn-secondary"                                                                                  // 42
      }, "\n                  ", HTML.SPAN({                                                                        // 43
        class: "glyphicon glyphicon-bullhorn"                                                                       // 44
      }), "\n                "), "\n                ", Blaze.If(function() {                                        // 45
        return Spacebars.call(view.lookup("numComment"));                                                           // 46
      }, function() {                                                                                               // 47
        return [ "\n                  ", HTML.A({                                                                   // 48
          href: function() {                                                                                        // 49
            return Spacebars.mustache(view.lookup("pathFor"), "twiitCommentPage", Spacebars.kw({                    // 50
              _id: Spacebars.dot(view.lookup("."), "_id")                                                           // 51
            }));                                                                                                    // 52
          },                                                                                                        // 53
          class: "btn btn-secondary"                                                                                // 54
        }, "\n                    ", HTML.SPAN({                                                                    // 55
          class: "glyphicon glyphicon-comment"                                                                      // 56
        }), "\n                    ", HTML.SPAN({                                                                   // 57
          class: "badge-numFav badge"                                                                               // 58
        }, Blaze.View("lookup:..numComment", function() {                                                           // 59
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                 // 60
        })), "\n                  "), "\n                " ];                                                       // 61
      }), "\n                ", Blaze.If(function() {                                                               // 62
        return Spacebars.call(view.lookup("numFav"));                                                               // 63
      }, function() {                                                                                               // 64
        return [ "\n                  ", HTML.A({                                                                   // 65
          id: "btnFav",                                                                                             // 66
          class: "btn btn-secondary"                                                                                // 67
        }, "\n                    ", HTML.SPAN({                                                                    // 68
          id: function() {                                                                                          // 69
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                   // 70
          },                                                                                                        // 71
          class: function() {                                                                                       // 72
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                   // 73
          }                                                                                                         // 74
        }), "\n                    ", HTML.SPAN({                                                                   // 75
          class: "badge badge-numFav"                                                                               // 76
        }, Blaze.View("lookup:..numFav", function() {                                                               // 77
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                     // 78
        })), "\n                  "), "\n                " ];                                                       // 79
      }, function() {                                                                                               // 80
        return [ "\n                  ", HTML.A({                                                                   // 81
          id: "btnFav",                                                                                             // 82
          class: "btn btn-secondary"                                                                                // 83
        }, "\n                    ", HTML.SPAN({                                                                    // 84
          id: function() {                                                                                          // 85
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                   // 86
          },                                                                                                        // 87
          class: function() {                                                                                       // 88
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                   // 89
          }                                                                                                         // 90
        }), "\n                  "), "\n                " ];                                                        // 91
      }), "\n              "), "\n            "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n          " ];
    }), "\n        "), "\n      "), "\n    "), "\n  " ];                                                            // 93
  }, function() {                                                                                                   // 94
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                 // 95
  });                                                                                                               // 96
}));                                                                                                                // 97
                                                                                                                    // 98
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.twiitCommentPage.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/template.twiitCommentPage.js                                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("twiitCommentPage");                                                                           // 2
Template["twiitCommentPage"] = new Template("Template.twiitCommentPage", (function() {                              // 3
  var view = this;                                                                                                  // 4
  return Blaze.If(function() {                                                                                      // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                            // 6
  }, function() {                                                                                                   // 7
    return [ "\n    ", HTML.DIV({                                                                                   // 8
      class: "tweetfeed-container"                                                                                  // 9
    }, "\n      ", HTML.DIV({                                                                                       // 10
      class: "panel panel-default tweetfeed"                                                                        // 11
    }, "\n        ", HTML.DIV({                                                                                     // 12
      class: "panel-body"                                                                                           // 13
    }, "\n          ", HTML.Comment(" Texto para el contenido del Twitt "), "\n          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("tweetMessage"));                                                           // 15
    }, function() {                                                                                                 // 16
      return [ "\n            ", HTML.DIV({                                                                         // 17
        class: "panel panel-info"                                                                                   // 18
      }, HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n              ", HTML.DIV({            // 19
        class: "panel-heading"                                                                                      // 20
      }, HTML.Comment("Cabecera del twiit"), "\n                ", HTML.H3({                                        // 21
        class: "panel-title"                                                                                        // 22
      }, "\n                  ", HTML.A({                                                                           // 23
        href: function() {                                                                                          // 24
          return Spacebars.mustache(view.lookup("pathFor"), "userProfile", Spacebars.kw({                           // 25
            username: Spacebars.dot(view.lookup("."), "user")                                                       // 26
          }));                                                                                                      // 27
        }                                                                                                           // 28
      }, "@", Blaze.View("lookup:..user", function() {                                                              // 29
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                         // 30
      })), " \n                  ", HTML.SPAN({                                                                     // 31
        class: "glyphicon glyphicon-triangle-right",                                                                // 32
        "aria-hidden": "true"                                                                                       // 33
      }), "\n                  ", Blaze.View("lookup:convertDateTime", function() {                                 // 34
        return Spacebars.mustache(view.lookup("convertDateTime"));                                                  // 35
      }), "\n                "), "\n              "), HTML.Comment("Cabecera del twiit"), "\n              ", HTML.DIV({
        class: "panel-body"                                                                                         // 37
      }, HTML.Comment("Contenido del twiit"), "\n                ", Blaze.View("lookup:..message", function() {     // 38
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                      // 39
      }), "\n              "), HTML.Comment("Contenido del twiit"), "\n\n              ", HTML.DIV({                // 40
        class: "btn-group",                                                                                         // 41
        role: "group",                                                                                              // 42
        id: "btnGroupInteractions"                                                                                  // 43
      }, "\n                ", HTML.A({                                                                             // 44
        class: "btn btn-secondary"                                                                                  // 45
      }, "\n                  ", HTML.SPAN({                                                                        // 46
        class: "glyphicon glyphicon-bullhorn"                                                                       // 47
      }), "\n                "), "\n\n                ", HTML.A({                                                   // 48
        id: "btnComm",                                                                                              // 49
        class: "btn btn-secondary"                                                                                  // 50
      }, "\n                  ", HTML.SPAN({                                                                        // 51
        class: "glyphicon glyphicon-comment"                                                                        // 52
      }), "\n                  ", HTML.SPAN({                                                                       // 53
        class: "badge-numFav badge"                                                                                 // 54
      }, Blaze.View("lookup:..numComment", function() {                                                             // 55
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                   // 56
      })), "\n                "), "\n\n                ", Blaze.If(function() {                                     // 57
        return Spacebars.call(view.lookup("numFav"));                                                               // 58
      }, function() {                                                                                               // 59
        return [ "\n                  ", HTML.A({                                                                   // 60
          id: "btnFav",                                                                                             // 61
          class: "btn btn-secondary"                                                                                // 62
        }, "\n                    ", HTML.SPAN({                                                                    // 63
          id: function() {                                                                                          // 64
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                   // 65
          },                                                                                                        // 66
          class: function() {                                                                                       // 67
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                   // 68
          }                                                                                                         // 69
        }), "\n                    ", HTML.SPAN({                                                                   // 70
          class: "badge badge-numFav"                                                                               // 71
        }, Blaze.View("lookup:..numFav", function() {                                                               // 72
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                     // 73
        })), "\n                  "), "\n                " ];                                                       // 74
      }, function() {                                                                                               // 75
        return [ "\n                  ", HTML.A({                                                                   // 76
          id: "btnFav",                                                                                             // 77
          class: "btn btn-secondary"                                                                                // 78
        }, "\n                    ", HTML.SPAN({                                                                    // 79
          id: function() {                                                                                          // 80
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                   // 81
          },                                                                                                        // 82
          class: function() {                                                                                       // 83
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                   // 84
          }                                                                                                         // 85
        }), "\n                  "), "\n                " ];                                                        // 86
      }), "\n              "), "\n            "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n          " ];
    }), "\n          ", Blaze.Each(function() {                                                                     // 88
      return Spacebars.call(view.lookup("tweetThatCommentMessage"));                                                // 89
    }, function() {                                                                                                 // 90
      return [ "\n            ", HTML.DIV({                                                                         // 91
        class: "panel panel-info"                                                                                   // 92
      }, HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n              ", HTML.DIV({            // 93
        class: "panel-heading"                                                                                      // 94
      }, HTML.Comment("Cabecera del twiit"), "\n                ", HTML.H3({                                        // 95
        class: "panel-title"                                                                                        // 96
      }, "@", Blaze.View("lookup:..user", function() {                                                              // 97
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                         // 98
      }), " \n                  ", HTML.SPAN({                                                                      // 99
        class: "glyphicon glyphicon-triangle-right",                                                                // 100
        "aria-hidden": "true"                                                                                       // 101
      }), "\n                  ", Blaze.View("lookup:convertDateTime", function() {                                 // 102
        return Spacebars.mustache(view.lookup("convertDateTime"));                                                  // 103
      }), "\n                "), "\n              "), HTML.Comment("Cabecera del twiit"), "\n              ", HTML.DIV({
        class: "panel-body"                                                                                         // 105
      }, HTML.Comment("Contenido del twiit"), "\n                ", Blaze.View("lookup:..message", function() {     // 106
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                      // 107
      }), "\n              "), HTML.Comment("Contenido del twiit"), "\n\n              ", HTML.DIV({                // 108
        class: "btn-group",                                                                                         // 109
        role: "group",                                                                                              // 110
        id: "btnGroupInteractions"                                                                                  // 111
      }, "\n                ", HTML.A({                                                                             // 112
        class: "btn btn-secondary"                                                                                  // 113
      }, "\n                  ", HTML.SPAN({                                                                        // 114
        class: "glyphicon glyphicon-bullhorn"                                                                       // 115
      }), "\n                "), "\n                ", Blaze.If(function() {                                        // 116
        return Spacebars.call(view.lookup("numFav"));                                                               // 117
      }, function() {                                                                                               // 118
        return [ "\n                ", HTML.A({                                                                     // 119
          id: "btnFav",                                                                                             // 120
          class: "btn btn-secondary"                                                                                // 121
        }, "\n                  ", HTML.SPAN({                                                                      // 122
          id: function() {                                                                                          // 123
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                   // 124
          },                                                                                                        // 125
          class: function() {                                                                                       // 126
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                   // 127
          }                                                                                                         // 128
        }), "\n                  ", HTML.SPAN({                                                                     // 129
          class: "badge badge-numFav"                                                                               // 130
        }, Blaze.View("lookup:..numFav", function() {                                                               // 131
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                     // 132
        })), "\n                "), "\n                " ];                                                         // 133
      }, function() {                                                                                               // 134
        return [ "\n                  ", HTML.A({                                                                   // 135
          id: "btnFav",                                                                                             // 136
          class: "btn btn-secondary"                                                                                // 137
        }, "\n                  ", HTML.SPAN({                                                                      // 138
          id: function() {                                                                                          // 139
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                   // 140
          },                                                                                                        // 141
          class: function() {                                                                                       // 142
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                   // 143
          }                                                                                                         // 144
        }), "\n                "), "\n                " ];                                                          // 145
      }), "\n              "), "\n            "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n          " ];
    }), "\n        "), "\n      "), "\n    "), "\n  " ];                                                            // 147
  }, function() {                                                                                                   // 148
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                 // 149
  });                                                                                                               // 150
}));                                                                                                                // 151
                                                                                                                    // 152
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.twiitPage.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/template.twiitPage.js                                                                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("twiitPage");                                                                                  // 2
Template["twiitPage"] = new Template("Template.twiitPage", (function() {                                            // 3
  var view = this;                                                                                                  // 4
  return Blaze.If(function() {                                                                                      // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                            // 6
  }, function() {                                                                                                   // 7
    return [ "\n    ", HTML.DIV({                                                                                   // 8
      class: "tweetfeed-container"                                                                                  // 9
    }, "\n      ", HTML.DIV({                                                                                       // 10
      class: "panel panel-default tweetfeed"                                                                        // 11
    }, "\n        ", HTML.DIV({                                                                                     // 12
      class: "panel-body"                                                                                           // 13
    }, "\n          ", HTML.Comment(" Texto para el contenido del Twitt "), "\n          ", Blaze.If(function() {   // 14
      return Spacebars.call(view.lookup("countNotifTwiit"));                                                        // 15
    }, function() {                                                                                                 // 16
      return [ "\n            ", Blaze.Each(function() {                                                            // 17
        return Spacebars.call(view.lookup("tweetMessage"));                                                         // 18
      }, function() {                                                                                               // 19
        return [ "\n              ", HTML.DIV({                                                                     // 20
          class: "panel panel-info"                                                                                 // 21
        }, "\n                ", HTML.DIV({                                                                         // 22
          class: "panel-heading"                                                                                    // 23
        }, "\n                  ", HTML.H3({                                                                        // 24
          class: "panel-title"                                                                                      // 25
        }, "@", Blaze.View("lookup:..twiitNotifUserName", function() {                                              // 26
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitNotifUserName"));                         // 27
        }), " \n                    ", HTML.SPAN({                                                                  // 28
          class: "glyphicon glyphicon-triangle-right",                                                              // 29
          "aria-hidden": "true"                                                                                     // 30
        }), "\n                     ", Blaze.View("lookup:convertDateTime", function() {                            // 31
          return Spacebars.mustache(view.lookup("convertDateTime"));                                                // 32
        }), "\n                   "), "\n                "), "\n                ", HTML.DIV({                       // 33
          class: "panel-body"                                                                                       // 34
        }, "\n                  ", Blaze.View("lookup:..twiitMessage", function() {                                 // 35
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitMessage"));                               // 36
        }), "\n                "), "\n              "), "\n            " ];                                         // 37
      }), "\n             ", HTML.BUTTON({                                                                          // 38
        class: "btn btn-info pull-right",                                                                           // 39
        type: "button"                                                                                              // 40
      }, "OK"), "\n          " ];                                                                                   // 41
    }, function() {                                                                                                 // 42
      return [ "\n            ", HTML.DIV({                                                                         // 43
        class: "panel-info"                                                                                         // 44
      }, "\n              ", HTML.P("Oooooooops"), "    \n            "), "\n          " ];                         // 45
    }), "\n        "), "\n      "), "\n    "), "\n  " ];                                                            // 46
  }, function() {                                                                                                   // 47
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                 // 48
  });                                                                                                               // 49
}));                                                                                                                // 50
                                                                                                                    // 51
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.twiitPageNew.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/template.twiitPageNew.js                                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("twiitPageNew");                                                                               // 2
Template["twiitPageNew"] = new Template("Template.twiitPageNew", (function() {                                      // 3
  var view = this;                                                                                                  // 4
  return [ HTML.Raw('<!--\n  <nav class="navbar navbar-default">\n    <div class="container">\n      Brand and toggle get grouped for better mobile display\n      <div class="navbar-header">\n\n        <button type="button" id="btnNewTweet" class="navbar-toggle">\n          <span class="glyphicon glyphicon-heart"></span>\n        </button>\n\n        <button type="button" id="btnNewTweet" class="navbar-toggle">\n          <span class="glyphicon glyphicon-comment"></span>\n        </button>\n\n        <button type="button" id="btnNewTweet" class="navbar-toggle">\n          <span class="glyphicon glyphicon-pencil"></span>\n        </button>\n\n      </div>\n    </div>\n  </nav>\n  -->\n  '), Blaze.If(function() {
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                            // 6
  }, function() {                                                                                                   // 7
    return [ "\n    ", HTML.DIV({                                                                                   // 8
      class: "tweetfeed-container"                                                                                  // 9
    }, "\n      ", HTML.DIV({                                                                                       // 10
      class: "panel panel-default tweetfeed"                                                                        // 11
    }, "\n        ", HTML.DIV({                                                                                     // 12
      class: "panel-body"                                                                                           // 13
    }, "\n          ", HTML.Comment(" Texto para el contenido del Twitt "), "\n          ", Blaze.If(function() {   // 14
      return Spacebars.call(view.lookup("countNotifTwiit"));                                                        // 15
    }, function() {                                                                                                 // 16
      return [ "\n            ", Blaze.Each(function() {                                                            // 17
        return Spacebars.call(view.lookup("tweetMessage"));                                                         // 18
      }, function() {                                                                                               // 19
        return [ "\n              ", Blaze.View("lookup:saveIdInArr", function() {                                  // 20
          return Spacebars.mustache(view.lookup("saveIdInArr"));                                                    // 21
        }), "\n              ", HTML.DIV({                                                                          // 22
          class: "panel panel-info"                                                                                 // 23
        }, "\n                ", HTML.DIV({                                                                         // 24
          class: "panel-heading"                                                                                    // 25
        }, "\n                  ", HTML.H3({                                                                        // 26
          class: "panel-title"                                                                                      // 27
        }, "\n                    ", HTML.A({                                                                       // 28
          href: function() {                                                                                        // 29
            return Spacebars.mustache(view.lookup("pathFor"), "userProfile", Spacebars.kw({                         // 30
              username: Spacebars.dot(view.lookup("."), "user")                                                     // 31
            }));                                                                                                    // 32
          }                                                                                                         // 33
        }, "@", Blaze.View("lookup:..actorNotif", function() {                                                      // 34
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "actorNotif"));                                 // 35
        })), " \n                    ", HTML.SPAN({                                                                 // 36
          class: "glyphicon glyphicon-triangle-right",                                                              // 37
          "aria-hidden": "true"                                                                                     // 38
        }), "\n                     ", Blaze.View("lookup:convertDateTime", function() {                            // 39
          return Spacebars.mustache(view.lookup("convertDateTime"));                                                // 40
        }), "\n                   "), "\n                "), "\n                ", HTML.DIV({                       // 41
          class: "panel-body"                                                                                       // 42
        }, "\n                  ", Blaze.View("lookup:..twiitMessage", function() {                                 // 43
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitMessage"));                               // 44
        }), "\n                "), "\n                ", HTML.DIV({                                                 // 45
          class: "btn-group",                                                                                       // 46
          role: "group",                                                                                            // 47
          id: "btnGroupInteractions"                                                                                // 48
        }, "\n                  ", HTML.A({                                                                         // 49
          class: "btn btn-secondary"                                                                                // 50
        }, "\n                    ", HTML.SPAN({                                                                    // 51
          class: "glyphicon glyphicon-bullhorn"                                                                     // 52
        }), "\n                  "), "\n                  ", Blaze.If(function() {                                  // 53
          return Spacebars.call(view.lookup("findNumComment"));                                                     // 54
        }, function() {                                                                                             // 55
          return [ "\n                    ", HTML.A({                                                               // 56
            href: function() {                                                                                      // 57
              return Spacebars.mustache(view.lookup("pathFor"), "twiitCommentPage", Spacebars.kw({                  // 58
                _id: Spacebars.dot(view.lookup("."), "_id")                                                         // 59
              }));                                                                                                  // 60
            },                                                                                                      // 61
            class: "btn btn-secondary"                                                                              // 62
          }, "\n                      ", HTML.SPAN({                                                                // 63
            class: "glyphicon glyphicon-comment"                                                                    // 64
          }), "\n                      ", HTML.SPAN({                                                               // 65
            class: "badge-numFav badge"                                                                             // 66
          }, Blaze.View("lookup:numComment", function() {                                                           // 67
            return Spacebars.mustache(view.lookup("numComment"));                                                   // 68
          })), "\n                    "), "\n                  " ];                                                 // 69
        }, function() {                                                                                             // 70
          return [ "\n                    ", HTML.A({                                                               // 71
            id: "btnComm",                                                                                          // 72
            class: "btn btn-secondary"                                                                              // 73
          }, "\n                    ", HTML.SPAN({                                                                  // 74
            class: "glyphicon glyphicon-comment"                                                                    // 75
          }), "\n                  "), "\n                  " ];                                                    // 76
        }), "\n                  ", Blaze.If(function() {                                                           // 77
          return Spacebars.call(view.lookup("numFavorite"));                                                        // 78
        }, function() {                                                                                             // 79
          return [ "\n                    ", HTML.A({                                                               // 80
            id: "btnFav",                                                                                           // 81
            class: "btn btn-secondary"                                                                              // 82
          }, "\n                      ", HTML.SPAN({                                                                // 83
            id: function() {                                                                                        // 84
              return Spacebars.mustache(view.lookup("idToFavBtn"));                                                 // 85
            },                                                                                                      // 86
            class: function() {                                                                                     // 87
              return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                 // 88
            }                                                                                                       // 89
          }), "\n                      ", HTML.SPAN({                                                               // 90
            class: "badge badge-numFav"                                                                             // 91
          }, Blaze.View("lookup:numFav", function() {                                                               // 92
            return Spacebars.mustache(view.lookup("numFav"));                                                       // 93
          })), "\n                    "), "\n                  " ];                                                 // 94
        }, function() {                                                                                             // 95
          return [ "\n                    ", HTML.A({                                                               // 96
            id: "btnFav",                                                                                           // 97
            class: "btn btn-secondary"                                                                              // 98
          }, "\n                      ", HTML.SPAN({                                                                // 99
            id: function() {                                                                                        // 100
              return Spacebars.mustache(view.lookup("idToFavBtn"));                                                 // 101
            },                                                                                                      // 102
            class: function() {                                                                                     // 103
              return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                 // 104
            }                                                                                                       // 105
          }), "\n                    "), "\n                  " ];                                                  // 106
        }), "\n                "), "\n              "), "\n            " ];                                         // 107
      }), "\n             ", HTML.BUTTON({                                                                          // 108
        id: "btnDismissNotif",                                                                                      // 109
        class: "btn btn-info pull-right",                                                                           // 110
        type: "button"                                                                                              // 111
      }, "OK"), "\n          " ];                                                                                   // 112
    }, function() {                                                                                                 // 113
      return [ "\n            ", HTML.DIV({                                                                         // 114
        class: "panel-info"                                                                                         // 115
      }, "\n              ", HTML.P("Oooooooops Twiit Page New"), "    \n            "), "\n          " ];          // 116
    }), "\n        "), "\n      "), "\n    "), "\n  " ];                                                            // 117
  }, function() {                                                                                                   // 118
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                 // 119
  }) ];                                                                                                             // 120
}));                                                                                                                // 121
                                                                                                                    // 122
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.userManagement.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/template.userManagement.js                                                               //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("userManagement");                                                                             // 2
Template["userManagement"] = new Template("Template.userManagement", (function() {                                  // 3
  var view = this;                                                                                                  // 4
  return Blaze.If(function() {                                                                                      // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                            // 6
  }, function() {                                                                                                   // 7
    return [ "\n    ", Blaze.If(function() {                                                                        // 8
      return Spacebars.call(view.lookup("currentUser"));                                                            // 9
    }, function() {                                                                                                 // 10
      return [ "\n      ", HTML.Comment(' LA CAJA DE PONER UN NUEVO TWIIT SE HA IMPLEMENTADO EN UN MODAL QUE SALTA \n      CUANDO SE DA AL BOTON QUE SE ENCUENTRA EN LA BARRA DE NAVEGACIÓN\n      <div id="divTweetBox" class="col-md-8 col-sm-8">{{> tweetBox}}</div>\n      '), "\n      \n      ", HTML.DIV({
        id: "divTweetFeed",                                                                                         // 12
        class: "col-md-8 col-sm-8"                                                                                  // 13
      }, Spacebars.include(view.lookupTemplate("tweetFeed"))), "\n    " ];                                          // 14
    }, function() {                                                                                                 // 15
      return [ "\n      ", HTML.DIV({                                                                               // 16
        class: "user-container"                                                                                     // 17
      }, "\n        ", HTML.DIV({                                                                                   // 18
        class: "panel panel-default userBox"                                                                        // 19
      }, "\n          ", HTML.DIV({                                                                                 // 20
        class: "panel-body"                                                                                         // 21
      }, "\n            ", HTML.Comment("módulo de acceso "), "\n            ", HTML.H4("¿Ya tienes una cuenta?"), "\n            ", HTML.DIV({
        class: "form-group"                                                                                         // 23
      }, "\n              ", HTML.INPUT({                                                                           // 24
        class: "form-control input-sm",                                                                             // 25
        id: "login-nameProfile",                                                                                    // 26
        placeholder: "Nombre de Usuario"                                                                            // 27
      }), "\n              ", HTML.INPUT({                                                                          // 28
        class: "form-control input-sm",                                                                             // 29
        id: "login-password",                                                                                       // 30
        placeholder: "Contraseña",                                                                                  // 31
        type: "password"                                                                                            // 32
      }), "\n            "), "\n\n            ", HTML.BUTTON({                                                      // 33
        type: "button",                                                                                             // 34
        class: "btn btn-info fullbutton login",                                                                     // 35
        id: "login"                                                                                                 // 36
      }, "Acceder"), "\n\n            ", HTML.Comment("módulo de registro"), "\n            ", HTML.H4("¿Nuevo por aquí?"), "\n            ", HTML.DIV({
        class: "form-group"                                                                                         // 38
      }, "\n              ", HTML.INPUT({                                                                           // 39
        class: "form-control input-sm",                                                                             // 40
        id: "signup-username",                                                                                      // 41
        placeholder: "Nombre"                                                                                       // 42
      }), "\n              ", HTML.INPUT({                                                                          // 43
        class: "form-control input-sm",                                                                             // 44
        id: "signup-nameProfile",                                                                                   // 45
        placeholder: "Nombre de Usuario"                                                                            // 46
      }), "\n              ", HTML.INPUT({                                                                          // 47
        class: "form-control input-sm",                                                                             // 48
        id: "signup-password",                                                                                      // 49
        placeholder: "Contraseña",                                                                                  // 50
        type: "password"                                                                                            // 51
      }), "\n            "), "\n            ", HTML.BUTTON({                                                        // 52
        type: "button",                                                                                             // 53
        class: "btn btn-info fullbutton",                                                                           // 54
        id: "signup"                                                                                                // 55
      }, "Regístrate"), " \n          "), "\n        "), "\n      "), "\n    " ];                                   // 56
    }), "\n  " ];                                                                                                   // 57
  }, function() {                                                                                                   // 58
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                 // 59
  });                                                                                                               // 60
}));                                                                                                                // 61
                                                                                                                    // 62
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.userProfile.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/template.userProfile.js                                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("userProfile");                                                                                // 2
Template["userProfile"] = new Template("Template.userProfile", (function() {                                        // 3
  var view = this;                                                                                                  // 4
  return Blaze.If(function() {                                                                                      // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                            // 6
  }, function() {                                                                                                   // 7
    return [ "\n    ", Blaze.If(function() {                                                                        // 8
      return Spacebars.call(view.lookup("currentUser"));                                                            // 9
    }, function() {                                                                                                 // 10
      return [ "\n      ", Blaze.If(function() {                                                                    // 11
        return Spacebars.call(view.lookup("dataUserFound"));                                                        // 12
      }, function() {                                                                                               // 13
        return [ "\n        ", HTML.DIV({                                                                           // 14
          class: "user-container"                                                                                   // 15
        }, "\n          ", HTML.DIV({                                                                               // 16
          class: "panel panel-default userBox"                                                                      // 17
        }, "\n            ", HTML.DIV({                                                                             // 18
          class: "panel-body"                                                                                       // 19
        }, "\n              ", HTML.Comment("Mensaje para el usuario registrado"), "\n              ", HTML.DIV({   // 20
          class: "row"                                                                                              // 21
        }, "\n                ", HTML.Comment("CONTENIDO DE LA PARTE IZQUIERDA DEL PERFIL DEL USUARIO"), "\n                ", HTML.DIV({
          class: "col-md-6 col-sm-6 col-xs-6",                                                                      // 23
          id: "leftDivCurrentUser"                                                                                  // 24
        }, "\n                  ", HTML.Comment('EN LA ETIQUETA DE SRC, SE PONDRA EL NOMBRE DEL USUARIO ACTUAL\n                  <img id="imgCurrentUser" src="/{{currentUser.username}}.png" class="img-responsive">\n                  A MODO DE EJEMPLO, VAMOS A UTILIZAR UNO GENERICO PARA QUE CARGUE EN CUALQUIER USUARIO'), "\n                  ", HTML.IMG({
          id: "imgCurrentUser",                                                                                     // 26
          src: function() {                                                                                         // 27
            return Spacebars.mustache(view.lookup("userImgFound"));                                                 // 28
          },                                                                                                        // 29
          class: "img-responsive"                                                                                   // 30
        }), "\n                "), "\n                ", HTML.Comment("CONTENIDO DE LA PARTE DERECHA DEL PERFIL DEL USUARIO"), "\n                ", HTML.DIV({
          class: "col-md-6 col-sm-6 col-xs-6",                                                                      // 32
          id: "rightDivCurrentUser"                                                                                 // 33
        }, "\n                  ", HTML.Comment("ESTA DESCRIPCION ES GENERICA. HAY QUE CAMBIARLA POR LA QUE APAREZCA EN userData.description"), "\n                  ", Blaze.View("lookup:dataUserFound.userDescription", function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userDescription"));                // 35
        }), "\n                "), "\n              "), "\n\n              ", HTML.DIV({                            // 36
          class: "currentUserName"                                                                                  // 37
        }, "\n                ", HTML.DIV({                                                                         // 38
          class: "col-md-5 col-sm-5 col-xs-5 nameUserAndProfile"                                                    // 39
        }, "\n                  ", HTML.H3(HTML.STRONG(Blaze.View("lookup:dataUserFound.userName", function() {     // 40
          return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userName"));                       // 41
        }))), "\n                  ", HTML.H5("@", Blaze.View("lookup:dataUserFound.userNameProfile", function() {  // 42
          return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userNameProfile"));                // 43
        })), "\n                "), "\n                ", HTML.DIV({                                                // 44
          class: "col-md-7 col-sm-7 col-xs-7 dropdown btnOptionsProfile"                                            // 45
        }, "\n                  ", Blaze.If(function() {                                                            // 46
          return Spacebars.call(view.lookup("showProfileOtherUser"));                                               // 47
        }, function() {                                                                                             // 48
          return [ "\n                    ", HTML.BUTTON({                                                          // 49
            id: "dropdownOptionsUser",                                                                              // 50
            class: "btn btn-primary dropdown-toggle optionsUserProfile",                                            // 51
            type: "button",                                                                                         // 52
            "data-toggle": "dropdown",                                                                              // 53
            "aria-haspopup": "true",                                                                                // 54
            "aria-expanded": "true"                                                                                 // 55
          }, "\n                      ", HTML.SPAN({                                                                // 56
            class: "glyphicon glyphicon-option-vertical"                                                            // 57
          }), "\n                    "), "\n                    ", HTML.UL({                                        // 58
            class: "dropdown-menu",                                                                                 // 59
            "aria-labelledby": "dropdownOptionsUser"                                                                // 60
          }, "\n                      ", HTML.LI(HTML.A({                                                           // 61
            href: "#",                                                                                              // 62
            id: "editProfile"                                                                                       // 63
          }, "Editar Perfil")), "\n                      ", HTML.LI(HTML.A({                                        // 64
            href: "#",                                                                                              // 65
            id: "removeProfile"                                                                                     // 66
          }, "Eliminar Perfil")), "\n                      ", HTML.LI({                                             // 67
            role: "separator",                                                                                      // 68
            class: "divider"                                                                                        // 69
          }), "\n                      ", HTML.LI(HTML.A({                                                          // 70
            href: "#",                                                                                              // 71
            id: "logout"                                                                                            // 72
          }, "Salir")), "\n                    "), "\n                  " ];                                        // 73
        }), "\n                  ", HTML.DIV({                                                                      // 74
          id: "optionsUserProfile"                                                                                  // 75
        }, "\n                    ", Blaze.Each(function() {                                                        // 76
          return Spacebars.call(view.lookup("existsSocialNetwork"));                                                // 77
        }, function() {                                                                                             // 78
          return [ "  \n                      ", HTML.BUTTON({                                                      // 79
            type: "button",                                                                                         // 80
            id: function() {                                                                                        // 81
              return [ "btn", Spacebars.mustache(Spacebars.dot(view.lookup("."), "id")) ];                          // 82
            },                                                                                                      // 83
            class: function() {                                                                                     // 84
              return [ "btn btn-", Spacebars.mustache(Spacebars.dot(view.lookup("."), "color")), " btn-circle optionsUserProfile" ];
            },                                                                                                      // 86
            "data-toggle": "modal",                                                                                 // 87
            "data-target": "#dialog-showSocialNetwork"                                                              // 88
          }, "\n                        ", HTML.I({                                                                 // 89
            id: function() {                                                                                        // 90
              return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                     // 91
            },                                                                                                      // 92
            class: function() {                                                                                     // 93
              return Spacebars.mustache(Spacebars.dot(view.lookup("."), "class"));                                  // 94
            },                                                                                                      // 95
            style: "font-size: 24px;"                                                                               // 96
          }), "\n                      "), "\n                    " ];                                              // 97
        }), "\n                  "), "\n                "), "\n              "), "\n                \n              ", HTML.Comment('\n              <button type="button" class="btn btn-info fullbutton" id="modProfile">Editar Perfil</button>\n              <button type="button" class="btn btn-info fullbutton" id="logout">Salir</button>\n              '), "\n              ", HTML.TABLE({
          class: "table"                                                                                            // 99
        }, "  \n                ", HTML.TR("\n                  ", HTML.TD({                                        // 100
          class: "tableHeader"                                                                                      // 101
        }, "Twitts"), "\n                  ", HTML.TD({                                                             // 102
          class: "tableHeader"                                                                                      // 103
        }, "Siguiendo"), "\n                  ", HTML.TD({                                                          // 104
          class: "tableHeader"                                                                                      // 105
        }, "Seguidores"), "\n                "), "\n                ", HTML.TR("\n                  ", HTML.TD({    // 106
          class: "tableContent"                                                                                     // 107
        }, Blaze.View("lookup:tweets", function() {                                                                 // 108
          return Spacebars.mustache(view.lookup("tweets"), Spacebars.dot(view.lookup("currentUser"), "username"));  // 109
        })), "\n                  ", HTML.TD({                                                                      // 110
          class: "tableContent"                                                                                     // 111
        }, Blaze.View("lookup:following", function() {                                                              // 112
          return Spacebars.mustache(view.lookup("following"));                                                      // 113
        })), "\n                  ", HTML.TD({                                                                      // 114
          class: "tableContent"                                                                                     // 115
        }, Blaze.View("lookup:followers", function() {                                                              // 116
          return Spacebars.mustache(view.lookup("followers"));                                                      // 117
        })), "\n                "), "\n              "), "\n\n              ", HTML.DIV({                           // 118
          class: "modal fade",                                                                                      // 119
          id: "dialog-showSocialNetwork"                                                                            // 120
        }, "\n                ", Spacebars.include(view.lookupTemplate("showSocialNetwork")), "\n              "), "\n\n            "), "\n          "), "\n        "), "\n        ", HTML.DIV({
          id: "divTweetFeed",                                                                                       // 122
          class: "col-md-8 col-sm-8"                                                                                // 123
        }, Spacebars.include(view.lookupTemplate("tweetFeedProfile"))), "\n      " ];                               // 124
      }), "\n    " ];                                                                                               // 125
    }), "\n  " ];                                                                                                   // 126
  }, function() {                                                                                                   // 127
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                 // 128
  });                                                                                                               // 129
}));                                                                                                                // 130
                                                                                                                    // 131
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"editProfile.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/editProfile.js                                                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.editProfile.onCreated(function () {                                                                        // 1
		Meteor.subscribe('images');                                                                                       // 2
		Meteor.call('findUserData', this.data, function (err, res) {                                                      // 3
				Session.set('datauser', res);                                                                                   // 4
		});                                                                                                               // 5
		currentDataUser = Session.get('datauser');                                                                        // 6
});                                                                                                                 // 7
                                                                                                                    //
Template.editProfile.events({                                                                                       // 9
		'click #saveChanges': function () {                                                                               // 10
				function clickSaveChanges() {                                                                                   // 10
						userAux = Session.get('datauser');                                                                            // 11
						newData = new Object();                                                                                       // 12
						newData.description = document.getElementById("userDescription").value;                                       // 13
						if (newData.description === "") {                                                                             // 14
								newData.description = $('#userDescription').attr("placeholder");                                            // 15
						}                                                                                                             // 16
						newData.userId = userAux._id;                                                                                 // 17
                                                                                                                    //
						//AHORA NOS GUARDAMOS EL _id DEL DOCUEMNTO QUE VAMSO A INSERTAR EN LA COLECCION Images                        //
						//QUE ALMACENARÁ LA NUEVA FOTO                                                                                //
						var codeImg = $('#imgCurrentUser').attr("src");                                                               // 21
                                                                                                                    //
						Meteor.call('insertNewImage', codeImg, function (err, res) {                                                  // 23
								newData.imgId = res;                                                                                        // 24
								console.log(newData.imgId);                                                                                 // 25
								Meteor.call('updUserData', newData);                                                                        // 26
								window.location = "/Profile/" + userAux.userNameProfile;                                                    // 27
						});                                                                                                           // 28
                                                                                                                    //
						/*                                                                                                            //
      //REALIZAMOS LA PETICION AJAX PARA GUARDAR LA IMAGEN EN PUBLIC                                                //
      //RECUPERAMOS LA IMAGEN QUE HEMOS SUBIDO                                                                      //
      		var file = $('#inputFile')[0].files[0];                                                                     //
      		var readFile = new FileReader();                                                                            //
      		readFile.readAsDataURL(file);                                                                               //
        		console.log(readFile);                                                                                    //
      		var ruta = "img-ajax.php";                                                                                  //
            $.ajax({                                                                                                //
                url: ruta,                                                                                          //
                type: "POST",                                                                                       //
                data: readFile,                                                                                     //
                contentType: false,                                                                                 //
                processData: false,                                                                                 //
                success: function(datos)                                                                            //
                {                                                                                                   //
                    console.log(datos);                                                                             //
                }                                                                                                   //
            });                                                                                                     //
            */                                                                                                      //
				}                                                                                                               // 52
                                                                                                                    //
				return clickSaveChanges;                                                                                        // 10
		}(),                                                                                                              // 10
		'change #inputFile': function () {                                                                                // 53
				function changeInputFile() {                                                                                    // 53
                                                                                                                    //
						//RECUPERAMOS LA IMAGEN QUE HEMOS SUBIDO                                                                      //
						var file = $('#inputFile')[0].files[0];                                                                       // 56
                                                                                                                    //
						reader = new FileReader();                                                                                    // 58
						reader.onload = function (file) {                                                                             // 59
								return function (e) {                                                                                       // 60
										$('#imgCurrentUser').attr("src", e.target.result);                                                        // 61
								};                                                                                                          // 62
						}(file);                                                                                                      // 63
                                                                                                                    //
						reader.readAsDataURL(file);                                                                                   // 65
				}                                                                                                               // 66
                                                                                                                    //
				return changeInputFile;                                                                                         // 53
		}()                                                                                                               // 53
});                                                                                                                 // 9
                                                                                                                    //
Template.editProfile.helpers({                                                                                      // 69
		'dataUserFound': function () {                                                                                    // 70
				function dataUserFound() {                                                                                      // 70
						dataUser = Session.get('datauser');                                                                           // 71
						return dataUser;                                                                                              // 72
				}                                                                                                               // 73
                                                                                                                    //
				return dataUserFound;                                                                                           // 70
		}(),                                                                                                              // 70
		'userImgFound': function () {                                                                                     // 74
				function userImgFound() {                                                                                       // 74
						if (dataUser.userImg) {                                                                                       // 75
								Meteor.call('findUserImg', dataUser.userImg, function (err, res) {                                          // 76
										$('#imgCurrentUser').attr("src", res);                                                                    // 77
								});                                                                                                         // 78
						} else {                                                                                                      // 79
								console.log("Imagen test");                                                                                 // 80
								$('#imgCurrentUser').attr("src", "/profileImgTest.png");                                                    // 81
						}                                                                                                             // 82
				}                                                                                                               // 83
                                                                                                                    //
				return userImgFound;                                                                                            // 74
		}(),                                                                                                              // 74
		'tweets': function () {                                                                                           // 84
				function tweets(username) {                                                                                     // 84
						Meteor.call('tweetsPublish', username, function (err, res) {                                                  // 85
								Session.set('numTweets', res);                                                                              // 86
						});                                                                                                           // 87
						return Session.get('numTweets');                                                                              // 88
				}                                                                                                               // 89
                                                                                                                    //
				return tweets;                                                                                                  // 84
		}(),                                                                                                              // 84
		'following': function () {                                                                                        // 90
				function following() {                                                                                          // 90
						Meteor.call('usersFollowings', function (err, res) {                                                          // 91
								Session.set('numFollowings', res);                                                                          // 92
						});                                                                                                           // 93
						return Session.get('numFollowings');                                                                          // 94
				}                                                                                                               // 95
                                                                                                                    //
				return following;                                                                                               // 90
		}(),                                                                                                              // 90
		'followers': function () {                                                                                        // 96
				function followers() {                                                                                          // 96
						Meteor.call('usersFollowers', function (err, res) {                                                           // 97
								Session.set('numFollowers', res);                                                                           // 98
						});                                                                                                           // 99
						return Session.get('numFollowers');                                                                           // 100
				}                                                                                                               // 101
                                                                                                                    //
				return followers;                                                                                               // 96
		}(),                                                                                                              // 96
		'userHaveSN': function () {                                                                                       // 102
				function userHaveSN(dataUserFound) {                                                                            // 102
						if (dataUserFound.userWhats && dataUserFound.userFb && dataUserFound.userInsta) {                             // 103
								return false;                                                                                               // 104
						} else {                                                                                                      // 105
								return true;                                                                                                // 106
						}                                                                                                             // 107
				}                                                                                                               // 108
                                                                                                                    //
				return userHaveSN;                                                                                              // 102
		}()                                                                                                               // 102
});                                                                                                                 // 69
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"followUsers.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/followUsers.js                                                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.followUsers.events({                                                                                       // 1
  'submit form': function () {                                                                                      // 2
    function submitForm(event) {                                                                                    // 2
                                                                                                                    //
      var searchUser = event.target.searchUser.value;                                                               // 4
      var foundUser = Meteor.call('findUser', searchUser, function (err, res) {                                     // 5
        if (res) Session.set('foundUser', res);                                                                     // 6
      });                                                                                                           // 7
      return false;                                                                                                 // 8
    }                                                                                                               // 9
                                                                                                                    //
    return submitForm;                                                                                              // 2
  }(),                                                                                                              // 2
                                                                                                                    //
  'click #follow': function () {                                                                                    // 11
    function clickFollow() {                                                                                        // 11
      Meteor.call('followUser', Session.get('foundUser').username);                                                 // 12
    }                                                                                                               // 13
                                                                                                                    //
    return clickFollow;                                                                                             // 11
  }(),                                                                                                              // 11
                                                                                                                    //
  'click #followRec': function () {                                                                                 // 15
    function clickFollowRec(event) {                                                                                // 15
      Meteor.call('followUser', this.username);                                                                     // 16
    }                                                                                                               // 17
                                                                                                                    //
    return clickFollowRec;                                                                                          // 15
  }()                                                                                                               // 15
});                                                                                                                 // 1
                                                                                                                    //
Template.followUsers.helpers({                                                                                      // 20
  'foundUser': function () {                                                                                        // 21
    function foundUser() {                                                                                          // 21
      return Session.get('foundUser');                                                                              // 22
    }                                                                                                               // 23
                                                                                                                    //
    return foundUser;                                                                                               // 21
  }(),                                                                                                              // 21
                                                                                                                    //
  'recommendedUsers': function () {                                                                                 // 25
    function recommendedUsers() {                                                                                   // 25
      return Session.get('recommendedUsers');                                                                       // 26
    }                                                                                                               // 27
                                                                                                                    //
    return recommendedUsers;                                                                                        // 25
  }()                                                                                                               // 25
});                                                                                                                 // 20
                                                                                                                    //
Template.followUsers.onRendered(function () {                                                                       // 31
  Meteor.call('recommendUsers', function (err, res) {                                                               // 32
    Session.set('recommendedUsers', res);                                                                           // 33
  });                                                                                                               // 34
});                                                                                                                 // 35
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"navBarTemplate.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/navBarTemplate.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.navBarTemplate.onCreated(function () {                                                                     // 1
	Session.set('sizeDisplay', $(window).width());                                                                     // 2
	Session.set('navBarCollapse', false);                                                                              // 3
	Session.set('currentUser', Meteor.user().username);                                                                // 4
                                                                                                                    //
	//PEDIMOS PERMISO AL USUARIO PARA MOSTRARLE NOTIFICACIONES                                                         //
	console.log(navigator.platform);                                                                                   // 7
                                                                                                                    //
	/*                                                                                                                 //
 HAY QUE CONTROLAR ESTO PORQUE NO FUNCIONA EL NOTIFICATION EN IPHONE                                                //
 if(navigator.platform != 'iPad' || navigator.platform != 'iPhone' || navigator.platform != 'iPod'){                //
 	Notification.requestPermission();                                                                                 //
 }                                                                                                                  //
 */                                                                                                                 //
});                                                                                                                 // 16
                                                                                                                    //
//ESTA ES OTRA FORMA DE HACER APARECER EL SPINNER CUANDO NO SE HA CARGADO LA TEMPLATE                               //
/*                                                                                                                  //
	Session.set("onRender", true);                                                                                     //
});                                                                                                                 //
                                                                                                                    //
Template.navBarTemplate.onRendered(function() {                                                                     //
	Session.set("onRender", false);                                                                                    //
    return Session.get("onRender");                                                                                 //
});                                                                                                                 //
*/                                                                                                                  //
Template.navBarTemplate.events({                                                                                    // 28
	'click #recommendationsBtn': function () {                                                                         // 29
		function clickRecommendationsBtn() {                                                                              // 29
			//console.log("A quien seguir");                                                                                 //
		}                                                                                                                 // 31
                                                                                                                    //
		return clickRecommendationsBtn;                                                                                   // 29
	}(),                                                                                                               // 29
	'click #imgProfile': function () {                                                                                 // 32
		function clickImgProfile() {                                                                                      // 32
			window.location = "/Profile/" + Session.get('currentUser');                                                      // 33
		}                                                                                                                 // 34
                                                                                                                    //
		return clickImgProfile;                                                                                           // 32
	}(),                                                                                                               // 32
	'click #imgLogTwiiterClone': function () {                                                                         // 35
		function clickImgLogTwiiterClone() {                                                                              // 35
			window.location = "/";                                                                                           // 36
		}                                                                                                                 // 37
                                                                                                                    //
		return clickImgLogTwiiterClone;                                                                                   // 35
	}(),                                                                                                               // 35
	'show.bs.collapse': function () {                                                                                  // 38
		function showBsCollapse() {                                                                                       // 38
			Session.set('navBarCollapse', true);                                                                             // 39
		}                                                                                                                 // 40
                                                                                                                    //
		return showBsCollapse;                                                                                            // 38
	}(),                                                                                                               // 38
	'hide.bs.collapse': function () {                                                                                  // 41
		function hideBsCollapse() {                                                                                       // 41
			Session.set('navBarCollapse', false);                                                                            // 42
		}                                                                                                                 // 43
                                                                                                                    //
		return hideBsCollapse;                                                                                            // 41
	}(),                                                                                                               // 41
	'click #btnNewTweet': function () {                                                                                // 44
		function clickBtnNewTweet() {                                                                                     // 44
			Session.set('commentMode', false);                                                                               // 45
		}                                                                                                                 // 46
                                                                                                                    //
		return clickBtnNewTweet;                                                                                          // 44
	}(),                                                                                                               // 44
	'click #btnNewTwiit': function () {                                                                                // 47
		function clickBtnNewTwiit() {                                                                                     // 47
			Session.set('commentMode', false);                                                                               // 48
		}                                                                                                                 // 49
                                                                                                                    //
		return clickBtnNewTwiit;                                                                                          // 47
	}()                                                                                                                // 47
});                                                                                                                 // 28
                                                                                                                    //
Template.navBarTemplate.helpers({                                                                                   // 52
	'notificationCount': function () {                                                                                 // 53
		function notificationCount() {                                                                                    // 53
			return UserUtils.findNumberNotif(Meteor.user().username);                                                        // 54
		}                                                                                                                 // 55
                                                                                                                    //
		return notificationCount;                                                                                         // 53
	}(),                                                                                                               // 53
	'infoStateCollapseNavBar': function () {                                                                           // 56
		function infoStateCollapseNavBar() {                                                                              // 56
			return Session.get('navBarCollapse');                                                                            // 57
		}                                                                                                                 // 58
                                                                                                                    //
		return infoStateCollapseNavBar;                                                                                   // 56
	}(),                                                                                                               // 56
	'userImgFound': function () {                                                                                      // 59
		function userImgFound() {                                                                                         // 59
			Meteor.call('findUserData', Meteor.user().username, function (err, res) {                                        // 60
				console.log(res);                                                                                               // 61
				if (res.userImg) {                                                                                              // 62
					Meteor.call('findUserImg', res.userImg, function (err, res) {                                                  // 63
						$('#imgProfile').attr("src", res);                                                                            // 64
					});                                                                                                            // 65
				} else {                                                                                                        // 66
					$('#imgProfile').attr("src", "/profileImgTest.png");                                                           // 67
				}                                                                                                               // 68
			});                                                                                                              // 70
		}                                                                                                                 // 71
                                                                                                                    //
		return userImgFound;                                                                                              // 59
	}()                                                                                                                // 59
});                                                                                                                 // 52
//PARA CONTROLAR SI SE CAMBIA EL TAMAÑO DE PANTALLA                                                                 //
$(window).resize(function () {                                                                                      // 74
	console.log("Change");                                                                                             // 75
	Session.set('sizeDisplay', $(window).width());                                                                     // 76
});                                                                                                                 // 77
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notifications.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/notifications.js                                                                         //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.notifications.onCreated(function () {                                                                      // 1
  //console.log("Usuario: ");                                                                                       //
  //console.log(Meteor.user().username);                                                                            //
  Meteor.subscribe('notifications', Meteor.user().username);                                                        // 4
});                                                                                                                 // 5
                                                                                                                    //
Template.notifications.helpers({                                                                                    // 7
  modeDisplay: function () {                                                                                        // 8
    function modeDisplay() {                                                                                        // 8
      var size = Session.get('sizeDisplay');                                                                        // 9
      if (size > 768) {                                                                                             // 10
        return true;                                                                                                // 11
      } else {                                                                                                      // 12
        return false;                                                                                               // 13
      }                                                                                                             // 14
    }                                                                                                               // 15
                                                                                                                    //
    return modeDisplay;                                                                                             // 8
  }(),                                                                                                              // 8
  notifications: function () {                                                                                      // 16
    function notifications() {                                                                                      // 16
      return Notifications.find({ recepNotif: Meteor.user().username, read: false });                               // 17
    }                                                                                                               // 18
                                                                                                                    //
    return notifications;                                                                                           // 16
  }(),                                                                                                              // 16
  notificationCount: function () {                                                                                  // 19
    function notificationCount() {                                                                                  // 19
      /*                                                                                                            //
      var followings = UserUtils.findFollowings(Meteor.user().username);                                            //
      return Notifications.find({twiitNotifUserName: { $nin: followings }, read: false}).count();                   //
      */                                                                                                            //
      return UserUtils.findNumberNotif(Meteor.user().username);                                                     // 24
    }                                                                                                               // 25
                                                                                                                    //
    return notificationCount;                                                                                       // 19
  }(),                                                                                                              // 19
  'infoStateCollapseNavBar': function () {                                                                          // 26
    function infoStateCollapseNavBar() {                                                                            // 26
      return Session.get('navBarCollapse');                                                                         // 27
    }                                                                                                               // 28
                                                                                                                    //
    return infoStateCollapseNavBar;                                                                                 // 26
  }()                                                                                                               // 26
});                                                                                                                 // 7
                                                                                                                    //
/*                                                                                                                  //
Template.notificationItem.helpers({                                                                                 //
  notificationTwiitPath: function() {                                                                               //
    var path = this.twiitId;                                                                                        //
    console.log(path);                                                                                              //
    return path;                                                                                                    //
  }                                                                                                                 //
});                                                                                                                 //
                                                                                                                    //
                                                                                                                    //
Template.notificationItem.events({                                                                                  //
  'click a': function() {                                                                                           //
    Notifications.update(this._id, {$set: {read: true}});                                                           //
  }                                                                                                                 //
});                                                                                                                 //
*/                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notificationsNew.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/notificationsNew.js                                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.notificationsNew.onCreated(function () {                                                                   // 1
  //console.log("Usuario: ");                                                                                       //
  //console.log(Meteor.user().username);                                                                            //
  Meteor.subscribe('notifications', Meteor.user().username);                                                        // 4
});                                                                                                                 // 5
                                                                                                                    //
Template.notificationsNew.helpers({                                                                                 // 7
  modeDisplay: function () {                                                                                        // 8
    function modeDisplay() {                                                                                        // 8
      var size = Session.get('sizeDisplay');                                                                        // 9
      if (size > 768) {                                                                                             // 10
        return true;                                                                                                // 11
      } else {                                                                                                      // 12
        return false;                                                                                               // 13
      }                                                                                                             // 14
    }                                                                                                               // 15
                                                                                                                    //
    return modeDisplay;                                                                                             // 8
  }(),                                                                                                              // 8
  notifications: function () {                                                                                      // 16
    function notifications() {                                                                                      // 16
      //followings = UserUtils.findFollowings(Meteor.user().username);                                              //
      return Notifications.find({ recepNotif: Meteor.user().username, read: false });                               // 18
    }                                                                                                               // 19
                                                                                                                    //
    return notifications;                                                                                           // 16
  }(),                                                                                                              // 16
  notificationCount: function () {                                                                                  // 20
    function notificationCount() {                                                                                  // 20
      /*                                                                                                            //
      var followings = UserUtils.findFollowings(Meteor.user().username);                                            //
      return Notifications.find({twiitNotifUserName: { $nin: followings }, read: false}).count();                   //
      */                                                                                                            //
      numNotif = UserUtils.findNumberNotif(Meteor.user().username);                                                 // 25
      return numNotif;                                                                                              // 26
    }                                                                                                               // 27
                                                                                                                    //
    return notificationCount;                                                                                       // 20
  }(),                                                                                                              // 20
  'infoStateCollapseNavBar': function () {                                                                          // 28
    function infoStateCollapseNavBar() {                                                                            // 28
      return Session.get('navBarCollapse');                                                                         // 29
    }                                                                                                               // 30
                                                                                                                    //
    return infoStateCollapseNavBar;                                                                                 // 28
  }(),                                                                                                              // 28
  'currentUser': function () {                                                                                      // 31
    function currentUser() {                                                                                        // 31
      return Meteor.user().username;                                                                                // 32
    }                                                                                                               // 33
                                                                                                                    //
    return currentUser;                                                                                             // 31
  }()                                                                                                               // 31
});                                                                                                                 // 7
                                                                                                                    //
Template.notificationsNew.events({                                                                                  // 36
                                                                                                                    //
  'click #linkToNotif': function () {                                                                               // 38
    function clickLinkToNotif() {                                                                                   // 38
      if (numNotif > 0) {                                                                                           // 39
        window.location = "/Notifications/" + Meteor.user().username;                                               // 40
      }                                                                                                             // 41
    }                                                                                                               // 42
                                                                                                                    //
    return clickLinkToNotif;                                                                                        // 38
  }()                                                                                                               // 38
                                                                                                                    //
});                                                                                                                 // 36
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"showSocialNetwork.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/showSocialNetwork.js                                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.showSocialNetwork.onRendered(function () {                                                                 // 1
  socialNetwork = Session.get('SocialNetworkToShow');                                                               // 2
});                                                                                                                 // 3
                                                                                                                    //
Template.showSocialNetwork.events({});                                                                              // 5
                                                                                                                    //
Template.showSocialNetwork.helpers({                                                                                // 9
  'socialNetwork': function () {                                                                                    // 10
    function socialNetwork() {                                                                                      // 10
      return Session.get('SocialNetworkToShow');                                                                    // 11
    }                                                                                                               // 12
                                                                                                                    //
    return socialNetwork;                                                                                           // 10
  }()                                                                                                               // 10
});                                                                                                                 // 9
                                                                                                                    //
//EN EL MODAL EMERGENTE QUE MSTRARÁ LA INFORMACION AÑADIDA DEL USUARIO SOBRE SU RED SOCIAL                          //
//SE IMPLEMENTARA QUE PINCHE EN EL NOMBRE DE USUARIO Y QUE SE REDIRIJA LA PAGINA A LA                               //
//PAGINA DE PERFIL DE USUARIO QUE CORRESPONDA                                                                       //
                                                                                                                    //
//EN INSTAGRAM SE REDIRIGIRÁ A: https://www.instagram.com/{{currentUser.userInsta}}/                                //
//EN FACEBOOK SE REDIRIGIRÁ A: https://www.facebook.com/search/all/?q={{currentUser.userFb}}                        //
                                                                                                                    //
//EL CASO DE WHATSAPP ES MAS DIFERENTE. LO QUE HAREMOS SERÁ SOLICITAR AL USUARIO QUE SI QUIERE                      //
//AÑADIR EL NUMERO DE TELEFONO EN SU AGENDA (SOLO PARA DISPOSITIVOS MÓVILES)                                        //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"socialNetworkBox.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/socialNetworkBox.js                                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.socialNetworkBox.onRendered(function () {                                                                  // 1
  selectOptions = Session.get('optionsAva');                                                                        // 2
  currentDataUser = Session.get('datauser');                                                                        // 3
  Session.set('inputNotEmpty', true);                                                                               // 4
  Session.set('removeDataSN', false);                                                                               // 5
});                                                                                                                 // 6
                                                                                                                    //
Template.socialNetworkBox.events({                                                                                  // 8
  'click #btnNewSN': function () {                                                                                  // 9
    function clickBtnNewSN() {                                                                                      // 9
      var numSocialNetworks = Session.get('countSocialNetworks');                                                   // 10
                                                                                                                    //
      if (numSocialNetworks < 3) {                                                                                  // 12
                                                                                                                    //
        var avaSelecOptions = "";                                                                                   // 14
        var selectOptionsArray = Session.get('optionsAva');                                                         // 15
                                                                                                                    //
        for (var i = 0; i < selectOptionsArray.length; i++) {                                                       // 17
          avaSelecOptions += "<li><a href='#'>" + selectOptionsArray[i] + "</a></li>";                              // 18
        }                                                                                                           // 19
                                                                                                                    //
        $('#containerInputs').append("<div class='input-group' id='inputGroup" + numSocialNetworks + "' style='margin-bottom: 10px;'>" + "<div class='input-group-btn'>" + "<button id='" + numSocialNetworks + "' type='button' class='btn btn-default dropdown-toggle btnDropDown btnOptionsSN' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Choose" + "<span class='caret'></span>" + "</button>" + "<ul id='dropdownMenu" + numSocialNetworks + "' class='dropdown-menu'>" + avaSelecOptions + "</ul>" + "</div>" + "<input required id='input" + numSocialNetworks + "' type='text' class='form-control inputSN inputNewSN' aria-label='...' placeholder='Username...'>" + "<button id='clearDataUser" + numSocialNetworks + "' type='button' class='btn btn-danger' aria-haspopup='true' aria-expanded='false'>" + "<span id='" + numSocialNetworks + "' class='glyphicon glyphicon-remove'></span>" + "</button>" + "</div>");
        numSocialNetworks++;                                                                                        // 35
        Session.set('countSocialNetworks', numSocialNetworks);                                                      // 36
      };                                                                                                            // 37
                                                                                                                    //
      if (numSocialNetworks === 3) {                                                                                // 39
        $('#btnNewSN').hide();                                                                                      // 40
        Session.set('removeDataSN', false);                                                                         // 41
      };                                                                                                            // 42
    }                                                                                                               // 43
                                                                                                                    //
    return clickBtnNewSN;                                                                                           // 9
  }(),                                                                                                              // 9
  'click .btnDropDown': function () {                                                                               // 44
    function clickBtnDropDown(event) {                                                                              // 44
      Session.set('btnTap', event.target.id);                                                                       // 45
    }                                                                                                               // 46
                                                                                                                    //
    return clickBtnDropDown;                                                                                        // 44
  }(),                                                                                                              // 44
  'click .dropdown-menu li a': function () {                                                                        // 47
    function clickDropdownMenuLiA(event) {                                                                          // 47
      var btnTap = Session.get('btnTap');                                                                           // 48
      var selectOption = event.target.text;                                                                         // 49
      //AÑADIR A UN ARRAY LAS SELECCIONES QUE HACEMOS PARA QUE NO SE PUEDAN REPETIR.                                //
      //ES DECIR, UN USUARIO SOLO VA A PODER ENLAZAR 1 CUENTA DE FACEBOOK, INSTAGRAM                                //
      //O WHATSAPP.                                                                                                 //
      var arrOptions = Session.get('optionsAva');                                                                   // 53
                                                                                                                    //
      var numSele = arrOptions.indexOf(selectOption);                                                               // 55
      if (numSele >= 0) {                                                                                           // 56
        arrOptions.splice(numSele, 1);                                                                              // 57
      }                                                                                                             // 58
                                                                                                                    //
      //VAMOS A COMPROBAR QUE SI selectOption ES WHATSAPP LE VAMOS A PONER AL INPUT UN FORMATO PARA QUE             //
      //EL USUARIO SOLO PUEDA INTRODUCIR NUMEROS                                                                    //
      if (selectOption === "WhatsApp") {                                                                            // 62
        $('#input' + btnTap).attr("type", "number");                                                                // 63
      }                                                                                                             // 64
                                                                                                                    //
      //UNA VEZ SELECCIONADO LA OPCION DEL DROPDOWN, TRANSFORMAMOS EL DROPDOWN A UN BTN DESHABILITADO               //
      $('#' + btnTap).html(selectOption);                                                                           // 67
                                                                                                                    //
      $('#dropdownMenu' + btnTap).remove();                                                                         // 69
                                                                                                                    //
      Session.set('optionsAva', arrOptions);                                                                        // 71
    }                                                                                                               // 72
                                                                                                                    //
    return clickDropdownMenuLiA;                                                                                    // 47
  }(),                                                                                                              // 47
  'click .btn-danger': function () {                                                                                // 73
    function clickBtnDanger(event) {                                                                                // 73
                                                                                                                    //
      //GUARDAMOS EL ID (numero entre 0 y 2) PARA DESPUES IDENTIFICAR EL INPUT-GROUP Y ASI ELIMINAR LOS DATOS DE MONGODB
      var selectOption = event.target.id;                                                                           // 76
      //AHORA BUSCAMOS EL CAMPO A ELIMINAR Y LLAMAMOS AL METODO DE userData.js                                      //
      var btnToRem = $('#' + selectOption).text();                                                                  // 78
      var newData = new Object();                                                                                   // 79
                                                                                                                    //
      if (btnToRem != 'Choose') {                                                                                   // 81
        newData.userId = Session.get('datauser')._id;                                                               // 82
        newData.propertyToRem = btnToRem;                                                                           // 83
                                                                                                                    //
        Meteor.call('removeDataSocialNetworks', newData);                                                           // 85
      };                                                                                                            // 86
                                                                                                                    //
      //POR ULTIMO VAMOS A INFORMAR AL USUARIO QUE SE HA ELIMINADO LA RED SOCIAL                                    //
      //PARA ELLO, VAMOS A ELIMINAR EL inputGroup DE LA SN QUE SE HA ELIMINADO                                      //
      $('#inputGroup' + selectOption).remove();                                                                     // 90
      Session.set('removeDataSN', true);                                                                            // 91
                                                                                                                    //
      //ACTUALIZAMOS EL VALOR DE optionsAva EN Session.keys                                                         //
      var auxOptions = Session.get('optionsAva');                                                                   // 94
                                                                                                                    //
      if (btnToRem != "Choose") {                                                                                   // 96
        if (auxOptions.indexOf(newData.propertyToRem) === -1) {                                                     // 97
          auxOptions.push(newData.propertyToRem);                                                                   // 98
          Session.set('optionsAva', auxOptions);                                                                    // 99
        };                                                                                                          // 100
      };                                                                                                            // 101
                                                                                                                    //
      //ACTUALIZAMOS EL VALOR DE countSocialNetworks EN Session.keys                                                //
      var auxCount = Session.get('countSocialNetworks');                                                            // 104
      auxCount--;                                                                                                   // 105
      Session.set('countSocialNetworks', auxCount);                                                                 // 106
                                                                                                                    //
      //CUANDO SE BORRA UN INPUTGROUP HAY QUE REESTABLECER LOS ID PARA QUE EMPIECEN POR 0 HASTA 2                   //
                                                                                                                    //
      for (var i = 0; i < auxCount; i++) {                                                                          // 110
        $('.input-group').attr('id', 'inputGroup' + i);                                                             // 111
                                                                                                                    //
        $('.btnOptionsSN').attr('id', i);                                                                           // 113
                                                                                                                    //
        $('.dropdown-menu').attr('id', 'dropdownMenu' + i);                                                         // 115
                                                                                                                    //
        $('.inputSN').attr('id', 'input' + i);                                                                      // 117
                                                                                                                    //
        $('.glyphicon-remove').attr('id', i);                                                                       // 119
                                                                                                                    //
        $('.btn-danger').attr('id', 'clearDataUser' + i);                                                           // 121
      }                                                                                                             // 122
                                                                                                                    //
      if (auxCount < 3) {                                                                                           // 124
        Session.set('modeToAdd', true);                                                                             // 125
        $('#btnNewSN').show();                                                                                      // 126
      }                                                                                                             // 127
    }                                                                                                               // 128
                                                                                                                    //
    return clickBtnDanger;                                                                                          // 73
  }(),                                                                                                              // 73
  'click #saveData': function () {                                                                                  // 129
    function clickSaveData() {                                                                                      // 129
      //DE ESTA MANERA OBTENEMOS TODOS LOS BLOQUES QUE HEMOS AÑADIDO DINÁMICAMENTE                                  //
      //HAY QUE OBTENER TODOS LOS VALORES SELECCIONADOS EN CADA DROPDOWN Y EL CONTENIDO DE SUS RESPECTIVOS INPUT    //
      //TODO                                                                                                        //
      var valuesInput = [];                                                                                         // 133
      var valuesButton = [];                                                                                        // 134
      var foundInputNewSN = false;                                                                                  // 135
                                                                                                                    //
      //PARA CADA CASO HAY QUE COMPROBAR QUE LOS INPUT QUE TIENEN, ESTAN RELLENADOS. EN EL CASO DE LAS REDES QUE    //
      //YA EXISTEN EN MNONGODB, SE COGERÁ SU PLACEHOLDER.                                                           //
      if (Session.get('modeToAdd') === true) {                                                                      // 139
        //ESTE ES EL CASO QUE SE DA CUANDO SE HA INTRODUCIDO UNA NUEVA RED SOCIAL PARA ANIADIRLA A MONGODB          //
        //ESTE CASO SALTA CUANDO SE HA DADO AL BOTON DE addNewSN                                                    //
                                                                                                                    //
        //RECORREMOS LOS INPUT QUE VIENEN DIRECTAMENTE DE MONGODB                                                   //
        $('.inputSN').each(function () {                                                                            // 144
          if ($(this).val() === "") {                                                                               // 145
            valuesInput.push($(this).attr('placeholder'));                                                          // 146
          } else {                                                                                                  // 147
            valuesInput.push($(this).val());                                                                        // 148
          }                                                                                                         // 149
        });                                                                                                         // 150
                                                                                                                    //
        //RECORREMOS LOS INPUT CREADOS CON EL BTN addNewSN                                                          //
        $('.inputNewSN').each(function () {                                                                         // 153
          if ($(this).val() != "") {                                                                                // 154
            valuesInput.push($(this).val());                                                                        // 155
            Session.set('inputNotEmpty', true);                                                                     // 156
          } else {                                                                                                  // 157
            Session.set('inputNotEmpty', false);                                                                    // 158
          }                                                                                                         // 159
          foundInputNewSN = true;                                                                                   // 160
        });                                                                                                         // 161
                                                                                                                    //
        if (foundInputNewSN) {                                                                                      // 163
          valuesInput.splice(valuesInput.length - 1, 1);                                                            // 164
          foundInputNewSN = false;                                                                                  // 165
        }                                                                                                           // 166
      } else {                                                                                                      // 168
        //ESTE CASO SE PRODUCE CUANDO LAS REDES QUE SE MUESTRAN AL USUARIO SON TODAS YA EXISTENTES EN MONGODB       //
        //POR TANTO, SOLO RECORREMOS LOS INPUT QUE VIENEN DIRECTAMENTE DE MONGODB                                   //
        $('.inputSN').each(function () {                                                                            // 171
          if ($(this).val() === "") {                                                                               // 172
            valuesInput.push($(this).attr('placeholder'));                                                          // 173
          } else {                                                                                                  // 174
            valuesInput.push($(this).val());                                                                        // 175
          }                                                                                                         // 176
        });                                                                                                         // 177
                                                                                                                    //
        Session.set('inputNotEmpty', true);                                                                         // 179
      };                                                                                                            // 180
                                                                                                                    //
      //RECOGEMOS LOS VALORES DE LOS BOTONES DESACTIVADOS (NOMBRES REDES SOCIALES)                                  //
      $('.btnOptionsSN').each(function () {                                                                         // 183
        valuesButton.push($(this).text());                                                                          // 184
      });                                                                                                           // 185
                                                                                                                    //
      //ESTA PARTE ESTA CORRECTA                                                                                    //
      if (Session.get('inputNotEmpty')) {                                                                           // 188
        //COMPROBAMOS QUE SE HA INTRODUCIDO ALGUN VALOR O SELECCIONADO ALGUNA RED SOCIAL PARA AÑADIRLA              //
        if (valuesInput && valuesButton) {                                                                          // 190
          //AHORA OBTENEMOS EL _id DEL USUARIO Y LO AÑADIMOS AL OBJETO QUE LE VAMOS A PASAR                         //
          //A LA LLAMADA A userData.js QUE SE ENCARGARÁ DE ACTUALIZAR EL REGISTRO.                                  //
          var newData = new Object();                                                                               // 193
          newData.userId = Session.get('datauser')._id;                                                             // 194
                                                                                                                    //
          for (i = 0; i < valuesButton.length; i++) {                                                               // 196
            var valu = valuesButton[i];                                                                             // 197
            var num = valuesButton.indexOf(valu);                                                                   // 198
                                                                                                                    //
            if (num >= 0) {                                                                                         // 200
              if ("WhatsApp" === valu) {                                                                            // 201
                newData.userWhats = valuesInput[num];                                                               // 202
              } else if ("Facebook" === valu) {                                                                     // 203
                newData.userFb = valuesInput[num];                                                                  // 204
              } else if ("Instagram" === valu) {                                                                    // 205
                newData.userInsta = valuesInput[num];                                                               // 206
              }                                                                                                     // 207
            }                                                                                                       // 208
          }                                                                                                         // 209
          //POR ULTIMO, REALIZAMOS LA LLAMADA A userData.js                                                         //
          Meteor.call('updUserDataSocialNetworks', newData);                                                        // 211
        }                                                                                                           // 212
                                                                                                                    //
        //HAY QUE DECIRLE AL MODAL QUE SE CIERRE                                                                    //
        $('#dialog-NewSocialNetwork').modal('hide');                                                                // 216
      }                                                                                                             // 217
                                                                                                                    //
      //EN EL CASO DE QUE SE DE CLICK A SALVAR DATOS DESPUES DE HABER ELIMINADO UNA RED SOCIAL                      //
      //SE TENDRÁ QUE DECIR AL SISTEMA QUE CAMBIE LA OPCION DE EDITAR SN A AÑADIR SN                                //
      if (Session.get('removeDataSN')) {                                                                            // 221
        Session.set('modeToAdd', false);                                                                            // 222
        Session.set('removeDataSN', false);                                                                         // 223
      };                                                                                                            // 224
    }                                                                                                               // 225
                                                                                                                    //
    return clickSaveData;                                                                                           // 129
  }()                                                                                                               // 129
});                                                                                                                 // 8
                                                                                                                    //
Template.socialNetworkBox.helpers({                                                                                 // 228
  'modeAddNewSN': function () {                                                                                     // 229
    function modeAddNewSN() {                                                                                       // 229
      var result = new Object();                                                                                    // 230
                                                                                                                    //
      var currentDataUser = Session.get('datauser');                                                                // 232
                                                                                                                    //
      var selectOptions = ["WhatsApp", "Instagram", "Facebook"];                                                    // 234
      var numSocialNetworks = 0;                                                                                    // 235
                                                                                                                    //
      var datauserSN = [];                                                                                          // 237
                                                                                                                    //
      if (currentDataUser.userWhats) {                                                                              // 239
        var numSele = selectOptions.indexOf("WhatsApp");                                                            // 240
        selectOptions.splice(numSele, 1);                                                                           // 241
        numSocialNetworks += 1;                                                                                     // 242
        datauserSN.push(currentDataUser.userWhats);                                                                 // 243
      }                                                                                                             // 244
                                                                                                                    //
      if (currentDataUser.userFb) {                                                                                 // 246
        var numSele = selectOptions.indexOf("Facebook");                                                            // 247
        selectOptions.splice(numSele, 1);                                                                           // 248
        numSocialNetworks += 1;                                                                                     // 249
        datauserSN.push(currentDataUser.userFb);                                                                    // 250
      }                                                                                                             // 251
                                                                                                                    //
      if (currentDataUser.userInsta) {                                                                              // 253
        var numSele = selectOptions.indexOf("Instagram");                                                           // 254
        selectOptions.splice(numSele, 1);                                                                           // 255
        numSocialNetworks += 1;                                                                                     // 256
        datauserSN.push(currentDataUser.userInsta);                                                                 // 257
      }                                                                                                             // 258
                                                                                                                    //
      Session.set('getDataUserSN', datauserSN);                                                                     // 260
                                                                                                                    //
      Session.set('countSocialNetworks', numSocialNetworks);                                                        // 262
                                                                                                                    //
      Session.set('optionsAva', selectOptions);                                                                     // 264
                                                                                                                    //
      if (selectOptions.length > 0 && selectOptions.length <= 3) {                                                  // 267
        result.messageMode = "Añade tu red social a twiiterClone";                                                  // 268
        Session.set('modeToAdd', true);                                                                             // 269
      } else if (selectOptions.length === 0) {                                                                      // 270
        //POR ULTIMO VAMOS A AÑADIR LOS CAMPOS PARA PODER SER EDITADOS                                              //
        var aux = ["WhatsApp", "Facebook", "Instagram"];                                                            // 272
        var contentToAppend = [];                                                                                   // 273
        for (var i = 0; i < numSocialNetworks; i++) {                                                               // 274
          var objAux = new Object();                                                                                // 275
          objAux.id = i;                                                                                            // 276
          objAux.valueBtn = aux[i];                                                                                 // 277
          objAux.placeholder = datauserSN[i];                                                                       // 278
                                                                                                                    //
          contentToAppend.push(objAux);                                                                             // 280
        }                                                                                                           // 281
        result.messageMode = "Edita tu red social";                                                                 // 282
        Session.set('appendThis', contentToAppend);                                                                 // 283
        Session.set('modeToAdd', false);                                                                            // 284
      }                                                                                                             // 285
                                                                                                                    //
      return result;                                                                                                // 287
    }                                                                                                               // 288
                                                                                                                    //
    return modeAddNewSN;                                                                                            // 229
  }(),                                                                                                              // 229
                                                                                                                    //
  'contentToAppend': function () {                                                                                  // 290
    function contentToAppend() {                                                                                    // 290
      return Session.get('appendThis');                                                                             // 291
    }                                                                                                               // 292
                                                                                                                    //
    return contentToAppend;                                                                                         // 290
  }(),                                                                                                              // 290
                                                                                                                    //
  'userHaveSN': function () {                                                                                       // 294
    function userHaveSN() {                                                                                         // 294
      if (Session.get('optionsAva').length > 0) {                                                                   // 295
        return true;                                                                                                // 296
      } else if (Session.get('modeToAdd')) {                                                                        // 297
        return true;                                                                                                // 298
      } else {                                                                                                      // 299
        return false;                                                                                               // 300
      }                                                                                                             // 301
    }                                                                                                               // 302
                                                                                                                    //
    return userHaveSN;                                                                                              // 294
  }()                                                                                                               // 294
});                                                                                                                 // 228
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweetBox.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/tweetBox.js                                                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
//DETECTAMOS QUE SE ENCUENTRA EN EL CLIENTE EL CODIGO QUE SE VA  AEJECUTAR                                          //
if (Meteor.isClient) {                                                                                              // 2
                                                                                                                    //
	Template.tweetBox.onRendered(function () {                                                                         // 4
		Session.set('numChars', 0);                                                                                       // 5
	});                                                                                                                // 6
                                                                                                                    //
	Template.tweetBox.events({                                                                                         // 8
		'input #tweetText': function () {                                                                                 // 9
			function inputTweetText() {                                                                                      // 9
				Session.set('numChars', $('#tweetText').val().length);                                                          // 10
			}                                                                                                                // 11
                                                                                                                    //
			return inputTweetText;                                                                                           // 9
		}(),                                                                                                              // 9
		'click button': function () {                                                                                     // 12
			function clickButton() {                                                                                         // 12
				var message = $('#tweetText').val();                                                                            // 13
				var type = Session.get('commentMode');                                                                          // 14
                                                                                                                    //
				if (type) {                                                                                                     // 16
					var twiitId = Session.get('idCurrentTwiit');                                                                   // 17
					var numComment = UserUtils.findNumComment(twiitId);                                                            // 18
					numComment++;                                                                                                  // 19
				}                                                                                                               // 20
                                                                                                                    //
				$('#tweetText').val("");                                                                                        // 22
				Session.set('numChars', 0);                                                                                     // 23
                                                                                                                    //
				var tweet = new Object();                                                                                       // 25
				tweet.message = message;                                                                                        // 26
				tweet.type = type;                                                                                              // 27
                                                                                                                    //
				if (twiitId != null) {                                                                                          // 29
					tweet.twiitId = twiitId;                                                                                       // 30
					tweet.numComment = numComment;                                                                                 // 31
					tweet.typeOfNotif = "comment";                                                                                 // 32
					//recepNotif                                                                                                   //
					tweet.recepUser = UserUtils.findUserFromTwiit(twiitId);                                                        // 34
				} else {                                                                                                        // 35
					tweet.typeOfNotif = "twiit";                                                                                   // 36
					//recepNotif                                                                                                   //
					tweet.recepUser = Meteor.user().username;                                                                      // 38
				}                                                                                                               // 39
                                                                                                                    //
				tweet.actorUser = Meteor.user().username;                                                                       // 41
                                                                                                                    //
				Meteor.call('insertTweet', tweet);                                                                              // 43
			}                                                                                                                // 44
                                                                                                                    //
			return clickButton;                                                                                              // 12
		}()                                                                                                               // 12
	});                                                                                                                // 8
                                                                                                                    //
	Template.tweetBox.helpers({                                                                                        // 48
		charCount: function () {                                                                                          // 49
			function charCount() {                                                                                           // 49
				return 140 - Session.get('numChars');                                                                           // 50
			}                                                                                                                // 51
                                                                                                                    //
			return charCount;                                                                                                // 49
		}(),                                                                                                              // 49
                                                                                                                    //
		charClass: function () {                                                                                          // 53
			function charClass() {                                                                                           // 53
				if (Session.get('numChars') > 140) {                                                                            // 54
					return 'errCharCount'; // o el nombre que le disteis en el fichero css                                         // 55
				} else {                                                                                                        // 56
						return 'charCount'; //o el nombre que le disteis en el fichero css                                            // 57
					}                                                                                                              // 58
			}                                                                                                                // 59
                                                                                                                    //
			return charClass;                                                                                                // 53
		}(),                                                                                                              // 53
                                                                                                                    //
		disableButton: function () {                                                                                      // 61
			function disableButton() {                                                                                       // 61
				if (Session.get('numChars') <= 0 || Session.get('numChars') > 140 || !Meteor.user()) {                          // 62
					return 'disabled';                                                                                             // 65
				}                                                                                                               // 66
			}                                                                                                                // 67
                                                                                                                    //
			return disableButton;                                                                                            // 61
		}()                                                                                                               // 61
	});                                                                                                                // 48
}                                                                                                                   // 69
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweetFeed.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/tweetFeed.js                                                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.tweetFeed.onCreated(function () {                                                                          // 1
  this.subscribe('twitts');                                                                                         // 2
  this.subscribe('favs');                                                                                           // 3
});                                                                                                                 // 4
                                                                                                                    //
Template.tweetFeed.helpers({                                                                                        // 6
  'tweetMessage': function () {                                                                                     // 7
    function tweetMessage() {                                                                                       // 7
      var tweet = Twitts.find({}, { sort: { timestamp: -1 } });                                                     // 8
      return tweet;                                                                                                 // 9
    }                                                                                                               // 10
                                                                                                                    //
    return tweetMessage;                                                                                            // 7
  }(),                                                                                                              // 7
  'convertDateTime': function () {                                                                                  // 11
    function convertDateTime() {                                                                                    // 11
      var dateNew = new Date(this.timestamp);                                                                       // 12
      var dateCon = dateNew.toLocaleString();                                                                       // 13
      return dateCon;                                                                                               // 14
    }                                                                                                               // 15
                                                                                                                    //
    return convertDateTime;                                                                                         // 11
  }(),                                                                                                              // 11
  'numComment': function () {                                                                                       // 16
    function numComment() {                                                                                         // 16
      var num = UserUtils.findNumComment(this._id);                                                                 // 17
      if (num > 0) {                                                                                                // 18
        return true;                                                                                                // 19
      } else return false;                                                                                          // 20
    }                                                                                                               // 21
                                                                                                                    //
    return numComment;                                                                                              // 16
  }(),                                                                                                              // 16
  'idToFavBtn': function () {                                                                                       // 22
    function idToFavBtn() {                                                                                         // 22
      return this._id;                                                                                              // 23
    }                                                                                                               // 24
                                                                                                                    //
    return idToFavBtn;                                                                                              // 22
  }(),                                                                                                              // 22
  'classFav': function () {                                                                                         // 25
    function classFav() {                                                                                           // 25
      var num = UserUtils.findNumberFavPerTwiit(this._id);                                                          // 26
      if (num > 0) {                                                                                                // 27
        return "heartFav";                                                                                          // 28
      } else return "heartNoFav";                                                                                   // 29
    }                                                                                                               // 30
                                                                                                                    //
    return classFav;                                                                                                // 25
  }(),                                                                                                              // 25
  'infoNotif': function () {                                                                                        // 31
    function infoNotif() {                                                                                          // 31
      var username = Meteor.user().username;                                                                        // 32
                                                                                                                    //
      var numNotif = UserUtils.findNumberNotif(username);                                                           // 34
      //PRIMERO TENEMOS QUE COMPROBAR SI HAY NOTIFICACIONES                                                         //
      if (numNotif === 1) {                                                                                         // 36
        //BUSCAMOS LAS NOTIFICACIONES DISPONIBLES                                                                   //
        var notif = UserUtils.findOneNotification(username);                                                        // 38
                                                                                                                    //
        UserUtils.createNotifToBrowser(notif.typeOfNotif, notif.actorNotif);                                        // 40
      } else if (numNotif > 1) {                                                                                    // 41
        UserUtils.createNotifToBrowser("moreNotif", username);                                                      // 42
      }                                                                                                             // 43
    }                                                                                                               // 44
                                                                                                                    //
    return infoNotif;                                                                                               // 31
  }()                                                                                                               // 31
});                                                                                                                 // 6
                                                                                                                    //
Template.tweetFeed.events({                                                                                         // 47
  'click #btnFav': function () {                                                                                    // 48
    function clickBtnFav() {                                                                                        // 48
      var currentUser = Session.get('currentUser');                                                                 // 49
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                             // 50
                                                                                                                    //
      console.log(this._id);                                                                                        // 52
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                         //
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                        // 54
                                                                                                                    //
      //HACEMOS UNA COMPROBACION DE QUE EL TWIIT NO TIENE NINGUN FAV O QUE SI LO TIENE                              //
      if (!userTapFav) {                                                                                            // 57
        //console.log("No tiene FAVS");                                                                             //
        UserUtils.addFavToTwiit(this._id, idUser);                                                                  // 59
        $("#" + this._id).addClass("heartFav");                                                                     // 60
        $("#" + this._id).removeClass("heartNoFav");                                                                // 61
      } else {                                                                                                      // 62
        var arrAux = userTapFav.idUserTapFav;                                                                       // 63
      }                                                                                                             // 64
                                                                                                                    //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                    //
      if (arrAux.indexOf(idUser) === -1) {                                                                          // 67
        UserUtils.addFavToTwiit(this._id, idUser);                                                                  // 68
                                                                                                                    //
        var notif = new Object();                                                                                   // 70
        notif._id = this._id;                                                                                       // 71
        notif.typeOfNotif = "fav";                                                                                  // 72
        notif.actorNotif = currentUser;                                                                             // 73
        notif.recepNotif = UserUtils.findUserFromTwiit(this._id);                                                   // 74
                                                                                                                    //
        Meteor.call('createTwiitNotification', notif);                                                              // 76
                                                                                                                    //
        $("#" + this._id).addClass("heartFav");                                                                     // 78
        $("#" + this._id).removeClass("heartNoFav");                                                                // 79
      } else {                                                                                                      // 80
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                             //
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                          //
        //LA OPERACION INVERSA                                                                                      //
        UserUtils.removeFavToTwiit(this._id, idUser);                                                               // 84
        $("#" + this._id).addClass("heartNoFav");                                                                   // 85
        $("#" + this._id).removeClass("heartFav");                                                                  // 86
      }                                                                                                             // 87
    }                                                                                                               // 88
                                                                                                                    //
    return clickBtnFav;                                                                                             // 48
  }(),                                                                                                              // 48
  'click #btnComm': function () {                                                                                   // 89
    function clickBtnComm() {                                                                                       // 89
      var numComment = UserUtils.findNumComment(this._id);                                                          // 90
      //SI EL TWIIT TIENE POR LO MENOS 1 COMENTARIO, ENTONCES REDIRIGIMOS AL USUARIO A                              //
      //LA RUTA /Comments. SI NO, SE ABRE EL MODAL Y SE PUEDE HACER EL COMENTARIO                                   //
      if (numComment === 0) {                                                                                       // 93
        $("#dialog-NewTwiit").modal();                                                                              // 94
        Session.set('commentMode', true);                                                                           // 95
        Session.set('idCurrentTwiit', this._id);                                                                    // 96
      }                                                                                                             // 97
    }                                                                                                               // 98
                                                                                                                    //
    return clickBtnComm;                                                                                            // 89
  }()                                                                                                               // 89
});                                                                                                                 // 47
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweetFeedProfile.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/tweetFeedProfile.js                                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.tweetFeedProfile.onCreated(function () {                                                                   // 1
  this.subscribe('twittsProfile');                                                                                  // 2
  this.subscribe('favs');                                                                                           // 3
});                                                                                                                 // 4
                                                                                                                    //
Template.tweetFeedProfile.helpers({                                                                                 // 6
  'tweetMessageProfile': function () {                                                                              // 7
    function tweetMessageProfile() {                                                                                // 7
      var tweet = Twitts.find({}, {                                                                                 // 8
        sort: { timestamp: -1 },                                                                                    // 9
        limit: 10                                                                                                   // 10
      });                                                                                                           // 8
      return tweet;                                                                                                 // 12
    }                                                                                                               // 13
                                                                                                                    //
    return tweetMessageProfile;                                                                                     // 7
  }(),                                                                                                              // 7
  'convertDateTime': function () {                                                                                  // 14
    function convertDateTime() {                                                                                    // 14
      var dateNew = new Date(this.timestamp);                                                                       // 15
      var dateCon = dateNew.toLocaleString();                                                                       // 16
      return dateCon;                                                                                               // 17
    }                                                                                                               // 18
                                                                                                                    //
    return convertDateTime;                                                                                         // 14
  }(),                                                                                                              // 14
  'numComment': function () {                                                                                       // 19
    function numComment() {                                                                                         // 19
      var num = UserUtils.findNumComment(this._id);                                                                 // 20
      if (num > 0) {                                                                                                // 21
        return true;                                                                                                // 22
      } else return false;                                                                                          // 23
    }                                                                                                               // 24
                                                                                                                    //
    return numComment;                                                                                              // 19
  }(),                                                                                                              // 19
  'idToFavBtn': function () {                                                                                       // 25
    function idToFavBtn() {                                                                                         // 25
      return this._id;                                                                                              // 26
    }                                                                                                               // 27
                                                                                                                    //
    return idToFavBtn;                                                                                              // 25
  }(),                                                                                                              // 25
  'classFav': function () {                                                                                         // 28
    function classFav() {                                                                                           // 28
      var num = UserUtils.findNumberFavPerTwiit(this._id);                                                          // 29
      if (num > 0) {                                                                                                // 30
        return "heartFav";                                                                                          // 31
      } else return "heartNoFav";                                                                                   // 32
    }                                                                                                               // 33
                                                                                                                    //
    return classFav;                                                                                                // 28
  }()                                                                                                               // 28
});                                                                                                                 // 6
                                                                                                                    //
Template.tweetFeedProfile.events({                                                                                  // 36
  'click #btnFav': function () {                                                                                    // 37
    function clickBtnFav() {                                                                                        // 37
      var currentUser = Session.get('currentUser');                                                                 // 38
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                             // 39
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                         //
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                        // 41
      var arrAux = userTapFav.idUserTapFav;                                                                         // 42
                                                                                                                    //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                    //
      if (arrAux.indexOf(idUser) === -1) {                                                                          // 45
        UserUtils.addFavToTwiit(this._id, idUser);                                                                  // 46
                                                                                                                    //
        var notif = new Object();                                                                                   // 48
        notif._id = this._id;                                                                                       // 49
        notif.typeOfNotif = "fav";                                                                                  // 50
        notif.actorNotif = currentUser;                                                                             // 51
        notif.recepNotif = UserUtils.findUserFromTwiit(this._id);                                                   // 52
                                                                                                                    //
        console.log(notif);                                                                                         // 54
                                                                                                                    //
        Meteor.call('createTwiitNotification', notif);                                                              // 56
                                                                                                                    //
        $("#" + this._id).addClass("heartFav");                                                                     // 58
        $("#" + this._id).removeClass("heartNoFav");                                                                // 59
      } else {                                                                                                      // 60
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                             //
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                          //
        //LA OPERACION INVERSA                                                                                      //
        UserUtils.removeFavToTwiit(this._id, idUser);                                                               // 64
        $("#" + this._id).addClass("heartNoFav");                                                                   // 65
        $("#" + this._id).removeClass("heartFav");                                                                  // 66
      }                                                                                                             // 67
    }                                                                                                               // 68
                                                                                                                    //
    return clickBtnFav;                                                                                             // 37
  }(), /*                                                                                                           // 37
       'click #btnComm' : function(){                                                                               //
       var numComment = UserUtils.findNumComment(this._id);                                                         //
       //SI EL TWIIT TIENE POR LO MENOS 1 COMENTARIO, ENTONCES REDIRIGIMOS AL USUARIO A                             //
       //LA RUTA /Comments. SI NO, SE ABRE EL MODAL Y SE PUEDE HACER EL COMENTARIO                                  //
       if(numComment === 0){                                                                                        //
           $("#dialog-NewTwiit").modal();                                                                           //
           Session.set('commentMode', true);                                                                        //
           Session.set('idCurrentTwiit', this._id);                                                                 //
       }                                                                                                            //
       }*/                                                                                                          //
  'click .userNameProfile': function () {                                                                           // 79
    function clickUserNameProfile(event) {                                                                          // 79
      window.location = "/Profile/" + event.target.id;                                                              // 80
    }                                                                                                               // 81
                                                                                                                    //
    return clickUserNameProfile;                                                                                    // 79
  }()                                                                                                               // 79
});                                                                                                                 // 36
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"twiitCommentPage.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/twiitCommentPage.js                                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.twiitCommentPage.onCreated(function () {                                                                   // 1
  this.subscribe('twittsWithComment');                                                                              // 2
  this.subscribe('favs');                                                                                           // 3
});                                                                                                                 // 4
                                                                                                                    //
Template.twiitCommentPage.helpers({                                                                                 // 6
  //DEVUELVE EL MENSAJE ORIGINAL DEL QUE SE PRODUCEN LOS COMENTARIOS                                                //
  'tweetMessage': function () {                                                                                     // 8
    function tweetMessage() {                                                                                       // 8
      //HAY QUE CONSEGUIR PASAR A ESTA VISTA EL this._id DE tweetFeed PARA PODER                                    //
      //DEVOLVER EL TWEET INICIAL Y DE AHI PASAR A MOSTRAR CON tweetThatCommentMessage                              //
      //TODOS LOS COMENTARIOS QUE TENGA!                                                                            //
      if (this.mode) {                                                                                              // 12
        id = UserUtils.findTwiitFromNotif(this._id);                                                                // 13
        return Twitts.find(id, { sort: { timestamp: -1 } });                                                        // 14
      } else {                                                                                                      // 15
        return Twitts.find(this._id, { sort: { timestamp: -1 } });                                                  // 16
      }                                                                                                             // 17
    }                                                                                                               // 18
                                                                                                                    //
    return tweetMessage;                                                                                            // 8
  }(),                                                                                                              // 8
  'tweetThatCommentMessage': function () {                                                                          // 19
    function tweetThatCommentMessage() {                                                                            // 19
      if (this.mode) {                                                                                              // 20
        id = UserUtils.findTwiitFromNotif(this._id);                                                                // 21
        return Twitts.find({ twiitIdComment: id }, { sort: { timestamp: -1 } });                                    // 22
      } else {                                                                                                      // 23
        return Twitts.find({ twiitIdComment: this._id }, { sort: { timestamp: -1 } });                              // 24
      }                                                                                                             // 25
    }                                                                                                               // 26
                                                                                                                    //
    return tweetThatCommentMessage;                                                                                 // 19
  }(),                                                                                                              // 19
  'convertDateTime': function () {                                                                                  // 27
    function convertDateTime() {                                                                                    // 27
      var dateNew = new Date(this.timestamp);                                                                       // 28
      var dateCon = dateNew.toLocaleString();                                                                       // 29
      return dateCon;                                                                                               // 30
    }                                                                                                               // 31
                                                                                                                    //
    return convertDateTime;                                                                                         // 27
  }(),                                                                                                              // 27
  'idToFavBtn': function () {                                                                                       // 32
    function idToFavBtn() {                                                                                         // 32
      return this._id;                                                                                              // 33
    }                                                                                                               // 34
                                                                                                                    //
    return idToFavBtn;                                                                                              // 32
  }(),                                                                                                              // 32
  'classFav': function () {                                                                                         // 35
    function classFav() {                                                                                           // 35
      var num = UserUtils.findNumberFavPerTwiit(this._id);                                                          // 36
      if (num > 0) {                                                                                                // 37
        return "heartFav";                                                                                          // 38
      } else return "heartNoFav";                                                                                   // 39
    }                                                                                                               // 40
                                                                                                                    //
    return classFav;                                                                                                // 35
  }()                                                                                                               // 35
});                                                                                                                 // 6
                                                                                                                    //
Template.twiitCommentPage.events({                                                                                  // 43
  'click #btnFav': function () {                                                                                    // 44
    function clickBtnFav() {                                                                                        // 44
      var currentUser = Session.get('currentUser');                                                                 // 45
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                             // 46
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                         //
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                        // 48
      var arrAux = userTapFav.idUserTapFav;                                                                         // 49
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                    //
      if (arrAux.indexOf(idUser) === -1) {                                                                          // 51
        UserUtils.addFavToTwiit(this._id, idUser);                                                                  // 52
                                                                                                                    //
        var notif = new Object();                                                                                   // 54
        notif._id = this._id;                                                                                       // 55
        notif.typeOfNotif = "fav";                                                                                  // 56
        notif.actorNotif = currentUser;                                                                             // 57
        notif.recepNotif = UserUtils.findUserFromTwiit(this._id);                                                   // 58
                                                                                                                    //
        console.log(notif);                                                                                         // 60
                                                                                                                    //
        Meteor.call('createTwiitNotification', notif);                                                              // 62
                                                                                                                    //
        $("#" + this._id).addClass("heartFav");                                                                     // 64
        $("#" + this._id).removeClass("heartNoFav");                                                                // 65
      } else {                                                                                                      // 66
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                             //
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                          //
        //LA OPERACION INVERSA                                                                                      //
        UserUtils.removeFavToTwiit(this._id, idUser);                                                               // 70
        $("#" + this._id).addClass("heartNoFav");                                                                   // 71
        $("#" + this._id).removeClass("heartFav");                                                                  // 72
      }                                                                                                             // 73
    }                                                                                                               // 74
                                                                                                                    //
    return clickBtnFav;                                                                                             // 44
  }(),                                                                                                              // 44
  'click #btnComm': function () {                                                                                   // 75
    function clickBtnComm() {                                                                                       // 75
      $("#dialog-NewTwiit").modal();                                                                                // 76
      Session.set('idCurrentTwiit', this._id);                                                                      // 77
      Session.set('commentMode', true);                                                                             // 78
    }                                                                                                               // 79
                                                                                                                    //
    return clickBtnComm;                                                                                            // 75
  }()                                                                                                               // 75
});                                                                                                                 // 43
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"twiitPage.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/twiitPage.js                                                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.twiitPage.helpers({                                                                                        // 1
  'convertDateTime': function () {                                                                                  // 2
    function convertDateTime() {                                                                                    // 2
      var dateNew = new Date(this.twiitTimeStamp);                                                                  // 3
      var dateCon = dateNew.toLocaleString();                                                                       // 4
      return dateCon;                                                                                               // 5
    }                                                                                                               // 6
                                                                                                                    //
    return convertDateTime;                                                                                         // 2
  }(),                                                                                                              // 2
                                                                                                                    //
  'tweetMessage': function () {                                                                                     // 8
    function tweetMessage() {                                                                                       // 8
      console.log(this._id);                                                                                        // 9
      var notify = Notifications.find({ _id: this._id });                                                           // 10
      return notify;                                                                                                // 11
    }                                                                                                               // 12
                                                                                                                    //
    return tweetMessage;                                                                                            // 8
  }(),                                                                                                              // 8
                                                                                                                    //
  'countNotifTwiit': function () {                                                                                  // 14
    function countNotifTwiit() {                                                                                    // 14
      var num = Notifications.find({ _id: this._id }).count();                                                      // 15
      if (num === 0) {                                                                                              // 16
        return false;                                                                                               // 17
      } else {                                                                                                      // 18
        return true;                                                                                                // 19
      }                                                                                                             // 20
    }                                                                                                               // 21
                                                                                                                    //
    return countNotifTwiit;                                                                                         // 14
  }()                                                                                                               // 14
});                                                                                                                 // 1
                                                                                                                    //
Template.twiitPage.events({                                                                                         // 24
  'click button': function () {                                                                                     // 25
    function clickButton() {                                                                                        // 25
      console.log(this._id);                                                                                        // 26
      Notifications.update(this._id, { $set: { read: true } });                                                     // 27
      console.log("Clean!");                                                                                        // 28
      window.location = "/";                                                                                        // 29
    }                                                                                                               // 30
                                                                                                                    //
    return clickButton;                                                                                             // 25
  }()                                                                                                               // 25
});                                                                                                                 // 24
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"twiitPageNew.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/twiitPageNew.js                                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.twiitPageNew.onCreated(function () {                                                                       // 1
  this.subscribe('twittsWithComment');                                                                              // 2
  this.subscribe('favs');                                                                                           // 3
  this.subscribe('allNotifications');                                                                               // 4
  arrWithId = [];                                                                                                   // 5
  Session.set('notificationsModeOn', true);                                                                         // 6
});                                                                                                                 // 7
                                                                                                                    //
Template.twiitPageNew.helpers({                                                                                     // 9
  'convertDateTime': function () {                                                                                  // 10
    function convertDateTime() {                                                                                    // 10
      var dateNew = new Date(this.twiitTimeStamp);                                                                  // 11
      var dateCon = dateNew.toLocaleString();                                                                       // 12
      return dateCon;                                                                                               // 13
    }                                                                                                               // 14
                                                                                                                    //
    return convertDateTime;                                                                                         // 10
  }(),                                                                                                              // 10
                                                                                                                    //
  'tweetMessage': function () {                                                                                     // 16
    function tweetMessage() {                                                                                       // 16
      return UserUtils.findNotifications(this.name);                                                                // 17
    }                                                                                                               // 18
                                                                                                                    //
    return tweetMessage;                                                                                            // 16
  }(),                                                                                                              // 16
                                                                                                                    //
  'countNotifTwiit': function () {                                                                                  // 20
    function countNotifTwiit() {                                                                                    // 20
      var numNotif = UserUtils.findNumberNotif(this.name);                                                          // 21
      if (numNotif === 0) {                                                                                         // 22
        return false;                                                                                               // 23
      } else {                                                                                                      // 24
        return true;                                                                                                // 25
      }                                                                                                             // 26
    }                                                                                                               // 27
                                                                                                                    //
    return countNotifTwiit;                                                                                         // 20
  }(),                                                                                                              // 20
                                                                                                                    //
  'saveIdInArr': function () {                                                                                      // 29
    function saveIdInArr() {                                                                                        // 29
      arrWithId.push(this._id);                                                                                     // 30
    }                                                                                                               // 31
                                                                                                                    //
    return saveIdInArr;                                                                                             // 29
  }(),                                                                                                              // 29
                                                                                                                    //
  'numFavPerTwiit': function () {                                                                                   // 33
    function numFavPerTwiit() {                                                                                     // 33
      return UserUtils.findNumberFavPerTwiit(this.twiitId);                                                         // 34
    }                                                                                                               // 35
                                                                                                                    //
    return numFavPerTwiit;                                                                                          // 33
  }(),                                                                                                              // 33
  'findNumComment': function () {                                                                                   // 36
    function findNumComment() {                                                                                     // 36
      //AQUI this._id ES EL _ID DE LA COLLECTION NOTIFICATIONS                                                      //
      //POR LO QUE HABRA QUE SACAR EL CAMPO twiitId                                                                 //
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                         // 39
                                                                                                                    //
      var num = UserUtils.findNumComment(twiitId);                                                                  // 41
      if (num > 0) {                                                                                                // 42
        return true;                                                                                                // 43
      } else return false;                                                                                          // 44
    }                                                                                                               // 45
                                                                                                                    //
    return findNumComment;                                                                                          // 36
  }(),                                                                                                              // 36
  'numComment': function () {                                                                                       // 46
    function numComment() {                                                                                         // 46
      var num = UserUtils.findNumComment(UserUtils.findTwiitFromNotif(this._id));                                   // 47
      return num;                                                                                                   // 48
    }                                                                                                               // 49
                                                                                                                    //
    return numComment;                                                                                              // 46
  }(),                                                                                                              // 46
  'idToFavBtn': function () {                                                                                       // 50
    function idToFavBtn() {                                                                                         // 50
      return this._id;                                                                                              // 51
    }                                                                                                               // 52
                                                                                                                    //
    return idToFavBtn;                                                                                              // 50
  }(),                                                                                                              // 50
  'classFav': function () {                                                                                         // 53
    function classFav() {                                                                                           // 53
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                         // 54
      var num = UserUtils.findNumberFavPerTwiit(twiitId);                                                           // 55
      if (num > 0) {                                                                                                // 56
        return "heartFav";                                                                                          // 57
      } else return "heartNoFav";                                                                                   // 58
    }                                                                                                               // 59
                                                                                                                    //
    return classFav;                                                                                                // 53
  }(),                                                                                                              // 53
  'numFavorite': function () {                                                                                      // 60
    function numFavorite() {                                                                                        // 60
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                         // 61
      var num = UserUtils.findNumberFavPerTwiit(twiitId);                                                           // 62
      if (num > 0) {                                                                                                // 63
        return true;                                                                                                // 64
      } else return false;                                                                                          // 65
    }                                                                                                               // 66
                                                                                                                    //
    return numFavorite;                                                                                             // 60
  }(),                                                                                                              // 60
  'numFav': function () {                                                                                           // 67
    function numFav() {                                                                                             // 67
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                         // 68
      var num = UserUtils.findNumberFavPerTwiit(twiitId);                                                           // 69
      return num;                                                                                                   // 70
    }                                                                                                               // 71
                                                                                                                    //
    return numFav;                                                                                                  // 67
  }()                                                                                                               // 67
});                                                                                                                 // 9
                                                                                                                    //
Template.twiitPageNew.events({                                                                                      // 74
  'click #btnDismissNotif': function () {                                                                           // 75
    function clickBtnDismissNotif() {                                                                               // 75
      console.log(arrWithId);                                                                                       // 76
      for (var aux in meteorBabelHelpers.sanitizeForInObject(arrWithId)) {                                          // 77
        var id = arrWithId[aux];                                                                                    // 78
        Notifications.update(id, { $set: { read: true } });                                                         // 79
      }                                                                                                             // 80
      window.location = "/";                                                                                        // 81
    }                                                                                                               // 82
                                                                                                                    //
    return clickBtnDismissNotif;                                                                                    // 75
  }(),                                                                                                              // 75
  'click #btnFav': function () {                                                                                    // 83
    function clickBtnFav() {                                                                                        // 83
      var currentUser = Session.get('currentUser');                                                                 // 84
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                             // 85
                                                                                                                    //
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                         //
      var idAux = UserUtils.findTwiitFromNotif(this._id);                                                           // 88
      var userTapFav = UserUtils.findFavsForTwiit(idAux);                                                           // 89
      var arrAux = userTapFav.idUserTapFav;                                                                         // 90
                                                                                                                    //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                    //
      if (arrAux.indexOf(idUser) === -1) {                                                                          // 93
        UserUtils.addFavToTwiit(idAux, idUser);                                                                     // 94
                                                                                                                    //
        var notif = new Object();                                                                                   // 96
        notif._id = idAux;                                                                                          // 97
        notif.typeOfNotif = "fav";                                                                                  // 98
        notif.actorNotif = currentUser;                                                                             // 99
        notif.recepNotif = UserUtils.findUserFromTwiit(idAux);                                                      // 100
                                                                                                                    //
        console.log(notif);                                                                                         // 102
                                                                                                                    //
        Meteor.call('createTwiitNotification', notif);                                                              // 104
                                                                                                                    //
        $("#" + this._id).addClass("heartFav");                                                                     // 106
        $("#" + this._id).removeClass("heartNoFav");                                                                // 107
      } else {                                                                                                      // 108
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                             //
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                          //
        //LA OPERACION INVERSA                                                                                      //
        UserUtils.removeFavToTwiit(idAux, idUser);                                                                  // 112
        $("#" + this._id).addClass("heartNoFav");                                                                   // 113
        $("#" + this._id).removeClass("heartFav");                                                                  // 114
      }                                                                                                             // 115
    }                                                                                                               // 116
                                                                                                                    //
    return clickBtnFav;                                                                                             // 83
  }(),                                                                                                              // 83
  'click #btnComm': function () {                                                                                   // 117
    function clickBtnComm() {                                                                                       // 117
      var numComment = UserUtils.findNumComment(UserUtils.findTwiitFromNotif(this._id));                            // 118
      //SI EL TWIIT TIENE POR LO MENOS 1 COMENTARIO, ENTONCES REDIRIGIMOS AL USUARIO A                              //
      //LA RUTA /Comments. SI NO, SE ABRE EL MODAL Y SE PUEDE HACER EL COMENTARIO                                   //
      if (numComment === 0) {                                                                                       // 121
        $("#dialog-NewTwiit").modal();                                                                              // 122
        Session.set('commentMode', true);                                                                           // 123
        Session.set('idCurrentTwiit', UserUtils.findTwiitFromNotif(this._id));                                      // 124
      }                                                                                                             // 125
    }                                                                                                               // 126
                                                                                                                    //
    return clickBtnComm;                                                                                            // 117
  }()                                                                                                               // 117
});                                                                                                                 // 74
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userManagement.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/userManagement.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.userManagement.events({                                                                                    // 1
  'click #signup': function () {                                                                                    // 2
    function clickSignup() {                                                                                        // 2
      var user = {                                                                                                  // 3
        username: $('#signup-nameProfile').val(),                                                                   // 4
        password: $('#signup-password').val(),                                                                      // 5
        profile: {                                                                                                  // 6
          fullname: $('#signup-username').val()                                                                     // 7
        }                                                                                                           // 6
      };                                                                                                            // 3
                                                                                                                    //
      Accounts.createUser(user, function (error) {                                                                  // 11
        if (error) alert(error);                                                                                    // 12
      });                                                                                                           // 13
                                                                                                                    //
      //Creamos el nuevo usuario en DataUser                                                                        //
      var userData = new Object();                                                                                  // 16
      userData.userName = user.profile.fullname;                                                                    // 17
      userData.userNameProfile = user.username;                                                                     // 18
      userData.userImg = "";                                                                                        // 19
      userData.userDescription = "";                                                                                // 20
                                                                                                                    //
      Meteor.call('insertDataUser', userData);                                                                      // 22
    }                                                                                                               // 23
                                                                                                                    //
    return clickSignup;                                                                                             // 2
  }(),                                                                                                              // 2
                                                                                                                    //
  'click #login': function () {                                                                                     // 25
    function clickLogin() {                                                                                         // 25
      var username = $('#login-nameProfile').val();                                                                 // 26
      var password = $('#login-password').val();                                                                    // 27
                                                                                                                    //
      Meteor.loginWithPassword(username, password, function (error) {                                               // 29
        if (error) alert(error);                                                                                    // 30
      });                                                                                                           // 31
      loggingIn = true;                                                                                             // 32
    }                                                                                                               // 33
                                                                                                                    //
    return clickLogin;                                                                                              // 25
  }(),                                                                                                              // 25
                                                                                                                    //
  'click #recommendationsBtn': function () {                                                                        // 35
    function clickRecommendationsBtn() {                                                                            // 35
      Session.set('recommendations', true);                                                                         // 36
    }                                                                                                               // 37
                                                                                                                    //
    return clickRecommendationsBtn;                                                                                 // 35
  }()                                                                                                               // 35
});                                                                                                                 // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userProfile.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/partialTemplates/userProfile.js                                                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.userProfile.onCreated(function () {                                                                        // 1
  currentUserName = this.data.name;                                                                                 // 2
});                                                                                                                 // 3
                                                                                                                    //
Template.userProfile.events({                                                                                       // 5
  'click #logout': function () {                                                                                    // 6
    function clickLogout() {                                                                                        // 6
      Meteor.logout();                                                                                              // 7
      window.location = "/";                                                                                        // 8
    }                                                                                                               // 9
                                                                                                                    //
    return clickLogout;                                                                                             // 6
  }(),                                                                                                              // 6
  'click #editProfile': function () {                                                                               // 10
    function clickEditProfile() {                                                                                   // 10
      window.location = "/editProfile/" + currentUserName;                                                          // 11
    }                                                                                                               // 12
                                                                                                                    //
    return clickEditProfile;                                                                                        // 10
  }(),                                                                                                              // 10
  'click .optionsUserProfile': function () {                                                                        // 13
    function clickOptionsUserProfile(event) {                                                                       // 13
      //PRIMERO COGEMOS EL NOMBRE DE LA RED SOCIAL DE LA QUE VAMOS A MOSTRAR LA INFORMACION                         //
      Session.set("SocialNetworkToShow", event.target.id);                                                          // 15
      //A CONTINUACION SE ABRIRA EL MODAL CON LA INFORMACION DE LA RED SOCIAL                                       //
    }                                                                                                               // 17
                                                                                                                    //
    return clickOptionsUserProfile;                                                                                 // 13
  }()                                                                                                               // 13
});                                                                                                                 // 5
                                                                                                                    //
Template.userProfile.helpers({                                                                                      // 20
  'dataUserFound': function () {                                                                                    // 21
    function dataUserFound() {                                                                                      // 21
      Meteor.call('findUserData', currentUserName, function (err, res) {                                            // 22
        Session.set('dataUser', res);                                                                               // 23
      });                                                                                                           // 24
                                                                                                                    //
      dataUser = Session.get('dataUser');                                                                           // 26
      return dataUser;                                                                                              // 27
    }                                                                                                               // 28
                                                                                                                    //
    return dataUserFound;                                                                                           // 21
  }(),                                                                                                              // 21
  'userImgFound': function () {                                                                                     // 29
    function userImgFound() {                                                                                       // 29
      if (dataUser.userImg) {                                                                                       // 30
        Meteor.call('findUserImg', dataUser.userImg, function (err, res) {                                          // 31
          $('#imgCurrentUser').attr("src", res);                                                                    // 32
        });                                                                                                         // 33
      } else {                                                                                                      // 34
        console.log("Imagen test");                                                                                 // 35
        $('#imgCurrentUser').attr("src", "/profileImgTest.png");                                                    // 36
      }                                                                                                             // 37
    }                                                                                                               // 38
                                                                                                                    //
    return userImgFound;                                                                                            // 29
  }(),                                                                                                              // 29
  'tweets': function () {                                                                                           // 39
    function tweets(username) {                                                                                     // 39
      Meteor.call('tweetsPublish', username, function (err, res) {                                                  // 40
        Session.set('numTweets', res);                                                                              // 41
      });                                                                                                           // 42
      return Session.get('numTweets');                                                                              // 43
    }                                                                                                               // 44
                                                                                                                    //
    return tweets;                                                                                                  // 39
  }(),                                                                                                              // 39
  'following': function () {                                                                                        // 45
    function following() {                                                                                          // 45
      Meteor.call('usersFollowings', function (err, res) {                                                          // 46
        Session.set('numFollowings', res);                                                                          // 47
      });                                                                                                           // 48
      return Session.get('numFollowings');                                                                          // 49
    }                                                                                                               // 50
                                                                                                                    //
    return following;                                                                                               // 45
  }(),                                                                                                              // 45
  'followers': function () {                                                                                        // 51
    function followers() {                                                                                          // 51
      Meteor.call('usersFollowers', function (err, res) {                                                           // 52
        Session.set('numFollowers', res);                                                                           // 53
      });                                                                                                           // 54
      return Session.get('numFollowers');                                                                           // 55
    }                                                                                                               // 56
                                                                                                                    //
    return followers;                                                                                               // 51
  }(),                                                                                                              // 51
  'existsSocialNetwork': function () {                                                                              // 57
    function existsSocialNetwork() {                                                                                // 57
                                                                                                                    //
      var btnSocial = [];                                                                                           // 59
                                                                                                                    //
      if (dataUser.userFb) {                                                                                        // 61
        var newData = new Object();                                                                                 // 62
        newData.color = "primary";                                                                                  // 63
        newData['class'] = "fa fa-facebook";                                                                        // 64
        newData.id = "Facebook";                                                                                    // 65
        btnSocial.push(newData);                                                                                    // 66
      }                                                                                                             // 67
                                                                                                                    //
      if (dataUser.userInsta) {                                                                                     // 69
        var newData = new Object();                                                                                 // 70
        newData.color = "warning";                                                                                  // 71
        newData['class'] = "fa fa-instagram";                                                                       // 72
        newData.id = "Instagram";                                                                                   // 73
        btnSocial.push(newData);                                                                                    // 74
      }                                                                                                             // 75
                                                                                                                    //
      if (dataUser.userWhats) {                                                                                     // 77
        var newData = new Object();                                                                                 // 78
        newData.color = "success";                                                                                  // 79
        newData['class'] = "fa fa-whatsapp";                                                                        // 80
        newData.id = "WhatsApp";                                                                                    // 81
        btnSocial.push(newData);                                                                                    // 82
      }                                                                                                             // 83
                                                                                                                    //
      return btnSocial;                                                                                             // 85
    }                                                                                                               // 86
                                                                                                                    //
    return existsSocialNetwork;                                                                                     // 57
  }(),                                                                                                              // 57
  'showProfileOtherUser': function () {                                                                             // 87
    function showProfileOtherUser() {                                                                               // 87
      return Session.get('showProfileOtherUser');                                                                   // 88
    }                                                                                                               // 89
                                                                                                                    //
    return showProfileOtherUser;                                                                                    // 87
  }()                                                                                                               // 87
});                                                                                                                 // 20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"main.html":["./template.main.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/main.html                                                                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.main.js");                                                                     // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/template.main.js                                                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.body.addContent((function() {                                                                              // 2
  var view = this;                                                                                                  // 3
  return HTML.DIV({                                                                                                 // 4
    class: "row"                                                                                                    // 5
  }, "\n\t\t", Blaze.If(function() {                                                                                // 6
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                            // 7
  }, function() {                                                                                                   // 8
    return [ "\n\t\t    ", Blaze.If(function() {                                                                    // 9
      return Spacebars.call(view.lookup("currentUser"));                                                            // 10
    }, function() {                                                                                                 // 11
      return [ "\n\t\t    \t", Spacebars.include(view.lookupTemplate("navBarTemplate")), "\n\t\t  \t" ];            // 12
    }), "\n\t  \t" ];                                                                                               // 13
  }, function() {                                                                                                   // 14
    return [ "\n\t\t    ", Spacebars.include(view.lookupTemplate("loading")), "\n\t  \t" ];                         // 15
  }), HTML.Raw("\n\t\t<!--{{> btnFloating}}-->\n\t"));                                                              // 16
}));                                                                                                                // 17
Meteor.startup(Template.body.renderToDocument);                                                                     // 18
Meteor.startup(function() {                                                                                         // 19
  var attrs = {"id":"bodyPpal"};                                                                                    // 20
  for (var prop in attrs) {                                                                                         // 21
    document.body.setAttribute(prop, attrs[prop]);                                                                  // 22
  }                                                                                                                 // 23
});                                                                                                                 // 24
                                                                                                                    // 25
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/templating","meteor/reactive-var","./main.html",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/main.js                                                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});var ReactiveVar;module.import('meteor/reactive-var',{"ReactiveVar":function(v){ReactiveVar=v}});module.import('./main.html');
                                                                                                                    // 2
                                                                                                                    //
                                                                                                                    // 4
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"lib":{"collections":{"collections.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// lib/collections/collections.js                                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Twitts = new Meteor.Collection('twitts');                                                                           // 1
Relationships = new Meteor.Collection('relationships');                                                             // 2
DataUser = new Meteor.Collection('dataUser');                                                                       // 3
Favs = new Meteor.Collection('favs');                                                                               // 4
Notifications = new Mongo.Collection('notifications');                                                              // 5
Images = new Mongo.Collection('images');                                                                            // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"router.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// lib/router.js                                                                                                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Router.configure({                                                                                                  // 1
	loadingTemplate: 'loading',                                                                                        // 2
	notFoundTemplate: 'notFound'                                                                                       // 3
});                                                                                                                 // 1
                                                                                                                    //
Router.route('/', { name: 'userManagement' });                                                                      // 6
/*SE ACCEDE POR WINDOW.LOCATION*/                                                                                   //
Router.route('/whoToFollow', { name: 'followUsers' });                                                              // 8
Router.route('/Profile/:username', {                                                                                // 9
	name: 'userProfile',                                                                                               // 10
	data: function () {                                                                                                // 11
		function data() {                                                                                                 // 11
			var user = new Object();                                                                                         // 12
			user.name = this.params.username;                                                                                // 13
                                                                                                                    //
			var currentUser = Session.get('currentUser');                                                                    // 15
                                                                                                                    //
			Meteor.call('findUserData', user.name, function (err, res) {                                                     // 17
				Session.set('dataUserShowProfile', res);                                                                        // 18
			});                                                                                                              // 19
                                                                                                                    //
			dataUserShowProfile = Session.get('dataUserShowProfile');                                                        // 21
                                                                                                                    //
			if (dataUserShowProfile) {                                                                                       // 23
				if (dataUserShowProfile.userNameProfile != currentUser) {                                                       // 24
					Session.set('showProfileOtherUser', false);                                                                    // 25
				} else {                                                                                                        // 26
					Session.set('showProfileOtherUser', true);                                                                     // 27
				}                                                                                                               // 28
			}                                                                                                                // 29
                                                                                                                    //
			return user;                                                                                                     // 31
		}                                                                                                                 // 32
                                                                                                                    //
		return data;                                                                                                      // 11
	}()                                                                                                                // 11
});                                                                                                                 // 9
Router.route('/Notifications/:userName', {                                                                          // 34
	name: 'twiitPageNew',                                                                                              // 35
	data: function () {                                                                                                // 36
		function data() {                                                                                                 // 36
			var user = new Object();                                                                                         // 37
			user.name = this.params.userName;                                                                                // 38
			return user;                                                                                                     // 39
		}                                                                                                                 // 40
                                                                                                                    //
		return data;                                                                                                      // 36
	}()                                                                                                                // 36
});                                                                                                                 // 34
//Router.route('/Comments', {name: 'twiitCommentPage'});                                                            //
/*SE ACCEDE POR PATHFOR*/                                                                                           //
Router.route('/Comments/:_id', {                                                                                    // 44
	name: 'twiitCommentPage',                                                                                          // 45
	data: function () {                                                                                                // 46
		function data() {                                                                                                 // 46
			var mode = Session.get('notificationsModeOn');                                                                   // 47
			var idTwiit = new Object();                                                                                      // 48
			idTwiit._id = this.params._id;                                                                                   // 49
                                                                                                                    //
			if (mode) {                                                                                                      // 51
				idTwiit.mode = mode;                                                                                            // 52
			}                                                                                                                // 53
                                                                                                                    //
			return idTwiit;                                                                                                  // 55
		}                                                                                                                 // 56
                                                                                                                    //
		return data;                                                                                                      // 46
	}()                                                                                                                // 46
});                                                                                                                 // 44
Router.route('/twiits/:_id', {                                                                                      // 58
	name: 'twiitPage',                                                                                                 // 59
	data: function () {                                                                                                // 60
		function data() {                                                                                                 // 60
			return this.params;                                                                                              // 61
		}                                                                                                                 // 62
                                                                                                                    //
		return data;                                                                                                      // 60
	}()                                                                                                                // 60
});                                                                                                                 // 58
                                                                                                                    //
Router.route('/editProfile/:userName', {                                                                            // 65
	name: 'editProfile',                                                                                               // 66
	data: function () {                                                                                                // 67
		function data() {                                                                                                 // 67
			return this.params.userName;                                                                                     // 68
		}                                                                                                                 // 69
                                                                                                                    //
		return data;                                                                                                      // 67
	}()                                                                                                                // 67
});                                                                                                                 // 65
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userUtils.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// lib/userUtils.js                                                                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
UserUtils = function UserUtils() {}; //no var in front                                                              // 1
                                                                                                                    //
UserUtils.findTweets = function (username) {                                                                        // 3
  var currentTweets = Twitts.find({ user: username }).fetch().map(function (data) {                                 // 4
    return data.following;                                                                                          // 5
  });                                                                                                               // 6
  console.log("Tweets: ");                                                                                          // 7
  console.log(currentTweets);                                                                                       // 8
                                                                                                                    //
  return currentTweets;                                                                                             // 10
};                                                                                                                  // 11
//SIGUIENDO                                                                                                         //
UserUtils.findFollowings = function (username) {                                                                    // 13
  var currentFollowings = Relationships.find({ follower: username }).fetch().map(function (data) {                  // 14
    return data.following;                                                                                          // 15
  });                                                                                                               // 16
  //console.log("Siguiendo: ");                                                                                     //
  //console.log(currentFollowings);                                                                                 //
                                                                                                                    //
  return currentFollowings;                                                                                         // 20
};                                                                                                                  // 21
//SEGUIDORES                                                                                                        //
UserUtils.findFollowers = function (username) {                                                                     // 23
  var currentFollowers = Relationships.find({ following: username }).fetch().map(function (data) {                  // 24
    return data.following;                                                                                          // 25
  });                                                                                                               // 26
  //console.log("Seguidores: ");                                                                                    //
  //console.log(currentFollowers);                                                                                  //
                                                                                                                    //
  return currentFollowers;                                                                                          // 30
};                                                                                                                  // 31
                                                                                                                    //
UserUtils.findNotifications = function (username) {                                                                 // 33
  return Notifications.find({ recepNotif: username, read: false, isOwnTwiit: false }, { sort: { twiitTimeStamp: -1 } });
};                                                                                                                  // 35
                                                                                                                    //
UserUtils.findOneNotification = function (username) {                                                               // 37
  return Notifications.findOne({ recepNotif: username, read: false, isOwnTwiit: false }, { sort: { twiitTimeStamp: -1 } });
};                                                                                                                  // 39
                                                                                                                    //
UserUtils.findNumberNotif = function (username) {                                                                   // 41
  return Notifications.find({ recepNotif: username, read: false, isOwnTwiit: false }).count();                      // 42
};                                                                                                                  // 43
                                                                                                                    //
UserUtils.findNumberFavPerTwiit = function (idTwiit) {                                                              // 45
  var twiitNumFav = Twitts.findOne({ _id: idTwiit }).numFav;                                                        // 46
  return twiitNumFav;                                                                                               // 47
};                                                                                                                  // 48
                                                                                                                    //
UserUtils.findFavsForTwiit = function (id) {                                                                        // 50
  return Favs.findOne({ idTwiit: id });                                                                             // 51
};                                                                                                                  // 52
                                                                                                                    //
UserUtils.addFavToTwiit = function (id, idUser) {                                                                   // 54
  var resultToUpdate = false;                                                                                       // 55
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT              //
  var favObject = UserUtils.findFavsForTwiit(id);                                                                   // 57
                                                                                                                    //
  if (!favObject) {                                                                                                 // 59
    //console.log("No tiene FAVS");                                                                                 //
                                                                                                                    //
  } else {                                                                                                          // 62
      var arrAux = favObject.idUserTapFav;                                                                          // 63
      var idFav = favObject._id;                                                                                    // 64
                                                                                                                    //
      arrAux.push(idUser);                                                                                          // 66
      var num = UserUtils.findNumberFavPerTwiit(id);                                                                // 67
      num++;                                                                                                        // 68
                                                                                                                    //
      //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                                     //
      res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                                 // 71
      resT = Twitts.update(id, { $set: { numFav: num } });                                                          // 72
                                                                                                                    //
      //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                                          //
      if (res && resT) {                                                                                            // 75
        resultToUpdate = true;                                                                                      // 76
      }                                                                                                             // 77
    }                                                                                                               // 78
                                                                                                                    //
  return resultToUpdate;                                                                                            // 80
};                                                                                                                  // 81
                                                                                                                    //
UserUtils.removeFavToTwiit = function (id, idUser) {                                                                // 83
  var resultToUpdate = false;                                                                                       // 84
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT              //
  var favObject = UserUtils.findFavsForTwiit(id);                                                                   // 86
  var arrAux = favObject.idUserTapFav;                                                                              // 87
  var idFav = favObject._id;                                                                                        // 88
                                                                                                                    //
  //HAY QUE AVERIGUAR LA POSICION DEL idUser DENTRO DEL ARRAY DE LA BBDD                                            //
  var posIdUser = arrAux.indexOf(idUser);                                                                           // 91
  //AHORA ELIMINAMOS EL ELEMENTO ASOCIADO A ESA POSICION                                                            //
  delete arrAux[posIdUser];                                                                                         // 93
                                                                                                                    //
  var num = UserUtils.findNumberFavPerTwiit(id);                                                                    // 95
  num--;                                                                                                            // 96
                                                                                                                    //
  //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                                         //
  res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                                     // 99
  resT = Twitts.update(id, { $set: { numFav: num } });                                                              // 100
                                                                                                                    //
  //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                                              //
  if (res && resT) {                                                                                                // 103
    resultToUpdate = true;                                                                                          // 104
  }                                                                                                                 // 105
                                                                                                                    //
  return resultToUpdate;                                                                                            // 107
};                                                                                                                  // 108
                                                                                                                    //
UserUtils.findTwiitFromNotif = function (id) {                                                                      // 110
  var twiitId = Notifications.findOne(id).twiitId;                                                                  // 111
  return twiitId;                                                                                                   // 112
};                                                                                                                  // 113
                                                                                                                    //
UserUtils.findNumComment = function (idTweet) {                                                                     // 115
  return Twitts.findOne({ _id: idTweet }).numComment;                                                               // 116
};                                                                                                                  // 117
                                                                                                                    //
//PARA MOSTRAR NOTIFICACIONES EN EL NAVEGADOR WEB                                                                   //
UserUtils.createNotifToBrowser = function (typeNotif, userName) {                                                   // 120
  if (Notification) {                                                                                               // 121
    if (Notification.permission !== "granted") {                                                                    // 122
      Notification.requestPermission();                                                                             // 123
    }                                                                                                               // 124
    var title = "TwiitClone";                                                                                       // 125
    var bodyNotif = "";                                                                                             // 126
                                                                                                                    //
    if (typeNotif === "fav") {                                                                                      // 128
      bodyNotif = "El usuario " + userName + " ha dado fav a un twiit tuyo";                                        // 129
    } else if (typeNotif === "comment") {                                                                           // 130
      bodyNotif = "El usuario " + userName + " ha comentado un twiit tuyo";                                         // 131
    } else if (typeNotif === "twiit") {                                                                             // 132
      bodyNotif = "El usuario " + userName + " ha publicado a un twiit nuevo";                                      // 133
    } else if (typeNotif === "moreNotif") {                                                                         // 134
      bodyNotif = "Tienes muchas Notificaciones";                                                                   // 135
    }                                                                                                               // 136
                                                                                                                    //
    var extra = { body: bodyNotif };                                                                                // 138
                                                                                                                    //
    var noti = new Notification(title, extra);                                                                      // 140
                                                                                                                    //
    noti.onclick = function () {                                                                                    // 142
      // Al hacer click                                                                                             //
      window.location = "/Notifications/" + Meteor.user().username;                                                 // 144
    };                                                                                                              // 145
                                                                                                                    //
    noti.onclose = {                                                                                                // 147
      // Al cerrar                                                                                                  //
    };                                                                                                              // 147
                                                                                                                    //
    setTimeout(function () {                                                                                        // 151
      noti.close();                                                                                                 // 151
    }, 5000);                                                                                                       // 151
  }                                                                                                                 // 152
};                                                                                                                  // 153
                                                                                                                    //
UserUtils.findUserFromTwiit = function (twiitId) {                                                                  // 155
  return Twitts.findOne({ _id: twiitId }).user;                                                                     // 156
};                                                                                                                  // 157
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".scss",".css"]});
require("./client/partialTemplates/template.editProfile.js");
require("./client/partialTemplates/template.followUsers.js");
require("./client/partialTemplates/template.loading.js");
require("./client/partialTemplates/template.navBarTemplate.js");
require("./client/partialTemplates/template.not_found.js");
require("./client/partialTemplates/template.notifications.js");
require("./client/partialTemplates/template.notificationsNew.js");
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
require("./client/template.main.js");
require("./lib/collections/collections.js");
require("./lib/router.js");
require("./lib/userUtils.js");
require("./client/partialTemplates/editProfile.js");
require("./client/partialTemplates/followUsers.js");
require("./client/partialTemplates/navBarTemplate.js");
require("./client/partialTemplates/notifications.js");
require("./client/partialTemplates/notificationsNew.js");
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
require("./client/main.js");