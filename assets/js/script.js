(function($){
	'use script';

	// WOW JS
	new WOW().init();

	var $loader = $('#preloader');
    if($loader.length > 0){
		$(window).on('load', function(event) {
	        $('#preloader').delay(500).fadeOut(500);
		});
	}



	// Scroll Area
	var $scroll = $('.scroll-area');
	if($scroll.length > 0){
		$(document).ready(function(){
		    $('.scroll-area').click(function(){
		      	$('html').animate({
		        	'scrollTop' : 0,
		      	},700);
		      	return false;
		    });
		    $(window).on('scroll',function(){
		      	var a = $(window).scrollTop();
		      	if(a>400){
		            $('.scroll-area').slideDown(300);
		        }else{
		            $('.scroll-area').slideUp(200);
		        }
		    });
		});
	}


	// Sticky Menu
	$(document).ready(function(){
		$(window).on('scroll',function(){
			var scroll = $(window).scrollTop();
			if(scroll<0){
				$('.header-area').removeClass('sticky');
			}else{
				$('.header-area').addClass('sticky');
			}
		});
	});



	var $nav = $('.nav-menu ul');
	    if($nav.length > 0){
		$('.nav-menu ul').onePageNav({
			currentClass:'current',
			changeHash:false,
			scrollSpeed:250,
			scrollThreshold:0.2
		});
	}	

	
	$('.video-button a').magnificPopup({
		  	type: 'iframe',
		});

	///testimonial
   		var $full = $('.testimonial-slider');
		    if($full.length > 0){
		    $(document).ready(function(){
			  	$(".testimonial-slider").owlCarousel({
			  		loop:true,
			  		center:false,
			  		margin:15,
			  		items:2,
			  		autoplay: true,
			  		nav: false,

			  		responsive : {
						    0 : {
						       items:1,
						    },
						    
						    768 : {
						         items:2,
						    },
						     991 : {
						         items:2,
						    }
						}
			  		});
				});
			}




	 	var $popup = $('.content-full a');
		    if($popup.length > 0){
			  $(document).ready(function(){
				$('.content-full a').magnificPopup({
				  	type: 'image',
				   	gallery: {
				    	enabled: true
				  	},
				});
			});
			}
			  //mixltup
			var $mix = $('.p-projects-full');
		    if($mix.length > 0){
			  $(document).ready(function(){
				  var mixer = mixitup ('.p-projects-full')

					var mixer = mixitup('.p-projects-full');
						var mixer = mixitup('.p-projects-full', {
					selectors: {
						target: '.blog-item'
					},
					animation: {
						duration:300
					}
				});

			});

		}


		let  flexiblebar = document.querySelectorAll(".flexiblebar")
		let newflexiblebar = Array.from(flexiblebar)

		let percent = document.querySelectorAll(".percent")
		let newpercent = Array.from(percent)

		// console.log(newflexiblebar);

		newflexiblebar.map((item)=>{
		        // console.log(item.dataset.parcent);
		          
		      let count = 0

		       function progressbar() {
		        count++
		        item.style.width = `${count}%`
		        // percent.innerHTML = `${count}%`
		        
		        if(count == item.dataset.parcent){
		            clearInterval(stop)
		        }
		    }
		    
		    let stop = setInterval(() => {
		        progressbar()
		    },40);
		})


		newpercent.map((itam) => {
		    let count = 0;

		    function numbers() {
		        itam.innerHTML = `${count}%`;
		        count++;
		        if (count > itam.dataset.number) {
		            clearInterval(stop_two)
		        }
		    }
		    let stop_two = setInterval(() => {
		        numbers()
		    }, 40);
		})

}(jQuery));

(()=>{
	
	const openNavMenu=document.querySelector(".open-nav-menu"),

	 closeNavMenu=document.querySelector(".close-nav-menu"),

	 closeNavItem=document.querySelector(".close-nav-item"),
	 closeNavItem1=document.querySelector(".close-nav-item1"),
	 closeNavItem2=document.querySelector(".close-nav-item2"),
	 closeNavItem3=document.querySelector(".close-nav-item3"),
	 closeNavItem4=document.querySelector(".close-nav-item4"),
	 closeNavItem5=document.querySelector(".close-nav-item5"),
	 closeNavItem6=document.querySelector(".close-nav-item6"),
	 closeNavItem7=document.querySelector(".close-nav-item7"),
	 

	 navMenu=document.querySelector(".nav-menu"),
	 menuOverlay=document.querySelector(".menu-overly"),
	 mediaSize=991;
	
	openNavMenu.addEventListener("click", toggleNav);
	closeNavMenu.addEventListener("click", toggleNav);

	closeNavItem.addEventListener("click", toggleNav);
	closeNavItem1.addEventListener("click", toggleNav);
	closeNavItem2.addEventListener("click", toggleNav);
	closeNavItem3.addEventListener("click", toggleNav);
	closeNavItem4.addEventListener("click", toggleNav);
	closeNavItem5.addEventListener("click", toggleNav);
	closeNavItem6.addEventListener("click", toggleNav);
	closeNavItem7.addEventListener("click", toggleNav);

	menuOverlay.addEventListener("click", toggleNav);



	function toggleNav(){
		navMenu.classList.toggle("open");
		menuOverlay.classList.toggle("active");
		document.body.classList.toggle("hidden-scrolling");
	}
	navMenu.addEventListener("click",(event)=>{
		if (event.target.hasAttribute("data-toggle") && window.innerWidth<=mediaSize) {
			//prevent default ancor click behavior
			event.preventDefault();
			const menuIteamHasChildren=event.target.parentElement;
			//if menuIteamHasChildren is already ecpanded collapse it
			if (menuIteamHasChildren.classList.contains("active")){
				collapseSubMenu();
			}
			else{
				//collapse exting expanded menuIteamHasChildren
			if(navMenu.querySelector(".menu-iteam-has-childrean.active")){
				collapseSubMenu();
			}
			//expand new menuIteamHasChildren
			menuIteamHasChildren.classList.add("active");
			const subMenu=menuIteamHasChildren.querySelector(".submenu");
			subMenu.style.maxHeight=subMenu.scrollHeight + "px";
		}
		}
	});
	function collapseSubMenu(){
		navMenu.querySelector(".menu-iteam-has-childrean.active .submenu")
		.removeAttribute("style");
		navMenu.querySelector(".menu-iteam-has-childrean.active")
		.classList.remove("active");
	}

	function resizeFix(){
		if (navMenu.classList.contains("open")) {
			toggleNav();
		}	
		if(navMenu.querySelector(".menu-iteam-has-childrean.active")){
				collapseSubMenu();
		}
	}
	window.addEventListener("resize",function(){
		if (this.innerWidth > mediaSize) {
			resizeFix();
		}

	});

	
})();
