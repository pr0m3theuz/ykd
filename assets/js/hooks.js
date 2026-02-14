// Custom Cursor Hook
export const CustomCursor = {
  mounted() {
    this.dot = this.el.querySelector('.cursor-dot');
    this.outline = this.el.querySelector('.cursor-outline');
    
    this.handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (this.dot) {
        this.dot.style.left = `${posX}px`;
        this.dot.style.top = `${posY}px`;
      }

      if (this.outline) {
        this.outline.animate({
          left: `${posX}px`,
          top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };

    window.addEventListener("mousemove", this.handleMouseMove);
  },
  
  destroyed() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }
};

// Navbar Scroll Hook
export const Navbar = {
  mounted() {
    this.handleScroll = () => {
      const scrolled = window.scrollY > 50;
      this.el.dataset.scrolled = scrolled;
      
      if (scrolled) {
        this.el.classList.add('bg-dark-900/95', 'backdrop-blur-md', 'border-neutral-800', 'py-3');
        this.el.classList.remove('bg-transparent', 'border-transparent', 'py-6');
      } else {
        this.el.classList.remove('bg-dark-900/95', 'backdrop-blur-md', 'border-neutral-800', 'py-3');
        this.el.classList.add('bg-transparent', 'border-transparent', 'py-6');
      }
    };
    
    window.addEventListener('scroll', this.handleScroll);
  },
  
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};

// Mobile Menu Hook
export const MobileMenu = {
  mounted() {
    const menu = document.getElementById('mobile-menu');
    const menuIcon = this.el.querySelector('.menu-icon');
    const closeIcon = this.el.querySelector('.close-icon');
    
    this.el.addEventListener('click', () => {
      const isHidden = menu.classList.contains('mobile-menu-hidden');
      
      if (isHidden) {
        menu.classList.remove('mobile-menu-hidden');
        menu.classList.add('flex');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        menu.classList.add('mobile-menu-hidden');
        menu.classList.remove('flex');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });

    // Close menu when clicking on a link
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('mobile-menu-hidden');
        menu.classList.remove('flex');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  }
};

// Phone Carousel Hook
export const PhoneCarousel = {
  mounted() {
    try {
      this.screenshots = JSON.parse(this.el.dataset.screenshots);
    } catch (e) {
      console.error('Failed to parse screenshots data:', e);
      this.screenshots = [];
    }
    
    this.activeIndex = 0;
    this.image = this.el.querySelector('#carousel-image');
    this.dotsContainer = this.el.querySelector('#carousel-dots');
    this.calloutsContainer = this.el.querySelector('#carousel-callouts');
    
    // Set up carousel rotation
    this.interval = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.screenshots.length;
      this.updateCarousel();
    }, 4000);
    
    // Set up dot click handlers
    if (this.dotsContainer) {
      this.dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
          this.activeIndex = index;
          this.updateCarousel();
          // Reset interval
          clearInterval(this.interval);
          this.interval = setInterval(() => {
            this.activeIndex = (this.activeIndex + 1) % this.screenshots.length;
            this.updateCarousel();
          }, 4000);
        });
      });
    }
    
    this.updateCarousel();
  },
  
  updateCarousel() {
    if (!this.screenshots || this.screenshots.length === 0) return;
    
    const screenshot = this.screenshots[this.activeIndex];
    
    // Update image
    if (this.image) {
      this.image.style.opacity = '0';
      setTimeout(() => {
        this.image.src = screenshot.src;
        this.image.style.opacity = '1';
      }, 250);
    }
    
    // Update dots
    if (this.dotsContainer) {
      this.dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        if (index === this.activeIndex) {
          dot.classList.add('bg-lime-400', 'w-6');
          dot.classList.remove('bg-white/30');
        } else {
          dot.classList.remove('bg-lime-400', 'w-6');
          dot.classList.add('bg-white/30');
        }
      });
    }
    
    // Update callouts (only on desktop)
    if (this.calloutsContainer && window.innerWidth >= 768) {
      const calloutPositions = [
        { className: "top-[20%] -left-[5%] md:-left-[20%]", align: "left" },
        { className: "top-[50%] -right-[5%] md:-right-[25%] -translate-y-1/2", align: "right" },
        { className: "bottom-[20%] -left-[5%] md:-left-[20%]", align: "left" }
      ];
      
      this.calloutsContainer.innerHTML = '';
      
      screenshot.callouts.forEach((text, index) => {
        const callout = document.createElement('div');
        const pos = calloutPositions[index];
        callout.className = `absolute ${pos.className} z-30 pointer-events-none hidden md:block animate-fade-in`;
        callout.style.animationDelay = `${index * 100}ms`;
        callout.innerHTML = `
          <div class="bg-neutral-900/90 backdrop-blur-md border border-neutral-700 hover:border-lime-400 transition-colors px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3">
            <span class="font-tech font-bold uppercase tracking-wider text-white whitespace-nowrap">
              ${text}
            </span>
          </div>
          <div class="absolute w-12 h-[1px] bg-neutral-700 ${pos.align === 'left' ? '-right-12 top-1/2' : '-left-12 top-1/2'} hidden lg:block"></div>
        `;
        this.calloutsContainer.appendChild(callout);
      });
    }
  },
  
  destroyed() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
};

// Intersection Observer for fade-in animations
export const FadeIn = {
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    this.el.querySelectorAll('.stagger-fade').forEach((el, index) => {
      el.style.animationDelay = `${index * 100}ms`;
      observer.observe(el);
    });
  }
};
