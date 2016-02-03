var gulp = require('gulp')
  , inject = require("gulp-inject")
  , rename = require('gulp-rename')
  , util = require('gulp-util')
  , manifest = require('gulp-manifest')
  , url = require('url')
  , proxy = require('proxy-middleware')
  , filter = require('filter-array')
  , ngAnnotate = require('gulp-ng-annotate')
  , mainBowerFiles = require('main-bower-files')
  , concat = require('gulp-concat')
  , replace = require('gulp-replace')
  , md5 = require('gulp-md5')
  , uglify = require('gulp-uglify')
  , browserSync = require('browser-sync').create()
  , minifyCss = require('gulp-minify-css')
  , gzip = require('gulp-gzip')
  , stripDebug = require('gulp-strip-debug')
  , imagemin = require('gulp-imagemin')
  , html2js = require('gulp-html2js')
  , del = require('del')
  , htmlmin = require('gulp-htmlmin')
  , order = require('gulp-order');

//插件配置
var pluginOpt = {
  bowerFileOpt: {
    paths: {
      bowerDirectory: './www/lib',
      bowerrc: '.bowerrc',
      bowerJson: 'bower.json'
    },
    debugging: false
  },
  order: {
    js: {
      lib: [
        'lib/jquery/dist/jquery.min.js',
        'lib/jquery-ui/jquery-ui.min.js',
        'lib/bootstrap/dist/js/bootstrap.min.js',
        'lib/raphael/raphael-min.js',
        'lib/jquery-sparkline/dist/jquery.sparkline.min.js',
        'lib/moment/moment-2.11.1/min/moment.min.js',
        'lib/bootstrap-datepicker/js/bootstrap-datepicker.js',
        'lib/fastclick/lib/fastclick.js',
        'lib/jquery-knob/dist/jquery.knob.min.js',
        'lib/angular/angular.min.js',
        'lib/datatables/media/js/jquery.dataTables.min.js',
        'lib/datatables/media/js/dataTables.bootstrap.min.js'
      ],
      application: [
        'js/app.js',
        'js/config/*.js',
        'js/services/*.service.js',
        'js/controllers/*.controller.js',
        'js/constants/*.constant.js',
        'js/directives/*.directive.js',
        'js/filter/*.filter.js'
      ],
      components: [
        'components/jvectormap/jquery-jvectormap-1.2.2.min.js',
        'components/morris/morris.min.js',
        'components/jvectormap/jquery-jvectormap-world-mill-en.js',
        'components/daterangepicker/daterangepicker.js',
        'components/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
        'components/slimScroll/jquery.slimscroll.min.js',
        'components/iCheck/icheck.min.js'
      ]
    },
    css: {
      lib: [
        'lib/bootstrap/dist/css/bootstrap.min.css',
        'lib/font-awesome/css/font-awesome.min.css',
        'lib/Ionicons/css/ionicons.min.css',
        'lib/iCheck/skins/flat/blue.css',
        'lib/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'
      ],
      application: [
        'www/css/*.min.css',
        'www/css/skins/_all-skins.min.css',
        'www/js/**/*.css'
      ],
      components: [
        'components/morris/morris.css',
        'components/jvectormap/jquery-jvectormap-1.2.2.css',
        'components/datepicker/datepicker3.css',
        'components/iCheck/square/blue.css',
        'components/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'
      ]
    }
  },
  inject: {
    bower: {
      name: 'bower',
      relative: true,
      ignorePath: '../build'
    },
    application: {
      name: 'application',
      relative: true,
      ignorePath: '../build/'
    },
    template: {
      name: "template",
      relative: true,
      ignorePath: '../build/'
    },
    components: {
      name: "components",
      relative: true,
      ignorePath: '../build/'
    }
  },
  gzip: {
    threshold: 512,
    level: 9,
    memLevel: 2
  },
  html: {
    removeComments: true,
    removeCommentsFromCDATA: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    removeScriptTypeAttributes: true
  },
  html2js: {
    base: 'www/',
    outputModuleName: 'app',
    useStrict: true
  }
};

//文件路径配置
var filePathConf = {
  bower: {
    lib: {
      js: filter(mainBowerFiles(pluginOpt.bowerFileOpt), /\.js$/),
      css: filter(mainBowerFiles(pluginOpt.bowerFileOpt), /\.css/),
      font: filter(mainBowerFiles(pluginOpt.bowerFileOpt), /\.(woff|eot|svg|ttf)$/)
    }
  },
  static: {
    js: {
      application: [
        'www/js/app.js',
        'www/js/config/**/*.js',
        'www/js/services/**/*.service.js',
        'www/js/controllers/**/*.controller.js',
        'www/js/constants/**/*.constant.js',
        'www/js/directives/**/*.directive.js',
        'www/js/filter/**/*.filter.js'
      ],
      components: [
        'www/components/jvectormap/jquery-jvectormap-1.2.2.min.js',
        'www/components/morris/morris.min.js',
        'www/components/jvectormap/jquery-jvectormap-world-mill-en.js',
        'www/components/daterangepicker/daterangepicker.js',
        'www/components/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
        'www/components/slimScroll/jquery.slimscroll.min.js',
        'www/components/iCheck/icheck.min.js'
      ]
    },
    css: {
      application: [
        'www/css/*.min.css',
        'www/css/skins/_all-skins.min.css',
        'www/js/**/*.css'
      ],
      components: [
        'www/components/morris/morris.css',
        'www/components/jvectormap/jquery-jvectormap-1.2.2.css',
        'www/components/iCheck/square/blue.css',
        'www/components/datepicker/datepicker3.css',
        'www/components/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'
      ]
    },
    template: ['www/templates/**/*.html'],
    ref: ['www/js/**/*.*', 'www/css/**/*.*'],
    images: ['www/img/**/*'],
    fonts: [
      'www/lib/font-awesome/fonts/*',
      'www/lib/ionic/fonts/*',
      'www/fonts/*'
    ],
    manifest: {
      build: [
        'build/*.html',
        'build/js/*.js',
        'build/css/*.css',
        'build/img/*.png',
        'build/img/*.jpg',
        'build/img/*.gif',
        'build/fonts/*.*',
        'build/platforms/**/*'
      ],
      local: [
        'www/*.html',
        'www/js/**/*.js',
        'www/css/**/*.css',
        'www/img/*.png',
        'www/img/*.jpg',
        'www/img/*.gif',
        'www/fonts/*.*',
        'www/platforms/**/*'
      ]
    }
  }
};

//清理构建目录
gulp.task('clean', function (cb) {
  del('build/');
  del('www/adminlte.html', cb())
});

//压缩图片
gulp.task('images', function () {
  gulp.src(filePathConf.static.images).pipe(imagemin()).pipe(gulp.dest('build/img/'));
});

//处理字体文件
gulp.task('fonts', function () {
  gulp.src(filePathConf.static.fonts).pipe(gulp.dest('build/fonts/'));
});

//文件压缩
gulp.task('gzip', function () {
  gulp.src('build/**/*.*')
    .pipe(gzip(pluginOpt.gzip))
    .pipe(gulp.dest('build/'));
});

//本地构建
gulp.task('local-build', function () {
  var bowerStyleSource = gulp.src(filePathConf.bower.lib.css, {base: 'www/'})
    .pipe(order(pluginOpt.order.css.lib));

  var bowerScriptSource = gulp.src(filePathConf.bower.lib.js, {base: 'www/'})
    .pipe(order(pluginOpt.order.js.lib));

  var applicationScriptSource = gulp.src(filePathConf.static.js.application, {base: "www/"})
    .pipe(order(pluginOpt.order.js.application));

  var applicationStyleSource = gulp.src(filePathConf.static.css.application, {base: "www/"})
    .pipe(order(pluginOpt.order.css.application));

  var componentsScriptSource = gulp.src(filePathConf.static.js.components, {base: "www/"})
    .pipe(order(pluginOpt.order.js.components));

  var componentsStyleSource = gulp.src(filePathConf.static.css.components, {base: "www/"})
    .pipe(order(pluginOpt.order.css.components));

  gulp.src('www/index-tpl.html')
    .pipe(inject(bowerScriptSource, pluginOpt.inject.bower))
    .pipe(inject(bowerStyleSource, pluginOpt.inject.bower))
    .pipe(inject(applicationScriptSource, pluginOpt.inject.application))
    .pipe(inject(applicationStyleSource, pluginOpt.inject.application))
    .pipe(inject(componentsScriptSource, pluginOpt.inject.components))
    .pipe(inject(componentsStyleSource, pluginOpt.inject.components))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('www/'));
});

//本地构建
gulp.task('build', function () {
  var bowerStyleSource = gulp.src(filePathConf.bower.lib.css, {base: 'www/'})
    .pipe(order(pluginOpt.order.css.lib))
    .pipe(concat("bower_lib_style.css"))
    .pipe(gulp.dest('build/css/'))
    .pipe(minifyCss())
    .pipe(md5(12))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('build/css/'));

  var bowerScriptSource = gulp.src(filePathConf.bower.lib.js, {base: 'www/'})
    .pipe(order(pluginOpt.order.js.lib))
    .pipe(ngAnnotate())
    .pipe(concat('bower_lib_script.js'))
    .pipe(gulp.dest('build/js/'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(md5(12))
    .pipe(gulp.dest('build/js/'));

  var applicationScriptSource = gulp.src(filePathConf.static.js.application, {base: "www/"})
    .pipe(order(pluginOpt.order.js.application))
    .pipe(ngAnnotate())
    .pipe(concat('dest_application_script.js'))
    .pipe(gulp.dest('build/js/'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(md5(12))
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('build/js/'));

  //var applicationStyleSource = gulp.src(filePathConf.static.css.application, {base: "www/"})
  //  .pipe(order(pluginOpt.order.css.application))
  //  .pipe(concat("application_style.css"))
  //  .pipe(gulp.dest('build/css/'))
  //  .pipe(minifyCss())
  //  .pipe(md5(12))
  //  .pipe(rename({extname: '.min.css'}))
  //  .pipe(gulp.dest('build/css/'));

  var componentsScriptSource = gulp.src(filePathConf.static.js.components, {base: "www/"})
    .pipe(order(pluginOpt.order.js.components))
    .pipe(ngAnnotate())
    .pipe(concat('components_script.js'))
    .pipe(gulp.dest('build/js/'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(md5(12))
    .pipe(gulp.dest('build/js/'));

  var componentsStyleSource = gulp.src(filePathConf.static.css.components, {base: "www/"})
    .pipe(order(pluginOpt.order.css.components))
    .pipe(concat("components_style.css"))
    .pipe(gulp.dest('build/css/'))
    .pipe(minifyCss())
    .pipe(md5(12))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('build/css/'));

  gulp.src('www/index-tpl.html')
    .pipe(inject(bowerScriptSource, pluginOpt.inject.bower))
    .pipe(inject(bowerStyleSource, pluginOpt.inject.bower))
    .pipe(inject(applicationScriptSource, pluginOpt.inject.application))
    //.pipe(inject(applicationStyleSource, pluginOpt.inject.application))
    .pipe(inject(componentsScriptSource, pluginOpt.inject.components))
    .pipe(inject(componentsStyleSource, pluginOpt.inject.components))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('build/'));
});

//静态服务器任务
gulp.task('serve', function () {
  console.log("======================");
  console.log("当前环境为: ==> " + util.env.env == 'pro' ? "PRODUCTION" : "DEV");
  console.log("======================");

  //代理配置
  var internalSystemApi = url.parse('http://192.168.100.212:8080/internalApi/');
  internalSystemApi.route = '/internalApi';

  var orgApiApi = url.parse('https://www.juxinli.com/orgApi/');
  orgApiApi.route = '/orgApi';

  var dataApi = url.parse('https://www.juxinli.com/api/');
  dataApi.route = '/api';

  var news = url.parse('http://www.shebaocn.cn/');
  news.route = '/news';

  var get_parent_region_code = url.parse('http://app.shebaocn.cn/get_parent_region_code');
  get_parent_region_code.route = '/get_parent_region_code';

  var baseServerOpts = {
    server: {
      baseDir: "www/",
      index: "index.html",
      //middleware: [proxy(internalSystemApi), proxy(orgApiApi), proxy(dataApi), proxy(news), proxy(get_parent_region_code)]
    }
  };

  if (util.env.env == 'production') {
    baseServerOpts.server.baseDir = 'build/';
  }

  browserSync.init(baseServerOpts);

  gulp.watch('./www/adminlte.html', function () {
    //gulp.run('local-build');
    browserSync.reload();
  });
});


//缓存设置
gulp.task('manifest', function () {
  gulp.src(filePathConf.static.manifest.build, {base: 'build/'})
    .pipe(manifest({
      hash: true,
      prefix: '/',
      filename: 'socialApp.manifest',
      exclude: 'socialApp.manifest',
      network: ['*']
    }))
    .pipe(gulp.dest('build/manifest/'));

  gulp.src(filePathConf.static.manifest.local, {base: 'www/'})
    .pipe(manifest({
      hash: true,
      prefix: '/',
      filename: 'socialApp.manifest',
      exclude: 'socialApp.manifest',
      network: ['*']
    }))
    .pipe(gulp.dest('www/manifest/'));
});

//静态文件处理
gulp.task('static', ['images', 'fonts', 'platforms']);

gulp.task('default', ['deploy-build', 'local-build'], function () {
  console.log("任务执行完成");
});

//gulp clean
//gulp static
//gulp
//gulp manifest

//gulp serve --env PRODUCTION
