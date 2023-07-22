<template>
    <div class="intro">
      <h1>Welcome To GymMatch!</h1><br><br>
      <p>Want to find a gym buddy to work out with?<br>Sign up now!!</p>
      <div class="btns">
        <a type="button" href="/#/login"><span></span>Login</a>
        <a type="button" href="/#/register"><span></span>Register</a>
      </div>
    </div>

  </template>

  <script>
  </script>
  <style>
    .intro {
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        color: #000;
    }
    .intro h1 {
        font-size: 50px;
        margin-top: 80px;
    }
    .intro p {
        /* margin: 20px auto; */
        font-weight: 100;
        font-size: 20px;
        line-height: 25px;
    }
    .btns a {
        width: 200px;
        padding: 15px 0;
        text-align: center;
        margin: 20px 10px;
        border-radius: 25px;
        font-weight: bold;
        border: 2px solid #009688;
        background-color: transparent;
        color: #000;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .btns span {
        background: #009688;
        height: 100%;
        width: 0;
        border-radius: 25px;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: -1;
        transition: 0.5s;
    }
    .btns a:hover span {
        width: 100%;
    }
    .btns a:hover {
        border: none;
    }
  </style>
