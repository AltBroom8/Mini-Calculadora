import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mini-Calculadora';
  primera = true;
  string1 = "";
  string2 = "";
  stringMostrada = ""
  operador="";
  activaPunto = false;
  pulsa(event:Event){
    console.log('hola');
    const target = event.target as HTMLElement;
    const id = target.id;
    console.log('id: ' + id);
    
    switch(id){
      case "seven":
        if(this.primera){
        this.string1+='7';
        this.stringMostrada = this.string1;
        }else{
          this.string2+='7';
          this.stringMostrada = this.string2;
        }
        break;
      case "eight":
        if(this.primera){
        this.string1+='8';
        this.stringMostrada = this.string1;
        }else{
          this.string2+='8';
          this.stringMostrada = this.string2;
        }
        break;
      case "nine":
        if(this.primera){
        this.string1+='9';
        this.stringMostrada = this.string1;
        }else{
          this.string2+='9';
          this.stringMostrada = this.string2;
        }
        break;
      case "four":
        if(this.primera){
        this.string1+='4';
        this.stringMostrada = this.string1;
        }else{
          this.string2+='4';
          this.stringMostrada = this.string2;
        }
        break;
      case "five":
        if(this.primera){
        this.string1+='5';
        this.stringMostrada = this.string1;
        }else{
          this.string2+='5';
          this.stringMostrada = this.string2;
        }
        break;
      case "six":
        if(this.primera){
        this.string1+='6';
        this.stringMostrada = this.string1;
        }else{
          this.string2+='6';
          this.stringMostrada = this.string2;
        }
        break;
      case "one":
        if(this.primera){
        this.string1+='1';
        this.stringMostrada = this.string1;
        }else{
          this.string2+='1';
          this.stringMostrada = this.string2;
        }
        break;
      case "two":
        if(this.primera){
        this.string1+='2';
        this.stringMostrada = this.string1;
        }else{
          this.string2+='2';
          this.stringMostrada = this.string2;
        }
        break;
      case "three":
        if(this.primera){
        this.string1+='3';
        this.stringMostrada = this.string1;
        }else{
          this.string2+='3';
          this.stringMostrada = this.string2;
        }
        break;
      case "zero":
        if(this.primera){
        this.string1+='0';
        this.stringMostrada = this.string1;
        }else{
          this.string2+='0';
          this.stringMostrada = this.string2;
        }
        break;
      case "add":
        this.primera = false;
        this.string1=this.stringMostrada;
        this.string2="";
        this.stringMostrada = this.string2;
        this.operador = "add";
        this.activaPunto  = false;
        console.log('String 1: '+this.string1);
        console.log('String 2: '+this.string2);
        break;
      case "minus":
        this.primera = false;
        this.string1=this.stringMostrada;
        this.string2="";
        this.stringMostrada = this.string2;
        this.operador = "minus";
        this.activaPunto  = false;
        console.log('String 1: '+this.string1);
        console.log('String 2: '+this.string2);
        break;
      case "multiply":
        this.primera = false;
        this.string1=this.stringMostrada;
        this.string2="";
        this.stringMostrada = this.string2;
        this.operador = "multiply";
        this.activaPunto  = false;
        console.log('String 1: '+this.string1);
        console.log('String 2: '+this.string2);
        break;
      case "divide":
        this.primera = false;
        this.string1=this.stringMostrada;
        this.string2="";
        this.stringMostrada = this.string2;
        this.operador = "divide";
        this.activaPunto  = false;
        console.log('String 1: '+this.string1);
        console.log('String 2: '+this.string2);
        break;
      case "point":
        if(!this.activaPunto){
          this.activaPunto  = true;
          if(this.primera){
            if(this.string1.length===0){
              this.string1 = "0."
              this.stringMostrada = this.string1;
            }else{
              this.string1 += "."
              this.stringMostrada = this.string1;
            }
          }else{
            if(this.string2.length===0){
              this.string2 = "0."
              this.stringMostrada = this.string2;
            }else{
              this.string2 += "."
              this.stringMostrada = this.string2;
            }
          }
        }
        break;
      case "clear":
        this.string1 = "";
        this.string2 = "";
        this.stringMostrada = this.string1;
        this.primera = true;
        this.activaPunto = false;
        break;
      case "equals":
        if (this.string1.charAt(this.string1.length - 1) ==='.'){
          this.string1 = this.string1.slice(0, -1);
        }

        if (this.string2.charAt(this.string2.length - 1) ==='.'){
          this.string2 = this.string2.slice(0, -1);
        }
        
        if(this.string1===""){
          this.stringMostrada='0';
          break;
        }else if(this.string2===""){
          this.stringMostrada=this.string1;
          this.primera = false;
          break;
        }
        var num1 = parseFloat(this.string1);
        var num2 = parseFloat(this.string2);

        switch(this.operador){
          case "add":
            var result = num1 + num2;
            this.string1 = result.toString();
            this.string2 = "";
            this.stringMostrada = this.string1;
          break;
          case "minus":
            var result = num1 - num2;
            this.string1 = result.toString();
            this.string2 = "";
            this.stringMostrada = this.string1;
          break; 
          case "multiply":
            var result = num1 * num2;
            this.string1 = result.toString();
            this.string2 = "";
            this.stringMostrada = this.string1;
          break;  
          case "divide":
            if(num2===0){
              this.string1 ="";
              this.string2 = "";
              this.stringMostrada="Divided by Zero";
              this.primera = true;
              break;
            }
            var result = num1 / num2;
            this.string1 = result.toString();
            this.string2 = "";
            this.stringMostrada = this.string1;
            break;
        }

    }
  }
    



  constructor() { 
  }

  ngOnInit() {
  }
  
}
