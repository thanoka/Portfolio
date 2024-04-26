const HTML = document.querySelector('.HTML');
const CSS = document.querySelector('.CSS');
const JS = document.querySelector('.JS');
const React = document.querySelector('.REACT');
const Node = document.querySelector('.NODE');
const Arduino = document.querySelector('.Arduino');
const Python = document.querySelector('.PYTHON');
const SQL = document.querySelector('.SQL');
const pointer = document.querySelector('.pointer');

HTML.addEventListener('mouseenter', function() {
    pointer.classList.add('hovered-HTML');
});
HTML.addEventListener('mouseleave', function() {
    pointer.classList.remove('hovered-HTML');
});

CSS.addEventListener('mouseenter', function() {
    pointer.classList.add('hovered-CSS');
});
CSS.addEventListener('mouseleave', function() {
    pointer.classList.remove('hovered-CSS');
});

JS.addEventListener('mouseenter', function() {
    pointer.classList.add('hovered-JS');
});
JS.addEventListener('mouseleave', function() {
    pointer.classList.remove('hovered-JS');
});

React.addEventListener('mouseenter', function() {
    pointer.classList.add('hovered-React');
});
React.addEventListener('mouseleave', function() {
    pointer.classList.remove('hovered-React');
});

Node.addEventListener('mouseenter', function() {
    pointer.classList.add('hovered-Node');
});
Node.addEventListener('mouseleave', function() {
    pointer.classList.remove('hovered-Node');
});

Arduino.addEventListener('mouseenter', function() {
    pointer.classList.add('hovered-Arduino');
});
Arduino.addEventListener('mouseleave', function() {
    pointer.classList.remove('hovered-Arduino');
});

Python.addEventListener('mouseenter', function() {
    pointer.classList.add('hovered-Python');
});
Python.addEventListener('mouseleave', function() {
    pointer.classList.remove('hovered-Python');
});

SQL.addEventListener('mouseenter', function() {
    pointer.classList.add('hovered-SQL');
});
SQL.addEventListener('mouseleave', function() {
    pointer.classList.remove('hovered-SQL');
});
