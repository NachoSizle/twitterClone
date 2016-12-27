var require = meteorInstall({"client":{"partialTemplates":{"template.conversationsMenu.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.conversationsMenu.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("conversationsMenu");                                                                             // 2
Template["conversationsMenu"] = new Template("Template.conversationsMenu", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n\n    ", HTML.DIV({                                                                                    // 8
      class: "tweetfeed-container ampliacionMarginTopAllViews"                                                         // 9
    }, "\n      ", HTML.DIV({                                                                                          // 10
      class: "panel panel-default tweetfeed"                                                                           // 11
    }, "\n        ", Blaze.If(function() {                                                                             // 12
      return Spacebars.call(view.lookup("btnShowMessages"));                                                           // 13
    }, function() {                                                                                                    // 14
      return [ "\n          ", HTML.H3({                                                                               // 15
        class: "text-center headerConversationsSection"                                                                // 16
      }, "Chats"), "\n          ", HTML.DIV({                                                                          // 17
        class: "panel-body"                                                                                            // 18
      }, "\n            ", Blaze.Each(function() {                                                                     // 19
        return Spacebars.call(view.lookup("showChatsForThisUser"));                                                    // 20
      }, function() {                                                                                                  // 21
        return [ "\n              ", HTML.DIV({                                                                        // 22
          class: "panel panel-info panel-info-messaging"                                                               // 23
        }, "\n                ", HTML.DIV({                                                                            // 24
          class: "panel-body panel-body-messaging"                                                                     // 25
        }, "\n                  ", HTML.DIV({                                                                          // 26
          class: "row"                                                                                                 // 27
        }, "\n                    ", HTML.DIV({                                                                        // 28
          class: "col-md-2 col-sm-2 col-xs-2",                                                                         // 29
          id: "leftDivCurrentUser"                                                                                     // 30
        }, "\n                      ", HTML.IMG({                                                                      // 31
          id: "imgUserCardConversation",                                                                               // 32
          src: "/profileImgTest.png",                                                                                  // 33
          class: "img-circle"                                                                                          // 34
        }), "\n                    "), "\n                    ", HTML.DIV({                                            // 35
          class: "col-md-8 col-sm-8 col-xs-8",                                                                         // 36
          id: "centerDivCurrentUser"                                                                                   // 37
        }, "\n                      ", HTML.P(HTML.STRONG(Blaze.View("lookup:chatName", function() {                   // 38
          return Spacebars.mustache(view.lookup("chatName"), Spacebars.dot(view.lookup("."), "nameChat"));             // 39
        }))), "\n                      ", HTML.P({                                                                     // 40
          class: "lastMessage"                                                                                         // 41
        }, "Texto de ejemplo de mensaje..."), "\n                    "), "\n                    ", HTML.DIV({          // 42
          class: "col-md-2 col-sm-2 col-xs-2",                                                                         // 43
          id: "rightDivCurrentUser"                                                                                    // 44
        }, "\n                      ", HTML.P("19:35"), "\n                      ", HTML.A({                           // 45
          href: function() {                                                                                           // 46
            return Spacebars.mustache(view.lookup("pathFor"), "showConver", Spacebars.kw({                             // 47
              username: "{{chatName this.nameChat}}"                                                                   // 48
            }));                                                                                                       // 49
          }                                                                                                            // 50
        }, HTML.SPAN({                                                                                                 // 51
          class: "glyphicon glyphicon-menu-right"                                                                      // 52
        })), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            " ];
      }), "\n          "), "\n        " ];                                                                             // 54
    }, function() {                                                                                                    // 55
      return [ "\n          ", HTML.H3({                                                                               // 56
        class: "text-center headerConversationsSection"                                                                // 57
      }, "Contactos"), "\n          ", HTML.DIV({                                                                      // 58
        class: "panel-body"                                                                                            // 59
      }, "\n            ", HTML.Comment("{{#each userCardContact}}"), "\n              ", HTML.DIV({                   // 60
        class: "panel panel-info panel-info-messaging"                                                                 // 61
      }, "\n                ", HTML.DIV({                                                                              // 62
        class: "panel-body panel-body-messaging"                                                                       // 63
      }, "\n                  ", HTML.DIV({                                                                            // 64
        class: "row"                                                                                                   // 65
      }, "\n                    ", HTML.DIV({                                                                          // 66
        class: "col-md-2 col-sm- 2 col-xs-2",                                                                          // 67
        id: "leftDivCurrentUser"                                                                                       // 68
      }, "\n                      ", HTML.IMG({                                                                        // 69
        id: "imgUserCardContact",                                                                                      // 70
        src: "/profileImgTest.png",                                                                                    // 71
        class: "img-circle"                                                                                            // 72
      }), "\n                    "), "\n                    ", HTML.DIV({                                              // 73
        class: "col-md-8 col-sm-8 col-xs-8 containerContact",                                                          // 74
        id: "centerDivCurrentUser"                                                                                     // 75
      }, "\n                      ", HTML.P(HTML.STRONG("Test1")), "\n                    "), "\n                    ", HTML.DIV({
        class: "col-md-2 col-sm-2 col-xs-2 containerContact",                                                          // 77
        id: "rightDivCurrentUser"                                                                                      // 78
      }, "\n                      ", HTML.A({                                                                          // 79
        href: function() {                                                                                             // 80
          return Spacebars.mustache(view.lookup("pathFor"), "showConver", Spacebars.kw({                               // 81
            username: "test1"                                                                                          // 82
          }));                                                                                                         // 83
        },                                                                                                             // 84
        id: "test1",                                                                                                   // 85
        class: "goToConversation"                                                                                      // 86
      }, HTML.SPAN({                                                                                                   // 87
        class: "glyphicon glyphicon-menu-right"                                                                        // 88
      })), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            ", HTML.Comment("{{/each}}"), "\n          "), "\n        " ];
    }), "\n      "), "\n    "), "\n\n    ", HTML.NAV({                                                                 // 90
      id: "navBarBtnShowNotif",                                                                                        // 91
      class: "navbar navbar-default navbar-fixed-bottom"                                                               // 92
    }, "\n      ", HTML.DIV({                                                                                          // 93
      class: "container"                                                                                               // 94
    }, "\n        ", HTML.DIV({                                                                                        // 95
      class: "navbar-header"                                                                                           // 96
    }, "\n          ", HTML.DIV({                                                                                      // 97
      class: "btn-group",                                                                                              // 98
      role: "group"                                                                                                    // 99
    }, "\n\n            ", HTML.BUTTON({                                                                               // 100
      style: function() {                                                                                              // 101
        return [ "width: ", Spacebars.mustache(view.lookup("setStyleNavBar")) ];                                       // 102
      },                                                                                                               // 103
      type: "button",                                                                                                  // 104
      id: "btnShowContacts",                                                                                           // 105
      class: "btn btn-secondary btnGroupsShowNotif"                                                                    // 106
    }, "\n              ", HTML.SPAN({                                                                                 // 107
      class: "glyphicon glyphicon-user"                                                                                // 108
    }), "\n            "), "\n\n            ", HTML.BUTTON({                                                           // 109
      style: function() {                                                                                              // 110
        return [ "width: ", Spacebars.mustache(view.lookup("setStyleNavBar")) ];                                       // 111
      },                                                                                                               // 112
      type: "button",                                                                                                  // 113
      id: "btnShowMessages",                                                                                           // 114
      class: "btn btn-secondary btnGroupsShowNotif"                                                                    // 115
    }, "\n              ", HTML.SPAN({                                                                                 // 116
      class: "glyphicon glyphicon-align-justify"                                                                       // 117
    }), "\n            "), "\n            \n          "), "\n        "), "\n      "), "\n    "), "\n  " ];             // 118
  }, function() {                                                                                                      // 119
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 120
  });                                                                                                                  // 121
}));                                                                                                                   // 122
                                                                                                                       // 123
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.editLicenses.js":function(){

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
        class: "user-container ampliacionMarginTopAllViews"                                                            // 12
      }, "\n        ", HTML.DIV({                                                                                      // 13
        class: "panel panel-default userBox"                                                                           // 14
      }, "\n          ", HTML.DIV({                                                                                    // 15
        class: "panel-body"                                                                                            // 16
      }, "\n            ", HTML.Comment("Mensaje para el usuario registrado"), "\n            ", HTML.DIV({            // 17
        class: "row"                                                                                                   // 18
      }, "\n              ", HTML.Comment("CONTENIDO DE LA PARTE IZQUIERDA DEL PERFIL DEL USUARIO"), "\n              ", HTML.DIV({
        class: "col-md-7 col-sm-7 col-xs-7",                                                                           // 20
        id: "leftDivCurrentUser"                                                                                       // 21
      }, "\n                ", HTML.Comment('EN LA ETIQUETA DE SRC, SE PONDRA EL NOMBRE DEL USUARIO ACTUAL\n                <img id="imgCurrentUser" src="/{{currentUser.username}}.png" class="img-responsive">\n                A MODO DE EJEMPLO, VAMOS A UTILIZAR UNO GENERICO PARA QUE CARGUE EN CUALQUIER USUARIO'), "\n                ", HTML.IMG({
        id: "imgCurrentUser",                                                                                          // 23
        src: function() {                                                                                              // 24
          return Spacebars.mustache(view.lookup("userImgFound"));                                                      // 25
        },                                                                                                             // 26
        class: "imgUserProfile"                                                                                        // 27
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
        class: "col-md-5 col-sm-5 col-xs-5",                                                                           // 38
        id: "rightDivCurrentUser"                                                                                      // 39
      }, "\n                ", HTML.TEXTAREA({                                                                         // 40
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

},"template.followAnts.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.followAnts.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("followAnts");                                                                                    // 2
Template["followAnts"] = new Template("Template.followAnts", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n\n    ", Blaze.View("lookup:getDataFollowAnts", function() {                                           // 8
      return Spacebars.mustache(view.lookup("getDataFollowAnts"));                                                     // 9
    }), "\n\n    ", Blaze.If(function() {                                                                              // 10
      return Spacebars.call(view.lookup("getWhatShow"));                                                               // 11
    }, function() {                                                                                                    // 12
      return [ "\n      ", HTML.H3({                                                                                   // 13
        class: "text-center ampliacionMarginTopAllViews"                                                               // 14
      }, "Seguidores"), "\n    " ];                                                                                    // 15
    }, function() {                                                                                                    // 16
      return [ "\n      ", HTML.H3({                                                                                   // 17
        class: "text-center ampliacionMarginTopAllViews"                                                               // 18
      }, "Siguiendo"), "\n    " ];                                                                                     // 19
    }), "\n\n    ", HTML.DIV({                                                                                         // 20
      class: "tweetfeed-container"                                                                                     // 21
    }, "\n      ", HTML.DIV({                                                                                          // 22
      class: "panel panel-default tweetfeed"                                                                           // 23
    }, "\n        ", HTML.DIV({                                                                                        // 24
      class: "panel-body"                                                                                              // 25
    }, "\n          ", Blaze.If(function() {                                                                           // 26
      return Spacebars.call(view.lookup("btnShowFollowers"));                                                          // 27
    }, function() {                                                                                                    // 28
      return [ "\n            ", Blaze.Each(function() {                                                               // 29
        return Spacebars.call(view.lookup("showFollowers"));                                                           // 30
      }, function() {                                                                                                  // 31
        return [ "\n              ", Blaze.Each(function() {                                                           // 32
          return Spacebars.dataMustache(view.lookup("getProfileData"), view.lookup("."));                              // 33
        }, function() {                                                                                                // 34
          return [ "\n                ", HTML.Comment("PLANTILLA DE USUARIO, CON SU IMAGEN, NOMBRE DE USUARIO,\n                DESCRIPCION Y DOS BTN: IR A PERFIL"), "\n                ", Blaze.If(function() {
            return Spacebars.call(view.lookup("orientationCard"));                                                     // 36
          }, function() {                                                                                              // 37
            return [ "\n                  ", HTML.Comment("IMG IZQUIERDA"), "\n                  ", Spacebars.include(view.lookupTemplate("userCardImgIzq")), "\n                " ];
          }, function() {                                                                                              // 39
            return [ "\n                  ", Spacebars.include(view.lookupTemplate("userCardImgDer")), "\n                " ];
          }), "\n              " ];                                                                                    // 41
        }), "\n            " ];                                                                                        // 42
      }), "\n            ", Blaze.If(function() {                                                                      // 43
        return Spacebars.call(view.lookup("noFollowers"));                                                             // 44
      }, function() {                                                                                                  // 45
        return [ "\n              ", HTML.P("No tienes seguidores"), "    \n            " ];                           // 46
      }), "\n          " ];                                                                                            // 47
    }, function() {                                                                                                    // 48
      return [ "\n            ", Blaze.Each(function() {                                                               // 49
        return Spacebars.call(view.lookup("showFollowings"));                                                          // 50
      }, function() {                                                                                                  // 51
        return [ "\n              ", HTML.Comment("PLANTILLA DE USUARIO, CON SU IMAGEN, NOMBRE DE USUARIO,\n              DESCRIPCION Y DOS BTN: IR A PERFIL"), "\n              ", Blaze.Each(function() {
          return Spacebars.dataMustache(view.lookup("getProfileData"), view.lookup("."));                              // 53
        }, function() {                                                                                                // 54
          return [ "\n                ", Blaze.If(function() {                                                         // 55
            return Spacebars.call(view.lookup("orientationCard"));                                                     // 56
          }, function() {                                                                                              // 57
            return [ "\n                  ", HTML.Comment("IMG DERECHA"), "\n                  ", Spacebars.include(view.lookupTemplate("userCardImgIzq")), "\n                " ];
          }, function() {                                                                                              // 59
            return [ "\n                  ", Spacebars.include(view.lookupTemplate("userCardImgDer")), "\n                " ];
          }), "\n              " ];                                                                                    // 61
        }), "\n            " ];                                                                                        // 62
      }), "\n            ", Blaze.If(function() {                                                                      // 63
        return Spacebars.call(view.lookup("noFollowings"));                                                            // 64
      }, function() {                                                                                                  // 65
        return [ "\n              ", HTML.P("No estás siguiendo a nadie"), "\n            " ];                         // 66
      }), "\n          " ];                                                                                            // 67
    }), "\n        "), "\n      "), "\n    "), "\n\n    ", HTML.NAV({                                                  // 68
      id: "navBarBtnShowNotif",                                                                                        // 69
      class: "navbar navbar-default navbar-fixed-bottom"                                                               // 70
    }, "\n      ", HTML.DIV({                                                                                          // 71
      class: "container"                                                                                               // 72
    }, "\n        ", HTML.DIV({                                                                                        // 73
      class: "navbar-header"                                                                                           // 74
    }, "\n          ", HTML.DIV({                                                                                      // 75
      class: "btn-group",                                                                                              // 76
      role: "group"                                                                                                    // 77
    }, "\n\n            ", HTML.BUTTON({                                                                               // 78
      style: function() {                                                                                              // 79
        return [ "width: ", Spacebars.mustache(view.lookup("setStyleNavBar")) ];                                       // 80
      },                                                                                                               // 81
      type: "button",                                                                                                  // 82
      id: "btnShowFollowers",                                                                                          // 83
      class: "btn btn-secondary btnGroupsShowNotif"                                                                    // 84
    }, "\n              ", HTML.SPAN({                                                                                 // 85
      class: "glyphicon glyphicon-user"                                                                                // 86
    }), "\n              ", HTML.SPAN({                                                                                // 87
      class: "glyphicon glyphicon-hand-left"                                                                           // 88
    }), "\n              ", HTML.SPAN({                                                                                // 89
      class: "badge badge-notify-navbarFooter"                                                                         // 90
    }, Blaze.View("lookup:followersCount", function() {                                                                // 91
      return Spacebars.mustache(view.lookup("followersCount"));                                                        // 92
    })), "\n            "), "\n\n            ", HTML.BUTTON({                                                          // 93
      style: function() {                                                                                              // 94
        return [ "width: ", Spacebars.mustache(view.lookup("setStyleNavBar")) ];                                       // 95
      },                                                                                                               // 96
      type: "button",                                                                                                  // 97
      id: "btnShowFollowings",                                                                                         // 98
      class: "btn btn-secondary btnGroupsShowNotif"                                                                    // 99
    }, "\n              ", HTML.SPAN({                                                                                 // 100
      class: "glyphicon glyphicon-user"                                                                                // 101
    }), "\n              ", HTML.SPAN({                                                                                // 102
      class: "glyphicon glyphicon-hand-right"                                                                          // 103
    }), "\n              ", HTML.SPAN({                                                                                // 104
      class: "badge badge-notify-navbarFooter"                                                                         // 105
    }, Blaze.View("lookup:followingsCount", function() {                                                               // 106
      return Spacebars.mustache(view.lookup("followingsCount"));                                                       // 107
    })), "\n            "), "\n            \n          "), "\n        "), "\n      "), "\n    "), "\n\n  " ];          // 108
  }, function() {                                                                                                      // 109
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 110
  });                                                                                                                  // 111
}));                                                                                                                   // 112
                                                                                                                       // 113
Template.__checkName("userCardImgIzq");                                                                                // 114
Template["userCardImgIzq"] = new Template("Template.userCardImgIzq", (function() {                                     // 115
  var view = this;                                                                                                     // 116
  return HTML.DIV({                                                                                                    // 117
    class: "panel panel-info"                                                                                          // 118
  }, "\n    ", HTML.DIV({                                                                                              // 119
    class: "panel-body"                                                                                                // 120
  }, "\n      ", HTML.DIV({                                                                                            // 121
    class: "row"                                                                                                       // 122
  }, "\n        ", HTML.DIV({                                                                                          // 123
    class: "col-md-6 col-sm-6 col-xs-6",                                                                               // 124
    id: "leftDivCurrentUser"                                                                                           // 125
  }, "\n          ", HTML.IMG({                                                                                        // 126
    id: "imgCurrentUser",                                                                                              // 127
    src: function() {                                                                                                  // 128
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "imgFoundProf"));                                      // 129
    },                                                                                                                 // 130
    class: "img-responsive"                                                                                            // 131
  }), "\n        "), "\n        ", HTML.DIV({                                                                          // 132
    class: "col-md-6 col-sm-6 col-xs-6",                                                                               // 133
    id: "rightDivCurrentUser"                                                                                          // 134
  }, "\n          ", HTML.P(HTML.STRONG("@", Blaze.View("lookup:..userNameProfile", function() {                       // 135
    return Spacebars.mustache(Spacebars.dot(view.lookup("."), "userNameProfile"));                                     // 136
  }))), "\n          ", HTML.P(Blaze.View("lookup:..userDescription", function() {                                     // 137
    return Spacebars.mustache(Spacebars.dot(view.lookup("."), "userDescription"));                                     // 138
  })), "\n          ", HTML.DIV({                                                                                      // 139
    class: "btn-group",                                                                                                // 140
    role: "group",                                                                                                     // 141
    id: "btnGroupInteractions"                                                                                         // 142
  }, "\n            ", HTML.A({                                                                                        // 143
    href: function() {                                                                                                 // 144
      return Spacebars.mustache(view.lookup("pathFor"), "userProfile", Spacebars.kw({                                  // 145
        username: Spacebars.dot(view.lookup("."), "userNameProfile")                                                   // 146
      }));                                                                                                             // 147
    },                                                                                                                 // 148
    class: "btn"                                                                                                       // 149
  }, "\n              ", HTML.Raw('<span class="glyphicon glyphicon-eye-open"></span>'), "\n              Ver perfil\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));                                                                                                                   // 151
                                                                                                                       // 152
Template.__checkName("userCardImgDer");                                                                                // 153
Template["userCardImgDer"] = new Template("Template.userCardImgDer", (function() {                                     // 154
  var view = this;                                                                                                     // 155
  return HTML.DIV({                                                                                                    // 156
    class: "panel panel-info"                                                                                          // 157
  }, "\n    ", HTML.DIV({                                                                                              // 158
    class: "panel-body"                                                                                                // 159
  }, "\n      ", HTML.DIV({                                                                                            // 160
    class: "row"                                                                                                       // 161
  }, "\n        ", HTML.DIV({                                                                                          // 162
    class: "col-md-6 col-sm-6 col-xs-6",                                                                               // 163
    id: "leftDivCurrentUser"                                                                                           // 164
  }, "\n          ", HTML.P(HTML.STRONG("@", Blaze.View("lookup:..userNameProfile", function() {                       // 165
    return Spacebars.mustache(Spacebars.dot(view.lookup("."), "userNameProfile"));                                     // 166
  }))), "\n          ", HTML.P(Blaze.View("lookup:..userDescription", function() {                                     // 167
    return Spacebars.mustache(Spacebars.dot(view.lookup("."), "userDescription"));                                     // 168
  })), "\n          ", HTML.DIV({                                                                                      // 169
    class: "btn-group",                                                                                                // 170
    role: "group",                                                                                                     // 171
    id: "btnGroupInteractions"                                                                                         // 172
  }, "\n            ", HTML.A({                                                                                        // 173
    href: function() {                                                                                                 // 174
      return Spacebars.mustache(view.lookup("pathFor"), "userProfile", Spacebars.kw({                                  // 175
        username: Spacebars.dot(view.lookup("."), "userNameProfile")                                                   // 176
      }));                                                                                                             // 177
    },                                                                                                                 // 178
    class: "btn"                                                                                                       // 179
  }, "\n              ", HTML.Raw('<span class="glyphicon glyphicon-eye-open"></span>'), "\n              Ver perfil\n            "), "\n          "), "\n        "), "\n        ", HTML.DIV({
    class: "col-md-6 col-sm-6 col-xs-6",                                                                               // 181
    id: "rightDivCurrentUser"                                                                                          // 182
  }, "\n          ", HTML.IMG({                                                                                        // 183
    id: "imgCurrentUser",                                                                                              // 184
    src: function() {                                                                                                  // 185
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "imgFoundProf"));                                      // 186
    },                                                                                                                 // 187
    class: "img-responsive"                                                                                            // 188
  }), "\n        "), "\n      "), "\n    "), "\n  ");                                                                  // 189
}));                                                                                                                   // 190
                                                                                                                       // 191
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
  return [ HTML.Raw('<div class="user-container ampliacionMarginTopAllViews" id="barFound">\n    \t<div class="panel panel-default userBox">\n      \t\t<div class="panel-body">\n\t\t\t\t<div class="input-group form-group formGroupSearchBar">\n\t\t\t\t  <input type="text" class="form-control" placeholder="Search user" id="searchUser">\n\t\t\t\t  <button class="btn btn-info" id="searchBtn"><i class="glyphicon glyphicon-search"></i></button>\n\t\t\t\t</div>\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n    <!--\n\t<input type="text" class="form-control" id="searchUser" placeholder="Search for user">\n\t<button type="submit" class="btn btn-info">Search</button>\n\t-->\n\n\t'), Blaze.If(function() {
    return Spacebars.call(view.lookup("foundUser"));                                                                   // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t\t", HTML.DIV({                                                                                      // 8
      class: "tweetfeed-container"                                                                                     // 9
    }, "\n\t\t\t", HTML.DIV({                                                                                          // 10
      class: "panel panel-default tweetfeed"                                                                           // 11
    }, "\n\t    \t\t", HTML.DIV({                                                                                      // 12
      class: "panel-body"                                                                                              // 13
    }, "\n\t\t\t\t  ", HTML.DIV({                                                                                      // 14
      class: "panel panel-info"                                                                                        // 15
    }, "\n\t\t\t\t    ", HTML.DIV({                                                                                    // 16
      class: "panel-body"                                                                                              // 17
    }, "\n\t\t\t\t      ", HTML.DIV({                                                                                  // 18
      class: "row"                                                                                                     // 19
    }, "\n\t\t\t\t        ", HTML.DIV({                                                                                // 20
      class: "col-md-6 col-sm-6 col-xs-6",                                                                             // 21
      id: "leftDivCurrentUser"                                                                                         // 22
    }, "\n\t\t\t\t          ", HTML.IMG({                                                                              // 23
      id: "imgCurrentUser",                                                                                            // 24
      src: function() {                                                                                                // 25
        return Spacebars.mustache(view.lookup("getImgProfile"), Spacebars.dot(view.lookup("foundUser"), "userImg"));   // 26
      },                                                                                                               // 27
      class: "img-responsive"                                                                                          // 28
    }), "\n\t\t\t\t        "), "\n\t\t\t\t        ", HTML.DIV({                                                        // 29
      class: "col-md-6 col-sm-6 col-xs-6",                                                                             // 30
      id: "rightDivCurrentUser"                                                                                        // 31
    }, "\n\t\t\t\t          ", HTML.P(HTML.STRONG("@", Blaze.View("lookup:foundUser.userNameProfile", function() {     // 32
      return Spacebars.mustache(Spacebars.dot(view.lookup("foundUser"), "userNameProfile"));                           // 33
    }))), "\n\t\t\t\t          ", HTML.P(Blaze.View("lookup:foundUser.userDescription", function() {                   // 34
      return Spacebars.mustache(Spacebars.dot(view.lookup("foundUser"), "userDescription"));                           // 35
    })), "\n\t\t\t\t          ", HTML.DIV({                                                                            // 36
      class: "btn-group",                                                                                              // 37
      role: "group",                                                                                                   // 38
      id: "btnGroupInteractions"                                                                                       // 39
    }, "\n\t\t\t\t            ", HTML.A({                                                                              // 40
      href: function() {                                                                                               // 41
        return Spacebars.mustache(view.lookup("pathFor"), "userProfile", Spacebars.kw({                                // 42
          username: Spacebars.dot(view.lookup("foundUser"), "userNameProfile")                                         // 43
        }));                                                                                                           // 44
      },                                                                                                               // 45
      class: "btn btn-secondary"                                                                                       // 46
    }, "\n\t\t\t\t              ", HTML.SPAN({                                                                         // 47
      class: "glyphicon glyphicon-eye-open"                                                                            // 48
    }), "\n\t\t\t\t              Ver perfil\n\t\t\t\t            "), "\n\t\t\t\t            ", Blaze.If(function() {   // 49
      return Spacebars.dataMustache(view.lookup("mineUser"), Spacebars.dot(view.lookup("foundUser"), "userNameProfile"));
    }, function() {                                                                                                    // 51
      return [ "\n\t\t\t\t            ", HTML.A({                                                                      // 52
        class: "btn btn-secondary",                                                                                    // 53
        id: "followRec"                                                                                                // 54
      }, "\n\t\t\t\t              ", HTML.SPAN({                                                                       // 55
        class: "glyphicon glyphicon-plus-sign"                                                                         // 56
      }), "\n\t\t\t\t              Seguir\n\t\t\t\t            "), "\n\t\t\t\t            " ];                         // 57
    }), "\n\t\t\t\t          "), "\n\t\t\t\t        "), "\n\t\t\t\t      "), "\n\t\t\t\t    "), "\n\t\t\t\t  "), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t" ];
  }), "\n\t\t\n\t", Blaze.If(function() {                                                                              // 59
    return Spacebars.call(view.lookup("recUsersLis"));                                                                 // 60
  }, function() {                                                                                                      // 61
    return [ "\n\t  \t", HTML.DIV({                                                                                    // 62
      class: "recommend-users"                                                                                         // 63
    }, " \n\t\t  ", HTML.H5({                                                                                          // 64
      class: "text-center"                                                                                             // 65
    }, "Who to follow:"), "\n\t\t  ", Blaze.Each(function() {                                                          // 66
      return Spacebars.call(view.lookup("recommendedUsers"));                                                          // 67
    }, function() {                                                                                                    // 68
      return [ "\t  \t\n\t  \t\t", HTML.DIV({                                                                          // 69
        class: "tweetfeed-container"                                                                                   // 70
      }, "\n\t\t\t\t", HTML.DIV({                                                                                      // 71
        class: "panel panel-default tweetfeed"                                                                         // 72
      }, "\n\t\t\t\t\t", HTML.DIV({                                                                                    // 73
        class: "panel-body"                                                                                            // 74
      }, "\n\t\t\t\t\t  ", HTML.DIV({                                                                                  // 75
        class: "panel panel-info"                                                                                      // 76
      }, "\n\t\t\t\t\t    ", HTML.DIV({                                                                                // 77
        class: "panel-body"                                                                                            // 78
      }, "\n\t\t\t\t\t      ", HTML.DIV({                                                                              // 79
        class: "row"                                                                                                   // 80
      }, "\n\t\t\t\t\t        ", HTML.DIV({                                                                            // 81
        class: "col-md-6 col-sm-6 col-xs-6",                                                                           // 82
        id: "leftDivCurrentUser"                                                                                       // 83
      }, "\n\t\t\t\t\t          ", HTML.IMG({                                                                          // 84
        id: "imgCurrentUser",                                                                                          // 85
        src: function() {                                                                                              // 86
          return Spacebars.mustache(view.lookup("getImgProfile"), Spacebars.dot(view.lookup("."), "userImg"));         // 87
        },                                                                                                             // 88
        class: "img-responsive"                                                                                        // 89
      }), "\n\t\t\t\t\t        "), "\n\t\t\t\t\t        ", HTML.DIV({                                                  // 90
        class: "col-md-6 col-sm-6 col-xs-6",                                                                           // 91
        id: "rightDivCurrentUser"                                                                                      // 92
      }, "\n\t\t\t\t\t          ", HTML.P(HTML.STRONG("@", Blaze.View("lookup:..userNameProfile", function() {         // 93
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "userNameProfile"));                                 // 94
      }))), "\n\t\t\t\t\t          ", HTML.P(Blaze.View("lookup:..userDescription", function() {                       // 95
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "userDescription"));                                 // 96
      })), "\n\t\t\t\t\t          ", HTML.DIV({                                                                        // 97
        class: "btn-group",                                                                                            // 98
        role: "group",                                                                                                 // 99
        id: "btnGroupInteractions"                                                                                     // 100
      }, "\n\t\t\t\t\t            ", HTML.A({                                                                          // 101
        href: function() {                                                                                             // 102
          return Spacebars.mustache(view.lookup("pathFor"), "userProfile", Spacebars.kw({                              // 103
            username: view.lookup(".")                                                                                 // 104
          }));                                                                                                         // 105
        },                                                                                                             // 106
        class: "btn btn-secondary"                                                                                     // 107
      }, "\n\t\t\t\t\t              ", HTML.SPAN({                                                                     // 108
        class: "glyphicon glyphicon-eye-open"                                                                          // 109
      }), "\n\t\t\t\t\t              Ver perfil\n\t\t\t\t\t            "), "\n\t\t\t\t\t            ", HTML.A({        // 110
        class: "btn btn-secondary",                                                                                    // 111
        id: "followRec"                                                                                                // 112
      }, "\n\t\t\t\t\t              ", HTML.SPAN({                                                                     // 113
        class: "glyphicon glyphicon-plus-sign"                                                                         // 114
      }), "\n\t\t\t\t\t              Seguir\n\t\t\t\t\t            "), "\n\t\t\t\t\t          "), "\n\t\t\t\t\t        "), "\n\t\t\t\t\t      "), "\n\t\t\t\t\t    "), "\n\t\t\t\t\t  "), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t  " ];
    }), "\n\t\t"), "\n\t" ];                                                                                           // 116
  }) ];                                                                                                                // 117
}));                                                                                                                   // 118
                                                                                                                       // 119
Template.__checkName("userCard");                                                                                      // 120
Template["userCard"] = new Template("Template.userCard", (function() {                                                 // 121
  var view = this;                                                                                                     // 122
  return "";                                                                                                           // 123
}));                                                                                                                   // 124
                                                                                                                       // 125
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

},"template.mainPage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.mainPage.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("mainPage");                                                                                      // 2
Template["mainPage"] = new Template("Template.mainPage", (function() {                                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "row",                                                                                                      // 6
    id: "containerNavBar"                                                                                              // 7
  }, "\n\t\t", Blaze.If(function() {                                                                                   // 8
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 9
  }, function() {                                                                                                      // 10
    return [ "\n\t\t    ", Blaze.If(function() {                                                                       // 11
      return Spacebars.call(view.lookup("currentUser"));                                                               // 12
    }, function() {                                                                                                    // 13
      return [ "\n\t\t    \t", Spacebars.include(view.lookupTemplate("navBarTemplate")), "\n\t\t    \t", Blaze.If(function() {
        return Spacebars.call(view.lookup("mainPage"));                                                                // 15
      }, function() {                                                                                                  // 16
        return [ "\n\t\t    \t\t", HTML.DIV({                                                                          // 17
          id: "divTweetFeed",                                                                                          // 18
          class: "col-md-8 col-sm-8"                                                                                   // 19
        }, Spacebars.include(view.lookupTemplate("tweetFeed"))), "\n\t\t    \t" ];                                     // 20
      }), "\n\n\t\t    \t", HTML.DIV({                                                                                 // 21
        class: "modal fade",                                                                                           // 22
        id: "dialog-NewTwiit"                                                                                          // 23
      }, "\n\t\t\t    \t", Spacebars.include(view.lookupTemplate("tweetBox")), "\n\t\t\t    "), "\n\t\t  \t" ];        // 24
    }), "\n\t  \t" ];                                                                                                  // 25
  }, function() {                                                                                                      // 26
    return [ "\n\t\t    ", Spacebars.include(view.lookupTemplate("loading")), "\n\t  \t" ];                            // 27
  }), "\n\t");                                                                                                         // 28
}));                                                                                                                   // 29
                                                                                                                       // 30
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
      class: "navbar navbar-default navbar-fixed-top"                                                                  // 9
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
    }), "\n\n    \t  "), "\n    \t  ", HTML.A({                                                                        // 55
      href: "/"                                                                                                        // 56
    }, HTML.IMG({                                                                                                      // 57
      id: "imgLogTwiiterClone",                                                                                        // 58
      src: "/imgLogTwiiterClone.png",                                                                                  // 59
      class: "img-responsive navbar-brand"                                                                             // 60
    })), "\n\t    "), "\n\n\t\t", HTML.Comment("PARTE DERECHA DE LA BARRA DE NAVEGACION"), "\n\t    ", HTML.DIV({      // 61
      class: "collapse navbar-collapse",                                                                               // 62
      id: "bs-example-navbar-collapse-1"                                                                               // 63
    }, "\n\t    \t", Blaze.If(function() {                                                                             // 64
      return Spacebars.call(view.lookup("currentUser"));                                                               // 65
    }, function() {                                                                                                    // 66
      return [ "\n\t\t      \t", HTML.UL({                                                                             // 67
        id: "dropDownMenu",                                                                                            // 68
        class: "nav navbar-nav navbar-right"                                                                           // 69
      }, "\n\t\t\t      \t", Blaze.If(function() {                                                                     // 70
        return Spacebars.call(view.lookup("whatsAppReq"));                                                             // 71
      }, function() {                                                                                                  // 72
        return [ "\n\t\t\t      \t", HTML.LI({                                                                         // 73
          id: "whatsNotif"                                                                                             // 74
        }, "\n\t\t\t            ", Spacebars.include(view.lookupTemplate("whatsAppNotif")), "\n\t\t\t      \t"), "\n\t\t\t      \t" ];
      }), "\n\n\t\t\t      \t", HTML.LI("\n\t\t\t            ", Spacebars.include(view.lookupTemplate("notificationsNew")), "\n\t\t\t      \t"), "\n\t\t\t      \t\n\t\t\t        ", HTML.LI("\n\t\t\t        \t", HTML.A({
        href: "/whoToFollow",                                                                                          // 77
        id: "recommendationsBtn"                                                                                       // 78
      }, "\n\t\t\t        \t\t", HTML.SPAN({                                                                           // 79
        class: "glyphicon glyphicon-search"                                                                            // 80
      }), "\n\t\t\t        \t"), "\n\t\t\t        "), "\n\t\t\t        ", HTML.LI("\n\t\t\t        \t", Blaze.Unless(function() {
        return Spacebars.call(view.lookup("infoStateCollapseNavBar"));                                                 // 82
      }, function() {                                                                                                  // 83
        return [ "\n\t\t\t\t\t  \t\t", HTML.A({                                                                        // 84
          id: "btnNewTwiit",                                                                                           // 85
          type: "button",                                                                                              // 86
          href: "#",                                                                                                   // 87
          class: "navbar-btn",                                                                                         // 88
          "data-toggle": "modal",                                                                                      // 89
          "data-target": "#dialog-NewTwiit"                                                                            // 90
        }, "\n\t\t\t\t\t        \t", HTML.SPAN({                                                                       // 91
          class: "glyphicon glyphicon-pencil"                                                                          // 92
        }), "\n\t\t\t\t\t      \t"), "\n\t\t\t\t\t  \t" ];                                                             // 93
      }), "\n\t\t\t        "), "\n\t\t\t        ", HTML.Comment('\n\t\t\t        <li>\n\t\t\t        \t<a id="videoTrans" type="button" class="navbar-btn">\n\t\t\t        \t\t<span class="glyphicon glyphicon-camera"></span>\n\t\t    \t\t\t</a>\n\t\t\t        </li>\n\t\t\t        '), "\n\t\t\t        ", HTML.LI("\n\t\t\t        \t", HTML.A({
        href: function() {                                                                                             // 95
          return Spacebars.mustache(view.lookup("pathFor"), "conversationsMenu");                                      // 96
        },                                                                                                             // 97
        id: "btnShowConver",                                                                                           // 98
        type: "button",                                                                                                // 99
        class: "navbar-btn"                                                                                            // 100
      }, "\n\t\t\t        \t\t", HTML.SPAN({                                                                           // 101
        class: "glyphicon glyphicon-envelope"                                                                          // 102
      }), "\n\t\t    \t\t\t"), "\n\t\t\t        "), "\n\t\t\t        ", HTML.LI("\n\t\t              \t", HTML.A({     // 103
        href: function() {                                                                                             // 104
          return Spacebars.mustache(view.lookup("pathFor"), "userProfile", Spacebars.kw({                              // 105
            username: Spacebars.dot(view.lookup("currentUser"), "name")                                                // 106
          }));                                                                                                         // 107
        },                                                                                                             // 108
        class: "imgProfileNavBar"                                                                                      // 109
      }, HTML.IMG({                                                                                                    // 110
        id: "imgProfile",                                                                                              // 111
        src: function() {                                                                                              // 112
          return Spacebars.mustache(view.lookup("userImgFound"));                                                      // 113
        },                                                                                                             // 114
        class: "img-responsive"                                                                                        // 115
      })), "\n\t\t\t        "), "\n\t\t      \t"), "\n          \t" ];                                                 // 116
    }), "\n\t    "), "\n\t  "), "\n\t"), "\n\t" ];                                                                     // 117
  });                                                                                                                  // 118
}));                                                                                                                   // 119
                                                                                                                       // 120
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
  return HTML.Raw("<h5>La página a la que se intenta acceder no existe</h5>");                                         // 5
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

},"template.showConver.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.showConver.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("showConver");                                                                                    // 2
Template["showConver"] = new Template("Template.showConver", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n\n    ", Blaze.If(function() {                                                                         // 8
      return Spacebars.call(view.lookup("recepUserChat"));                                                             // 9
    }, function() {                                                                                                    // 10
      return [ "\n      ", HTML.DIV({                                                                                  // 11
        class: "headerChat-container navbar-fixed-top"                                                                 // 12
      }, "\n        ", HTML.DIV({                                                                                      // 13
        class: "panel panel-default panel-headerChat"                                                                  // 14
      }, "\n          ", HTML.DIV({                                                                                    // 15
        class: "panel-body headerChat-panel-body"                                                                      // 16
      }, "\n            ", HTML.DIV({                                                                                  // 17
        class: "row"                                                                                                   // 18
      }, "\n              ", HTML.DIV({                                                                                // 19
        class: "col-md-2 col-sm-2 col-xs-2 containerHeaderChat",                                                       // 20
        id: "rightDivCurrentUser"                                                                                      // 21
      }, "\n                ", HTML.A({                                                                                // 22
        href: function() {                                                                                             // 23
          return Spacebars.mustache(view.lookup("pathFor"), "conversationsMenu");                                      // 24
        },                                                                                                             // 25
        class: "goToConversation"                                                                                      // 26
      }, HTML.STRONG(HTML.SPAN({                                                                                       // 27
        class: "glyphicon glyphicon-menu-left"                                                                         // 28
      }))), "\n              "), "\n              ", HTML.DIV({                                                        // 29
        class: "col-md-2 col-sm-2 col-xs-2",                                                                           // 30
        id: "leftDivCurrentUser"                                                                                       // 31
      }, "\n                ", HTML.IMG({                                                                              // 32
        id: "imgUserCardContact",                                                                                      // 33
        src: "/profileImgTest.png",                                                                                    // 34
        class: "img-circle"                                                                                            // 35
      }), "\n              "), "\n              ", HTML.DIV({                                                          // 36
        class: "col-md-7 col-sm-7 col-xs-7 containerHeaderChat",                                                       // 37
        id: "centerDivCurrentUser"                                                                                     // 38
      }, "\n                ", HTML.A({                                                                                // 39
        href: function() {                                                                                             // 40
          return Spacebars.mustache(view.lookup("pathFor"), "userProfile", Spacebars.kw({                              // 41
            username: Spacebars.dot(view.lookup("recepUserChat"), "name")                                              // 42
          }));                                                                                                         // 43
        }                                                                                                              // 44
      }, HTML.STRONG(Blaze.View("lookup:recepUserChat.name", function() {                                              // 45
        return Spacebars.mustache(Spacebars.dot(view.lookup("recepUserChat"), "name"));                                // 46
      }))), "\n              "), "\n              ", HTML.DIV({                                                        // 47
        class: "col-md-1 col-sm-1 col-xs-1 containerHeaderChat",                                                       // 48
        id: "btnOptionsConver"                                                                                         // 49
      }, "\n                ", HTML.BUTTON({                                                                           // 50
        id: "dropdownOptionsConver",                                                                                   // 51
        class: "btn dropdown-toggle",                                                                                  // 52
        type: "button",                                                                                                // 53
        "data-toggle": "dropdown",                                                                                     // 54
        "aria-haspopup": "true",                                                                                       // 55
        "aria-expanded": "true"                                                                                        // 56
      }, "\n                  ", HTML.SPAN({                                                                           // 57
        class: "glyphicon glyphicon-option-vertical"                                                                   // 58
      }), "\n                "), "\n                ", HTML.UL({                                                       // 59
        class: "dropdown-menu dropdown-menu-right",                                                                    // 60
        "aria-labelledby": "dropdownOptionsConver"                                                                     // 61
      }, "\n                  ", HTML.LI(HTML.A({                                                                      // 62
        href: function() {                                                                                             // 63
          return Spacebars.mustache(view.lookup("pathFor"), "conversationsMenu");                                      // 64
        },                                                                                                             // 65
        id: "cleanHistory"                                                                                             // 66
      }, "Limpiar historial")), "\n                "), "\n              "), "\n            "), "\n          "), "\n        "), "\n      "), "  \n    " ];
    }), "\n\n    ", HTML.DIV({                                                                                         // 68
      class: "containerMessageInThatConver"                                                                            // 69
    }, "\n      ", Blaze.Each(function() {                                                                             // 70
      return Spacebars.call(view.lookup("messagesInChat"));                                                            // 71
    }, function() {                                                                                                    // 72
      return [ "\n        ", HTML.DIV({                                                                                // 73
        class: "container restoreValue"                                                                                // 74
      }, "\n          ", HTML.DIV({                                                                                    // 75
        class: function() {                                                                                            // 76
          return [ "messageInChat-container ", Spacebars.mustache(view.lookup("messageIsMine"), Spacebars.dot(view.lookup("."), "userNameSentMsg")) ];
        }                                                                                                              // 78
      }, "\n            ", HTML.DIV({                                                                                  // 79
        class: "panel panel-default panel-messageInChat"                                                               // 80
      }, "\n              ", HTML.DIV({                                                                                // 81
        class: "panel-body messageInChat"                                                                              // 82
      }, "\n                ", HTML.P({                                                                                // 83
        class: "headerMessage"                                                                                         // 84
      }, HTML.STRONG(Blaze.View("lookup:..userNameSentMsg", function() {                                               // 85
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "userNameSentMsg"));                                 // 86
      }))), "\n                ", HTML.P({                                                                             // 87
        class: "contentMessage"                                                                                        // 88
      }, Blaze.View("lookup:..contentMsg", function() {                                                                // 89
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "contentMsg"));                                      // 90
      })), "\n                ", HTML.P({                                                                              // 91
        class: "footerMessage"                                                                                         // 92
      }, Blaze.View("lookup:convertDateTime", function() {                                                             // 93
        return Spacebars.mustache(view.lookup("convertDateTime"), Spacebars.dot(view.lookup("."), "messageTimestamp"));
      })), "\n              "), "\n            "), "\n          "), "\n        "), "\n      " ];                       // 95
    }), "\n    "), "\n\n    ", HTML.NAV({                                                                              // 96
      id: "navBarBtnShowNotif",                                                                                        // 97
      class: "navbar navbar-default navbar-fixed-bottom"                                                               // 98
    }, "\n      ", HTML.DIV({                                                                                          // 99
      class: "container"                                                                                               // 100
    }, "\n        ", HTML.DIV({                                                                                        // 101
      class: "navbar-header"                                                                                           // 102
    }, "\n          ", HTML.DIV({                                                                                      // 103
      class: "row"                                                                                                     // 104
    }, "\n            ", HTML.DIV({                                                                                    // 105
      class: "col-md-12 col-sm-12 col-xs-12"                                                                           // 106
    }, "\n              ", HTML.DIV({                                                                                  // 107
      class: "input-group"                                                                                             // 108
    }, "\n                ", HTML.INPUT({                                                                              // 109
      id: "inputMessage",                                                                                              // 110
      type: "text",                                                                                                    // 111
      class: "form-control",                                                                                           // 112
      placeholder: "Message..."                                                                                        // 113
    }), "\n                ", HTML.SPAN({                                                                              // 114
      class: "input-group-btn"                                                                                         // 115
    }, "\n                  ", HTML.BUTTON({                                                                           // 116
      type: "button",                                                                                                  // 117
      id: "btnSendMessage",                                                                                            // 118
      class: "btn btn-secondary btnGroupsShowNotif",                                                                   // 119
      disabled: function() {                                                                                           // 120
        return Spacebars.mustache(view.lookup("btnDisabled"));                                                         // 121
      }                                                                                                                // 122
    }, "\n                    ", HTML.SPAN({                                                                           // 123
      class: "glyphicon glyphicon-send"                                                                                // 124
    }), "\n                  "), "\n                "), "\n              "), "\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n\n  " ];
  }, function() {                                                                                                      // 126
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 127
  });                                                                                                                  // 128
}));                                                                                                                   // 129
                                                                                                                       // 130
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
    class: "tweetbox-container ampliacionMarginTopAllViews"                                                            // 6
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
    }), "Enviar\n              ", HTML.SPAN({                                                                          // 33
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
      class: "tweetfeed-container ampliacionMarginTopAllViews"                                                         // 11
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
      }, "\n                    ", HTML.STRONG("@", Blaze.View("lookup:..user", function() {                           // 31
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                            // 32
      })), "\n                  "), "\n                  ", HTML.DIV({                                                 // 33
        id: "containerDateTime"                                                                                        // 34
      }, " \n                    ", HTML.SPAN({                                                                        // 35
        class: "glyphicon glyphicon-hourglass",                                                                        // 36
        "aria-hidden": "true"                                                                                          // 37
      }), "\n                    ", Blaze.View("lookup:convertDateTime", function() {                                  // 38
        return Spacebars.mustache(view.lookup("convertDateTime"));                                                     // 39
      }), "\n                  "), "\n                "), "\n              "), HTML.Comment("Cabecera del twiit"), "\n              ", HTML.DIV({
        class: "panel-body"                                                                                            // 41
      }, HTML.Comment("Contenido del twiit"), "\n                ", Blaze.View("lookup:..message", function() {        // 42
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                         // 43
      }), "\n              "), HTML.Comment("Contenido del twiit"), "\n\n              ", HTML.DIV({                   // 44
        class: "btn-group",                                                                                            // 45
        role: "group",                                                                                                 // 46
        id: "btnGroupInteractions"                                                                                     // 47
      }, "\n                ", HTML.A({                                                                                // 48
        class: "btn btn-secondary"                                                                                     // 49
      }, "\n                  ", HTML.SPAN({                                                                           // 50
        class: "glyphicon glyphicon-bullhorn"                                                                          // 51
      }), "\n                "), "\n                ", Blaze.If(function() {                                           // 52
        return Spacebars.call(view.lookup("numComment"));                                                              // 53
      }, function() {                                                                                                  // 54
        return [ "\n                  ", HTML.A({                                                                      // 55
          href: function() {                                                                                           // 56
            return Spacebars.mustache(view.lookup("pathFor"), "twiitCommentPage", Spacebars.kw({                       // 57
              _id: Spacebars.dot(view.lookup("."), "_id")                                                              // 58
            }));                                                                                                       // 59
          },                                                                                                           // 60
          class: "btn"                                                                                                 // 61
        }, "\n                    ", HTML.SPAN({                                                                       // 62
          class: "glyphicon glyphicon-comment"                                                                         // 63
        }), "\n                    ", HTML.SPAN({                                                                      // 64
          class: "badge badge-numFav "                                                                                 // 65
        }, Blaze.View("lookup:..numComment", function() {                                                              // 66
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                    // 67
        })), "\n                  "), "\n                " ];                                                          // 68
      }, function() {                                                                                                  // 69
        return [ "\n                  ", HTML.A({                                                                      // 70
          id: "btnComm",                                                                                               // 71
          class: "btn btn-secondary"                                                                                   // 72
        }, "\n                    ", HTML.SPAN({                                                                       // 73
          class: "glyphicon glyphicon-comment"                                                                         // 74
        }), "\n                "), "\n                " ];                                                             // 75
      }), "\n                ", Blaze.If(function() {                                                                  // 76
        return Spacebars.call(view.lookup("numFav"));                                                                  // 77
      }, function() {                                                                                                  // 78
        return [ "\n                ", HTML.A({                                                                        // 79
          id: "btnFav",                                                                                                // 80
          class: "btn btn-secondary"                                                                                   // 81
        }, "\n                  ", HTML.SPAN({                                                                         // 82
          id: function() {                                                                                             // 83
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 84
          },                                                                                                           // 85
          class: function() {                                                                                          // 86
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 87
          }                                                                                                            // 88
        }), "\n                  ", HTML.SPAN({                                                                        // 89
          class: "badge badge-numFav"                                                                                  // 90
        }, Blaze.View("lookup:..numFav", function() {                                                                  // 91
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                        // 92
        })), "\n                "), "\n                " ];                                                            // 93
      }, function() {                                                                                                  // 94
        return [ "\n                  ", HTML.A({                                                                      // 95
          id: "btnFav",                                                                                                // 96
          class: "btn btn-secondary"                                                                                   // 97
        }, "\n                  ", HTML.SPAN({                                                                         // 98
          id: function() {                                                                                             // 99
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 100
          },                                                                                                           // 101
          class: function() {                                                                                          // 102
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 103
          }                                                                                                            // 104
        }), "\n                "), "\n                " ];                                                             // 105
      }), "\n              "), "\n            "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n          " ];
    }), "\n        "), "\n      "), "\n    "), "\n  " ];                                                               // 107
  }, function() {                                                                                                      // 108
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 109
  });                                                                                                                  // 110
}));                                                                                                                   // 111
                                                                                                                       // 112
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
      }, "\n                  ", HTML.STRONG("@", Blaze.View("lookup:..user", function() {                             // 26
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                            // 27
      })), "\n                  ", HTML.DIV({                                                                          // 28
        id: "containerDateTime"                                                                                        // 29
      }, " \n                    ", HTML.SPAN({                                                                        // 30
        class: "glyphicon glyphicon-hourglass",                                                                        // 31
        "aria-hidden": "true"                                                                                          // 32
      }), "\n                    ", Blaze.View("lookup:convertDateTime", function() {                                  // 33
        return Spacebars.mustache(view.lookup("convertDateTime"));                                                     // 34
      }), "\n                  "), "\n                "), "\n              "), HTML.Comment("Cabecera del twiit"), "\n              ", HTML.DIV({
        class: "panel-body"                                                                                            // 36
      }, HTML.Comment("Contenido del twiit"), "\n                ", Blaze.View("lookup:..message", function() {        // 37
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                         // 38
      }), "\n              "), HTML.Comment("Contenido del twiit"), "\n\n              ", HTML.DIV({                   // 39
        class: "btn-group",                                                                                            // 40
        role: "group",                                                                                                 // 41
        id: "btnGroupInteractions"                                                                                     // 42
      }, "\n                ", HTML.A({                                                                                // 43
        class: "btn btn-secondary"                                                                                     // 44
      }, "\n                  ", HTML.SPAN({                                                                           // 45
        class: "glyphicon glyphicon-bullhorn"                                                                          // 46
      }), "\n                "), "\n                ", Blaze.If(function() {                                           // 47
        return Spacebars.call(view.lookup("numComment"));                                                              // 48
      }, function() {                                                                                                  // 49
        return [ "\n                  ", HTML.A({                                                                      // 50
          href: function() {                                                                                           // 51
            return Spacebars.mustache(view.lookup("pathFor"), "twiitCommentPage", Spacebars.kw({                       // 52
              _id: Spacebars.dot(view.lookup("."), "_id")                                                              // 53
            }));                                                                                                       // 54
          },                                                                                                           // 55
          class: "btn btn-secondary"                                                                                   // 56
        }, "\n                    ", HTML.SPAN({                                                                       // 57
          class: "glyphicon glyphicon-comment"                                                                         // 58
        }), "\n                    ", HTML.SPAN({                                                                      // 59
          class: "badge-numFav badge"                                                                                  // 60
        }, Blaze.View("lookup:..numComment", function() {                                                              // 61
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                    // 62
        })), "\n                  "), "\n                " ];                                                          // 63
      }), "\n                ", Blaze.If(function() {                                                                  // 64
        return Spacebars.call(view.lookup("numFav"));                                                                  // 65
      }, function() {                                                                                                  // 66
        return [ "\n                  ", HTML.A({                                                                      // 67
          id: "btnFav",                                                                                                // 68
          class: "btn btn-secondary"                                                                                   // 69
        }, "\n                    ", HTML.SPAN({                                                                       // 70
          id: function() {                                                                                             // 71
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 72
          },                                                                                                           // 73
          class: function() {                                                                                          // 74
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 75
          }                                                                                                            // 76
        }), "\n                    ", HTML.SPAN({                                                                      // 77
          class: "badge badge-numFav"                                                                                  // 78
        }, Blaze.View("lookup:..numFav", function() {                                                                  // 79
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                        // 80
        })), "\n                  "), "\n                " ];                                                          // 81
      }, function() {                                                                                                  // 82
        return [ "\n                  ", HTML.A({                                                                      // 83
          id: "btnFav",                                                                                                // 84
          class: "btn btn-secondary"                                                                                   // 85
        }, "\n                    ", HTML.SPAN({                                                                       // 86
          id: function() {                                                                                             // 87
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 88
          },                                                                                                           // 89
          class: function() {                                                                                          // 90
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 91
          }                                                                                                            // 92
        }), "\n                  "), "\n                " ];                                                           // 93
      }), "\n              "), "\n            "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n          " ];
    }), "\n        "), "\n      "), "\n    "), "\n  " ];                                                               // 95
  }, function() {                                                                                                      // 96
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 97
  });                                                                                                                  // 98
}));                                                                                                                   // 99
                                                                                                                       // 100
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
      }, "\n                  ", HTML.STRONG("@", Blaze.View("lookup:..user", function() {                             // 29
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                            // 30
      }))), " \n                  ", HTML.DIV({                                                                        // 31
        id: "containerDateTime"                                                                                        // 32
      }, " \n                    ", HTML.SPAN({                                                                        // 33
        class: "glyphicon glyphicon-hourglass",                                                                        // 34
        "aria-hidden": "true"                                                                                          // 35
      }), "\n                    ", Blaze.View("lookup:convertDateTime", function() {                                  // 36
        return Spacebars.mustache(view.lookup("convertDateTime"));                                                     // 37
      }), "\n                  "), "\n                "), "\n              "), HTML.Comment("Cabecera del twiit"), "\n              ", HTML.DIV({
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
      }), "\n                "), "\n\n                ", HTML.A({                                                      // 50
        id: "btnComm",                                                                                                 // 51
        class: "btn btn-secondary"                                                                                     // 52
      }, "\n                  ", HTML.SPAN({                                                                           // 53
        class: "glyphicon glyphicon-comment"                                                                           // 54
      }), "\n                  ", HTML.SPAN({                                                                          // 55
        class: "badge-numFav badge"                                                                                    // 56
      }, Blaze.View("lookup:..numComment", function() {                                                                // 57
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numComment"));                                      // 58
      })), "\n                "), "\n\n                ", Blaze.If(function() {                                        // 59
        return Spacebars.call(view.lookup("numFav"));                                                                  // 60
      }, function() {                                                                                                  // 61
        return [ "\n                  ", HTML.A({                                                                      // 62
          id: "btnFav",                                                                                                // 63
          class: "btn btn-secondary"                                                                                   // 64
        }, "\n                    ", HTML.SPAN({                                                                       // 65
          id: function() {                                                                                             // 66
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 67
          },                                                                                                           // 68
          class: function() {                                                                                          // 69
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 70
          }                                                                                                            // 71
        }), "\n                    ", HTML.SPAN({                                                                      // 72
          class: "badge badge-numFav"                                                                                  // 73
        }, Blaze.View("lookup:..numFav", function() {                                                                  // 74
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                        // 75
        })), "\n                  "), "\n                " ];                                                          // 76
      }, function() {                                                                                                  // 77
        return [ "\n                  ", HTML.A({                                                                      // 78
          id: "btnFav",                                                                                                // 79
          class: "btn btn-secondary"                                                                                   // 80
        }, "\n                    ", HTML.SPAN({                                                                       // 81
          id: function() {                                                                                             // 82
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 83
          },                                                                                                           // 84
          class: function() {                                                                                          // 85
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 86
          }                                                                                                            // 87
        }), "\n                  "), "\n                " ];                                                           // 88
      }), "\n              "), "\n            "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n          " ];
    }), "\n          ", Blaze.Each(function() {                                                                        // 90
      return Spacebars.call(view.lookup("tweetThatCommentMessage"));                                                   // 91
    }, function() {                                                                                                    // 92
      return [ "\n            ", HTML.DIV({                                                                            // 93
        class: "panel panel-info"                                                                                      // 94
      }, HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n              ", HTML.DIV({               // 95
        class: "panel-heading"                                                                                         // 96
      }, HTML.Comment("Cabecera del twiit"), "\n                ", HTML.H3({                                           // 97
        class: "panel-title"                                                                                           // 98
      }, "\n                  ", HTML.A({                                                                              // 99
        href: function() {                                                                                             // 100
          return Spacebars.mustache(view.lookup("pathFor"), "userProfile", Spacebars.kw({                              // 101
            username: Spacebars.dot(view.lookup("."), "user")                                                          // 102
          }));                                                                                                         // 103
        }                                                                                                              // 104
      }, "\n                    ", HTML.STRONG("@", Blaze.View("lookup:..user", function() {                           // 105
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "user"));                                            // 106
      })), "\n                  "), " \n                  ", HTML.DIV({                                                // 107
        id: "containerDateTime"                                                                                        // 108
      }, " \n                    ", HTML.SPAN({                                                                        // 109
        class: "glyphicon glyphicon-hourglass",                                                                        // 110
        "aria-hidden": "true"                                                                                          // 111
      }), "\n                    ", Blaze.View("lookup:convertDateTime", function() {                                  // 112
        return Spacebars.mustache(view.lookup("convertDateTime"));                                                     // 113
      }), "\n                  "), "\n                "), "\n              "), HTML.Comment("Cabecera del twiit"), "\n              ", HTML.DIV({
        class: "panel-body"                                                                                            // 115
      }, HTML.Comment("Contenido del twiit"), "\n                ", Blaze.View("lookup:..message", function() {        // 116
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));                                         // 117
      }), "\n              "), HTML.Comment("Contenido del twiit"), "\n\n              ", HTML.DIV({                   // 118
        class: "btn-group",                                                                                            // 119
        role: "group",                                                                                                 // 120
        id: "btnGroupInteractions"                                                                                     // 121
      }, "\n                ", HTML.A({                                                                                // 122
        class: "btn btn-secondary"                                                                                     // 123
      }, "\n                  ", HTML.SPAN({                                                                           // 124
        class: "glyphicon glyphicon-bullhorn"                                                                          // 125
      }), "\n                "), "\n                ", Blaze.If(function() {                                           // 126
        return Spacebars.call(view.lookup("numFav"));                                                                  // 127
      }, function() {                                                                                                  // 128
        return [ "\n                ", HTML.A({                                                                        // 129
          id: "btnFav",                                                                                                // 130
          class: "btn btn-secondary"                                                                                   // 131
        }, "\n                  ", HTML.SPAN({                                                                         // 132
          id: function() {                                                                                             // 133
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 134
          },                                                                                                           // 135
          class: function() {                                                                                          // 136
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 137
          }                                                                                                            // 138
        }), "\n                  ", HTML.SPAN({                                                                        // 139
          class: "badge badge-numFav"                                                                                  // 140
        }, Blaze.View("lookup:..numFav", function() {                                                                  // 141
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "numFav"));                                        // 142
        })), "\n                "), "\n                " ];                                                            // 143
      }, function() {                                                                                                  // 144
        return [ "\n                  ", HTML.A({                                                                      // 145
          id: "btnFav",                                                                                                // 146
          class: "btn btn-secondary"                                                                                   // 147
        }, "\n                  ", HTML.SPAN({                                                                         // 148
          id: function() {                                                                                             // 149
            return Spacebars.mustache(view.lookup("idToFavBtn"));                                                      // 150
          },                                                                                                           // 151
          class: function() {                                                                                          // 152
            return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                      // 153
          }                                                                                                            // 154
        }), "\n                "), "\n                " ];                                                             // 155
      }), "\n              "), "\n            "), HTML.Comment("Contenido de la cabecera + el mensaje del twiit"), "\n          " ];
    }), "\n        "), "\n      "), "\n    "), "\n  " ];                                                               // 157
  }, function() {                                                                                                      // 158
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 159
  });                                                                                                                  // 160
}));                                                                                                                   // 161
                                                                                                                       // 162
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
          }, "\n                      ", HTML.STRONG("@", Blaze.View("lookup:..actorNotif", function() {               // 37
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "actorNotif"));                                  // 38
          }))), " \n                      ", HTML.DIV({                                                                // 39
            id: "containerDateTime"                                                                                    // 40
          }, " \n                        ", HTML.SPAN({                                                                // 41
            class: "glyphicon glyphicon-hourglass",                                                                    // 42
            "aria-hidden": "true"                                                                                      // 43
          }), "\n                        ", Blaze.View("lookup:convertDateTime", function() {                          // 44
            return Spacebars.mustache(view.lookup("convertDateTime"));                                                 // 45
          }), "\n                      "), "\n                     "), "\n                  "), "\n                  ", HTML.DIV({
            class: "panel-body"                                                                                        // 47
          }, "\n                    ", Blaze.View("lookup:..twiitMessage", function() {                                // 48
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitMessage"));                                // 49
          }), "\n                  "), "\n                  ", HTML.DIV({                                              // 50
            class: "btn-group",                                                                                        // 51
            role: "group",                                                                                             // 52
            id: "btnGroupInteractions"                                                                                 // 53
          }, "\n                    ", HTML.A({                                                                        // 54
            class: "btn btn-secondary"                                                                                 // 55
          }, "\n                      ", HTML.SPAN({                                                                   // 56
            class: "glyphicon glyphicon-bullhorn"                                                                      // 57
          }), "\n                    "), "\n                    ", Blaze.If(function() {                               // 58
            return Spacebars.call(view.lookup("findNumComment"));                                                      // 59
          }, function() {                                                                                              // 60
            return [ "\n                      ", HTML.A({                                                              // 61
              href: function() {                                                                                       // 62
                return Spacebars.mustache(view.lookup("pathFor"), "twiitCommentPage", Spacebars.kw({                   // 63
                  _id: Spacebars.dot(view.lookup("."), "_id")                                                          // 64
                }));                                                                                                   // 65
              },                                                                                                       // 66
              class: "btn btn-secondary"                                                                               // 67
            }, "\n                        ", HTML.SPAN({                                                               // 68
              class: "glyphicon glyphicon-comment"                                                                     // 69
            }), "\n                        ", HTML.SPAN({                                                              // 70
              class: "badge-numFav badge"                                                                              // 71
            }, Blaze.View("lookup:numComment", function() {                                                            // 72
              return Spacebars.mustache(view.lookup("numComment"));                                                    // 73
            })), "\n                      "), "\n                    " ];                                              // 74
          }, function() {                                                                                              // 75
            return [ "\n                      ", HTML.A({                                                              // 76
              id: "btnComm",                                                                                           // 77
              class: "btn btn-secondary"                                                                               // 78
            }, "\n                      ", HTML.SPAN({                                                                 // 79
              class: "glyphicon glyphicon-comment"                                                                     // 80
            }), "\n                    "), "\n                    " ];                                                 // 81
          }), "\n                    ", Blaze.If(function() {                                                          // 82
            return Spacebars.call(view.lookup("numFavorite"));                                                         // 83
          }, function() {                                                                                              // 84
            return [ "\n                      ", HTML.A({                                                              // 85
              id: "btnFav",                                                                                            // 86
              class: "btn btn-secondary"                                                                               // 87
            }, "\n                        ", HTML.SPAN({                                                               // 88
              id: function() {                                                                                         // 89
                return Spacebars.mustache(view.lookup("idToFavBtn"));                                                  // 90
              },                                                                                                       // 91
              class: function() {                                                                                      // 92
                return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                  // 93
              }                                                                                                        // 94
            }), "\n                        ", HTML.SPAN({                                                              // 95
              class: "badge badge-numFav"                                                                              // 96
            }, Blaze.View("lookup:numFav", function() {                                                                // 97
              return Spacebars.mustache(view.lookup("numFav"));                                                        // 98
            })), "\n                      "), "\n                    " ];                                              // 99
          }, function() {                                                                                              // 100
            return [ "\n                      ", HTML.A({                                                              // 101
              id: "btnFav",                                                                                            // 102
              class: "btn btn-secondary"                                                                               // 103
            }, "\n                        ", HTML.SPAN({                                                               // 104
              id: function() {                                                                                         // 105
                return Spacebars.mustache(view.lookup("idToFavBtn"));                                                  // 106
              },                                                                                                       // 107
              class: function() {                                                                                      // 108
                return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                  // 109
              }                                                                                                        // 110
            }), "\n                      "), "\n                    " ];                                               // 111
          }), "\n                  "), "\n                "), "\n              " ];                                    // 112
        }), "\n              ", Blaze.If(function() {                                                                  // 113
          return Spacebars.call(view.lookup("noCommNotif"));                                                           // 114
        }, function() {                                                                                                // 115
          return [ "\n                ", HTML.P("No tienes comentarios nuevos"), "    \n              " ];             // 116
        }, function() {                                                                                                // 117
          return [ "\n                ", HTML.BUTTON({                                                                 // 118
            id: "dismissCommNotif",                                                                                    // 119
            class: "btn btn-info pull-right btnDismissNotif",                                                          // 120
            type: "button"                                                                                             // 121
          }, "OK"), "\n              " ];                                                                              // 122
        }), "\n            " ];                                                                                        // 123
      }, function() {                                                                                                  // 124
        return [ "\n              ", Blaze.Each(function() {                                                           // 125
          return Spacebars.call(view.lookup("showFavs"));                                                              // 126
        }, function() {                                                                                                // 127
          return [ "\n                ", Blaze.View("lookup:saveIdInArr", function() {                                 // 128
            return Spacebars.mustache(view.lookup("saveIdInArr"));                                                     // 129
          }), "\n                ", HTML.DIV({                                                                         // 130
            class: "panel panel-info"                                                                                  // 131
          }, "\n                  ", HTML.DIV({                                                                        // 132
            class: "panel-heading"                                                                                     // 133
          }, "\n                    ", HTML.H3({                                                                       // 134
            class: "panel-title"                                                                                       // 135
          }, "\n                      ", HTML.A({                                                                      // 136
            href: function() {                                                                                         // 137
              return Spacebars.mustache(view.lookup("pathFor"), "userProfile", Spacebars.kw({                          // 138
                username: Spacebars.dot(view.lookup("."), "actorNotif")                                                // 139
              }));                                                                                                     // 140
            }                                                                                                          // 141
          }, "\n                      ", HTML.STRONG("@", Blaze.View("lookup:..actorNotif", function() {               // 142
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "actorNotif"));                                  // 143
          }))), " \n                      ", HTML.DIV({                                                                // 144
            id: "containerDateTime"                                                                                    // 145
          }, " \n                        ", HTML.SPAN({                                                                // 146
            class: "glyphicon glyphicon-hourglass",                                                                    // 147
            "aria-hidden": "true"                                                                                      // 148
          }), "\n                        ", Blaze.View("lookup:convertDateTime", function() {                          // 149
            return Spacebars.mustache(view.lookup("convertDateTime"));                                                 // 150
          }), "\n                      "), "\n                     "), "\n                  "), "\n                  ", HTML.DIV({
            class: "panel-body"                                                                                        // 152
          }, "\n                    ", Blaze.View("lookup:..twiitMessage", function() {                                // 153
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "twiitMessage"));                                // 154
          }), "\n                  "), "\n                  ", HTML.DIV({                                              // 155
            class: "btn-group",                                                                                        // 156
            role: "group",                                                                                             // 157
            id: "btnGroupInteractions"                                                                                 // 158
          }, "\n                    ", HTML.A({                                                                        // 159
            class: "btn btn-secondary"                                                                                 // 160
          }, "\n                      ", HTML.SPAN({                                                                   // 161
            class: "glyphicon glyphicon-bullhorn"                                                                      // 162
          }), "\n                    "), "\n                    ", Blaze.If(function() {                               // 163
            return Spacebars.call(view.lookup("findNumComment"));                                                      // 164
          }, function() {                                                                                              // 165
            return [ "\n                      ", HTML.A({                                                              // 166
              href: function() {                                                                                       // 167
                return Spacebars.mustache(view.lookup("pathFor"), "twiitCommentPage", Spacebars.kw({                   // 168
                  _id: Spacebars.dot(view.lookup("."), "_id")                                                          // 169
                }));                                                                                                   // 170
              },                                                                                                       // 171
              class: "btn btn-secondary"                                                                               // 172
            }, "\n                        ", HTML.SPAN({                                                               // 173
              class: "glyphicon glyphicon-comment"                                                                     // 174
            }), "\n                        ", HTML.SPAN({                                                              // 175
              class: "badge-numFav badge"                                                                              // 176
            }, Blaze.View("lookup:numComment", function() {                                                            // 177
              return Spacebars.mustache(view.lookup("numComment"));                                                    // 178
            })), "\n                      "), "\n                    " ];                                              // 179
          }, function() {                                                                                              // 180
            return [ "\n                      ", HTML.A({                                                              // 181
              id: "btnComm",                                                                                           // 182
              class: "btn btn-secondary"                                                                               // 183
            }, "\n                      ", HTML.SPAN({                                                                 // 184
              class: "glyphicon glyphicon-comment"                                                                     // 185
            }), "\n                    "), "\n                    " ];                                                 // 186
          }), "\n                    ", Blaze.If(function() {                                                          // 187
            return Spacebars.call(view.lookup("numFavorite"));                                                         // 188
          }, function() {                                                                                              // 189
            return [ "\n                      ", HTML.A({                                                              // 190
              id: "btnFav",                                                                                            // 191
              class: "btn btn-secondary"                                                                               // 192
            }, "\n                        ", HTML.SPAN({                                                               // 193
              id: function() {                                                                                         // 194
                return Spacebars.mustache(view.lookup("idToFavBtn"));                                                  // 195
              },                                                                                                       // 196
              class: function() {                                                                                      // 197
                return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                  // 198
              }                                                                                                        // 199
            }), "\n                        ", HTML.SPAN({                                                              // 200
              class: "badge badge-numFav"                                                                              // 201
            }, Blaze.View("lookup:numFav", function() {                                                                // 202
              return Spacebars.mustache(view.lookup("numFav"));                                                        // 203
            })), "\n                      "), "\n                    " ];                                              // 204
          }, function() {                                                                                              // 205
            return [ "\n                      ", HTML.A({                                                              // 206
              id: "btnFav",                                                                                            // 207
              class: "btn btn-secondary"                                                                               // 208
            }, "\n                        ", HTML.SPAN({                                                               // 209
              id: function() {                                                                                         // 210
                return Spacebars.mustache(view.lookup("idToFavBtn"));                                                  // 211
              },                                                                                                       // 212
              class: function() {                                                                                      // 213
                return [ "glyphicon glyphicon-heart ", Spacebars.mustache(view.lookup("classFav")) ];                  // 214
              }                                                                                                        // 215
            }), "\n                      "), "\n                    " ];                                               // 216
          }), "\n                  "), "\n                "), "\n              " ];                                    // 217
        }), "\n              ", Blaze.If(function() {                                                                  // 218
          return Spacebars.call(view.lookup("noFavsNotif"));                                                           // 219
        }, function() {                                                                                                // 220
          return [ "\n                ", HTML.P("No tienes favoritos nuevos"), "    \n              " ];               // 221
        }, function() {                                                                                                // 222
          return [ "\n                ", HTML.BUTTON({                                                                 // 223
            id: "dismissFavsNotif",                                                                                    // 224
            class: "btn btn-info pull-right btnDismissNotif",                                                          // 225
            type: "button"                                                                                             // 226
          }, "OK"), "\n              " ];                                                                              // 227
        }), "\n            " ];                                                                                        // 228
      }), "\n          " ];                                                                                            // 229
    }), "\n        "), "\n      "), "\n    "), "\n\n    ", HTML.NAV({                                                  // 230
      id: "navBarBtnShowNotif",                                                                                        // 231
      class: "navbar navbar-default navbar-fixed-bottom"                                                               // 232
    }, "\n      ", HTML.DIV({                                                                                          // 233
      class: "container"                                                                                               // 234
    }, "\n        ", HTML.DIV({                                                                                        // 235
      class: "navbar-header"                                                                                           // 236
    }, "\n          ", HTML.DIV({                                                                                      // 237
      class: "btn-group",                                                                                              // 238
      role: "group"                                                                                                    // 239
    }, "\n\n            ", HTML.BUTTON({                                                                               // 240
      style: function() {                                                                                              // 241
        return [ "width: ", Spacebars.mustache(view.lookup("setStyleNavBar")) ];                                       // 242
      },                                                                                                               // 243
      type: "button",                                                                                                  // 244
      id: "btnShowFavsNotif",                                                                                          // 245
      class: "btn btn-secondary btnGroupsShowNotif"                                                                    // 246
    }, "\n              ", HTML.SPAN({                                                                                 // 247
      class: "glyphicon glyphicon-heart"                                                                               // 248
    }), "\n              ", HTML.SPAN({                                                                                // 249
      class: "badge badge-notify-navbarFooter"                                                                         // 250
    }, Blaze.View("lookup:notifFavsCount", function() {                                                                // 251
      return Spacebars.mustache(view.lookup("notifFavsCount"));                                                        // 252
    })), "\n            "), "\n\n            ", HTML.BUTTON({                                                          // 253
      style: function() {                                                                                              // 254
        return [ "width: ", Spacebars.mustache(view.lookup("setStyleNavBar")) ];                                       // 255
      },                                                                                                               // 256
      type: "button",                                                                                                  // 257
      id: "btnShowCommNotif",                                                                                          // 258
      class: "btn btn-secondary btnGroupsShowNotif"                                                                    // 259
    }, "\n              ", HTML.SPAN({                                                                                 // 260
      class: "glyphicon glyphicon-comment"                                                                             // 261
    }), "\n              ", HTML.SPAN({                                                                                // 262
      class: "badge badge-notify-navbarFooter"                                                                         // 263
    }, Blaze.View("lookup:notifCommCount", function() {                                                                // 264
      return Spacebars.mustache(view.lookup("notifCommCount"));                                                        // 265
    })), "\n            "), "\n            \n          "), "\n        "), "\n      "), "\n    "), "\n\n    ", Blaze.View("lookup:selectTypeNotifToShow", function() {
      return Spacebars.mustache(view.lookup("selectTypeNotifToShow"));                                                 // 267
    }), "\n\n  " ];                                                                                                    // 268
  }, function() {                                                                                                      // 269
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 270
  });                                                                                                                  // 271
}));                                                                                                                   // 272
                                                                                                                       // 273
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
  return [ Blaze.If(function() {                                                                                       // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", Blaze.Unless(function() {                                                                       // 8
      return Spacebars.call(view.lookup("currentUser"));                                                               // 9
    }, function() {                                                                                                    // 10
      return [ "\n      ", Blaze.If(function() {                                                                       // 11
        return Spacebars.call(view.lookup("loginPage"));                                                               // 12
      }, function() {                                                                                                  // 13
        return [ "\n        ", Spacebars.include(view.lookupTemplate("loginUser")), "\n      " ];                      // 14
      }, function() {                                                                                                  // 15
        return [ "\n        ", Spacebars.include(view.lookupTemplate("registerNew")), "\n      " ];                    // 16
      }), "\n    " ];                                                                                                  // 17
    }), "\n  " ];                                                                                                      // 18
  }, function() {                                                                                                      // 19
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 20
  }), HTML.Raw(' \n\n  <div class="modal fade" id="dialog-errorLogin">\n    <div class="sentPet-container">\n        <div class="panel panel-default col-sm-6 col-md-6 col-lg-6">\n            <div class="panel-body">\n                <p id="errorContent" class="flow-text"></p>\n            </div>\n        </div>\n      </div>\n  </div>') ];
}));                                                                                                                   // 22
                                                                                                                       // 23
Template.__checkName("loginUser");                                                                                     // 24
Template["loginUser"] = new Template("Template.loginUser", (function() {                                               // 25
  var view = this;                                                                                                     // 26
  return HTML.Raw('<h1 class="text-center titleFormLogin">TNSClone</h1>\n\n  <div class="user-container formLogin">\n    <div class="panel panel-default userBox">\n      <div class="panel-body">\n        <div class="input-group form-group">\n          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>\n          <input name="nameProfile" class="form-control input input-login required" id="loginNameProfile" placeholder="Nombre de Usuario" required="true">\n        </div>\n        <div class="input-group form-group">\n          <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>\n          <input name="passProfile" class="form-control input input-login required" id="loginPassword" placeholder="Contraseña" type="password" required="true">\n        </div>\n\n        <button type="button" class="btn btn-info fullbutton login" id="login">Entrar</button>\n        <a class="text-center" id="goToRegisterPage">¿No tienes cuenta?</a>\n        <a class="text-center">¿Olvidó su contraseña?</a>\n      </div>\n    </div>\n  </div>');
}));                                                                                                                   // 28
                                                                                                                       // 29
Template.__checkName("registerNew");                                                                                   // 30
Template["registerNew"] = new Template("Template.registerNew", (function() {                                           // 31
  var view = this;                                                                                                     // 32
  return HTML.Raw('<h1 class="text-center titleFormLogin">Bienvenido</h1>\n\n  <div class="user-container formRegisterNew">\n    \n    <div class="panel panel-default userBox">\n      <div class="panel-body">\n        <form id="registerForm">\n          <div class="input-group form-group">\n            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>\n            <input name="nameProfile" class="form-control input-login required" id="signupUsername" placeholder="Nombre" required="true">\n          </div>\n          <div class="input-group form-group">\n            <span class="input-group-addon">@</span>\n            <input name="nameUserProfile" class="form-control input-login required" id="signupNameProfile" placeholder="Usuario" required="true">\n          </div>\n          <div class="input-group form-group">\n            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>\n            <input name="emailUser" class="form-control input-login required" id="signupEmail" placeholder="Email" type="email" required="true">\n          </div>\n          <div class="input-group form-group">\n            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>\n            <input name="password" class="form-control input-login" id="signupPassword" placeholder="Contraseña" type="password" required="true">\n          </div>\n          <div class="input-group form-group">\n            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>\n            <input name="password2" class="form-control input-login" id="signupPassword2" placeholder=" Repite la contraseña" type="password" required="true">\n          </div>\n        </form>\n        <button type="submit" class="btn btn-info fullbutton" id="signup">Regístrate</button> \n\n        <a class="text-center" id="goToLogInPage">¿Ya tienes cuenta?</a>\n      </div>\n    </div>\n  </div>');
}));                                                                                                                   // 34
                                                                                                                       // 35
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
          class: "user-container ampliacionMarginTopAllViews"                                                          // 15
        }, "\n          ", HTML.DIV({                                                                                  // 16
          class: "panel panel-default userBox"                                                                         // 17
        }, "\n            ", HTML.DIV({                                                                                // 18
          class: "panel-body"                                                                                          // 19
        }, "\n              ", HTML.Comment("Mensaje para el usuario registrado"), "\n              ", HTML.DIV({      // 20
          class: "row"                                                                                                 // 21
        }, "\n                ", HTML.Comment("CONTENIDO DE LA PARTE IZQUIERDA DEL PERFIL DEL USUARIO"), "\n                ", HTML.DIV({
          class: "col-md-7 col-sm-7 col-xs-7",                                                                         // 23
          id: "leftDivCurrentUser"                                                                                     // 24
        }, "\n                  ", HTML.Comment('EN LA ETIQUETA DE SRC, SE PONDRA EL NOMBRE DEL USUARIO ACTUAL\n                  <img id="imgCurrentUser" src="/{{currentUser.username}}.png" class="img-responsive">\n                  A MODO DE EJEMPLO, VAMOS A UTILIZAR UNO GENERICO PARA QUE CARGUE EN CUALQUIER USUARIO'), "\n                  ", HTML.IMG({
          id: "imgCurrentUser",                                                                                        // 26
          src: function() {                                                                                            // 27
            return Spacebars.mustache(view.lookup("userImgFound"));                                                    // 28
          },                                                                                                           // 29
          class: "imgUserProfile",                                                                                     // 30
          alt: function() {                                                                                            // 31
            return [ "Profile Image ", Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userNameProfile")) ];
          }                                                                                                            // 33
        }), "\n                "), "\n                ", HTML.Comment("CONTENIDO DE LA PARTE DERECHA DEL PERFIL DEL USUARIO"), "\n                ", HTML.DIV({
          class: "col-md-5 col-sm-5 col-xs-5",                                                                         // 35
          id: "rightDivCurrentUser"                                                                                    // 36
        }, "\n                  ", HTML.Comment("ESTA DESCRIPCION ES GENERICA. HAY QUE CAMBIARLA POR LA QUE APAREZCA EN userData.description"), "\n                  ", Blaze.View("lookup:dataUserFound.userDescription", function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userDescription"));                   // 38
        }), "\n                "), "\n              "), "\n\n              ", HTML.DIV({                               // 39
          class: "currentUserName"                                                                                     // 40
        }, "\n                ", HTML.DIV({                                                                            // 41
          class: "col-md-5 col-sm-5 col-xs-5 nameUserAndProfile"                                                       // 42
        }, "\n                  ", HTML.H3(HTML.STRONG(Blaze.View("lookup:dataUserFound.userName", function() {        // 43
          return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userName"));                          // 44
        }))), "\n                  ", HTML.H5("@", Blaze.View("lookup:dataUserFound.userNameProfile", function() {     // 45
          return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userNameProfile"));                   // 46
        })), "\n                "), "\n                ", HTML.DIV({                                                   // 47
          class: "col-md-7 col-sm-7 col-xs-7 dropdown btnOptionsProfile"                                               // 48
        }, "\n                  ", Blaze.If(function() {                                                               // 49
          return Spacebars.call(view.lookup("showProfileOtherUser"));                                                  // 50
        }, function() {                                                                                                // 51
          return [ "\n                    ", HTML.BUTTON({                                                             // 52
            id: "dropdownOptionsUser",                                                                                 // 53
            class: "btn btn-primary dropdown-toggle optionsUserProfile",                                               // 54
            type: "button",                                                                                            // 55
            "data-toggle": "dropdown",                                                                                 // 56
            "aria-haspopup": "true",                                                                                   // 57
            "aria-expanded": "true"                                                                                    // 58
          }, "\n                      ", HTML.SPAN({                                                                   // 59
            class: "glyphicon glyphicon-option-vertical"                                                               // 60
          }), "\n                    "), "\n                    ", HTML.UL({                                           // 61
            class: "dropdown-menu",                                                                                    // 62
            "aria-labelledby": "dropdownOptionsUser"                                                                   // 63
          }, "\n                      ", Blaze.If(function() {                                                         // 64
            return Spacebars.call(view.lookup("currentUser"));                                                         // 65
          }, function() {                                                                                              // 66
            return [ "\n                        ", HTML.LI(HTML.A({                                                    // 67
              href: function() {                                                                                       // 68
                return Spacebars.mustache(view.lookup("pathFor"), "editProfile", Spacebars.kw({                        // 69
                  userName: view.lookup("currentUser")                                                                 // 70
                }));                                                                                                   // 71
              },                                                                                                       // 72
              id: "editProfile"                                                                                        // 73
            }, "Editar Perfil")), "\n                      " ];                                                        // 74
          }), "\n                      ", HTML.LI(HTML.A({                                                             // 75
            href: "#",                                                                                                 // 76
            id: "editWhatsLicenses"                                                                                    // 77
          }, "Editar Permisos de WhatsApp")), "\n                      ", HTML.LI(HTML.A({                             // 78
            href: "#",                                                                                                 // 79
            id: "removeProfile",                                                                                       // 80
            "data-toggle": "modal",                                                                                    // 81
            "data-target": "#dialog-removeProfile"                                                                     // 82
          }, "Eliminar Perfil")), "\n                      ", HTML.LI({                                                // 83
            role: "separator",                                                                                         // 84
            class: "divider"                                                                                           // 85
          }), "\n                      ", HTML.LI(HTML.A({                                                             // 86
            href: "#",                                                                                                 // 87
            id: "logout"                                                                                               // 88
          }, "Salir")), "\n                    "), "\n                  " ];                                           // 89
        }), "\n                  ", HTML.DIV({                                                                         // 90
          id: "optionsUserProfile"                                                                                     // 91
        }, "\n                    ", Blaze.Unless(function() {                                                         // 92
          return Spacebars.call(view.lookup("showProfileOtherUser"));                                                  // 93
        }, function() {                                                                                                // 94
          return [ "\n                      ", Blaze.If(function() {                                                   // 95
            return Spacebars.call(view.lookup("userIsFollowMe"));                                                      // 96
          }, function() {                                                                                              // 97
            return [ "\n                        ", HTML.BUTTON({                                                       // 98
              class: "btn btn-info pull-right btnOptFol",                                                              // 99
              type: "button",                                                                                          // 100
              id: "btnUnfollow"                                                                                        // 101
            }, "Olvidar"), "\n                      " ];                                                               // 102
          }, function() {                                                                                              // 103
            return [ "\n                        ", HTML.BUTTON({                                                       // 104
              class: "btn btn-info pull-right btnOptFol",                                                              // 105
              type: "button",                                                                                          // 106
              id: "btnFollow"                                                                                          // 107
            }, "Seguir"), "\n                      " ];                                                                // 108
          }), "\n                    " ];                                                                              // 109
        }), "\n                    ", Blaze.Each(function() {                                                          // 110
          return Spacebars.call(view.lookup("existsSocialNetwork"));                                                   // 111
        }, function() {                                                                                                // 112
          return [ "  \n                      ", Blaze.If(function() {                                                 // 113
            return Spacebars.call(view.lookup("showProfileOtherUser"));                                                // 114
          }, function() {                                                                                              // 115
            return [ "\n                        ", Blaze.If(function() {                                               // 116
              return Spacebars.call(view.lookup("isWhatsapp"));                                                        // 117
            }, function() {                                                                                            // 118
              return [ "\n                          ", HTML.BUTTON({                                                   // 119
                type: "button",                                                                                        // 120
                id: function() {                                                                                       // 121
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                    // 122
                },                                                                                                     // 123
                class: function() {                                                                                    // 124
                  return [ "btn btn-", Spacebars.mustache(Spacebars.dot(view.lookup("."), "color")), " btn-circle optionsUserProfile btnShowSN" ];
                },                                                                                                     // 126
                "data-toggle": "tooltip",                                                                              // 127
                title: function() {                                                                                    // 128
                  return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userWhats"));                 // 129
                },                                                                                                     // 130
                "data-placement": "top"                                                                                // 131
              }, "\n                            ", HTML.I({                                                            // 132
                id: function() {                                                                                       // 133
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                    // 134
                },                                                                                                     // 135
                class: function() {                                                                                    // 136
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "class"));                                 // 137
                },                                                                                                     // 138
                style: "font-size: 24px;"                                                                              // 139
              }), "\n                          "), "\n                        " ];                                     // 140
            }, function() {                                                                                            // 141
              return [ "\n                          ", HTML.BUTTON({                                                   // 142
                type: "button",                                                                                        // 143
                id: function() {                                                                                       // 144
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                    // 145
                },                                                                                                     // 146
                class: function() {                                                                                    // 147
                  return [ "btn btn-", Spacebars.mustache(Spacebars.dot(view.lookup("."), "color")), " btn-circle optionsUserProfile btnShowSN" ];
                }                                                                                                      // 149
              }, "\n                            ", HTML.I({                                                            // 150
                id: function() {                                                                                       // 151
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                    // 152
                },                                                                                                     // 153
                class: function() {                                                                                    // 154
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "class"));                                 // 155
                },                                                                                                     // 156
                style: "font-size: 24px;"                                                                              // 157
              }), "\n                          "), "\n                        " ];                                     // 158
            }), "\n                      " ];                                                                          // 159
          }, function() {                                                                                              // 160
            return [ "\n                        ", Blaze.If(function() {                                               // 161
              return Spacebars.call(view.lookup("isWhatsapp"));                                                        // 162
            }, function() {                                                                                            // 163
              return [ "\n                          ", HTML.BUTTON({                                                   // 164
                type: "button",                                                                                        // 165
                id: function() {                                                                                       // 166
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                    // 167
                },                                                                                                     // 168
                class: function() {                                                                                    // 169
                  return [ "btn btn-", Spacebars.mustache(Spacebars.dot(view.lookup("."), "color")), " btn-circle optionsUserProfile btnShowSN" ];
                },                                                                                                     // 171
                "data-toggle": "tooltip",                                                                              // 172
                title: function() {                                                                                    // 173
                  return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userWhats"));                 // 174
                },                                                                                                     // 175
                "data-placement": "top"                                                                                // 176
              }, "\n                            ", HTML.I({                                                            // 177
                id: function() {                                                                                       // 178
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                    // 179
                },                                                                                                     // 180
                class: function() {                                                                                    // 181
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "class"));                                 // 182
                },                                                                                                     // 183
                style: "font-size: 24px;"                                                                              // 184
              }), "\n                          "), "\n                        " ];                                     // 185
            }, function() {                                                                                            // 186
              return [ "\n                          ", HTML.BUTTON({                                                   // 187
                type: "button",                                                                                        // 188
                id: function() {                                                                                       // 189
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                    // 190
                },                                                                                                     // 191
                class: function() {                                                                                    // 192
                  return [ "btn btn-", Spacebars.mustache(Spacebars.dot(view.lookup("."), "color")), " btn-circle optionsUserProfile btnShowSN" ];
                }                                                                                                      // 194
              }, "\n                            ", HTML.I({                                                            // 195
                id: function() {                                                                                       // 196
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                    // 197
                },                                                                                                     // 198
                class: function() {                                                                                    // 199
                  return Spacebars.mustache(Spacebars.dot(view.lookup("."), "class"));                                 // 200
                },                                                                                                     // 201
                style: "font-size: 24px;"                                                                              // 202
              }), "\n                          "), "\n                        " ];                                     // 203
            }), "\n                      " ];                                                                          // 204
          }), "\n                    " ];                                                                              // 205
        }), "\n                  "), "\n                "), "\n              "), "\n                \n              ", HTML.Comment('\n              <button type="button" class="btn btn-info fullbutton" id="modProfile">Editar Perfil</button>\n              <button type="button" class="btn btn-info fullbutton" id="logout">Salir</button>\n              '), "\n              ", HTML.TABLE({
          class: "table"                                                                                               // 207
        }, "  \n                ", HTML.TR("\n                  ", HTML.TD({                                           // 208
          class: "tableHeader"                                                                                         // 209
        }, "Twitts"), "\n                  ", HTML.TD({                                                                // 210
          class: "tableHeader"                                                                                         // 211
        }, "Siguiendo"), "\n                  ", HTML.TD({                                                             // 212
          class: "tableHeader"                                                                                         // 213
        }, "Seguidores"), "\n                "), "\n                ", HTML.TR("\n                  ", HTML.TD({       // 214
          class: "tableContent"                                                                                        // 215
        }, Blaze.View("lookup:tweets", function() {                                                                    // 216
          return Spacebars.mustache(view.lookup("tweets"));                                                            // 217
        })), "\n                  ", HTML.TD({                                                                         // 218
          class: "tableContent showFollowings"                                                                         // 219
        }, Blaze.View("lookup:following", function() {                                                                 // 220
          return Spacebars.mustache(view.lookup("following"));                                                         // 221
        })), "\n                  ", HTML.TD({                                                                         // 222
          class: "tableContent showFollowers"                                                                          // 223
        }, Blaze.View("lookup:followers", function() {                                                                 // 224
          return Spacebars.mustache(view.lookup("followers"));                                                         // 225
        })), "\n                "), "\n              "), "\n              \n              ", HTML.DIV({                // 226
          class: "modal fade",                                                                                         // 227
          id: "dialog-showSocialNetwork"                                                                               // 228
        }, "\n                ", Spacebars.include(view.lookupTemplate("sendRequest")), "\n              "), "\n\n              ", HTML.DIV({
          class: "modal fade",                                                                                         // 230
          id: "dialog-removeProfile"                                                                                   // 231
        }, "\n                ", Spacebars.include(view.lookupTemplate("removeProfile")), "\n              "), "\n\n              ", HTML.DIV({
          class: "modal fade",                                                                                         // 233
          id: "dialog-stopFollowing"                                                                                   // 234
        }, "\n                ", Spacebars.include(view.lookupTemplate("stopFollowing")), "\n              "), "\n\n              ", HTML.DIV({
          class: "modal fade",                                                                                         // 236
          id: "dialog-editLicenses"                                                                                    // 237
        }, "\n                ", Spacebars.include(view.lookupTemplate("editLicenses")), "\n              "), "\n\n              ", HTML.DIV({
          class: "modal fade",                                                                                         // 239
          id: "dialog-showImageProfile"                                                                                // 240
        }, "\n                ", HTML.IMG({                                                                            // 241
          id: function() {                                                                                             // 242
            return [ "img", Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userNameProfile")) ];      // 243
          },                                                                                                           // 244
          src: "",                                                                                                     // 245
          class: "imgUserProfile"                                                                                      // 246
        }), "\n                ", HTML.SPAN({                                                                          // 247
          id: "btnCloseModalImgProfile",                                                                               // 248
          class: "close"                                                                                               // 249
        }, HTML.CharRef({                                                                                              // 250
          html: "&times;",                                                                                             // 251
          str: "×"                                                                                                     // 252
        })), "\n                ", HTML.P({                                                                            // 253
          id: "titleImgUserProfile",                                                                                   // 254
          align: "center"                                                                                              // 255
        }, HTML.B("@", Blaze.View("lookup:dataUserFound.userNameProfile", function() {                                 // 256
          return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userNameProfile"));                   // 257
        }))), "\n              "), "\n\n              ", HTML.DIV({                                                    // 258
          class: "modal fade",                                                                                         // 259
          id: "dialog-operationSuccess"                                                                                // 260
        }, "\n                ", HTML.DIV({                                                                            // 261
          class: "sentPet-container"                                                                                   // 262
        }, "\n                    ", HTML.DIV({                                                                        // 263
          class: "panel panel-default col-sm-6 col-md-6 col-lg-6"                                                      // 264
        }, "\n                        ", HTML.DIV({                                                                    // 265
          class: "panel-body"                                                                                          // 266
        }, "\n                        ", HTML.Comment('<img src="/emoticonoSad.png" class="img-responsive">'), "\n                            ", HTML.P({
          style: "margin: 0px;"                                                                                        // 268
        }, "La petición se ha enviado a ", HTML.STRONG(Blaze.View("lookup:dataUserFound.userNameProfile", function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("dataUserFound"), "userNameProfile"));                   // 270
        }))), "\n                        "), "\n                    "), "\n                  "), "\n              "), "\n\n            "), "\n          "), "\n        "), "\n        ", HTML.DIV({
          id: "divTweetFeed",                                                                                          // 272
          class: "col-md-8 col-sm-8"                                                                                   // 273
        }, Spacebars.include(view.lookupTemplate("tweetFeedProfile"))), "\n      " ];                                  // 274
      }, function() {                                                                                                  // 275
        return [ "\n        ", Spacebars.include(view.lookupTemplate("pageNotFound")), "\n      " ];                   // 276
      }), "\n    " ];                                                                                                  // 277
    }), "\n  " ];                                                                                                      // 278
  }, function() {                                                                                                      // 279
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 280
  });                                                                                                                  // 281
}));                                                                                                                   // 282
                                                                                                                       // 283
Template.__checkName("stopFollowing");                                                                                 // 284
Template["stopFollowing"] = new Template("Template.stopFollowing", (function() {                                       // 285
  var view = this;                                                                                                     // 286
  return Blaze.If(function() {                                                                                         // 287
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 288
  }, function() {                                                                                                      // 289
    return [ "\n    ", HTML.DIV({                                                                                      // 290
      class: "removeProfile-container"                                                                                 // 291
    }, "\n      ", HTML.DIV({                                                                                          // 292
      class: "panel panel-default col-sm-6 col-md-6 col-lg-6"                                                          // 293
    }, "\n        ", HTML.DIV({                                                                                        // 294
      class: "panel-body"                                                                                              // 295
    }, "\n          ", HTML.IMG({                                                                                      // 296
      src: "/emoticonoSad.png",                                                                                        // 297
      class: "img-responsive"                                                                                          // 298
    }), "\n          ", HTML.P("¿Dejar de seguir?"), "\n          ", HTML.BUTTON({                                     // 299
      id: "stopFolBtn",                                                                                                // 300
      type: "button",                                                                                                  // 301
      class: "btn btn-primary"                                                                                         // 302
    }, "\n            ", HTML.I({                                                                                      // 303
      class: "glyphicon glyphicon-ok-circle"                                                                           // 304
    }), "\n          "), "\n          ", HTML.BUTTON({                                                                 // 305
      id: "noStopFolBtn",                                                                                              // 306
      type: "button",                                                                                                  // 307
      class: "btn btn-danger"                                                                                          // 308
    }, "\n            ", HTML.I({                                                                                      // 309
      class: "glyphicon glyphicon-remove-circle"                                                                       // 310
    }), "\n          "), "\n        "), "\n      "), "\n    "), "\n  " ];                                              // 311
  }, function() {                                                                                                      // 312
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 313
  });                                                                                                                  // 314
}));                                                                                                                   // 315
                                                                                                                       // 316
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.videoTrans.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/template.videoTrans.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("videoTrans");                                                                                    // 2
Template["videoTrans"] = new Template("Template.videoTrans", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n  ", Blaze.View("lookup:chargeVideo", function() {                                                     // 8
      return Spacebars.mustache(view.lookup("chargeVideo"));                                                           // 9
    }), "\n    ", HTML.DIV({                                                                                           // 10
      class: "user-container"                                                                                          // 11
    }, "\n      ", HTML.DIV({                                                                                          // 12
      class: "panel panel-default userBox"                                                                             // 13
    }, "\n        ", HTML.DIV({                                                                                        // 14
      class: "panel-body"                                                                                              // 15
    }, "\n          ", HTML.DIV({                                                                                      // 16
      class: "row col s12"                                                                                             // 17
    }, "\n            ", HTML.VIDEO({                                                                                  // 18
      width: "550",                                                                                                    // 19
      height: "270",                                                                                                   // 20
      autoplay: "true",                                                                                                // 21
      style: "padding-right:160px;"                                                                                    // 22
    }, "\n              Your browser does not support HTML5 video.\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  " ];
  }, function() {                                                                                                      // 24
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 25
  });                                                                                                                  // 26
}));                                                                                                                   // 27
                                                                                                                       // 28
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
        }, "\n                  Solicitud de WhatsApp de \n                  ", HTML.A({                               // 27
          href: function() {                                                                                           // 28
            return Spacebars.mustache(view.lookup("pathFor"), "userProfile", Spacebars.kw({                            // 29
              username: Spacebars.dot(view.lookup("."), "actorNotif")                                                  // 30
            }));                                                                                                       // 31
          }                                                                                                            // 32
        }, "\n                    ", HTML.STRONG("@", Blaze.View("lookup:..actorNotif", function() {                   // 33
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "actorNotif"));                                    // 34
        })), "\n                  "), "\n                "), "\n              "), "\n              ", HTML.DIV({       // 35
          class: "panel-body"                                                                                          // 36
        }, "\n                ", HTML.P("¿Desea aceptar o rechazar la solicitud?"), "\n              "), "\n            "), "\n            ", HTML.BUTTON({
          id: "sentYes",                                                                                               // 38
          type: "button",                                                                                              // 39
          class: "btn btn-info"                                                                                        // 40
        }, "\n              ", HTML.I({                                                                                // 41
          class: "glyphicon glyphicon-ok-circle"                                                                       // 42
        }), "\n            "), "\n            ", HTML.BUTTON({                                                         // 43
          id: "sentNo",                                                                                                // 44
          type: "button",                                                                                              // 45
          class: "btn btn-danger"                                                                                      // 46
        }, "\n              ", HTML.I({                                                                                // 47
          class: "glyphicon glyphicon-remove-circle"                                                                   // 48
        }), "\n            "), "\n          "), "\n        "), "\n      "), "\n    " ];                                // 49
      }), "\n    " ];                                                                                                  // 50
    }), "\n\n    ", Blaze.If(function() {                                                                              // 51
      return Spacebars.call(view.lookup("countNotifResponse"));                                                        // 52
    }, function() {                                                                                                    // 53
      return [ "\n    ", HTML.DIV({                                                                                    // 54
        class: "tweetfeed-container"                                                                                   // 55
      }, "\n      ", HTML.DIV({                                                                                        // 56
        class: "panel panel-default tweetfeed"                                                                         // 57
      }, "\n        ", HTML.DIV({                                                                                      // 58
        class: "panel-body"                                                                                            // 59
      }, "\n          ", Blaze.Each(function() {                                                                       // 60
        return Spacebars.call(view.lookup("whatsResponseNotif"));                                                      // 61
      }, function() {                                                                                                  // 62
        return [ "\n            ", HTML.Comment(" Texto para el contenido del Twitt "), "\n            ", HTML.DIV({   // 63
          class: "panel panel-info",                                                                                   // 64
          id: function() {                                                                                             // 65
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "actorNotif"));                                  // 66
          }                                                                                                            // 67
        }, "\n              ", HTML.DIV({                                                                              // 68
          class: "panel-heading"                                                                                       // 69
        }, "\n                ", HTML.H3({                                                                             // 70
          class: "panel-title"                                                                                         // 71
        }, "\n                  Respuesta de solicitud de WhatsApp de \n                  ", HTML.A({                  // 72
          href: function() {                                                                                           // 73
            return Spacebars.mustache(view.lookup("pathFor"), "userProfile", Spacebars.kw({                            // 74
              username: Spacebars.dot(view.lookup("."), "actorNotif")                                                  // 75
            }));                                                                                                       // 76
          }                                                                                                            // 77
        }, "\n                    ", HTML.STRONG("@", Blaze.View("lookup:..actorNotif", function() {                   // 78
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "actorNotif"));                                    // 79
        })), "\n                  "), "\n                "), "\n              "), "\n              ", HTML.DIV({       // 80
          class: "panel-body"                                                                                          // 81
        }, "\n                ", Blaze.If(function() {                                                                 // 82
          return Spacebars.call(Spacebars.dot(view.lookup("."), "stateResponse"));                                     // 83
        }, function() {                                                                                                // 84
          return [ "\n                  ", HTML.P("Ha sido aceptada!"), "\n                " ];                        // 85
        }, function() {                                                                                                // 86
          return [ "\n                  ", HTML.P("Ha sido rechazada =("), "\n                " ];                     // 87
        }), "\n              "), "\n              ", HTML.DIV({                                                        // 88
          class: "btn-group",                                                                                          // 89
          role: "group",                                                                                               // 90
          id: "btnGroupResWhatsNotif"                                                                                  // 91
        }, "\n                ", HTML.A({                                                                              // 92
          id: "goToProfile",                                                                                           // 93
          class: "btn btn-secondary"                                                                                   // 94
        }, "\n                  ", HTML.SPAN({                                                                         // 95
          class: "glyphicon glyphicon-user"                                                                            // 96
        }), "\n                "), "\n                ", HTML.A({                                                      // 97
          class: "btn btn-secondary"                                                                                   // 98
        }, "\n                  ", HTML.SPAN({                                                                         // 99
          id: "clearNotif",                                                                                            // 100
          class: "glyphicon glyphicon-remove"                                                                          // 101
        }), "\n                "), "\n              "), "\n            "), "\n          " ];                           // 102
      }), "\n        "), "\n      "), "\n    "), "\n    " ];                                                           // 103
    }), "\n  " ];                                                                                                      // 104
  }, function() {                                                                                                      // 105
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 106
  });                                                                                                                  // 107
}));                                                                                                                   // 108
                                                                                                                       // 109
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"conversationsMenu.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/conversationsMenu.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.conversationsMenu.onCreated(function () {                                                                     // 1
  Session.set('showMessages', true);                                                                                   // 2
});                                                                                                                    // 3
                                                                                                                       //
Template.conversationsMenu.helpers({                                                                                   // 5
  'setStyleNavBar': function () {                                                                                      // 6
    function setStyleNavBar() {                                                                                        // 6
      var widthNav = $(window).width();                                                                                // 7
      //RESTAMOS DOS PIXELES POR LOS BORDES                                                                            // 8
      widthNav -= 2;                                                                                                   // 9
      return widthNav / 2 + "px";                                                                                      // 10
    }                                                                                                                  // 11
                                                                                                                       //
    return setStyleNavBar;                                                                                             // 6
  }(),                                                                                                                 // 6
                                                                                                                       //
  'btnShowMessages': function () {                                                                                     // 13
    function btnShowMessages() {                                                                                       // 13
      return Session.get('showMessages');                                                                              // 14
    }                                                                                                                  // 15
                                                                                                                       //
    return btnShowMessages;                                                                                            // 13
  }(),                                                                                                                 // 13
                                                                                                                       //
  'showChatsForThisUser': function () {                                                                                // 17
    function showChatsForThisUser() {                                                                                  // 17
      return Meteor.call('findChatsAvailable');                                                                        // 18
    }                                                                                                                  // 19
                                                                                                                       //
    return showChatsForThisUser;                                                                                       // 17
  }(),                                                                                                                 // 17
                                                                                                                       //
  'chatName': function () {                                                                                            // 21
    function chatName(nameChat) {                                                                                      // 21
      var usersInChat = nameChat.split('_');                                                                           // 22
      var chatUserName = usersInChat[usersInChat.indexOf(Meteor.user().username)];                                     // 23
      return chatUserName;                                                                                             // 24
    }                                                                                                                  // 25
                                                                                                                       //
    return chatName;                                                                                                   // 21
  }()                                                                                                                  // 21
});                                                                                                                    // 5
                                                                                                                       //
Template.conversationsMenu.events({                                                                                    // 28
  'click #btnShowContacts': function () {                                                                              // 29
    function clickBtnShowContacts() {                                                                                  // 29
      Session.set('showMessages', false);                                                                              // 30
    }                                                                                                                  // 31
                                                                                                                       //
    return clickBtnShowContacts;                                                                                       // 29
  }(),                                                                                                                 // 29
  'click #btnShowMessages': function () {                                                                              // 32
    function clickBtnShowMessages() {                                                                                  // 32
      Session.set('showMessages', true);                                                                               // 33
    }                                                                                                                  // 34
                                                                                                                       //
    return clickBtnShowMessages;                                                                                       // 32
  }(),                                                                                                                 // 32
  'click .goToConversation': function () {                                                                             // 35
    function clickGoToConversation(event) {                                                                            // 35
      Meteor.call('createChat', event.currentTarget.id);                                                               // 36
    }                                                                                                                  // 37
                                                                                                                       //
    return clickGoToConversation;                                                                                      // 35
  }()                                                                                                                  // 35
});                                                                                                                    // 28
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
                                                                                                                       //
  arrAux = currDataUser.showWhatsTo;                                                                                   // 5
  var usersFound = new Array();                                                                                        // 6
  for (var i in meteorBabelHelpers.sanitizeForInObject(arrAux)) {                                                      // 7
    Meteor.call('findUserDataWithId', arrAux[i], function (err, res) {                                                 // 8
      var aux = new Object();                                                                                          // 9
      aux.name = res.userNameProfile;                                                                                  // 10
      aux.userId = res.userId;                                                                                         // 11
      usersFound.push(aux);                                                                                            // 12
      Session.set('usersFound', usersFound);                                                                           // 13
    });                                                                                                                // 14
  };                                                                                                                   // 15
                                                                                                                       //
  if (arrAux.length > 0) {                                                                                             // 17
    Session.set('countUsersFound', true);                                                                              // 18
  } else {                                                                                                             // 19
    Session.set('countUsersFound', false);                                                                             // 20
  }                                                                                                                    // 21
});                                                                                                                    // 22
                                                                                                                       //
Template.editLicenses.events({                                                                                         // 24
  'click #scrollSpy a': function () {                                                                                  // 25
    function clickScrollSpyA(event) {                                                                                  // 25
      selectUser = event.target.id;                                                                                    // 26
    }                                                                                                                  // 27
                                                                                                                       //
    return clickScrollSpyA;                                                                                            // 25
  }(),                                                                                                                 // 25
                                                                                                                       //
  'click #remLicense': function () {                                                                                   // 29
    function clickRemLicense(event) {                                                                                  // 29
      var pos = arrAux.indexOf(selectUser);                                                                            // 30
      arrAux.splice(pos, 1);                                                                                           // 31
                                                                                                                       //
      var data = new Object();                                                                                         // 33
      data.userId = currDataUser.userId;                                                                               // 34
      data.showWhats = arrAux;                                                                                         // 35
                                                                                                                       //
      Session.set('usersFound', arrAux);                                                                               // 37
                                                                                                                       //
      if (arrAux.length > 0) {                                                                                         // 39
        Session.set('countUsersFound', true);                                                                          // 40
      } else {                                                                                                         // 41
        Session.set('countUsersFound', false);                                                                         // 42
      }                                                                                                                // 43
                                                                                                                       //
      //POR ULTIMO ACTUALIZAMOS EL VALOR DE ESTE ARRAY EN LA BBDD                                                      // 45
      Meteor.call('updateShowWhatsTo', data);                                                                          // 46
    }                                                                                                                  // 47
                                                                                                                       //
    return clickRemLicense;                                                                                            // 29
  }()                                                                                                                  // 29
});                                                                                                                    // 24
                                                                                                                       //
Template.editLicenses.helpers({                                                                                        // 50
  'userWhatsCount': function () {                                                                                      // 51
    function userWhatsCount() {                                                                                        // 51
      return Session.get('countUsersFound');                                                                           // 52
    }                                                                                                                  // 53
                                                                                                                       //
    return userWhatsCount;                                                                                             // 51
  }(),                                                                                                                 // 51
                                                                                                                       //
  'responseLicenses': function () {                                                                                    // 55
    function responseLicenses() {                                                                                      // 55
      return Session.get('usersFound');                                                                                // 56
    }                                                                                                                  // 57
                                                                                                                       //
    return responseLicenses;                                                                                           // 55
  }()                                                                                                                  // 55
});                                                                                                                    // 50
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

},"followAnts.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/followAnts.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.followAnts.onCreated(function () {                                                                            // 1
  Session.set('notificationsModeOn', true);                                                                            // 2
});                                                                                                                    // 3
                                                                                                                       //
Template.followAnts.helpers({                                                                                          // 5
  'setStyleNavBar': function () {                                                                                      // 6
    function setStyleNavBar() {                                                                                        // 6
      var widthNav = $(window).width();                                                                                // 7
      //RESTAMOS DOS PIXELES POR LOS BORDES                                                                            // 8
      widthNav -= 2;                                                                                                   // 9
      return widthNav / 2 + "px";                                                                                      // 10
    }                                                                                                                  // 11
                                                                                                                       //
    return setStyleNavBar;                                                                                             // 6
  }(),                                                                                                                 // 6
                                                                                                                       //
  'getDataFollowAnts': function () {                                                                                   // 13
    function getDataFollowAnts() {                                                                                     // 13
      Meteor.call('getFollowers', this.user, function (err, res) {                                                     // 14
        Session.set('followers', res);                                                                                 // 15
      });                                                                                                              // 16
                                                                                                                       //
      Meteor.call('getFollowings', this.user, function (err, res) {                                                    // 18
        Session.set('followings', res);                                                                                // 19
      });                                                                                                              // 20
                                                                                                                       //
      foundFollowers = Session.get('followers');                                                                       // 22
      foundFollowings = Session.get('followings');                                                                     // 23
      if (foundFollowers) {                                                                                            // 24
        if (foundFollowers.length === 0) {                                                                             // 25
          Session.set('noFollowers', true);                                                                            // 26
        } else {                                                                                                       // 27
          Session.set('noFollowers', false);                                                                           // 28
        }                                                                                                              // 29
      }                                                                                                                // 30
                                                                                                                       //
      if (foundFollowings) {                                                                                           // 32
        if (foundFollowings.length === 0) {                                                                            // 33
          Session.set('noFollowings', true);                                                                           // 34
        } else {                                                                                                       // 35
          Session.set('noFollowings', false);                                                                          // 36
        }                                                                                                              // 37
      }                                                                                                                // 38
                                                                                                                       //
      Session.set('showFollowers', this.mode);                                                                         // 40
      countOrientationCard = 0;                                                                                        // 41
    }                                                                                                                  // 42
                                                                                                                       //
    return getDataFollowAnts;                                                                                          // 13
  }(),                                                                                                                 // 13
                                                                                                                       //
  'getWhatShow': function () {                                                                                         // 44
    function getWhatShow() {                                                                                           // 44
      return Session.get('showFollowers');                                                                             // 45
    }                                                                                                                  // 46
                                                                                                                       //
    return getWhatShow;                                                                                                // 44
  }(),                                                                                                                 // 44
                                                                                                                       //
  'noFollowers': function () {                                                                                         // 48
    function noFollowers() {                                                                                           // 48
      return Session.get('noFollowers');                                                                               // 49
    }                                                                                                                  // 50
                                                                                                                       //
    return noFollowers;                                                                                                // 48
  }(),                                                                                                                 // 48
                                                                                                                       //
  'noFollowings': function () {                                                                                        // 52
    function noFollowings() {                                                                                          // 52
      return Session.get('noFollowings');                                                                              // 53
    }                                                                                                                  // 54
                                                                                                                       //
    return noFollowings;                                                                                               // 52
  }(),                                                                                                                 // 52
                                                                                                                       //
  'btnShowFollowers': function () {                                                                                    // 56
    function btnShowFollowers() {                                                                                      // 56
      return Session.get('showFollowers');                                                                             // 57
    }                                                                                                                  // 58
                                                                                                                       //
    return btnShowFollowers;                                                                                           // 56
  }(),                                                                                                                 // 56
                                                                                                                       //
  'getProfileData': function () {                                                                                      // 60
    function getProfileData(username) {                                                                                // 60
      listFoundFollower = [];                                                                                          // 61
                                                                                                                       //
      Meteor.call('findUserData', username, function (err, response) {                                                 // 63
        if (response) {                                                                                                // 64
          imgFoundProf = "";                                                                                           // 65
          Meteor.call('findUserImg', response.userImg, function (err, res) {                                           // 66
            imgFoundProf = res;                                                                                        // 67
            response.imgFoundProf = imgFoundProf;                                                                      // 68
            listFoundFollower.push(response);                                                                          // 69
            Session.set('listFollAnts', listFoundFollower);                                                            // 70
          });                                                                                                          // 71
        }                                                                                                              // 72
      });                                                                                                              // 73
      return Session.get('listFollAnts');                                                                              // 74
    }                                                                                                                  // 75
                                                                                                                       //
    return getProfileData;                                                                                             // 60
  }(),                                                                                                                 // 60
                                                                                                                       //
  'showFollowers': function () {                                                                                       // 77
    function showFollowers() {                                                                                         // 77
      return foundFollowers;                                                                                           // 78
    }                                                                                                                  // 79
                                                                                                                       //
    return showFollowers;                                                                                              // 77
  }(),                                                                                                                 // 77
                                                                                                                       //
  'showFollowings': function () {                                                                                      // 81
    function showFollowings() {                                                                                        // 81
      return foundFollowings;                                                                                          // 82
    }                                                                                                                  // 83
                                                                                                                       //
    return showFollowings;                                                                                             // 81
  }(),                                                                                                                 // 81
                                                                                                                       //
  'orientationCard': function () {                                                                                     // 85
    function orientationCard() {                                                                                       // 85
      countOrientationCard++;                                                                                          // 86
      if (countOrientationCard % 2 === 0) {                                                                            // 87
        return false;                                                                                                  // 88
      } else {                                                                                                         // 89
        return true;                                                                                                   // 90
      }                                                                                                                // 91
    }                                                                                                                  // 92
                                                                                                                       //
    return orientationCard;                                                                                            // 85
  }()                                                                                                                  // 85
});                                                                                                                    // 5
                                                                                                                       //
Template.followAnts.events({                                                                                           // 95
  'click #btnShowFollowings': function () {                                                                            // 96
    function clickBtnShowFollowings() {                                                                                // 96
      Session.set('showFollowers', false);                                                                             // 97
      countOrientationCard = 0;                                                                                        // 98
    }                                                                                                                  // 99
                                                                                                                       //
    return clickBtnShowFollowings;                                                                                     // 96
  }(),                                                                                                                 // 96
  'click #btnShowFollowers': function () {                                                                             // 100
    function clickBtnShowFollowers() {                                                                                 // 100
      Session.set('showFollowers', true);                                                                              // 101
      countOrientationCard = 0;                                                                                        // 102
    }                                                                                                                  // 103
                                                                                                                       //
    return clickBtnShowFollowers;                                                                                      // 100
  }()                                                                                                                  // 100
});                                                                                                                    // 95
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"followUsers.js":["babel-runtime/regenerator",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/followUsers.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;module.import('babel-runtime/regenerator',{"default":function(v){_regeneratorRuntime=v}});     //
var arrDataProfile = [];                                                                                               // 1
var arrRecUsers = [];                                                                                                  // 2
                                                                                                                       //
Template.followUsers.onRendered(function () {                                                                          // 4
  (function () {                                                                                                       // 5
    function _callee() {                                                                                               // 5
      var i;                                                                                                           // 5
      return _regeneratorRuntime.async(function () {                                                                   // 5
        function _callee$(_context) {                                                                                  // 5
          while (1) {                                                                                                  // 5
            switch (_context.prev = _context.next) {                                                                   // 5
              case 0:                                                                                                  // 5
                _context.next = 2;                                                                                     // 5
                return _regeneratorRuntime.awrap(Meteor.callPromise('recommendUsers'));                                // 5
                                                                                                                       //
              case 2:                                                                                                  // 5
                recListUsers = _context.sent;                                                                          // 6
                                                                                                                       //
                                                                                                                       //
                for (i = 0; i < recListUsers.length; i++) {                                                            // 8
                  if (recListUsers[i].username != Session.get('currentUser')) {                                        // 9
                    arrRecUsers.push(recListUsers[i]);                                                                 // 10
                  };                                                                                                   // 11
                }                                                                                                      // 12
                                                                                                                       //
                i = 0;                                                                                                 // 14
                                                                                                                       //
              case 5:                                                                                                  // 5
                if (!(i < arrRecUsers.length)) {                                                                       // 5
                  _context.next = 13;                                                                                  // 5
                  break;                                                                                               // 5
                }                                                                                                      // 5
                                                                                                                       //
                _context.next = 8;                                                                                     // 5
                return _regeneratorRuntime.awrap(Meteor.callPromise('findUserData', arrRecUsers[i].username));         // 5
                                                                                                                       //
              case 8:                                                                                                  // 5
                dataUserFound = _context.sent;                                                                         // 15
                                                                                                                       //
                arrDataProfile.push(dataUserFound);                                                                    // 16
                                                                                                                       //
              case 10:                                                                                                 // 5
                i++;                                                                                                   // 14
                _context.next = 5;                                                                                     // 5
                break;                                                                                                 // 5
                                                                                                                       //
              case 13:                                                                                                 // 5
                                                                                                                       //
                //ELIMINAMOS NUESTRO PROPIO USUARIO                                                                    // 19
                recListUsers.splice(0, 1);                                                                             // 20
                                                                                                                       //
                if (recListUsers.length === 0) {                                                                       // 22
                  Session.set('numRecommendedUsers', false);                                                           // 23
                } else {                                                                                               // 24
                  Session.set('numRecommendedUsers', true);                                                            // 25
                };                                                                                                     // 26
                                                                                                                       //
                Session.set('recommendedUsers', recListUsers);                                                         // 28
                Session.set('userDataRecProfile', arrDataProfile);                                                     // 29
                                                                                                                       //
              case 18:                                                                                                 // 5
              case 'end':                                                                                              // 5
                return _context.stop();                                                                                // 5
            }                                                                                                          // 5
          }                                                                                                            // 5
        }                                                                                                              // 5
                                                                                                                       //
        return _callee$;                                                                                               // 5
      }(), null, this);                                                                                                // 5
    }                                                                                                                  // 5
                                                                                                                       //
    return _callee;                                                                                                    // 5
  })()();                                                                                                              // 5
});                                                                                                                    // 31
                                                                                                                       //
Template.followUsers.events({                                                                                          // 33
  'click #searchBtn': function () {                                                                                    // 34
    function clickSearchBtn(event) {                                                                                   // 34
      var searchUser = $('#searchUser').val();                                                                         // 35
      var foundUser = Meteor.call('findUser', searchUser, function (err, res) {                                        // 36
        if (res) {                                                                                                     // 37
          Meteor.call('findUserData', res.username, function (err, res) {                                              // 38
            if (res) {                                                                                                 // 39
              Session.set('foundUser', res);                                                                           // 40
              Meteor.call('findUserImg', res.userImg, function (err, res) {                                            // 41
                Session.set('imgFound', res);                                                                          // 42
              });                                                                                                      // 43
            }                                                                                                          // 44
          });                                                                                                          // 45
        } else {                                                                                                       // 46
          $('#barFound').append("<h5 class='text-center msgErrorReg'>" + "No se ha encontrado ningún usuario</h5>");   // 47
        }                                                                                                              // 49
      });                                                                                                              // 50
      return false;                                                                                                    // 51
    }                                                                                                                  // 52
                                                                                                                       //
    return clickSearchBtn;                                                                                             // 34
  }(),                                                                                                                 // 34
                                                                                                                       //
  'click #follow': function () {                                                                                       // 54
    function clickFollow() {                                                                                           // 54
      //ANTES DE SEGUIR A DICHO USUARIO HAY QUE                                                                        // 55
      //COMPROBAR SI YA LO ESTAMOS SIGUIENDO                                                                           // 56
      Meteor.call('followUser', Session.get('foundUser').username);                                                    // 57
    }                                                                                                                  // 58
                                                                                                                       //
    return clickFollow;                                                                                                // 54
  }(),                                                                                                                 // 54
                                                                                                                       //
  'click #followRec': function () {                                                                                    // 60
    function clickFollowRec() {                                                                                        // 60
      posUser = -1;                                                                                                    // 61
      listRecomm = Session.get('recommendedUsers');                                                                    // 62
                                                                                                                       //
      Meteor.call('followUser', this.userNameProfile);                                                                 // 64
      //LOCALIZAMOS EL USUARIO QUE ACABAMOS DE SEGUIR Y                                                                // 65
      //LO ELIMINAMOS DE LA LISTA DE RECOMENDADOS                                                                      // 66
      if (listRecomm) {                                                                                                // 67
        for (i = 0; i < listRecomm.length; i++) {                                                                      // 68
          if (listRecomm[i].username === this.userNameProfile) {                                                       // 69
            posUser = i;                                                                                               // 70
          }                                                                                                            // 71
        };                                                                                                             // 72
      };                                                                                                               // 73
                                                                                                                       //
      if (posUser != -1) {                                                                                             // 75
        listRecomm.splice(posUser, 1);                                                                                 // 76
      };                                                                                                               // 77
                                                                                                                       //
      if (listRecomm.length === 0) {                                                                                   // 79
        Session.set('numRecommendedUsers', false);                                                                     // 80
      } else {                                                                                                         // 81
        Session.set('numRecommendedUsers', true);                                                                      // 82
      };                                                                                                               // 83
                                                                                                                       //
      Session.set('recommendedUsers', listRecomm);                                                                     // 85
      Session.set('userDataRecProfile', listRecomm);                                                                   // 86
    }                                                                                                                  // 87
                                                                                                                       //
    return clickFollowRec;                                                                                             // 60
  }(),                                                                                                                 // 60
                                                                                                                       //
  'change #searchUser': function () {                                                                                  // 89
    function changeSearchUser() {                                                                                      // 89
      if ($('#searchUser').val().length === 0) {                                                                       // 90
        Session.set('foundUser', '');                                                                                  // 91
        $('.msgErrorReg').remove();                                                                                    // 92
      };                                                                                                               // 93
    }                                                                                                                  // 94
                                                                                                                       //
    return changeSearchUser;                                                                                           // 89
  }()                                                                                                                  // 89
                                                                                                                       //
});                                                                                                                    // 33
                                                                                                                       //
Template.followUsers.helpers({                                                                                         // 98
  'foundUser': function () {                                                                                           // 99
    function foundUser() {                                                                                             // 99
      return Session.get('foundUser');                                                                                 // 100
    }                                                                                                                  // 101
                                                                                                                       //
    return foundUser;                                                                                                  // 99
  }(),                                                                                                                 // 99
                                                                                                                       //
  'recommendedUsers': function () {                                                                                    // 103
    function recommendedUsers() {                                                                                      // 103
      return Session.get('userDataRecProfile');                                                                        // 104
    }                                                                                                                  // 105
                                                                                                                       //
    return recommendedUsers;                                                                                           // 103
  }(),                                                                                                                 // 103
                                                                                                                       //
  'recUsersLis': function () {                                                                                         // 107
    function recUsersLis() {                                                                                           // 107
      return Session.get('numRecommendedUsers');                                                                       // 108
    }                                                                                                                  // 109
                                                                                                                       //
    return recUsersLis;                                                                                                // 107
  }(),                                                                                                                 // 107
  'mineUser': function () {                                                                                            // 110
    function mineUser(user) {                                                                                          // 110
      if (user === Session.get('currentUser')) {                                                                       // 111
        return false;                                                                                                  // 112
      } else {                                                                                                         // 113
        return true;                                                                                                   // 114
      }                                                                                                                // 115
    }                                                                                                                  // 116
                                                                                                                       //
    return mineUser;                                                                                                   // 110
  }(),                                                                                                                 // 110
                                                                                                                       //
  'getImgProfile': function () {                                                                                       // 118
    function getImgProfile(imgId) {                                                                                    // 118
      var imgFound = "imgPath";                                                                                        // 119
      var imgFoundSession = Session.get('imgFound');                                                                   // 120
      //console.log(imgId);                                                                                            // 121
                                                                                                                       //
      if (imgId === '') {                                                                                              // 123
        return "/profileImgTest.png";                                                                                  // 124
      } else if (imgFoundSession) {                                                                                    // 125
        return imgFoundSession;                                                                                        // 126
      } else {                                                                                                         // 127
        Meteor.call('findUserImg', imgId, function (err, res) {                                                        // 128
          Session.set('imgFound', res);                                                                                // 129
        });                                                                                                            // 130
        return Session.get('imgFound');;                                                                               // 131
      }                                                                                                                // 132
    }                                                                                                                  // 133
                                                                                                                       //
    return getImgProfile;                                                                                              // 118
  }()                                                                                                                  // 118
});                                                                                                                    // 98
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"mainPage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/mainPage.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.mainPage.onCreated(function () {                                                                              // 1
	Session.set('pathActualApp', window.location.pathname);                                                               // 2
});                                                                                                                    // 3
                                                                                                                       //
Template.mainPage.helpers({                                                                                            // 5
	'mainPage': function () {                                                                                             // 6
		function mainPage() {                                                                                                // 6
			if (Session.get('pathActualApp') === "/") {                                                                         // 7
				return true;                                                                                                       // 8
			}                                                                                                                   // 9
		}                                                                                                                    // 10
                                                                                                                       //
		return mainPage;                                                                                                     // 6
	}()                                                                                                                   // 6
});                                                                                                                    // 5
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
Template.navBarTemplate.events({                                                                                       // 18
	'click #recommendationsBtn': function () {                                                                            // 19
		function clickRecommendationsBtn() {                                                                                 // 19
			//Contraer el dropDownMenu                                                                                          // 20
			$('#btnMenuNavBar').click();                                                                                        // 21
			Session.set('pathActualApp', '/whoToFollow');                                                                       // 22
		}                                                                                                                    // 23
                                                                                                                       //
		return clickRecommendationsBtn;                                                                                      // 19
	}(),                                                                                                                  // 19
	'show.bs.collapse': function () {                                                                                     // 24
		function showBsCollapse() {                                                                                          // 24
			Session.set('navBarCollapse', true);                                                                                // 25
		}                                                                                                                    // 26
                                                                                                                       //
		return showBsCollapse;                                                                                               // 24
	}(),                                                                                                                  // 24
	'hide.bs.collapse': function () {                                                                                     // 27
		function hideBsCollapse() {                                                                                          // 27
			Session.set('navBarCollapse', false);                                                                               // 28
		}                                                                                                                    // 29
                                                                                                                       //
		return hideBsCollapse;                                                                                               // 27
	}(),                                                                                                                  // 27
	'click #btnNewTweet': function () {                                                                                   // 30
		function clickBtnNewTweet() {                                                                                        // 30
			Session.set('commentMode', false);                                                                                  // 31
		}                                                                                                                    // 32
                                                                                                                       //
		return clickBtnNewTweet;                                                                                             // 30
	}(),                                                                                                                  // 30
	'click #btnNewTwiit': function () {                                                                                   // 33
		function clickBtnNewTwiit() {                                                                                        // 33
			Session.set('commentMode', false);                                                                                  // 34
		}                                                                                                                    // 35
                                                                                                                       //
		return clickBtnNewTwiit;                                                                                             // 33
	}(), /*                                                                                                               // 33
      'click #videoTrans' : function(){                                                                                //
      console.log(Session.get('currentUser'));                                                                         //
      if(Session.get('currentUser') === "nachosizle"){                                                                 //
      window.location = "/videoTrans";                                                                                 //
      }                                                                                                                //
      },*/                                                                                                             //
	'click .imgProfileNavBar': function () {                                                                              // 42
		function clickImgProfileNavBar() {                                                                                   // 42
			$('#btnMenuNavBar').click();                                                                                        // 43
			Session.set('pathActualApp', '/Profile/' + Meteor.user().username);                                                 // 44
		}                                                                                                                    // 45
                                                                                                                       //
		return clickImgProfileNavBar;                                                                                        // 42
	}(),                                                                                                                  // 42
	'click #btnShowConver': function () {                                                                                 // 46
		function clickBtnShowConver() {                                                                                      // 46
			$('#btnMenuNavBar').click();                                                                                        // 47
			Session.set('pathActualApp', '/Conversations/' + Meteor.user().username);                                           // 48
		}                                                                                                                    // 49
                                                                                                                       //
		return clickBtnShowConver;                                                                                           // 46
	}()                                                                                                                   // 46
});                                                                                                                    // 18
                                                                                                                       //
Template.navBarTemplate.helpers({                                                                                      // 52
	'notificationCount': function () {                                                                                    // 53
		function notificationCount() {                                                                                       // 53
			var resultNotif = UserUtils.findNumberNotif(Meteor.user().username);                                                // 54
			return resultNotif;                                                                                                 // 55
		}                                                                                                                    // 56
                                                                                                                       //
		return notificationCount;                                                                                            // 53
	}(),                                                                                                                  // 53
	'whatsNotifCount': function () {                                                                                      // 57
		function whatsNotifCount() {                                                                                         // 57
			//OBTENEMOS EL NUMERO DE NOTIFICACIONES DE LAS PETICIONES DE WHATSAPP Y LAS                                         // 58
			//RESPUESTAS A LAS PETICIONES REALIZADAS POR EL USUARIO                                                             // 59
			resultNotifRequest = Notifications.find({ recepNotif: Meteor.user().username, read: false, typeOfNotif: "whatsAppNotif" });
			resultNotifResponse = Notifications.find({ recepNotif: Meteor.user().username, read: false, typeOfNotif: "responseWhatsAppNotif" });
			auxTotalCount = 0;                                                                                                  // 62
                                                                                                                       //
			if (resultNotifRequest.count() > 0) {                                                                               // 64
				auxTotalCount = resultNotifRequest.count();                                                                        // 65
				if (resultNotifResponse.count() > 0) {                                                                             // 66
					auxTotalCount += resultNotifResponse.count();                                                                     // 67
				};                                                                                                                 // 68
			} else {                                                                                                            // 69
				if (resultNotifResponse.count() > 0) {                                                                             // 70
					auxTotalCount = resultNotifResponse.count();                                                                      // 71
				};                                                                                                                 // 72
			}                                                                                                                   // 73
			//NO SE ESTA OBTENIENDO CORRECTAMENTE ESTE TIPO DE NOTIF                                                            // 74
			//REVISAR publications.js                                                                                           // 75
			//console.log(resultNotifResponse);                                                                                 // 76
			//console.log(resultNotifResponse.count());                                                                         // 77
                                                                                                                       //
			//DEVOLVEMOS LA SUMA TOTAL DE LAS NOTIFICACIONES                                                                    // 79
			if (auxTotalCount > 0) {                                                                                            // 80
				return auxTotalCount;                                                                                              // 81
			}                                                                                                                   // 82
		}                                                                                                                    // 83
                                                                                                                       //
		return whatsNotifCount;                                                                                              // 57
	}(),                                                                                                                  // 57
	'whatsAppReq': function () {                                                                                          // 84
		function whatsAppReq() {                                                                                             // 84
			var cont = 0;                                                                                                       // 85
			var req = [];                                                                                                       // 86
			var res = [];                                                                                                       // 87
                                                                                                                       //
			resultNotifRequest.forEach(function (item) {                                                                        // 89
				req.push(item._id);                                                                                                // 90
				cont++;                                                                                                            // 91
			});                                                                                                                 // 92
                                                                                                                       //
			resultNotifResponse.forEach(function (item) {                                                                       // 94
				res.push(item._id);                                                                                                // 95
				cont++;                                                                                                            // 96
			});                                                                                                                 // 97
                                                                                                                       //
			if (cont > 0) {                                                                                                     // 99
				Session.set('whatsAppRequest', true);                                                                              // 100
				Session.set('requestWhats', req);                                                                                  // 101
				Session.set('responseWhats', res);                                                                                 // 102
				return true;                                                                                                       // 103
			} else {                                                                                                            // 104
				Session.set('whatsAppRequest', false);                                                                             // 105
				return false;                                                                                                      // 106
			}                                                                                                                   // 107
		}                                                                                                                    // 108
                                                                                                                       //
		return whatsAppReq;                                                                                                  // 84
	}(),                                                                                                                  // 84
	'infoStateCollapseNavBar': function () {                                                                              // 109
		function infoStateCollapseNavBar() {                                                                                 // 109
			return Session.get('navBarCollapse');                                                                               // 110
		}                                                                                                                    // 111
                                                                                                                       //
		return infoStateCollapseNavBar;                                                                                      // 109
	}(),                                                                                                                  // 109
	'userImgFound': function () {                                                                                         // 112
		function userImgFound() {                                                                                            // 112
			Meteor.call('findUserData', Meteor.user().username, function (err, res) {                                           // 113
				if (res.userImg) {                                                                                                 // 114
					Meteor.call('findUserImg', res.userImg, function (err, res) {                                                     // 115
						$('#imgProfile').attr("src", res);                                                                               // 116
					});                                                                                                               // 117
				} else {                                                                                                           // 118
					$('#imgProfile').attr("src", "/profileImgTest.png");                                                              // 119
				}                                                                                                                  // 120
			});                                                                                                                 // 122
		}                                                                                                                    // 123
                                                                                                                       //
		return userImgFound;                                                                                                 // 112
	}(),                                                                                                                  // 112
	'currentUser': function () {                                                                                          // 124
		function currentUser() {                                                                                             // 124
			var user = new Object();                                                                                            // 125
			user.name = Session.get('currentUser');                                                                             // 126
			return user;                                                                                                        // 127
		}                                                                                                                    // 128
                                                                                                                       //
		return currentUser;                                                                                                  // 124
	}()                                                                                                                   // 124
});                                                                                                                    // 52
//PARA CONTROLAR SI SE CAMBIA EL TAMAÑO DE PANTALLA                                                                    // 130
$(window).resize(function () {                                                                                         // 131
	console.log("Change Display Size");                                                                                   // 132
	Session.set('sizeDisplay', $(window).width());                                                                        // 133
});                                                                                                                    // 134
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

},"showConver.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/showConver.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.showConver.onCreated(function () {                                                                            // 1
  Meteor.subscribe('chats');                                                                                           // 2
  Session.set('messageInputEmpty', true);                                                                              // 3
  Session.set('recepUsernameChat', this.data.name);                                                                    // 4
});                                                                                                                    // 5
                                                                                                                       //
Template.showConver.helpers({                                                                                          // 7
  'messagesInChat': function () {                                                                                      // 8
    function messagesInChat() {                                                                                        // 8
      var userNameToFindChat = Session.get('recepUsernameChat');                                                       // 9
                                                                                                                       //
      Meteor.call('findChatFromUser', userNameToFindChat, function (err, res) {                                        // 11
        if (res) {                                                                                                     // 12
          Session.set('chatFound', res);                                                                               // 13
          if (res.length === 0) {                                                                                      // 14
            Session.set('chatEmpty', true);                                                                            // 15
          } else {                                                                                                     // 16
            Session.set('nameChat', res[0].nameChat);                                                                  // 17
            Session.set('chatEmpty', false);                                                                           // 18
          }                                                                                                            // 19
        }                                                                                                              // 20
                                                                                                                       //
        if (err) {                                                                                                     // 22
          console.log(err);                                                                                            // 23
        }                                                                                                              // 24
      });                                                                                                              // 25
      return Session.get('chatFound');                                                                                 // 26
    }                                                                                                                  // 27
                                                                                                                       //
    return messagesInChat;                                                                                             // 8
  }(),                                                                                                                 // 8
                                                                                                                       //
  'btnDisabled': function () {                                                                                         // 29
    function btnDisabled() {                                                                                           // 29
      return Session.get('messageInputEmpty');                                                                         // 30
    }                                                                                                                  // 31
                                                                                                                       //
    return btnDisabled;                                                                                                // 29
  }(),                                                                                                                 // 29
                                                                                                                       //
  'recepUserChat': function () {                                                                                       // 33
    function recepUserChat() {                                                                                         // 33
      var user = new Object();                                                                                         // 34
      user.name = Session.get('recepUsernameChat');                                                                    // 35
      return user;                                                                                                     // 36
    }                                                                                                                  // 37
                                                                                                                       //
    return recepUserChat;                                                                                              // 33
  }(),                                                                                                                 // 33
                                                                                                                       //
  'messageIsMine': function () {                                                                                       // 39
    function messageIsMine(isMine) {                                                                                   // 39
      if (isMine === Session.get('currentUser')) {                                                                     // 40
        return "messageIsMine";                                                                                        // 41
      } else {                                                                                                         // 42
        return "messageNotMine";                                                                                       // 43
      }                                                                                                                // 44
    }                                                                                                                  // 45
                                                                                                                       //
    return messageIsMine;                                                                                              // 39
  }(),                                                                                                                 // 39
                                                                                                                       //
  'convertDateTime': function () {                                                                                     // 47
    function convertDateTime(dateToConvert) {                                                                          // 47
      var dateNew = new Date(dateToConvert);                                                                           // 48
      var dateCon = dateNew.toLocaleString();                                                                          // 49
                                                                                                                       //
      var elem = dateCon.split(' ');                                                                                   // 51
                                                                                                                       //
      return elem[0];                                                                                                  // 53
    }                                                                                                                  // 54
                                                                                                                       //
    return convertDateTime;                                                                                            // 47
  }()                                                                                                                  // 47
});                                                                                                                    // 7
                                                                                                                       //
Template.showConver.events({                                                                                           // 57
  'click #btnSendMessage': function () {                                                                               // 58
    function clickBtnSendMessage() {                                                                                   // 58
      var chatData = new Object();                                                                                     // 59
      var contentMessage = $('#inputMessage').val();                                                                   // 60
      var userRecepMsg = Session.get('recepUsernameChat');                                                             // 61
                                                                                                                       //
      chatData.contentMessage = contentMessage;                                                                        // 63
      chatData.userRecepMsg = userRecepMsg;                                                                            // 64
      if (Session.get('chatEmpty')) {                                                                                  // 65
        Meteor.call('insertMsgChat', chatData);                                                                        // 66
      } else {                                                                                                         // 67
        chatData.nameChat = Session.get('nameChat');                                                                   // 68
        Meteor.call('insertMsg', chatData);                                                                            // 69
      }                                                                                                                // 70
    }                                                                                                                  // 71
                                                                                                                       //
    return clickBtnSendMessage;                                                                                        // 58
  }(),                                                                                                                 // 58
                                                                                                                       //
  'input #inputMessage': function () {                                                                                 // 73
    function inputInputMessage() {                                                                                     // 73
      var lengthMessage = $('#inputMessage').val().length;                                                             // 74
      if (lengthMessage > 0) {                                                                                         // 75
        Session.set('messageInputEmpty', false);                                                                       // 76
      } else if (lengthMessage === 0) {                                                                                // 77
        Session.set('messageInputEmpty', true);                                                                        // 78
      }                                                                                                                // 79
    }                                                                                                                  // 80
                                                                                                                       //
    return inputInputMessage;                                                                                          // 73
  }(),                                                                                                                 // 73
                                                                                                                       //
  'click #cleanHistory': function () {                                                                                 // 82
    function clickCleanHistory() {                                                                                     // 82
      Meteor.call('removeChat', Session.get('recepUsernameChat'));                                                     // 83
    }                                                                                                                  // 84
                                                                                                                       //
    return clickCleanHistory;                                                                                          // 82
  }()                                                                                                                  // 82
});                                                                                                                    // 57
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
					return 'errCharCount';                                                                                            // 55
				} else {                                                                                                           // 56
					return 'charCount';                                                                                               // 57
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
                                                                                                                       //
      var elem = dateCon.split(' ');                                                                                   // 15
                                                                                                                       //
      return elem[0];                                                                                                  // 17
    }                                                                                                                  // 18
                                                                                                                       //
    return convertDateTime;                                                                                            // 11
  }(),                                                                                                                 // 11
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
  }(),                                                                                                                 // 28
  'infoNotif': function () {                                                                                           // 34
    function infoNotif() {                                                                                             // 34
      var username = Meteor.user().username;                                                                           // 35
                                                                                                                       //
      var numNotif = UserUtils.findNumberNotif(username);                                                              // 37
      //PRIMERO TENEMOS QUE COMPROBAR SI HAY NOTIFICACIONES                                                            // 38
      if (numNotif === 1) {                                                                                            // 39
        //BUSCAMOS LAS NOTIFICACIONES DISPONIBLES                                                                      // 40
        var notif = UserUtils.findOneNotification(username);                                                           // 41
                                                                                                                       //
        UserUtils.createNotifToBrowser(notif.typeOfNotif, notif.actorNotif);                                           // 43
      } else if (numNotif > 1) {                                                                                       // 44
        UserUtils.createNotifToBrowser("moreNotif", username);                                                         // 45
      }                                                                                                                // 46
    }                                                                                                                  // 47
                                                                                                                       //
    return infoNotif;                                                                                                  // 34
  }()                                                                                                                  // 34
});                                                                                                                    // 6
                                                                                                                       //
Template.tweetFeed.events({                                                                                            // 50
  'click #btnFav': function () {                                                                                       // 51
    function clickBtnFav() {                                                                                           // 51
      var currentUser = Session.get('currentUser');                                                                    // 52
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                                // 53
                                                                                                                       //
      console.log(this._id);                                                                                           // 55
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                            // 56
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                           // 57
                                                                                                                       //
      //HACEMOS UNA COMPROBACION DE QUE EL TWIIT NO TIENE NINGUN FAV O QUE SI LO TIENE                                 // 59
      if (!userTapFav) {                                                                                               // 60
        //console.log("No tiene FAVS");                                                                                // 61
        UserUtils.addFavToTwiit(this._id, idUser);                                                                     // 62
        $("#" + this._id).addClass("heartFav");                                                                        // 63
        $("#" + this._id).removeClass("heartNoFav");                                                                   // 64
      } else {                                                                                                         // 65
        var arrAux = userTapFav.idUserTapFav;                                                                          // 66
      }                                                                                                                // 67
                                                                                                                       //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                       // 69
      if (arrAux.indexOf(idUser) === -1) {                                                                             // 70
        UserUtils.addFavToTwiit(this._id, idUser);                                                                     // 71
                                                                                                                       //
        var notif = new Object();                                                                                      // 73
        notif._id = this._id;                                                                                          // 74
        notif.typeOfNotif = "fav";                                                                                     // 75
        notif.actorNotif = currentUser;                                                                                // 76
        notif.recepNotif = UserUtils.findUserFromTwiit(this._id);                                                      // 77
                                                                                                                       //
        Meteor.call('createTwiitNotification', notif);                                                                 // 79
                                                                                                                       //
        $("#" + this._id).addClass("heartFav");                                                                        // 81
        $("#" + this._id).removeClass("heartNoFav");                                                                   // 82
      } else {                                                                                                         // 83
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                                // 84
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                             // 85
        //LA OPERACION INVERSA                                                                                         // 86
        UserUtils.removeFavToTwiit(this._id, idUser);                                                                  // 87
        $("#" + this._id).addClass("heartNoFav");                                                                      // 88
        $("#" + this._id).removeClass("heartFav");                                                                     // 89
      }                                                                                                                // 90
    }                                                                                                                  // 91
                                                                                                                       //
    return clickBtnFav;                                                                                                // 51
  }(),                                                                                                                 // 51
  'click #btnComm': function () {                                                                                      // 92
    function clickBtnComm() {                                                                                          // 92
      var numComment = UserUtils.findNumComment(this._id);                                                             // 93
      //SI EL TWIIT TIENE POR LO MENOS 1 COMENTARIO, ENTONCES REDIRIGIMOS AL USUARIO A                                 // 94
      //LA RUTA /Comments. SI NO, SE ABRE EL MODAL Y SE PUEDE HACER EL COMENTARIO                                      // 95
      if (numComment === 0) {                                                                                          // 96
        $("#dialog-NewTwiit").modal();                                                                                 // 97
        Session.set('commentMode', true);                                                                              // 98
        Session.set('idCurrentTwiit', this._id);                                                                       // 99
      }                                                                                                                // 100
    }                                                                                                                  // 101
                                                                                                                       //
    return clickBtnComm;                                                                                               // 92
  }()                                                                                                                  // 92
});                                                                                                                    // 50
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
                                                                                                                       //
      var elem = dateCon.split(' ');                                                                                   // 20
                                                                                                                       //
      return elem[0];                                                                                                  // 22
    }                                                                                                                  // 23
                                                                                                                       //
    return convertDateTime;                                                                                            // 16
  }(),                                                                                                                 // 16
  'numComment': function () {                                                                                          // 24
    function numComment() {                                                                                            // 24
      var num = UserUtils.findNumComment(this._id);                                                                    // 25
      if (num > 0) {                                                                                                   // 26
        return true;                                                                                                   // 27
      } else return false;                                                                                             // 28
    }                                                                                                                  // 29
                                                                                                                       //
    return numComment;                                                                                                 // 24
  }(),                                                                                                                 // 24
  'idToFavBtn': function () {                                                                                          // 30
    function idToFavBtn() {                                                                                            // 30
      return this._id;                                                                                                 // 31
    }                                                                                                                  // 32
                                                                                                                       //
    return idToFavBtn;                                                                                                 // 30
  }(),                                                                                                                 // 30
  'classFav': function () {                                                                                            // 33
    function classFav() {                                                                                              // 33
      var num = UserUtils.findNumberFavPerTwiit(this._id);                                                             // 34
      if (num > 0) {                                                                                                   // 35
        return "heartFav";                                                                                             // 36
      } else return "heartNoFav";                                                                                      // 37
    }                                                                                                                  // 38
                                                                                                                       //
    return classFav;                                                                                                   // 33
  }()                                                                                                                  // 33
});                                                                                                                    // 6
                                                                                                                       //
Template.tweetFeedProfile.events({                                                                                     // 41
  'click #btnFav': function () {                                                                                       // 42
    function clickBtnFav() {                                                                                           // 42
      var currentUser = Session.get('currentUser');                                                                    // 43
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                                // 44
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                            // 45
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                           // 46
      var arrAux = userTapFav.idUserTapFav;                                                                            // 47
                                                                                                                       //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                       // 49
      if (arrAux.indexOf(idUser) === -1) {                                                                             // 50
        UserUtils.addFavToTwiit(this._id, idUser);                                                                     // 51
                                                                                                                       //
        var notif = new Object();                                                                                      // 53
        notif._id = this._id;                                                                                          // 54
        notif.typeOfNotif = "fav";                                                                                     // 55
        notif.actorNotif = currentUser;                                                                                // 56
        notif.recepNotif = UserUtils.findUserFromTwiit(this._id);                                                      // 57
                                                                                                                       //
        console.log(notif);                                                                                            // 59
                                                                                                                       //
        Meteor.call('createTwiitNotification', notif);                                                                 // 61
                                                                                                                       //
        $("#" + this._id).addClass("heartFav");                                                                        // 63
        $("#" + this._id).removeClass("heartNoFav");                                                                   // 64
      } else {                                                                                                         // 65
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                                // 66
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                             // 67
        //LA OPERACION INVERSA                                                                                         // 68
        UserUtils.removeFavToTwiit(this._id, idUser);                                                                  // 69
        $("#" + this._id).addClass("heartNoFav");                                                                      // 70
        $("#" + this._id).removeClass("heartFav");                                                                     // 71
      }                                                                                                                // 72
    }                                                                                                                  // 73
                                                                                                                       //
    return clickBtnFav;                                                                                                // 42
  }() });                                                                                                              // 42
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
                                                                                                                       //
      var elem = dateCon.split(' ');                                                                                   // 31
                                                                                                                       //
      return elem[0];                                                                                                  // 33
    }                                                                                                                  // 34
                                                                                                                       //
    return convertDateTime;                                                                                            // 27
  }(),                                                                                                                 // 27
  'idToFavBtn': function () {                                                                                          // 35
    function idToFavBtn() {                                                                                            // 35
      return this._id;                                                                                                 // 36
    }                                                                                                                  // 37
                                                                                                                       //
    return idToFavBtn;                                                                                                 // 35
  }(),                                                                                                                 // 35
  'classFav': function () {                                                                                            // 38
    function classFav() {                                                                                              // 38
      var num = UserUtils.findNumberFavPerTwiit(this._id);                                                             // 39
      if (num > 0) {                                                                                                   // 40
        return "heartFav";                                                                                             // 41
      } else return "heartNoFav";                                                                                      // 42
    }                                                                                                                  // 43
                                                                                                                       //
    return classFav;                                                                                                   // 38
  }()                                                                                                                  // 38
});                                                                                                                    // 6
                                                                                                                       //
Template.twiitCommentPage.events({                                                                                     // 46
  'click #btnFav': function () {                                                                                       // 47
    function clickBtnFav() {                                                                                           // 47
      var currentUser = Session.get('currentUser');                                                                    // 48
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                                // 49
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                            // 50
      var userTapFav = UserUtils.findFavsForTwiit(this._id);                                                           // 51
      var arrAux = userTapFav.idUserTapFav;                                                                            // 52
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                       // 53
      if (arrAux.indexOf(idUser) === -1) {                                                                             // 54
        UserUtils.addFavToTwiit(this._id, idUser);                                                                     // 55
                                                                                                                       //
        var notif = new Object();                                                                                      // 57
        notif._id = this._id;                                                                                          // 58
        notif.typeOfNotif = "fav";                                                                                     // 59
        notif.actorNotif = currentUser;                                                                                // 60
        notif.recepNotif = UserUtils.findUserFromTwiit(this._id);                                                      // 61
                                                                                                                       //
        console.log(notif);                                                                                            // 63
                                                                                                                       //
        Meteor.call('createTwiitNotification', notif);                                                                 // 65
                                                                                                                       //
        $("#" + this._id).addClass("heartFav");                                                                        // 67
        $("#" + this._id).removeClass("heartNoFav");                                                                   // 68
      } else {                                                                                                         // 69
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                                // 70
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                             // 71
        //LA OPERACION INVERSA                                                                                         // 72
        UserUtils.removeFavToTwiit(this._id, idUser);                                                                  // 73
        $("#" + this._id).addClass("heartNoFav");                                                                      // 74
        $("#" + this._id).removeClass("heartFav");                                                                     // 75
      }                                                                                                                // 76
    }                                                                                                                  // 77
                                                                                                                       //
    return clickBtnFav;                                                                                                // 47
  }(),                                                                                                                 // 47
  'click #btnComm': function () {                                                                                      // 78
    function clickBtnComm() {                                                                                          // 78
      $("#dialog-NewTwiit").modal();                                                                                   // 79
      Session.set('idCurrentTwiit', this._id);                                                                         // 80
      Session.set('commentMode', true);                                                                                // 81
    }                                                                                                                  // 82
                                                                                                                       //
    return clickBtnComm;                                                                                               // 78
  }()                                                                                                                  // 78
});                                                                                                                    // 46
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
                                                                                                                       //
      var elem = dateCon.split(' ');                                                                                   // 30
      return elem[0];                                                                                                  // 31
    }                                                                                                                  // 32
                                                                                                                       //
    return convertDateTime;                                                                                            // 26
  }(),                                                                                                                 // 26
                                                                                                                       //
  'showComments': function () {                                                                                        // 34
    function showComments() {                                                                                          // 34
      countArrComm = foundNotifComm.count();                                                                           // 35
      Session.set('lengthArrComm', countArrComm);                                                                      // 36
      return foundNotifComm;                                                                                           // 37
    }                                                                                                                  // 38
                                                                                                                       //
    return showComments;                                                                                               // 34
  }(),                                                                                                                 // 34
                                                                                                                       //
  'showFavs': function () {                                                                                            // 40
    function showFavs() {                                                                                              // 40
      countArrFavs = foundNotifFavs.count();                                                                           // 41
      Session.set('lengthArrFavs', countArrFavs);                                                                      // 42
      return foundNotifFavs;                                                                                           // 43
    }                                                                                                                  // 44
                                                                                                                       //
    return showFavs;                                                                                                   // 40
  }(),                                                                                                                 // 40
                                                                                                                       //
  'countNotifTwiit': function () {                                                                                     // 46
    function countNotifTwiit() {                                                                                       // 46
      var numNotif = UserUtils.findNumberNotif(this.name);                                                             // 47
      if (numNotif === 0) {                                                                                            // 48
        return false;                                                                                                  // 49
      } else {                                                                                                         // 50
        return true;                                                                                                   // 51
      }                                                                                                                // 52
    }                                                                                                                  // 53
                                                                                                                       //
    return countNotifTwiit;                                                                                            // 46
  }(),                                                                                                                 // 46
                                                                                                                       //
  'saveIdInArr': function () {                                                                                         // 55
    function saveIdInArr() {                                                                                           // 55
      arrWithId.push(this._id);                                                                                        // 56
      if (this.typeOfNotif === 'comment') {                                                                            // 57
        if (arrWithCommNotif.length < countArrComm) {                                                                  // 58
          arrWithCommNotif.push(this._id);                                                                             // 59
        }                                                                                                              // 60
      } else if (this.typeOfNotif === 'fav') {                                                                         // 61
        if (arrWithFavsNotif.length < countArrFavs) {                                                                  // 62
          arrWithFavsNotif.push(this._id);                                                                             // 63
        }                                                                                                              // 64
      }                                                                                                                // 65
    }                                                                                                                  // 66
                                                                                                                       //
    return saveIdInArr;                                                                                                // 55
  }(),                                                                                                                 // 55
                                                                                                                       //
  'selectTypeNotifToShow': function () {                                                                               // 68
    function selectTypeNotifToShow() {                                                                                 // 68
                                                                                                                       //
      var lengthFavs = Session.get('lengthArrFavs');                                                                   // 70
      var lengthComm = Session.get('lengthArrComm');                                                                   // 71
                                                                                                                       //
      if (lengthFavs > lengthComm) {                                                                                   // 73
        //SOLO MOSTRAMOS LAS NOTIF DE TIPO FAVS Y HAY QUE DEJAR SELECCIONADO                                           // 74
        //EL BTN DE FAVS DE LA NAVBAR FOOTER                                                                           // 75
        Session.set('btnShowCommIsPulse', false);                                                                      // 76
      } else if (lengthFavs < lengthComm) {                                                                            // 77
        //SOLO MOSTRAMOS LAS NOTIF DE TIPO COMM Y HAY QUE DEJAR SELECCIONADO                                           // 78
        //EL BTN DE COMM DE LA NAVBAR FOOTER                                                                           // 79
        Session.set('btnShowCommIsPulse', true);                                                                       // 80
      } else if (lengthFavs === lengthComm) {                                                                          // 81
        //SI TENEMOS EL MISMO NUMERO DE NOTIF, NO HACEMOS NADA. MOSTRAMOS TODAS.                                       // 82
        Session.set('btnShowCommIsPulse', false);                                                                      // 83
      }                                                                                                                // 84
    }                                                                                                                  // 85
                                                                                                                       //
    return selectTypeNotifToShow;                                                                                      // 68
  }(),                                                                                                                 // 68
                                                                                                                       //
  'numFavPerTwiit': function () {                                                                                      // 87
    function numFavPerTwiit() {                                                                                        // 87
      return UserUtils.findNumberFavPerTwiit(this.twiitId);                                                            // 88
    }                                                                                                                  // 89
                                                                                                                       //
    return numFavPerTwiit;                                                                                             // 87
  }(),                                                                                                                 // 87
  'findNumComment': function () {                                                                                      // 90
    function findNumComment() {                                                                                        // 90
      //AQUI this._id ES EL _ID DE LA COLLECTION NOTIFICATIONS                                                         // 91
      //POR LO QUE HABRA QUE SACAR EL CAMPO twiitId                                                                    // 92
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                            // 93
                                                                                                                       //
      var num = UserUtils.findNumComment(twiitId);                                                                     // 95
      if (num > 0) {                                                                                                   // 96
        return true;                                                                                                   // 97
      } else return false;                                                                                             // 98
    }                                                                                                                  // 99
                                                                                                                       //
    return findNumComment;                                                                                             // 90
  }(),                                                                                                                 // 90
  'numComment': function () {                                                                                          // 100
    function numComment() {                                                                                            // 100
      var num = UserUtils.findNumComment(UserUtils.findTwiitFromNotif(this._id));                                      // 101
      return num;                                                                                                      // 102
    }                                                                                                                  // 103
                                                                                                                       //
    return numComment;                                                                                                 // 100
  }(),                                                                                                                 // 100
  'idToFavBtn': function () {                                                                                          // 104
    function idToFavBtn() {                                                                                            // 104
      return this._id;                                                                                                 // 105
    }                                                                                                                  // 106
                                                                                                                       //
    return idToFavBtn;                                                                                                 // 104
  }(),                                                                                                                 // 104
  'classFav': function () {                                                                                            // 107
    function classFav() {                                                                                              // 107
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                            // 108
      var num = UserUtils.findNumberFavPerTwiit(twiitId);                                                              // 109
      if (num > 0) {                                                                                                   // 110
        return "heartFav";                                                                                             // 111
      } else return "heartNoFav";                                                                                      // 112
    }                                                                                                                  // 113
                                                                                                                       //
    return classFav;                                                                                                   // 107
  }(),                                                                                                                 // 107
  'numFavorite': function () {                                                                                         // 114
    function numFavorite() {                                                                                           // 114
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                            // 115
      var num = UserUtils.findNumberFavPerTwiit(twiitId);                                                              // 116
      if (num > 0) {                                                                                                   // 117
        return true;                                                                                                   // 118
      } else return false;                                                                                             // 119
    }                                                                                                                  // 120
                                                                                                                       //
    return numFavorite;                                                                                                // 114
  }(),                                                                                                                 // 114
  'numFav': function () {                                                                                              // 121
    function numFav() {                                                                                                // 121
      var twiitId = UserUtils.findTwiitFromNotif(this._id);                                                            // 122
      var num = UserUtils.findNumberFavPerTwiit(twiitId);                                                              // 123
      return num;                                                                                                      // 124
    }                                                                                                                  // 125
                                                                                                                       //
    return numFav;                                                                                                     // 121
  }(),                                                                                                                 // 121
  'btnShowComm': function () {                                                                                         // 126
    function btnShowComm() {                                                                                           // 126
      return Session.get('btnShowCommIsPulse');                                                                        // 127
    }                                                                                                                  // 128
                                                                                                                       //
    return btnShowComm;                                                                                                // 126
  }(),                                                                                                                 // 126
  'noCommNotif': function () {                                                                                         // 129
    function noCommNotif() {                                                                                           // 129
      if (Session.get('lengthArrComm') === 0) {                                                                        // 130
        return true;                                                                                                   // 131
      } else {                                                                                                         // 132
        return false;                                                                                                  // 133
      }                                                                                                                // 134
    }                                                                                                                  // 135
                                                                                                                       //
    return noCommNotif;                                                                                                // 129
  }(),                                                                                                                 // 129
  'noFavsNotif': function () {                                                                                         // 136
    function noFavsNotif() {                                                                                           // 136
      if (Session.get('lengthArrFavs') === 0) {                                                                        // 137
        return true;                                                                                                   // 138
      } else {                                                                                                         // 139
        return false;                                                                                                  // 140
      }                                                                                                                // 141
    }                                                                                                                  // 142
                                                                                                                       //
    return noFavsNotif;                                                                                                // 136
  }(),                                                                                                                 // 136
  'notifCommCount': function () {                                                                                      // 143
    function notifCommCount() {                                                                                        // 143
      return Session.get('lengthArrComm');                                                                             // 144
    }                                                                                                                  // 145
                                                                                                                       //
    return notifCommCount;                                                                                             // 143
  }(),                                                                                                                 // 143
  'notifFavsCount': function () {                                                                                      // 146
    function notifFavsCount() {                                                                                        // 146
      return Session.get('lengthArrFavs');                                                                             // 147
    }                                                                                                                  // 148
                                                                                                                       //
    return notifFavsCount;                                                                                             // 146
  }()                                                                                                                  // 146
});                                                                                                                    // 18
                                                                                                                       //
Template.twiitPageNew.events({                                                                                         // 151
  'click .btnDismissNotif': function () {                                                                              // 152
    function clickBtnDismissNotif(event) {                                                                             // 152
      console.log(arrWithCommNotif.length);                                                                            // 153
      console.log(arrWithFavsNotif.length);                                                                            // 154
                                                                                                                       //
      console.log(arrWithId);                                                                                          // 156
                                                                                                                       //
      var idBtn = event.target.id;                                                                                     // 158
                                                                                                                       //
      if (idBtn === 'dismissCommNotif') {                                                                              // 160
        for (var aux in meteorBabelHelpers.sanitizeForInObject(arrWithCommNotif)) {                                    // 161
          var id = arrWithCommNotif[aux];                                                                              // 162
          Notifications.update(id, { $set: { read: true } });                                                          // 163
          arrWithCommNotif.splice(aux, 1);                                                                             // 164
        }                                                                                                              // 165
      } else if (idBtn === 'dismissFavsNotif') {                                                                       // 166
        for (var aux in meteorBabelHelpers.sanitizeForInObject(arrWithFavsNotif)) {                                    // 167
          var id = arrWithFavsNotif[aux];                                                                              // 168
          Notifications.update(id, { $set: { read: true } });                                                          // 169
          arrWithFavsNotif.splice(aux, 1);                                                                             // 170
        }                                                                                                              // 171
      }                                                                                                                // 172
                                                                                                                       //
      Session.set('lengthArrFavs', arrWithFavsNotif.length);                                                           // 174
      Session.set('lengthArrComm', arrWithCommNotif.length);                                                           // 175
                                                                                                                       //
      if (arrWithCommNotif.length === 0 && arrWithFavsNotif.length === 0) {                                            // 177
        window.location = "/";                                                                                         // 178
      }                                                                                                                // 179
    }                                                                                                                  // 180
                                                                                                                       //
    return clickBtnDismissNotif;                                                                                       // 152
  }(),                                                                                                                 // 152
  'click #btnFav': function () {                                                                                       // 181
    function clickBtnFav() {                                                                                           // 181
      var currentUser = Session.get('currentUser');                                                                    // 182
      var idUser = Meteor.users.findOne({ username: currentUser })._id;                                                // 183
                                                                                                                       //
      //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO                                            // 185
      var idAux = UserUtils.findTwiitFromNotif(this._id);                                                              // 186
      var userTapFav = UserUtils.findFavsForTwiit(idAux);                                                              // 187
      var arrAux = userTapFav.idUserTapFav;                                                                            // 188
                                                                                                                       //
      //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS                                       // 190
      if (arrAux.indexOf(idUser) === -1) {                                                                             // 191
        UserUtils.addFavToTwiit(idAux, idUser);                                                                        // 192
                                                                                                                       //
        var notif = new Object();                                                                                      // 194
        notif._id = idAux;                                                                                             // 195
        notif.typeOfNotif = "fav";                                                                                     // 196
        notif.actorNotif = currentUser;                                                                                // 197
        notif.recepNotif = UserUtils.findUserFromTwiit(idAux);                                                         // 198
                                                                                                                       //
        console.log(notif);                                                                                            // 200
                                                                                                                       //
        Meteor.call('createTwiitNotification', notif);                                                                 // 202
                                                                                                                       //
        $("#" + this._id).addClass("heartFav");                                                                        // 204
        $("#" + this._id).removeClass("heartNoFav");                                                                   // 205
      } else {                                                                                                         // 206
        //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO                                // 207
        //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO                             // 208
        //LA OPERACION INVERSA                                                                                         // 209
        UserUtils.removeFavToTwiit(idAux, idUser);                                                                     // 210
        $("#" + this._id).addClass("heartNoFav");                                                                      // 211
        $("#" + this._id).removeClass("heartFav");                                                                     // 212
      }                                                                                                                // 213
    }                                                                                                                  // 214
                                                                                                                       //
    return clickBtnFav;                                                                                                // 181
  }(),                                                                                                                 // 181
  'click #btnComm': function () {                                                                                      // 215
    function clickBtnComm() {                                                                                          // 215
      var numComment = UserUtils.findNumComment(UserUtils.findTwiitFromNotif(this._id));                               // 216
      //SI EL TWIIT TIENE POR LO MENOS 1 COMENTARIO, ENTONCES REDIRIGIMOS AL USUARIO A                                 // 217
      //LA RUTA /Comments. SI NO, SE ABRE EL MODAL Y SE PUEDE HACER EL COMENTARIO                                      // 218
      if (numComment === 0) {                                                                                          // 219
        $("#dialog-NewTwiit").modal();                                                                                 // 220
        Session.set('commentMode', true);                                                                              // 221
        Session.set('idCurrentTwiit', UserUtils.findTwiitFromNotif(this._id));                                         // 222
      }                                                                                                                // 223
    }                                                                                                                  // 224
                                                                                                                       //
    return clickBtnComm;                                                                                               // 215
  }(),                                                                                                                 // 215
  'click #btnShowFavsNotif': function () {                                                                             // 225
    function clickBtnShowFavsNotif() {                                                                                 // 225
      Session.set('btnShowCommIsPulse', false);                                                                        // 226
    }                                                                                                                  // 227
                                                                                                                       //
    return clickBtnShowFavsNotif;                                                                                      // 225
  }(),                                                                                                                 // 225
  'click #btnShowCommNotif': function () {                                                                             // 228
    function clickBtnShowCommNotif() {                                                                                 // 228
      Session.set('btnShowCommIsPulse', true);                                                                         // 229
    }                                                                                                                  // 230
                                                                                                                       //
    return clickBtnShowCommNotif;                                                                                      // 228
  }()                                                                                                                  // 228
});                                                                                                                    // 151
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userManagement.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/userManagement.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.userManagement.onRendered(function () {                                                                       // 1
  Session.set('pageToLoad', true);                                                                                     // 2
});                                                                                                                    // 3
                                                                                                                       //
Template.userManagement.events({                                                                                       // 5
  'click #signup': function () {                                                                                       // 6
    function clickSignup(event) {                                                                                      // 6
      var passOk = false;                                                                                              // 7
      var emailOk = false;                                                                                             // 8
                                                                                                                       //
      //LIMPIAMOS LOS MENSAJES DE ERROR QUE HABIA ANTES                                                                // 10
      $('.msgErrorReg').each(function () {                                                                             // 11
        $(this).remove();                                                                                              // 12
      });                                                                                                              // 13
      $('.invalidField').each(function () {                                                                            // 14
        $(this).removeClass('invalidField');                                                                           // 15
      });                                                                                                              // 16
                                                                                                                       //
      var user = {                                                                                                     // 18
        username: $('#signupNameProfile').val(),                                                                       // 19
        password: $('#signupPassword').val(),                                                                          // 20
        profile: {                                                                                                     // 21
          fullname: $('#signupUsername').val(),                                                                        // 22
          email: $('#signupEmail').val()                                                                               // 23
        }                                                                                                              // 21
      };                                                                                                               // 18
                                                                                                                       //
      //VALIDAMOS QUE EL CORREO ES VALIDO                                                                              // 27
      if (user.profile.email.indexOf('@') === -1) {                                                                    // 28
        $('.formRegisterNew').append("<h5 class='text-center msgErrorReg'>El email no es válido</h5>");                // 29
        $('#signupEmail').addClass('invalidField');                                                                    // 30
        emailOk = false;                                                                                               // 31
      } else {                                                                                                         // 32
        emailOk = true;                                                                                                // 33
      };                                                                                                               // 34
                                                                                                                       //
      //VALIDAMOS QUE LAS CONTRASEÑAS SEAN IGUALES                                                                     // 36
      var pass2 = Session.get('valInputPass2');                                                                        // 37
                                                                                                                       //
      if (user.password != pass2) {                                                                                    // 39
        $('.formRegisterNew').append("<h5 class='text-center msgErrorReg'>Las contraseñas no coinciden</h5>");         // 40
        $('#signupPassword').addClass('invalidField');                                                                 // 41
        $('#signupPassword2').addClass('invalidField');                                                                // 42
        passOk = false;                                                                                                // 43
      } else {                                                                                                         // 44
        passOk = true;                                                                                                 // 45
      };                                                                                                               // 46
                                                                                                                       //
      if (passOk && emailOk) {                                                                                         // 48
        Accounts.createUser(user, function (err) {                                                                     // 49
          //VALIDAMOS SI EL NOMRBE DE USUARIO username YA EXISTE                                                       // 50
          if (err.reason === "Username already exists.") {                                                             // 51
            $('#signupNameProfile').addClass('invalidField');                                                          // 52
            $('.formRegisterNew').append("<h5 class='text-center msgErrorReg'>El nombre de usuario está en uso</h5>");
          }                                                                                                            // 54
        });                                                                                                            // 55
                                                                                                                       //
        //Creamos el nuevo usuario en DataUser                                                                         // 57
        var userData = new Object();                                                                                   // 58
        userData.userName = user.profile.fullname;                                                                     // 59
        userData.userNameProfile = user.username;                                                                      // 60
        userData.emailUser = user.email;                                                                               // 61
        userData.userImg = "";                                                                                         // 62
        userData.userDescription = "";                                                                                 // 63
                                                                                                                       //
        Meteor.call('insertDataUser', userData);                                                                       // 65
      };                                                                                                               // 66
    }                                                                                                                  // 67
                                                                                                                       //
    return clickSignup;                                                                                                // 6
  }(),                                                                                                                 // 6
                                                                                                                       //
  'click #login': function () {                                                                                        // 69
    function clickLogin(event) {                                                                                       // 69
      event.preventDefault();                                                                                          // 70
      $('#errorContent').text("");                                                                                     // 71
      var username = $('#loginNameProfile').val();                                                                     // 72
      var password = $('#loginPassword').val();                                                                        // 73
                                                                                                                       //
      Meteor.loginWithPassword(username, password, function (err) {                                                    // 75
        if (err) {                                                                                                     // 76
          if (err.reason === "User not found") {                                                                       // 77
            $('#loginNameProfile').addClass('invalidField');                                                           // 78
            $('#errorContent').append("Usuario no encontrado");                                                        // 79
          } else {                                                                                                     // 80
            $('#loginPassword').addClass('invalidField');                                                              // 81
            $('#errorContent').append("Usuario/Contraseña incorrecta");                                                // 82
          }                                                                                                            // 83
          $('#dialog-errorLogin').modal('show');                                                                       // 84
        };                                                                                                             // 85
      });                                                                                                              // 87
      loggingIn = true;                                                                                                // 88
    }                                                                                                                  // 89
                                                                                                                       //
    return clickLogin;                                                                                                 // 69
  }(),                                                                                                                 // 69
                                                                                                                       //
  'click #recommendationsBtn': function () {                                                                           // 91
    function clickRecommendationsBtn() {                                                                               // 91
      Session.set('recommendations', true);                                                                            // 92
    }                                                                                                                  // 93
                                                                                                                       //
    return clickRecommendationsBtn;                                                                                    // 91
  }(),                                                                                                                 // 91
                                                                                                                       //
  'click #goToLogInPage': function () {                                                                                // 95
    function clickGoToLogInPage() {                                                                                    // 95
      Session.set('pageToLoad', true);                                                                                 // 96
    }                                                                                                                  // 97
                                                                                                                       //
    return clickGoToLogInPage;                                                                                         // 95
  }(),                                                                                                                 // 95
                                                                                                                       //
  'click #goToRegisterPage': function () {                                                                             // 99
    function clickGoToRegisterPage() {                                                                                 // 99
      Session.set('pageToLoad', false);                                                                                // 100
    }                                                                                                                  // 101
                                                                                                                       //
    return clickGoToRegisterPage;                                                                                      // 99
  }(),                                                                                                                 // 99
  'change #signupPassword2': function () {                                                                             // 102
    function changeSignupPassword2(event) {                                                                            // 102
      Session.set('valInputPass2', $('#signupPassword2').val());                                                       // 103
    }                                                                                                                  // 104
                                                                                                                       //
    return changeSignupPassword2;                                                                                      // 102
  }(),                                                                                                                 // 102
  'change #loginNameProfile': function () {                                                                            // 105
    function changeLoginNameProfile(event) {                                                                           // 105
      $('#loginNameProfile').removeClass('invalidField');                                                              // 106
    }                                                                                                                  // 107
                                                                                                                       //
    return changeLoginNameProfile;                                                                                     // 105
  }(),                                                                                                                 // 105
  'change #loginPassword': function () {                                                                               // 108
    function changeLoginPassword(event) {                                                                              // 108
      $('#loginPassword').removeClass('invalidField');                                                                 // 109
    }                                                                                                                  // 110
                                                                                                                       //
    return changeLoginPassword;                                                                                        // 108
  }()                                                                                                                  // 108
});                                                                                                                    // 5
                                                                                                                       //
Template.userManagement.helpers({                                                                                      // 113
  'loginPage': function () {                                                                                           // 114
    function loginPage() {                                                                                             // 114
      return Session.get('pageToLoad');                                                                                // 115
    }                                                                                                                  // 116
                                                                                                                       //
    return loginPage;                                                                                                  // 114
  }()                                                                                                                  // 114
});                                                                                                                    // 113
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
  Session.set('pathActualApp', '/Profile/' + currentUserName);                                                         // 3
});                                                                                                                    // 4
                                                                                                                       //
Template.userProfile.events({                                                                                          // 6
  'click #logout': function () {                                                                                       // 7
    function clickLogout() {                                                                                           // 7
      Meteor.logout();                                                                                                 // 8
      window.location = "/";                                                                                           // 9
    }                                                                                                                  // 10
                                                                                                                       //
    return clickLogout;                                                                                                // 7
  }(),                                                                                                                 // 7
  'click #editWhatsLicenses': function () {                                                                            // 11
    function clickEditWhatsLicenses() {                                                                                // 11
      $('#dialog-editLicenses').modal('show');                                                                         // 12
    }                                                                                                                  // 13
                                                                                                                       //
    return clickEditWhatsLicenses;                                                                                     // 11
  }(),                                                                                                                 // 11
  'click .btnShowSN': function () {                                                                                    // 14
    function clickBtnShowSN(event) {                                                                                   // 14
                                                                                                                       //
      var idSN = event.target.id;                                                                                      // 16
      if (idSN === "Facebook") {                                                                                       // 17
        window.open("https://www.facebook.com/search/all/?q=" + Session.get('dataUser').userFb);                       // 18
      } else if (idSN === "Instagram") {                                                                               // 19
        window.open("https://www.instagram.com/" + Session.get('dataUser').userInsta + "/");                           // 20
      } else if (idSN === "WhatsApp") {                                                                                // 21
        Session.set('userToSentPet', currentUserName);                                                                 // 22
                                                                                                                       //
        var userActName = Meteor.user().username;                                                                      // 24
                                                                                                                       //
        var arrWhats = dataUser.showWhatsTo;                                                                           // 26
        Meteor.call('findUserData', userActName, function (err, res) {                                                 // 27
          if (arrWhats.length > 0) {                                                                                   // 28
            if (arrWhats.indexOf(res.userId) >= 0) {                                                                   // 29
              console.log("TOOLTIP");                                                                                  // 30
              //MOSTRAMOS EL WHATSAPP                                                                                  // 31
              $('[data-toggle="tooltip"]').attr("title", dataUser.userWhats);                                          // 32
              $('[data-toggle="tooltip"]').tooltip('show');                                                            // 33
            } else {                                                                                                   // 34
              $('[data-toggle="tooltip"]').tooltip('show');                                                            // 35
            }                                                                                                          // 36
          } else if (!Session.get('showProfileOtherUser')) {                                                           // 37
            //ESTE PROCESO NO ES INSTANTANEO YA QUE EL USUARIO TIENE QUE ACEPTAR LA PETICION                           // 38
            $('#dialog-showSocialNetwork').modal('show');                                                              // 39
          } else {                                                                                                     // 40
            $('[data-toggle="tooltip"]').tooltip('show');                                                              // 41
          }                                                                                                            // 42
        });                                                                                                            // 43
      }                                                                                                                // 44
    }                                                                                                                  // 45
                                                                                                                       //
    return clickBtnShowSN;                                                                                             // 14
  }(),                                                                                                                 // 14
  'click .showFollowings': function () {                                                                               // 46
    function clickShowFollowings() {                                                                                   // 46
      window.location = "/followAnts/" + currentUserName;                                                              // 47
    }                                                                                                                  // 48
                                                                                                                       //
    return clickShowFollowings;                                                                                        // 46
  }(),                                                                                                                 // 46
  'click .showFollowers': function () {                                                                                // 49
    function clickShowFollowers() {                                                                                    // 49
      window.location = "/followAnts/" + currentUserName;                                                              // 50
    }                                                                                                                  // 51
                                                                                                                       //
    return clickShowFollowers;                                                                                         // 49
  }(),                                                                                                                 // 49
  'click #btnUnfollow': function () {                                                                                  // 52
    function clickBtnUnfollow() {                                                                                      // 52
      $('#dialog-stopFollowing').modal('show');                                                                        // 53
    }                                                                                                                  // 54
                                                                                                                       //
    return clickBtnUnfollow;                                                                                           // 52
  }(),                                                                                                                 // 52
  'click #stopFolBtn': function () {                                                                                   // 55
    function clickStopFolBtn() {                                                                                       // 55
      Meteor.call('unfollowUser', currentUserName);                                                                    // 56
      Session.set('userIsFollowMe', false);                                                                            // 57
      $('#dialog-stopFollowing').modal('hide');                                                                        // 58
    }                                                                                                                  // 59
                                                                                                                       //
    return clickStopFolBtn;                                                                                            // 55
  }(),                                                                                                                 // 55
  'click #noStopFolBtn': function () {                                                                                 // 60
    function clickNoStopFolBtn() {                                                                                     // 60
      $('#dialog-stopFollowing').modal('hide');                                                                        // 61
    }                                                                                                                  // 62
                                                                                                                       //
    return clickNoStopFolBtn;                                                                                          // 60
  }(),                                                                                                                 // 60
  'click #btnFollow': function () {                                                                                    // 63
    function clickBtnFollow() {                                                                                        // 63
      Session.set('userIsFollowMe', true);                                                                             // 64
      Meteor.call('followUser', currentUserName);                                                                      // 65
    }                                                                                                                  // 66
                                                                                                                       //
    return clickBtnFollow;                                                                                             // 63
  }(),                                                                                                                 // 63
  'click #imgCurrentUser': function () {                                                                               // 67
    function clickImgCurrentUser() {                                                                                   // 67
      var imgUserProfile = $('#imgCurrentUser').attr('src');                                                           // 68
      $('#img' + currentUserName).attr('src', imgUserProfile);                                                         // 69
      $('#dialog-showImageProfile').modal('show');                                                                     // 70
      $('.modal-backdrop').css('opacity', 0.9);                                                                        // 71
    }                                                                                                                  // 72
                                                                                                                       //
    return clickImgCurrentUser;                                                                                        // 67
  }(),                                                                                                                 // 67
  'click #btnCloseModalImgProfile': function () {                                                                      // 73
    function clickBtnCloseModalImgProfile() {                                                                          // 73
      $('#dialog-showImageProfile').modal('hide');                                                                     // 74
    }                                                                                                                  // 75
                                                                                                                       //
    return clickBtnCloseModalImgProfile;                                                                               // 73
  }()                                                                                                                  // 73
});                                                                                                                    // 6
                                                                                                                       //
Template.userProfile.helpers({                                                                                         // 78
  'dataUserFound': function () {                                                                                       // 79
    function dataUserFound() {                                                                                         // 79
      Meteor.call('findUserData', currentUserName, function (err, res) {                                               // 80
        Session.set('dataUser', res);                                                                                  // 81
      });                                                                                                              // 82
                                                                                                                       //
      dataUser = Session.get('dataUser');                                                                              // 84
                                                                                                                       //
      return dataUser;                                                                                                 // 86
    }                                                                                                                  // 87
                                                                                                                       //
    return dataUserFound;                                                                                              // 79
  }(),                                                                                                                 // 79
  'userImgFound': function () {                                                                                        // 88
    function userImgFound() {                                                                                          // 88
      if (dataUser.userImg != "") {                                                                                    // 89
        Meteor.call('findUserImg', dataUser.userImg, function (err, res) {                                             // 90
          $('#imgCurrentUser').attr("src", res);                                                                       // 91
        });                                                                                                            // 92
      } else {                                                                                                         // 93
        console.log("No Img Profile");                                                                                 // 94
        //$('#imgCurrentUser').attr("src", "/profileImgTest.png");                                                     // 95
        return "/profileImgTest.png";                                                                                  // 96
      }                                                                                                                // 97
    }                                                                                                                  // 98
                                                                                                                       //
    return userImgFound;                                                                                               // 88
  }(),                                                                                                                 // 88
  'tweets': function () {                                                                                              // 99
    function tweets() {                                                                                                // 99
      return UserUtils.findTweets(currentUserName).count();                                                            // 100
    }                                                                                                                  // 101
                                                                                                                       //
    return tweets;                                                                                                     // 99
  }(),                                                                                                                 // 99
  'following': function () {                                                                                           // 102
    function following() {                                                                                             // 102
      Meteor.call('getFollowings', currentUserName, function (err, res) {                                              // 103
        Session.set('numFollowings', res.length);                                                                      // 104
      });                                                                                                              // 105
      return Session.get('numFollowings');                                                                             // 106
    }                                                                                                                  // 107
                                                                                                                       //
    return following;                                                                                                  // 102
  }(),                                                                                                                 // 102
  'followers': function () {                                                                                           // 108
    function followers() {                                                                                             // 108
      Meteor.call('getFollowers', currentUserName, function (err, res) {                                               // 109
        Session.set('getFollowers', res);                                                                              // 110
        Session.set('numFollowers', res.length);                                                                       // 111
      });                                                                                                              // 112
                                                                                                                       //
      var currentFollowers = Session.get('getFollowers');                                                              // 114
      var currentUser = Session.get('currentUser');                                                                    // 115
                                                                                                                       //
      if (currentFollowers) {                                                                                          // 117
        var posUser = currentFollowers.indexOf(currentUser);                                                           // 118
                                                                                                                       //
        if (posUser != -1) {                                                                                           // 120
          Session.set('userIsFollowMe', true);                                                                         // 121
        } else {                                                                                                       // 122
          Session.set('userIsFollowMe', false);                                                                        // 123
        }                                                                                                              // 124
      }                                                                                                                // 125
                                                                                                                       //
      return Session.get('numFollowers');                                                                              // 127
    }                                                                                                                  // 128
                                                                                                                       //
    return followers;                                                                                                  // 108
  }(),                                                                                                                 // 108
  'existsSocialNetwork': function () {                                                                                 // 129
    function existsSocialNetwork() {                                                                                   // 129
                                                                                                                       //
      var btnSocial = [];                                                                                              // 131
                                                                                                                       //
      if (dataUser.userFb) {                                                                                           // 133
        var newData = new Object();                                                                                    // 134
        newData.color = "primary";                                                                                     // 135
        newData['class'] = "fa fa-facebook";                                                                           // 136
        newData.id = "Facebook";                                                                                       // 137
        btnSocial.push(newData);                                                                                       // 138
      }                                                                                                                // 139
                                                                                                                       //
      if (dataUser.userInsta) {                                                                                        // 141
        var newData = new Object();                                                                                    // 142
        newData.color = "warning";                                                                                     // 143
        newData['class'] = "fa fa-instagram";                                                                          // 144
        newData.id = "Instagram";                                                                                      // 145
        btnSocial.push(newData);                                                                                       // 146
      }                                                                                                                // 147
                                                                                                                       //
      if (dataUser.userWhats) {                                                                                        // 149
        var newData = new Object();                                                                                    // 150
        newData.color = "success";                                                                                     // 151
        newData['class'] = "fa fa-whatsapp";                                                                           // 152
        newData.id = "WhatsApp";                                                                                       // 153
        btnSocial.push(newData);                                                                                       // 154
      }                                                                                                                // 155
                                                                                                                       //
      return btnSocial;                                                                                                // 157
    }                                                                                                                  // 158
                                                                                                                       //
    return existsSocialNetwork;                                                                                        // 129
  }(),                                                                                                                 // 129
  'showProfileOtherUser': function () {                                                                                // 159
    function showProfileOtherUser() {                                                                                  // 159
      return Session.get('showProfileOtherUser');                                                                      // 160
    }                                                                                                                  // 161
                                                                                                                       //
    return showProfileOtherUser;                                                                                       // 159
  }(),                                                                                                                 // 159
  'isWhatsapp': function () {                                                                                          // 162
    function isWhatsapp() {                                                                                            // 162
      if (this.id === "WhatsApp") {                                                                                    // 163
        return true;                                                                                                   // 164
      }                                                                                                                // 165
    }                                                                                                                  // 166
                                                                                                                       //
    return isWhatsapp;                                                                                                 // 162
  }(),                                                                                                                 // 162
  'userIsFollowMe': function () {                                                                                      // 167
    function userIsFollowMe() {                                                                                        // 167
      return Session.get('userIsFollowMe');                                                                            // 168
    }                                                                                                                  // 169
                                                                                                                       //
    return userIsFollowMe;                                                                                             // 167
  }(),                                                                                                                 // 167
  'currentUser': function () {                                                                                         // 170
    function currentUser() {                                                                                           // 170
      return currentUserName;                                                                                          // 171
    }                                                                                                                  // 172
                                                                                                                       //
    return currentUser;                                                                                                // 170
  }()                                                                                                                  // 170
});                                                                                                                    // 78
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"videoTrans.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partialTemplates/videoTrans.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.videoTrans.onCreated(function () {});                                                                         // 1
                                                                                                                       //
Template.videoTrans.events({});                                                                                        // 5
                                                                                                                       //
Template.videoTrans.helpers({                                                                                          // 9
		'chargeVideo': function () {                                                                                         // 10
				function chargeVideo() {                                                                                           // 10
						console.log("Loading");                                                                                          // 11
						navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                                                                                                                       //
						window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;                                    // 17
                                                                                                                       //
						console.log(window.URL);                                                                                         // 22
                                                                                                                       //
						navigator.getMedia(                                                                                              // 24
						// Restricciones (contraints) *Requerido                                                                         // 25
						{                                                                                                                // 26
								video: true                                                                                                    // 27
						},                                                                                                               // 26
                                                                                                                       //
						// Funcion de finalizacion (Succes-Callback) *Requerido                                                          // 30
						function (localMediaStream) {                                                                                    // 31
								var video = document.querySelector('video');                                                                   // 32
								video.src = window.URL.createObjectURL(localMediaStream);                                                      // 33
                                                                                                                       //
								/*                                                                                                             // 35
        var playPromise = video.play();                                                                                //
                                                                                                                       //
        if (playPromise !== undefined) {                                                                               //
        playPromise.then(function() {                                                                                  //
        // Automatic playback started!                                                                                 //
        }).catch(function(error) {                                                                                     //
        console.log(error);                                                                                            //
        // Automatic playback failed.                                                                                  //
        // Show a UI element to let the user manually start playback.                                                  //
        });                                                                                                            //
        };                                                                                                             //
        */                                                                                                             //
								console.log(navigator);                                                                                        // 48
								/*                                                                                                             // 49
        video.onloadedmetadata = function(e) {                                                                         //
          // Haz algo con el video aquí.                                                                               //
        };                                                                                                             //
        */                                                                                                             //
						},                                                                                                               // 54
                                                                                                                       //
						// errorCallback *Opcional                                                                                       // 56
						function (err) {                                                                                                 // 57
								console.log("Ocurrió el siguiente error: ");                                                                   // 58
								console.log(err);                                                                                              // 59
						});                                                                                                              // 60
				}                                                                                                                  // 63
                                                                                                                       //
				return chargeVideo;                                                                                                // 10
		}()                                                                                                                  // 10
});                                                                                                                    // 9
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
  return Spacebars.include(view.lookupTemplate("mainPage"));                                                           // 4
}));                                                                                                                   // 5
Meteor.startup(Template.body.renderToDocument);                                                                        // 6
Meteor.startup(function() {                                                                                            // 7
  var attrs = {"id":"bodyPpal"};                                                                                       // 8
  for (var prop in attrs) {                                                                                            // 9
    document.body.setAttribute(prop, attrs[prop]);                                                                     // 10
  }                                                                                                                    // 11
});                                                                                                                    // 12
                                                                                                                       // 13
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
                                                                                                                       //
/*****************************************************************/                                                    // 6
/****************CONTROLAMOS EL ZOOM EN LA PAGINA*****************/                                                    // 7
/*****************************************************************/                                                    // 8
$(document).ready(function () {                                                                                        // 9
	$(document).keydown(function (event) {                                                                                // 10
		if (event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189')) {
			event.preventDefault();                                                                                             // 12
		};                                                                                                                   // 13
	});                                                                                                                   // 14
                                                                                                                       //
	$(window).bind('mousewheel DOMMouseScroll', function (event) {                                                        // 16
		if (event.ctrlKey == true) {                                                                                         // 17
			event.preventDefault();                                                                                             // 18
		};                                                                                                                   // 19
	});                                                                                                                   // 20
});                                                                                                                    // 21
/*****************************************************************/                                                    // 22
/*****************************************************************/                                                    // 23
/*****************************************************************/                                                    // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"lib":{"collections.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/collections.js                                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Twitts = new Meteor.Collection('twitts');                                                                              // 1
Relationships = new Meteor.Collection('relationships');                                                                // 2
DataUser = new Meteor.Collection('dataUser');                                                                          // 3
Favs = new Meteor.Collection('favs');                                                                                  // 4
Notifications = new Mongo.Collection('notifications');                                                                 // 5
Images = new Mongo.Collection('images');                                                                               // 6
ChatsMsg = new Mongo.Collection('chatsMsg');                                                                           // 7
Chats = new Mongo.Collection('chats');                                                                                 // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"router.js":function(){

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
Router.route('/', {                                                                                                    // 6
	name: 'userManagement',                                                                                               // 7
	data: function () {                                                                                                   // 8
		function data() {                                                                                                    // 8
			Session.set('pathActualApp', '/');                                                                                  // 9
		}                                                                                                                    // 10
                                                                                                                       //
		return data;                                                                                                         // 8
	}()                                                                                                                   // 8
});                                                                                                                    // 6
/*SE ACCEDE POR WINDOW.LOCATION*/                                                                                      // 12
Router.route('/whoToFollow', { name: 'followUsers' });                                                                 // 13
Router.route('/Profile/:username', {                                                                                   // 14
	name: 'userProfile',                                                                                                  // 15
	data: function () {                                                                                                   // 16
		function data() {                                                                                                    // 16
			var user = new Object();                                                                                            // 17
			user.name = this.params.username;                                                                                   // 18
                                                                                                                       //
			var currentUser = Session.get('currentUser');                                                                       // 20
                                                                                                                       //
			Meteor.call('findUserData', user.name, function (err, res) {                                                        // 22
				Session.set('dataUserShowProfile', res);                                                                           // 23
			});                                                                                                                 // 24
                                                                                                                       //
			dataUserShowProfile = Session.get('dataUserShowProfile');                                                           // 26
                                                                                                                       //
			if (dataUserShowProfile) {                                                                                          // 28
				if (dataUserShowProfile.userNameProfile != currentUser) {                                                          // 29
					Session.set('showProfileOtherUser', false);                                                                       // 30
				} else {                                                                                                           // 31
					Session.set('showProfileOtherUser', true);                                                                        // 32
				}                                                                                                                  // 33
			}                                                                                                                   // 34
                                                                                                                       //
			Session.set('pathActualApp', "/Profile/" + this.params.username);                                                   // 36
                                                                                                                       //
			return user;                                                                                                        // 38
		}                                                                                                                    // 39
                                                                                                                       //
		return data;                                                                                                         // 16
	}()                                                                                                                   // 16
});                                                                                                                    // 14
Router.route('/Notifications/:userName', {                                                                             // 41
	name: 'twiitPageNew',                                                                                                 // 42
	data: function () {                                                                                                   // 43
		function data() {                                                                                                    // 43
			var user = new Object();                                                                                            // 44
			user.name = this.params.userName;                                                                                   // 45
			Session.set('pathActualApp', "/Notifications/" + this.params.username);                                             // 46
			return user;                                                                                                        // 47
		}                                                                                                                    // 48
                                                                                                                       //
		return data;                                                                                                         // 43
	}()                                                                                                                   // 43
});                                                                                                                    // 41
                                                                                                                       //
Router.route('/RequestWhatsApp/:userName', {                                                                           // 51
	name: 'whatsAppRequestPage',                                                                                          // 52
	data: function () {                                                                                                   // 53
		function data() {                                                                                                    // 53
			var user = new Object();                                                                                            // 54
			user.name = this.params.userName;                                                                                   // 55
			Session.set('pathActualApp', "/RequestWhatsApp/" + this.params.username);                                           // 56
			return user;                                                                                                        // 57
		}                                                                                                                    // 58
                                                                                                                       //
		return data;                                                                                                         // 53
	}()                                                                                                                   // 53
});                                                                                                                    // 51
                                                                                                                       //
//Router.route('/Comments', {name: 'twiitCommentPage'});                                                               // 61
/*SE ACCEDE POR PATHFOR*/                                                                                              // 62
Router.route('/Comments/:_id', {                                                                                       // 63
	name: 'twiitCommentPage',                                                                                             // 64
	data: function () {                                                                                                   // 65
		function data() {                                                                                                    // 65
			var mode = Session.get('notificationsModeOn');                                                                      // 66
			var idTwiit = new Object();                                                                                         // 67
			idTwiit._id = this.params._id;                                                                                      // 68
                                                                                                                       //
			if (mode) {                                                                                                         // 70
				idTwiit.mode = mode;                                                                                               // 71
			}                                                                                                                   // 72
                                                                                                                       //
			Session.set('pathActualApp', "/Comments/" + this.params.username);                                                  // 74
                                                                                                                       //
			return idTwiit;                                                                                                     // 76
		}                                                                                                                    // 77
                                                                                                                       //
		return data;                                                                                                         // 65
	}()                                                                                                                   // 65
});                                                                                                                    // 63
Router.route('/twiits/:_id', {                                                                                         // 79
	name: 'twiitPage',                                                                                                    // 80
	data: function () {                                                                                                   // 81
		function data() {                                                                                                    // 81
			return this.params;                                                                                                 // 82
		}                                                                                                                    // 83
                                                                                                                       //
		return data;                                                                                                         // 81
	}()                                                                                                                   // 81
});                                                                                                                    // 79
                                                                                                                       //
Router.route('/editProfile/:userName', {                                                                               // 86
	name: 'editProfile',                                                                                                  // 87
	data: function () {                                                                                                   // 88
		function data() {                                                                                                    // 88
			Session.set('pathActualApp', "/editProfile/" + this.params.username);                                               // 89
			return this.params.userName;                                                                                        // 90
		}                                                                                                                    // 91
                                                                                                                       //
		return data;                                                                                                         // 88
	}()                                                                                                                   // 88
});                                                                                                                    // 86
                                                                                                                       //
Router.route('/followAnts/:userName', {                                                                                // 94
	name: 'followAnts',                                                                                                   // 95
	data: function () {                                                                                                   // 96
		function data() {                                                                                                    // 96
			var showData = new Object();                                                                                        // 97
			showData.user = this.params.userName;                                                                               // 98
			showData.mode = true;                                                                                               // 99
			Session.set('pathActualApp', "/followAnts/" + this.params.username);                                                // 100
			return showData;                                                                                                    // 101
		}                                                                                                                    // 102
                                                                                                                       //
		return data;                                                                                                         // 96
	}()                                                                                                                   // 96
});                                                                                                                    // 94
                                                                                                                       //
Router.route('/videoTrans', { name: 'videoTrans' });                                                                   // 105
                                                                                                                       //
Router.route('/Chats/', {                                                                                              // 107
	name: 'conversationsMenu'                                                                                             // 108
});                                                                                                                    // 107
                                                                                                                       //
Router.route('/Conversation/:username', {                                                                              // 111
	name: 'showConver',                                                                                                   // 112
	data: function () {                                                                                                   // 113
		function data() {                                                                                                    // 113
			var user = new Object();                                                                                            // 114
			user.name = this.params.username;                                                                                   // 115
                                                                                                                       //
			return user;                                                                                                        // 117
		}                                                                                                                    // 118
                                                                                                                       //
		return data;                                                                                                         // 113
	}()                                                                                                                   // 113
});                                                                                                                    // 111
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
    return data.follower;                                                                                              // 24
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
require("./client/partialTemplates/template.conversationsMenu.js");
require("./client/partialTemplates/template.editLicenses.js");
require("./client/partialTemplates/template.editProfile.js");
require("./client/partialTemplates/template.followAnts.js");
require("./client/partialTemplates/template.followUsers.js");
require("./client/partialTemplates/template.loading.js");
require("./client/partialTemplates/template.mainPage.js");
require("./client/partialTemplates/template.navBarTemplate.js");
require("./client/partialTemplates/template.not_found.js");
require("./client/partialTemplates/template.notifications.js");
require("./client/partialTemplates/template.notificationsNew.js");
require("./client/partialTemplates/template.pageNotFound.js");
require("./client/partialTemplates/template.removeProfile.js");
require("./client/partialTemplates/template.sendRequest.js");
require("./client/partialTemplates/template.showConver.js");
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
require("./client/partialTemplates/template.videoTrans.js");
require("./client/partialTemplates/template.whatsAppNotif.js");
require("./client/partialTemplates/template.whatsAppRequestPage.js");
require("./client/template.main.js");
require("./lib/collections.js");
require("./lib/router.js");
require("./lib/userUtils.js");
require("./client/partialTemplates/conversationsMenu.js");
require("./client/partialTemplates/editLicenses.js");
require("./client/partialTemplates/editProfile.js");
require("./client/partialTemplates/followAnts.js");
require("./client/partialTemplates/followUsers.js");
require("./client/partialTemplates/mainPage.js");
require("./client/partialTemplates/navBarTemplate.js");
require("./client/partialTemplates/notifications.js");
require("./client/partialTemplates/notificationsNew.js");
require("./client/partialTemplates/removeProfile.js");
require("./client/partialTemplates/sendRequest.js");
require("./client/partialTemplates/showConver.js");
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
require("./client/partialTemplates/videoTrans.js");
require("./client/partialTemplates/whatsAppNotif.js");
require("./client/partialTemplates/whatsAppRequestPage.js");
require("./client/main.js");