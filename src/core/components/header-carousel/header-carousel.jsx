import React from 'react';
import headercarouselstyle from "./header-carousel.module.sass"

const HeaderCarousel = () => {
    return ( 
        <>
            <section className={headercarouselstyle.page_title}>
                <div className={headercarouselstyle.bannerContent}></div>
            </section>
        </>
     );
}
 
export default HeaderCarousel;