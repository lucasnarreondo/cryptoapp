import React from 'react'






function Navbar() {

    


    return (
      <div>
  
  <header>
<nav id='cssmenu'>
<div class="logo"><a href="index.html">Responsive </a></div>
<div id="head-mobile"></div>
<div class="button"></div>
<ul>
<li class='active'><a href='#'>HOME</a></li>
<li><a href='#'>ABOUT</a></li>
<li><a href='#'>PRODUCTS</a>
   <ul>
      <li><a href='#'>Product 1</a>
         <ul>
            <li><a href='#'>Sub Product</a></li>
            <li><a href='#'>Sub Product</a></li>
         </ul>
      </li>
      <li><a href='#'>Product 2</a>
         <ul>
            <li><a href='#'>Sub Product</a></li>
            <li><a href='#'>Sub Product</a></li>
         </ul>
      </li>
   </ul>
</li>
<li><a href='#'>BIO</a></li>
<li><a href='#'>VIDEO</a></li>
<li><a href='#'>GALLERY</a></li>
<li><a href='#'>CONTACT</a></li>
</ul>
</nav>
</header>
<section style='padding-top:20px;font:bold  44px arial;color:#68D800;'>
 Responsive CSS3 Menu <br />Dropdown + Submenus <br />
  Width Toggle Animation
</section>


      </div>
       
    )
}

export default Navbar


