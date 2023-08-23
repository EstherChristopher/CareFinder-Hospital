<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div class="image-container">
    <img
      alt="A nurse assessing a male patient"
      src="./assets/Hospital.png"
      class="class-img"
    />
  </div>
  <HelloWorld msg="CareFinder" />
  <body>
    <p>find hospitals from <span>anywhere.</span></p>
    <p class="first-p">
      We connect people to the nearest hospital for an appointment...
    </p>
    <p class="second-p">
      Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!
    </p>
    <input type="text" placeholder="Search by city or hospital name... " />
    <div class="main-div">
      <div id="parent-container">
        <p class="sixth-p">
          Welcome to CareFinder.<br>  CareFinder is a platform where users<br> can search
          for hospitals in their areas, <br>export hospital details for your
          records,<br> and enhance your healthcare experience <br>by connecting with
          others and sharing valuable resources.
        </p>
        <button class="btn-1">See more about us</button>
      </div>
      <div id="parent-container1">
        <p class="fifth-p">OUR MISSION IS SIMPLE</p>
        <p class="seventh-p">
          Ensure everyone gets access to quality health facilities, regardless of their location, with the covenience of a click.  
        </p>
      </div>

      <div id="services-container">
        <p class="services"> See Our Services </p>
      </div>
      <p class="third-p">Secure your future by securing your health</p>
      <p class="fourth-p">WHO WE ARE</p>
      <div class="image-container1">
        <img
          alt="A nurse assessing a male patient"
          src="./assets/image1.jpeg"
          class="class-img1"
        />
        <img
          alt="A nurse assessing a male patient"
          src="./assets/image2.jpeg"
          class="class-img2"
        />
        <img
          alt="A nurse assessing a male patient"
          src="./assets/image3.jpeg"
          class="class-img3"
        />
      </div>
      <!-- Bring quality health facilities to the fingertips of our users -->
    </div>
    <div>
      <img
      alt="A device showig hospital confirmation booking"
      src="./assets/clinicBooking.jpeg"
      class="clinicBooking"
      />
    </div>
    <nav>
      <ul>
        <li><router-link to="/loginpage">Home</router-link></li>
        <li>
          <router-link class="active" to="/findhospital"
            >Find Hospital</router-link
          >
        </li>
        <li><router-link to="/loginpage">About</router-link></li>
        <li>
          <router-link class="getStarted" to="/">Get Started</router-link>
        </li>
        <li><router-link to="/aboutpage">Log In</router-link></li>
        <li><span class="span-li">CareFinder</span></li>
        <!-- <li><router-link class="navbarpage" to="/navbar">Navbar</router-link></li> -->
      </ul>
    </nav>
  </body>

  <!-- <NavBar /> -->
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.image-container {
  width: 100%;
  height: 620px;
  overflow: hidden;
}

.class-img {
  width: 100%;
  height: 700px;
  /* border: 1px solid #000; */
  margin-top: 68px;
  background: radial-gradient(
    ellipse at center,
    #662b2b 10%,
    #2f822f 50%,
    #0000ff 90%
  );
}

body {
  background-color: aliceblue;
  margin: 0;
  padding: 0;
}

ul {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  list-style-type: none;
  margin-left: auto;
  padding-top: 15px;
  padding-bottom: 15px;
  margin: 0%;
  /* overflow: hidden; */
  background-color: white;
}

nav ul li span {
  color: rgb(55, 78, 128);
  position: absolute;
  top: 5px;
  right: 384px;
  font-size: 30px;
  font-weight: bolder;
}

.span-li {
  /* position: absolute; */
  left: -1310px;
  top: 0;
}

p {
  position: relative;
  top: -410px;
  right: 45px;
  color: white;
  font-weight: bolder;
  font-size: 50px;
}

input {
  position: relative;
  top: -465px;
  width: 380px;
  padding: 10px 10px;
  border-radius: 5px;
  border-color: transparent;
  outline: none;
  cursor: pointer;
}

/* input {

} */

p span {
  text-decoration: underline;
  text-decoration-color: rgb(107, 107, 233);
}

p span::after {
  color: aqua;
}
/* li .getStarted {
  position: absolute;
  top: 5px;
  right: 190px;
} */

/* .main-div {
position: absolute;
} */

.first-p,
.second-p {
  font-size: 29px;
  font-weight: lighter;
  font-family: serif;
  /* font-style: italic; */
}
.first-p {
  position: relative;
  top: -450px;
}

.second-p {
  position: relative;
  top: -470px;
}
li {
  float: right;
  position: relative;
  top: 3px;
  left: 10px;
  margin: 0 1px;
  /* margin: 3px; */
  font-size: 19px;
  font-weight: bold;
}

li a {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: rgb(20, 34, 66);
  padding: 14px 30px;
  /* border: 4px;
  border-color: black; */
}

li:nth-last-child(3) {
  border-right: 1px solid #bbb;
  margin-right: 15px;
}

/* li:nth-last-child(3) a:hover::after {
  content: none;
} */

li a:hover:not(.active) {
  background-color: transparent;
}

/* .active {
  background-color: #6fa4da;
} */

li a:hover::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 70%; /* Adjust the width to reduce the length of the border-bottom */
  height: 1px;
  background-color: #000;
  border-bottom: 1px #000;
  padding-bottom: none;
  margin-left: none;
}
.third-p {
  font-size: 29px;
  position: relative;
  top: -350px;
  color: rgb(16, 31, 66);
  margin-bottom: 6px;
}

.third-p::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 50%; /* Adjust the width to reduce the length of the border-bottom */
  height: 1px;
  background-color: #d2d8d4;
  border-bottom: #B2BEB5; /* Use 'solid' instead of 'none' to display the border */
  margin-bottom: -5px;
}

#parent-container {
  position: absolute;
  text-align: left;
/* background-color: #2c3e50; */
}

.sixth-p {

  margin-left: 65vw;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 19px;
  color: rgb(16, 31, 66);
  top: -237px;
}

.fourth-p {
  position: relative;
  top: -30vw;
  left: 22vw;
  /* text-align: right; */
  font-size: 15px;
  color: rgb(55, 78, 128);
}
.image-container1 {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: -50px;
  position: absolute;
  top: 780px;
  width: 100%;
  height: calc(100% - 400px);
}
.image-container1 .class-img1,
.image-container1 .class-img3 {
  flex: 1 0 100px; 
  max-width: 17%;
  height: auto;
  border-radius: 12px;
  /* margin-top: 10px;
  padding: 10px 30px; */
  /* object-fit: cover; */
}
.image-container1 .class-img2 {
  flex: 1 0 200px; 
  max-width: 15%;
  height: auto;
  border-radius: 18px;
  margin: 15px;
  /* object-fit: cover; */
}


.btn-1 {
  background-color: rgb(55, 78, 128);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  outline: none;
  cursor: pointer;
  position: absolute;
  top: -4vw;
  right: 23vw;
}

.btn-1:hover {
  background-color: rgb(113, 145, 213);
}

.fifth-p {
  position: absolute;
  right: 80%;
  /* transform: translateX(-50%); */
  top: 22px;
  font-size: 15px;
  color: rgb(55, 78, 128);
}

#parent-container1 {
  position: absolute;
  text-align: left;
  background-color: rgb(242, 238, 245);
  width: 100%;
  margin-top: 13px;
  /* margin-bottom: 13px; */
  height: 80%;
}


.seventh-p {
  position: absolute;
  right: 50%;
  margin-left: 20px;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  top: 53px;
  font-size: 23px;
  color: rgb(16, 31, 66);
}

#services-container {
  position: absolute;
  text-align: right;
  background-color: white;
  width: 100%;
  margin-top: 290px;
  height: 50%;
}

.services {
  position: relative;
  top: 150px;
  margin-left: 26px;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 26px;
  color: rgb(16, 31, 66);
}

/* background-color: white; */
</style>
