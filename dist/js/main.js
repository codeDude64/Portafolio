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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJmYWNlYm9vayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJnaXRodWIiLCJsaW5rZWRpbiIsInNvY2lhbE5ldHdvcmtzIiwiVVJMcyIsIm1lbnVJdGVtcyIsInRhcmdldHMiLCJza2lsbHMiLCJza2lsbHNOYW1lIiwiaWNvblNraWxsIiwiU2tpbGxUaGVtZXMiLCJhYm91dFNraWxsVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpIiwiZWxlbWVudCIsInVybCIsIndpbmRvdyIsIm9wZW4iLCJsZW5ndGgiLCJlYXNlIiwidCIsImIiLCJjIiwiZCIsInNtb290aFNjcm9sbCIsInRhcmdldElkIiwiZHVyYXRpb24iLCJ0YXJnZXQiLCJzdGFydFBvc2l0aW9uIiwicGFnZVlPZmZzZXQiLCJkaXN0YW5jZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInN0YXJ0VGltZSIsImFuaW1hdGlvbiIsImN1cnJlbnRUaW1lIiwidGltZUVsYXBzZWQiLCJydW4iLCJzY3JvbGxUbyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRvU2VjdGlvbnMiLCJtZW51SXRlbSIsImNoZWNrVW5jaGVja1JhZGlvIiwiYm9vUmFkaW8iLCJjaGVja2VkIiwic2hvd0Fib3V0U2tpbGxzIiwiYWJvdXRTa2lsbCIsInRpdGxlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpY29uIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidGV4dCIsInNraWxsIiwic3R5bGUiLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiYmFja1RvU2tpbGxzIiwiYmFja1RvU2tpbGxBcnJvdyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFD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S0FBWCxDQUFpQkUsZUFBakIsR0FBbUM3QyxrREFBVyxDQUFDRyxDQUFELENBQTlDO0FBQ0FrQyxhQUFLLENBQUNTLFNBQU4sR0FBa0JoRCxpREFBVSxDQUFDSyxDQUFELENBQTVCO0FBQ0FvQyxZQUFJLENBQUNPLFNBQUwsMEJBQWdDL0MsZ0RBQVMsQ0FBQ0ksQ0FBRCxDQUFULENBQWEsQ0FBYixDQUFoQztBQUNBb0MsWUFBSSxDQUFDUSxTQUFMLEdBQWlCaEQsZ0RBQVMsQ0FBQ0ksQ0FBRCxDQUFULENBQWEsQ0FBYixJQUFrQixrQkFBbkM7QUFDQXNDLFlBQUksQ0FBQ0ssU0FBTCxnQkFBdUI3QyxxREFBYyxDQUFDRSxDQUFELENBQXJDO0FBQ0gsT0FSRCxNQVFPO0FBQ0hpQyxrQkFBVSxDQUFDTyxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixNQUEzQjtBQUNIO0FBQ0osS0FiRDtBQVRzQjs7QUFNMUIsT0FBSyxJQUFJekMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sNkNBQU0sQ0FBQ1csTUFBM0IsRUFBbUNMLENBQUMsRUFBcEMsRUFBd0M7QUFBQSxXQUEvQkEsQ0FBK0I7QUFrQnZDO0FBQ0osQ0F6QkQ7O0FBMkJBZ0MsZUFBZTs7QUFJZixJQUFNYSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCLE1BQUlDLGdCQUFnQixHQUFHOUQsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUF2QjtBQUNBNkQsa0JBQWdCLENBQUMvQyxnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkMsWUFBTTtBQUM3Q1ksZ0JBQVksQ0FBQyxTQUFELEVBQVksSUFBWixDQUFaO0FBQ0gsR0FGRDtBQUdILENBTEQ7O0FBT0FrQyxZQUFZLEciLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi5qc1wiKTtcbiIsImNvbnN0IGZhY2Vib29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhY2Vib29rLWNpcmNsZScpO1xuY29uc3QgdHdpdHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50d2l0dGVyLWNpcmNsZScpO1xuY29uc3QgaW5zdGFncmFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc3RhZ3JhbS1jaXJjbGUnKTtcbmNvbnN0IGdpdGh1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naXRodWItY2lyY2xlJyk7XG5jb25zdCBsaW5rZWRpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rZWRpbi1jaXJjbGUnKTtcblxuZXhwb3J0IGNvbnN0IHNvY2lhbE5ldHdvcmtzID0gW2ZhY2Vib29rLCB0d2l0dGVyLCBpbnN0YWdyYW0sIGdpdGh1YiwgbGlua2VkaW5dO1xuZXhwb3J0IGNvbnN0IFVSTHMgPSBbJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9DaGF2YVRJJywgJ2h0dHBzOi8vdHdpdHRlci5jb20vQ2hhdmFUSV8nLCAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9jaGF2YXRsb3ovJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9DaGF2YVRJJywgJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zYWx2YWRvci1oZXJuw6FuZGV6LWzDs3Blei1hMmFiNzMxNWEvJ107XG5cblxuZXhwb3J0IGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9BYm91dCcpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b1NraWxscycpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b1BvcnRhZm9saW8nKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9FeHBlcmllbmNlJyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvQ29udGFjdCcpXG5dO1xuZXhwb3J0IGNvbnN0IHRhcmdldHMgPSBbJyNhYm91dCcsICcjc2tpbGxzJywgJyNwb3J0YWZvbGlvJywgJyNleHBlcmllbmNlJywgJyNjb250YWN0J107XG5cbmV4cG9ydCBjb25zdCBza2lsbHMgPSBbXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlYWN0JyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FuZ3VsYXInKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm9kZScpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwaHAnKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFyYXZlbCcpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqYXZhJyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RiJyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpbnV4JyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvY2tlcicpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaWFncmFtJyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhbmd1YWdlJyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlYXJuaW5nJylcbl07XG5cblxuZXhwb3J0IGNvbnN0IHNraWxsc05hbWUgPSBbXG4gICAgJ1JlYWN0JyxcbiAgICAnQW5ndWxhcicsXG4gICAgJ05vZGVKUycsXG4gICAgJ1BIUCcsXG4gICAgJ0xhcmF2ZWwnLFxuICAgICdKYXZhJyxcbiAgICAnRGF0YSBCYXNlcycsXG4gICAgJ0xpbnV4JyxcbiAgICAnRG9ja2VyJyxcbiAgICAnU29mdHdhcmUgZW5naW5lZXJpbmcnLFxuICAgICdMYW5ndWFnZXMnLFxuICAgICdMZWFybmluZydcbl07XG5cbmV4cG9ydCBjb25zdCBpY29uU2tpbGwgPSBbXG4gICAgWydmYWIgZmEtcmVhY3QnLCAncmVhY3QtY2FyZCddLFxuICAgIFsnZmFiIGZhLWFuZ3VsYXInLCAnYW5ndWxhci1jYXJkJ10sXG4gICAgWydmYWIgZmEtbm9kZS1qcycsICdub2RlLWNhcmQnXSxcbiAgICBbJ2ZhYiBmYS1waHAnLCAncGhwLWNhcmQnXSxcbiAgICBbJ2ZhYiBmYS1sYXJhdmVsJywgJ2xhcmF2ZWwtY2FyZCddLFxuICAgIFsnZmFiIGZhLWphdmEnLCAnamF2YS1jYXJkJ10sXG4gICAgWydmYXMgZmEtZGF0YWJhc2UnLCAnZGItY2FyZCddLFxuICAgIFsnZmFiIGZhLWxpbnV4JywgJ2xpbnV4LWNhcmQnXSxcbiAgICBbJ2ZhYiBmYS1kb2NrZXInLCAnZG9ja2VyLWNhcmQnXSxcbiAgICBbJ2ZhcyBmYS1wcm9qZWN0LWRpYWdyYW0nLCAnZGlhZ3JhbS1jYXJkJ10sXG4gICAgWydmYXMgZmEtbGFuZ3VhZ2UnLCAnbGFuZ3VhZ2UtY2FyZCddLFxuICAgIFsnZmFzIGZhLWJvb2stcmVhZGVyJywgJ2xlYXJuaW5nLWNhcmQnXVxuXTtcblxuZXhwb3J0IGNvbnN0IFNraWxsVGhlbWVzID0gW1xuICAgICcjMjgyYzM0JyxcbiAgICAnI2YwZjBmMDgwJyxcbiAgICAnIzMzMzMzMycsXG4gICAgJyM3NDc4YWUnLFxuICAgICcjZmYyZDIwJyxcbiAgICAnI2YxM2QzZCcsXG4gICAgJyMyZjU2NzYnLFxuICAgICcjZjBmMGYwODAnLFxuICAgICcjMzA5YWViJyxcbiAgICAnIzFkMmYzZicsXG4gICAgJyM4N2M1NDAnLFxuICAgICcjM2JlMWYwJ1xuXTtcblxuZXhwb3J0IGNvbnN0IGFib3V0U2tpbGxUZXh0ID0gW1xuICAgIGBSZWFjdEpzIGlzIG15IGZhdm9yaXRlIGZyb250ZW5kIGxpYnJhcnkgZGV2ZWxvcC4gSSBmdWxseSBrbm93IGhvdyB0byB1c2UgYm90aCB0aGUgcHJvcHMgYW5kIGNsYXNzIGNvbXBvbmVudHMsIHN0YXRlbGVzcyBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYW5kIGhvb2sgY29tcG9uZW50cy4gXG4gICAgSeKAmW0gYWxzbyBhIHBlcnNvbiB3aG8gbGlrZXMgZm9sbG93aW5nIGdvb2QgcHJhY3RpY2VzLiBJ4oCZbSBza2lsbGVkIGF0IHVzaW5nIFJlZHV4IGluIFJlYWN0SlMuIFdoZW4gSSB1c2UgdGhpcyB0b29sIEkgdXN1YWxseSBjb25uZWN0IHRoZSByZWFjdCBhcHAgd2l0aCB0aGUgQVBJIFJlc3QgdXNpbmcgYXhpb3MuYCxcbiAgICBgQW5ndWxhciB3YXMgdGhlIGZpcnN0IGZyb250ZW5kIGZyYW1ld29yayB0aGF0IEkga25ldy4gIEkgbWFzdGVyIHVzaW5nIHRoZSBjb21wb25lbnRzIG9mIHRoaXMgZnJhbWV3b3JrIGFuZCBJIGFsd2F5IHRyeSB0byB0YWtlIGFkdmFudGFnZSBvZiB0aGUgYW5ndWxhciBtYXRlcmlhbHMgdG8gaGF2ZSBnb29kIFVJIHJlc3VsdHMuIEFsc28sIEkgYWx3YXlzIHN0aWNrIHRvIGdvb2QgcHJhY3RpY2VzIHdoZW4gSSBjb2RlIGluIFR5cGVTY3JpcHQgYW5kIEFuZ3VsYXIuYCxcbiAgICBgTm9kZUpTIHdhcyB0aGUgZmlyc3QgYmFja2VuZCBmcmFtZXdvcmsgSeKAmXZlIGV2ZXIgd29ya2VkIHdpdGguIEF0IHRoZSBiZWdpbm5pbmcgSSB1c2VkIHRvIGRldmVsb3Agd2ViIGFwcHMgdXNpbmcgTm9kZUpTIEV4cHJlc3MgYW5kIEphZGUuIEJ1dCwgbm93YWRheXMgSeKAmXZlIHRlbmRlZCB0byBtYWtlIEFQSSByZXN0cyBpbiBvcmRlciB0byBtYWtlIE1FQU4gc3RhY2sgYXBwcyBhbmQgTUVSTiBzdGFjayBhcHBzLiBcbiAgICBUaGUgZGF0YSBiYXNlcyB0aGF0IEnigJl2ZSB1c2VkIGFyZSBNeVNRTCwgTWFyaWFCRCBhbmQgTW9uZ29vLiAgQ29uc2VxdWVudGx5LCBJ4oCZdmUgbGVhcm5lZCBob3cgdG8gY29ubmVjdCB0aGVtIHdpdGggTm9kZSBhcHBzLiBBbmQgRmluYWxseSwgdGhlIHRlY2hub2xvZ3kgdGhhdCBJIHVzZSB0byBtYWtlIGF1dGhvcml6YXRpb24gdG9rZW5zIGlzIEpXVC5gLFxuICAgIGBNeSBmaXJzdCB3ZWIgbGFuZ3VhZ2Ugd2FzIFBIUCwgSeKAmXZlIHVzZWQgdGhpcyBsYW5ndWFnZSBzaW5jZSB1bml2ZXJzaXR5LiBNeSBrbm93bGVkZ2Ugb2YgdGhpcyBmaWVsZCBnb2VzIGZyb20gIFBIUCA3IG9uIHdlYiBzZXJ2ZXIsIGNvbm5lY3RpbmcgdGhlIGFwcCB3aXRoIE15U1FMIGFuZCBTUUxTZXJ2ZXIgZGF0YWJhc2VzLCB0byBob3cgdG8gcHJpbnQgdGhlIGRhdGEgaW4gb3JkZXJgLFxuICAgIGBJJ3ZlIGNyZWF0ZWQgcHJvamVjdCB3aXRoIExhcmF2ZWwgZnJhbWV3b3JrIHVzaW5nIGl0cyB0b29scyBsaWtlIExhcmF2ZWwgY29udHJvbGxlcnMsIGJsYWRlLCBlbG9xdWVudCwgcGhwdW5pdCBmb3IgdGVzdCB0aGUgY29kZSBhbmQgYW5vdGhlcnMgY29uc29sZSB0b29scyB0byBjcmVhdGVkIHRoZSBiYXNpYyBjb2RlIGFuZCBzYXZlIHRpbWUgaW4gdGhlIGRldmVsb3BtZW50LCBJJ3ZlIHVzZWQgbWlncmF0aW9ucyB0byBta2FlIGNoYW5nZXMgaW4gbXlzcWwgZGF0YWJhc2UuYCxcbiAgICBgSmF2YSBpcyBteSBmaXJzdCBQT08gbGFuZ3VhZ2UuIEkgaGF2ZSBhIGxvdCBvZiBleHBlcmllbmNlIGNvZGluZyBpbiBKYXZhIHNpbmNlIEnigJl2ZSB3b3JrZWQgd2l0aCBpdCBmb3IgYSBsb25nIHRpbWUuIEkga25vdyAgaG93IHRvIG1ha2UgZWl0aGVyIENMSSBhcHBzLCBHVUkgYXBwcyAodXNpbmcgY29kZSBhbmQgdXNpbmcgTmV0QmVhbnMgdG9vbHMpIGFuZCB3ZWIgYXBwcy4gQW5vdGhlciB0aGluZyB0aGF0IEnigJlkIGxpa2UgdG8gcG9pbnQgb3V0IGlzIHRoYXQgSSd2ZSB1c2VkIG1hbnkgbGlicmFyaWVzIGFuZCBmcmFtZXdvcmtzIGluIGphdmEgc3VjaCB0aGF0IEpEQkMsIEpEQkksIEpQQSwgSGliZXJuYXRlLCBTcHJpbmdNVkMuYCxcbiAgICBgT25lIGVsZW1lbnQgaW5zaWRlIG15IHNraWxsIHNldCBpcyBkZXNpZ25pbmcgU1FMIGRhdGFiYXNlcy4gVGhlIGNvbW1vbiB3YXkgdGhhdCBJIGZvbGxvdyB0byBhY2hpZXZlIHRoaXMgdGFzayBpcyBJIHN0YXJ0IG1vZGVsaW5nIHVzaW5nIENBU0UgdG9vbHMgYW5kIHRoZW4gSSBpbXBsZW1lbnQgdGhlbSBpbiBNeVNRTCAsIE1hcmlhREIgb3IgU1FMU2VydmVyLiBJIGtub3cgaG93IHRvIG1hbmFnZSB0aGUgZGF0YWJhc2VzIGFuZCBhZGQgc2VjdXJpdHkuIEkgZmFjZSBhbGwgdGhlIGFib3ZlIG5vdCBvbmx5IHVzaW5nIHRvb2xzIGFzIFBocE15QWRtaW4gYW5kIE15U3FsIFdvcmtiZW5jaCBidXQgdXNpbmcgU1FMIHNjcmlwdCB0b28uICBXaXRoaW4gdGhlIE5vIFNRTCBkYXRhYmFzZXMgSeKAmXZlIGxlYXJuZWQgdG8gY3JlYXRlIE1vbmdvIGRhdGFiYXNlcy5gLFxuICAgIGBMaW51eCBzeXN0ZW1zIGFyZSB0aGUgcmVhc29uIHdoeSBJIGxvdmUgY29tcHV0ZXIgc2NpZW5jZS4gSeKAmXZlIHVzZWQgbGludXggZm9yIHRlbiB5ZWFycywgSSBrbm93IGhvdyB0byBpbnN0YWxsIGFuZCBtYW5hZ2UgdGhlIHN5c3RlbXMgbGlrZSBEZWJpYW4gc3lzdGVtcywgUmVkIGhhdCBzeXN0ZW1zIGFuZCBBcmNoIGxpbnV4IHN5c3RlbXMuIE9uIHRoZSBvdGhlciBoYW5kLCAgdGhlIExpbnV4IFNlcnZlcnMgdGhhdCBcbiAgICBJJ3ZlIHVzZWQgYXJlIFVidW50dSBTZXJ2ZXIsIERlYmlhbiwgQ2VudE9TIGFuZCBGZWRvcmEgU2VydmVyLiBJbnRvIHRoaXMgc3lzdGVtcyBJIGhhdmUga25vd2xlZGdlIG9mIGhvdyB0byBpbnN0YWxsIGFuZCBtYW5hZ2UgdGhlIEFwYWNoZSB3ZWIgc2VydmVyLCBOR0lOWCwgVG9tY2F0IHNlcnZlciwgRE5TIHNlcnZlcnMsIERIQ1Agc2VydmVycywgV2VibWluLCBkYXRhYmFzZXMgKFNlZSBtb3JlIGluIGRhdGFiYXNlcyBzZWN0aW9uKSwgYW5kIExBTVAgc2VydmVyLiBFdmVuIG1vcmUsIEkga25vdyBob3cgdG8gaW5zdGFsbCBhbmQgdXNlIG5ldHdvcmsgc2VjdXJpdHkgdG9vbHMgbGlrZSBOYWdpb3MgYW5kIG5tYXAuIE15IGFjdHVhbCBsaW51eCBzeXN0ZW0gaXMgQXJjaCBsaW51eCBidXQgSSd2ZSBvcHRlZCBmb3IgVWJ1bnR1IChLdWJ1bnR1LCBYdWJ1bnR1LCBVYnVudHUgbWF0ZSksIERlYmlhbiwgRmVkb3JhLCBNYW5qYXJvLCBMaW51eCBNaW50IGFzIHBlcnNvbmFsIHN5c3RlbXMgdG9vLiBMYXN0bHksIHdyaXRpbmcgc2hlbGwgc2NyaXB0IGNvZGUgaXMgYWxzbyBwYXJ0IG9mIG15IHNraWxsIHNldC5gLFxuICAgIGBSZWdhcmRpbmcgZG9ja2VyLCBJIGNhbiB1cGxvYWQgb25seSBmZXcgbGluZXMgb2YgY29kZSBpbnN0ZWFkIG9mIG1ha2luZyBhbiBvdmVyc2l6ZSBjb25maWd1cmF0aW9uIG9uIHRoZSBzZXJ2ZXIuIFdoZW4gSSB3b3JrIGluIHRlYW0gSSBwcmVmZXIgdG8gdXNlIGRvY2tlciBzbyB0aGUgdGVhbSBjYW4gYmUgc3VyZSB0aGF0IHRoZSBwcm9qZWN0IHdpbGwgd29yayBpbiBhbnkgY29tcHV0ZXIgbm8gbWF0dGVyIHRoZWlyIE9wZXJhdGl2ZSBTeXN0ZW0uIEkgbWFzdGVyIHVzaW5nIGRvY2tlciBpbiBjb25zb2xlIGFuZCB1c2luZyBzY3JpcHRzIGxpa2UgZG9ja2VyZmlsZXMgYW5kIGRvY2tlci1jb21wb3NlLiBJ4oCZdmUgbGF1bmNoZWQgZG9ja2VyIGNvbnRhaW5lcnMgd2l0aCBkaWZmZXJlbnQgc2VydmVycyBsaWtlIEFwYWNoZSwgTmduaXgsIGFuZCBMQU1QIChtYWlubHkgTGludXgsIE15c3FsIGFuZCBQSFApLiBUaGVyZSBpcyBhIGJ1bmNoIG9mIHByb2plY3RzIGluIHdoaWNoIEkgaGF2ZSBhcHBlYWxlZCBkb2NrZXIsIHRoZXNlIGluY2x1ZGUsIGJ1dCBhcmUgbm90IGxpbWl0ZWQgdG8gbGFyYXZlbCwgbm9kZSwgYW5kIGphdmEgcHJvamVjdHMuYCxcbiAgICBgSeKAmW0gYWJsZSB0byBtYWtlIHNvZnR3YXJlIGVuZ2luZWVyaW5nIHRoYXQgZ29lcyBmcm9tIHJlcXVpcmVtZW50cyBhbmFseXNpcyB1c2luZyBpbnRlcnZpZXdzLCBzdXJ2ZXlzLCBkb2N1bWVudGF0aW9uIGFuYWx5c2lzLCB1bnRpbCBzb2Z0d2FyZSBkZXNpZ24gdXNpbmcgZW50aXR54oCTcmVsYXRpb25zaGlwIG1vZGVscywgcmVsYXRpb25hbCBtb2RlbHMsIGRhdGFiYXNlIG5vcm1hbGl6YXRpb24sIGZsb3djaGFydHMsIHVzZSBjYXNlIGRpYWdyYW1zLCBhbmQgbW9ja3VwIGRlc2lnbnMuIEluIGFkZGl0aW9uLCBkdXJpbmcgdGhlIGRldmVsb3AgcGhhc2UsIEkgaGF2ZSBleHBlcmllbmNlIHdvcmtpbmcgd2l0aCBTQ1JVTSBhbmQgS0FOQkFOLiBGaW5hbGx5LCBJJ3ZlIGRlcGxveWVkIHByb2plY3RzIG9uIEFXUyBhbmQgZGlnaXRhbCBvY2VhbiB1c2luZyBkb2NrZXIuYCxcbiAgICBgTXkgbmF0aXZlIGxhbmd1YWdlIGlzIHNwYW5pc2ggYW5kIEkndmUgc3R1ZGllZCBlbmdsaXNoIHNpbmNlIGVsZW1lbnRhcnkgc2Nob29sIHVudGlsIG5vdy4gSSd2ZSBiZWVuIGluIGRpZmZlcmVudCBlbmdsaXNoIGNvdXJzZXMgYnV0IEkgdHJ5IHRvIHByYWN0aWNlIG15IGVuZ2xpc2ggZXZlcnlkYXkgd2l0aCBzb21lIGZyaWVuZHMuXG4gICAgSSBjb25zaWRlciB0aGF0IG15IGVuZ2xpc2ggaXMgZ29vZCBiZWNhdXNlIGFwYXJ0IGZyb20gSSd2ZSB0cmllZCB0byByZWFkIG1vcmUgZW5nbGlzaCBib29rcyB0byBpbXByb3ZlLCAgSSd2ZSBiZWVuIGFibGUgdG8gZXN0YWJsaXNoIGEgY29udmVyc2F0aW9uIGluIGVuZ2xpc2ggd2l0aCBhbWVyaWNhbiBwZW9wbGUuYCxcbiAgICBgSSBsb3ZlIGNvbXB1dGVyIHNjaWVuY2UsIHNvZnR3YXJlIGRldmVsb3BtZW50LCBwcm9ncmFtbWluZywgYW5kIG1ha2luZyBzb2x1dGlvbnMuIFRoZW4sIEkgc3R1ZHkgdGhlc2UgdG9waWNzIHdoZW5ldmVyIEkgbmVlZCBpdCBvciBJIHdhbnQgdG8gbGVhcm4gbmV3IGluZm9ybWF0aWMgc3R1ZmYuIEkgcmVzb3J0IHRvIGFsbCBraW5kIG9mIHJlc291cmNlcywgZm9yIGluc3RhbmNlIHdlYiBzaXRlcywgYmxvZ3MsIGZvcnVtcywgc29mdHdhcmUgZG9jdW1lbnRhdGlvbnMsIHR1dG9yaWFscywgd2ViIGNvdXJzZXMsIG9yIGJvb2tzLlxuICAgIEkgY29uc2lkZXIgbXlzZWxmIGEgc2VsZi10YXVnaHQgcGVyc29uLiBJZiBJIGRvbid0IGtub3cgaG93IHRvIGRvIGl0LCBJJ2xsIGxlYXJuIGl0IGFuZCB0aGVuIEnigJlsbCBkbyBpdC4gSXQgaXMgd29ydGggbWVudGlvbmluZyB0aGF0IEkgbG92ZSBzaGFyaW5nIG15IGtub3dsZWRnZSB3aXRoIHBlb3BsZSwgd2hpY2ggSSB0aGluayBpcyBhIGdyZWF0IGZlYXR1cmUgb2YgbWluZS5gXG5dIiwiLy8gU29jaWFsIG5ldHdvcmsgY29kZVxuaW1wb3J0IHsgc29jaWFsTmV0d29ya3MsIFVSTHMsIG1lbnVJdGVtcywgdGFyZ2V0cywgc2tpbGxzTmFtZSwgc2tpbGxzLCBpY29uU2tpbGwsIFNraWxsVGhlbWVzLCBhYm91dFNraWxsVGV4dCB9IGZyb20gJy4vaXRlbXMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy9cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29jaWFsTmV0d29ya3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHNvY2lhbE5ldHdvcmtzW2ldO1xuICAgICAgICBjb25zdCB1cmwgPSBVUkxzW2ldO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG4vLyBzbW9vdGhTY3JvbGwgY29kZVxuXG5jb25zdCBlYXNlID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICB0IC89IGQgLyAyO1xuICAgIGlmICh0IDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xuICAgIHQtLTtcbiAgICByZXR1cm4gLWMgLyAyICogKHQgKiAodCAtIDIpIC0gMSkgKyBiO1xufVxuXG5jb25zdCBzbW9vdGhTY3JvbGwgPSAodGFyZ2V0SWQsIGR1cmF0aW9uKSA9PiB7XG4gICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0SWQpO1xuICAgIGxldCBzdGFydFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIGxldCBkaXN0YW5jZSA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7IC8vIEVzIGxhIGRpc3RhbmNpYSBkZSBsYSBlc3F1aW5hIHN1cGVyaW9yIGRlIGxhIHZlbnRhbmEgYWwgdGFyZ2V0XG4gICAgbGV0IHN0YXJ0VGltZSA9IG51bGw7XG5cblxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGN1cnJlbnRUaW1lID0+IHtcbiAgICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkgc3RhcnRUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgIGxldCB0aW1lRWxhcHNlZCA9IGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lO1xuXG5cbiAgICAgICAgbGV0IHJ1biA9IGVhc2UodGltZUVsYXBzZWQsIHN0YXJ0UG9zaXRpb24sIGRpc3RhbmNlLCBkdXJhdGlvbik7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBydW4pO1xuICAgICAgICBpZiAodGltZUVsYXBzZWQgPCBkdXJhdGlvbikgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG59XG5cbi8vIHRvIFNlY3Rpb25zXG5cbmNvbnN0IHRvU2VjdGlvbnMgPSAoKSA9PiB7XG4gICAgLy9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IG1lbnVJdGVtc1tpXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0c1tpXTtcblxuICAgICAgICBtZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNtb290aFNjcm9sbCh0YXJnZXQsIDIwMDApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbnRvU2VjdGlvbnMoKTtcblxuLy9UT0RPOiBBYm91dC1Ta2lsbHNcblxuXG4vLyBjaGVjayBhbmQgdW5jaGVjayByYWRpbyBidXR0b24gaGlkZSBpbiB0aGUgc2tpbGxzIGljb25zXG5jb25zdCBjaGVja1VuY2hlY2tSYWRpbyA9ICgpID0+IHtcbiAgICBsZXQgYm9vUmFkaW87XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2lsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHNraWxsc1tpXTtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoYm9vUmFkaW8gPT0gZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJvb1JhZGlvID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm9vUmFkaW8gPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jaGVja1VuY2hlY2tSYWRpbygpO1xuXG5cbmNvbnN0IHNob3dBYm91dFNraWxscyA9ICgpID0+IHtcbiAgICBjb25zdCBhYm91dFNraWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0LXNraWxsJyk7XG4gICAgY29uc3QgdGl0bGUgPSBhYm91dFNraWxsLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGNvbnN0IGljb24gPSB0aXRsZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3QgdGV4dCA9IGljb24ubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2lsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc2tpbGwgPSBza2lsbHNbaV07XG5cbiAgICAgICAgc2tpbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChza2lsbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgYWJvdXRTa2lsbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBzbW9vdGhTY3JvbGwoJyNhYm91dC1za2lsbCcsIDIwMDApO1xuICAgICAgICAgICAgICAgIGFib3V0U2tpbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gU2tpbGxUaGVtZXNbaV07XG4gICAgICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gc2tpbGxzTmFtZVtpXTtcbiAgICAgICAgICAgICAgICBpY29uLmlubmVySFRNTCA9IGA8aSBjbGFzcyA9IFwiJHtpY29uU2tpbGxbaV1bMF19XCI+PC9pPmA7XG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSBpY29uU2tpbGxbaV1bMV0gKyBcIiBjYXJkLWFib3V0LWljb25cIjtcbiAgICAgICAgICAgICAgICB0ZXh0LmlubmVySFRNTCA9IGA8cD4ke2Fib3V0U2tpbGxUZXh0W2ldfTwvcD5gXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFib3V0U2tpbGwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG59XG5cbnNob3dBYm91dFNraWxscygpO1xuXG5cblxuY29uc3QgYmFja1RvU2tpbGxzID0gKCkgPT4ge1xuICAgIGxldCBiYWNrVG9Ta2lsbEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhY2stdG8tc2tpbGxzJyk7XG4gICAgYmFja1RvU2tpbGxBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc21vb3RoU2Nyb2xsKCcjc2tpbGxzJywgMjAwMClcbiAgICB9KTtcbn1cblxuYmFja1RvU2tpbGxzKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9