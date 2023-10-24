import { useEffect } from 'react';
import $ from "jquery";


function Loading(){

    useEffect(()=>{
        $('html').animate({
            scrollTop: 0,
          }, 0);
        setTimeout(function () {
            $(".loading-wrapper").fadeOut(500);
        }, 1000);
    },[])

    return <>
        <div className='loading-wrapper '>
        <div className="loading la-ball-scale-ripple la-3x">
            <div></div>
        </div>
    </div>
    </>
}

export default Loading;