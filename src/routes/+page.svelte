<script lang="ts">
    import { onMount } from 'svelte';
    import Icon from "@iconify/svelte";
    import Rig from '$lib/assets/pexels-pixabay-257700.jpg'
    
    let scrolled = false;

    onMount(() => {
    const element = document.getElementById('animated-element') as HTMLElement;

    const animateOnScroll = () => {
      if (!element) return;
      const inView = element.getBoundingClientRect().top < window.innerHeight;
      element.classList.toggle('animate-fadeInUp', inView);
    };

    const handleScroll = () => {
      scrolled = window.scrollY > 50;
      animateOnScroll();
    };

    window.addEventListener('scroll', handleScroll);
    animateOnScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
    
      </script>
    
    <div class=" bg-white">
    
        <main class="relative overflow-hidden bg-fixed bg-no-repeat" 
          style="background-image: url(../../src/lib/assets/new.jpg); 
                 height: 100vh; width: full;  background-size: cover;" >
        <div class="absolute inset-0 bg-black opacity-40 z-0"></div>
        <nav class={`fixed w-full h-[6rem] drop-shadow-md transition-colors z-20 duration-300 ${scrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
            <div class="flex mt-3.5 items-center flex-row justify-between mx-[3rem] ">
                <div>
                    <h2 class="font-sans font-bold text-[1.8rem] ">Ferrum</h2>
                    <h class='relative font-medium bottom-[0.5rem] '>Services</h>
                </div>
                <div class="flex flex-row gap-[2rem] ">
                    <ul class="flex font-bold flex-row gap-[1rem] mt-[0.6rem]">
                        <li>About</li>
                        <li>Services</li>
                        <li>Products</li>
                    </ul>
                   <a href=""> <button class="bg-black flex items-center gap-x-3.5 font-aeonikRegular text-white px-3 py-3 pl-5 rounded-full group h-[3rem] w-fit overflow-hidden">
                    <span class="text-lg">Contact</span>
                    <div class="bg-white rounded-full flex items-center justify-center h-0 w-0 group-hover:h-[2rem] group-hover:w-[2rem] transition-all duration-300 group-hover:ml-2">
                        <Icon icon="ic:round-arrow-right" class='text-black text-[2.5rem]' />
                    </div>
                        
                   
                  </button></a>
                </div>
            </div>
        </nav>
        <section class='relative z-10'>
            <div class="flex flex-col z-10 mt-[6rem] ml-[4rem] ">
            <h1 class="text-[7rem] text-white font-semibold ">Welcome to Ferrum</h1>
            <h1 class="text-[7rem] text-white font-semibold mt-[-3rem] "> Global Services</h1>
            <button class="bg-white flex items-center gap-x-3.5 font-aeonikRegular text-black px-3 py-3 pl-5 rounded-full group h-[4rem] w-[12rem] mt-[1rem] overflow-hidden">
            <span class="text-lg font-semibold ml-[1rem]">Contact</span>
                <div class="bg-black rounded-full flex items-center justify-center  h-[2rem] w-[2rem] transition-all ml-[2rem]">
                 <Icon icon="ic:round-arrow-right" class='text-white text-[2.5rem]' />
                </div>
            </button>
            <div class="flex flex-col text-[1.5rem] font-semibold text-white mt-[2rem]">
                <p>Mesh Global Services is your trusted</p>
                <p>international buying house specializing in the</p>
                <p>Mesh Global Services is your trusted</p>
            </div>
            </div>
        </section>
     
    </main>
    <section class='flex flex-col h-[100vh] mt-[5rem] bg-white  w-[100v%]'>  
     <div>
        <div  class="ml-[4rem] mt-[-1rem] flex flex-col font-bold text-[2rem] text-blue-900 ">
            <p>We connect diverse markets</p>
            <p>with high-quality products and</p>
            <p>solutions, enabling smooth</p>
            <p>procurement, trading, and</p>
            <p>warehousing for global clients.</p>
        </div>
        <div id="animated-element" class="flex flex-row gap-[2rem] ml-[3rem] mt-[3rem] w-[80%]">
            <div class="flex flex-col w-[1/3] animate-fadeInUp delay-[100ms]">
              <h2 class="font-bold text-[1.1rem] ml-[1rem]">Oil and Gas Procurement</h2>
              <p class="p-[1rem] text-blue-900 font-semibold">We offer a wide range of services to help you find the right oil and gas deals for your business. Our team of experts can help you navigate the complex world of the oil and gas industry, ensuring that you get the best deals possible.</p>
            </div>
            <div class="flex flex-col w-[1/3] animate-fadeInUp delay-[400ms]">
              <h2 class="font-bold text-[1.1rem] ml-[1rem]">Advisory and Technical Services</h2>
              <p class="p-[1rem] text-blue-900 font-semibold">We offer a wide range of services to help you find the right oil and gas deals for your business. Our team of experts can help you navigate the complex world of the oil and gas industry, ensuring that you get the best deals possible.</p>
            </div>
            <div class="flex flex-col w-[1/3] animate-fadeInUp delay-[700ms]">
              <h2 class="font-bold text-[1.1rem] ml-[1rem]">Global Trading Solution</h2>
              <p class="p-[1rem] text-blue-900 font-semibold">We offer a wide range of services to help you find the right oil and gas deals for your business. Our team of experts can help you navigate the complex world of the oil and gas industry, ensuring that you get the best deals possible.</p>
            </div>
          </div>
         </div>
         <div class="flex flex-row p-[4rem] gap-[2rem] mt-[4rem]">
            <p class="text-[2.3rem] font-semibold">We connect global OEMs to energy operations, providing top-tier products and support while maintaining a commitment to excellence, integrity, and innovation.</p>
            <img src={Rig} alt="new" class="w-[20rem] rounded-xl  object-cover mb-[6rem]">
         </div>
    </section>
    <div class=" flex mt-[16rem] items-center justify-center " >
        <div class=" relative overflow-hidden bg-fixed bg-no-repeat rounded-2xl mb-[18rem]" 
              style="background-image: url(../../src/lib/assets/pexels-pixabay-257700.jpg); 
                     height: 100vh; width: 90%;  background-size: cover; ">
            <div class="absolute inset-0 bg-black opacity-40 z-0"></div>
            <div class="absolute bottom-[2rem] text-white gap-[1rem] px-[2rem] flex flex-row ">
                <p class="text-[2.5rem]">A top global trading partner in the oil and gas industry.</p>
                <button class="bg-white flex items-center gap-x-3.5 font-aeonikRegular text-black px-3 py-3 pl-5 rounded-full group h-[5rem] w-[15rem] mt-[1rem] overflow-hidden">
                    <span class="text-[1.5rem] font-semibold ml-[1rem]">Contact</span>
                        <div class="bg-black rounded-full flex items-center justify-center  h-[3rem] w-[3rem] transition-all ml-[2rem]">
                         <Icon icon="ic:round-arrow-right" class='text-white text-[2.5rem]' />
                        </div>
                    </button>
            </div>
        </div>
    </div>
    
    </div>
    