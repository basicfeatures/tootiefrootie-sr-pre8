import { application } from "./application"

 import controllers from "./**/*_controller.js"
// import controllers from "./*_controller.js"
// import controllers from "/home/dev/tootiefrootie-sr-pre8/app/javascript/controllers/*_c
ontroller.js"
//
// $ ls /home/dev/tootiefrootie-sr-pre8/app/javascript/controllers/*_controller.js
// app/javascript/controllers/application_controller.js
// app/javascript/controllers/example_controller.js
// app/javascript/controllers/hello_controller.js

controllers.forEach((controller) => {
  application.register(controller.name, controller.module.default)
})

