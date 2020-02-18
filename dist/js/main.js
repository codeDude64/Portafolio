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
var skills = [document.querySelector('#react'), document.querySelector('#angular'), document.querySelector('#node'), document.querySelector('#php'), document.querySelector('#java'), document.querySelector('#db'), document.querySelector('#linux'), document.querySelector('#docker'), document.querySelector('#diagram'), document.querySelector('#language'), document.querySelector('#learning')];
var skillsName = ['React', 'Angular', 'NodeJS', 'PHP', 'Java', 'Data Bases', 'Linux', 'Docker', 'Software engineering', 'Languages', 'Learning'];
var iconSkill = [['fab fa-react', 'react-card'], ['fab fa-angular', 'angular-card'], ['fab fa-node-js', 'node-card'], ['fab fa-php', 'php-card'], ['fab fa-java', 'java-card'], ['fas fa-database', 'db-card'], ['fab fa-linux', 'linux-card'], ['fab fa-docker', 'docker-card'], ['fas fa-project-diagram', 'diagram-card'], ['fas fa-language', 'language-card'], ['fas fa-book-reader', 'learning-card']];
var SkillThemes = ['#282c3444', '#f0f0f080', '#333333', '#7478ae', '#f13d3d', '#2f5676', '#f0f0f080', '#309aeb', '#1d2f3f', '#87c540', '#3be1f0'];
var aboutSkillText = ["ReactJs is my favorite frontend library develop. I fully know how to use both the props and class components, stateless functional components and hook components. \n    I\u2019m also a person who likes following good practices. I\u2019m skilled at using Redux in ReactJS. When I use this tool I usually connect the react app with the API Rest using axios.", "Angular was the first frontend framework that I knew.  I master using the components of this framework and I alway try to take advantage of the angular materials to have good UI results. Also, I always stick to good practices when I code in TypeScript and Angular.", "NodeJS was the first backend framework I\u2019ve ever worked with. At the beginning I used to develop web apps using NodeJS Express and Jade. But, nowadays I\u2019ve tended to make API rests in order to make MEAN stack apps and MERN stack apps. \n    The data bases that I\u2019ve used are MySQL, MariaBD and Mongoo.  Consequently, I\u2019ve learned how to connect them with Node apps. And Finally, the technology that I use to make authorization tokens is JWT.", "My first web language was PHP, I\u2019ve used this language since university. My knowledge of this field goes from  PHP 7 on web server, connecting the app with MySQL and SQLServer databases, to how to print the data in order", "Java is my first POO language. I have a lot of experience coding in Java since I\u2019ve worked with it for a long time. I know  how to make either CLI apps, GUI apps (using code and using NetBeans tools) and web apps. Another thing that I\u2019d like to point out is that I've used many libraries and frameworks in java such that JDBC, JDBI, JPA, Hibernate, SpringMVC.", "One element inside my skill set is designing SQL databases. The common way that I follow to achieve this task is I start modeling using CASE tools and then I implement them in MySQL , MariaDB or SQLServer. I know how to manage the databases and add security. I face all the above not only using tools as PhpMyAdmin and MySql Workbench but using SQL script too.  Within the No SQL databases I\u2019ve learned to create Mongo databases.", "Linux systems are the reason why I love computer science. I\u2019ve used linux for ten years, I know how to install and manage the systems like Debian systems, Red hat systems and Arch linux systems. On the other hand,  the Linux Servers that \n    I've used are Ubuntu Server, Debian, CentOS and Fedora Server. Into this systems I have knowledge of how to install and manage the Apache web server, NGINX, Tomcat server, DNS servers, DHCP servers, Webmin, databases (See more in databases section), and LAMP server. Even more, I know how to install and use network security tools like Nagios and nmap. My actual linux system is Arch linux but I've opted for Ubuntu (Kubuntu, Xubuntu, Ubuntu mate), Debian, Fedora, Manjaro, Linux Mint as personal systems too. Lastly, writing shell script code is also part of my skill set.", "Regarding docker, I can upload only few lines of code instead of making an oversize configuration on the server. When I work in team I prefer to use docker so the team can be sure that the project will work in any computer no matter their Operative System. I master using docker in console and using scripts like dockerfiles and docker-compose. I\u2019ve launched docker containers with different servers like Apache, Ngnix, and LAMP (mainly Linux, Mysql and PHP). There is a bunch of projects in which I have appealed docker, these include, but are not limited to laravel, node, and java projects.", "I\u2019m able to make software engineering that goes from requirements analysis using interviews, surveys, documentation analysis, until software design using entity\u2013relationship models, relational models, database normalization, flowcharts, use case diagrams, and mockup designs. In addition, during the develop phase, I have experience working with SCRUM and KANBAN. Finally, I've deployed projects on AWS and digital ocean using docker.", "My native language is spanish and I've studied english since elementary school until now. I've been in different english courses but I try to practice my english everyday with some friends.\n    I consider that my english is good because apart from I've tried to read more english books to improve,  I've been able to establish a conversation in english with american people.", "I love computer science, software development, programming, and making solutions. Then, I study these topics whenever I need it or I want to learn new informatic stuff. I resort to all kind of resources, for instance web sites, blogs, forums, software documentations, tutorials, web courses, or books.\n    I consider myself a self-taught person. If I don't know how to do it, I'll learn it and then I\u2019ll do it. It is worth mentioning that I love sharing my knowledge with people, which I think is a great feature of mine."];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJmYWNlYm9vayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJnaXRodWIiLCJsaW5rZWRpbiIsInNvY2lhbE5ldHdvcmtzIiwiVVJMcyIsIm1lbnVJdGVtcyIsInRhcmdldHMiLCJza2lsbHMiLCJza2lsbHNOYW1lIiwiaWNvblNraWxsIiwiU2tpbGxUaGVtZXMiLCJhYm91dFNraWxsVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpIiwiZWxlbWVudCIsInVybCIsIndpbmRvdyIsIm9wZW4iLCJsZW5ndGgiLCJlYXNlIiwidCIsImIiLCJjIiwiZCIsInNtb290aFNjcm9sbCIsInRhcmdldElkIiwiZHVyYXRpb24iLCJ0YXJnZXQiLCJzdGFydFBvc2l0aW9uIiwicGFnZVlPZmZzZXQiLCJkaXN0YW5jZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInN0YXJ0VGltZSIsImFuaW1hdGlvbiIsImN1cnJlbnRUaW1lIiwidGltZUVsYXBzZWQiLCJydW4iLCJzY3JvbGxUbyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRvU2VjdGlvbnMiLCJtZW51SXRlbSIsImNoZWNrVW5jaGVja1JhZGlvIiwiYm9vUmFkaW8iLCJjaGVja2VkIiwic2hvd0Fib3V0U2tpbGxzIiwiYWJvdXRTa2lsbCIsInRpdGxlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpY29uIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidGV4dCIsInNraWxsIiwic3R5bGUiLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiYmFja1RvU2tpbGxzIiwiYmFja1RvU2tpbGxBcnJvdyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFD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QjtBQUNBb0MsWUFBSSxDQUFDTyxTQUFMLDBCQUFnQy9DLGdEQUFTLENBQUNJLENBQUQsQ0FBVCxDQUFhLENBQWIsQ0FBaEM7QUFDQW9DLFlBQUksQ0FBQ1EsU0FBTCxHQUFpQmhELGdEQUFTLENBQUNJLENBQUQsQ0FBVCxDQUFhLENBQWIsSUFBa0Isa0JBQW5DO0FBQ0FzQyxZQUFJLENBQUNLLFNBQUwsZ0JBQXVCN0MscURBQWMsQ0FBQ0UsQ0FBRCxDQUFyQztBQUNILE9BUkQsTUFRTztBQUNIaUMsa0JBQVUsQ0FBQ08sS0FBWCxDQUFpQkMsT0FBakIsR0FBMkIsTUFBM0I7QUFDSDtBQUNKLEtBYkQ7QUFUc0I7O0FBTTFCLE9BQUssSUFBSXpDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdOLDZDQUFNLENBQUNXLE1BQTNCLEVBQW1DTCxDQUFDLEVBQXBDLEVBQXdDO0FBQUEsV0FBL0JBLENBQStCO0FBa0J2QztBQUNKLENBekJEOztBQTJCQWdDLGVBQWU7O0FBSWYsSUFBTWEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixNQUFJQyxnQkFBZ0IsR0FBRzlELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBdkI7QUFDQTZELGtCQUFnQixDQUFDL0MsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLFlBQU07QUFDN0NZLGdCQUFZLENBQUMsU0FBRCxFQUFZLElBQVosQ0FBWjtBQUNILEdBRkQ7QUFHSCxDQUxEOztBQU9Ba0MsWUFBWSxHIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL21haW4uanNcIik7XG4iLCJjb25zdCBmYWNlYm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWNlYm9vay1jaXJjbGUnKTtcbmNvbnN0IHR3aXR0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHdpdHRlci1jaXJjbGUnKTtcbmNvbnN0IGluc3RhZ3JhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnN0YWdyYW0tY2lyY2xlJyk7XG5jb25zdCBnaXRodWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2l0aHViLWNpcmNsZScpO1xuY29uc3QgbGlua2VkaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua2VkaW4tY2lyY2xlJyk7XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxOZXR3b3JrcyA9IFtmYWNlYm9vaywgdHdpdHRlciwgaW5zdGFncmFtLCBnaXRodWIsIGxpbmtlZGluXTtcbmV4cG9ydCBjb25zdCBVUkxzID0gWydodHRwczovL3d3dy5mYWNlYm9vay5jb20vQ2hhdmFUSScsICdodHRwczovL3R3aXR0ZXIuY29tL0NoYXZhVElfJywgJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vY2hhdmF0bG96LycsICdodHRwczovL2dpdGh1Yi5jb20vQ2hhdmFUSScsICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2FsdmFkb3ItaGVybsOhbmRlei1sw7NwZXotYTJhYjczMTVhLyddO1xuXG5cbmV4cG9ydCBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvQWJvdXQnKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9Ta2lsbHMnKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9Qb3J0YWZvbGlvJyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvRXhwZXJpZW5jZScpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b0NvbnRhY3QnKVxuXTtcbmV4cG9ydCBjb25zdCB0YXJnZXRzID0gWycjYWJvdXQnLCAnI3NraWxscycsICcjcG9ydGFmb2xpbycsICcjZXhwZXJpZW5jZScsICcjY29udGFjdCddO1xuXG5leHBvcnQgY29uc3Qgc2tpbGxzID0gW1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWFjdCcpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbmd1bGFyJyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vZGUnKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGhwJyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2phdmEnKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGInKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGludXgnKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9ja2VyJyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWdyYW0nKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFuZ3VhZ2UnKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVhcm5pbmcnKVxuXTtcblxuXG5leHBvcnQgY29uc3Qgc2tpbGxzTmFtZSA9IFtcbiAgICAnUmVhY3QnLFxuICAgICdBbmd1bGFyJyxcbiAgICAnTm9kZUpTJyxcbiAgICAnUEhQJyxcbiAgICAnSmF2YScsXG4gICAgJ0RhdGEgQmFzZXMnLFxuICAgICdMaW51eCcsXG4gICAgJ0RvY2tlcicsXG4gICAgJ1NvZnR3YXJlIGVuZ2luZWVyaW5nJyxcbiAgICAnTGFuZ3VhZ2VzJyxcbiAgICAnTGVhcm5pbmcnXG5dO1xuXG5leHBvcnQgY29uc3QgaWNvblNraWxsID0gW1xuICAgIFsnZmFiIGZhLXJlYWN0JywgJ3JlYWN0LWNhcmQnXSxcbiAgICBbJ2ZhYiBmYS1hbmd1bGFyJywgJ2FuZ3VsYXItY2FyZCddLFxuICAgIFsnZmFiIGZhLW5vZGUtanMnLCAnbm9kZS1jYXJkJ10sXG4gICAgWydmYWIgZmEtcGhwJywgJ3BocC1jYXJkJ10sXG4gICAgWydmYWIgZmEtamF2YScsICdqYXZhLWNhcmQnXSxcbiAgICBbJ2ZhcyBmYS1kYXRhYmFzZScsICdkYi1jYXJkJ10sXG4gICAgWydmYWIgZmEtbGludXgnLCAnbGludXgtY2FyZCddLFxuICAgIFsnZmFiIGZhLWRvY2tlcicsICdkb2NrZXItY2FyZCddLFxuICAgIFsnZmFzIGZhLXByb2plY3QtZGlhZ3JhbScsICdkaWFncmFtLWNhcmQnXSxcbiAgICBbJ2ZhcyBmYS1sYW5ndWFnZScsICdsYW5ndWFnZS1jYXJkJ10sXG4gICAgWydmYXMgZmEtYm9vay1yZWFkZXInLCAnbGVhcm5pbmctY2FyZCddXG5dO1xuXG5leHBvcnQgY29uc3QgU2tpbGxUaGVtZXMgPSBbXG4gICAgJyMyODJjMzQ0NCcsXG4gICAgJyNmMGYwZjA4MCcsXG4gICAgJyMzMzMzMzMnLFxuICAgICcjNzQ3OGFlJyxcbiAgICAnI2YxM2QzZCcsXG4gICAgJyMyZjU2NzYnLFxuICAgICcjZjBmMGYwODAnLFxuICAgICcjMzA5YWViJyxcbiAgICAnIzFkMmYzZicsXG4gICAgJyM4N2M1NDAnLFxuICAgICcjM2JlMWYwJ1xuXTtcblxuZXhwb3J0IGNvbnN0IGFib3V0U2tpbGxUZXh0ID0gW1xuICAgIGBSZWFjdEpzIGlzIG15IGZhdm9yaXRlIGZyb250ZW5kIGxpYnJhcnkgZGV2ZWxvcC4gSSBmdWxseSBrbm93IGhvdyB0byB1c2UgYm90aCB0aGUgcHJvcHMgYW5kIGNsYXNzIGNvbXBvbmVudHMsIHN0YXRlbGVzcyBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYW5kIGhvb2sgY29tcG9uZW50cy4gXG4gICAgSeKAmW0gYWxzbyBhIHBlcnNvbiB3aG8gbGlrZXMgZm9sbG93aW5nIGdvb2QgcHJhY3RpY2VzLiBJ4oCZbSBza2lsbGVkIGF0IHVzaW5nIFJlZHV4IGluIFJlYWN0SlMuIFdoZW4gSSB1c2UgdGhpcyB0b29sIEkgdXN1YWxseSBjb25uZWN0IHRoZSByZWFjdCBhcHAgd2l0aCB0aGUgQVBJIFJlc3QgdXNpbmcgYXhpb3MuYCxcbiAgICBgQW5ndWxhciB3YXMgdGhlIGZpcnN0IGZyb250ZW5kIGZyYW1ld29yayB0aGF0IEkga25ldy4gIEkgbWFzdGVyIHVzaW5nIHRoZSBjb21wb25lbnRzIG9mIHRoaXMgZnJhbWV3b3JrIGFuZCBJIGFsd2F5IHRyeSB0byB0YWtlIGFkdmFudGFnZSBvZiB0aGUgYW5ndWxhciBtYXRlcmlhbHMgdG8gaGF2ZSBnb29kIFVJIHJlc3VsdHMuIEFsc28sIEkgYWx3YXlzIHN0aWNrIHRvIGdvb2QgcHJhY3RpY2VzIHdoZW4gSSBjb2RlIGluIFR5cGVTY3JpcHQgYW5kIEFuZ3VsYXIuYCxcbiAgICBgTm9kZUpTIHdhcyB0aGUgZmlyc3QgYmFja2VuZCBmcmFtZXdvcmsgSeKAmXZlIGV2ZXIgd29ya2VkIHdpdGguIEF0IHRoZSBiZWdpbm5pbmcgSSB1c2VkIHRvIGRldmVsb3Agd2ViIGFwcHMgdXNpbmcgTm9kZUpTIEV4cHJlc3MgYW5kIEphZGUuIEJ1dCwgbm93YWRheXMgSeKAmXZlIHRlbmRlZCB0byBtYWtlIEFQSSByZXN0cyBpbiBvcmRlciB0byBtYWtlIE1FQU4gc3RhY2sgYXBwcyBhbmQgTUVSTiBzdGFjayBhcHBzLiBcbiAgICBUaGUgZGF0YSBiYXNlcyB0aGF0IEnigJl2ZSB1c2VkIGFyZSBNeVNRTCwgTWFyaWFCRCBhbmQgTW9uZ29vLiAgQ29uc2VxdWVudGx5LCBJ4oCZdmUgbGVhcm5lZCBob3cgdG8gY29ubmVjdCB0aGVtIHdpdGggTm9kZSBhcHBzLiBBbmQgRmluYWxseSwgdGhlIHRlY2hub2xvZ3kgdGhhdCBJIHVzZSB0byBtYWtlIGF1dGhvcml6YXRpb24gdG9rZW5zIGlzIEpXVC5gLFxuICAgIGBNeSBmaXJzdCB3ZWIgbGFuZ3VhZ2Ugd2FzIFBIUCwgSeKAmXZlIHVzZWQgdGhpcyBsYW5ndWFnZSBzaW5jZSB1bml2ZXJzaXR5LiBNeSBrbm93bGVkZ2Ugb2YgdGhpcyBmaWVsZCBnb2VzIGZyb20gIFBIUCA3IG9uIHdlYiBzZXJ2ZXIsIGNvbm5lY3RpbmcgdGhlIGFwcCB3aXRoIE15U1FMIGFuZCBTUUxTZXJ2ZXIgZGF0YWJhc2VzLCB0byBob3cgdG8gcHJpbnQgdGhlIGRhdGEgaW4gb3JkZXJgLFxuICAgIGBKYXZhIGlzIG15IGZpcnN0IFBPTyBsYW5ndWFnZS4gSSBoYXZlIGEgbG90IG9mIGV4cGVyaWVuY2UgY29kaW5nIGluIEphdmEgc2luY2UgSeKAmXZlIHdvcmtlZCB3aXRoIGl0IGZvciBhIGxvbmcgdGltZS4gSSBrbm93ICBob3cgdG8gbWFrZSBlaXRoZXIgQ0xJIGFwcHMsIEdVSSBhcHBzICh1c2luZyBjb2RlIGFuZCB1c2luZyBOZXRCZWFucyB0b29scykgYW5kIHdlYiBhcHBzLiBBbm90aGVyIHRoaW5nIHRoYXQgSeKAmWQgbGlrZSB0byBwb2ludCBvdXQgaXMgdGhhdCBJJ3ZlIHVzZWQgbWFueSBsaWJyYXJpZXMgYW5kIGZyYW1ld29ya3MgaW4gamF2YSBzdWNoIHRoYXQgSkRCQywgSkRCSSwgSlBBLCBIaWJlcm5hdGUsIFNwcmluZ01WQy5gLFxuICAgIGBPbmUgZWxlbWVudCBpbnNpZGUgbXkgc2tpbGwgc2V0IGlzIGRlc2lnbmluZyBTUUwgZGF0YWJhc2VzLiBUaGUgY29tbW9uIHdheSB0aGF0IEkgZm9sbG93IHRvIGFjaGlldmUgdGhpcyB0YXNrIGlzIEkgc3RhcnQgbW9kZWxpbmcgdXNpbmcgQ0FTRSB0b29scyBhbmQgdGhlbiBJIGltcGxlbWVudCB0aGVtIGluIE15U1FMICwgTWFyaWFEQiBvciBTUUxTZXJ2ZXIuIEkga25vdyBob3cgdG8gbWFuYWdlIHRoZSBkYXRhYmFzZXMgYW5kIGFkZCBzZWN1cml0eS4gSSBmYWNlIGFsbCB0aGUgYWJvdmUgbm90IG9ubHkgdXNpbmcgdG9vbHMgYXMgUGhwTXlBZG1pbiBhbmQgTXlTcWwgV29ya2JlbmNoIGJ1dCB1c2luZyBTUUwgc2NyaXB0IHRvby4gIFdpdGhpbiB0aGUgTm8gU1FMIGRhdGFiYXNlcyBJ4oCZdmUgbGVhcm5lZCB0byBjcmVhdGUgTW9uZ28gZGF0YWJhc2VzLmAsXG4gICAgYExpbnV4IHN5c3RlbXMgYXJlIHRoZSByZWFzb24gd2h5IEkgbG92ZSBjb21wdXRlciBzY2llbmNlLiBJ4oCZdmUgdXNlZCBsaW51eCBmb3IgdGVuIHllYXJzLCBJIGtub3cgaG93IHRvIGluc3RhbGwgYW5kIG1hbmFnZSB0aGUgc3lzdGVtcyBsaWtlIERlYmlhbiBzeXN0ZW1zLCBSZWQgaGF0IHN5c3RlbXMgYW5kIEFyY2ggbGludXggc3lzdGVtcy4gT24gdGhlIG90aGVyIGhhbmQsICB0aGUgTGludXggU2VydmVycyB0aGF0IFxuICAgIEkndmUgdXNlZCBhcmUgVWJ1bnR1IFNlcnZlciwgRGViaWFuLCBDZW50T1MgYW5kIEZlZG9yYSBTZXJ2ZXIuIEludG8gdGhpcyBzeXN0ZW1zIEkgaGF2ZSBrbm93bGVkZ2Ugb2YgaG93IHRvIGluc3RhbGwgYW5kIG1hbmFnZSB0aGUgQXBhY2hlIHdlYiBzZXJ2ZXIsIE5HSU5YLCBUb21jYXQgc2VydmVyLCBETlMgc2VydmVycywgREhDUCBzZXJ2ZXJzLCBXZWJtaW4sIGRhdGFiYXNlcyAoU2VlIG1vcmUgaW4gZGF0YWJhc2VzIHNlY3Rpb24pLCBhbmQgTEFNUCBzZXJ2ZXIuIEV2ZW4gbW9yZSwgSSBrbm93IGhvdyB0byBpbnN0YWxsIGFuZCB1c2UgbmV0d29yayBzZWN1cml0eSB0b29scyBsaWtlIE5hZ2lvcyBhbmQgbm1hcC4gTXkgYWN0dWFsIGxpbnV4IHN5c3RlbSBpcyBBcmNoIGxpbnV4IGJ1dCBJJ3ZlIG9wdGVkIGZvciBVYnVudHUgKEt1YnVudHUsIFh1YnVudHUsIFVidW50dSBtYXRlKSwgRGViaWFuLCBGZWRvcmEsIE1hbmphcm8sIExpbnV4IE1pbnQgYXMgcGVyc29uYWwgc3lzdGVtcyB0b28uIExhc3RseSwgd3JpdGluZyBzaGVsbCBzY3JpcHQgY29kZSBpcyBhbHNvIHBhcnQgb2YgbXkgc2tpbGwgc2V0LmAsXG4gICAgYFJlZ2FyZGluZyBkb2NrZXIsIEkgY2FuIHVwbG9hZCBvbmx5IGZldyBsaW5lcyBvZiBjb2RlIGluc3RlYWQgb2YgbWFraW5nIGFuIG92ZXJzaXplIGNvbmZpZ3VyYXRpb24gb24gdGhlIHNlcnZlci4gV2hlbiBJIHdvcmsgaW4gdGVhbSBJIHByZWZlciB0byB1c2UgZG9ja2VyIHNvIHRoZSB0ZWFtIGNhbiBiZSBzdXJlIHRoYXQgdGhlIHByb2plY3Qgd2lsbCB3b3JrIGluIGFueSBjb21wdXRlciBubyBtYXR0ZXIgdGhlaXIgT3BlcmF0aXZlIFN5c3RlbS4gSSBtYXN0ZXIgdXNpbmcgZG9ja2VyIGluIGNvbnNvbGUgYW5kIHVzaW5nIHNjcmlwdHMgbGlrZSBkb2NrZXJmaWxlcyBhbmQgZG9ja2VyLWNvbXBvc2UuIEnigJl2ZSBsYXVuY2hlZCBkb2NrZXIgY29udGFpbmVycyB3aXRoIGRpZmZlcmVudCBzZXJ2ZXJzIGxpa2UgQXBhY2hlLCBOZ25peCwgYW5kIExBTVAgKG1haW5seSBMaW51eCwgTXlzcWwgYW5kIFBIUCkuIFRoZXJlIGlzIGEgYnVuY2ggb2YgcHJvamVjdHMgaW4gd2hpY2ggSSBoYXZlIGFwcGVhbGVkIGRvY2tlciwgdGhlc2UgaW5jbHVkZSwgYnV0IGFyZSBub3QgbGltaXRlZCB0byBsYXJhdmVsLCBub2RlLCBhbmQgamF2YSBwcm9qZWN0cy5gLFxuICAgIGBJ4oCZbSBhYmxlIHRvIG1ha2Ugc29mdHdhcmUgZW5naW5lZXJpbmcgdGhhdCBnb2VzIGZyb20gcmVxdWlyZW1lbnRzIGFuYWx5c2lzIHVzaW5nIGludGVydmlld3MsIHN1cnZleXMsIGRvY3VtZW50YXRpb24gYW5hbHlzaXMsIHVudGlsIHNvZnR3YXJlIGRlc2lnbiB1c2luZyBlbnRpdHnigJNyZWxhdGlvbnNoaXAgbW9kZWxzLCByZWxhdGlvbmFsIG1vZGVscywgZGF0YWJhc2Ugbm9ybWFsaXphdGlvbiwgZmxvd2NoYXJ0cywgdXNlIGNhc2UgZGlhZ3JhbXMsIGFuZCBtb2NrdXAgZGVzaWducy4gSW4gYWRkaXRpb24sIGR1cmluZyB0aGUgZGV2ZWxvcCBwaGFzZSwgSSBoYXZlIGV4cGVyaWVuY2Ugd29ya2luZyB3aXRoIFNDUlVNIGFuZCBLQU5CQU4uIEZpbmFsbHksIEkndmUgZGVwbG95ZWQgcHJvamVjdHMgb24gQVdTIGFuZCBkaWdpdGFsIG9jZWFuIHVzaW5nIGRvY2tlci5gLFxuICAgIGBNeSBuYXRpdmUgbGFuZ3VhZ2UgaXMgc3BhbmlzaCBhbmQgSSd2ZSBzdHVkaWVkIGVuZ2xpc2ggc2luY2UgZWxlbWVudGFyeSBzY2hvb2wgdW50aWwgbm93LiBJJ3ZlIGJlZW4gaW4gZGlmZmVyZW50IGVuZ2xpc2ggY291cnNlcyBidXQgSSB0cnkgdG8gcHJhY3RpY2UgbXkgZW5nbGlzaCBldmVyeWRheSB3aXRoIHNvbWUgZnJpZW5kcy5cbiAgICBJIGNvbnNpZGVyIHRoYXQgbXkgZW5nbGlzaCBpcyBnb29kIGJlY2F1c2UgYXBhcnQgZnJvbSBJJ3ZlIHRyaWVkIHRvIHJlYWQgbW9yZSBlbmdsaXNoIGJvb2tzIHRvIGltcHJvdmUsICBJJ3ZlIGJlZW4gYWJsZSB0byBlc3RhYmxpc2ggYSBjb252ZXJzYXRpb24gaW4gZW5nbGlzaCB3aXRoIGFtZXJpY2FuIHBlb3BsZS5gLFxuICAgIGBJIGxvdmUgY29tcHV0ZXIgc2NpZW5jZSwgc29mdHdhcmUgZGV2ZWxvcG1lbnQsIHByb2dyYW1taW5nLCBhbmQgbWFraW5nIHNvbHV0aW9ucy4gVGhlbiwgSSBzdHVkeSB0aGVzZSB0b3BpY3Mgd2hlbmV2ZXIgSSBuZWVkIGl0IG9yIEkgd2FudCB0byBsZWFybiBuZXcgaW5mb3JtYXRpYyBzdHVmZi4gSSByZXNvcnQgdG8gYWxsIGtpbmQgb2YgcmVzb3VyY2VzLCBmb3IgaW5zdGFuY2Ugd2ViIHNpdGVzLCBibG9ncywgZm9ydW1zLCBzb2Z0d2FyZSBkb2N1bWVudGF0aW9ucywgdHV0b3JpYWxzLCB3ZWIgY291cnNlcywgb3IgYm9va3MuXG4gICAgSSBjb25zaWRlciBteXNlbGYgYSBzZWxmLXRhdWdodCBwZXJzb24uIElmIEkgZG9uJ3Qga25vdyBob3cgdG8gZG8gaXQsIEknbGwgbGVhcm4gaXQgYW5kIHRoZW4gSeKAmWxsIGRvIGl0LiBJdCBpcyB3b3J0aCBtZW50aW9uaW5nIHRoYXQgSSBsb3ZlIHNoYXJpbmcgbXkga25vd2xlZGdlIHdpdGggcGVvcGxlLCB3aGljaCBJIHRoaW5rIGlzIGEgZ3JlYXQgZmVhdHVyZSBvZiBtaW5lLmBcbl0iLCIvLyBTb2NpYWwgbmV0d29yayBjb2RlXG5pbXBvcnQgeyBzb2NpYWxOZXR3b3JrcywgVVJMcywgbWVudUl0ZW1zLCB0YXJnZXRzLCBza2lsbHNOYW1lLCBza2lsbHMsIGljb25Ta2lsbCwgU2tpbGxUaGVtZXMsIGFib3V0U2tpbGxUZXh0IH0gZnJvbSAnLi9pdGVtcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvL1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb2NpYWxOZXR3b3Jrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gc29jaWFsTmV0d29ya3NbaV07XG4gICAgICAgIGNvbnN0IHVybCA9IFVSTHNbaV07XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbi8vIHNtb290aFNjcm9sbCBjb2RlXG5cbmNvbnN0IGVhc2UgPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIHQgLz0gZCAvIDI7XG4gICAgaWYgKHQgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XG4gICAgdC0tO1xuICAgIHJldHVybiAtYyAvIDIgKiAodCAqICh0IC0gMikgLSAxKSArIGI7XG59XG5cbmNvbnN0IHNtb290aFNjcm9sbCA9ICh0YXJnZXRJZCwgZHVyYXRpb24pID0+IHtcbiAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRJZCk7XG4gICAgbGV0IHN0YXJ0UG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgbGV0IGRpc3RhbmNlID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDsgLy8gRXMgbGEgZGlzdGFuY2lhIGRlIGxhIGVzcXVpbmEgc3VwZXJpb3IgZGUgbGEgdmVudGFuYSBhbCB0YXJnZXRcbiAgICBsZXQgc3RhcnRUaW1lID0gbnVsbDtcblxuXG4gICAgY29uc3QgYW5pbWF0aW9uID0gY3VycmVudFRpbWUgPT4ge1xuICAgICAgICBpZiAoc3RhcnRUaW1lID09PSBudWxsKSBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgbGV0IHRpbWVFbGFwc2VkID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG5cblxuICAgICAgICBsZXQgcnVuID0gZWFzZSh0aW1lRWxhcHNlZCwgc3RhcnRQb3NpdGlvbiwgZGlzdGFuY2UsIGR1cmF0aW9uKTtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHJ1bik7XG4gICAgICAgIGlmICh0aW1lRWxhcHNlZCA8IGR1cmF0aW9uKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbn1cblxuLy8gdG8gU2VjdGlvbnNcblxuY29uc3QgdG9TZWN0aW9ucyA9ICgpID0+IHtcbiAgICAvL1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gbWVudUl0ZW1zW2ldO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB0YXJnZXRzW2ldO1xuXG4gICAgICAgIG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc21vb3RoU2Nyb2xsKHRhcmdldCwgMjAwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxudG9TZWN0aW9ucygpO1xuXG4vL1RPRE86IEFib3V0LVNraWxsc1xuXG5cbi8vIGNoZWNrIGFuZCB1bmNoZWNrIHJhZGlvIGJ1dHRvbiBoaWRlIGluIHRoZSBza2lsbHMgaWNvbnNcbmNvbnN0IGNoZWNrVW5jaGVja1JhZGlvID0gKCkgPT4ge1xuICAgIGxldCBib29SYWRpbztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNraWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gc2tpbGxzW2ldO1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChib29SYWRpbyA9PSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYm9vUmFkaW8gPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib29SYWRpbyA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNoZWNrVW5jaGVja1JhZGlvKCk7XG5cblxuY29uc3Qgc2hvd0Fib3V0U2tpbGxzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFib3V0U2tpbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQtc2tpbGwnKTtcbiAgICBjb25zdCB0aXRsZSA9IGFib3V0U2tpbGwuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgY29uc3QgaWNvbiA9IHRpdGxlLm5leHRFbGVtZW50U2libGluZztcbiAgICBjb25zdCB0ZXh0ID0gaWNvbi5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNraWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBza2lsbCA9IHNraWxsc1tpXTtcblxuICAgICAgICBza2lsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAgICAgaWYgKHNraWxsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBhYm91dFNraWxsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIHNtb290aFNjcm9sbCgnI2Fib3V0LXNraWxsJywgMjAwMCk7XG4gICAgICAgICAgICAgICAgYWJvdXRTa2lsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBTa2lsbFRoZW1lc1tpXTtcbiAgICAgICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBza2lsbHNOYW1lW2ldO1xuICAgICAgICAgICAgICAgIGljb24uaW5uZXJIVE1MID0gYDxpIGNsYXNzID0gXCIke2ljb25Ta2lsbFtpXVswXX1cIj48L2k+YDtcbiAgICAgICAgICAgICAgICBpY29uLmNsYXNzTmFtZSA9IGljb25Ta2lsbFtpXVsxXSArIFwiIGNhcmQtYWJvdXQtaWNvblwiO1xuICAgICAgICAgICAgICAgIHRleHQuaW5uZXJIVE1MID0gYDxwPiR7YWJvdXRTa2lsbFRleHRbaV19PC9wPmBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWJvdXRTa2lsbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cbn1cblxuc2hvd0Fib3V0U2tpbGxzKCk7XG5cblxuXG5jb25zdCBiYWNrVG9Ta2lsbHMgPSAoKSA9PiB7XG4gICAgbGV0IGJhY2tUb1NraWxsQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFjay10by1za2lsbHMnKTtcbiAgICBiYWNrVG9Ta2lsbEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzbW9vdGhTY3JvbGwoJyNza2lsbHMnLCAyMDAwKVxuICAgIH0pO1xufVxuXG5iYWNrVG9Ta2lsbHMoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=