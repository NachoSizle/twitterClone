var require = meteorInstall({"client":{"partialTemplates":{"template.followUsers.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/template.followUsers.js                                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("followUsers");                                                                             // 2
Template["followUsers"] = new Template("Template.followUsers", (function() {                                     // 3
  var view = this;                                                                                               // 4
  return HTML.FORM({                                                                                             // 5
    class: "form-inline"                                                                                         // 6
  }, HTML.Raw(' \n\t\t<input type="text" class="form-control" id="searchUser" placeholder="Search for user">\n\t\t<button type="submit" class="btn btn-info">Search</button>\n\n\t\t'), Blaze.If(function() {
    return Spacebars.call(view.lookup("foundUser"));                                                             // 8
  }, function() {                                                                                                // 9
    return [ "\n\t\t\t", HTML.DIV({                                                                              // 10
      class: "found-user"                                                                                        // 11
    }, "\n\t\t\t\t", HTML.BUTTON({                                                                               // 12
      type: "button",                                                                                            // 13
      class: "btn btn-default",                                                                                  // 14
      id: "follow"                                                                                               // 15
    }, "Follow @", Blaze.View("lookup:foundUser.username", function() {                                          // 16
      return Spacebars.mustache(Spacebars.dot(view.lookup("foundUser"), "username"));                            // 17
    })), "\n\t\t\t"), "\n\t\t" ];                                                                                // 18
  }), "\n  \t\n\t  \t", HTML.DIV({                                                                               // 19
    class: "recommend-users"                                                                                     // 20
  }, " \n\t\t  ", HTML.Raw("<h5>Who to follow:</h5>"), "\n\t\t  ", Blaze.Each(function() {                       // 21
    return Spacebars.call(view.lookup("recommendedUsers"));                                                      // 22
  }, function() {                                                                                                // 23
    return [ "\n\t\t    ", HTML.BUTTON({                                                                         // 24
      type: "button",                                                                                            // 25
      class: "btn btn-default",                                                                                  // 26
      id: "followRec"                                                                                            // 27
    }, "Follow @", Blaze.View("lookup:..username", function() {                                                  // 28
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "username"));                                    // 29
    })), "\n\t\t  " ];                                                                                           // 30
  }), "\n\t\t"), "\n\t\t\n\t");                                                                                  // 31
}));                                                                                                             // 32
                                                                                                                 // 33
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.loading.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/template.loading.js                                                                   //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("loading");                                                                                 // 2
Template["loading"] = new Template("Template.loading", (function() {                                             // 3
  var view = this;                                                                                               // 4
  return Spacebars.include(view.lookupTemplate("spinner"));                                                      // 5
}));                                                                                                             // 6
                                                                                                                 // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.navBarTemplate.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/template.navBarTemplate.js                                                            //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("navBarTemplate");                                                                          // 2
Template["navBarTemplate"] = new Template("Template.navBarTemplate", (function() {                               // 3
  var view = this;                                                                                               // 4
  return HTML.NAV({                                                                                              // 5
    class: "navbar navbar-default"                                                                               // 6
  }, "\n\t  ", HTML.DIV({                                                                                        // 7
    class: "container-fluid"                                                                                     // 8
  }, "\n\t    ", HTML.Raw("<!-- Brand and toggle get grouped for better mobile display -->"), "\n\t    ", HTML.Raw('<div class="navbar-header">\n\t      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n\t        <span class="sr-only">Toggle navigation</span>\n\t        <span class="icon-bar"></span>\n\t        <span class="icon-bar"></span>\n\t        <span class="icon-bar"></span>\n\t      </button>\n\t      <!--\n\t      EN LA ETIQUETA DE SRC, SE PONDRA EL NOMBRE DEL USUARIO ACTUAL\n          <img id="imgCurrentUser" src="/{{currentUser.username}}.png" class="img-responsive">\n          A MODO DE EJEMPLO, VAMOS A UTILIZAR UNO GENERICO PARA QUE CARGUE EN CUALQUIER USUARIO\n          <a class="navbar-brand" href="/">twiiterClone</a>\n          -->\n          <div class="row">\n            <!--CONTENIDO DE LA PARTE IZQUIERDA DEL PERFIL DEL USUARIO-->\n            <div id="leftDivCurrentUser">\n              <!--EN LA ETIQUETA DE SRC, SE PONDRA EL NOMBRE DEL USUARIO ACTUAL\n              <img id="imgCurrentUser" src="/{{currentUser.username}}.png" class="img-responsive">\n              A MODO DE EJEMPLO, VAMOS A UTILIZAR UNO GENERICO PARA QUE CARGUE EN CUALQUIER USUARIO-->\n              <img id="imgProfile" src="/imgProfile/squirtle.png" class="img-responsive">\n            </div>\n            <!--CONTENIDO DE LA PARTE DERECHA DEL PERFIL DEL USUARIO-->\n            <div id="centerDivCurrentUser">\n              <img id="imgLogTwiiterClone" src="/imgLogTwiiterClone.png" class="img-responsive">\n            </div>\n          </div>\n\t      \n\t    </div>'), "\n\n\t\t", HTML.Raw("<!--PARTE DERECHA DE LA BARRA DE NAVEGACION-->"), "\n\t\t", HTML.DIV({
    class: "nav navbar-nav navbar-right"                                                                         // 10
  }, "\n\t\t\t", HTML.UL("\n\t\t\t\t", HTML.LI({                                                                 // 11
    class: "dropdown"                                                                                            // 12
  }, "\n\t\t            ", Spacebars.include(view.lookupTemplate("notifications")), "\n\t          \t"), "\n          \t"), "\n\t\t"), "\n\n\t    ", HTML.Raw('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n\t      <ul class="nav navbar-nav">\n\t        <li><a href="/whoToFollow" id="recommendationsBtn">A quien seguir</a></li>\n\t      </ul>\n\t      <!-- INPUT DE BUSQUEDA\n\t      <form class="navbar-form navbar-left">\n\t        <div class="form-group">\n\t          <input type="text" class="form-control" placeholder="Search">\n\t        </div>\n\t        <button type="submit" class="btn btn-default">Submit</button>\n\t      </form>\n\t      -->\n\t      <ul class="nav navbar-nav navbar-right">\n\t        <li class="dropdown">\n\t          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\n\t          <ul class="dropdown-menu">\n\t            <li><a href="#">Action</a></li>\n\t            <li><a href="#">Another action</a></li>\n\t            <li><a href="#">Something else here</a></li>\n\t            <li role="separator" class="divider"></li>\n\t            <li><a href="#">Separated link</a></li>\n\t          </ul>\n\t        </li>\n\t      </ul>\n\t    </div>'), "\n\t  "), "\n\t");
}));                                                                                                             // 14
                                                                                                                 // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.not_found.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/template.not_found.js                                                                 //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("notFound");                                                                                // 2
Template["notFound"] = new Template("Template.notFound", (function() {                                           // 3
  var view = this;                                                                                               // 4
  return HTML.Raw('<div class="not-found page jumbotron">\n    <h2>404</h2>\n    <p>Sorry, we couldn\'t find a page at this address.</p>\n  </div>');
}));                                                                                                             // 6
                                                                                                                 // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.notifications.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/template.notifications.js                                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("notifications");                                                                           // 2
Template["notifications"] = new Template("Template.notifications", (function() {                                 // 3
  var view = this;                                                                                               // 4
  return [ HTML.A({                                                                                              // 5
    href: "#",                                                                                                   // 6
    class: "dropdown-toggle",                                                                                    // 7
    "data-toggle": "dropdown"                                                                                    // 8
  }, "\n    Notifications\n    ", Blaze.If(function() {                                                          // 9
    return Spacebars.call(view.lookup("notificationCount"));                                                     // 10
  }, function() {                                                                                                // 11
    return [ "\n      ", HTML.SPAN({                                                                             // 12
      class: "badge badge-inverse"                                                                               // 13
    }, Blaze.View("lookup:notificationCount", function() {                                                       // 14
      return Spacebars.mustache(view.lookup("notificationCount"));                                               // 15
    })), "\n    " ];                                                                                             // 16
  }), "\n    ", HTML.Raw('<b class="caret"></b>'), "\n  "), "\n  ", HTML.UL({                                    // 17
    class: "notification dropdown-menu"                                                                          // 18
  }, "\n    ", Blaze.If(function() {                                                                             // 19
    return Spacebars.call(view.lookup("notificationCount"));                                                     // 20
  }, function() {                                                                                                // 21
    return [ "\n      ", Blaze.Each(function() {                                                                 // 22
      return Spacebars.call(view.lookup("notifications"));                                                       // 23
    }, function() {                                                                                              // 24
      return [ "\n        ", Spacebars.include(view.lookupTemplate("notificationItem")), "\n      " ];           // 25
    }), "\n    " ];                                                                                              // 26
  }, function() {                                                                                                // 27
    return [ "\n      ", HTML.LI(HTML.SPAN("No Notifications")), "\n    " ];                                     // 28
  }), "\n  ") ];                                                                                                 // 29
}));                                                                                                             // 30
                                                                                                                 // 31
Template.__checkName("notificationItem");                                                                        // 32
Template["notificationItem"] = new Template("Template.notificationItem", (function() {                           // 33
  var view = this;                                                                                               // 34
  return HTML.LI("\n    ", HTML.A({                                                                              // 35
    href: function() {                                                                                           // 36
      return Spacebars.mustache(view.lookup("pathFor"), "twiitPage");                                            // 37
    }                                                                                                            // 38
  }, "\n      ", HTML.STRONG(Blaze.View("lookup:twiitNotifUserName", function() {                                // 39
    return Spacebars.mustache(view.lookup("twiitNotifUserName"));                                                // 40
  })), " ha twiiteado\n    "), "\n  ");                                                                          // 41
}));                                                                                                             // 42
                                                                                                                 // 43
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.tweetBox.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/template.tweetBox.js                                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("tweetBox");                                                                                // 2
Template["tweetBox"] = new Template("Template.tweetBox", (function() {                                           // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    class: "tweetbox-container"                                                                                  // 6
  }, "\n    ", HTML.DIV({                                                                                        // 7
    class: "panel panel-default tweetbox col-md-6"                                                               // 8
  }, "\n      ", HTML.DIV({                                                                                      // 9
    class: "panel-body"                                                                                          // 10
  }, "\n        ", HTML.Raw("<!--Caja para el texto del twitt -->"), "\n      ", HTML.TEXTAREA({                 // 11
    class: "form-control",                                                                                       // 12
    id: "tweetText",                                                                                             // 13
    placeholder: "¿Qué te cuentas?",                                                                             // 14
    rows: "3"                                                                                                    // 15
  }), "\n          ", HTML.Raw("<!--Contador y botón-->"), "\n        ", HTML.DIV({                              // 16
    class: "pull-right btnGroup"                                                                                 // 17
  }, "\n          ", HTML.STRONG({                                                                               // 18
    class: function() {                                                                                          // 19
      return Spacebars.mustache(view.lookup("charClass"));                                                       // 20
    }                                                                                                            // 21
  }, Blaze.View("lookup:charCount", function() {                                                                 // 22
    return Spacebars.mustache(view.lookup("charCount"));                                                         // 23
  })), "\n          ", Blaze.If(function() {                                                                     // 24
    return Spacebars.call(view.lookup("currentUser"));                                                           // 25
  }, function() {                                                                                                // 26
    return [ "\n            ", HTML.BUTTON(HTML.Attrs({                                                          // 27
      class: "btn btn-info pull-right",                                                                          // 28
      type: "button"                                                                                             // 29
    }, function() {                                                                                              // 30
      return Spacebars.attrMustache(view.lookup("disableButton"));                                               // 31
    }), "Twittear"), "\n          " ];                                                                           // 32
  }, function() {                                                                                                // 33
    return [ "\n            ", HTML.BUTTON({                                                                     // 34
      class: "btn btn-info pull-right",                                                                          // 35
      type: "button",                                                                                            // 36
      disabled: ""                                                                                               // 37
    }, "Por favor inicia sesión"), "\n          " ];                                                             // 38
  }), "\n        "), "\n      "), "\n    "), "\n  ");                                                            // 39
}));                                                                                                             // 40
                                                                                                                 // 41
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.tweetFeed.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/template.tweetFeed.js                                                                 //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("tweetFeed");                                                                               // 2
Template["tweetFeed"] = new Template("Template.tweetFeed", (function() {                                         // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    class: "tweetfeed-container"                                                                                 // 6
  }, "\n    ", HTML.DIV({                                                                                        // 7
    class: "panel panel-default tweetfeed"                                                                       // 8
  }, "\n      ", HTML.DIV({                                                                                      // 9
    class: "panel-body"                                                                                          // 10
  }, "\n        ", HTML.Raw("<!-- Texto para el contenido del Twitt -->"), "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("tweetMessage"));                                                          // 12
  }, function() {                                                                                                // 13
    return [ "\n          ", HTML.DIV({                                                                          // 14
      class: "panel panel-info"                                                                                  // 15
    }, "\n            ", HTML.DIV({                                                                              // 16
      class: "panel-heading"                                                                                     // 17
    }, "\n              ", HTML.H3({                                                                             // 18
      class: "panel-title"                                                                                       // 19
    }, "@", Blaze.View("lookup:..user", function() {                                                             // 20
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                        // 21
    }), " \n                ", HTML.SPAN({                                                                       // 22
      class: "glyphicon glyphicon-triangle-right",                                                               // 23
      "aria-hidden": "true"                                                                                      // 24
    }), "\n                 ", Blaze.View("lookup:convertDateTime", function() {                                 // 25
      return Spacebars.mustache(view.lookup("convertDateTime"));                                                 // 26
    }), "\n               "), "\n            "), "\n            ", HTML.DIV({                                    // 27
      class: "panel-body"                                                                                        // 28
    }, "\n              ", Blaze.View("lookup:..message", function() {                                           // 29
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                     // 30
    }), "\n            "), "\n          "), "\n        " ];                                                      // 31
  }), "\n      "), "\n    "), "\n  ");                                                                           // 32
}));                                                                                                             // 33
                                                                                                                 // 34
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.tweetFeedProfile.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/template.tweetFeedProfile.js                                                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("tweetFeedProfile");                                                                        // 2
Template["tweetFeedProfile"] = new Template("Template.tweetFeedProfile", (function() {                           // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    class: "tweetfeed-container"                                                                                 // 6
  }, "\n    ", HTML.DIV({                                                                                        // 7
    class: "panel panel-default tweetfeed"                                                                       // 8
  }, "\n      ", HTML.DIV({                                                                                      // 9
    class: "panel-body"                                                                                          // 10
  }, "\n        ", HTML.Raw("<!-- Texto para el contenido del Twitt -->"), "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("tweetMessageProfile"));                                                   // 12
  }, function() {                                                                                                // 13
    return [ "\n          ", HTML.DIV({                                                                          // 14
      class: "panel panel-info"                                                                                  // 15
    }, "\n            ", HTML.DIV({                                                                              // 16
      class: "panel-heading"                                                                                     // 17
    }, "\n              ", HTML.H3({                                                                             // 18
      class: "panel-title"                                                                                       // 19
    }, "@", Blaze.View("lookup:..user", function() {                                                             // 20
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                        // 21
    }), " \n                ", HTML.SPAN({                                                                       // 22
      class: "glyphicon glyphicon-triangle-right",                                                               // 23
      "aria-hidden": "true"                                                                                      // 24
    }), "\n                 ", Blaze.View("lookup:convertDateTime", function() {                                 // 25
      return Spacebars.mustache(view.lookup("convertDateTime"));                                                 // 26
    }), "\n               "), "\n            "), "\n            ", HTML.DIV({                                    // 27
      class: "panel-body"                                                                                        // 28
    }, "\n              ", Blaze.View("lookup:..message", function() {                                           // 29
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                     // 30
    }), "\n            "), "\n          "), "\n        " ];                                                      // 31
  }), "\n      "), "\n    "), "\n  ");                                                                           // 32
}));                                                                                                             // 33
                                                                                                                 // 34
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.twiitPage.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/template.twiitPage.js                                                                 //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("twiitPage");                                                                               // 2
Template["twiitPage"] = new Template("Template.twiitPage", (function() {                                         // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    class: "tweetfeed-container"                                                                                 // 6
  }, "\n    ", HTML.DIV({                                                                                        // 7
    class: "panel panel-default tweetfeed"                                                                       // 8
  }, "\n      ", HTML.DIV({                                                                                      // 9
    class: "panel-body"                                                                                          // 10
  }, "\n        ", HTML.Raw("<!-- Texto para el contenido del Twitt -->"), "\n        ", Blaze.If(function() {   // 11
    return Spacebars.call(view.lookup("countNotifTwiit"));                                                       // 12
  }, function() {                                                                                                // 13
    return [ "\n          ", Blaze.Each(function() {                                                             // 14
      return Spacebars.call(view.lookup("tweetMessage"));                                                        // 15
    }, function() {                                                                                              // 16
      return [ "\n            ", HTML.DIV({                                                                      // 17
        class: "panel panel-info"                                                                                // 18
      }, "\n              ", HTML.DIV({                                                                          // 19
        class: "panel-heading"                                                                                   // 20
      }, "\n                ", HTML.H3({                                                                         // 21
        class: "panel-title"                                                                                     // 22
      }, "@", Blaze.View("lookup:..twiitNotifUserName", function() {                                             // 23
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitNotifUserName"));                        // 24
      }), " \n                  ", HTML.SPAN({                                                                   // 25
        class: "glyphicon glyphicon-triangle-right",                                                             // 26
        "aria-hidden": "true"                                                                                    // 27
      }), "\n                   ", Blaze.View("lookup:convertDateTime", function() {                             // 28
        return Spacebars.mustache(view.lookup("convertDateTime"));                                               // 29
      }), "\n                 "), "\n              "), "\n              ", HTML.DIV({                            // 30
        class: "panel-body"                                                                                      // 31
      }, "\n                ", Blaze.View("lookup:..twiitMessage", function() {                                  // 32
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitMessage"));                              // 33
      }), "\n              "), "\n            "), "\n          " ];                                              // 34
    }), "\n           ", HTML.BUTTON({                                                                           // 35
      class: "btn btn-info pull-right",                                                                          // 36
      type: "button"                                                                                             // 37
    }, "OK"), "\n        " ];                                                                                    // 38
  }, function() {                                                                                                // 39
    return [ "\n          ", HTML.DIV({                                                                          // 40
      class: "panel-info"                                                                                        // 41
    }, "\n            ", HTML.P("Oooooooops"), "    \n          "), "\n        " ];                              // 42
  }), "\n      "), "\n    "), "\n  ");                                                                           // 43
}));                                                                                                             // 44
                                                                                                                 // 45
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.userManagement.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/template.userManagement.js                                                            //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("userManagement");                                                                          // 2
Template["userManagement"] = new Template("Template.userManagement", (function() {                               // 3
  var view = this;                                                                                               // 4
  return Blaze.If(function() {                                                                                   // 5
    return Spacebars.call(view.lookup("recommendations"));                                                       // 6
  }, function() {                                                                                                // 7
    return [ "\n    ", HTML.DIV({                                                                                // 8
      id: "divFollowUsers",                                                                                      // 9
      class: "col-md-8 col-sm-8 col-lg-2"                                                                        // 10
    }, Spacebars.include(view.lookupTemplate("followUsers"))), "\n  " ];                                         // 11
  }, function() {                                                                                                // 12
    return [ "\n  ", Blaze.If(function() {                                                                       // 13
      return Spacebars.call(view.lookup("currentUser"));                                                         // 14
    }, function() {                                                                                              // 15
      return [ "\n    ", HTML.DIV({                                                                              // 16
        id: "divTweetBox",                                                                                       // 17
        class: "col-md-8 col-sm-8"                                                                               // 18
      }, Spacebars.include(view.lookupTemplate("tweetBox"))), "\n    ", HTML.DIV({                               // 19
        id: "divTweetFeed",                                                                                      // 20
        class: "col-md-8 col-sm-8"                                                                               // 21
      }, Spacebars.include(view.lookupTemplate("tweetFeed"))), "\n  " ];                                         // 22
    }, function() {                                                                                              // 23
      return [ "\n    ", HTML.DIV({                                                                              // 24
        class: "user-container"                                                                                  // 25
      }, "\n      ", HTML.DIV({                                                                                  // 26
        class: "panel panel-default userBox"                                                                     // 27
      }, "\n        ", HTML.DIV({                                                                                // 28
        class: "panel-body"                                                                                      // 29
      }, "\n          ", HTML.Comment("módulo de acceso "), "\n          ", HTML.H4("¿Ya tienes una cuenta?"), "\n          ", HTML.DIV({
        class: "form-group"                                                                                      // 31
      }, "\n            ", HTML.INPUT({                                                                          // 32
        class: "form-control input-sm",                                                                          // 33
        id: "login-username",                                                                                    // 34
        placeholder: "Nombre de Usuario"                                                                         // 35
      }), "\n            ", HTML.INPUT({                                                                         // 36
        class: "form-control input-sm",                                                                          // 37
        id: "login-password",                                                                                    // 38
        placeholder: "Contraseña",                                                                               // 39
        type: "password"                                                                                         // 40
      }), "\n          "), "\n\n          ", HTML.BUTTON({                                                       // 41
        type: "button",                                                                                          // 42
        class: "btn btn-info fullbutton login",                                                                  // 43
        id: "login"                                                                                              // 44
      }, "Acceder"), "\n\n          ", HTML.Comment("módulo de registro"), "\n          ", HTML.H4("¿Nuevo por aquí?"), "\n          ", HTML.DIV({
        class: "form-group"                                                                                      // 46
      }, "\n            ", HTML.INPUT({                                                                          // 47
        class: "form-control input-sm",                                                                          // 48
        id: "signup-username",                                                                                   // 49
        placeholder: "Nombre de Usuario"                                                                         // 50
      }), "\n            ", HTML.INPUT({                                                                         // 51
        class: "form-control input-sm",                                                                          // 52
        id: "signup-fullname",                                                                                   // 53
        placeholder: "Apellido (Opcional)"                                                                       // 54
      }), "\n            ", HTML.INPUT({                                                                         // 55
        class: "form-control input-sm",                                                                          // 56
        id: "signup-password",                                                                                   // 57
        placeholder: "Contraseña",                                                                               // 58
        type: "password"                                                                                         // 59
      }), "\n          "), "\n          ", HTML.BUTTON({                                                         // 60
        type: "button",                                                                                          // 61
        class: "btn btn-info fullbutton",                                                                        // 62
        id: "signup"                                                                                             // 63
      }, "Regístrate"), " \n        "), "\n      "), "\n    "), "\n  " ];                                        // 64
    }), " \n  " ];                                                                                               // 65
  });                                                                                                            // 66
}));                                                                                                             // 67
                                                                                                                 // 68
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.userProfile.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/template.userProfile.js                                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("userProfile");                                                                             // 2
Template["userProfile"] = new Template("Template.userProfile", (function() {                                     // 3
  var view = this;                                                                                               // 4
  return Blaze.If(function() {                                                                                   // 5
    return Spacebars.call(view.lookup("currentUser"));                                                           // 6
  }, function() {                                                                                                // 7
    return [ "\n    ", HTML.DIV({                                                                                // 8
      class: "user-container"                                                                                    // 9
    }, "\n      ", HTML.DIV({                                                                                    // 10
      class: "panel panel-default userBox"                                                                       // 11
    }, "\n        ", HTML.DIV({                                                                                  // 12
      class: "panel-body"                                                                                        // 13
    }, "\n          ", HTML.Comment("Mensaje para el usuario registrado"), "\n          ", HTML.DIV({            // 14
      class: "row"                                                                                               // 15
    }, "\n            ", HTML.Comment("CONTENIDO DE LA PARTE IZQUIERDA DEL PERFIL DEL USUARIO"), "\n            ", HTML.DIV({
      id: "leftDivCurrentUser"                                                                                   // 17
    }, "\n              ", HTML.Comment('EN LA ETIQUETA DE SRC, SE PONDRA EL NOMBRE DEL USUARIO ACTUAL\n              <img id="imgCurrentUser" src="/{{currentUser.username}}.png" class="img-responsive">\n              A MODO DE EJEMPLO, VAMOS A UTILIZAR UNO GENERICO PARA QUE CARGUE EN CUALQUIER USUARIO'), "\n              ", HTML.IMG({
      id: "imgCurrentUser",                                                                                      // 19
      src: "/squirtle.png",                                                                                      // 20
      class: "img-responsive"                                                                                    // 21
    }), "\n            "), "\n            ", HTML.Comment("CONTENIDO DE LA PARTE DERECHA DEL PERFIL DEL USUARIO"), "\n            ", HTML.DIV({
      id: "rightDivCurrentUser"                                                                                  // 23
    }, "\n              20. Una persona que me cambió la vida y siempre me enseñará cosas! Instagram: NachoSizles Vine: NachoSizle\n            "), "\n          "), "\n          ", HTML.H3(HTML.STRONG(Blaze.View("lookup:currentUser.username", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "username"));                          // 25
    }))), "\n          ", HTML.H5("@", Blaze.View("lookup:currentUser.username", function() {                    // 26
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "username"));                          // 27
    })), "\n          ", HTML.BUTTON({                                                                           // 28
      type: "button",                                                                                            // 29
      class: "btn btn-info fullbutton",                                                                          // 30
      id: "logout"                                                                                               // 31
    }, "Salir"), "\n          ", HTML.TABLE({                                                                    // 32
      class: "table"                                                                                             // 33
    }, "  \n            ", HTML.TR("\n              ", HTML.TD({                                                 // 34
      class: "tableHeader"                                                                                       // 35
    }, "Twitts"), "\n              ", HTML.TD({                                                                  // 36
      class: "tableHeader"                                                                                       // 37
    }, "Siguiendo"), "\n              ", HTML.TD({                                                               // 38
      class: "tableHeader"                                                                                       // 39
    }, "Seguidores"), "\n            "), "\n            ", HTML.TR("\n              ", HTML.TD({                 // 40
      class: "tableContent"                                                                                      // 41
    }, Blaze.View("lookup:tweets", function() {                                                                  // 42
      return Spacebars.mustache(view.lookup("tweets"), Spacebars.dot(view.lookup("currentUser"), "username"));   // 43
    })), "\n              ", HTML.TD({                                                                           // 44
      class: "tableContent"                                                                                      // 45
    }, Blaze.View("lookup:following", function() {                                                               // 46
      return Spacebars.mustache(view.lookup("following"));                                                       // 47
    })), "\n              ", HTML.TD({                                                                           // 48
      class: "tableContent"                                                                                      // 49
    }, Blaze.View("lookup:followers", function() {                                                               // 50
      return Spacebars.mustache(view.lookup("followers"));                                                       // 51
    })), "\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n    ", HTML.DIV({         // 52
      id: "divTweetFeed",                                                                                        // 53
      class: "col-md-8 col-sm-8"                                                                                 // 54
    }, Spacebars.include(view.lookupTemplate("tweetFeedProfile"))), "\n  " ];                                    // 55
  });                                                                                                            // 56
}));                                                                                                             // 57
                                                                                                                 // 58
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"followUsers.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/followUsers.js                                                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.followUsers.events({                                                                                    // 1
  'submit form': function () {                                                                                   // 2
    function submitForm(event) {                                                                                 // 2
                                                                                                                 //
      var searchUser = event.target.searchUser.value;                                                            // 4
      var foundUser = Meteor.call('findUser', searchUser, function (err, res) {                                  // 5
        if (res) Session.set('foundUser', res);                                                                  // 6
      });                                                                                                        // 7
      return false;                                                                                              // 8
    }                                                                                                            // 9
                                                                                                                 //
    return submitForm;                                                                                           // 2
  }(),                                                                                                           // 2
                                                                                                                 //
  'click #follow': function () {                                                                                 // 11
    function clickFollow() {                                                                                     // 11
      Meteor.call('followUser', Session.get('foundUser').username);                                              // 12
    }                                                                                                            // 13
                                                                                                                 //
    return clickFollow;                                                                                          // 11
  }(),                                                                                                           // 11
                                                                                                                 //
  'click #followRec': function () {                                                                              // 15
    function clickFollowRec(event) {                                                                             // 15
      Meteor.call('followUser', this.username);                                                                  // 16
    }                                                                                                            // 17
                                                                                                                 //
    return clickFollowRec;                                                                                       // 15
  }()                                                                                                            // 15
});                                                                                                              // 1
                                                                                                                 //
Template.followUsers.helpers({                                                                                   // 20
  'foundUser': function () {                                                                                     // 21
    function foundUser() {                                                                                       // 21
      return Session.get('foundUser');                                                                           // 22
    }                                                                                                            // 23
                                                                                                                 //
    return foundUser;                                                                                            // 21
  }(),                                                                                                           // 21
                                                                                                                 //
  'recommendedUsers': function () {                                                                              // 25
    function recommendedUsers() {                                                                                // 25
      return Session.get('recommendedUsers');                                                                    // 26
    }                                                                                                            // 27
                                                                                                                 //
    return recommendedUsers;                                                                                     // 25
  }()                                                                                                            // 25
});                                                                                                              // 20
                                                                                                                 //
Template.followUsers.onRendered(function () {                                                                    // 31
  Meteor.call('recommendUsers', function (err, res) {                                                            // 32
    Session.set('recommendedUsers', res);                                                                        // 33
  });                                                                                                            // 34
});                                                                                                              // 35
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"navBarTemplate.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/navBarTemplate.js                                                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.navBarTemplate.events({                                                                                 // 1
	'click #recommendationsBtn': function () {                                                                      // 2
		function clickRecommendationsBtn() {                                                                           // 2
			//console.log("A quien seguir");                                                                              //
		}                                                                                                              // 4
                                                                                                                 //
		return clickRecommendationsBtn;                                                                                // 2
	}(),                                                                                                            // 2
	'click #imgProfile': function () {                                                                              // 5
		function clickImgProfile() {                                                                                   // 5
			window.location = "/myProfile";                                                                               // 6
		}                                                                                                              // 7
                                                                                                                 //
		return clickImgProfile;                                                                                        // 5
	}(),                                                                                                            // 5
	'click #imgLogTwiiterClone': function () {                                                                      // 8
		function clickImgLogTwiiterClone() {                                                                           // 8
			window.location = "/";                                                                                        // 9
		}                                                                                                              // 10
                                                                                                                 //
		return clickImgLogTwiiterClone;                                                                                // 8
	}()                                                                                                             // 8
});                                                                                                              // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notifications.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/notifications.js                                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.notifications.onCreated(function () {                                                                   // 1
  //console.log("Usuario: ");                                                                                    //
  //console.log(Meteor.user().username);                                                                         //
  Meteor.subscribe('notifications', Meteor.user().username);                                                     // 4
});                                                                                                              // 5
                                                                                                                 //
Template.notifications.helpers({                                                                                 // 7
  notifications: function () {                                                                                   // 8
    function notifications() {                                                                                   // 8
      followings = UserUtils.findFollowings(Meteor.user().username);                                             // 9
      return Notifications.find({ twiitNotifUserName: { $nin: followings }, read: false });                      // 10
    }                                                                                                            // 11
                                                                                                                 //
    return notifications;                                                                                        // 8
  }(),                                                                                                           // 8
  notificationCount: function () {                                                                               // 12
    function notificationCount() {                                                                               // 12
      var followings = UserUtils.findFollowings(Meteor.user().username);                                         // 13
      return Notifications.find({ twiitNotifUserName: { $nin: followings }, read: false }).count();              // 14
    }                                                                                                            // 15
                                                                                                                 //
    return notificationCount;                                                                                    // 12
  }()                                                                                                            // 12
});                                                                                                              // 7
                                                                                                                 //
/*                                                                                                               //
Template.notificationItem.helpers({                                                                              //
  notificationTwiitPath: function() {                                                                            //
    var path = this.twiitId;                                                                                     //
    console.log(path);                                                                                           //
    return path;                                                                                                 //
  }                                                                                                              //
});                                                                                                              //
                                                                                                                 //
                                                                                                                 //
Template.notificationItem.events({                                                                               //
  'click a': function() {                                                                                        //
    Notifications.update(this._id, {$set: {read: true}});                                                        //
  }                                                                                                              //
});                                                                                                              //
*/                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweetBox.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/tweetBox.js                                                                           //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
//DETECTAMOS QUE SE ENCUENTRA EN EL CLIENTE EL CODIGO QUE SE VA  AEJECUTAR                                       //
if (Meteor.isClient) {                                                                                           // 2
                                                                                                                 //
	Template.tweetBox.onRendered(function () {                                                                      // 4
		Session.set('numChars', 0);                                                                                    // 5
	});                                                                                                             // 6
                                                                                                                 //
	Template.tweetBox.events({                                                                                      // 8
		'input #tweetText': function () {                                                                              // 9
			function inputTweetText() {                                                                                   // 9
				Session.set('numChars', $('#tweetText').val().length);                                                       // 10
			}                                                                                                             // 11
                                                                                                                 //
			return inputTweetText;                                                                                        // 9
		}(),                                                                                                           // 9
		'click button': function () {                                                                                  // 12
			function clickButton() {                                                                                      // 12
				var tweet = $('#tweetText').val();                                                                           // 13
				$('#tweetText').val("");                                                                                     // 14
				Session.set('numChars', 0);                                                                                  // 15
				Meteor.call('insertTweet', tweet);                                                                           // 16
				//Twitts.insert({message: twitt, user: Meteor.user().username});                                             //
				//UNA VEZ QUE INSERTAMOS EL TWEET HACE FALTA AVISAR A METEOR DE QUE HEMOS METIDO UN NUEVO TWEET              //
				//PARA ELLO BASTA CON FORZAR LA REACTIVIDAD                                                                  //
				if (UserUtils.observerProperties()) {                                                                        // 20
					console.log("Se han detectado cambios");                                                                    // 21
				};                                                                                                           // 22
			}                                                                                                             // 23
                                                                                                                 //
			return clickButton;                                                                                           // 12
		}()                                                                                                            // 12
	});                                                                                                             // 8
                                                                                                                 //
	Template.tweetBox.helpers({                                                                                     // 27
		charCount: function () {                                                                                       // 28
			function charCount() {                                                                                        // 28
				return 140 - Session.get('numChars');                                                                        // 29
			}                                                                                                             // 30
                                                                                                                 //
			return charCount;                                                                                             // 28
		}(),                                                                                                           // 28
                                                                                                                 //
		charClass: function () {                                                                                       // 32
			function charClass() {                                                                                        // 32
				if (Session.get('numChars') > 140) {                                                                         // 33
					return 'errCharCount'; // o el nombre que le disteis en el fichero css                                      // 34
				} else {                                                                                                     // 35
						return 'charCount'; //o el nombre que le disteis en el fichero css                                         // 36
					}                                                                                                           // 37
			}                                                                                                             // 38
                                                                                                                 //
			return charClass;                                                                                             // 32
		}(),                                                                                                           // 32
                                                                                                                 //
		disableButton: function () {                                                                                   // 40
			function disableButton() {                                                                                    // 40
				if (Session.get('numChars') <= 0 || Session.get('numChars') > 140 || !Meteor.user()) {                       // 41
					return 'disabled';                                                                                          // 44
				}                                                                                                            // 45
			}                                                                                                             // 46
                                                                                                                 //
			return disableButton;                                                                                         // 40
		}()                                                                                                            // 40
	});                                                                                                             // 27
}                                                                                                                // 48
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweetFeed.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/tweetFeed.js                                                                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.tweetFeed.onCreated(function () {                                                                       // 1
  this.subscribe('twitts');                                                                                      // 2
});                                                                                                              // 3
                                                                                                                 //
Template.tweetFeed.helpers({                                                                                     // 5
  'tweetMessage': function () {                                                                                  // 6
    function tweetMessage() {                                                                                    // 6
      var tweet = Twitts.find({}, {                                                                              // 7
        sort: { timestamp: -1 },                                                                                 // 8
        limit: 10                                                                                                // 9
      });                                                                                                        // 7
      return tweet;                                                                                              // 11
    }                                                                                                            // 12
                                                                                                                 //
    return tweetMessage;                                                                                         // 6
  }()                                                                                                            // 6
});                                                                                                              // 5
                                                                                                                 //
Template.tweetFeed.helpers({                                                                                     // 15
  'convertDateTime': function () {                                                                               // 16
    function convertDateTime() {                                                                                 // 16
      var dateNew = new Date(this.timestamp);                                                                    // 17
      var dateCon = dateNew.toLocaleString();                                                                    // 18
      return dateCon;                                                                                            // 19
    }                                                                                                            // 20
                                                                                                                 //
    return convertDateTime;                                                                                      // 16
  }()                                                                                                            // 16
});                                                                                                              // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweetFeedProfile.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/tweetFeedProfile.js                                                                   //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.tweetFeedProfile.onCreated(function () {                                                                // 1
  this.subscribe('twittsProfile');                                                                               // 2
});                                                                                                              // 3
                                                                                                                 //
Template.tweetFeedProfile.helpers({                                                                              // 5
  'tweetMessageProfile': function () {                                                                           // 6
    function tweetMessageProfile() {                                                                             // 6
      var tweet = Twitts.find({}, {                                                                              // 7
        sort: { timestamp: -1 },                                                                                 // 8
        limit: 10                                                                                                // 9
      });                                                                                                        // 7
      return tweet;                                                                                              // 11
    }                                                                                                            // 12
                                                                                                                 //
    return tweetMessageProfile;                                                                                  // 6
  }()                                                                                                            // 6
});                                                                                                              // 5
                                                                                                                 //
Template.tweetFeedProfile.helpers({                                                                              // 15
  'convertDateTime': function () {                                                                               // 16
    function convertDateTime() {                                                                                 // 16
      var dateNew = new Date(this.timestamp);                                                                    // 17
      var dateCon = dateNew.toLocaleString();                                                                    // 18
      return dateCon;                                                                                            // 19
    }                                                                                                            // 20
                                                                                                                 //
    return convertDateTime;                                                                                      // 16
  }()                                                                                                            // 16
});                                                                                                              // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"twiitPage.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/twiitPage.js                                                                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.twiitPage.helpers({                                                                                     // 1
  'convertDateTime': function () {                                                                               // 2
    function convertDateTime() {                                                                                 // 2
      var dateNew = new Date(this.twiitTimeStamp);                                                               // 3
      var dateCon = dateNew.toLocaleString();                                                                    // 4
      return dateCon;                                                                                            // 5
    }                                                                                                            // 6
                                                                                                                 //
    return convertDateTime;                                                                                      // 2
  }(),                                                                                                           // 2
                                                                                                                 //
  'tweetMessage': function () {                                                                                  // 8
    function tweetMessage() {                                                                                    // 8
      console.log(this._id);                                                                                     // 9
      var notify = Notifications.find({ _id: this._id });                                                        // 10
      return notify;                                                                                             // 11
    }                                                                                                            // 12
                                                                                                                 //
    return tweetMessage;                                                                                         // 8
  }(),                                                                                                           // 8
                                                                                                                 //
  'countNotifTwiit': function () {                                                                               // 14
    function countNotifTwiit() {                                                                                 // 14
      var num = Notifications.find({ _id: this._id }).count();                                                   // 15
      if (num === 0) {                                                                                           // 16
        return false;                                                                                            // 17
      } else {                                                                                                   // 18
        return true;                                                                                             // 19
      }                                                                                                          // 20
    }                                                                                                            // 21
                                                                                                                 //
    return countNotifTwiit;                                                                                      // 14
  }()                                                                                                            // 14
});                                                                                                              // 1
                                                                                                                 //
Template.twiitPage.events({                                                                                      // 24
  'click button': function () {                                                                                  // 25
    function clickButton() {                                                                                     // 25
      console.log(this._id);                                                                                     // 26
      Notifications.update(this._id, { $set: { read: true } });                                                  // 27
      console.log("Clean!");                                                                                     // 28
      window.location = "/";                                                                                     // 29
    }                                                                                                            // 30
                                                                                                                 //
    return clickButton;                                                                                          // 25
  }()                                                                                                            // 25
});                                                                                                              // 24
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userManagement.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/userManagement.js                                                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.userManagement.events({                                                                                 // 1
  'click #signup': function () {                                                                                 // 2
    function clickSignup() {                                                                                     // 2
      var user = {                                                                                               // 3
        username: $('#signup-username').val(),                                                                   // 4
        password: $('#signup-password').val(),                                                                   // 5
        profile: {                                                                                               // 6
          fullname: $('#signup-fullname').val()                                                                  // 7
        }                                                                                                        // 6
      };                                                                                                         // 3
                                                                                                                 //
      Accounts.createUser(user, function (error) {                                                               // 11
        if (error) alert(error);                                                                                 // 12
      });                                                                                                        // 13
    }                                                                                                            // 14
                                                                                                                 //
    return clickSignup;                                                                                          // 2
  }(),                                                                                                           // 2
                                                                                                                 //
  'click #login': function () {                                                                                  // 16
    function clickLogin() {                                                                                      // 16
      var username = $('#login-username').val();                                                                 // 17
      var password = $('#login-password').val();                                                                 // 18
                                                                                                                 //
      Meteor.loginWithPassword(username, password, function (error) {                                            // 20
        if (error) alert(error);                                                                                 // 21
      });                                                                                                        // 22
      loggingIn = true;                                                                                          // 23
    }                                                                                                            // 24
                                                                                                                 //
    return clickLogin;                                                                                           // 16
  }(),                                                                                                           // 16
                                                                                                                 //
  'click #recommendationsBtn': function () {                                                                     // 26
    function clickRecommendationsBtn() {                                                                         // 26
      Session.set('recommendations', true);                                                                      // 27
    }                                                                                                            // 28
                                                                                                                 //
    return clickRecommendationsBtn;                                                                              // 26
  }()                                                                                                            // 26
});                                                                                                              // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userProfile.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/partialTemplates/userProfile.js                                                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.userProfile.events({                                                                                    // 1
  'click #logout': function () {                                                                                 // 2
    function clickLogout() {                                                                                     // 2
      Meteor.logout();                                                                                           // 3
      window.location = "/";                                                                                     // 4
    }                                                                                                            // 5
                                                                                                                 //
    return clickLogout;                                                                                          // 2
  }()                                                                                                            // 2
});                                                                                                              // 1
                                                                                                                 //
Template.userProfile.helpers({                                                                                   // 8
  'tweets': function () {                                                                                        // 9
    function tweets(username) {                                                                                  // 9
      Meteor.call('tweetsPublish', username, function (err, res) {                                               // 10
        Session.set('numTweets', res);                                                                           // 11
      });                                                                                                        // 12
      return Session.get('numTweets');                                                                           // 13
    }                                                                                                            // 14
                                                                                                                 //
    return tweets;                                                                                               // 9
  }(),                                                                                                           // 9
  'following': function () {                                                                                     // 15
    function following() {                                                                                       // 15
      Meteor.call('usersFollowings', function (err, res) {                                                       // 16
        Session.set('numFollowings', res);                                                                       // 17
      });                                                                                                        // 18
      return Session.get('numFollowings');                                                                       // 19
    }                                                                                                            // 20
                                                                                                                 //
    return following;                                                                                            // 15
  }(),                                                                                                           // 15
  'followers': function () {                                                                                     // 21
    function followers() {                                                                                       // 21
      Meteor.call('usersFollowers', function (err, res) {                                                        // 22
        Session.set('numFollowers', res);                                                                        // 23
      });                                                                                                        // 24
      return Session.get('numFollowers');                                                                        // 25
    }                                                                                                            // 26
                                                                                                                 //
    return followers;                                                                                            // 21
  }()                                                                                                            // 21
});                                                                                                              // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"main.html":["./template.main.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/main.html                                                                                              //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.exports = require("./template.main.js");                                                                  // 1
                                                                                                                 // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/template.main.js                                                                                       //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.body.addContent((function() {                                                                           // 2
  var view = this;                                                                                               // 3
  return HTML.DIV({                                                                                              // 4
    class: "row"                                                                                                 // 5
  }, "\n\t\t", Blaze.If(function() {                                                                             // 6
    return Spacebars.call(view.lookup("currentUser"));                                                           // 7
  }, function() {                                                                                                // 8
    return [ "\n\t    \t", Spacebars.include(view.lookupTemplate("navBarTemplate")), "\n\t  \t" ];               // 9
  }), "\n\t");                                                                                                   // 10
}));                                                                                                             // 11
Meteor.startup(Template.body.renderToDocument);                                                                  // 12
Meteor.startup(function() {                                                                                      // 13
  var attrs = {"id":"bodyPpal"};                                                                                 // 14
  for (var prop in attrs) {                                                                                      // 15
    document.body.setAttribute(prop, attrs[prop]);                                                               // 16
  }                                                                                                              // 17
});                                                                                                              // 18
                                                                                                                 // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/templating","meteor/reactive-var","./main.html",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/main.js                                                                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});var ReactiveVar;module.import('meteor/reactive-var',{"ReactiveVar":function(v){ReactiveVar=v}});module.import('./main.html');
                                                                                                                 // 2
                                                                                                                 //
                                                                                                                 // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"lib":{"collections":{"notifications.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// lib/collections/notifications.js                                                                              //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Notifications = new Mongo.Collection('notifications');                                                           // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweets.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// lib/collections/tweets.js                                                                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Twitts = new Meteor.Collection('twitts');                                                                        // 1
Relationships = new Meteor.Collection('relationships');                                                          // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"router.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// lib/router.js                                                                                                 //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Router.configure({                                                                                               // 1
  loadingTemplate: 'loading',                                                                                    // 2
  notFoundTemplate: 'notFound'                                                                                   // 3
});                                                                                                              // 1
                                                                                                                 //
Router.route('/', { name: 'userManagement' });                                                                   // 6
Router.route('/whoToFollow', { name: 'followUsers' });                                                           // 7
Router.route('/myProfile', { name: 'userProfile' });                                                             // 8
Router.route('/twiits/:_id', {                                                                                   // 9
  name: 'twiitPage',                                                                                             // 10
  data: function () {                                                                                            // 11
    function data() {                                                                                            // 11
      return this.params;                                                                                        // 12
    }                                                                                                            // 13
                                                                                                                 //
    return data;                                                                                                 // 11
  }()                                                                                                            // 11
});                                                                                                              // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userUtils.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// lib/userUtils.js                                                                                              //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
UserUtils = function UserUtils() {}; //no var in front                                                           // 1
                                                                                                                 //
UserUtils.findTweets = function (username) {                                                                     // 3
  var currentTweets = Twitts.find({ user: username }).fetch().map(function (data) {                              // 4
    return data.following;                                                                                       // 5
  });                                                                                                            // 6
  console.log("Tweets: ");                                                                                       // 7
  console.log(currentTweets);                                                                                    // 8
                                                                                                                 //
  return currentTweets;                                                                                          // 10
};                                                                                                               // 11
                                                                                                                 //
UserUtils.findFollowings = function (username) {                                                                 // 13
  var currentFollowings = Relationships.find({ follower: username }).fetch().map(function (data) {               // 14
    return data.following;                                                                                       // 15
  });                                                                                                            // 16
  //console.log("Siguiendo: ");                                                                                  //
  //console.log(currentFollowings);                                                                              //
                                                                                                                 //
  return currentFollowings;                                                                                      // 20
};                                                                                                               // 21
                                                                                                                 //
UserUtils.findFollowers = function (username) {                                                                  // 23
  var currentFollowers = Relationships.find({ following: username }).fetch().map(function (data) {               // 24
    return data.following;                                                                                       // 25
  });                                                                                                            // 26
  //console.log("Seguidores: ");                                                                                 //
  //console.log(currentFollowers);                                                                               //
                                                                                                                 //
  return currentFollowers;                                                                                       // 30
};                                                                                                               // 31
                                                                                                                 //
//FORZAMOS LA REACTIVIDAD                                                                                        //
UserUtils.observerProperties = function () {                                                                     // 34
  Twitts.find().observeChanges({                                                                                 // 35
    changed: function () {                                                                                       // 36
      function changed() {                                                                                       // 36
        console.log("Se han detectado cambios!");                                                                // 37
      }                                                                                                          // 38
                                                                                                                 //
      return changed;                                                                                            // 36
    }(),                                                                                                         // 36
    added: function () {                                                                                         // 39
      function added(id, doc) {                                                                                  // 39
        //console.log(doc);                                                                                      //
        return true;                                                                                             // 41
      }                                                                                                          // 42
                                                                                                                 //
      return added;                                                                                              // 39
    }()                                                                                                          // 39
  });                                                                                                            // 35
};                                                                                                               // 44
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/partialTemplates/template.followUsers.js");
require("./client/partialTemplates/template.loading.js");
require("./client/partialTemplates/template.navBarTemplate.js");
require("./client/partialTemplates/template.not_found.js");
require("./client/partialTemplates/template.notifications.js");
require("./client/partialTemplates/template.tweetBox.js");
require("./client/partialTemplates/template.tweetFeed.js");
require("./client/partialTemplates/template.tweetFeedProfile.js");
require("./client/partialTemplates/template.twiitPage.js");
require("./client/partialTemplates/template.userManagement.js");
require("./client/partialTemplates/template.userProfile.js");
require("./client/template.main.js");
require("./lib/collections/notifications.js");
require("./lib/collections/tweets.js");
require("./lib/router.js");
require("./lib/userUtils.js");
require("./client/partialTemplates/followUsers.js");
require("./client/partialTemplates/navBarTemplate.js");
require("./client/partialTemplates/notifications.js");
require("./client/partialTemplates/tweetBox.js");
require("./client/partialTemplates/tweetFeed.js");
require("./client/partialTemplates/tweetFeedProfile.js");
require("./client/partialTemplates/twiitPage.js");
require("./client/partialTemplates/userManagement.js");
require("./client/partialTemplates/userProfile.js");
require("./client/main.js");