function Portfolio() {
    // 平面設計
    let designPic = [
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/Graphic-design/20200516.png'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/Graphic-design/Kyrie.png'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/Graphic-design/logo1.png'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/Graphic-design/logo3.png'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/Graphic-design/tw1.jpg'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/Graphic-design/tw2.jpg'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/Graphic-design/tw3.jpg'
        },
    ]
    // 海報
    let poster = [
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/poster/20200425.png'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/poster/GOGORO.jpg'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/poster/HouseCoffee.png'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/poster/PCDA1.png'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/poster/piano.png'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/poster/Xgirl.png'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/poster/globalwarming.jpg'
        },
    ]
    // 精緻電修
    let exquisite = [
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/Exquisite/green.jpg'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/Exquisite/blue.jpg'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/Exquisite/iphone.jpg'
        },
    ]
    // 實體作品
    let product = [
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/product/1599.jpg'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/product/57715.jpg'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/product/girl.jpg'
        }
    ]
    // 補習班作品
    let vi = [
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/VI/cq1.png'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/VI/cq2.jpg'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/VI/cq3.jpg'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/VI/cq4.jpg'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/VI/cq5.jpg'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/VI/cq6.jpg'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/VI/cq7.jpg'
        },
        {
            img: 'https://kyriehavegoodday.github.io/myindexImg/img/VI/cq8.jpg'
        },
    ]
    return <>
        <div id="work">
            <div id="graphic-design">
                <h1>平面設計</h1>
                <hr className="hr-work" />
                <div id="img-box">
                    {
                        designPic.map((item, i) => {
                            return <img key={i} src={item.img} alt="平面設計" />
                        })
                    }

                </div>

            </div>

            <div id="poster">
                <h1>海報</h1>
                <hr />
                <div id="img-box">
                    {
                        poster.map((item, i) => {
                            return <img key={i} src={item.img} alt="海報" />
                        })
                    }
                </div>
            </div>
            <div id="exquisite">
                <h1>精緻電修</h1>
                <hr />
                <div id="img-box">
                    {
                        exquisite.map((item, i) => {
                            return <img key={i} src={item.img} alt="精緻電修" />
                        })
                    }
                </div>
            </div>
            <div id="product">
                <h1>實體作品</h1>
                <hr />
                <div id="img-box">
                    {
                        product.map((item, i) => {
                            return <img key={i} src={item.img} alt="實體作品" />
                        })
                    }

                </div>
            </div>
            <div id="VI">
                <h1>VI</h1>
                <hr />
                <div id="logo-title">
                    <img src={vi[0].img} alt="logo標題" />
                </div>
                <div id="img-box">
                    {
                        vi.map((item, i) => {
                            if (i >= 1) {
                                return <img key={i} src={item.img} alt="VI" />
                            }
                        })
                    }


                </div>
            </div>

        </div>
    </>
}

export default Portfolio;