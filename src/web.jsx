

import './style.scss';

function Web() {
    // 一般作品
    let webWork = [
        {
            link: 'https://kyriehavegoodday.github.io/ReactCoffee2023/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/coffee.jpg',
            alt: '咖啡',
            title: '咖啡',
            githubLink: 'https://github.com/KyrieHaveGoodDay/ReactCoffee2023',
            skill:['HTML','CSS','RWD','React']
        },
        {
            link: 'https://kyriehavegoodday.github.io/Web_SASS_SCSS/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/kyrie.jpg',
            alt: 'kyrie',
            title: 'kyrie',
            githubLink: 'https://github.com/KyrieHaveGoodDay/Web_SASS_SCSS',
            skill:['HTML','SCSS','RWD']
        },
        {
            link: 'https://kyriehavegoodday.github.io/Chocolate/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/chocolate.jpg',
            alt: '巧克力',
            title: '巧克力',
            githubLink: 'https://github.com/KyrieHaveGoodDay/Chocolate',
            skill:['HTML','Bootstrap4','RWD']
        },
        {
            link: 'https://kyriehavegoodday.github.io/HC_banner/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/Iphone12.jpg',
            alt: 'Iphone12',
            title: 'Iphone12(套件)',
            githubLink: 'https://github.com/KyrieHaveGoodDay/HC_banner',
            skill:['HTML','CSS','JavaScript']
        },
        {
            link: 'https://kyriehavegoodday.github.io/Web_Vue/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/vue.jpg',
            alt: 'Vue',
            title: 'Vue出桃園美食',
            githubLink: 'https://github.com/KyrieHaveGoodDay/Web_Vue',
            skill:['Vue2']
        },
        {
            link: 'https://kyriehavegoodday.github.io/-Web_Redesign/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/starbucks.jpg',
            alt: '星巴克',
            title: '星巴克重製',
            githubLink: 'https://github.com/KyrieHaveGoodDay/-Web_Redesign',
            skill:['HTML','SCSS','RWD']
        },
        
        {
            link: 'https://kyriehavegoodday.github.io/Furniture/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/Furniture.jpg',
            alt: '家具網站',
            title: '家具網站(ps切圖)',
            githubLink: 'https://github.com/KyrieHaveGoodDay/Furniture',
            skill:['Photoshop to HTML']
        },
        {
            link: 'https://kyriehavegoodday.github.io/tourism/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/norway.jpg',
            alt: 'Norway',
            title: 'Norway',
            githubLink: 'https://github.com/KyrieHaveGoodDay/tourism',
            skill:['HTML','SCSS','RWD','AOS','Video']
        },
        {
            link: 'https://kyrie-todo-list-ble7-pyogbxial-kyries-projects-0bc0bf3e.vercel.app/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/todolist.jpg',
            alt: 'TodoList',
            title: 'TodoList',
            githubLink: 'https://github.com/KyrieHaveGoodDay/KyrieTodoList',
            skill:['NextJs','AJAX','RESTfulAPI','Tailwindcss']
        },
    ]
    // game
    let game = [
        {
            link: 'https://kyriehavegoodday.github.io/dragonegg/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/dragonegg.png',
            alt: '恐龍',
            title: '龍蛋守護者',
            githubLink: 'https://github.com/KyrieHaveGoodDay/dragonegg',
            skill:['SCSS','RWD','GSAP','jQuery']
        },
        {
            link: 'https://kyriehavegoodday.github.io/animal/',
            img: 'https://kyriehavegoodday.github.io/animal/img/title.png',
            alt: '動物大集合',
            title: '動物大集合',
            githubLink: 'https://github.com/KyrieHaveGoodDay/animal',
            skill:['SCSS','RWD','GSAP','jQuery']
        },
        {
            link: 'https://kyriehavegoodday.github.io/envelope/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/main_bg.png',
            alt: '接紅包',
            title: '接紅包',
            githubLink: 'https://github.com/KyrieHaveGoodDay/envelope',
            skill:['SCSS','RWD','GSAP','jQuery']
        },
        {
            link: 'https://kyriehavegoodday.github.io/turntable/',
            img: 'https://kyriehavegoodday.github.io/turntable/img/h1.png',
            alt: '轉盤',
            title: '轉盤',
            githubLink: 'https://github.com/KyrieHaveGoodDay/turntable',
            skill:['SCSS','RWD','GSAP','jQuery']
        },
        {
            link: 'https://kyriehavegoodday.github.io/egg/',
            img: 'https://kyriehavegoodday.github.io/egg/img/game_title.png',
            alt: '敲蛋遊戲',
            title: '敲蛋(手機限定)',
            githubLink: 'https://github.com/KyrieHaveGoodDay/egg',
            skill:['SCSS','RWD','GSAP','jQuery']
        },
        {
            link: 'https://kyriehavegoodday.github.io/rabbit/',
            img: 'https://kyriehavegoodday.github.io/rabbit/img/20210901/title.png',
            alt: '玉兔搗麻糬',
            title: '玉兔搗麻糬',
            githubLink: 'https://github.com/KyrieHaveGoodDay/rabbit',
            skill:['SCSS','RWD','GSAP','jQuery']
        },
    ]
    // other 其他畫面資料
    let other = [
        {
            link: 'https://kyriehavegoodday.github.io/EntertainmentCity/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/bigPic.jpg',
            alt: '電競娛樂城',
            title: '電競娛樂城',
            githubLink: 'https://github.com/KyrieHaveGoodDay/EntertainmentCity',
            skill:['HTML','SCSS','RWD','GSAP','Swiper']

        },
        {
            link: 'https://kyriehavegoodday.github.io/SuperSaving/',
            img: 'https://kyriehavegoodday.github.io/SuperSaving/img/layout0525/block_coupon03_02.png',
            alt: '超省節',
            title: '超省節',
            githubLink: 'https://github.com/KyrieHaveGoodDay/SuperSaving',
            skill:['HTML','SCSS','RWD','GSAP','Swiper']

        },
        {
            link: 'https://kyriehavegoodday.github.io/fresh/',
            img: 'https://kyriehavegoodday.github.io/fresh/img/banner/slider-1.png',
            alt: '生鮮食品',
            title: '生鮮食品',
            githubLink: 'https://github.com/KyrieHaveGoodDay/fresh',
            skill:['HTML','SCSS','RWD','Swiper']

        },
    ]
    
    return <>


        <div className="official webTitle">
            <h1>作品集</h1>
            <hr className="hr-work" />
        </div>
        <div className="official">
            {
                webWork.map((item, i) => {
                    return <div className="web-title" key={i}>
                        <div className="web-img">
                            <a href={item.link} target="_blank">
                                <a href={item.githubLink} target="_blank">
                                    <img src="https://kyriehavegoodday.github.io/myindexImg/img/icon-github.png" className='github' alt="" />
                                </a>
                                <img src={item.img} alt={item.alt} />
                                <div className='skill'>
                                    {item.skill.map((skill, j) => {
                                       return <span key={j}>{skill}</span>;
                                    })}
                                </div>
                            </a>
                        </div>
                        <h3 className="web-h3">{item.title}</h3>
                    </div>
                })
            }
        </div>
        <div className="official webTitle">
            <h1>遊戲</h1>
            <hr className="hr-work" />
        </div>
        <div className="official">
            {
                game.map((item, i) => {
                    return <div className="web-title">
                        <div className="web-img">
                            <a href={item.link} target="_blank">
                                <a href={item.githubLink} target="_blank">
                                    <img src="https://kyriehavegoodday.github.io/myindexImg/img/icon-github.png" className='github' alt="" />
                                </a>
                                <img src={item.img} alt={item.alt} />
                                <div className='skill'>
                                    {item.skill.map((skill, j) => {
                                       return <span key={j}>{skill}</span>;
                                    })}
                                </div>
                            </a>
                        </div>
                        <h3 className="web-h3">{item.title}</h3>
                    </div>
                })
            }

        </div>
        <div className="official webTitle">
            <h1>其他</h1>
            <hr className="hr-work" />
        </div>
        <div className="official">

            {
                other.map((item, i) => {
                    return <div className="web-title">
                        <div className="web-img">
                            <a href={item.link} target="_blank">
                                <a href={item.githubLink} target="_blank">
                                    <img src="https://kyriehavegoodday.github.io/myindexImg/img/icon-github.png" className='github' alt="" />
                                </a>
                                <img src={item.img} alt={item.alt} />
                                <div className='skill'>
                                    {item.skill.map((skill, j) => {
                                       return <span key={j}>{skill}</span>;
                                    })}
                                </div>
                            </a>
                        </div>
                        <h3 className="web-h3">{item.title}</h3>
                    </div>
                })
            }
        </div>


    </>
}

export default Web;