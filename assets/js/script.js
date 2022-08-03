window.onload = function() {
    
    const tag = {
        nav: document.querySelector('#nav'),
        pages: document.querySelectorAll('#wrapper .page[data-page-id]'),
        layer: document.querySelector('#layer'),
        skillDonut: document.querySelectorAll('.donut-chart'),
        items: document.querySelectorAll('#itemList a')
    }

    const global = {
        timerInterval: ''
    }

    navControl(tag.nav.querySelectorAll('li[data-page-id]'), tag.pages, 'on', {
        preFnc: function(){
            nav.querySelectorAll('li[data-page-id]').forEach((el) => {
                el.classList.remove('on');
            })
            const pageId = document.querySelector('#wrapper article.on').getAttribute('data-page-id');
            nav.querySelector('li[data-page-id="' + pageId + '"]').classList.add('on');
        },
        2: function(){
            tag.skillDonut.forEach((el, idx) => {
                el.innerHTML = '';
                const value = +el.getAttribute('data-percent');
                makeDonut(el, value, {
                    size: 100,
                    borderSize: 5,
                    borderColor1: '#ffffff80',
                    borderColor2: '#ffb400',
                    duration: 2,
                    text: true,
                });
            });
            
        }
    });

    function navControl(navItem, pages, classNm, option) {
        navItem.forEach((el) => {

            el.addEventListener('click', () => {
                const pageId = el.getAttribute('data-page-id');
                pages.forEach((page) => {
                    page.classList.remove(classNm);
                    if(page.getAttribute('data-page-id') == pageId) {
                        page.classList.add(classNm);
                    }
                })

                if(option && typeof option.preFnc === 'function') option.preFnc();
                if(option && typeof option[pageId] === 'function') option[pageId]();
            })

        })
    }

    tag.nav.querySelectorAll('li')[1].click();

    function timerLoading(){
        const start = new Date;
        const ms = start.getMilliseconds();
        const s = start.getSeconds();

        setInterval(function(){
            const nowTime = new Date();

            const nowMs = Math.abs(ms - now.getMilliseconds());
            const nowS = Math.abs(now.getSeconds() - s);

            console.log(now.getTime());
            tag.layer.innerHTML = `${nowS}.${nowMs}`;
        });
    }

    tag.items.forEach((item) => {
        item.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            switch(type){
                case 'loadingPage':
                    tag.layer.classList.add('on');
                    setTimeout(function(){
                        tag.layer.classList.remove('on');
                    }, 3000);
                    break;
            }
        })
    })

    

    // timerLoading ();

    // setInterval(function(){
    //     const dd = new Date;
    //     const ms = dd.getMilliseconds();
    //     const s = dd.getSeconds();

    //     console.log(tag.layer);
    //     tag.layer.innerHTML = `${s}.${ms}`;
    // })

}