

import './style.scss';

function Web() {
    // 一般作品
    let webWork = [
        {
            link: 'https://kyriehavegoodday.github.io/ReactCoffee2023/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/coffee.jpg',
            alt: '咖啡',
            title: '咖啡',
            githubLink: '',
        },
        {
            link: 'https://kyriehavegoodday.github.io/Web_SASS_SCSS/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/kyrie.jpg',
            alt: 'kyrie',
            title: 'kyrie',
            githubLink: '',
        },
        {
            link: 'https://kyriehavegoodday.github.io/Chocolate/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/chocolate.jpg',
            alt: '巧克力',
            title: '巧克力(Bootstrap)',
            githubLink: '',
        },
        {
            link: 'https://kyriehavegoodday.github.io/HC_banner/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/Iphone12.jpg',
            alt: 'Iphone12',
            title: 'Iphone12(套件)',
            githubLink: '',
        },
        {
            link: 'https://kyriehavegoodday.github.io/Web_Vue/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/vue.jpg',
            alt: 'Vue',
            title: 'Vue出桃園美食',
            githubLink: '',
        },
        {
            link: 'https://kyriehavegoodday.github.io/-Web_Redesign/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/starbucks.jpg',
            alt: '星巴克',
            title: '星巴克重製',
            githubLink: '',
        },
        {
            link: 'https://kyriehavegoodday.github.io/Branch8/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/city.jpg',
            alt: '城市旅行',
            title: '城市旅行',
            githubLink: '',
        },
        {
            link: 'https://kyriehavegoodday.github.io/Furniture/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/Furniture.jpg',
            alt: '家具網站',
            title: '家具網站(ps切圖)',
            githubLink: '',
        },
        {
            link: 'https://kyriehavegoodday.github.io/travel/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/taipei.jpg',
            alt: '台灣旅遊景點導覽',
            title: '台灣旅遊景點導覽',
            githubLink: '',
        },
    ]
    // game
    let game = [
        {
            link: 'https://kyriehavegoodday.github.io/dragonegg/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/dragonegg.png',
            alt: '恐龍',
            title: '龍蛋守護者',
            githubLink: '',
        },
        {
            link: 'https://kyriehavegoodday.github.io/animal/',
            img: 'https://kyriehavegoodday.github.io/animal/img/title.png',
            alt: '動物大集合',
            title: '動物大集合',
            githubLink: '',
        },
        {
            link: 'https://kyriehavegoodday.github.io/envelope/',
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/main_bg.png',
            alt: '接紅包',
            title: '接紅包',
            githubLink: '',
        },
        {
            link: 'https://kyriehavegoodday.github.io/turntable/',
            img: 'https://kyriehavegoodday.github.io/turntable/img/h1.png',
            alt: '轉盤',
            title: '轉盤',
            githubLink: '',
        },
        {
            link: 'https://kyriehavegoodday.github.io/egg/',
            img: 'https://kyriehavegoodday.github.io/egg/img/game_title.png',
            alt: '敲蛋遊戲',
            title: '敲蛋(手機限定)',
            githubLink: '',
        },
        {
            link: 'https://kyriehavegoodday.github.io/rabbit/',
            img: 'https://kyriehavegoodday.github.io/rabbit/img/20210901/title.png',
            alt: '玉兔搗麻糬',
            title: '玉兔搗麻糬',
            githubLink: '',
        },
    ]
    // other 其他畫面資料
    let other = [
        {
            link: 'https://kyriehavegoodday.github.io/SuperSaving/',
            img: 'https://kyriehavegoodday.github.io/SuperSaving/img/layout0525/block_coupon03_02.png',
            alt: '超省節',
            title: '超省節',
            githubLink: '',
        },
        {
            link: 'https://kyriehavegoodday.github.io/fresh/',
            img: 'https://kyriehavegoodday.github.io/fresh/img/banner/slider-1.png',
            alt: '生鮮食品',
            title: '生鮮食品',
            githubLink: '',
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
                            <a href={item.link} target="_blank"><img
                                src={item.img} alt={item.alt} /></a>
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
                            <a href={item.link} target="_blank"><img
                                src={item.img} alt={item.alt} /></a>
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
                            <a href={item.link} target="_blank"><img
                                src={item.img} alt={item.alt} /></a>
                        </div>
                        <h3 className="web-h3">{item.title}</h3>
                    </div>
                })
            }
        </div>


    </>
}

export default Web;