import React from "react";
import { Routes, Route, BrowserRouter, } from 'react-router-dom';
/*layout */
import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";
/*components*/
import { Home } from "../components/Home";
import { Products } from "../components/Products";
import { Blog } from "../components/Blog";
/*Paginas de Productos */
import { MouseG } from "../components/pages/gamer/MouseG";
import { AudifonosG } from "../components/pages/gamer/AudifonosG";
import { MicrofonoG } from "../components/pages/gamer/MicrofonoG";
import { TecladosG } from "../components/pages/gamer/TecladosG";
import { SillaG } from "../components/pages/gamer/SillaG";
import { CamaraG } from "../components/pages/gamer/CamaraG";
/*Paginas de blog */
import { Pg1 } from "../components/pagesBlog/gamer/Pg1";
export const Roots = () => {
  
    return (
        <>
        <BrowserRouter>
            <Nav />
            <img className='img_inicio' src='https://imgs.search.brave.com/0EmuR9h_9u_DEMl5ICmzDax97KeL0se0dLjsczNK1vg/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9R/RkRpblVrdGFBcy9t/YXhyZXNkZWZhdWx0/LmpwZw'></img>
      
            <section>
                <Routes>
                    {/*NAV */}
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Products" element={<Products />} />
                    <Route path="/Blog" element={<Blog />} />


                    {/*Paginas de Productos */}
                    <Route path='/MouseGamer' element={<MouseG />} />
                    <Route path='/CascosGamer' element={<AudifonosG />} />
                    <Route path='/MicrofonoGame' element={<MicrofonoG />} />
                    <Route path='/TecladoGamer' element={<TecladosG />} />
                    <Route path='/CamaraGamer' element={<CamaraG />} />
                    <Route path='/SillaGamer' element={<SillaG />} />


                    {/*Paginas de blog */}
                    <Route path='/pg1' element={<Pg1/>} />
                    
                </Routes>
            </section>
            <Footer />
        </BrowserRouter>
        </>
    );
}