/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/items.js":
/*!*********************!*\
  !*** ./js/items.js ***!
  \*********************/
/*! exports provided: socialNetworks, URLs, menuItems, targets, skills, skillsName, iconSkill, SkillThemes, aboutSkillText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialNetworks", function() { return socialNetworks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLs", function() { return URLs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuItems", function() { return menuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targets", function() { return targets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skills", function() { return skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skillsName", function() { return skillsName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconSkill", function() { return iconSkill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillThemes", function() { return SkillThemes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutSkillText", function() { return aboutSkillText; });
var facebook = document.querySelector('.facebook-circle');
var twitter = document.querySelector('.twitter-circle');
var instagram = document.querySelector('.instagram-circle');
var github = document.querySelector('.github-circle');
var linkedin = document.querySelector('.linkedin-circle');
var socialNetworks = [facebook, twitter, instagram, github, linkedin];
var URLs = ['https://www.facebook.com/ChavaTI', 'https://twitter.com/ChavaTI_', 'https://www.instagram.com/chavatloz/', 'https://github.com/ChavaTI', 'https://www.linkedin.com/in/salvador-hernández-lópez-a2ab7315a/'];
var menuItems = [document.querySelector('#toAbout'), document.querySelector('#toSkills'), document.querySelector('#toPortafolio'), document.querySelector('#toExperience'), document.querySelector('#toContact')];
var targets = ['#about', '#skills', '#portafolio', '#experience', '#contact'];
var skills = [document.querySelector('#react'), document.querySelector('#angular'), document.querySelector('#node'), document.querySelector('#php'), document.querySelector('#laravel'), document.querySelector('#java'), document.querySelector('#db'), document.querySelector('#linux'), document.querySelector('#docker'), document.querySelector('#diagram'), document.querySelector('#language'), document.querySelector('#learning')];
var skillsName = ['React', 'Angular', 'NodeJS', 'PHP', 'Laravel', 'Java', 'Data Bases', 'Linux', 'Docker', 'Software engineering', 'Languages', 'Learning'];
var iconSkill = [['fab fa-react', 'react-card'], ['fab fa-angular', 'angular-card'], ['fab fa-node-js', 'node-card'], ['fab fa-php', 'php-card'], ['fab fa-laravel', 'laravel-card'], ['fab fa-java', 'java-card'], ['fas fa-database', 'db-card'], ['fab fa-linux', 'linux-card'], ['fab fa-docker', 'docker-card'], ['fas fa-project-diagram', 'diagram-card'], ['fas fa-language', 'language-card'], ['fas fa-book-reader', 'learning-card']];
var SkillThemes = ['#282c34', '#f0f0f080', '#333333', '#7478ae', '#ff2d20', '#f13d3d', '#2f5676', '#f0f0f080', '#309aeb', '#1d2f3f', '#87c540', '#3be1f0'];
var aboutSkillText = ["ReactJs is my favorite frontend library develop. I fully know how to use both the props and class components, stateless functional components and hook components. \n    I\u2019m also a person who likes following good practices. I\u2019m skilled at using Redux in ReactJS. When I use this tool I usually connect the react app with the API Rest using axios.", "Angular was the first frontend framework that I knew.  I master using the components of this framework and I alway try to take advantage of the angular materials to have good UI results. Also, I always stick to good practices when I code in TypeScript and Angular.", "NodeJS was the first backend framework I\u2019ve ever worked with. At the beginning I used to develop web apps using NodeJS Express and Jade. But, nowadays I\u2019ve tended to make API rests in order to make MEAN stack apps and MERN stack apps. \n    The data bases that I\u2019ve used are MySQL, MariaBD and Mongoo.  Consequently, I\u2019ve learned how to connect them with Node apps. And Finally, the technology that I use to make authorization tokens is JWT.", "My first web language was PHP, I\u2019ve used this language since university. My knowledge of this field goes from  PHP 7 on web server, connecting the app with MySQL and SQLServer databases, to how to print the data in order", "I've created project with Laravel framework using its tools like Laravel controllers, blade, eloquent, phpunit for test the code and anothers console tools to created the basic code and save time in the development, I've used migrations to mkae changes in mysql database.", "Java is my first POO language. I have a lot of experience coding in Java since I\u2019ve worked with it for a long time. I know  how to make either CLI apps, GUI apps (using code and using NetBeans tools) and web apps. Another thing that I\u2019d like to point out is that I've used many libraries and frameworks in java such that JDBC, JDBI, JPA, Hibernate, SpringMVC.", "One element inside my skill set is designing SQL databases. The common way that I follow to achieve this task is I start modeling using CASE tools and then I implement them in MySQL , MariaDB or SQLServer. I know how to manage the databases and add security. I face all the above not only using tools as PhpMyAdmin and MySql Workbench but using SQL script too.  Within the No SQL databases I\u2019ve learned to create Mongo databases.", "Linux systems are the reason why I love computer science. I\u2019ve used linux for ten years, I know how to install and manage the systems like Debian systems, Red hat systems and Arch linux systems. On the other hand,  the Linux Servers that \n    I've used are Ubuntu Server, Debian, CentOS and Fedora Server. Into this systems I have knowledge of how to install and manage the Apache web server, NGINX, Tomcat server, DNS servers, DHCP servers, Webmin, databases (See more in databases section), and LAMP server. Even more, I know how to install and use network security tools like Nagios and nmap. My actual linux system is Arch linux but I've opted for Ubuntu (Kubuntu, Xubuntu, Ubuntu mate), Debian, Fedora, Manjaro, Linux Mint as personal systems too. Lastly, writing shell script code is also part of my skill set.", "Regarding docker, I can upload only few lines of code instead of making an oversize configuration on the server. When I work in team I prefer to use docker so the team can be sure that the project will work in any computer no matter their Operative System. I master using docker in console and using scripts like dockerfiles and docker-compose. I\u2019ve launched docker containers with different servers like Apache, Ngnix, and LAMP (mainly Linux, Mysql and PHP). There is a bunch of projects in which I have appealed docker, these include, but are not limited to laravel, node, and java projects.", "I\u2019m able to make software engineering that goes from requirements analysis using interviews, surveys, documentation analysis, until software design using entity\u2013relationship models, relational models, database normalization, flowcharts, use case diagrams, and mockup designs. In addition, during the develop phase, I have experience working with SCRUM and KANBAN. Finally, I've deployed projects on AWS and digital ocean using docker.", "My native language is spanish and I've studied english since elementary school until now. I've been in different english courses but I try to practice my english everyday with some friends.\n    I consider that my english is good because apart from I've tried to read more english books to improve,  I've been able to establish a conversation in english with american people.", "I love computer science, software development, programming, and making solutions. Then, I study these topics whenever I need it or I want to learn new informatic stuff. I resort to all kind of resources, for instance web sites, blogs, forums, software documentations, tutorials, web courses, or books.\n    I consider myself a self-taught person. If I don't know how to do it, I'll learn it and then I\u2019ll do it. It is worth mentioning that I love sharing my knowledge with people, which I think is a great feature of mine."];

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items */ "./js/items.js");
// Social network code

document.addEventListener("DOMContentLoaded", function () {
  var _loop = function _loop(i) {
    var element = _items__WEBPACK_IMPORTED_MODULE_0__["socialNetworks"][i];
    var url = _items__WEBPACK_IMPORTED_MODULE_0__["URLs"][i];
    element.addEventListener('click', function () {
      window.open(url, '_blank');
    });
  };

  //
  for (var i = 0; i < _items__WEBPACK_IMPORTED_MODULE_0__["socialNetworks"].length; i++) {
    _loop(i);
  }
}); // smoothScroll code

var ease = function ease(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

var smoothScroll = function smoothScroll(targetId, duration) {
  var target = document.querySelector(targetId);
  var startPosition = window.pageYOffset;
  var distance = target.getBoundingClientRect().top; // Es la distancia de la esquina superior de la ventana al target

  var startTime = null;

  var animation = function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
}; // to Sections


var toSections = function toSections() {
  var _loop2 = function _loop2(i) {
    var menuItem = _items__WEBPACK_IMPORTED_MODULE_0__["menuItems"][i];
    var target = _items__WEBPACK_IMPORTED_MODULE_0__["targets"][i];
    menuItem.addEventListener('click', function () {
      smoothScroll(target, 2000);
    });
  };

  //
  for (var i = 0; i < _items__WEBPACK_IMPORTED_MODULE_0__["menuItems"].length; i++) {
    _loop2(i);
  }
};

toSections(); //TODO: About-Skills
// check and uncheck radio button hide in the skills icons

var checkUncheckRadio = function checkUncheckRadio() {
  var booRadio;

  var _loop3 = function _loop3(i) {
    var element = _items__WEBPACK_IMPORTED_MODULE_0__["skills"][i];
    element.addEventListener('click', function () {
      if (booRadio == element) {
        element.checked = false;
        booRadio = null;
      } else {
        booRadio = element;
      }
    });
  };

  for (var i = 0; i < _items__WEBPACK_IMPORTED_MODULE_0__["skills"].length; i++) {
    _loop3(i);
  }
};

checkUncheckRadio();

var showAboutSkills = function showAboutSkills() {
  var aboutSkill = document.querySelector('#about-skill');
  var title = aboutSkill.firstElementChild.firstElementChild;
  var icon = title.nextElementSibling;
  var text = icon.nextElementSibling;

  var _loop4 = function _loop4(i) {
    var skill = _items__WEBPACK_IMPORTED_MODULE_0__["skills"][i];
    skill.addEventListener('click', function () {
      if (skill.checked) {
        aboutSkill.style.display = 'block';
        smoothScroll('#about-skill', 2000);
        aboutSkill.style.backgroundColor = _items__WEBPACK_IMPORTED_MODULE_0__["SkillThemes"][i];
        title.innerHTML = _items__WEBPACK_IMPORTED_MODULE_0__["skillsName"][i];
        icon.innerHTML = "<i class = \"".concat(_items__WEBPACK_IMPORTED_MODULE_0__["iconSkill"][i][0], "\"></i>");
        icon.className = _items__WEBPACK_IMPORTED_MODULE_0__["iconSkill"][i][1] + " card-about-icon";
        text.innerHTML = "<p>".concat(_items__WEBPACK_IMPORTED_MODULE_0__["aboutSkillText"][i], "</p>");
      } else {
        aboutSkill.style.display = 'none';
      }
    });
  };

  for (var i = 0; i < _items__WEBPACK_IMPORTED_MODULE_0__["skills"].length; i++) {
    _loop4(i);
  }
};

showAboutSkills();

var backToSkills = function backToSkills() {
  var backToSkillArrow = document.querySelector('#back-to-skills');
  backToSkillArrow.addEventListener('click', function () {
    smoothScroll('#skills', 2000);
  });
};

backToSkills();
var tsaBtn = document.querySelector('#tsa-rm');
tsaBtn.addEventListener('click', function () {
  Swal.fire({
    title: 'The software artisans',
    text: "Under this period on TSA I've developed web solutions used differents tools and I've trained to the new people in TSA. I'm using languages like php, java, \n        javascript, frameworks like reactjs, angular, laravel, about backend tools I've used NodeJS, Socket.io, JWT, Express and the databases are mysql, mongodb. All of sevrer run in docker.",
    imageUrl: './img/tsa.png',
    imageAlt: 'Custom image'
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJmYWNlYm9vayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJnaXRodWIiLCJsaW5rZWRpbiIsInNvY2lhbE5ldHdvcmtzIiwiVVJMcyIsIm1lbnVJdGVtcyIsInRhcmdldHMiLCJza2lsbHMiLCJza2lsbHNOYW1lIiwiaWNvblNraWxsIiwiU2tpbGxUaGVtZXMiLCJhYm91dFNraWxsVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpIiwiZWxlbWVudCIsInVybCIsIndpbmRvdyIsIm9wZW4iLCJsZW5ndGgiLCJlYXNlIiwidCIsImIiLCJjIiwiZCIsInNtb290aFNjcm9sbCIsInRhcmdldElkIiwiZHVyYXRpb24iLCJ0YXJnZXQiLCJzdGFydFBvc2l0aW9uIiwicGFnZVlPZmZzZXQiLCJkaXN0YW5jZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInN0YXJ0VGltZSIsImFuaW1hdGlvbiIsImN1cnJlbnRUaW1lIiwidGltZUVsYXBzZWQiLCJydW4iLCJzY3JvbGxUbyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRvU2VjdGlvbnMiLCJtZW51SXRlbSIsImNoZWNrVW5jaGVja1JhZGlvIiwiYm9vUmFkaW8iLCJjaGVja2VkIiwic2hvd0Fib3V0U2tpbGxzIiwiYWJvdXRTa2lsbCIsInRpdGxlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpY29uIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidGV4dCIsInNraWxsIiwic3R5bGUiLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiYmFja1RvU2tpbGxzIiwiYmFja1RvU2tpbGxBcnJvdyIsInRzYUJ0biIsIlN3YWwiLCJmaXJlIiwiaW1hZ2VVcmwi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QU07QUFDbkNpRCxNQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOZixTQUFLLEVBQUUsdUJBREQ7QUFFTkksUUFBSSxnV0FGRTtBQUlOWSxZQUFRLEVBQUUsZUFKSjtBQUtOQyxZQUFRLEVBQUU7QUFMSixHQUFWO0FBT0gsQ0FSRCxFIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL21haW4uanNcIik7XG4iLCJjb25zdCBmYWNlYm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWNlYm9vay1jaXJjbGUnKTtcbmNvbnN0IHR3aXR0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHdpdHRlci1jaXJjbGUnKTtcbmNvbnN0IGluc3RhZ3JhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnN0YWdyYW0tY2lyY2xlJyk7XG5jb25zdCBnaXRodWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2l0aHViLWNpcmNsZScpO1xuY29uc3QgbGlua2VkaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua2VkaW4tY2lyY2xlJyk7XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxOZXR3b3JrcyA9IFtmYWNlYm9vaywgdHdpdHRlciwgaW5zdGFncmFtLCBnaXRodWIsIGxpbmtlZGluXTtcbmV4cG9ydCBjb25zdCBVUkxzID0gWydodHRwczovL3d3dy5mYWNlYm9vay5jb20vQ2hhdmFUSScsICdodHRwczovL3R3aXR0ZXIuY29tL0NoYXZhVElfJywgJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vY2hhdmF0bG96LycsICdodHRwczovL2dpdGh1Yi5jb20vQ2hhdmFUSScsICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2FsdmFkb3ItaGVybsOhbmRlei1sw7NwZXotYTJhYjczMTVhLyddO1xuXG5cbmV4cG9ydCBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvQWJvdXQnKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9Ta2lsbHMnKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9Qb3J0YWZvbGlvJyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvRXhwZXJpZW5jZScpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b0NvbnRhY3QnKVxuXTtcbmV4cG9ydCBjb25zdCB0YXJnZXRzID0gWycjYWJvdXQnLCAnI3NraWxscycsICcjcG9ydGFmb2xpbycsICcjZXhwZXJpZW5jZScsICcjY29udGFjdCddO1xuXG5leHBvcnQgY29uc3Qgc2tpbGxzID0gW1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWFjdCcpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbmd1bGFyJyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vZGUnKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGhwJyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhcmF2ZWwnKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjamF2YScpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYicpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaW51eCcpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb2NrZXInKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlhZ3JhbScpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYW5ndWFnZScpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWFybmluZycpXG5dO1xuXG5cbmV4cG9ydCBjb25zdCBza2lsbHNOYW1lID0gW1xuICAgICdSZWFjdCcsXG4gICAgJ0FuZ3VsYXInLFxuICAgICdOb2RlSlMnLFxuICAgICdQSFAnLFxuICAgICdMYXJhdmVsJyxcbiAgICAnSmF2YScsXG4gICAgJ0RhdGEgQmFzZXMnLFxuICAgICdMaW51eCcsXG4gICAgJ0RvY2tlcicsXG4gICAgJ1NvZnR3YXJlIGVuZ2luZWVyaW5nJyxcbiAgICAnTGFuZ3VhZ2VzJyxcbiAgICAnTGVhcm5pbmcnXG5dO1xuXG5leHBvcnQgY29uc3QgaWNvblNraWxsID0gW1xuICAgIFsnZmFiIGZhLXJlYWN0JywgJ3JlYWN0LWNhcmQnXSxcbiAgICBbJ2ZhYiBmYS1hbmd1bGFyJywgJ2FuZ3VsYXItY2FyZCddLFxuICAgIFsnZmFiIGZhLW5vZGUtanMnLCAnbm9kZS1jYXJkJ10sXG4gICAgWydmYWIgZmEtcGhwJywgJ3BocC1jYXJkJ10sXG4gICAgWydmYWIgZmEtbGFyYXZlbCcsICdsYXJhdmVsLWNhcmQnXSxcbiAgICBbJ2ZhYiBmYS1qYXZhJywgJ2phdmEtY2FyZCddLFxuICAgIFsnZmFzIGZhLWRhdGFiYXNlJywgJ2RiLWNhcmQnXSxcbiAgICBbJ2ZhYiBmYS1saW51eCcsICdsaW51eC1jYXJkJ10sXG4gICAgWydmYWIgZmEtZG9ja2VyJywgJ2RvY2tlci1jYXJkJ10sXG4gICAgWydmYXMgZmEtcHJvamVjdC1kaWFncmFtJywgJ2RpYWdyYW0tY2FyZCddLFxuICAgIFsnZmFzIGZhLWxhbmd1YWdlJywgJ2xhbmd1YWdlLWNhcmQnXSxcbiAgICBbJ2ZhcyBmYS1ib29rLXJlYWRlcicsICdsZWFybmluZy1jYXJkJ11cbl07XG5cbmV4cG9ydCBjb25zdCBTa2lsbFRoZW1lcyA9IFtcbiAgICAnIzI4MmMzNCcsXG4gICAgJyNmMGYwZjA4MCcsXG4gICAgJyMzMzMzMzMnLFxuICAgICcjNzQ3OGFlJyxcbiAgICAnI2ZmMmQyMCcsXG4gICAgJyNmMTNkM2QnLFxuICAgICcjMmY1Njc2JyxcbiAgICAnI2YwZjBmMDgwJyxcbiAgICAnIzMwOWFlYicsXG4gICAgJyMxZDJmM2YnLFxuICAgICcjODdjNTQwJyxcbiAgICAnIzNiZTFmMCdcbl07XG5cbmV4cG9ydCBjb25zdCBhYm91dFNraWxsVGV4dCA9IFtcbiAgICBgUmVhY3RKcyBpcyBteSBmYXZvcml0ZSBmcm9udGVuZCBsaWJyYXJ5IGRldmVsb3AuIEkgZnVsbHkga25vdyBob3cgdG8gdXNlIGJvdGggdGhlIHByb3BzIGFuZCBjbGFzcyBjb21wb25lbnRzLCBzdGF0ZWxlc3MgZnVuY3Rpb25hbCBjb21wb25lbnRzIGFuZCBob29rIGNvbXBvbmVudHMuIFxuICAgIEnigJltIGFsc28gYSBwZXJzb24gd2hvIGxpa2VzIGZvbGxvd2luZyBnb29kIHByYWN0aWNlcy4gSeKAmW0gc2tpbGxlZCBhdCB1c2luZyBSZWR1eCBpbiBSZWFjdEpTLiBXaGVuIEkgdXNlIHRoaXMgdG9vbCBJIHVzdWFsbHkgY29ubmVjdCB0aGUgcmVhY3QgYXBwIHdpdGggdGhlIEFQSSBSZXN0IHVzaW5nIGF4aW9zLmAsXG4gICAgYEFuZ3VsYXIgd2FzIHRoZSBmaXJzdCBmcm9udGVuZCBmcmFtZXdvcmsgdGhhdCBJIGtuZXcuICBJIG1hc3RlciB1c2luZyB0aGUgY29tcG9uZW50cyBvZiB0aGlzIGZyYW1ld29yayBhbmQgSSBhbHdheSB0cnkgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgdGhlIGFuZ3VsYXIgbWF0ZXJpYWxzIHRvIGhhdmUgZ29vZCBVSSByZXN1bHRzLiBBbHNvLCBJIGFsd2F5cyBzdGljayB0byBnb29kIHByYWN0aWNlcyB3aGVuIEkgY29kZSBpbiBUeXBlU2NyaXB0IGFuZCBBbmd1bGFyLmAsXG4gICAgYE5vZGVKUyB3YXMgdGhlIGZpcnN0IGJhY2tlbmQgZnJhbWV3b3JrIEnigJl2ZSBldmVyIHdvcmtlZCB3aXRoLiBBdCB0aGUgYmVnaW5uaW5nIEkgdXNlZCB0byBkZXZlbG9wIHdlYiBhcHBzIHVzaW5nIE5vZGVKUyBFeHByZXNzIGFuZCBKYWRlLiBCdXQsIG5vd2FkYXlzIEnigJl2ZSB0ZW5kZWQgdG8gbWFrZSBBUEkgcmVzdHMgaW4gb3JkZXIgdG8gbWFrZSBNRUFOIHN0YWNrIGFwcHMgYW5kIE1FUk4gc3RhY2sgYXBwcy4gXG4gICAgVGhlIGRhdGEgYmFzZXMgdGhhdCBJ4oCZdmUgdXNlZCBhcmUgTXlTUUwsIE1hcmlhQkQgYW5kIE1vbmdvby4gIENvbnNlcXVlbnRseSwgSeKAmXZlIGxlYXJuZWQgaG93IHRvIGNvbm5lY3QgdGhlbSB3aXRoIE5vZGUgYXBwcy4gQW5kIEZpbmFsbHksIHRoZSB0ZWNobm9sb2d5IHRoYXQgSSB1c2UgdG8gbWFrZSBhdXRob3JpemF0aW9uIHRva2VucyBpcyBKV1QuYCxcbiAgICBgTXkgZmlyc3Qgd2ViIGxhbmd1YWdlIHdhcyBQSFAsIEnigJl2ZSB1c2VkIHRoaXMgbGFuZ3VhZ2Ugc2luY2UgdW5pdmVyc2l0eS4gTXkga25vd2xlZGdlIG9mIHRoaXMgZmllbGQgZ29lcyBmcm9tICBQSFAgNyBvbiB3ZWIgc2VydmVyLCBjb25uZWN0aW5nIHRoZSBhcHAgd2l0aCBNeVNRTCBhbmQgU1FMU2VydmVyIGRhdGFiYXNlcywgdG8gaG93IHRvIHByaW50IHRoZSBkYXRhIGluIG9yZGVyYCxcbiAgICBgSSd2ZSBjcmVhdGVkIHByb2plY3Qgd2l0aCBMYXJhdmVsIGZyYW1ld29yayB1c2luZyBpdHMgdG9vbHMgbGlrZSBMYXJhdmVsIGNvbnRyb2xsZXJzLCBibGFkZSwgZWxvcXVlbnQsIHBocHVuaXQgZm9yIHRlc3QgdGhlIGNvZGUgYW5kIGFub3RoZXJzIGNvbnNvbGUgdG9vbHMgdG8gY3JlYXRlZCB0aGUgYmFzaWMgY29kZSBhbmQgc2F2ZSB0aW1lIGluIHRoZSBkZXZlbG9wbWVudCwgSSd2ZSB1c2VkIG1pZ3JhdGlvbnMgdG8gbWthZSBjaGFuZ2VzIGluIG15c3FsIGRhdGFiYXNlLmAsXG4gICAgYEphdmEgaXMgbXkgZmlyc3QgUE9PIGxhbmd1YWdlLiBJIGhhdmUgYSBsb3Qgb2YgZXhwZXJpZW5jZSBjb2RpbmcgaW4gSmF2YSBzaW5jZSBJ4oCZdmUgd29ya2VkIHdpdGggaXQgZm9yIGEgbG9uZyB0aW1lLiBJIGtub3cgIGhvdyB0byBtYWtlIGVpdGhlciBDTEkgYXBwcywgR1VJIGFwcHMgKHVzaW5nIGNvZGUgYW5kIHVzaW5nIE5ldEJlYW5zIHRvb2xzKSBhbmQgd2ViIGFwcHMuIEFub3RoZXIgdGhpbmcgdGhhdCBJ4oCZZCBsaWtlIHRvIHBvaW50IG91dCBpcyB0aGF0IEkndmUgdXNlZCBtYW55IGxpYnJhcmllcyBhbmQgZnJhbWV3b3JrcyBpbiBqYXZhIHN1Y2ggdGhhdCBKREJDLCBKREJJLCBKUEEsIEhpYmVybmF0ZSwgU3ByaW5nTVZDLmAsXG4gICAgYE9uZSBlbGVtZW50IGluc2lkZSBteSBza2lsbCBzZXQgaXMgZGVzaWduaW5nIFNRTCBkYXRhYmFzZXMuIFRoZSBjb21tb24gd2F5IHRoYXQgSSBmb2xsb3cgdG8gYWNoaWV2ZSB0aGlzIHRhc2sgaXMgSSBzdGFydCBtb2RlbGluZyB1c2luZyBDQVNFIHRvb2xzIGFuZCB0aGVuIEkgaW1wbGVtZW50IHRoZW0gaW4gTXlTUUwgLCBNYXJpYURCIG9yIFNRTFNlcnZlci4gSSBrbm93IGhvdyB0byBtYW5hZ2UgdGhlIGRhdGFiYXNlcyBhbmQgYWRkIHNlY3VyaXR5LiBJIGZhY2UgYWxsIHRoZSBhYm92ZSBub3Qgb25seSB1c2luZyB0b29scyBhcyBQaHBNeUFkbWluIGFuZCBNeVNxbCBXb3JrYmVuY2ggYnV0IHVzaW5nIFNRTCBzY3JpcHQgdG9vLiAgV2l0aGluIHRoZSBObyBTUUwgZGF0YWJhc2VzIEnigJl2ZSBsZWFybmVkIHRvIGNyZWF0ZSBNb25nbyBkYXRhYmFzZXMuYCxcbiAgICBgTGludXggc3lzdGVtcyBhcmUgdGhlIHJlYXNvbiB3aHkgSSBsb3ZlIGNvbXB1dGVyIHNjaWVuY2UuIEnigJl2ZSB1c2VkIGxpbnV4IGZvciB0ZW4geWVhcnMsIEkga25vdyBob3cgdG8gaW5zdGFsbCBhbmQgbWFuYWdlIHRoZSBzeXN0ZW1zIGxpa2UgRGViaWFuIHN5c3RlbXMsIFJlZCBoYXQgc3lzdGVtcyBhbmQgQXJjaCBsaW51eCBzeXN0ZW1zLiBPbiB0aGUgb3RoZXIgaGFuZCwgIHRoZSBMaW51eCBTZXJ2ZXJzIHRoYXQgXG4gICAgSSd2ZSB1c2VkIGFyZSBVYnVudHUgU2VydmVyLCBEZWJpYW4sIENlbnRPUyBhbmQgRmVkb3JhIFNlcnZlci4gSW50byB0aGlzIHN5c3RlbXMgSSBoYXZlIGtub3dsZWRnZSBvZiBob3cgdG8gaW5zdGFsbCBhbmQgbWFuYWdlIHRoZSBBcGFjaGUgd2ViIHNlcnZlciwgTkdJTlgsIFRvbWNhdCBzZXJ2ZXIsIEROUyBzZXJ2ZXJzLCBESENQIHNlcnZlcnMsIFdlYm1pbiwgZGF0YWJhc2VzIChTZWUgbW9yZSBpbiBkYXRhYmFzZXMgc2VjdGlvbiksIGFuZCBMQU1QIHNlcnZlci4gRXZlbiBtb3JlLCBJIGtub3cgaG93IHRvIGluc3RhbGwgYW5kIHVzZSBuZXR3b3JrIHNlY3VyaXR5IHRvb2xzIGxpa2UgTmFnaW9zIGFuZCBubWFwLiBNeSBhY3R1YWwgbGludXggc3lzdGVtIGlzIEFyY2ggbGludXggYnV0IEkndmUgb3B0ZWQgZm9yIFVidW50dSAoS3VidW50dSwgWHVidW50dSwgVWJ1bnR1IG1hdGUpLCBEZWJpYW4sIEZlZG9yYSwgTWFuamFybywgTGludXggTWludCBhcyBwZXJzb25hbCBzeXN0ZW1zIHRvby4gTGFzdGx5LCB3cml0aW5nIHNoZWxsIHNjcmlwdCBjb2RlIGlzIGFsc28gcGFydCBvZiBteSBza2lsbCBzZXQuYCxcbiAgICBgUmVnYXJkaW5nIGRvY2tlciwgSSBjYW4gdXBsb2FkIG9ubHkgZmV3IGxpbmVzIG9mIGNvZGUgaW5zdGVhZCBvZiBtYWtpbmcgYW4gb3ZlcnNpemUgY29uZmlndXJhdGlvbiBvbiB0aGUgc2VydmVyLiBXaGVuIEkgd29yayBpbiB0ZWFtIEkgcHJlZmVyIHRvIHVzZSBkb2NrZXIgc28gdGhlIHRlYW0gY2FuIGJlIHN1cmUgdGhhdCB0aGUgcHJvamVjdCB3aWxsIHdvcmsgaW4gYW55IGNvbXB1dGVyIG5vIG1hdHRlciB0aGVpciBPcGVyYXRpdmUgU3lzdGVtLiBJIG1hc3RlciB1c2luZyBkb2NrZXIgaW4gY29uc29sZSBhbmQgdXNpbmcgc2NyaXB0cyBsaWtlIGRvY2tlcmZpbGVzIGFuZCBkb2NrZXItY29tcG9zZS4gSeKAmXZlIGxhdW5jaGVkIGRvY2tlciBjb250YWluZXJzIHdpdGggZGlmZmVyZW50IHNlcnZlcnMgbGlrZSBBcGFjaGUsIE5nbml4LCBhbmQgTEFNUCAobWFpbmx5IExpbnV4LCBNeXNxbCBhbmQgUEhQKS4gVGhlcmUgaXMgYSBidW5jaCBvZiBwcm9qZWN0cyBpbiB3aGljaCBJIGhhdmUgYXBwZWFsZWQgZG9ja2VyLCB0aGVzZSBpbmNsdWRlLCBidXQgYXJlIG5vdCBsaW1pdGVkIHRvIGxhcmF2ZWwsIG5vZGUsIGFuZCBqYXZhIHByb2plY3RzLmAsXG4gICAgYEnigJltIGFibGUgdG8gbWFrZSBzb2Z0d2FyZSBlbmdpbmVlcmluZyB0aGF0IGdvZXMgZnJvbSByZXF1aXJlbWVudHMgYW5hbHlzaXMgdXNpbmcgaW50ZXJ2aWV3cywgc3VydmV5cywgZG9jdW1lbnRhdGlvbiBhbmFseXNpcywgdW50aWwgc29mdHdhcmUgZGVzaWduIHVzaW5nIGVudGl0eeKAk3JlbGF0aW9uc2hpcCBtb2RlbHMsIHJlbGF0aW9uYWwgbW9kZWxzLCBkYXRhYmFzZSBub3JtYWxpemF0aW9uLCBmbG93Y2hhcnRzLCB1c2UgY2FzZSBkaWFncmFtcywgYW5kIG1vY2t1cCBkZXNpZ25zLiBJbiBhZGRpdGlvbiwgZHVyaW5nIHRoZSBkZXZlbG9wIHBoYXNlLCBJIGhhdmUgZXhwZXJpZW5jZSB3b3JraW5nIHdpdGggU0NSVU0gYW5kIEtBTkJBTi4gRmluYWxseSwgSSd2ZSBkZXBsb3llZCBwcm9qZWN0cyBvbiBBV1MgYW5kIGRpZ2l0YWwgb2NlYW4gdXNpbmcgZG9ja2VyLmAsXG4gICAgYE15IG5hdGl2ZSBsYW5ndWFnZSBpcyBzcGFuaXNoIGFuZCBJJ3ZlIHN0dWRpZWQgZW5nbGlzaCBzaW5jZSBlbGVtZW50YXJ5IHNjaG9vbCB1bnRpbCBub3cuIEkndmUgYmVlbiBpbiBkaWZmZXJlbnQgZW5nbGlzaCBjb3Vyc2VzIGJ1dCBJIHRyeSB0byBwcmFjdGljZSBteSBlbmdsaXNoIGV2ZXJ5ZGF5IHdpdGggc29tZSBmcmllbmRzLlxuICAgIEkgY29uc2lkZXIgdGhhdCBteSBlbmdsaXNoIGlzIGdvb2QgYmVjYXVzZSBhcGFydCBmcm9tIEkndmUgdHJpZWQgdG8gcmVhZCBtb3JlIGVuZ2xpc2ggYm9va3MgdG8gaW1wcm92ZSwgIEkndmUgYmVlbiBhYmxlIHRvIGVzdGFibGlzaCBhIGNvbnZlcnNhdGlvbiBpbiBlbmdsaXNoIHdpdGggYW1lcmljYW4gcGVvcGxlLmAsXG4gICAgYEkgbG92ZSBjb21wdXRlciBzY2llbmNlLCBzb2Z0d2FyZSBkZXZlbG9wbWVudCwgcHJvZ3JhbW1pbmcsIGFuZCBtYWtpbmcgc29sdXRpb25zLiBUaGVuLCBJIHN0dWR5IHRoZXNlIHRvcGljcyB3aGVuZXZlciBJIG5lZWQgaXQgb3IgSSB3YW50IHRvIGxlYXJuIG5ldyBpbmZvcm1hdGljIHN0dWZmLiBJIHJlc29ydCB0byBhbGwga2luZCBvZiByZXNvdXJjZXMsIGZvciBpbnN0YW5jZSB3ZWIgc2l0ZXMsIGJsb2dzLCBmb3J1bXMsIHNvZnR3YXJlIGRvY3VtZW50YXRpb25zLCB0dXRvcmlhbHMsIHdlYiBjb3Vyc2VzLCBvciBib29rcy5cbiAgICBJIGNvbnNpZGVyIG15c2VsZiBhIHNlbGYtdGF1Z2h0IHBlcnNvbi4gSWYgSSBkb24ndCBrbm93IGhvdyB0byBkbyBpdCwgSSdsbCBsZWFybiBpdCBhbmQgdGhlbiBJ4oCZbGwgZG8gaXQuIEl0IGlzIHdvcnRoIG1lbnRpb25pbmcgdGhhdCBJIGxvdmUgc2hhcmluZyBteSBrbm93bGVkZ2Ugd2l0aCBwZW9wbGUsIHdoaWNoIEkgdGhpbmsgaXMgYSBncmVhdCBmZWF0dXJlIG9mIG1pbmUuYFxuXSIsIi8vIFNvY2lhbCBuZXR3b3JrIGNvZGVcbmltcG9ydCB7IHNvY2lhbE5ldHdvcmtzLCBVUkxzLCBtZW51SXRlbXMsIHRhcmdldHMsIHNraWxsc05hbWUsIHNraWxscywgaWNvblNraWxsLCBTa2lsbFRoZW1lcywgYWJvdXRTa2lsbFRleHQgfSBmcm9tICcuL2l0ZW1zJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvY2lhbE5ldHdvcmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzb2NpYWxOZXR3b3Jrc1tpXTtcbiAgICAgICAgY29uc3QgdXJsID0gVVJMc1tpXTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuLy8gc21vb3RoU2Nyb2xsIGNvZGVcblxuY29uc3QgZWFzZSA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgdCAvPSBkIC8gMjtcbiAgICBpZiAodCA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICsgYjtcbiAgICB0LS07XG4gICAgcmV0dXJuIC1jIC8gMiAqICh0ICogKHQgLSAyKSAtIDEpICsgYjtcbn1cblxuY29uc3Qgc21vb3RoU2Nyb2xsID0gKHRhcmdldElkLCBkdXJhdGlvbikgPT4ge1xuICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldElkKTtcbiAgICBsZXQgc3RhcnRQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBsZXQgZGlzdGFuY2UgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wOyAvLyBFcyBsYSBkaXN0YW5jaWEgZGUgbGEgZXNxdWluYSBzdXBlcmlvciBkZSBsYSB2ZW50YW5hIGFsIHRhcmdldFxuICAgIGxldCBzdGFydFRpbWUgPSBudWxsO1xuXG5cbiAgICBjb25zdCBhbmltYXRpb24gPSBjdXJyZW50VGltZSA9PiB7XG4gICAgICAgIGlmIChzdGFydFRpbWUgPT09IG51bGwpIHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICBsZXQgdGltZUVsYXBzZWQgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcblxuXG4gICAgICAgIGxldCBydW4gPSBlYXNlKHRpbWVFbGFwc2VkLCBzdGFydFBvc2l0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24pO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcnVuKTtcbiAgICAgICAgaWYgKHRpbWVFbGFwc2VkIDwgZHVyYXRpb24pIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xufVxuXG4vLyB0byBTZWN0aW9uc1xuXG5jb25zdCB0b1NlY3Rpb25zID0gKCkgPT4ge1xuICAgIC8vXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBtZW51SXRlbXNbaV07XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRhcmdldHNbaV07XG5cbiAgICAgICAgbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzbW9vdGhTY3JvbGwodGFyZ2V0LCAyMDAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG50b1NlY3Rpb25zKCk7XG5cbi8vVE9ETzogQWJvdXQtU2tpbGxzXG5cblxuLy8gY2hlY2sgYW5kIHVuY2hlY2sgcmFkaW8gYnV0dG9uIGhpZGUgaW4gdGhlIHNraWxscyBpY29uc1xuY29uc3QgY2hlY2tVbmNoZWNrUmFkaW8gPSAoKSA9PiB7XG4gICAgbGV0IGJvb1JhZGlvO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2tpbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBza2lsbHNbaV07XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAgICAgaWYgKGJvb1JhZGlvID09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBib29SYWRpbyA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvb1JhZGlvID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2hlY2tVbmNoZWNrUmFkaW8oKTtcblxuXG5jb25zdCBzaG93QWJvdXRTa2lsbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYWJvdXRTa2lsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dC1za2lsbCcpO1xuICAgIGNvbnN0IHRpdGxlID0gYWJvdXRTa2lsbC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBjb25zdCBpY29uID0gdGl0bGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IHRleHQgPSBpY29uLm5leHRFbGVtZW50U2libGluZztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2tpbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNraWxsID0gc2tpbGxzW2ldO1xuXG4gICAgICAgIHNraWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoc2tpbGwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGFib3V0U2tpbGwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgc21vb3RoU2Nyb2xsKCcjYWJvdXQtc2tpbGwnLCAyMDAwKTtcbiAgICAgICAgICAgICAgICBhYm91dFNraWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFNraWxsVGhlbWVzW2ldO1xuICAgICAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHNraWxsc05hbWVbaV07XG4gICAgICAgICAgICAgICAgaWNvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3MgPSBcIiR7aWNvblNraWxsW2ldWzBdfVwiPjwvaT5gO1xuICAgICAgICAgICAgICAgIGljb24uY2xhc3NOYW1lID0gaWNvblNraWxsW2ldWzFdICsgXCIgY2FyZC1hYm91dC1pY29uXCI7XG4gICAgICAgICAgICAgICAgdGV4dC5pbm5lckhUTUwgPSBgPHA+JHthYm91dFNraWxsVGV4dFtpXX08L3A+YFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhYm91dFNraWxsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuXG5zaG93QWJvdXRTa2lsbHMoKTtcblxuXG5cbmNvbnN0IGJhY2tUb1NraWxscyA9ICgpID0+IHtcbiAgICBsZXQgYmFja1RvU2tpbGxBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrLXRvLXNraWxscycpO1xuICAgIGJhY2tUb1NraWxsQXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNtb290aFNjcm9sbCgnI3NraWxscycsIDIwMDApXG4gICAgfSk7XG59XG5cbmJhY2tUb1NraWxscygpO1xuXG5sZXQgdHNhQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RzYS1ybScpO1xudHNhQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnVGhlIHNvZnR3YXJlIGFydGlzYW5zJyxcbiAgICAgICAgdGV4dDogYFVuZGVyIHRoaXMgcGVyaW9kIG9uIFRTQSBJJ3ZlIGRldmVsb3BlZCB3ZWIgc29sdXRpb25zIHVzZWQgZGlmZmVyZW50cyB0b29scyBhbmQgSSd2ZSB0cmFpbmVkIHRvIHRoZSBuZXcgcGVvcGxlIGluIFRTQS4gSSdtIHVzaW5nIGxhbmd1YWdlcyBsaWtlIHBocCwgamF2YSwgXG4gICAgICAgIGphdmFzY3JpcHQsIGZyYW1ld29ya3MgbGlrZSByZWFjdGpzLCBhbmd1bGFyLCBsYXJhdmVsLCBhYm91dCBiYWNrZW5kIHRvb2xzIEkndmUgdXNlZCBOb2RlSlMsIFNvY2tldC5pbywgSldULCBFeHByZXNzIGFuZCB0aGUgZGF0YWJhc2VzIGFyZSBteXNxbCwgbW9uZ29kYi4gQWxsIG9mIHNldnJlciBydW4gaW4gZG9ja2VyLmAsXG4gICAgICAgIGltYWdlVXJsOiAnLi9pbWcvdHNhLnBuZycsXG4gICAgICAgIGltYWdlQWx0OiAnQ3VzdG9tIGltYWdlJyxcbiAgICAgIH0pXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=