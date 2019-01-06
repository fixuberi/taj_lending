$('.owl-carousel').owlCarousel(
    {
        center:true,
        lazyLoad:true,
        items : 1,
       itemsDesktop : false,
       itemsDesktopSmall : false,
       itemsTablet: false,
       itemsMobile : false,
        margin: 10,
        smartSpeed: 500,
        loop : true,
        startPosition: 2,
        dots: true,
        nav: true,
        navClass: ['custom-nav  nav-prev', 'custom-nav  nav-next'],
        dotClass: 'custom-dot'
      }
    );
    
    var owl = $('.owl-carousel');
    owl.owlCarousel();

    var navControls = Array.prototype.slice.call(owl[0].children, 1);
    var [prevButton, nextButton] = navControls[0].children;
    navControls.unshift(prevButton);
    navControls.push(nextButton);

    var navigation = document.createElement('div');
    navigation.classList.add('owl-customNavigation')
    navigation.append(...navControls);
    owl.append(navigation);

    $('.nav-prev').click(function() {
      owl.trigger('prev.owl.carousel');
    })
    $('.nav-next').click(function() {
      owl.trigger('next.owl.carousel');
    })
