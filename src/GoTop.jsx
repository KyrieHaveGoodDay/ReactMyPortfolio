import { useEffect } from 'react';
import $ from "jquery";

function GoTop(){
    useEffect(() => {
        $(".goTop").on('click',function (e) {
            $("html,body").animate(
                {
                    scrollTop: 0,
                },
                500
            );
        });
        $('.goTop').fadeOut();
        $(window).on('scroll',function () {
            $(this).scrollTop() > 100 ? $('.goTop').fadeIn() : $('.goTop').fadeOut();
        });
    }, [])
    return<>
        <img src="https://kyriehavegoodday.github.io/myindexImg/img/top.png" alt="top" id="gotop" className='goTop' />
    </>
}

export default GoTop;