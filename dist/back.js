"use strict";
var back;
(function (back) {
    class Calculator {
        Calculator(str) {
            var s = str.split(/[-\*\+\/]/);
            var op = '';
            var res = 0;
            if (str.includes('+'))
                op = '+';
            if (str.includes('-'))
                op = '-';
            if (str.includes('*'))
                op = '*';
            if (str.includes('/'))
                op = '/';
            switch (op) {
                case '+':
                    res = parseFloat(s[0]) + parseFloat(s[1]);
                    break;
                case '-':
                    res = parseFloat(s[0]) - parseFloat(s[1]);
                    break;
                case '*':
                    res = parseFloat(s[0]) * parseFloat(s[1]);
                    break;
                case '/':
                    res = parseFloat(s[0]) / parseFloat(s[1]);
                    break;
            }
            return res.toString();
        }
    }
    back.Calculator = Calculator;
})(back || (back = {}));
