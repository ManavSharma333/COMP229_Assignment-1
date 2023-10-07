let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET About Me. */
router.get('/about', function(req, res, next) {
  res.render('about_me', { title: 'About_me' });
});
/* GET Projects. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects_calculator' });
});
/* GET Projects (calculator). */
router.get('/projects/calculator', function(req, res, next) {
  res.render('projects', { title: 'Projects_calculator' });
});
/* GET Projects (webPages). */
router.get('/projects/webPages', function(req, res, next) {
  res.render('projects', { title: 'projects_webPages' });
});
/* GET Projects (realEstate). */
router.get('/projects/realEstate', function(req, res, next) {
  res.render('projects', { title: 'real_estate' });
});
/* GET Mobile Apps. */
router.get('/mobileApps', function(req, res, next) {
  res.render('services', { title: 'Mobile Apps',intro : 'Mobile Apps' });
});
/* GET Web Development. */
router.get('/webDevelopment', function(req, res, next) {
  res.render('services', { title: 'Web Development', intro : 'Web Development' });
});
/* GET Technical Support. */
router.get('/technicalSupport', function(req, res, next) {
  res.render('services', { title: 'Technical Support',intro: 'Technical Support' });
});
/* GET Contact Us. */
router.get('/contact', function(req, res, next) {
  res.render('contact_us', { title: 'Contact Us',intro: 'Contact Us' });
});

module.exports = router;
