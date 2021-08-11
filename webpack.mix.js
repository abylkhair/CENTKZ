const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);

mix.styles([
    'resources/assets/fcss/aos.css',
    'resources/assets/fcss/bootstrap.min.css',
    'resources/assets/fcss/bootstrap-datepicker.css',
    'resources/assets/fcss/jquery.fancybox.min.css',
    'resources/assets/fcss/jquery-ui.css',
    'resources/assets/fcss/magnific-popup.css',
    'resources/assets/fcss/mediaelementplayer.css',
    'resources/assets/fcss/owl.carousel.min.css',
    'resources/assets/fcss/owl.theme.default.min.css',
    'resources/assets/fcss/style.css',
    'resources/assets/fcss/bootstrap/bootstrap.css',
    'resources/assets/fcss/bootstrap/bootstrap-grid.css',
    'resources/assets/fcss/bootstrap/bootstrap-reboot.css',
],'public/css/styles.css');

mix.scripts([
    'resources/assets/fjs/aniban.js',
    'resources/assets/fjs/aos.js',
    'resources/assets/fjs/bootstrap.min.js',
    'resources/assets/fjs/bootstrap-datepicker.min.js',
    'resources/assets/fjs/jquery.countdown.min.js',
    'resources/assets/fjs/jquery.easing.1.3.js',
    'resources/assets/fjs/jquery.fancybox.min.js',
    'resources/assets/fjs/jquery.magnific-popup.min.js',
    'resources/assets/fjs/jquery.stellar.min.js',
    'resources/assets/fjs/jquery.sticky.js',
    'resources/assets/fjs/jquery-3.3.1.min.js',
    'resources/assets/fjs/jquery-migrate-3.0.1.min.js',
    'resources/assets/fjs/jquery-ui.js',
    'resources/assets/fjs/main.js',
    'resources/assets/fjs/mediaelement-and-player.min.js',
    'resources/assets/fjs/owl.carousel.min.js',
    'resources/assets/fjs/popper.min.js',
    'resources/assets/fjs/slick.min.js',
    'resources/assets/fjs/typed.js',
],'public/js/app.js');

mix.scripts([
    'resources/assets/admin/js/',
],'public/js/app.js');

mix.copy('resources/assets/fonts','public/fonts');
mix.copy('resources/assets/images','public/images');
mix.copy('resources/assets/files','public/files');
mix.copy('resources/assets/favicon','public/favicon');

//Admin
mix.styles([
    'resources/assets/admin/bootstrap/css/bootstrap.min.css',
    'resources/assets/admin/font-awesome/4.5.0/css/font-awesome.min.css',
    'resources/assets/admin/ionicons/2.0.1/css/ionicons.min.css',
    'resources/assets/admin/plugins/iCheck/minimal/_all.css',
    'resources/assets/admin/plugins/datepicker/datepicker3.css',
    'resources/assets/admin/plugins/select2/select2.min.css',
    'resources/assets/admin/plugins/datatables/dataTables.bootstrap.css',
    'resources/assets/admin/dist/css/AdminLTE.min.css',
    'resources/assets/admin/dist/css/skins/_all-skins.min.css'
], 'public/css/admin.css');

mix.scripts([
    'resources/assets/admin/plugins/jQuery/jquery-2.2.3.min.js',
    'resources/assets/admin/bootstrap/js/bootstrap.min.js',
    'resources/assets/admin/plugins/select2/select2.full.min.js',
    'resources/assets/admin/plugins/datepicker/bootstrap-datepicker.js',
    'resources/assets/admin/plugins/datatables/jquery.dataTables.min.js',
    'resources/assets/admin/plugins/datatables/dataTables.bootstrap.min.js',
    'resources/assets/admin/plugins/slimScroll/jquery.slimscroll.min.js',
    'resources/assets/admin/plugins/fastclick/fastclick.js',
    'resources/assets/admin/plugins/iCheck/icheck.min.js',
    'resources/assets/admin/dist/js/app.min.js',
    'resources/assets/admin/dist/js/demo.js',
    'resources/assets/admin/dist/js/scripts.js'
], 'public/js/admin.js');

mix.copy('resources/assets/admin/bootstrap/fonts', 'public/fonts');
mix.copy('resources/assets/admin/dist/fonts', 'public/fonts');
mix.copy('resources/assets/admin/dist/img', 'public/img');
mix.copy('resources/assets/admin/plugins/iCheck/minimal/blue.png', 'public/css');

mix.styles([
    'resources/assets/front/css/bootstrap.min.css',
    'resources/assets/front/css/font-awesome.min.css',
    'resources/assets/front/css/animate.min.css',
    'resources/assets/front/css/owl.carousel.css',
    'resources/assets/front/css/owl.theme.css',
    'resources/assets/front/css/owl.transitions.css',
    'resources/assets/front/css/style.css',
    'resources/assets/front/css/responsive.css'
],'public/css/front.css');

mix.scripts([
    'resources/assets/front/js/jquery-1.11.3.min.js',
    'resources/assets/front/js/bootstrap.min.js',
    'resources/assets/front/js/owl.carousel.min.js',
    'resources/assets/front/js/jquery.stickit.min.js',
    'resources/assets/front/js/menu.js',
    'resources/assets/front/js/scripts.js',
    'resources/js/app.js',
    'resources/js/bootstrap.bundle.js',
    'resources/js/bootstrap.js',
    'resources/js/filter.js',
    'resources/js/jquery-3.4.0.min.js',
], 'public/js/front.js');

mix.copy('resources/assets/front/fonts', 'public/fonts');
mix.copy('resources/assets/front/images', 'public/images');
