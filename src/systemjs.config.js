/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      
      // angular material libraries
      '@angular2-material/core':                'node_modules/@angular2-material/core',
      '@angular2-material/toolbar':             'node_modules/@angular2-material/toolbar',
      '@angular2-material/sidenav':             'node_modules/@angular2-material/sidenav',
      '@angular2-material/list':                'node_modules/@angular2-material/list',
      '@angular2-material/button-toggle':       'node_modules/@angular2-material/button-toggle',
      '@angular2-material/button':              'node_modules/@angular2-material/button',
      '@angular2-material/icon':                'node_modules/@angular2-material/icon',
      '@angular2-material/card':                'node_modules/@angular2-material/card',
      '@angular2-material/input':               'node_modules/@angular2-material/input',
      '@angular2-material/tooltip':             'node_modules/@angular2-material/tooltip',
      '@angular2-material/progress-bar':        'node_modules/@angular2-material/progress-bar',
      '@angular2-material/progress-circle':     'node_modules/@angular2-material/progress-circle',
      '@angular2-material/grid-list':            'node_modules/@angular2-material/grid-list',
      'angular2-bootstrap-confirm':             'node_modules/angular2-bootstrap-confirm',
      'angular2-bootstrap-confirm/position':    'node_modules/angular2-bootstrap-confirm/position',

      // other libraries
      'rxjs':                       'npm:rxjs',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      
      // orther packages
      app: {
        main: './main.js',
        defaultExtension: 'js',
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },

      // material packages
      '@angular2-material/core':{
        format: 'cjs',
        main: 'core.umd.js'
      },
      '@angular2-material/toolbar':{
        format: 'cjs',
        main: 'toolbar.umd.js'
      },
      '@angular2-material/sidenav':{
        format: 'cjs',
        main: 'sidenav.umd.js'
      },
      '@angular2-material/list':{
        format: 'cjs',
        main: 'list.umd.js'
      },
      '@angular2-material/button-toggle':{
        format: 'cjs',
        main: 'button-toggle.umd.js'
      },
      '@angular2-material/button':{
        format: 'cjs',
        main: 'button.umd.js'
      },
      '@angular2-material/icon':{
        format: 'cjs',
        main: 'icon.umd.js'
      },
      '@angular2-material/card':{
        format: 'cjs',
        main: 'card.umd.js'
      },
      '@angular2-material/input':{
        format: 'cjs',
        main: 'input.umd.js'
      },
      '@angular2-material/tooltip':{
        format: 'cjs',
        main: 'tooltip.umd.js'
      },
      '@angular2-material/progress-bar':{
        format: 'cjs',
        main: 'progress-bar.umd.js'
      },
      '@angular2-material/progress-circle':{
        format: 'cjs',
        main: 'progress-circle.umd.js'
      },
      '@angular2-material/grid-list':{
        format: 'cjs',
        main: 'grid-list.umd.js'
      },

      'angular2-bootstrap-confirm':{
        defaultExtension: 'js',
        main: './dist/umd/angular2-bootstrap-confirm.js'
      },
      'angular2-bootstrap-confirm/position':{
        defaultExtension: 'js',
        main: './index.js'
      },

    }
  });
})(this);