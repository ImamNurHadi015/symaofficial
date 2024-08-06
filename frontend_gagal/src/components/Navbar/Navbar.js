// src/components/Navbar/Navbar.js
import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  useEffect(() => {
    class StickyNavigation {
      constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        let self = this;
        document.querySelectorAll('.et-hero-tab').forEach(tab => {
          tab.addEventListener('click', function(event) {
            self.onTabClick(event, this);
          });
        });
        window.addEventListener('scroll', () => { this.onScroll(); });
        window.addEventListener('resize', () => { this.onResize(); });
      }

      onTabClick(event, element) {
        event.preventDefault();
        const href = element.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop - this.tabContainerHeight + 1;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }

      onScroll() {
        this.checkTabContainerPosition();
        this.findCurrentTabSelector();
      }

      onResize() {
        if(this.currentId) {
          this.setSliderCss();
        }
      }

      checkTabContainerPosition() {
        const offset = document.querySelector('.et-hero-tabs').offsetTop + 
                       document.querySelector('.et-hero-tabs').clientHeight - 
                       this.tabContainerHeight;
        if(window.scrollY > offset) {
          document.querySelector('.et-hero-tabs-container').classList.add('et-hero-tabs-container--top');
        } else {
          document.querySelector('.et-hero-tabs-container').classList.remove('et-hero-tabs-container--top');
        }
      }

      findCurrentTabSelector() {
        let newCurrentId = null;
        let newCurrentTab = null;
        const self = this;
        document.querySelectorAll('.et-hero-tab').forEach(tab => {
          const id = tab.getAttribute('href');
          const offsetTop = document.querySelector(id).offsetTop - self.tabContainerHeight;
          const offsetBottom = document.querySelector(id).offsetTop + 
                               document.querySelector(id).clientHeight - self.tabContainerHeight;
          if(window.scrollY > offsetTop && window.scrollY < offsetBottom) {
            newCurrentId = id;
            newCurrentTab = tab;
          }
        });
        if(this.currentId !== newCurrentId || this.currentId === null) {
          this.currentId = newCurrentId;
          this.currentTab = newCurrentTab;
          this.setSliderCss();
        }
      }

      setSliderCss() {
        let width = 0;
        let left = 0;
        if(this.currentTab) {
          width = this.currentTab.clientWidth + 'px';
          left = this.currentTab.offsetLeft + 'px';
        }
        document.querySelector('.et-hero-tab-slider').style.width = width;
        document.querySelector('.et-hero-tab-slider').style.left = left;
      }
    }

    new StickyNavigation();
  }, []);

  return (
    <section className="et-hero-tabs">
      <h1>SyMa.</h1>
      <h3>Dedek Cantik Pakek Banget</h3>
      <div className="et-hero-tabs-container">
        <a className="et-hero-tab" href="#tab-es6">About Us</a>
        <a className="et-hero-tab" href="#tab-flexbox">Cataloge</a>
        <span className="et-hero-tab-slider"></span>
      </div>
    </section>
  );
};

export default Navbar;
