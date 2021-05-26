import React from 'react';

const Home = () => {
    return (
<main>
<h1 class="text-center mb-5" data-aos="flip-down" data-aos-delay="500" data-aos-duration> IT-Park Academy</h1>
        <div class=" flips">
              
            <div class="flip " data-aos="flip-left"> 
            <img width="560" height="340" src="/img/itpark.jpg" alt="" />
            </div>
            <div class="flip" data-aos="flip-right" data-aos-delay="500" data-aos-duration>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ratione quaerat minus unde earum adipisci quod,
                 delectus aut beatae amet repellendus itaque numquam dicta reprehenderit aperiam, veritatis harum eius laudantium.</p>
            </div>

            <div class="flip " data-aos="flip-right" data-aos-delay="500" data-aos-duration>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ratione quaerat minus unde earum adipisci quod,
                 delectus aut beatae amet repellendus itaque numquam dicta reprehenderit aperiam, veritatis harum eius laudantium.</p>
            </div >
            <div class="flip " data-aos="flip-left">
            <img width="560" height="340" src="/img/itpark2.jpg" alt="" />
            </div>

            <div class="flip " data-aos="flip-right" data-aos-delay="500 " data-aos-duration>
            <img width="560" height="340" src="/img/itparkkom.jpg" alt="" />
            </div >


            <div class="flip " data-aos="flip-left">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ratione quaerat minus unde earum adipisci quod,
                 delectus aut beatae amet repellendus itaque numquam dicta reprehenderit aperiam, veritatis harum eius laudantium.</p>
            </div>


         
            
            <div class="flip " data-aos="flip-right" data-aos-delay="500 " data-aos-duration>
            <img width="560" height="340" src="/img/zal.jpg" alt="" />
    

            </div >
            <div class="flip " data-aos="flip-left">
            <img width="560" height="340" src="/img/zal1.jpg" alt="" />
            </div>
        </div>
</main>
    );
};

export default Home;