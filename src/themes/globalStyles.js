import { createGlobalStyle } from "styled-components";
import bg from "../assets/footer.svg";

const GlobalStyle = createGlobalStyle`
:root{
}
/* Box sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}
/* Reset margins */
body,
h1,
h2,
h3,
h4,
h5,
p,
figure,
picture {
  margin: 0;
}
html{
  min-height: 100vh;
}
/* set up the body */
body {
  line-height: 1.5;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  /* background: #2c3e50; */
  /* background: -webkit-linear-gradient(to right, #5b86e5, #36d1dc);
  background: linear-gradient(to right, #bdc3c7, #2c3e50); */
}
/* make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}
/* make form elements easier to work with */
input,
button,
textarea,
select {
  font: inherit;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
ol, ul {
	list-style: none;
}

ol, ul li a {
	text-decoration: none;
}
a {
	text-decoration: none;
}
/* remove animations for people who've turned them off */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/* ------------------- */
/* Utility classes     */
/* ------------------- */

.color-primary {
    color:#0038ff
}

.bold{
font-weight: 700;
font-size: 22px;
line-height: 33px;
}
.bold-medium{
  font-weight: 700;
font-size: 1rem;
line-height: 24px;
}

.medium-font{
  font-size: 1.3rem;
}

.connect-btn {
    padding: 17px 30px 17px 24px;
    background: #0038ff;
    border-radius: 32px;
    color: #fff;
    max-width: 381px;
    height: 72px;
    font-style: normal;
    font-size: 35px;
    font-weight: 700;
    line-height: 72px;
  }

  .secondary-btn {
    padding: 10px 15px;
    background: #0038ff;
   
    color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    /* max-width: 218.51px; */
  }

  .selected-btn {
    background: #3f4e85;
  }

  .disabled-btn {
    background: #5b5d60;
    color: #979292;
  }

  .submit-btn {
    height: 56px;
    background-color: #222222;
    border: 1px solid #5e5bff;
    /* max-width: 478px; */
    color: #fff;
  }

  .logo{
    display: flex;
    gap: 0.4rem;
    height: 38px;
    
    line-height: 38px;
    height: 100%;

    .logo-img{
        width: 25.38px;
        height: 22.38px;
        font-weight: 700;
    }
    .logo-name{
        font-size: 25px;
        font-weight: 700;
        color: #0038ff;
    }
  }
  .center {
 display: flex;
 justify-content: center;
 align-items: center;
 min-height: 70vh;
  }

/* LEONARD TO REFACTOR */
/* create new blog form */
.create {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.create input, .create textarea, .create select {
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
}
.create button {
  background: #D9D9D9;
  color: #000000;
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}
.title {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #0038FF;
  }

.description {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
    
  color: #000000;
    }
`;

export default GlobalStyle;
