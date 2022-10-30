module back{

    export class Calculator implements IntCal{
        Calculator(str: string): string | number {                        
            var s:string[] = str.split(/[-\*\+\/]/);             
            var op:string = '';
            var res:number = 0;
    
            if(str.includes('+'))
                op = '+';
    
            if(str.includes('-'))
                op = '-';
                
            if(str.includes('*'))
                op = '*';
    
            if(str.includes('/'))
                op = '/';
    
            switch(op){
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

    export interface IntCal{
        Calculator(str:string):number | string;
    }
}