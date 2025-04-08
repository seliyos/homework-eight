
var homePage = `
  <div class="hero">
    <div class="hero-pic"></div>
    <div class="hero-text">
      <h1>Welcome to Tasty Bites</h1>
      <p>Your favorite place for delicious food.</p>
    </div>
  </div>
`;

var menuPage = `
  <div class="menu">
    <div class="title">
      <h2>Our Menu</h2>
    </div>
    <div class="courses">
      <div class="starter">
        <h3>Starter</h3>
        <div class="food-pic">
          <img src="images/starter.jpeg" alt="Starter" />
        </div>
      </div>
      <div class="main-course">
        <h3>Main-Course</h3>
        <div class="food-pic">
          <img src="images/main.jpeg" alt="Main" />
        </div>
      </div>
      <div class="dessert">
        <h3>Dessert</h3>
        <div class="food-pic">
          <img src="images/dessert.jpeg" alt="Dessert" />
        </div>
      </div>
    </div>
  </div>
`;

var aboutPage = `
  <div class="about">
    <div class="text">
      <h2>Our Story</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores sunt ipsam in? 
        Tempora nemo, dolorum unde, quia laudantium nobis minima nostrum debitis quod expedita illo qui!
        Voluptates itaque architecto laudantium sint esse facere cum odio doloremque voluptatem amet deleniti 
        dicta, perspiciatis aut, aliquam odit optio maiores. Adipisci aliquam earum quis perspiciatis laudantium 
        nemo provident dolor sed quibusdam. Consequatur magnam reiciendis odio officiis ipsam fugit quia quasi 
        nesciunt velit. Laborum.
      </p>
    </div>
    <div class="image"></div>
  </div>
`;

var contactPage = `
  <div class="contact">
    <div class="address">
      <h2>Contact US:</h2>
      <p>Tasty Bites</p>
      <p>890 | Marmora Road,</p>
      <p>Glasgow, D04 89GR.</p>
      <p>Telephone:+ | 317 603 6647</p>
      <p>E-mail: tastybites101@gmail.com</p>
    </div>
    <div class="image-holder"></div>
  </div>
`;


function loadPageContent(pageName) {
  let pageContent = pageName + "Page";
  $("#app").html(eval(pageContent));
}


function initApp() {
  loadPageContent("home"); // default

  $("nav a").on("click", function (e) {
    e.preventDefault(); 
    let btnID = e.currentTarget.id;
    loadPageContent(btnID);

   
    $("nav a").removeClass("active");
    $(this).addClass("active");
  });
}


$(document).ready(function () {
  initApp();
});
