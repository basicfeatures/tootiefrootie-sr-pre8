# StimulusReflex 3.5.0pre8 on Rails 7.0.3+Propshaft

Attempt to follow [marcoroth/rails7-stimulus-reflex-esbuild](https://github.com/marcoroth/rails7-stimulus-reflex-esbuild/):

```
$ yarn build
yarn run v1.22.19
$ esbuild app/javascript/*.* --bundle --sourcemap --outdir=app/assets/builds --public-path=assets
✘ [ERROR] Could not resolve "./**/*_controller.js"

    app/javascript/controllers/index.js:3:24:
      3 │ import controllers from "./**/*_controller.js"
        ╵                         ~~~~~~~~~~~~~~~~~~~~~~

1 error
child_process.js:656
    throw err;
    ^

Error: Command failed: /home/dev/tootiefrootie-sr-pre8/node_modules/esbuild-openbsd-64/bin/esbuild app/javascript/application.js --bundle --sourcemap --outdir=app/assets/builds --public-path=assets
    at checkExecSyncError (child_process.js:635:11)
    at Object.execFileSync (child_process.js:653:15)
    at Object.<anonymous> (/home/dev/tootiefrootie-sr-pre8/node_modules/esbuild/bin/esbuild:173:28)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47 {
  status: 1,
  signal: null,
  output: [ null, null, null ],
  pid: 54222,
  stdout: null,
  stderr: null
}
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

$ cat app/javascript/controllers/index.js
import { application } from "./application"

import controllers from "./**/*_controller.js"
// import controllers from "./*_controller.js"
// import controllers from "/home/dev/tootiefrootie-sr-pre8/app/javascript/controllers/*_controller.js"
//
// $ ls /home/dev/tootiefrootie-sr-pre8/app/javascript/controllers/*_controller.js
// app/javascript/controllers/application_controller.js
// app/javascript/controllers/example_controller.js
// app/javascript/controllers/hello_controller.js

controllers.forEach((controller) => {
  application.register(controller.name, controller.module.default)
})
```

