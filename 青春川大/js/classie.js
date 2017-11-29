/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );




var buttons7Click = Array.prototype.slice.call( document.querySelectorAll( '#btn-click button' ) ),
    buttons9Click = Array.prototype.slice.call( document.querySelectorAll( 'button.btn-8g' ) ),
    totalButtons7Click = buttons7Click.length,
    totalButtons9Click = buttons9Click.length;

buttons7Click.forEach( function( el, i ) { el.addEventListener( 'click', activate, false ); } );
buttons9Click.forEach( function( el, i ) { el.addEventListener( 'click', activate, false ); } );

function activate() {
  var self = this, activatedClass = 'btn-activated';

  if( classie.has( this, 'btn-7h' ) ) {
    // if it is the first of the two btn-7h then activatedClass = 'btn-error';
    // if it is the second then activatedClass = 'btn-success'
    activatedClass = buttons7Click.indexOf( this ) === totalButtons7Click-2 ? 'btn-error' : 'btn-success';
  }
  else if( classie.has( this, 'btn-8g' ) ) {
    // if it is the first of the two btn-8g then activatedClass = 'btn-success3d';
    // if it is the second then activatedClass = 'btn-error3d'
    activatedClass = buttons9Click.indexOf( this ) === totalButtons9Click-2 ? 'btn-success3d' : 'btn-error3d';
  }

  if( !classie.has( this, activatedClass ) ) {
    classie.add( this, activatedClass );
    setTimeout( function() { classie.remove( self, activatedClass ) }, 1000 );
  }
}

//document.querySelector( '.btn-7i' ).addEventListener( 'click', function() {
//  classie.add( document.querySelector( '#trash-effect' ), 'trash-effect-active' );
//}, false );
