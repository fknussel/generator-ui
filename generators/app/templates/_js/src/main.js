require.config({
  baseUrl: 'js/src',
  paths: {
    jquery: '../../node_modules/jquery/dist/jquery.min',
    hogan: '../../node_modules/hogan.js/dist/hogan-3.0.2.min.amd'
  }
});

requirejs(['jquery', 'features'], function ($, features) {
  features.generate(function (data) {
    $('.features').html(data);
  });
});
