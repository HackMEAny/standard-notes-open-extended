!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}((function(e){"use strict";e.defineMode("apl",(function(){var e={".":"innerProduct","\\":"scan","/":"reduce","⌿":"reduce1Axis","⍀":"scan1Axis","¨":"each","⍣":"power"},n={"+":["conjugate","add"],"−":["negate","subtract"],"×":["signOf","multiply"],"÷":["reciprocal","divide"],"⌈":["ceiling","greaterOf"],"⌊":["floor","lesserOf"],"∣":["absolute","residue"],"⍳":["indexGenerate","indexOf"],"?":["roll","deal"],"⋆":["exponentiate","toThePowerOf"],"⍟":["naturalLog","logToTheBase"],"○":["piTimes","circularFuncs"],"!":["factorial","binomial"],"⌹":["matrixInverse","matrixDivide"],"<":[null,"lessThan"],"≤":[null,"lessThanOrEqual"],"=":[null,"equals"],">":[null,"greaterThan"],"≥":[null,"greaterThanOrEqual"],"≠":[null,"notEqual"],"≡":["depth","match"],"≢":[null,"notMatch"],"∈":["enlist","membership"],"⍷":[null,"find"],"∪":["unique","union"],"∩":[null,"intersection"],"∼":["not","without"],"∨":[null,"or"],"∧":[null,"and"],"⍱":[null,"nor"],"⍲":[null,"nand"],"⍴":["shapeOf","reshape"],",":["ravel","catenate"],"⍪":[null,"firstAxisCatenate"],"⌽":["reverse","rotate"],"⊖":["axis1Reverse","axis1Rotate"],"⍉":["transpose",null],"↑":["first","take"],"↓":[null,"drop"],"⊂":["enclose","partitionWithAxis"],"⊃":["diclose","pick"],"⌷":[null,"index"],"⍋":["gradeUp",null],"⍒":["gradeDown",null],"⊤":["encode",null],"⊥":["decode",null],"⍕":["format","formatByExample"],"⍎":["execute",null],"⊣":["stop","left"],"⊢":["pass","right"]},t=/[\.\/⌿⍀¨⍣]/,l=/⍬/,r=/[\+−×÷⌈⌊∣⍳\?⋆⍟○!⌹<≤=>≥≠≡≢∈⍷∪∩∼∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⌷⍋⍒⊤⊥⍕⍎⊣⊢]/,a=/←/,i=/[⍝#].*$/;return{startState:function(){return{prev:!1,func:!1,op:!1,string:!1,escape:!1}},token:function(o,u){var s,c,p,d;return o.eatSpace()?null:'"'===(s=o.next())||"'"===s?(o.eatWhile((p=s,d=!1,function(e){return d=e,e!==p||"\\"===d})),o.next(),u.prev=!0,"string"):/[\[{\(]/.test(s)?(u.prev=!1,null):/[\]}\)]/.test(s)?(u.prev=!0,null):l.test(s)?(u.prev=!1,"niladic"):/[¯\d]/.test(s)?(u.func?(u.func=!1,u.prev=!1):u.prev=!0,o.eatWhile(/[\w\.]/),"number"):t.test(s)?"operator apl-"+e[s]:a.test(s)?"apl-arrow":r.test(s)?(c="apl-",null!=n[s]&&(u.prev?c+=n[s][1]:c+=n[s][0]),u.func=!0,u.prev=!1,"function "+c):i.test(s)?(o.skipToEnd(),"comment"):"∘"===s&&"."===o.peek()?(o.next(),"function jot-dot"):(o.eatWhile(/[\w\$_]/),u.prev=!0,"keyword")}}})),e.defineMIME("text/apl","apl")}));