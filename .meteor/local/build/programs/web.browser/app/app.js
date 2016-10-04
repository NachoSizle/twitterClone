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
    }, "\n              ", HTML.BUTTON({                                                                             // 35
      type: "button",                                                                                                // 36
      class: "btn btn-secondary"                                                                                     // 37
    }, "\n                ", HTML.SPAN({                                                                             // 38
      class: "glyphicon glyphicon-bullhorn"                                                                          // 39
    }), "\n              "), "\n\n              ", HTML.BUTTON({                                                     // 40
      type: "button",                                                                                                // 41
      id: "btnComm",                                                                                                 // 42
      class: "btn btn-secondary"                                                                                     // 43
    }, "\n                ", HTML.SPAN({                                                                             // 44
      class: "glyphicon glyphicon-comment"                                                                           // 45
    }), "\n                ", HTML.SPAN({                                                                            // 46
      class: "badge-numFav badge"                                                                                    // 47
    }, Blaze.View("lookup:..numComment", function() {                                                                // 48
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                      // 49
    })), "\n              "), "\n\n              ", HTML.BUTTON({                                                    // 50
      type: "button",                                                                                                // 51
      id: "btnFav",                                                                                                  // 52
      class: "btn btn-secondary"                                                                                     // 53
    }, "\n                ", HTML.SPAN({                                                                             // 54
      class: "glyphicon glyphicon-heart"                                                                             // 55
    }), "\n                ", HTML.SPAN({                                                                            // 56
      class: "badge-numFav badge"                                                                                    // 57
    }, Blaze.View("lookup:..numFav", function() {                                                                    // 58
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                          // 59
    })), "\n              "), "\n            "), "\n          "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");                                                                               // 61
}));                                                                                                                 // 62
                                                                                                                     // 63
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
    }, "\n              ", HTML.BUTTON({                                                                             // 35
      type: "button",                                                                                                // 36
      class: "btn btn-secondary"                                                                                     // 37
    }, "\n                ", HTML.SPAN({                                                                             // 38
      class: "glyphicon glyphicon-bullhorn"                                                                          // 39
    }), "\n              "), "\n\n              ", HTML.BUTTON({                                                     // 40
      type: "button",                                                                                                // 41
      id: "btnComm",                                                                                                 // 42
      class: "btn btn-secondary",                                                                                    // 43
      "data-toggle": "modal",                                                                                        // 44
      "data-target": "#dialog-NewTwiit"                                                                              // 45
    }, "\n                ", HTML.SPAN({                                                                             // 46
      class: "glyphicon glyphicon-comment"                                                                           // 47
    }), "\n                ", HTML.SPAN({                                                                            // 48
      class: "badge-numFav badge"                                                                                    // 49
    }, Blaze.View("lookup:..numComment", function() {                                                                // 50
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                      // 51
    })), "\n              "), "\n              \n              ", HTML.BUTTON({                                      // 52
      type: "button",                                                                                                // 53
      id: "btnFav",                                                                                                  // 54
      class: "btn btn-secondary"                                                                                     // 55
    }, "\n                ", HTML.SPAN({                                                                             // 56
      class: "glyphicon glyphicon-heart"                                                                             // 57
    }), "\n                ", HTML.SPAN({                                                                            // 58
      class: "badge-numFav badge"                                                                                    // 59
    }, Blaze.View("lookup:..numFav", function() {                                                                    // 60
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                          // 61
    })), "\n              "), "\n            "), "\n          "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");                                                                               // 63
}));                                                                                                                 // 64
                                                                                                                     // 65
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
    }, "\n              ", HTML.BUTTON({                                                                             // 35
      type: "button",                                                                                                // 36
      class: "btn btn-secondary"                                                                                     // 37
    }, "\n                ", HTML.SPAN({                                                                             // 38
      class: "glyphicon glyphicon-bullhorn"                                                                          // 39
    }), "\n              "), "\n\n              ", HTML.BUTTON({                                                     // 40
      type: "button",                                                                                                // 41
      id: "btnComm",                                                                                                 // 42
      class: "btn btn-secondary"                                                                                     // 43
    }, "\n                ", HTML.SPAN({                                                                             // 44
      class: "glyphicon glyphicon-comment"                                                                           // 45
    }), "\n                ", HTML.SPAN({                                                                            // 46
      class: "badge-numFav badge"                                                                                    // 47
    }, Blaze.View("lookup:..numComment", function() {                                                                // 48
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                      // 49
    })), "\n              "), "\n\n              ", HTML.BUTTON({                                                    // 50
      type: "button",                                                                                                // 51
      id: "btnFav",                                                                                                  // 52
      class: "btn btn-secondary"                                                                                     // 53
    }, "\n                ", HTML.SPAN({                                                                             // 54
      class: "glyphicon glyphicon-heart"                                                                             // 55
    }), "\n                ", HTML.SPAN({                                                                            // 56
      class: "badge-numFav badge"                                                                                    // 57
    }, Blaze.View("lookup:..numFav", function() {                                                                    // 58
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                          // 59
    })), "\n              "), "\n            "), "\n          "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n        " ];
  }), "\n        ", HTML.Raw("<!--METER CACHO DE twiitCommentPage.JS-->"), "\n      "), "\n    "), "\n  ");          // 61
}));                                                                                                                 // 62
                                                                                                                     // 63
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
      }), "\n              "), "\n               ", HTML.DIV({                                                       // 36
        class: "btn-group",                                                                                          // 37
        role: "group",                                                                                               // 38
        id: "btnGroupInteractions"                                                                                   // 39
      }, "\n                ", HTML.BUTTON({                                                                         // 40
        type: "button",                                                                                              // 41
        class: "btn btn-secondary"                                                                                   // 42
      }, "\n                  ", HTML.SPAN({                                                                         // 43
        class: "glyphicon glyphicon-bullhorn"                                                                        // 44
      }), "\n                "), "\n\n                ", HTML.BUTTON({                                               // 45
        type: "button",                                                                                              // 46
        id: "btnComm",                                                                                               // 47
        class: "btn btn-secondary",                                                                                  // 48
        "data-toggle": "modal",                                                                                      // 49
        "data-target": "#dialog-NewTwiit"                                                                            // 50
      }, "\n                  ", HTML.SPAN({                                                                         // 51
        class: "glyphicon glyphicon-comment"                                                                         // 52
      }), "\n                  ", HTML.SPAN({                                                                        // 53
        class: "badge-numFav badge"                                                                                  // 54
      }, Blaze.View("lookup:..numComment", function() {                                                              // 55
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                    // 56
      })), "\n                "), "\n                \n                ", HTML.BUTTON({                              // 57
        type: "button",                                                                                              // 58
        id: "btnFav",                                                                                                // 59
        class: "btn btn-secondary"                                                                                   // 60
      }, "\n                  ", HTML.SPAN({                                                                         // 61
        class: "glyphicon glyphicon-heart"                                                                           // 62
      }), "\n                  ", HTML.SPAN({                                                                        // 63
        class: "badge-numFav badge"                                                                                  // 64
      }, Blaze.View("lookup:..numFav", function() {                                                                  // 65
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                        // 66
      })), "\n                "), "\n              "), "\n            "), "\n          " ];                          // 67
    }), "\n           ", HTML.BUTTON({                                                                               // 68
      id: "btnDismissNotif",                                                                                         // 69
      class: "btn btn-info pull-right",                                                                              // 70
      type: "button"                                                                                                 // 71
    }, "OK"), "\n        " ];                                                                                        // 72
  }, function() {                                                                                                    // 73
    return [ "\n          ", HTML.DIV({                                                                              // 74
      class: "panel-info"                                                                                            // 75
    }, "\n            ", HTML.P("Oooooooops Twiit Page New"), "    \n          "), "\n        " ];                   // 76
  }), "\n      "), "\n    "), "\n  ");                                                                               // 77
}));                                                                                                                 // 78
                                                                                                                     // 79
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
	Session.set('notInRouteComment', true);                                                                             // 5
});                                                                                                                  // 6
                                                                                                                     //
Template.navBarTemplate.events({                                                                                     // 8
	'click #recommendationsBtn': function () {                                                                          // 9
		function clickRecommendationsBtn() {                                                                               // 9
			//console.log("A quien seguir");                                                                                  //
		}                                                                                                                  // 11
                                                                                                                     //
		return clickRecommendationsBtn;                                                                                    // 9
	}(),                                                                                                                // 9
	'click #imgProfile': function () {                                                                                  // 12
		function clickImgProfile() {                                                                                       // 12
			window.location = "/myProfile";                                                                                   // 13
		}                                                                                                                  // 14
                                                                                                                     //
		return clickImgProfile;                                                                                            // 12
	}(),                                                                                                                // 12
	'click #imgLogTwiiterClone': function () {                                                                          // 15
		function clickImgLogTwiiterClone() {                                                                               // 15
			window.location = "/";                                                                                            // 16
		}                                                                                                                  // 17
                                                                                                                     //
		return clickImgLogTwiiterClone;                                                                                    // 15
	}(),                                                                                                                // 15
	'show.bs.collapse': function () {                                                                                   // 18
		function showBsCollapse() {                                                                                        // 18
			Session.set('navBarCollapse', true);                                                                              // 19
		}                                                                                                                  // 20
                                                                                                                     //
		return showBsCollapse;                                                                                             // 18
	}(),                                                                                                                // 18
	'hide.bs.collapse': function () {                                                                                   // 21
		function hideBsCollapse() {                                                                                        // 21
			Session.set('navBarCollapse', false);                                                                             // 22
		}                                                                                                                  // 23
                                                                                                                     //
		return hideBsCollapse;                                                                                             // 21
	}(),                                                                                                                // 21
	'click #btnNewTweet': function () {                                                                                 // 24
		function clickBtnNewTweet() {                                                                                      // 24
			Session.set('commentMode', false);                                                                                // 25
		}                                                                                                                  // 26
                                                                                                                     //
		return clickBtnNewTweet;                                                                                           // 24
	}(),                                                                                                                // 24
	'click #btnNewTwiit': function () {                                                                                 // 27
		function clickBtnNewTwiit() {                                                                                      // 27
			Session.set('commentMode', false);                                                                                // 28
		}                                                                                                                  // 29
                                                                                                                     //
		return clickBtnNewTwiit;                                                                                           // 27
	}()                                                                                                                 // 27
});                                                                                                                  // 8
                                                                                                                     //
Template.navBarTemplate.helpers({                                                                                    // 32
	'notificationCount': function () {                                                                                  // 33
		function notificationCount() {                                                                                     // 33
			return UserUtils.findNumberNotif(Meteor.user().username);                                                         // 34
		}                                                                                                                  // 35
                                                                                                                     //
		return notificationCount;                                                                                          // 33
	}(),                                                                                                                // 33
	'infoStateCollapseNavBar': function () {                                                                            // 36
		function infoStateCollapseNavBar() {                                                                               // 36
			return Session.get('navBarCollapse');                                                                             // 37
		}                                                                                                                  // 38
                                                                                                                     //
		return infoStateCollapseNavBar;                                                                                    // 36
	}()                                                                                                                 // 36
});                                                                                                                  // 32
//PARA CONTROLAR SI SE CAMBIA EL TAMAÑO DE PANTALLA                                                                  //
$(window).resize(function () {                                                                                       // 41
	console.log("Change");                                                                                              // 42
	Session.set('sizeDisplay', $(window).width());                                                                      // 43
});                                                                                                                  // 44
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
					var twiitId = Session.get('twiitIdToComment');                                                                  // 17
					var numComment = UserUtils.findNumComment(twiitId);                                                             // 18
					numComment++;                                                                                                   // 19
				}                                                                                                                // 20
                                                                                                                     //
				$('#tweetText').val("");                                                                                         // 22
				Session.set('numChars', 0);                                                                                      // 23
                                                                                                                     //
				var tweet = new Object();                                                                                        // 25
				tweet.message = message;                                                                                         // 26
				tweet.type = type;                                                                                               // 27
				if (twiitId != null) {                                                                                           // 28
					tweet.twiitId = twiitId;                                                                                        // 29
					tweet.numComment = numComment;                                                                                  // 30
				}                                                                                                                // 31
				Meteor.call('insertTweet', tweet);                                                                               // 32
			}                                                                                                                 // 33
                                                                                                                     //
			return clickButton;                                                                                               // 12
		}()                                                                                                                // 12
	});                                                                                                                 // 8
                                                                                                                     //
	Template.tweetBox.helpers({                                                                                         // 37
		charCount: function () {                                                                                           // 38
			function charCount() {                                                                                            // 38
				return 140 - Session.get('numChars');                                                                            // 39
			}                                                                                                                 // 40
                                                                                                                     //
			return charCount;                                                                                                 // 38
		}(),                                                                                                               // 38
                                                                                                                     //
		charClass: function () {                                                                                           // 42
			function charClass() {                                                                                            // 42
				if (Session.get('numChars') > 140) {                                                                             // 43
					return 'errCharCount'; // o el nombre que le disteis en el fichero css                                          // 44
				} else {                                                                                                         // 45
						return 'charCount'; //o el nombre que le disteis en el fichero css                                             // 46
					}                                                                                                               // 47
			}                                                                                                                 // 48
                                                                                                                     //
			return charClass;                                                                                                 // 42
		}(),                                                                                                               // 42
                                                                                                                     //
		disableButton: function () {                                                                                       // 50
			function disableButton() {                                                                                        // 50
				if (Session.get('numChars') <= 0 || Session.get('numChars') > 140 || !Meteor.user()) {                           // 51
					return 'disabled';                                                                                              // 54
				}                                                                                                                // 55
			}                                                                                                                 // 56
                                                                                                                     //
			return disableButton;                                                                                             // 50
		}()                                                                                                                // 50
	});                                                                                                                 // 37
}                                                                                                                    // 58
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
  }()                                                                                                                // 11
});                                                                                                                  // 6
                                                                                                                     //
Template.tweetFeed.events({                                                                                          // 18
  'click #btnFav': function () {                                                                                     // 19
    function clickBtnFav() {                                                                                         // 19
      var currentUser = Session.get('currentUser');                                                                  // 20
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                              // 21
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                          //
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                         // 23
      var arrAux = userTapFav.idUserTapFav;                                                                          // 24
                                                                                                                     //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                     //
      if (arrAux.indexOf(idUser) === -1) {                                                                           // 27
        UserUtils.addFavToTwiit(this._id, idUser);                                                                   // 28
      } else {                                                                                                       // 29
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                              //
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                           //
        //LA OPERACION INVERSA                                                                                       //
        UserUtils.removeFavToTwiit(this._id, idUser);                                                                // 33
      }                                                                                                              // 34
    }                                                                                                                // 35
                                                                                                                     //
    return clickBtnFav;                                                                                              // 19
  }(),                                                                                                               // 19
  'click #btnComm': function () {                                                                                    // 36
    function clickBtnComm() {                                                                                        // 36
      if (!Session.get('notInRouteComment')) {                                                                       // 37
        $("#dialog-NewTwiit").modal();                                                                               // 38
        Session.set('commentMode', true);                                                                            // 39
      } else {                                                                                                       // 40
        //console.log(window.Router.routes);                                                                         //
        window.location = window.Router.routes.twiitCommentPage._path;                                               // 42
      }                                                                                                              // 43
    }                                                                                                                // 45
                                                                                                                     //
    return clickBtnComm;                                                                                             // 36
  }()                                                                                                                // 36
                                                                                                                     //
});                                                                                                                  // 18
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
  }()                                                                                                                // 14
});                                                                                                                  // 6
                                                                                                                     //
Template.tweetFeedProfile.events({                                                                                   // 21
  'click #btnFav': function () {                                                                                     // 22
    function clickBtnFav() {                                                                                         // 22
      var currentUser = Session.get('currentUser');                                                                  // 23
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                              // 24
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                          //
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                         // 26
      var arrAux = userTapFav.idUserTapFav;                                                                          // 27
                                                                                                                     //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                     //
      if (arrAux.indexOf(idUser) === -1) {                                                                           // 30
        UserUtils.addFavToTwiit(this._id, idUser);                                                                   // 31
      } else {                                                                                                       // 32
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                              //
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                           //
        //LA OPERACION INVERSA                                                                                       //
        UserUtils.removeFavToTwiit(this._id, idUser);                                                                // 36
      }                                                                                                              // 37
    }                                                                                                                // 38
                                                                                                                     //
    return clickBtnFav;                                                                                              // 22
  }(),                                                                                                               // 22
  'click #btnComm': function () {                                                                                    // 39
    function clickBtnComm() {                                                                                        // 39
      Session.set('commentMode', true);                                                                              // 40
      Session.set('currentTwiitUserTapToComment', this._id);                                                         // 41
    }                                                                                                                // 42
                                                                                                                     //
    return clickBtnComm;                                                                                             // 39
  }()                                                                                                                // 39
});                                                                                                                  // 21
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"twiitCommentPage.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/partialTemplates/twiitCommentPage.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.twiitCommentPage.onCreated(function () {                                                                    // 1
  this.subscribe('twitts');                                                                                          // 2
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
      var tweetInitialToComment = Twitts.find({}, { sort: { timestamp: -1 } });                                      // 12
      return tweetInitialToComment;                                                                                  // 13
    }                                                                                                                // 14
                                                                                                                     //
    return tweetMessage;                                                                                             // 8
  }(), /*	                                                                                                           // 8
       'tweetThatCommentMessage': function() {                                                                       //
       var tweet =  Twitts.find({twiitIdComment : tweetInitialToComment._id}, {sort: {timestamp: -1}} );             //
       console.log(tweet);                                                                                           //
       return tweet;                                                                                                 //
       },*/                                                                                                          //
  'convertDateTime': function () {                                                                                   // 20
    function convertDateTime() {                                                                                     // 20
      var dateNew = new Date(this.timestamp);                                                                        // 21
      var dateCon = dateNew.toLocaleString();                                                                        // 22
      return dateCon;                                                                                                // 23
    }                                                                                                                // 24
                                                                                                                     //
    return convertDateTime;                                                                                          // 20
  }()                                                                                                                // 20
});                                                                                                                  // 6
                                                                                                                     //
Template.twiitCommentPage.events({                                                                                   // 27
  'click #btnFav': function () {                                                                                     // 28
    function clickBtnFav() {                                                                                         // 28
      var currentUser = Session.get('currentUser');                                                                  // 29
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                              // 30
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                          //
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                         // 32
      var arrAux = userTapFav.idUserTapFav;                                                                          // 33
                                                                                                                     //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                     //
      if (arrAux.indexOf(idUser) === -1) {                                                                           // 36
        UserUtils.addFavToTwiit(this._id, idUser);                                                                   // 37
      } else {                                                                                                       // 38
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                              //
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                           //
        //LA OPERACION INVERSA                                                                                       //
        UserUtils.removeFavToTwiit(this._id, idUser);                                                                // 42
      }                                                                                                              // 43
    }                                                                                                                // 44
                                                                                                                     //
    return clickBtnFav;                                                                                              // 28
  }(),                                                                                                               // 28
  'click #btnComm': function () {                                                                                    // 45
    function clickBtnComm() {                                                                                        // 45
      $("#dialog-NewTwiit").modal();                                                                                 // 46
      Session.set('commentMode', true);                                                                              // 47
    }                                                                                                                // 48
                                                                                                                     //
    return clickBtnComm;                                                                                             // 45
  }()                                                                                                                // 45
});                                                                                                                  // 27
                                                                                                                     //
/* ESTE CACHO VA DENTRO DE twiitCommentPage PARA MOSTRAR LOS COMENTARIOS DEL TWIIT INICIAL                           //
                                                                                                                     //
        {{#each tweetThatCommentMessage}}                                                                            //
          <div class="panel panel-info"><!--Contenido de la cabecera + el mensaje del twiit-->                       //
            <div class="panel-heading"><!--Cabecera del twiit-->                                                     //
              <h3 class="panel-title">@{{this.user}} OLIKI                                                           //
                <span class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>                          //
                {{convertDateTime}}                                                                                  //
              </h3>                                                                                                  //
            </div><!--Cabecera del twiit-->                                                                          //
            <div class="panel-body"><!--Contenido del twiit-->                                                       //
              {{this.message}}                                                                                       //
            </div><!--Contenido del twiit-->                                                                         //
                                                                                                                     //
            <div class="btn-group" role="group" id="btnGroupInteractions">                                           //
              <button type="button" class="btn btn-secondary">                                                       //
                <span class="glyphicon glyphicon-bullhorn"></span>                                                   //
              </button>                                                                                              //
                                                                                                                     //
              <button type="button" id="btnComm" class="btn btn-secondary">                                          //
                <span class="glyphicon glyphicon-comment"></span>                                                    //
                <span class="badge-numFav badge">{{this.numComment}}</span>                                          //
              </button>                                                                                              //
                                                                                                                     //
              <button type="button" id="btnFav" class="btn btn-secondary">                                           //
                <span class="glyphicon glyphicon-heart"></span>                                                      //
                <span class="badge-numFav badge">{{this.numFav}}</span>                                              //
              </button>                                                                                              //
            </div>                                                                                                   //
          </div><!--Contenido de la cabecera + el mensaje del twiit-->                                               //
        {{/each}}                                                                                                    //
*/                                                                                                                   //
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
  this.subscribe('twitts');                                                                                          // 2
  this.subscribe('favs');                                                                                            // 3
  username = Session.get('currentUser');                                                                             // 4
  currentFollowings = UserUtils.findFollowings(username);                                                            // 5
  arrWithId = [];                                                                                                    // 6
});                                                                                                                  // 7
                                                                                                                     //
Template.twiitPageNew.helpers({                                                                                      // 9
  'convertDateTime': function () {                                                                                   // 10
    function convertDateTime() {                                                                                     // 10
      var dateNew = new Date(this.twiitTimeStamp);                                                                   // 11
      var dateCon = dateNew.toLocaleString();                                                                        // 12
      return dateCon;                                                                                                // 13
    }                                                                                                                // 14
                                                                                                                     //
    return convertDateTime;                                                                                          // 10
  }(),                                                                                                               // 10
                                                                                                                     //
  'tweetMessage': function () {                                                                                      // 16
    function tweetMessage() {                                                                                        // 16
      var notify = Notifications.find({ twiitNotifUserName: { $nin: currentFollowings }, read: false }, { sort: { twiitTimeStamp: -1 } });
      return notify;                                                                                                 // 18
    }                                                                                                                // 19
                                                                                                                     //
    return tweetMessage;                                                                                             // 16
  }(),                                                                                                               // 16
                                                                                                                     //
  'countNotifTwiit': function () {                                                                                   // 21
    function countNotifTwiit() {                                                                                     // 21
      var numNotif = UserUtils.findNumberNotif(username);                                                            // 22
      if (numNotif === 0) {                                                                                          // 23
        return false;                                                                                                // 24
      } else {                                                                                                       // 25
        return true;                                                                                                 // 26
      }                                                                                                              // 27
    }                                                                                                                // 28
                                                                                                                     //
    return countNotifTwiit;                                                                                          // 21
  }(),                                                                                                               // 21
                                                                                                                     //
  'saveIdInArr': function () {                                                                                       // 30
    function saveIdInArr() {                                                                                         // 30
      arrWithId.push(this._id);                                                                                      // 31
      console.log(arrWithId);                                                                                        // 32
    }                                                                                                                // 33
                                                                                                                     //
    return saveIdInArr;                                                                                              // 30
  }(),                                                                                                               // 30
                                                                                                                     //
  'numFavPerTwiit': function () {                                                                                    // 35
    function numFavPerTwiit() {                                                                                      // 35
      return UserUtils.findNumberFavPerTwiit(this.twiitId);                                                          // 36
    }                                                                                                                // 37
                                                                                                                     //
    return numFavPerTwiit;                                                                                           // 35
  }()                                                                                                                // 35
});                                                                                                                  // 9
                                                                                                                     //
Template.twiitPageNew.events({                                                                                       // 40
  'click #btnDismissNotif': function () {                                                                            // 41
    function clickBtnDismissNotif() {                                                                                // 41
      console.log(arrWithId);                                                                                        // 42
      for (var aux in meteorBabelHelpers.sanitizeForInObject(arrWithId)) {                                           // 43
        var id = arrWithId[aux];                                                                                     // 44
        Notifications.update(id, { $set: { read: true } });                                                          // 45
      }                                                                                                              // 46
      window.location = "/";                                                                                         // 47
    }                                                                                                                // 48
                                                                                                                     //
    return clickBtnDismissNotif;                                                                                     // 41
  }(),                                                                                                               // 41
  'click #btnFav': function () {                                                                                     // 49
    function clickBtnFav() {                                                                                         // 49
      var currentUser = Session.get('currentUser');                                                                  // 50
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                              // 51
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                          //
      var userTapFav = UserUtils.findFavsForTwiit(this.twiitId);                                                     // 53
      var arrAux = userTapFav.idUserTapFav;                                                                          // 54
                                                                                                                     //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                     //
      if (arrAux.indexOf(idUser) === -1) {                                                                           // 57
        UserUtils.addFavToTwiit(this.twiitId, idUser);                                                               // 58
      } else {                                                                                                       // 59
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                              //
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                           //
        //LA OPERACION INVERSA                                                                                       //
        UserUtils.removeFavToTwiit(this.twiitId, idUser);                                                            // 63
      }                                                                                                              // 64
    }                                                                                                                // 65
                                                                                                                     //
    return clickBtnFav;                                                                                              // 49
  }(),                                                                                                               // 49
  'click #btnComm': function () {                                                                                    // 66
    function clickBtnComm() {                                                                                        // 66
      Session.set('commentMode', true);                                                                              // 67
      Session.set('currentTwiitUserTapToComment', this._id);                                                         // 68
    }                                                                                                                // 69
                                                                                                                     //
    return clickBtnComm;                                                                                             // 66
  }()                                                                                                                // 66
});                                                                                                                  // 40
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
Router.route('/Comments', { name: 'twiitCommentPage' });                                                             // 11
/*SE ACCEDE POR PATHFOR*/                                                                                            //
Router.route('/twiits/:_id', {                                                                                       // 13
  name: 'twiitPage',                                                                                                 // 14
  data: function () {                                                                                                // 15
    function data() {                                                                                                // 15
      return this.params;                                                                                            // 16
    }                                                                                                                // 17
                                                                                                                     //
    return data;                                                                                                     // 15
  }()                                                                                                                // 15
});                                                                                                                  // 13
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
UserUtils.findNumComment = function (idTweet) {                                                                      // 111
  return Twitts.findOne({ _id: idTweet }).numComment;                                                                // 112
};                                                                                                                   // 113
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