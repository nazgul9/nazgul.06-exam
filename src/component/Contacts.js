import React from 'react';

const Contacts = () => {
    return (
    
        <div class="flips">
        <div class="flip" data-aos="zoom-in-left">
            <h2>Наш адрес: <br/> ул.Ленина 318</h2>
        </div>
        <div class="flip" data-aos="zoom-in-right">
            <h2>Орентир:
                <br/>ЦОН,МИД, здание бывшей Мэрии, 3 этаж</h2>
        </div>
        <div class="flip" data-aos="zoom-out-up">
            <h2>0500891111
            </h2>
        </div>
        <div class="flip" data-aos="zoom-out-down">
            <h2>0550800155</h2>
        </div>
        <div class="flip " data-aos="zoom-in">
            <div class="bg-circle-outline d-inline-block">
                <a href="https://twitter.com/" class="text-white">
                    <i class="fa fa-2x fa-fw fa-twitter blue-blue"></i></a>
            </div>
        </div>
        <div class="flip" data-aos="zoom-in-up">
            <div class=" bg-circle-outline d-inline-block ">
                <a href="https://instagram.com/" class="text-white">
                    <i class="fa fa-2x fa-fw fa-instagram color-blue"></i></a>
            </div>
        </div>
        <div class="flip" data-aos="zoom-in-down">
            <div class="bg-circle-outline ">
                <a href="https://www.whatsapp.com/company/" class="text-white">
                    <i class="fa fa-2x fa-fw fa-whatsapp color-white"></i></a>
            </div>
        </div>
    </div>


    );
};

export default Contacts;