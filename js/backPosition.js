!function(r){if(!document.defaultView||!document.defaultView.getComputedStyle){var e=r.curCSS;r.curCSS=function(t,o,n){if("background-position"===o&&(o="backgroundPosition"),"backgroundPosition"!==o||!t.currentStyle||t.currentStyle[o])return e.apply(this,arguments);var i=t.style;return!n&&i&&i[o]?i[o]:e(t,"backgroundPositionX",n)+" "+e(t,"backgroundPositionY",n)}}var o=r.fn.animate;function a(t){var o=(t=(t=(t=t.replace(/left|top/g,"0px")).replace(/right|bottom/g,"100%")).replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2")).match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);return[parseFloat(o[1],10),o[2],parseFloat(o[3],10),o[4]]}r.fn.animate=function(t){return"background-position"in t&&(t.backgroundPosition=t["background-position"],delete t["background-position"]),"backgroundPosition"in t&&(t.backgroundPosition="("+t.backgroundPosition),o.apply(this,arguments)},r.fx.step.backgroundPosition=function(t){if(!t.bgPosReady){var o=r.curCSS(t.elem,"backgroundPosition");o||(o="0px 0px"),o=a(o),t.start=[o[0],o[2]];var n=a(t.end);t.end=[n[0],n[2]],t.unit=[n[1],n[3]],t.bgPosReady=!0}var i=[];i[0]=(t.end[0]-t.start[0])*t.pos+t.start[0]+t.unit[0],i[1]=(t.end[1]-t.start[1])*t.pos+t.start[1]+t.unit[1],t.elem.style.backgroundPosition=i[0]+" "+i[1]}}(jQuery);