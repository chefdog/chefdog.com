import type { NextPage } from 'next'
import Script from 'next/script';
import Head from 'next/head'

import Footer from '../components/footer'
import Header from '../components/header'
import ArticleList from '../components/article-list'
import Layout from '../components/layout'
import Hero from '../components/hero'
import HeroBottom from '../components/hero-botton'

const Home: NextPage = () => {
  
  return (
    <>
    <Layout>
      <Head>
        <title>Chefdog.com</title>                       
      </Head>

      <Header></Header>
      
      <Hero></Hero>
      <HeroBottom></HeroBottom>

      <ArticleList></ArticleList>

      <Footer></Footer>
      </Layout>

      <Script id="scroll" strategy="lazyOnload">
          {
              `var scrollpos = window.scrollY;
              var header = document.getElementById("header");
              var navcontent = document.getElementById("nav-content");
              var navaction = document.getElementById("navAction");
              var brandname = document.getElementById("brandname");
              var toToggle = document.querySelectorAll(".toggleColour");
        
              document.addEventListener("scroll", function () {
                /*Apply classes for slide in bar*/
                scrollpos = window.scrollY;
        
                if (scrollpos > 10) {
                  header.classList.add("bg-white");
                  navaction.classList.remove("bg-white");
                  navaction.classList.add("gradient");
                  navaction.classList.remove("text-gray-800");
                  navaction.classList.add("text-white");
                  //Use to switch toggleColour colours
                  for (var i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-gray-800");
                    toToggle[i].classList.remove("text-white");
                  }
                  header.classList.add("shadow");
                  navcontent.classList.remove("bg-gray-100");
                  navcontent.classList.add("bg-white");
                } else {
                  header.classList.remove("bg-white");
                  navaction.classList.remove("gradient");
                  navaction.classList.add("bg-white");
                  navaction.classList.remove("text-white");
                  navaction.classList.add("text-gray-800");
                  //Use to switch toggleColour colours
                  for (var i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-white");
                    toToggle[i].classList.remove("text-gray-800");
                  }
        
                  header.classList.remove("shadow");
                  navcontent.classList.remove("bg-white");
                  navcontent.classList.add("bg-gray-100");
                }
              });
          `}
        </Script>
        <Script id="nav" strategy="lazyOnload">
          {`
              var navMenuDiv = document.getElementById("nav-content");
              var navMenu = document.getElementById("nav-toggle");

              document.onclick = check;
              function check(e) {
                var target = (e && e.target) || (event && event.srcElement);

                //Nav Menu
                if (!checkParent(target, navMenuDiv)) {
                  // click NOT on the menu
                  if (checkParent(target, navMenu)) {
                    // click on the link
                    if (navMenuDiv.classList.contains("hidden")) {
                      navMenuDiv.classList.remove("hidden");
                    } else {
                      navMenuDiv.classList.add("hidden");
                    }
                  } else {
                    // click both outside link and outside menu, hide menu
                    navMenuDiv.classList.add("hidden");
                  }
                }
              }
              function checkParent(t, elm) {
                while (t.parentNode) {
                  if (t == elm) {
                    return true;
                  }
                  t = t.parentNode;
                }
                return false;
              }
          `}
      </Script>
    </>
  )
}

export default Home
