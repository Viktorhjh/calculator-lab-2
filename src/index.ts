///<reference path = 'back.ts'/>
const input = <HTMLInputElement>document.getElementById('res')

function addNumber(n:string): void {
    input.value += n;
}

function clearAll(): void {
    input.value = "";
}

function result(): void {
    var b:back.IntCal = new back.Calculator()        
    input.value = b.Calculator(input.value).toString()
}