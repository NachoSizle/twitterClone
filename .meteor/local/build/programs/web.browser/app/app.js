var require = meteorInstall({"client":{"partialTemplates":{"template.followUsers.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/template.followUsers.js                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("followUsers");                                                                                 // 2
Template["followUsers"] = new Template("Template.followUsers", (function() {                                         // 3
  var view = this;                                                                                                   // 4
  return HTML.FORM({                                                                                                 // 5
    class: "form-inline"                                                                                             // 6
  }, HTML.Raw(' \n\t\t<input type="text" class="form-control" id="searchUser" placeholder="Search for user">\n\t\t<button type="submit" class="btn btn-info">Search</button>\n\n\t\t'), Blaze.If(function() {
    return Spacebars.call(view.lookup("foundUser"));                                                                 // 8
  }, function() {                                                                                                    // 9
    return [ "\n\t\t\t", HTML.DIV({                                                                                  // 10
      class: "found-user"                                                                                            // 11
    }, "\n\t\t\t\t", HTML.BUTTON({                                                                                   // 12
      type: "button",                                                                                                // 13
      class: "btn btn-default",                                                                                      // 14
      id: "follow"                                                                                                   // 15
    }, "Follow @", Blaze.View("lookup:foundUser.username", function() {                                              // 16
      return Spacebars.mustache(Spacebars.dot(view.lookup("foundUser"), "username"));                                // 17
    })), "\n\t\t\t"), "\n\t\t" ];                                                                                    // 18
  }), "\n  \t\n\t  \t", HTML.DIV({                                                                                   // 19
    class: "recommend-users"                                                                                         // 20
  }, " \n\t\t  ", HTML.Raw("<h5>Who to follow:</h5>"), "\n\t\t  ", Blaze.Each(function() {                           // 21
    return Spacebars.call(view.lookup("recommendedUsers"));                                                          // 22
  }, function() {                                                                                                    // 23
    return [ "\n\t\t    ", HTML.BUTTON({                                                                             // 24
      type: "button",                                                                                                // 25
      class: "btn btn-default",                                                                                      // 26
      id: "followRec"                                                                                                // 27
    }, "Follow @", Blaze.View("lookup:..username", function() {                                                      // 28
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "username"));                                        // 29
    })), "\n\t\t  " ];                                                                                               // 30
  }), "\n\t\t"), "\n\t\t\n\t");                                                                                      // 31
}));                                                                                                                 // 32
                                                                                                                     // 33
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.loading.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/template.loading.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("loading");                                                                                     // 2
Template["loading"] = new Template("Template.loading", (function() {                                                 // 3
  var view = this;                                                                                                   // 4
  return Spacebars.include(view.lookupTemplate("spinner"));                                                          // 5
}));                                                                                                                 // 6
                                                                                                                     // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.navBarTemplate.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/template.navBarTemplate.js                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("navBarTemplate");                                                                              // 2
Template["navBarTemplate"] = new Template("Template.navBarTemplate", (function() {                                   // 3
  var view = this;                                                                                                   // 4
  return HTML.NAV({                                                                                                  // 5
    class: "navbar navbar-default"                                                                                   // 6
  }, "\n\t  ", HTML.DIV({                                                                                            // 7
    class: "container-fluid"                                                                                         // 8
  }, "\n\t    ", HTML.Raw("<!-- Brand and toggle get grouped for better mobile display -->"), "\n\t    ", HTML.DIV({
    class: "navbar-header"                                                                                           // 10
  }, "\n\t      ", HTML.Raw('<button type="button" id="btnNewTweet" class="navbar-toggle collapsed" data-toggle="modal" data-target="#dialog-NewTwiit">\n\t        <span class="glyphicon glyphicon-pencil"></span>\n\t      </button>'), "\n\n\t      ", HTML.BUTTON({
    type: "button",                                                                                                  // 12
    id: "btnMenuNavBar",                                                                                             // 13
    class: "navbar-toggle collapsed",                                                                                // 14
    "data-toggle": "collapse",                                                                                       // 15
    "data-target": "#bs-example-navbar-collapse-1",                                                                  // 16
    "aria-expanded": "false"                                                                                         // 17
  }, "\n      \t\t", HTML.Raw('<span class="sr-only">Toggle navigation</span>'), "\n      \t\t", HTML.Raw('<span class="glyphicon glyphicon-tasks"></span>'), "\n      \t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("notificationCount"));                                                         // 19
  }, function() {                                                                                                    // 20
    return [ "\n      \t\t\t", Blaze.Unless(function() {                                                             // 21
      return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                                 // 22
    }, function() {                                                                                                  // 23
      return [ "\n\t\t      \t\t", HTML.SPAN({                                                                       // 24
        class: "badge badge-notify"                                                                                  // 25
      }, Blaze.View("lookup:notificationCount", function() {                                                         // 26
        return Spacebars.mustache(view.lookup("notificationCount"));                                                 // 27
      })), "\n      \t\t\t" ];                                                                                       // 28
    }), "\n\t\t    " ];                                                                                              // 29
  }), "\n    \t  "), "\n    \t  ", HTML.Raw('<img id="imgLogTwiiterClone" src="/imgLogTwiiterClone.png" class="img-responsive navbar-brand">'), "\n\t    "), "\n\n\t    ", HTML.DIV({
    class: "modal fade",                                                                                             // 31
    id: "dialog-NewTwiit"                                                                                            // 32
  }, "\n\t    \t", Spacebars.include(view.lookupTemplate("tweetBox")), "\n\t    "), "\n\n\t\t", HTML.Raw("<!--PARTE DERECHA DE LA BARRA DE NAVEGACION-->"), "\n\t    ", HTML.DIV({
    class: "collapse navbar-collapse",                                                                               // 34
    id: "bs-example-navbar-collapse-1"                                                                               // 35
  }, "\n\t      ", HTML.UL({                                                                                         // 36
    id: "dropDownMenu",                                                                                              // 37
    class: "nav navbar-nav navbar-right"                                                                             // 38
  }, "\n\t      \t\n\t      \t", HTML.LI({                                                                           // 39
    class: "dropdown"                                                                                                // 40
  }, "\n\t            ", Spacebars.include(view.lookupTemplate("notifications")), "\n\t      \t"), "\n\t      \t\n\t      \t", HTML.LI("\n\t            ", Spacebars.include(view.lookupTemplate("notificationsNew")), "\n\t      \t"), "\n\t      \t\n\t        ", HTML.Raw('<li>\n\t        \t<a href="/whoToFollow" id="recommendationsBtn">\n\t        \t\t<span class="glyphicon glyphicon-search"></span>\n\t        \t</a>\n\t        </li>'), "\n\t        ", HTML.LI("\n\t        \t", Blaze.Unless(function() {
    return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                                   // 42
  }, function() {                                                                                                    // 43
    return [ "\n\t\t\t  \t\t", HTML.A({                                                                              // 44
      id: "btnNewTwiit",                                                                                             // 45
      type: "button",                                                                                                // 46
      href: "#",                                                                                                     // 47
      class: "navbar-btn",                                                                                           // 48
      "data-toggle": "modal",                                                                                        // 49
      "data-target": "#dialog-NewTwiit"                                                                              // 50
    }, "\n\t\t\t        \t", HTML.SPAN({                                                                             // 51
      class: "glyphicon glyphicon-pencil"                                                                            // 52
    }), "\n\t\t\t      \t"), "\n\t\t\t  \t" ];                                                                       // 53
  }), "\n\t        "), "\n\t        ", HTML.Raw('<li>\n\t          <!--EN LA ETIQUETA DE SRC, SE PONDRA EL NOMBRE DEL USUARIO ACTUAL\n              <img id="imgCurrentUser" src="/{{currentUser.username}}.png" class="img-responsive">\n              A MODO DE EJEMPLO, VAMOS A UTILIZAR UNO GENERICO PARA QUE CARGUE EN CUALQUIER USUARIO-->\n              <img id="imgProfile" src="/imgProfile/squirtle.png" class="img-responsive">\n\t        </li>'), "\n\t      "), "\n\t    "), "\n\t  "), "\n\t");
}));                                                                                                                 // 55
                                                                                                                     // 56
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.not_found.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/template.not_found.js                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("notFound");                                                                                    // 2
Template["notFound"] = new Template("Template.notFound", (function() {                                               // 3
  var view = this;                                                                                                   // 4
  return HTML.Raw('<div class="not-found page jumbotron">\n    <h2>404</h2>\n    <p>Sorry, we couldn\'t find a page at this address.</p>\n  </div>');
}));                                                                                                                 // 6
                                                                                                                     // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.notifications.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/template.notifications.js                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("notifications");                                                                               // 2
Template["notifications"] = new Template("Template.notifications", (function() {                                     // 3
  var view = this;                                                                                                   // 4
  return [ HTML.A({                                                                                                  // 5
    href: "#",                                                                                                       // 6
    class: "dropdown-toggle",                                                                                        // 7
    "data-toggle": "dropdown",                                                                                       // 8
    role: "button",                                                                                                  // 9
    "aria-haspopup": "true",                                                                                         // 10
    "aria-expanded": "false"                                                                                         // 11
  }, "\n    ", HTML.Raw("<!--Notificaciones-->"), "\n    ", HTML.Raw('<span class="glyphicon glyphicon-inbox"></span>'), "\n\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("notificationCount"));                                                         // 13
  }, function() {                                                                                                    // 14
    return [ "\n        ", Blaze.If(function() {                                                                     // 15
      return Spacebars.call(view.lookup("modeDisplay"));                                                             // 16
    }, function() {                                                                                                  // 17
      return [ "\n          ", HTML.SPAN({                                                                           // 18
        class: "badge badge-inverse"                                                                                 // 19
      }, Blaze.View("lookup:notificationCount", function() {                                                         // 20
        return Spacebars.mustache(view.lookup("notificationCount"));                                                 // 21
      })), "\n        " ];                                                                                           // 22
    }, function() {                                                                                                  // 23
      return [ "\n          ", Blaze.If(function() {                                                                 // 24
        return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                               // 25
      }, function() {                                                                                                // 26
        return [ "\n            ", HTML.SPAN({                                                                       // 27
          class: "badge badge-inverse"                                                                               // 28
        }, Blaze.View("lookup:notificationCount", function() {                                                       // 29
          return Spacebars.mustache(view.lookup("notificationCount"));                                               // 30
        })), "\n          " ];                                                                                       // 31
      }), "\n        " ];                                                                                            // 32
    }), "\n      " ];                                                                                                // 33
  }), "\n  "), "\n  ", HTML.UL({                                                                                     // 34
    class: "notification dropdown-menu dropdown-menu-center"                                                         // 35
  }, "\n    ", Blaze.If(function() {                                                                                 // 36
    return Spacebars.call(view.lookup("notificationCount"));                                                         // 37
  }, function() {                                                                                                    // 38
    return [ "\n      ", Blaze.Each(function() {                                                                     // 39
      return Spacebars.call(view.lookup("notifications"));                                                           // 40
    }, function() {                                                                                                  // 41
      return [ "\n        ", Spacebars.include(view.lookupTemplate("notificationItem")), "\n      " ];               // 42
    }), "\n    " ];                                                                                                  // 43
  }, function() {                                                                                                    // 44
    return [ "\n      ", HTML.LI(HTML.SPAN("No Notifications")), "\n    " ];                                         // 45
  }), "\n  ") ];                                                                                                     // 46
}));                                                                                                                 // 47
                                                                                                                     // 48
Template.__checkName("notificationItem");                                                                            // 49
Template["notificationItem"] = new Template("Template.notificationItem", (function() {                               // 50
  var view = this;                                                                                                   // 51
  return HTML.LI("\n    ", HTML.A({                                                                                  // 52
    href: function() {                                                                                               // 53
      return Spacebars.mustache(view.lookup("pathFor"), "twiitPage");                                                // 54
    }                                                                                                                // 55
  }, "\n      ", HTML.STRONG(Blaze.View("lookup:twiitNotifUserName", function() {                                    // 56
    return Spacebars.mustache(view.lookup("twiitNotifUserName"));                                                    // 57
  })), " ha twiiteado\n    "), "\n  ");                                                                              // 58
}));                                                                                                                 // 59
                                                                                                                     // 60
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.notificationsNew.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/template.notificationsNew.js                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("notificationsNew");                                                                            // 2
Template["notificationsNew"] = new Template("Template.notificationsNew", (function() {                               // 3
  var view = this;                                                                                                   // 4
  return [ HTML.A({                                                                                                  // 5
    id: "linkToNotif",                                                                                               // 6
    class: "dropdown-toggle",                                                                                        // 7
    "data-toggle": "dropdown",                                                                                       // 8
    role: "button",                                                                                                  // 9
    "aria-haspopup": "true",                                                                                         // 10
    "aria-expanded": "false"                                                                                         // 11
  }, "\n    ", HTML.Raw("<!--Notificaciones-->"), "\n    ", HTML.Raw('<span class="glyphicon glyphicon-inbox"></span>'), "\n\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("notificationCount"));                                                         // 13
  }, function() {                                                                                                    // 14
    return [ "\n        ", Blaze.If(function() {                                                                     // 15
      return Spacebars.call(view.lookup("modeDisplay"));                                                             // 16
    }, function() {                                                                                                  // 17
      return [ "\n          ", HTML.SPAN({                                                                           // 18
        class: "badge badge-inverse"                                                                                 // 19
      }, Blaze.View("lookup:notificationCount", function() {                                                         // 20
        return Spacebars.mustache(view.lookup("notificationCount"));                                                 // 21
      })), "\n        " ];                                                                                           // 22
    }, function() {                                                                                                  // 23
      return [ "\n          ", Blaze.If(function() {                                                                 // 24
        return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                               // 25
      }, function() {                                                                                                // 26
        return [ "\n            ", HTML.SPAN({                                                                       // 27
          class: "badge badge-inverse"                                                                               // 28
        }, Blaze.View("lookup:notificationCount", function() {                                                       // 29
          return Spacebars.mustache(view.lookup("notificationCount"));                                               // 30
        })), "\n          " ];                                                                                       // 31
      }), "\n        " ];                                                                                            // 32
    }), "\n      " ];                                                                                                // 33
  }), "\n  "), "\n  ", Blaze.Unless(function() {                                                                     // 34
    return Spacebars.call(view.lookup("notificationCount"));                                                         // 35
  }, function() {                                                                                                    // 36
    return [ "\n  ", HTML.UL({                                                                                       // 37
      class: "notification dropdown-menu dropdown-menu-center"                                                       // 38
    }, "\n    ", HTML.LI(HTML.SPAN("No Notifications")), "\n  "), "\n  " ];                                          // 39
  }) ];                                                                                                              // 40
}));                                                                                                                 // 41
                                                                                                                     // 42
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.tweetBox.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/template.tweetBox.js                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("tweetBox");                                                                                    // 2
Template["tweetBox"] = new Template("Template.tweetBox", (function() {                                               // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    class: "tweetbox-container"                                                                                      // 6
  }, "\n    ", HTML.DIV({                                                                                            // 7
    class: "panel panel-default tweetbox col-md-6"                                                                   // 8
  }, "\n      ", HTML.DIV({                                                                                          // 9
    class: "panel-body"                                                                                              // 10
  }, "\n        ", HTML.Raw("<!--Caja para el texto del twitt -->"), "\n      ", HTML.TEXTAREA({                     // 11
    class: "form-control",                                                                                           // 12
    id: "tweetText",                                                                                                 // 13
    placeholder: "¿Qué te cuentas?",                                                                                 // 14
    rows: "3"                                                                                                        // 15
  }), "\n          ", HTML.Raw("<!--Contador y botón-->"), "\n        ", HTML.DIV({                                  // 16
    class: "pull-right btnGroup"                                                                                     // 17
  }, "\n          ", HTML.STRONG({                                                                                   // 18
    class: function() {                                                                                              // 19
      return Spacebars.mustache(view.lookup("charClass"));                                                           // 20
    }                                                                                                                // 21
  }, Blaze.View("lookup:charCount", function() {                                                                     // 22
    return Spacebars.mustache(view.lookup("charCount"));                                                             // 23
  })), "\n          ", Blaze.If(function() {                                                                         // 24
    return Spacebars.call(view.lookup("currentUser"));                                                               // 25
  }, function() {                                                                                                    // 26
    return [ "\n            ", HTML.BUTTON(HTML.Attrs({                                                              // 27
      class: "btn btn-info pull-right",                                                                              // 28
      type: "button",                                                                                                // 29
      "data-dismiss": "modal"                                                                                        // 30
    }, function() {                                                                                                  // 31
      return Spacebars.attrMustache(view.lookup("disableButton"));                                                   // 32
    }), "Twittear\n              ", HTML.SPAN({                                                                      // 33
      class: "glyphicon glyphicon-send"                                                                              // 34
    }), "\n            "), "\n          " ];                                                                         // 35
  }, function() {                                                                                                    // 36
    return [ "\n            ", HTML.BUTTON({                                                                         // 37
      class: "btn btn-info pull-right",                                                                              // 38
      type: "button",                                                                                                // 39
      disabled: ""                                                                                                   // 40
    }, "Por favor inicia sesión"), "\n          " ];                                                                 // 41
  }), "\n        "), "\n      "), "\n    "), "\n  ");                                                                // 42
}));                                                                                                                 // 43
                                                                                                                     // 44
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.tweetFeed.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/template.tweetFeed.js                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("tweetFeed");                                                                                   // 2
Template["tweetFeed"] = new Template("Template.tweetFeed", (function() {                                             // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    class: "tweetfeed-container"                                                                                     // 6
  }, "\n    ", HTML.DIV({                                                                                            // 7
    class: "panel panel-default tweetfeed"                                                                           // 8
  }, "\n      ", HTML.DIV({                                                                                          // 9
    class: "panel-body"                                                                                              // 10
  }, "\n        ", HTML.Raw("<!-- Texto para el contenido del Twitt -->"), "\n        ", Blaze.Each(function() {     // 11
    return Spacebars.call(view.lookup("tweetMessage"));                                                              // 12
  }, function() {                                                                                                    // 13
    return [ "\n          ", HTML.DIV({                                                                              // 14
      class: "panel panel-info"                                                                                      // 15
    }, HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n            ", HTML.DIV({                 // 16
      class: "panel-heading"                                                                                         // 17
    }, HTML.Comment("Cabecera del twiit"), "\n              ", HTML.H3({                                             // 18
      class: "panel-title"                                                                                           // 19
    }, "@", Blaze.View("lookup:..user", function() {                                                                 // 20
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                            // 21
    }), " \n                ", HTML.SPAN({                                                                           // 22
      class: "glyphicon glyphicon-triangle-right",                                                                   // 23
      "aria-hidden": "true"                                                                                          // 24
    }), "\n                ", Blaze.View("lookup:convertDateTime", function() {                                      // 25
      return Spacebars.mustache(view.lookup("convertDateTime"));                                                     // 26
    }), "\n              "), "\n            "), HTML.Comment("Cabecera del twiit"), "\n            ", HTML.DIV({     // 27
      class: "panel-body"                                                                                            // 28
    }, HTML.Comment("Contenido del twiit"), "\n              ", Blaze.View("lookup:..message", function() {          // 29
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                         // 30
    }), "\n            "), HTML.Comment("Contenido del twiit"), "\n\n            ", HTML.DIV({                       // 31
      class: "btn-group",                                                                                            // 32
      role: "group",                                                                                                 // 33
      id: "btnGroupInteractions"                                                                                     // 34
    }, "\n              ", HTML.A({                                                                                  // 35
      class: "btn btn-secondary"                                                                                     // 36
    }, "\n                ", HTML.SPAN({                                                                             // 37
      class: "glyphicon glyphicon-bullhorn"                                                                          // 38
    }), "\n              "), "\n              ", Blaze.If(function() {                                               // 39
      return Spacebars.call(view.lookup("numComment"));                                                              // 40
    }, function() {                                                                                                  // 41
      return [ "\n                ", HTML.A({                                                                        // 42
        href: function() {                                                                                           // 43
          return Spacebars.mustache(view.lookup("pathFor"), "twiitCommentPage", Spacebars.kw({                       // 44
            _id: Spacebars.dot(view.lookup("."), "_id")                                                              // 45
          }));                                                                                                       // 46
        },                                                                                                           // 47
        class: "btn"                                                                                                 // 48
      }, "\n                  ", HTML.SPAN({                                                                         // 49
        class: "glyphicon glyphicon-comment"                                                                         // 50
      }), "\n                  ", HTML.SPAN({                                                                        // 51
        class: "badge badge-numFav "                                                                                 // 52
      }, Blaze.View("lookup:..numComment", function() {                                                              // 53
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                    // 54
      })), "\n                "), "\n              " ];                                                              // 55
    }, function() {                                                                                                  // 56
      return [ "\n                ", HTML.A({                                                                        // 57
        id: "btnComm",                                                                                               // 58
        class: "btn btn-secondary"                                                                                   // 59
      }, "\n                  ", HTML.SPAN({                                                                         // 60
        class: "glyphicon glyphicon-comment"                                                                         // 61
      }), "\n              "), "\n              " ];                                                                 // 62
    }), "\n              ", Blaze.If(function() {                                                                    // 63
      return Spacebars.call(view.lookup("numFav"));                                                                  // 64
    }, function() {                                                                                                  // 65
      return [ "\n              ", HTML.A({                                                                          // 66
        id: "btnFav",                                                                                                // 67
        class: "btn btn-secondary"                                                                                   // 68
      }, "\n                ", HTML.SPAN({                                                                           // 69
        id: function() {                                                                                             // 70
          return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 71
        },                                                                                                           // 72
        class: function() {                                                                                          // 73
          return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 74
        }                                                                                                            // 75
      }), "\n                ", HTML.SPAN({                                                                          // 76
        class: "badge badge-numFav"                                                                                  // 77
      }, Blaze.View("lookup:..numFav", function() {                                                                  // 78
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                        // 79
      })), "\n              "), "\n              " ];                                                                // 80
    }, function() {                                                                                                  // 81
      return [ "\n                ", HTML.A({                                                                        // 82
        id: "btnFav",                                                                                                // 83
        class: "btn btn-secondary"                                                                                   // 84
      }, "\n                ", HTML.SPAN({                                                                           // 85
        id: function() {                                                                                             // 86
          return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 87
        },                                                                                                           // 88
        class: function() {                                                                                          // 89
          return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 90
        }                                                                                                            // 91
      }), "\n              "), "\n              " ];                                                                 // 92
    }), "\n            "), "\n          "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");                                                                               // 94
}));                                                                                                                 // 95
                                                                                                                     // 96
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.tweetFeedProfile.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/template.tweetFeedProfile.js                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("tweetFeedProfile");                                                                            // 2
Template["tweetFeedProfile"] = new Template("Template.tweetFeedProfile", (function() {                               // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    class: "tweetfeed-container"                                                                                     // 6
  }, "\n    ", HTML.DIV({                                                                                            // 7
    class: "panel panel-default tweetfeed"                                                                           // 8
  }, "\n      ", HTML.DIV({                                                                                          // 9
    class: "panel-body"                                                                                              // 10
  }, "\n        ", HTML.Raw("<!-- Texto para el contenido del Twitt -->"), "\n        ", Blaze.Each(function() {     // 11
    return Spacebars.call(view.lookup("tweetMessageProfile"));                                                       // 12
  }, function() {                                                                                                    // 13
    return [ "\n          ", HTML.DIV({                                                                              // 14
      class: "panel panel-info"                                                                                      // 15
    }, HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n            ", HTML.DIV({                 // 16
      class: "panel-heading"                                                                                         // 17
    }, HTML.Comment("Cabecera del twiit"), "\n              ", HTML.H3({                                             // 18
      class: "panel-title"                                                                                           // 19
    }, "@", Blaze.View("lookup:..user", function() {                                                                 // 20
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                            // 21
    }), " \n                ", HTML.SPAN({                                                                           // 22
      class: "glyphicon glyphicon-triangle-right",                                                                   // 23
      "aria-hidden": "true"                                                                                          // 24
    }), "\n                ", Blaze.View("lookup:convertDateTime", function() {                                      // 25
      return Spacebars.mustache(view.lookup("convertDateTime"));                                                     // 26
    }), "\n              "), "\n            "), HTML.Comment("Cabecera del twiit"), "\n            ", HTML.DIV({     // 27
      class: "panel-body"                                                                                            // 28
    }, HTML.Comment("Contenido del twiit"), "\n              ", Blaze.View("lookup:..message", function() {          // 29
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                         // 30
    }), "\n            "), HTML.Comment("Contenido del twiit"), "\n\n            ", HTML.DIV({                       // 31
      class: "btn-group",                                                                                            // 32
      role: "group",                                                                                                 // 33
      id: "btnGroupInteractions"                                                                                     // 34
    }, "\n              ", HTML.A({                                                                                  // 35
      class: "btn btn-secondary"                                                                                     // 36
    }, "\n                ", HTML.SPAN({                                                                             // 37
      class: "glyphicon glyphicon-bullhorn"                                                                          // 38
    }), "\n              "), "\n              ", Blaze.If(function() {                                               // 39
      return Spacebars.call(view.lookup("numComment"));                                                              // 40
    }, function() {                                                                                                  // 41
      return [ "\n                ", HTML.A({                                                                        // 42
        href: function() {                                                                                           // 43
          return Spacebars.mustache(view.lookup("pathFor"), "twiitCommentPage", Spacebars.kw({                       // 44
            _id: Spacebars.dot(view.lookup("."), "_id")                                                              // 45
          }));                                                                                                       // 46
        },                                                                                                           // 47
        class: "btn btn-secondary"                                                                                   // 48
      }, "\n                  ", HTML.SPAN({                                                                         // 49
        class: "glyphicon glyphicon-comment"                                                                         // 50
      }), "\n                  ", HTML.SPAN({                                                                        // 51
        class: "badge-numFav badge"                                                                                  // 52
      }, Blaze.View("lookup:..numComment", function() {                                                              // 53
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                    // 54
      })), "\n                "), "\n              " ];                                                              // 55
    }), "\n              ", Blaze.If(function() {                                                                    // 56
      return Spacebars.call(view.lookup("numFav"));                                                                  // 57
    }, function() {                                                                                                  // 58
      return [ "\n                ", HTML.A({                                                                        // 59
        id: "btnFav",                                                                                                // 60
        class: "btn btn-secondary"                                                                                   // 61
      }, "\n                  ", HTML.SPAN({                                                                         // 62
        id: function() {                                                                                             // 63
          return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 64
        },                                                                                                           // 65
        class: function() {                                                                                          // 66
          return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 67
        }                                                                                                            // 68
      }), "\n                  ", HTML.SPAN({                                                                        // 69
        class: "badge badge-numFav"                                                                                  // 70
      }, Blaze.View("lookup:..numFav", function() {                                                                  // 71
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                        // 72
      })), "\n                "), "\n              " ];                                                              // 73
    }, function() {                                                                                                  // 74
      return [ "\n                ", HTML.A({                                                                        // 75
        id: "btnFav",                                                                                                // 76
        class: "btn btn-secondary"                                                                                   // 77
      }, "\n                  ", HTML.SPAN({                                                                         // 78
        id: function() {                                                                                             // 79
          return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 80
        },                                                                                                           // 81
        class: function() {                                                                                          // 82
          return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 83
        }                                                                                                            // 84
      }), "\n                "), "\n              " ];                                                               // 85
    }), "\n            "), "\n          "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");                                                                               // 87
}));                                                                                                                 // 88
                                                                                                                     // 89
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.twiitCommentPage.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/template.twiitCommentPage.js                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("twiitCommentPage");                                                                            // 2
Template["twiitCommentPage"] = new Template("Template.twiitCommentPage", (function() {                               // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    class: "tweetfeed-container"                                                                                     // 6
  }, "\n    ", HTML.DIV({                                                                                            // 7
    class: "panel panel-default tweetfeed"                                                                           // 8
  }, "\n      ", HTML.DIV({                                                                                          // 9
    class: "panel-body"                                                                                              // 10
  }, "\n        ", HTML.Raw("<!-- Texto para el contenido del Twitt -->"), "\n        ", Blaze.Each(function() {     // 11
    return Spacebars.call(view.lookup("tweetMessage"));                                                              // 12
  }, function() {                                                                                                    // 13
    return [ "\n          ", HTML.DIV({                                                                              // 14
      class: "panel panel-info"                                                                                      // 15
    }, HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n            ", HTML.DIV({                 // 16
      class: "panel-heading"                                                                                         // 17
    }, HTML.Comment("Cabecera del twiit"), "\n              ", HTML.H3({                                             // 18
      class: "panel-title"                                                                                           // 19
    }, "@", Blaze.View("lookup:..user", function() {                                                                 // 20
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                            // 21
    }), " \n                ", HTML.SPAN({                                                                           // 22
      class: "glyphicon glyphicon-triangle-right",                                                                   // 23
      "aria-hidden": "true"                                                                                          // 24
    }), "\n                ", Blaze.View("lookup:convertDateTime", function() {                                      // 25
      return Spacebars.mustache(view.lookup("convertDateTime"));                                                     // 26
    }), "\n              "), "\n            "), HTML.Comment("Cabecera del twiit"), "\n            ", HTML.DIV({     // 27
      class: "panel-body"                                                                                            // 28
    }, HTML.Comment("Contenido del twiit"), "\n              ", Blaze.View("lookup:..message", function() {          // 29
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                         // 30
    }), "\n            "), HTML.Comment("Contenido del twiit"), "\n\n            ", HTML.DIV({                       // 31
      class: "btn-group",                                                                                            // 32
      role: "group",                                                                                                 // 33
      id: "btnGroupInteractions"                                                                                     // 34
    }, "\n              ", HTML.A({                                                                                  // 35
      class: "btn btn-secondary"                                                                                     // 36
    }, "\n                ", HTML.SPAN({                                                                             // 37
      class: "glyphicon glyphicon-bullhorn"                                                                          // 38
    }), "\n              "), "\n\n              ", HTML.A({                                                          // 39
      id: "btnComm",                                                                                                 // 40
      class: "btn btn-secondary"                                                                                     // 41
    }, "\n                ", HTML.SPAN({                                                                             // 42
      class: "glyphicon glyphicon-comment"                                                                           // 43
    }), "\n                ", HTML.SPAN({                                                                            // 44
      class: "badge-numFav badge"                                                                                    // 45
    }, Blaze.View("lookup:..numComment", function() {                                                                // 46
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                      // 47
    })), "\n              "), "\n\n              ", Blaze.If(function() {                                            // 48
      return Spacebars.call(view.lookup("numFav"));                                                                  // 49
    }, function() {                                                                                                  // 50
      return [ "\n                ", HTML.A({                                                                        // 51
        id: "btnFav",                                                                                                // 52
        class: "btn btn-secondary"                                                                                   // 53
      }, "\n                  ", HTML.SPAN({                                                                         // 54
        id: function() {                                                                                             // 55
          return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 56
        },                                                                                                           // 57
        class: function() {                                                                                          // 58
          return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 59
        }                                                                                                            // 60
      }), "\n                  ", HTML.SPAN({                                                                        // 61
        class: "badge badge-numFav"                                                                                  // 62
      }, Blaze.View("lookup:..numFav", function() {                                                                  // 63
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                        // 64
      })), "\n                "), "\n              " ];                                                              // 65
    }, function() {                                                                                                  // 66
      return [ "\n                ", HTML.A({                                                                        // 67
        id: "btnFav",                                                                                                // 68
        class: "btn btn-secondary"                                                                                   // 69
      }, "\n                  ", HTML.SPAN({                                                                         // 70
        id: function() {                                                                                             // 71
          return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 72
        },                                                                                                           // 73
        class: function() {                                                                                          // 74
          return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 75
        }                                                                                                            // 76
      }), "\n                "), "\n              " ];                                                               // 77
    }), "\n            "), "\n          "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n        " ];
  }), "\n        ", Blaze.Each(function() {                                                                          // 79
    return Spacebars.call(view.lookup("tweetThatCommentMessage"));                                                   // 80
  }, function() {                                                                                                    // 81
    return [ "\n          ", HTML.DIV({                                                                              // 82
      class: "panel panel-info"                                                                                      // 83
    }, HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n            ", HTML.DIV({                 // 84
      class: "panel-heading"                                                                                         // 85
    }, HTML.Comment("Cabecera del twiit"), "\n              ", HTML.H3({                                             // 86
      class: "panel-title"                                                                                           // 87
    }, "@", Blaze.View("lookup:..user", function() {                                                                 // 88
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                            // 89
    }), " \n                ", HTML.SPAN({                                                                           // 90
      class: "glyphicon glyphicon-triangle-right",                                                                   // 91
      "aria-hidden": "true"                                                                                          // 92
    }), "\n                ", Blaze.View("lookup:convertDateTime", function() {                                      // 93
      return Spacebars.mustache(view.lookup("convertDateTime"));                                                     // 94
    }), "\n              "), "\n            "), HTML.Comment("Cabecera del twiit"), "\n            ", HTML.DIV({     // 95
      class: "panel-body"                                                                                            // 96
    }, HTML.Comment("Contenido del twiit"), "\n              ", Blaze.View("lookup:..message", function() {          // 97
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                         // 98
    }), "\n            "), HTML.Comment("Contenido del twiit"), "\n\n            ", HTML.DIV({                       // 99
      class: "btn-group",                                                                                            // 100
      role: "group",                                                                                                 // 101
      id: "btnGroupInteractions"                                                                                     // 102
    }, "\n              ", HTML.A({                                                                                  // 103
      class: "btn btn-secondary"                                                                                     // 104
    }, "\n                ", HTML.SPAN({                                                                             // 105
      class: "glyphicon glyphicon-bullhorn"                                                                          // 106
    }), "\n              "), "\n              ", Blaze.If(function() {                                               // 107
      return Spacebars.call(view.lookup("numFav"));                                                                  // 108
    }, function() {                                                                                                  // 109
      return [ "\n              ", HTML.A({                                                                          // 110
        id: "btnFav",                                                                                                // 111
        class: "btn btn-secondary"                                                                                   // 112
      }, "\n                ", HTML.SPAN({                                                                           // 113
        id: function() {                                                                                             // 114
          return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 115
        },                                                                                                           // 116
        class: function() {                                                                                          // 117
          return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 118
        }                                                                                                            // 119
      }), "\n                ", HTML.SPAN({                                                                          // 120
        class: "badge badge-numFav"                                                                                  // 121
      }, Blaze.View("lookup:..numFav", function() {                                                                  // 122
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                        // 123
      })), "\n              "), "\n              " ];                                                                // 124
    }, function() {                                                                                                  // 125
      return [ "\n                ", HTML.A({                                                                        // 126
        id: "btnFav",                                                                                                // 127
        class: "btn btn-secondary"                                                                                   // 128
      }, "\n                ", HTML.SPAN({                                                                           // 129
        id: function() {                                                                                             // 130
          return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 131
        },                                                                                                           // 132
        class: function() {                                                                                          // 133
          return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 134
        }                                                                                                            // 135
      }), "\n              "), "\n              " ];                                                                 // 136
    }), "\n            "), "\n          "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");                                                                               // 138
}));                                                                                                                 // 139
                                                                                                                     // 140
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.twiitPage.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/template.twiitPage.js                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("twiitPage");                                                                                   // 2
Template["twiitPage"] = new Template("Template.twiitPage", (function() {                                             // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    class: "tweetfeed-container"                                                                                     // 6
  }, "\n    ", HTML.DIV({                                                                                            // 7
    class: "panel panel-default tweetfeed"                                                                           // 8
  }, "\n      ", HTML.DIV({                                                                                          // 9
    class: "panel-body"                                                                                              // 10
  }, "\n        ", HTML.Raw("<!-- Texto para el contenido del Twitt -->"), "\n        ", Blaze.If(function() {       // 11
    return Spacebars.call(view.lookup("countNotifTwiit"));                                                           // 12
  }, function() {                                                                                                    // 13
    return [ "\n          ", Blaze.Each(function() {                                                                 // 14
      return Spacebars.call(view.lookup("tweetMessage"));                                                            // 15
    }, function() {                                                                                                  // 16
      return [ "\n            ", HTML.DIV({                                                                          // 17
        class: "panel panel-info"                                                                                    // 18
      }, "\n              ", HTML.DIV({                                                                              // 19
        class: "panel-heading"                                                                                       // 20
      }, "\n                ", HTML.H3({                                                                             // 21
        class: "panel-title"                                                                                         // 22
      }, "@", Blaze.View("lookup:..twiitNotifUserName", function() {                                                 // 23
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitNotifUserName"));                            // 24
      }), " \n                  ", HTML.SPAN({                                                                       // 25
        class: "glyphicon glyphicon-triangle-right",                                                                 // 26
        "aria-hidden": "true"                                                                                        // 27
      }), "\n                   ", Blaze.View("lookup:convertDateTime", function() {                                 // 28
        return Spacebars.mustache(view.lookup("convertDateTime"));                                                   // 29
      }), "\n                 "), "\n              "), "\n              ", HTML.DIV({                                // 30
        class: "panel-body"                                                                                          // 31
      }, "\n                ", Blaze.View("lookup:..twiitMessage", function() {                                      // 32
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitMessage"));                                  // 33
      }), "\n              "), "\n            "), "\n          " ];                                                  // 34
    }), "\n           ", HTML.BUTTON({                                                                               // 35
      class: "btn btn-info pull-right",                                                                              // 36
      type: "button"                                                                                                 // 37
    }, "OK"), "\n        " ];                                                                                        // 38
  }, function() {                                                                                                    // 39
    return [ "\n          ", HTML.DIV({                                                                              // 40
      class: "panel-info"                                                                                            // 41
    }, "\n            ", HTML.P("Oooooooops"), "    \n          "), "\n        " ];                                  // 42
  }), "\n      "), "\n    "), "\n  ");                                                                               // 43
}));                                                                                                                 // 44
                                                                                                                     // 45
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.twiitPageNew.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/template.twiitPageNew.js                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("twiitPageNew");                                                                                // 2
Template["twiitPageNew"] = new Template("Template.twiitPageNew", (function() {                                       // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    class: "tweetfeed-container"                                                                                     // 6
  }, "\n    ", HTML.DIV({                                                                                            // 7
    class: "panel panel-default tweetfeed"                                                                           // 8
  }, "\n      ", HTML.DIV({                                                                                          // 9
    class: "panel-body"                                                                                              // 10
  }, "\n        ", HTML.Raw("<!-- Texto para el contenido del Twitt -->"), "\n        ", Blaze.If(function() {       // 11
    return Spacebars.call(view.lookup("countNotifTwiit"));                                                           // 12
  }, function() {                                                                                                    // 13
    return [ "\n          ", Blaze.Each(function() {                                                                 // 14
      return Spacebars.call(view.lookup("tweetMessage"));                                                            // 15
    }, function() {                                                                                                  // 16
      return [ "\n            ", Blaze.View("lookup:saveIdInArr", function() {                                       // 17
        return Spacebars.mustache(view.lookup("saveIdInArr"));                                                       // 18
      }), "\n            ", HTML.DIV({                                                                               // 19
        class: "panel panel-info"                                                                                    // 20
      }, "\n              ", HTML.DIV({                                                                              // 21
        class: "panel-heading"                                                                                       // 22
      }, "\n                ", HTML.H3({                                                                             // 23
        class: "panel-title"                                                                                         // 24
      }, "@", Blaze.View("lookup:..twiitNotifUserName", function() {                                                 // 25
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitNotifUserName"));                            // 26
      }), " \n                  ", HTML.SPAN({                                                                       // 27
        class: "glyphicon glyphicon-triangle-right",                                                                 // 28
        "aria-hidden": "true"                                                                                        // 29
      }), "\n                   ", Blaze.View("lookup:convertDateTime", function() {                                 // 30
        return Spacebars.mustache(view.lookup("convertDateTime"));                                                   // 31
      }), "\n                 "), "\n              "), "\n              ", HTML.DIV({                                // 32
        class: "panel-body"                                                                                          // 33
      }, "\n                ", Blaze.View("lookup:..twiitMessage", function() {                                      // 34
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitMessage"));                                  // 35
      }), "\n              "), "\n              ", HTML.DIV({                                                        // 36
        class: "btn-group",                                                                                          // 37
        role: "group",                                                                                               // 38
        id: "btnGroupInteractions"                                                                                   // 39
      }, "\n                ", HTML.A({                                                                              // 40
        class: "btn btn-secondary"                                                                                   // 41
      }, "\n                  ", HTML.SPAN({                                                                         // 42
        class: "glyphicon glyphicon-bullhorn"                                                                        // 43
      }), "\n                "), "\n                ", Blaze.If(function() {                                         // 44
        return Spacebars.call(view.lookup("findNumComment"));                                                        // 45
      }, function() {                                                                                                // 46
        return [ "\n                  ", HTML.A({                                                                    // 47
          href: function() {                                                                                         // 48
            return Spacebars.mustache(view.lookup("pathFor"), "twiitCommentPage", Spacebars.kw({                     // 49
              _id: Spacebars.dot(view.lookup("."), "_id")                                                            // 50
            }));                                                                                                     // 51
          },                                                                                                         // 52
          class: "btn btn-secondary"                                                                                 // 53
        }, "\n                    ", HTML.SPAN({                                                                     // 54
          class: "glyphicon glyphicon-comment"                                                                       // 55
        }), "\n                    ", HTML.SPAN({                                                                    // 56
          class: "badge-numFav badge"                                                                                // 57
        }, Blaze.View("lookup:numComment", function() {                                                              // 58
          return Spacebars.mustache(view.lookup("numComment"));                                                      // 59
        })), "\n                  "), "\n                " ];                                                        // 60
      }, function() {                                                                                                // 61
        return [ "\n                  ", HTML.A({                                                                    // 62
          id: "btnComm",                                                                                             // 63
          class: "btn btn-secondary"                                                                                 // 64
        }, "\n                  ", HTML.SPAN({                                                                       // 65
          class: "glyphicon glyphicon-comment"                                                                       // 66
        }), "\n                "), "\n                " ];                                                           // 67
      }), "\n                ", Blaze.If(function() {                                                                // 68
        return Spacebars.call(view.lookup("numFavorite"));                                                           // 69
      }, function() {                                                                                                // 70
        return [ "\n                  ", HTML.A({                                                                    // 71
          id: "btnFav",                                                                                              // 72
          class: "btn btn-secondary"                                                                                 // 73
        }, "\n                    ", HTML.SPAN({                                                                     // 74
          id: function() {                                                                                           // 75
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                    // 76
          },                                                                                                         // 77
          class: function() {                                                                                        // 78
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                    // 79
          }                                                                                                          // 80
        }), "\n                    ", HTML.SPAN({                                                                    // 81
          class: "badge badge-numFav"                                                                                // 82
        }, Blaze.View("lookup:numFav", function() {                                                                  // 83
          return Spacebars.mustache(view.lookup("numFav"));                                                          // 84
        })), "\n                  "), "\n                " ];                                                        // 85
      }, function() {                                                                                                // 86
        return [ "\n                  ", HTML.A({                                                                    // 87
          id: "btnFav",                                                                                              // 88
          class: "btn btn-secondary"                                                                                 // 89
        }, "\n                    ", HTML.SPAN({                                                                     // 90
          id: function() {                                                                                           // 91
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                    // 92
          },                                                                                                         // 93
          class: function() {                                                                                        // 94
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                    // 95
          }                                                                                                          // 96
        }), "\n                  "), "\n                " ];                                                         // 97
      }), "\n              "), "\n            "), "\n          " ];                                                  // 98
    }), "\n           ", HTML.BUTTON({                                                                               // 99
      id: "btnDismissNotif",                                                                                         // 100
      class: "btn btn-info pull-right",                                                                              // 101
      type: "button"                                                                                                 // 102
    }, "OK"), "\n        " ];                                                                                        // 103
  }, function() {                                                                                                    // 104
    return [ "\n          ", HTML.DIV({                                                                              // 105
      class: "panel-info"                                                                                            // 106
    }, "\n            ", HTML.P("Oooooooops Twiit Page New"), "    \n          "), "\n        " ];                   // 107
  }), "\n      "), "\n    "), "\n  ");                                                                               // 108
}));                                                                                                                 // 109
                                                                                                                     // 110
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.userManagement.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/template.userManagement.js                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("userManagement");                                                                              // 2
Template["userManagement"] = new Template("Template.userManagement", (function() {                                   // 3
  var view = this;                                                                                                   // 4
  return Blaze.If(function() {                                                                                       // 5
    return Spacebars.call(view.lookup("recommendations"));                                                           // 6
  }, function() {                                                                                                    // 7
    return [ "\n    ", HTML.DIV({                                                                                    // 8
      id: "divFollowUsers",                                                                                          // 9
      class: "col-md-8 col-sm-8 col-lg-2"                                                                            // 10
    }, Spacebars.include(view.lookupTemplate("followUsers"))), "\n  " ];                                             // 11
  }, function() {                                                                                                    // 12
    return [ "\n    ", Blaze.If(function() {                                                                         // 13
      return Spacebars.call(view.lookup("currentUser"));                                                             // 14
    }, function() {                                                                                                  // 15
      return [ "\n      ", HTML.Comment(' LA CAJA DE PONER UN NUEVO TWIIT SE HA IMPLEMENTADO EN UN MODAL QUE SALTA \n      CUANDO SE DA AL BOTON QUE SE ENCUENTRA EN LA BARRA DE NAVEGACIÓN\n      <div id="divTweetBox" class="col-md-8 col-sm-8">{{> tweetBox}}</div>\n      '), "\n      ", HTML.DIV({
        id: "divTweetFeed",                                                                                          // 17
        class: "col-md-8 col-sm-8"                                                                                   // 18
      }, Spacebars.include(view.lookupTemplate("tweetFeed"))), "\n    " ];                                           // 19
    }, function() {                                                                                                  // 20
      return [ "\n      ", HTML.DIV({                                                                                // 21
        class: "user-container"                                                                                      // 22
      }, "\n        ", HTML.DIV({                                                                                    // 23
        class: "panel panel-default userBox"                                                                         // 24
      }, "\n          ", HTML.DIV({                                                                                  // 25
        class: "panel-body"                                                                                          // 26
      }, "\n            ", HTML.Comment("módulo de acceso "), "\n            ", HTML.H4("¿Ya tienes una cuenta?"), "\n            ", HTML.DIV({
        class: "form-group"                                                                                          // 28
      }, "\n              ", HTML.INPUT({                                                                            // 29
        class: "form-control input-sm",                                                                              // 30
        id: "login-username",                                                                                        // 31
        placeholder: "Nombre de Usuario"                                                                             // 32
      }), "\n              ", HTML.INPUT({                                                                           // 33
        class: "form-control input-sm",                                                                              // 34
        id: "login-password",                                                                                        // 35
        placeholder: "Contraseña",                                                                                   // 36
        type: "password"                                                                                             // 37
      }), "\n            "), "\n\n            ", HTML.BUTTON({                                                       // 38
        type: "button",                                                                                              // 39
        class: "btn btn-info fullbutton login",                                                                      // 40
        id: "login"                                                                                                  // 41
      }, "Acceder"), "\n\n            ", HTML.Comment("módulo de registro"), "\n            ", HTML.H4("¿Nuevo por aquí?"), "\n            ", HTML.DIV({
        class: "form-group"                                                                                          // 43
      }, "\n              ", HTML.INPUT({                                                                            // 44
        class: "form-control input-sm",                                                                              // 45
        id: "signup-username",                                                                                       // 46
        placeholder: "Nombre de Usuario"                                                                             // 47
      }), "\n              ", HTML.INPUT({                                                                           // 48
        class: "form-control input-sm",                                                                              // 49
        id: "signup-fullname",                                                                                       // 50
        placeholder: "Apellido (Opcional)"                                                                           // 51
      }), "\n              ", HTML.INPUT({                                                                           // 52
        class: "form-control input-sm",                                                                              // 53
        id: "signup-password",                                                                                       // 54
        placeholder: "Contraseña",                                                                                   // 55
        type: "password"                                                                                             // 56
      }), "\n            "), "\n            ", HTML.BUTTON({                                                         // 57
        type: "button",                                                                                              // 58
        class: "btn btn-info fullbutton",                                                                            // 59
        id: "signup"                                                                                                 // 60
      }, "Regístrate"), " \n          "), "\n        "), "\n      "), "\n    " ];                                    // 61
    }), " \n  " ];                                                                                                   // 62
  });                                                                                                                // 63
}));                                                                                                                 // 64
                                                                                                                     // 65
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.userProfile.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/template.userProfile.js                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("userProfile");                                                                                 // 2
Template["userProfile"] = new Template("Template.userProfile", (function() {                                         // 3
  var view = this;                                                                                                   // 4
  return Blaze.If(function() {                                                                                       // 5
    return Spacebars.call(view.lookup("currentUser"));                                                               // 6
  }, function() {                                                                                                    // 7
    return [ "\n    ", HTML.DIV({                                                                                    // 8
      class: "user-container"                                                                                        // 9
    }, "\n      ", HTML.DIV({                                                                                        // 10
      class: "panel panel-default userBox"                                                                           // 11
    }, "\n        ", HTML.DIV({                                                                                      // 12
      class: "panel-body"                                                                                            // 13
    }, "\n          ", HTML.Comment("Mensaje para el usuario registrado"), "\n          ", HTML.DIV({                // 14
      class: "row"                                                                                                   // 15
    }, "\n            ", HTML.Comment("CONTENIDO DE LA PARTE IZQUIERDA DEL PERFIL DEL USUARIO"), "\n            ", HTML.DIV({
      id: "leftDivCurrentUser"                                                                                       // 17
    }, "\n              ", HTML.Comment('EN LA ETIQUETA DE SRC, SE PONDRA EL NOMBRE DEL USUARIO ACTUAL\n              <img id="imgCurrentUser" src="/{{currentUser.username}}.png" class="img-responsive">\n              A MODO DE EJEMPLO, VAMOS A UTILIZAR UNO GENERICO PARA QUE CARGUE EN CUALQUIER USUARIO'), "\n              ", HTML.IMG({
      id: "imgCurrentUser",                                                                                          // 19
      src: "/squirtle.png",                                                                                          // 20
      class: "img-responsive"                                                                                        // 21
    }), "\n            "), "\n            ", HTML.Comment("CONTENIDO DE LA PARTE DERECHA DEL PERFIL DEL USUARIO"), "\n            ", HTML.DIV({
      id: "rightDivCurrentUser"                                                                                      // 23
    }, "\n              20. Una persona que me cambió la vida y siempre me enseñará cosas! Instagram: NachoSizles Vine: NachoSizle\n            "), "\n          "), "\n          ", HTML.H3(HTML.STRONG(Blaze.View("lookup:currentUser.username", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "username"));                              // 25
    }))), "\n          ", HTML.H5("@", Blaze.View("lookup:currentUser.username", function() {                        // 26
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "username"));                              // 27
    })), "\n          ", HTML.BUTTON({                                                                               // 28
      type: "button",                                                                                                // 29
      class: "btn btn-info fullbutton",                                                                              // 30
      id: "logout"                                                                                                   // 31
    }, "Salir"), "\n          ", HTML.TABLE({                                                                        // 32
      class: "table"                                                                                                 // 33
    }, "  \n            ", HTML.TR("\n              ", HTML.TD({                                                     // 34
      class: "tableHeader"                                                                                           // 35
    }, "Twitts"), "\n              ", HTML.TD({                                                                      // 36
      class: "tableHeader"                                                                                           // 37
    }, "Siguiendo"), "\n              ", HTML.TD({                                                                   // 38
      class: "tableHeader"                                                                                           // 39
    }, "Seguidores"), "\n            "), "\n            ", HTML.TR("\n              ", HTML.TD({                     // 40
      class: "tableContent"                                                                                          // 41
    }, Blaze.View("lookup:tweets", function() {                                                                      // 42
      return Spacebars.mustache(view.lookup("tweets"), Spacebars.dot(view.lookup("currentUser"), "username"));       // 43
    })), "\n              ", HTML.TD({                                                                               // 44
      class: "tableContent"                                                                                          // 45
    }, Blaze.View("lookup:following", function() {                                                                   // 46
      return Spacebars.mustache(view.lookup("following"));                                                           // 47
    })), "\n              ", HTML.TD({                                                                               // 48
      class: "tableContent"                                                                                          // 49
    }, Blaze.View("lookup:followers", function() {                                                                   // 50
      return Spacebars.mustache(view.lookup("followers"));                                                           // 51
    })), "\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n    ", HTML.DIV({             // 52
      id: "divTweetFeed",                                                                                            // 53
      class: "col-md-8 col-sm-8"                                                                                     // 54
    }, Spacebars.include(view.lookupTemplate("tweetFeedProfile"))), "\n  " ];                                        // 55
  });                                                                                                                // 56
}));                                                                                                                 // 57
                                                                                                                     // 58
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"followUsers.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/followUsers.js                                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.followUsers.events({                                                                                        // 1
  'submit form': function () {                                                                                       // 2
    function submitForm(event) {                                                                                     // 2
                                                                                                                     //
      var searchUser = event.target.searchUser.value;                                                                // 4
      var foundUser = Meteor.call('findUser', searchUser, function (err, res) {                                      // 5
        if (res) Session.set('foundUser', res);                                                                      // 6
      });                                                                                                            // 7
      return false;                                                                                                  // 8
    }                                                                                                                // 9
                                                                                                                     //
    return submitForm;                                                                                               // 2
  }(),                                                                                                               // 2
                                                                                                                     //
  'click #follow': function () {                                                                                     // 11
    function clickFollow() {                                                                                         // 11
      Meteor.call('followUser', Session.get('foundUser').username);                                                  // 12
    }                                                                                                                // 13
                                                                                                                     //
    return clickFollow;                                                                                              // 11
  }(),                                                                                                               // 11
                                                                                                                     //
  'click #followRec': function () {                                                                                  // 15
    function clickFollowRec(event) {                                                                                 // 15
      Meteor.call('followUser', this.username);                                                                      // 16
    }                                                                                                                // 17
                                                                                                                     //
    return clickFollowRec;                                                                                           // 15
  }()                                                                                                                // 15
});                                                                                                                  // 1
                                                                                                                     //
Template.followUsers.helpers({                                                                                       // 20
  'foundUser': function () {                                                                                         // 21
    function foundUser() {                                                                                           // 21
      return Session.get('foundUser');                                                                               // 22
    }                                                                                                                // 23
                                                                                                                     //
    return foundUser;                                                                                                // 21
  }(),                                                                                                               // 21
                                                                                                                     //
  'recommendedUsers': function () {                                                                                  // 25
    function recommendedUsers() {                                                                                    // 25
      return Session.get('recommendedUsers');                                                                        // 26
    }                                                                                                                // 27
                                                                                                                     //
    return recommendedUsers;                                                                                         // 25
  }()                                                                                                                // 25
});                                                                                                                  // 20
                                                                                                                     //
Template.followUsers.onRendered(function () {                                                                        // 31
  Meteor.call('recommendUsers', function (err, res) {                                                                // 32
    Session.set('recommendedUsers', res);                                                                            // 33
  });                                                                                                                // 34
});                                                                                                                  // 35
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"navBarTemplate.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/navBarTemplate.js                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.navBarTemplate.onCreated(function () {                                                                      // 1
	Session.set('sizeDisplay', $(window).width());                                                                      // 2
	Session.set('navBarCollapse', false);                                                                               // 3
	Session.set('currentUser', Meteor.user().username);                                                                 // 4
});                                                                                                                  // 5
                                                                                                                     //
Template.navBarTemplate.events({                                                                                     // 7
	'click #recommendationsBtn': function () {                                                                          // 8
		function clickRecommendationsBtn() {                                                                               // 8
			//console.log("A quien seguir");                                                                                  //
		}                                                                                                                  // 10
                                                                                                                     //
		return clickRecommendationsBtn;                                                                                    // 8
	}(),                                                                                                                // 8
	'click #imgProfile': function () {                                                                                  // 11
		function clickImgProfile() {                                                                                       // 11
			window.location = "/myProfile";                                                                                   // 12
		}                                                                                                                  // 13
                                                                                                                     //
		return clickImgProfile;                                                                                            // 11
	}(),                                                                                                                // 11
	'click #imgLogTwiiterClone': function () {                                                                          // 14
		function clickImgLogTwiiterClone() {                                                                               // 14
			window.location = "/";                                                                                            // 15
		}                                                                                                                  // 16
                                                                                                                     //
		return clickImgLogTwiiterClone;                                                                                    // 14
	}(),                                                                                                                // 14
	'show.bs.collapse': function () {                                                                                   // 17
		function showBsCollapse() {                                                                                        // 17
			Session.set('navBarCollapse', true);                                                                              // 18
		}                                                                                                                  // 19
                                                                                                                     //
		return showBsCollapse;                                                                                             // 17
	}(),                                                                                                                // 17
	'hide.bs.collapse': function () {                                                                                   // 20
		function hideBsCollapse() {                                                                                        // 20
			Session.set('navBarCollapse', false);                                                                             // 21
		}                                                                                                                  // 22
                                                                                                                     //
		return hideBsCollapse;                                                                                             // 20
	}(),                                                                                                                // 20
	'click #btnNewTweet': function () {                                                                                 // 23
		function clickBtnNewTweet() {                                                                                      // 23
			Session.set('commentMode', false);                                                                                // 24
		}                                                                                                                  // 25
                                                                                                                     //
		return clickBtnNewTweet;                                                                                           // 23
	}(),                                                                                                                // 23
	'click #btnNewTwiit': function () {                                                                                 // 26
		function clickBtnNewTwiit() {                                                                                      // 26
			Session.set('commentMode', false);                                                                                // 27
		}                                                                                                                  // 28
                                                                                                                     //
		return clickBtnNewTwiit;                                                                                           // 26
	}()                                                                                                                 // 26
});                                                                                                                  // 7
                                                                                                                     //
Template.navBarTemplate.helpers({                                                                                    // 31
	'notificationCount': function () {                                                                                  // 32
		function notificationCount() {                                                                                     // 32
			return UserUtils.findNumberNotif(Meteor.user().username);                                                         // 33
		}                                                                                                                  // 34
                                                                                                                     //
		return notificationCount;                                                                                          // 32
	}(),                                                                                                                // 32
	'infoStateCollapseNavBar': function () {                                                                            // 35
		function infoStateCollapseNavBar() {                                                                               // 35
			return Session.get('navBarCollapse');                                                                             // 36
		}                                                                                                                  // 37
                                                                                                                     //
		return infoStateCollapseNavBar;                                                                                    // 35
	}()                                                                                                                 // 35
});                                                                                                                  // 31
//PARA CONTROLAR SI SE CAMBIA EL TAMAÑO DE PANTALLA                                                                  //
$(window).resize(function () {                                                                                       // 40
	console.log("Change");                                                                                              // 41
	Session.set('sizeDisplay', $(window).width());                                                                      // 42
});                                                                                                                  // 43
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notifications.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/notifications.js                                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.notifications.onCreated(function () {                                                                       // 1
  //console.log("Usuario: ");                                                                                        //
  //console.log(Meteor.user().username);                                                                             //
  Meteor.subscribe('notifications', Meteor.user().username);                                                         // 4
});                                                                                                                  // 5
                                                                                                                     //
Template.notifications.helpers({                                                                                     // 7
  modeDisplay: function () {                                                                                         // 8
    function modeDisplay() {                                                                                         // 8
      var size = Session.get('sizeDisplay');                                                                         // 9
      if (size > 768) {                                                                                              // 10
        return true;                                                                                                 // 11
      } else {                                                                                                       // 12
        return false;                                                                                                // 13
      }                                                                                                              // 14
    }                                                                                                                // 15
                                                                                                                     //
    return modeDisplay;                                                                                              // 8
  }(),                                                                                                               // 8
  notifications: function () {                                                                                       // 16
    function notifications() {                                                                                       // 16
      followings = UserUtils.findFollowings(Meteor.user().username);                                                 // 17
      return Notifications.find({ twiitNotifUserName: { $nin: followings }, read: false });                          // 18
    }                                                                                                                // 19
                                                                                                                     //
    return notifications;                                                                                            // 16
  }(),                                                                                                               // 16
  notificationCount: function () {                                                                                   // 20
    function notificationCount() {                                                                                   // 20
      /*                                                                                                             //
      var followings = UserUtils.findFollowings(Meteor.user().username);                                             //
      return Notifications.find({twiitNotifUserName: { $nin: followings }, read: false}).count();                    //
      */                                                                                                             //
      return UserUtils.findNumberNotif(Meteor.user().username);                                                      // 25
    }                                                                                                                // 26
                                                                                                                     //
    return notificationCount;                                                                                        // 20
  }(),                                                                                                               // 20
  'infoStateCollapseNavBar': function () {                                                                           // 27
    function infoStateCollapseNavBar() {                                                                             // 27
      return Session.get('navBarCollapse');                                                                          // 28
    }                                                                                                                // 29
                                                                                                                     //
    return infoStateCollapseNavBar;                                                                                  // 27
  }()                                                                                                                // 27
});                                                                                                                  // 7
                                                                                                                     //
/*                                                                                                                   //
Template.notificationItem.helpers({                                                                                  //
  notificationTwiitPath: function() {                                                                                //
    var path = this.twiitId;                                                                                         //
    console.log(path);                                                                                               //
    return path;                                                                                                     //
  }                                                                                                                  //
});                                                                                                                  //
                                                                                                                     //
                                                                                                                     //
Template.notificationItem.events({                                                                                   //
  'click a': function() {                                                                                            //
    Notifications.update(this._id, {$set: {read: true}});                                                            //
  }                                                                                                                  //
});                                                                                                                  //
*/                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notificationsNew.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/notificationsNew.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.notificationsNew.onCreated(function () {                                                                    // 1
  //console.log("Usuario: ");                                                                                        //
  //console.log(Meteor.user().username);                                                                             //
  Meteor.subscribe('notifications', Meteor.user().username);                                                         // 4
});                                                                                                                  // 5
                                                                                                                     //
Template.notificationsNew.helpers({                                                                                  // 7
  modeDisplay: function () {                                                                                         // 8
    function modeDisplay() {                                                                                         // 8
      var size = Session.get('sizeDisplay');                                                                         // 9
      if (size > 768) {                                                                                              // 10
        return true;                                                                                                 // 11
      } else {                                                                                                       // 12
        return false;                                                                                                // 13
      }                                                                                                              // 14
    }                                                                                                                // 15
                                                                                                                     //
    return modeDisplay;                                                                                              // 8
  }(),                                                                                                               // 8
  notifications: function () {                                                                                       // 16
    function notifications() {                                                                                       // 16
      followings = UserUtils.findFollowings(Meteor.user().username);                                                 // 17
      return Notifications.find({ twiitNotifUserName: { $nin: followings }, read: false });                          // 18
    }                                                                                                                // 19
                                                                                                                     //
    return notifications;                                                                                            // 16
  }(),                                                                                                               // 16
  notificationCount: function () {                                                                                   // 20
    function notificationCount() {                                                                                   // 20
      /*                                                                                                             //
      var followings = UserUtils.findFollowings(Meteor.user().username);                                             //
      return Notifications.find({twiitNotifUserName: { $nin: followings }, read: false}).count();                    //
      */                                                                                                             //
      numNotif = UserUtils.findNumberNotif(Meteor.user().username);                                                  // 25
      return numNotif;                                                                                               // 26
    }                                                                                                                // 27
                                                                                                                     //
    return notificationCount;                                                                                        // 20
  }(),                                                                                                               // 20
  'infoStateCollapseNavBar': function () {                                                                           // 28
    function infoStateCollapseNavBar() {                                                                             // 28
      return Session.get('navBarCollapse');                                                                          // 29
    }                                                                                                                // 30
                                                                                                                     //
    return infoStateCollapseNavBar;                                                                                  // 28
  }()                                                                                                                // 28
});                                                                                                                  // 7
                                                                                                                     //
Template.notificationsNew.events({                                                                                   // 33
  'click #linkToNotif': function () {                                                                                // 34
    function clickLinkToNotif() {                                                                                    // 34
      if (numNotif > 0) {                                                                                            // 35
        window.location = "/Notifications";                                                                          // 36
      }                                                                                                              // 37
    }                                                                                                                // 38
                                                                                                                     //
    return clickLinkToNotif;                                                                                         // 34
  }()                                                                                                                // 34
});                                                                                                                  // 33
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweetBox.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/tweetBox.js                                                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
//DETECTAMOS QUE SE ENCUENTRA EN EL CLIENTE EL CODIGO QUE SE VA  AEJECUTAR                                           //
if (Meteor.isClient) {                                                                                               // 2
                                                                                                                     //
	Template.tweetBox.onRendered(function () {                                                                          // 4
		Session.set('numChars', 0);                                                                                        // 5
	});                                                                                                                 // 6
                                                                                                                     //
	Template.tweetBox.events({                                                                                          // 8
		'input #tweetText': function () {                                                                                  // 9
			function inputTweetText() {                                                                                       // 9
				Session.set('numChars', $('#tweetText').val().length);                                                           // 10
			}                                                                                                                 // 11
                                                                                                                     //
			return inputTweetText;                                                                                            // 9
		}(),                                                                                                               // 9
		'click button': function () {                                                                                      // 12
			function clickButton() {                                                                                          // 12
				var message = $('#tweetText').val();                                                                             // 13
				var type = Session.get('commentMode');                                                                           // 14
                                                                                                                     //
				if (type) {                                                                                                      // 16
					var twiitId = Session.get('idCurrentTwiit');                                                                    // 17
					console.log(twiitId);                                                                                           // 18
					var numComment = UserUtils.findNumComment(twiitId);                                                             // 19
					numComment++;                                                                                                   // 20
				}                                                                                                                // 21
                                                                                                                     //
				$('#tweetText').val("");                                                                                         // 23
				Session.set('numChars', 0);                                                                                      // 24
                                                                                                                     //
				var tweet = new Object();                                                                                        // 26
				tweet.message = message;                                                                                         // 27
				tweet.type = type;                                                                                               // 28
				if (twiitId != null) {                                                                                           // 29
					tweet.twiitId = twiitId;                                                                                        // 30
					tweet.numComment = numComment;                                                                                  // 31
				}                                                                                                                // 32
				Meteor.call('insertTweet', tweet);                                                                               // 33
			}                                                                                                                 // 34
                                                                                                                     //
			return clickButton;                                                                                               // 12
		}()                                                                                                                // 12
	});                                                                                                                 // 8
                                                                                                                     //
	Template.tweetBox.helpers({                                                                                         // 38
		charCount: function () {                                                                                           // 39
			function charCount() {                                                                                            // 39
				return 140 - Session.get('numChars');                                                                            // 40
			}                                                                                                                 // 41
                                                                                                                     //
			return charCount;                                                                                                 // 39
		}(),                                                                                                               // 39
                                                                                                                     //
		charClass: function () {                                                                                           // 43
			function charClass() {                                                                                            // 43
				if (Session.get('numChars') > 140) {                                                                             // 44
					return 'errCharCount'; // o el nombre que le disteis en el fichero css                                          // 45
				} else {                                                                                                         // 46
						return 'charCount'; //o el nombre que le disteis en el fichero css                                             // 47
					}                                                                                                               // 48
			}                                                                                                                 // 49
                                                                                                                     //
			return charClass;                                                                                                 // 43
		}(),                                                                                                               // 43
                                                                                                                     //
		disableButton: function () {                                                                                       // 51
			function disableButton() {                                                                                        // 51
				if (Session.get('numChars') <= 0 || Session.get('numChars') > 140 || !Meteor.user()) {                           // 52
					return 'disabled';                                                                                              // 55
				}                                                                                                                // 56
			}                                                                                                                 // 57
                                                                                                                     //
			return disableButton;                                                                                             // 51
		}()                                                                                                                // 51
	});                                                                                                                 // 38
}                                                                                                                    // 59
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweetFeed.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/tweetFeed.js                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.tweetFeed.onCreated(function () {                                                                           // 1
  this.subscribe('twitts');                                                                                          // 2
  this.subscribe('favs');                                                                                            // 3
});                                                                                                                  // 4
                                                                                                                     //
Template.tweetFeed.helpers({                                                                                         // 6
  'tweetMessage': function () {                                                                                      // 7
    function tweetMessage() {                                                                                        // 7
      var tweet = Twitts.find({}, { sort: { timestamp: -1 } });                                                      // 8
      return tweet;                                                                                                  // 9
    }                                                                                                                // 10
                                                                                                                     //
    return tweetMessage;                                                                                             // 7
  }(),                                                                                                               // 7
  'convertDateTime': function () {                                                                                   // 11
    function convertDateTime() {                                                                                     // 11
      var dateNew = new Date(this.timestamp);                                                                        // 12
      var dateCon = dateNew.toLocaleString();                                                                        // 13
      return dateCon;                                                                                                // 14
    }                                                                                                                // 15
                                                                                                                     //
    return convertDateTime;                                                                                          // 11
  }(),                                                                                                               // 11
  'numComment': function () {                                                                                        // 16
    function numComment() {                                                                                          // 16
      var num = UserUtils.findNumComment(this._id);                                                                  // 17
      if (num > 0) {                                                                                                 // 18
        return true;                                                                                                 // 19
      } else return false;                                                                                           // 20
    }                                                                                                                // 21
                                                                                                                     //
    return numComment;                                                                                               // 16
  }(),                                                                                                               // 16
  'idToFavBtn': function () {                                                                                        // 22
    function idToFavBtn() {                                                                                          // 22
      return this._id;                                                                                               // 23
    }                                                                                                                // 24
                                                                                                                     //
    return idToFavBtn;                                                                                               // 22
  }(),                                                                                                               // 22
  'classFav': function () {                                                                                          // 25
    function classFav() {                                                                                            // 25
      var num = UserUtils.findNumberFavPerTwiit(this._id);                                                           // 26
      if (num > 0) {                                                                                                 // 27
        return "heartFav";                                                                                           // 28
      } else return "heartNoFav";                                                                                    // 29
    }                                                                                                                // 30
                                                                                                                     //
    return classFav;                                                                                                 // 25
  }()                                                                                                                // 25
});                                                                                                                  // 6
                                                                                                                     //
Template.tweetFeed.events({                                                                                          // 33
  'click #btnFav': function () {                                                                                     // 34
    function clickBtnFav() {                                                                                         // 34
      var currentUser = Session.get('currentUser');                                                                  // 35
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                              // 36
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                          //
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                         // 38
      var arrAux = userTapFav.idUserTapFav;                                                                          // 39
                                                                                                                     //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                     //
      if (arrAux.indexOf(idUser) === -1) {                                                                           // 42
        UserUtils.addFavToTwiit(this._id, idUser);                                                                   // 43
        $("#" + this._id).addClass("heartFav");                                                                      // 44
        $("#" + this._id).removeClass("heartNoFav");                                                                 // 45
      } else {                                                                                                       // 46
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                              //
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                           //
        //LA OPERACION INVERSA                                                                                       //
        UserUtils.removeFavToTwiit(this._id, idUser);                                                                // 50
        $("#" + this._id).addClass("heartNoFav");                                                                    // 51
        $("#" + this._id).removeClass("heartFav");                                                                   // 52
      }                                                                                                              // 53
    }                                                                                                                // 54
                                                                                                                     //
    return clickBtnFav;                                                                                              // 34
  }(),                                                                                                               // 34
  'click #btnComm': function () {                                                                                    // 55
    function clickBtnComm() {                                                                                        // 55
      var numComment = UserUtils.findNumComment(this._id);                                                           // 56
      //SI EL TWIIT TIENE POR LO MENOS 1 COMENTARIO, ENTONCES REDIRIGIMOS AL USUARIO A                               //
      //LA RUTA /Comments. SI NO, SE ABRE EL MODAL Y SE PUEDE HACER EL COMENTARIO                                    //
      if (numComment === 0) {                                                                                        // 59
        $("#dialog-NewTwiit").modal();                                                                               // 60
        Session.set('commentMode', true);                                                                            // 61
        Session.set('idCurrentTwiit', this._id);                                                                     // 62
      }                                                                                                              // 63
    }                                                                                                                // 64
                                                                                                                     //
    return clickBtnComm;                                                                                             // 55
  }()                                                                                                                // 55
                                                                                                                     //
});                                                                                                                  // 33
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweetFeedProfile.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/tweetFeedProfile.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.tweetFeedProfile.onCreated(function () {                                                                    // 1
  this.subscribe('twittsProfile');                                                                                   // 2
  this.subscribe('favs');                                                                                            // 3
});                                                                                                                  // 4
                                                                                                                     //
Template.tweetFeedProfile.helpers({                                                                                  // 6
  'tweetMessageProfile': function () {                                                                               // 7
    function tweetMessageProfile() {                                                                                 // 7
      var tweet = Twitts.find({}, {                                                                                  // 8
        sort: { timestamp: -1 },                                                                                     // 9
        limit: 10                                                                                                    // 10
      });                                                                                                            // 8
      return tweet;                                                                                                  // 12
    }                                                                                                                // 13
                                                                                                                     //
    return tweetMessageProfile;                                                                                      // 7
  }(),                                                                                                               // 7
  'convertDateTime': function () {                                                                                   // 14
    function convertDateTime() {                                                                                     // 14
      var dateNew = new Date(this.timestamp);                                                                        // 15
      var dateCon = dateNew.toLocaleString();                                                                        // 16
      return dateCon;                                                                                                // 17
    }                                                                                                                // 18
                                                                                                                     //
    return convertDateTime;                                                                                          // 14
  }(),                                                                                                               // 14
  'numComment': function () {                                                                                        // 19
    function numComment() {                                                                                          // 19
      var num = UserUtils.findNumComment(this._id);                                                                  // 20
      if (num > 0) {                                                                                                 // 21
        return true;                                                                                                 // 22
      } else return false;                                                                                           // 23
    }                                                                                                                // 24
                                                                                                                     //
    return numComment;                                                                                               // 19
  }(),                                                                                                               // 19
  'idToFavBtn': function () {                                                                                        // 25
    function idToFavBtn() {                                                                                          // 25
      return this._id;                                                                                               // 26
    }                                                                                                                // 27
                                                                                                                     //
    return idToFavBtn;                                                                                               // 25
  }(),                                                                                                               // 25
  'classFav': function () {                                                                                          // 28
    function classFav() {                                                                                            // 28
      var num = UserUtils.findNumberFavPerTwiit(this._id);                                                           // 29
      if (num > 0) {                                                                                                 // 30
        return "heartFav";                                                                                           // 31
      } else return "heartNoFav";                                                                                    // 32
    }                                                                                                                // 33
                                                                                                                     //
    return classFav;                                                                                                 // 28
  }()                                                                                                                // 28
});                                                                                                                  // 6
                                                                                                                     //
Template.tweetFeedProfile.events({                                                                                   // 36
  'click #btnFav': function () {                                                                                     // 37
    function clickBtnFav() {                                                                                         // 37
      var currentUser = Session.get('currentUser');                                                                  // 38
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                              // 39
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                          //
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                         // 41
      var arrAux = userTapFav.idUserTapFav;                                                                          // 42
                                                                                                                     //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                     //
      if (arrAux.indexOf(idUser) === -1) {                                                                           // 45
        UserUtils.addFavToTwiit(this._id, idUser);                                                                   // 46
        $("#" + this._id).addClass("heartFav");                                                                      // 47
        $("#" + this._id).removeClass("heartNoFav");                                                                 // 48
      } else {                                                                                                       // 49
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                              //
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                           //
        //LA OPERACION INVERSA                                                                                       //
        UserUtils.removeFavToTwiit(this._id, idUser);                                                                // 53
        $("#" + this._id).addClass("heartNoFav");                                                                    // 54
        $("#" + this._id).removeClass("heartFav");                                                                   // 55
      }                                                                                                              // 56
    }                                                                                                                // 57
                                                                                                                     //
    return clickBtnFav;                                                                                              // 37
  }() /*,                                                                                                            // 37
      'click #btnComm' : function(){                                                                                 //
       var numComment = UserUtils.findNumComment(this._id);                                                          //
       //SI EL TWIIT TIENE POR LO MENOS 1 COMENTARIO, ENTONCES REDIRIGIMOS AL USUARIO A                              //
       //LA RUTA /Comments. SI NO, SE ABRE EL MODAL Y SE PUEDE HACER EL COMENTARIO                                   //
       if(numComment === 0){                                                                                         //
           $("#dialog-NewTwiit").modal();                                                                            //
           Session.set('commentMode', true);                                                                         //
           Session.set('idCurrentTwiit', this._id);                                                                  //
       }                                                                                                             //
      }*/                                                                                                            //
});                                                                                                                  // 36
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"twiitCommentPage.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/twiitCommentPage.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.twiitCommentPage.onCreated(function () {                                                                    // 1
  this.subscribe('twittsWithComment');                                                                               // 2
  this.subscribe('favs');                                                                                            // 3
});                                                                                                                  // 4
                                                                                                                     //
Template.twiitCommentPage.helpers({                                                                                  // 6
  //DEVUELVE EL MENSAJE ORIGINAL DEL QUE SE PRODUCEN LOS COMENTARIOS                                                 //
  'tweetMessage': function () {                                                                                      // 8
    function tweetMessage() {                                                                                        // 8
      //HAY QUE CONSEGUIR PASAR A ESTA VISTA EL this._id DE tweetFeed PARA PODER                                     //
      //DEVOLVER EL TWEET INICIAL Y DE AHI PASAR A MOSTRAR CON tweetThatCommentMessage                               //
      //TODOS LOS COMENTARIOS QUE TENGA!                                                                             //
      if (this.mode) {                                                                                               // 12
        id = UserUtils.findTwiitFromNotif(this._id);                                                                 // 13
        return Twitts.find(id, { sort: { timestamp: -1 } });                                                         // 14
      } else {                                                                                                       // 15
        return Twitts.find(this._id, { sort: { timestamp: -1 } });                                                   // 16
      }                                                                                                              // 17
    }                                                                                                                // 18
                                                                                                                     //
    return tweetMessage;                                                                                             // 8
  }(),                                                                                                               // 8
  'tweetThatCommentMessage': function () {                                                                           // 19
    function tweetThatCommentMessage() {                                                                             // 19
      if (this.mode) {                                                                                               // 20
        id = UserUtils.findTwiitFromNotif(this._id);                                                                 // 21
        return Twitts.find({ twiitIdComment: id }, { sort: { timestamp: -1 } });                                     // 22
      } else {                                                                                                       // 23
        return Twitts.find({ twiitIdComment: this._id }, { sort: { timestamp: -1 } });                               // 24
      }                                                                                                              // 25
    }                                                                                                                // 26
                                                                                                                     //
    return tweetThatCommentMessage;                                                                                  // 19
  }(),                                                                                                               // 19
  'convertDateTime': function () {                                                                                   // 27
    function convertDateTime() {                                                                                     // 27
      var dateNew = new Date(this.timestamp);                                                                        // 28
      var dateCon = dateNew.toLocaleString();                                                                        // 29
      return dateCon;                                                                                                // 30
    }                                                                                                                // 31
                                                                                                                     //
    return convertDateTime;                                                                                          // 27
  }(),                                                                                                               // 27
  'idToFavBtn': function () {                                                                                        // 32
    function idToFavBtn() {                                                                                          // 32
      return this._id;                                                                                               // 33
    }                                                                                                                // 34
                                                                                                                     //
    return idToFavBtn;                                                                                               // 32
  }(),                                                                                                               // 32
  'classFav': function () {                                                                                          // 35
    function classFav() {                                                                                            // 35
      var num = UserUtils.findNumberFavPerTwiit(this._id);                                                           // 36
      if (num > 0) {                                                                                                 // 37
        return "heartFav";                                                                                           // 38
      } else return "heartNoFav";                                                                                    // 39
    }                                                                                                                // 40
                                                                                                                     //
    return classFav;                                                                                                 // 35
  }()                                                                                                                // 35
});                                                                                                                  // 6
                                                                                                                     //
Template.twiitCommentPage.events({                                                                                   // 43
  'click #btnFav': function () {                                                                                     // 44
    function clickBtnFav() {                                                                                         // 44
      var currentUser = Session.get('currentUser');                                                                  // 45
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                              // 46
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                          //
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                         // 48
      var arrAux = userTapFav.idUserTapFav;                                                                          // 49
                                                                                                                     //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                     //
      if (arrAux.indexOf(idUser) === -1) {                                                                           // 52
        UserUtils.addFavToTwiit(this._id, idUser);                                                                   // 53
        $("#" + this._id).addClass("heartFav");                                                                      // 54
        $("#" + this._id).removeClass("heartNoFav");                                                                 // 55
      } else {                                                                                                       // 56
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                              //
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                           //
        //LA OPERACION INVERSA                                                                                       //
        UserUtils.removeFavToTwiit(this._id, idUser);                                                                // 60
        $("#" + this._id).addClass("heartNoFav");                                                                    // 61
        $("#" + this._id).removeClass("heartFav");                                                                   // 62
      }                                                                                                              // 63
    }                                                                                                                // 64
                                                                                                                     //
    return clickBtnFav;                                                                                              // 44
  }(),                                                                                                               // 44
  'click #btnComm': function () {                                                                                    // 65
    function clickBtnComm() {                                                                                        // 65
      $("#dialog-NewTwiit").modal();                                                                                 // 66
      console.log(this._id);                                                                                         // 67
      Session.set('idCurrentTwiit', this._id);                                                                       // 68
      Session.set('commentMode', true);                                                                              // 69
    }                                                                                                                // 70
                                                                                                                     //
    return clickBtnComm;                                                                                             // 65
  }()                                                                                                                // 65
});                                                                                                                  // 43
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"twiitPage.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/twiitPage.js                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.twiitPage.helpers({                                                                                         // 1
  'convertDateTime': function () {                                                                                   // 2
    function convertDateTime() {                                                                                     // 2
      var dateNew = new Date(this.twiitTimeStamp);                                                                   // 3
      var dateCon = dateNew.toLocaleString();                                                                        // 4
      return dateCon;                                                                                                // 5
    }                                                                                                                // 6
                                                                                                                     //
    return convertDateTime;                                                                                          // 2
  }(),                                                                                                               // 2
                                                                                                                     //
  'tweetMessage': function () {                                                                                      // 8
    function tweetMessage() {                                                                                        // 8
      console.log(this._id);                                                                                         // 9
      var notify = Notifications.find({ _id: this._id });                                                            // 10
      return notify;                                                                                                 // 11
    }                                                                                                                // 12
                                                                                                                     //
    return tweetMessage;                                                                                             // 8
  }(),                                                                                                               // 8
                                                                                                                     //
  'countNotifTwiit': function () {                                                                                   // 14
    function countNotifTwiit() {                                                                                     // 14
      var num = Notifications.find({ _id: this._id }).count();                                                       // 15
      if (num === 0) {                                                                                               // 16
        return false;                                                                                                // 17
      } else {                                                                                                       // 18
        return true;                                                                                                 // 19
      }                                                                                                              // 20
    }                                                                                                                // 21
                                                                                                                     //
    return countNotifTwiit;                                                                                          // 14
  }()                                                                                                                // 14
});                                                                                                                  // 1
                                                                                                                     //
Template.twiitPage.events({                                                                                          // 24
  'click button': function () {                                                                                      // 25
    function clickButton() {                                                                                         // 25
      console.log(this._id);                                                                                         // 26
      Notifications.update(this._id, { $set: { read: true } });                                                      // 27
      console.log("Clean!");                                                                                         // 28
      window.location = "/";                                                                                         // 29
    }                                                                                                                // 30
                                                                                                                     //
    return clickButton;                                                                                              // 25
  }()                                                                                                                // 25
});                                                                                                                  // 24
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"twiitPageNew.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/twiitPageNew.js                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.twiitPageNew.onCreated(function () {                                                                        // 1
  this.subscribe('twittsWithComment');                                                                               // 2
  this.subscribe('favs');                                                                                            // 3
  this.subscribe('allNotifications');                                                                                // 4
  username = Session.get('currentUser');                                                                             // 5
  currentFollowings = UserUtils.findFollowings(username);                                                            // 6
  arrWithId = [];                                                                                                    // 7
  Session.set('notificationsModeOn', true);                                                                          // 8
});                                                                                                                  // 9
                                                                                                                     //
Template.twiitPageNew.helpers({                                                                                      // 11
  'convertDateTime': function () {                                                                                   // 12
    function convertDateTime() {                                                                                     // 12
      var dateNew = new Date(this.twiitTimeStamp);                                                                   // 13
      var dateCon = dateNew.toLocaleString();                                                                        // 14
      return dateCon;                                                                                                // 15
    }                                                                                                                // 16
                                                                                                                     //
    return convertDateTime;                                                                                          // 12
  }(),                                                                                                               // 12
                                                                                                                     //
  'tweetMessage': function () {                                                                                      // 18
    function tweetMessage() {                                                                                        // 18
      var notify = Notifications.find({ twiitNotifUserName: { $nin: currentFollowings }, read: false }, { sort: { twiitTimeStamp: -1 } });
      return notify;                                                                                                 // 20
    }                                                                                                                // 21
                                                                                                                     //
    return tweetMessage;                                                                                             // 18
  }(),                                                                                                               // 18
                                                                                                                     //
  'countNotifTwiit': function () {                                                                                   // 23
    function countNotifTwiit() {                                                                                     // 23
      var numNotif = UserUtils.findNumberNotif(username);                                                            // 24
      if (numNotif === 0) {                                                                                          // 25
        return false;                                                                                                // 26
      } else {                                                                                                       // 27
        return true;                                                                                                 // 28
      }                                                                                                              // 29
    }                                                                                                                // 30
                                                                                                                     //
    return countNotifTwiit;                                                                                          // 23
  }(),                                                                                                               // 23
                                                                                                                     //
  'saveIdInArr': function () {                                                                                       // 32
    function saveIdInArr() {                                                                                         // 32
      arrWithId.push(this._id);                                                                                      // 33
    }                                                                                                                // 34
                                                                                                                     //
    return saveIdInArr;                                                                                              // 32
  }(),                                                                                                               // 32
                                                                                                                     //
  'numFavPerTwiit': function () {                                                                                    // 36
    function numFavPerTwiit() {                                                                                      // 36
      return UserUtils.findNumberFavPerTwiit(this.twiitId);                                                          // 37
    }                                                                                                                // 38
                                                                                                                     //
    return numFavPerTwiit;                                                                                           // 36
  }(),                                                                                                               // 36
  'findNumComment': function () {                                                                                    // 39
    function findNumComment() {                                                                                      // 39
      //AQUI this._id ES EL _ID DE LA COLLECTION NOTIFICATIONS                                                       //
      //POR LO QUE HABRA QUE SACAR EL CAMPO twiitId                                                                  //
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                          // 42
                                                                                                                     //
      var num = UserUtils.findNumComment(twiitId);                                                                   // 44
      if (num > 0) {                                                                                                 // 45
        return true;                                                                                                 // 46
      } else return false;                                                                                           // 47
    }                                                                                                                // 48
                                                                                                                     //
    return findNumComment;                                                                                           // 39
  }(),                                                                                                               // 39
  'numComment': function () {                                                                                        // 49
    function numComment() {                                                                                          // 49
      var num = UserUtils.findNumComment(UserUtils.findTwiitFromNotif(this._id));                                    // 50
      return num;                                                                                                    // 51
    }                                                                                                                // 52
                                                                                                                     //
    return numComment;                                                                                               // 49
  }(),                                                                                                               // 49
  'idToFavBtn': function () {                                                                                        // 53
    function idToFavBtn() {                                                                                          // 53
      return this._id;                                                                                               // 54
    }                                                                                                                // 55
                                                                                                                     //
    return idToFavBtn;                                                                                               // 53
  }(),                                                                                                               // 53
  'classFav': function () {                                                                                          // 56
    function classFav() {                                                                                            // 56
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                          // 57
      var num = UserUtils.findNumberFavPerTwiit(twiitId);                                                            // 58
      if (num > 0) {                                                                                                 // 59
        return "heartFav";                                                                                           // 60
      } else return "heartNoFav";                                                                                    // 61
    }                                                                                                                // 62
                                                                                                                     //
    return classFav;                                                                                                 // 56
  }(),                                                                                                               // 56
  'numFavorite': function () {                                                                                       // 63
    function numFavorite() {                                                                                         // 63
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                          // 64
      var num = UserUtils.findNumberFavPerTwiit(twiitId);                                                            // 65
      if (num > 0) {                                                                                                 // 66
        return true;                                                                                                 // 67
      } else return false;                                                                                           // 68
    }                                                                                                                // 69
                                                                                                                     //
    return numFavorite;                                                                                              // 63
  }(),                                                                                                               // 63
  'numFav': function () {                                                                                            // 70
    function numFav() {                                                                                              // 70
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                          // 71
      var num = UserUtils.findNumberFavPerTwiit(twiitId);                                                            // 72
      return num;                                                                                                    // 73
    }                                                                                                                // 74
                                                                                                                     //
    return numFav;                                                                                                   // 70
  }()                                                                                                                // 70
});                                                                                                                  // 11
                                                                                                                     //
Template.twiitPageNew.events({                                                                                       // 77
  'click #btnDismissNotif': function () {                                                                            // 78
    function clickBtnDismissNotif() {                                                                                // 78
      console.log(arrWithId);                                                                                        // 79
      for (var aux in meteorBabelHelpers.sanitizeForInObject(arrWithId)) {                                           // 80
        var id = arrWithId[aux];                                                                                     // 81
        Notifications.update(id, { $set: { read: true } });                                                          // 82
      }                                                                                                              // 83
      window.location = "/";                                                                                         // 84
    }                                                                                                                // 85
                                                                                                                     //
    return clickBtnDismissNotif;                                                                                     // 78
  }(),                                                                                                               // 78
  'click #btnFav': function () {                                                                                     // 86
    function clickBtnFav() {                                                                                         // 86
      var currentUser = Session.get('currentUser');                                                                  // 87
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                              // 88
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                          //
      var userTapFav = UserUtils.findFavsForTwiit(UserUtils.findTwiitFromNotif(this._id));                           // 90
      var arrAux = userTapFav.idUserTapFav;                                                                          // 91
                                                                                                                     //
      var idAux = UserUtils.findTwiitFromNotif(this._id);                                                            // 93
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                     //
      if (arrAux.indexOf(idUser) === -1) {                                                                           // 95
        UserUtils.addFavToTwiit(idAux, idUser);                                                                      // 96
        $("#" + this._id).addClass("heartFav");                                                                      // 97
        $("#" + this._id).removeClass("heartNoFav");                                                                 // 98
      } else {                                                                                                       // 99
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                              //
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                           //
        //LA OPERACION INVERSA                                                                                       //
        UserUtils.removeFavToTwiit(idAux, idUser);                                                                   // 103
        $("#" + this._id).addClass("heartNoFav");                                                                    // 104
        $("#" + this._id).removeClass("heartFav");                                                                   // 105
      }                                                                                                              // 106
    }                                                                                                                // 107
                                                                                                                     //
    return clickBtnFav;                                                                                              // 86
  }(),                                                                                                               // 86
  'click #btnComm': function () {                                                                                    // 108
    function clickBtnComm() {                                                                                        // 108
      var numComment = UserUtils.findNumComment(UserUtils.findTwiitFromNotif(this._id));                             // 109
      //SI EL TWIIT TIENE POR LO MENOS 1 COMENTARIO, ENTONCES REDIRIGIMOS AL USUARIO A                               //
      //LA RUTA /Comments. SI NO, SE ABRE EL MODAL Y SE PUEDE HACER EL COMENTARIO                                    //
      if (numComment === 0) {                                                                                        // 112
        $("#dialog-NewTwiit").modal();                                                                               // 113
        Session.set('commentMode', true);                                                                            // 114
        Session.set('idCurrentTwiit', UserUtils.findTwiitFromNotif(this._id));                                       // 115
      }                                                                                                              // 116
    }                                                                                                                // 117
                                                                                                                     //
    return clickBtnComm;                                                                                             // 108
  }()                                                                                                                // 108
});                                                                                                                  // 77
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userManagement.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/userManagement.js                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.userManagement.events({                                                                                     // 1
  'click #signup': function () {                                                                                     // 2
    function clickSignup() {                                                                                         // 2
      var user = {                                                                                                   // 3
        username: $('#signup-username').val(),                                                                       // 4
        password: $('#signup-password').val(),                                                                       // 5
        profile: {                                                                                                   // 6
          fullname: $('#signup-fullname').val()                                                                      // 7
        }                                                                                                            // 6
      };                                                                                                             // 3
                                                                                                                     //
      Accounts.createUser(user, function (error) {                                                                   // 11
        if (error) alert(error);                                                                                     // 12
      });                                                                                                            // 13
    }                                                                                                                // 14
                                                                                                                     //
    return clickSignup;                                                                                              // 2
  }(),                                                                                                               // 2
                                                                                                                     //
  'click #login': function () {                                                                                      // 16
    function clickLogin() {                                                                                          // 16
      var username = $('#login-username').val();                                                                     // 17
      var password = $('#login-password').val();                                                                     // 18
                                                                                                                     //
      Meteor.loginWithPassword(username, password, function (error) {                                                // 20
        if (error) alert(error);                                                                                     // 21
      });                                                                                                            // 22
      loggingIn = true;                                                                                              // 23
    }                                                                                                                // 24
                                                                                                                     //
    return clickLogin;                                                                                               // 16
  }(),                                                                                                               // 16
                                                                                                                     //
  'click #recommendationsBtn': function () {                                                                         // 26
    function clickRecommendationsBtn() {                                                                             // 26
      Session.set('recommendations', true);                                                                          // 27
    }                                                                                                                // 28
                                                                                                                     //
    return clickRecommendationsBtn;                                                                                  // 26
  }()                                                                                                                // 26
});                                                                                                                  // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userProfile.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/userProfile.js                                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.userProfile.events({                                                                                        // 1
  'click #logout': function () {                                                                                     // 2
    function clickLogout() {                                                                                         // 2
      Meteor.logout();                                                                                               // 3
      window.location = "/";                                                                                         // 4
    }                                                                                                                // 5
                                                                                                                     //
    return clickLogout;                                                                                              // 2
  }()                                                                                                                // 2
});                                                                                                                  // 1
                                                                                                                     //
Template.userProfile.helpers({                                                                                       // 8
  'tweets': function () {                                                                                            // 9
    function tweets(username) {                                                                                      // 9
      Meteor.call('tweetsPublish', username, function (err, res) {                                                   // 10
        Session.set('numTweets', res);                                                                               // 11
      });                                                                                                            // 12
      return Session.get('numTweets');                                                                               // 13
    }                                                                                                                // 14
                                                                                                                     //
    return tweets;                                                                                                   // 9
  }(),                                                                                                               // 9
  'following': function () {                                                                                         // 15
    function following() {                                                                                           // 15
      Meteor.call('usersFollowings', function (err, res) {                                                           // 16
        Session.set('numFollowings', res);                                                                           // 17
      });                                                                                                            // 18
      return Session.get('numFollowings');                                                                           // 19
    }                                                                                                                // 20
                                                                                                                     //
    return following;                                                                                                // 15
  }(),                                                                                                               // 15
  'followers': function () {                                                                                         // 21
    function followers() {                                                                                           // 21
      Meteor.call('usersFollowers', function (err, res) {                                                            // 22
        Session.set('numFollowers', res);                                                                            // 23
      });                                                                                                            // 24
      return Session.get('numFollowers');                                                                            // 25
    }                                                                                                                // 26
                                                                                                                     //
    return followers;                                                                                                // 21
  }()                                                                                                                // 21
});                                                                                                                  // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"main.html":["./template.main.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/main.html                                                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.exports = require("./template.main.js");                                                                      // 1
                                                                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/template.main.js                                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.body.addContent((function() {                                                                               // 2
  var view = this;                                                                                                   // 3
  return [ HTML.DIV({                                                                                                // 4
    class: "row"                                                                                                     // 5
  }, "\n\t\t", Blaze.If(function() {                                                                                 // 6
    return Spacebars.call(view.lookup("currentUser"));                                                               // 7
  }, function() {                                                                                                    // 8
    return [ "\n\t    \t", Spacebars.include(view.lookupTemplate("navBarTemplate")), "\n\t  \t" ];                   // 9
  }), "\n\t\t", HTML.Raw("<!--{{> btnFloating}}-->"), "\n\t"), "\n\t", HTML.SCRIPT("\n\t\t//$.material.init();\n\t") ];
}));                                                                                                                 // 11
Meteor.startup(Template.body.renderToDocument);                                                                      // 12
Meteor.startup(function() {                                                                                          // 13
  var attrs = {"id":"bodyPpal"};                                                                                     // 14
  for (var prop in attrs) {                                                                                          // 15
    document.body.setAttribute(prop, attrs[prop]);                                                                   // 16
  }                                                                                                                  // 17
});                                                                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/templating","meteor/reactive-var","./main.html",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/main.js                                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});var ReactiveVar;module.import('meteor/reactive-var',{"ReactiveVar":function(v){ReactiveVar=v}});module.import('./main.html');
                                                                                                                     // 2
                                                                                                                     //
                                                                                                                     // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"lib":{"collections":{"favs.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// lib/collections/favs.js                                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Favs = new Meteor.Collection('favs');                                                                                // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notifications.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// lib/collections/notifications.js                                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Notifications = new Mongo.Collection('notifications');                                                               // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweets.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// lib/collections/tweets.js                                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Twitts = new Meteor.Collection('twitts');                                                                            // 1
Relationships = new Meteor.Collection('relationships');                                                              // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"router.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// lib/router.js                                                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Router.configure({                                                                                                   // 1
		loadingTemplate: 'loading',                                                                                        // 2
		notFoundTemplate: 'notFound'                                                                                       // 3
});                                                                                                                  // 1
                                                                                                                     //
Router.route('/', { name: 'userManagement' });                                                                       // 6
/*SE ACCEDE POR WINDOW.LOCATION*/                                                                                    //
Router.route('/whoToFollow', { name: 'followUsers' });                                                               // 8
Router.route('/myProfile', { name: 'userProfile' });                                                                 // 9
Router.route('/Notifications', { name: 'twiitPageNew' });                                                            // 10
//Router.route('/Comments', {name: 'twiitCommentPage'});                                                             //
/*SE ACCEDE POR PATHFOR*/                                                                                            //
Router.route('/Comments/:_id', {                                                                                     // 13
		name: 'twiitCommentPage',                                                                                          // 14
		data: function () {                                                                                                // 15
				function data() {                                                                                                // 15
						var mode = Session.get('notificationsModeOn');                                                                 // 16
						var idTwiit = new Object();                                                                                    // 17
						idTwiit._id = this.params._id;                                                                                 // 18
                                                                                                                     //
						if (mode) {                                                                                                    // 20
								idTwiit.mode = mode;                                                                                         // 21
						}                                                                                                              // 22
                                                                                                                     //
						return idTwiit;                                                                                                // 24
				}                                                                                                                // 25
                                                                                                                     //
				return data;                                                                                                     // 15
		}()                                                                                                                // 15
});                                                                                                                  // 13
Router.route('/twiits/:_id', {                                                                                       // 27
		name: 'twiitPage',                                                                                                 // 28
		data: function () {                                                                                                // 29
				function data() {                                                                                                // 29
						return this.params;                                                                                            // 30
				}                                                                                                                // 31
                                                                                                                     //
				return data;                                                                                                     // 29
		}()                                                                                                                // 29
});                                                                                                                  // 27
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userUtils.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// lib/userUtils.js                                                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
UserUtils = function UserUtils() {}; //no var in front                                                               // 1
                                                                                                                     //
UserUtils.findTweets = function (username) {                                                                         // 3
  var currentTweets = Twitts.find({ user: username }).fetch().map(function (data) {                                  // 4
    return data.following;                                                                                           // 5
  });                                                                                                                // 6
  console.log("Tweets: ");                                                                                           // 7
  console.log(currentTweets);                                                                                        // 8
                                                                                                                     //
  return currentTweets;                                                                                              // 10
};                                                                                                                   // 11
//SIGUIENDO                                                                                                          //
UserUtils.findFollowings = function (username) {                                                                     // 13
  var currentFollowings = Relationships.find({ follower: username }).fetch().map(function (data) {                   // 14
    return data.following;                                                                                           // 15
  });                                                                                                                // 16
  //console.log("Siguiendo: ");                                                                                      //
  //console.log(currentFollowings);                                                                                  //
                                                                                                                     //
  return currentFollowings;                                                                                          // 20
};                                                                                                                   // 21
//SEGUIDORES                                                                                                         //
UserUtils.findFollowers = function (username) {                                                                      // 23
  var currentFollowers = Relationships.find({ following: username }).fetch().map(function (data) {                   // 24
    return data.following;                                                                                           // 25
  });                                                                                                                // 26
  //console.log("Seguidores: ");                                                                                     //
  //console.log(currentFollowers);                                                                                   //
                                                                                                                     //
  return currentFollowers;                                                                                           // 30
};                                                                                                                   // 31
/*                                                                                                                   //
//FORZAMOS LA REACTIVIDAD                                                                                            //
UserUtils.observerProperties = function(){                                                                           //
	Twitts.find().observeChanges({                                                                                      //
    changed: function(){                                                                                             //
      console.log("Se han detectado cambios!");                                                                      //
    },                                                                                                               //
    added: function(id, doc) {                                                                                       //
      //console.log(doc);                                                                                            //
      return true;                                                                                                   //
    }                                                                                                                //
  })                                                                                                                 //
}                                                                                                                    //
*/                                                                                                                   //
                                                                                                                     //
UserUtils.findNumberNotif = function (username) {                                                                    // 47
  var followings = UserUtils.findFollowings();                                                                       // 48
  return Notifications.find({ twiitNotifUserName: { $nin: followings }, read: false }).count();                      // 49
};                                                                                                                   // 50
                                                                                                                     //
UserUtils.findNumberFavPerTwiit = function (idTwiit) {                                                               // 52
  var twiitNumFav = Twitts.findOne({ _id: idTwiit }).numFav;                                                         // 53
  return twiitNumFav;                                                                                                // 54
};                                                                                                                   // 55
                                                                                                                     //
UserUtils.findFavsForTwiit = function (id) {                                                                         // 57
  return Favs.findOne({ idTwiit: id });                                                                              // 58
};                                                                                                                   // 59
                                                                                                                     //
UserUtils.addFavToTwiit = function (id, idUser) {                                                                    // 61
  var resultToUpdate = false;                                                                                        // 62
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT               //
  var favObject = UserUtils.findFavsForTwiit(id);                                                                    // 64
  var arrAux = favObject.idUserTapFav;                                                                               // 65
  var idFav = favObject._id;                                                                                         // 66
                                                                                                                     //
  arrAux.push(idUser);                                                                                               // 68
  var num = UserUtils.findNumberFavPerTwiit(id);                                                                     // 69
  num++;                                                                                                             // 70
                                                                                                                     //
  //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                                          //
  res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                                      // 73
  resT = Twitts.update(id, { $set: { numFav: num } });                                                               // 74
                                                                                                                     //
  //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                                               //
  if (res && resT) {                                                                                                 // 77
    resultToUpdate = true;                                                                                           // 78
  }                                                                                                                  // 79
                                                                                                                     //
  return resultToUpdate;                                                                                             // 81
};                                                                                                                   // 82
                                                                                                                     //
UserUtils.removeFavToTwiit = function (id, idUser) {                                                                 // 84
  var resultToUpdate = false;                                                                                        // 85
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT               //
  var favObject = UserUtils.findFavsForTwiit(id);                                                                    // 87
  var arrAux = favObject.idUserTapFav;                                                                               // 88
  var idFav = favObject._id;                                                                                         // 89
                                                                                                                     //
  //HAY QUE AVERIGUAR LA POSICION DEL idUser DENTRO DEL ARRAY DE LA BBDD                                             //
  var posIdUser = arrAux.indexOf(idUser);                                                                            // 92
  //AHORA ELIMINAMOS EL ELEMENTO ASOCIADO A ESA POSICION                                                             //
  delete arrAux[posIdUser];                                                                                          // 94
                                                                                                                     //
  var num = UserUtils.findNumberFavPerTwiit(id);                                                                     // 96
  num--;                                                                                                             // 97
                                                                                                                     //
  //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                                          //
  res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                                      // 100
  resT = Twitts.update(id, { $set: { numFav: num } });                                                               // 101
                                                                                                                     //
  //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                                               //
  if (res && resT) {                                                                                                 // 104
    resultToUpdate = true;                                                                                           // 105
  }                                                                                                                  // 106
                                                                                                                     //
  return resultToUpdate;                                                                                             // 108
};                                                                                                                   // 109
                                                                                                                     //
UserUtils.findTwiitFromNotif = function (id) {                                                                       // 111
  var twiitId = Notifications.findOne(id).twiitId;                                                                   // 112
  return twiitId;                                                                                                    // 113
};                                                                                                                   // 114
                                                                                                                     //
UserUtils.findNumComment = function (idTweet) {                                                                      // 116
  return Twitts.findOne({ _id: idTweet }).numComment;                                                                // 117
};                                                                                                                   // 118
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".scss",".css"]});
require("./client/partialTemplates/template.followUsers.js");
require("./client/partialTemplates/template.loading.js");
require("./client/partialTemplates/template.navBarTemplate.js");
require("./client/partialTemplates/template.not_found.js");
require("./client/partialTemplates/template.notifications.js");
require("./client/partialTemplates/template.notificationsNew.js");
require("./client/partialTemplates/template.tweetBox.js");
require("./client/partialTemplates/template.tweetFeed.js");
require("./client/partialTemplates/template.tweetFeedProfile.js");
require("./client/partialTemplates/template.twiitCommentPage.js");
require("./client/partialTemplates/template.twiitPage.js");
require("./client/partialTemplates/template.twiitPageNew.js");
require("./client/partialTemplates/template.userManagement.js");
require("./client/partialTemplates/template.userProfile.js");
require("./client/template.main.js");
require("./lib/collections/favs.js");
require("./lib/collections/notifications.js");
require("./lib/collections/tweets.js");
require("./lib/router.js");
require("./lib/userUtils.js");
require("./client/partialTemplates/followUsers.js");
require("./client/partialTemplates/navBarTemplate.js");
require("./client/partialTemplates/notifications.js");
require("./client/partialTemplates/notificationsNew.js");
require("./client/partialTemplates/tweetBox.js");
require("./client/partialTemplates/tweetFeed.js");
require("./client/partialTemplates/tweetFeedProfile.js");
require("./client/partialTemplates/twiitCommentPage.js");
require("./client/partialTemplates/twiitPage.js");
require("./client/partialTemplates/twiitPageNew.js");
require("./client/partialTemplates/userManagement.js");
require("./client/partialTemplates/userProfile.js");
require("./client/main.js");