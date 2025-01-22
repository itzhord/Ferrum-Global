<script lang="ts">
    import { onMount } from 'svelte';
    import Icon from "@iconify/svelte";
    
      let scrolled = false;
    
      onMount(() => {
        const handleScroll = () => {
          scrolled = window.scrollY > 50;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      });
    
      </script>
    
    <div class=" bg-white">
    
        <main class="relative overflow-hidden bg-fixed bg-no-repeat" 
          style="background-image: url(../../src/lib/assets/new.jpg); 
                 height: 100vh; width: full;  background-size: cover;" >
        <div class="absolute inset-0 bg-black opacity-40 z-0"></div>
        <nav class={`fixed w-full h-[6rem] transition-colors z-20 duration-300 ${scrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
            <div class="flex mt-3.5 items-center flex-row justify-between mx-[3rem] ">
                <div>
                    <h2 class="font-sans font-bold ">Ferrum</h2>
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
            <div class="flex flex-col z-10 mt-[8rem] ml-[4rem] ">
            <h1 class="text-[7rem] text-white font-semibold ">Welcome to Ferrum</h1>
            <h1 class="text-[7rem] text-white font-semibold mt-[-3rem] "> Global Services</h1>
            <button class="bg-black flex items-center gap-x-3.5 font-aeonikRegular text-white px-3 py-3 pl-5 rounded-full group h-[3rem] w-fit overflow-hidden">
            <span class="text-lg">Contact</span>
                <div class="bg-white rounded-full flex items-center justify-center h-0 w-0 group-hover:h-[2rem] group-hover:w-[2rem] transition-all duration-300 group-hover:ml-2">
                 <Icon icon="ic:round-arrow-right" class='text-black text-[2.5rem]' />
                </div>
            </button>
            <div class="flex flex-col text-[1.5rem] font-semibold text-white mt-[1rem]">
                <p>Mesh Global Services is your trusted</p>
                <p>international buying house specializing in the</p>
                <p>Mesh Global Services is your trusted</p>
            </div>
            </div>
        </section>
     
    </main>
    <section class='flex flex-col items-center justify-center h-[100vh] mt-[5rem] bg-white  w-[100v%]'>  
        <h1 class='text-black'>Hello, world!</h1>
    </section>
    
    </div>
    