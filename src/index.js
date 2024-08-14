import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';

const content=(
  <div>
    <Header/>
    <Content/>
    <Footer/>
  </div>
)
ReactDOM.render(content,document.getElementById('root'));


// class demo{
//   methodone(){
//     var a=10;
//     var b=20;
//     var c=a+b;
//     document.getElementById('root').innerHTML=c;
//   }

//   methodsecond(){
//     var d=150;
//     var e=100;
//     var f=d+e;
//     document.getElementById('root').innerHTML=f;
//   }
// }
// var demoone=new demo();
// demoone.methodone();
// demoone.methodsecond();



// //Arrow Function:
// var a=()=>{
//   var b=10;
//   var c=20;
//   var d=b+c;
//   document.getElementById('root').innerHTML=d;
// };
// a();


// //using if condition inside variable
// var a=()=>{
//   var n=3;
//   if(n==3)
//     document.getElementById('root').innerHTML=n;
// };
// a();



//Multiple functions with some content
// function Header(){
//   return(
//     <div>
//       <h2>This is Nisha</h2>
//       <h3>Welcome to my website</h3>
//     </div>
//   )
// }

// function Footer(){
//   return(
//     <div>
//       <h1>Hello my dear friends</h1>
//       <h3>Welcome</h3>
//     </div>
//   )
// }

// function Newwebsite(){
//   return(
//     <div>
//       <h1>Hello my dear friends and welcome to Hindusthan</h1>
//       <h3>Welcome to my city tour</h3>
//     </div>
//   )
// }

// function Mydemowebsite(){
//   return(
//     <div>
//       <Header/>
//       <Footer/>
//       <Newwebsite/>
//     </div>
//   )
// }

// ReactDOM.render(<Mydemowebsite/>,document.getElementById('root'));



// //Single class
// class Mywebsite extends React.Component{
//   render(){
//     return <h1 style={{color:"red",backgroundColor:"blue"}}>This is Nisha</h1>
//   }
// }
// ReactDOM.render(<Mywebsite/>,document.getElementById('root'));



// //Multiple class
// class Mywebsite extends React.Component{
//   render(){
//     return <h1>Full stack</h1>
//   }
// }

// class Hello extends React.Component{
//   render(){
//     return <h2>HTML</h2>
//   }
// }

// class Helloworld extends React.Component{
//   render(){
//     return <h3>CSS</h3>
//   }
// }

// class Whole extends React.Component{
//   render(){
//     return(
//       <div>
//       <Mywebsite/>
//       <Hello/>
//       <Helloworld/>
//     </div>
//     )
//   }
// }
// ReactDOM.render(<Whole/>,document.getElementById('root'));


// const content=(
//   <div>
//     <h1 className='main'>Full Stack Development</h1>
//     <h2 className='head'>React js</h2>
//     <App/>
//   </div>
// );

// ReactDOM.render(content,document.getElementById("root"));

