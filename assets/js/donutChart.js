function makeDonut(target, value, option){
    const donutTarget = typeof target == 'object' ? target : document.querySelector(target);
    const leftSide = document.createElement('DIV');
    const rightSide = document.createElement('DIV');
    const leftSideInner = document.createElement('DIV');
    const rightSideInner = document.createElement('DIV');
    const text = document.createElement('SPAN');

    donutTarget.style.cssText += `
        border: ${option.borderSize}px solid ${option.borderColor1};
        border-radius: ${option.size}px;
        width: ${option.size}px;
        height: ${option.size}px;
        position: relative;
        text-align: center;
        box-sizing: border-box;
    `;

    donutTarget.appendChild(leftSide);
    donutTarget.appendChild(rightSide);
    donutTarget.appendChild(text);

    text.style.cssText += `
        position: relative;
        z-index: 1;
    `;

    leftSide.style.cssText += `
        width: ${(option.size / 2) + 2}px;
        height: ${option.size + 4}px;
        overflow: hidden;
        position: absolute;
        top: -${option.borderSize + 2}px;
        box-sizing: border-box;
    `;

    rightSide.style.cssText = leftSide.style.cssText;

    leftSide.style.cssText += `left: -${option.borderSize + 2}px;`;
    rightSide.style.cssText += `right: -${option.borderSize + 2}px`;

    leftSide.appendChild(leftSideInner);
    rightSide.appendChild(rightSideInner);

    leftSideInner.style.cssText += `
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        border: ${option.borderSize + 4}px solid ${option.borderColor2};
        transform: rotate(0);
    `;

    rightSideInner.style.cssText = leftSideInner.style.cssText;

    leftSideInner.style.cssText += `
        right: -100%;
        border-radius: 0 ${option.size + 4}px ${option.size + 4}px 0;
        border-left: 0;
        transform-origin: 0 50%;
    `;

    rightSideInner.style.cssText += `
        left: -100%;
        border-radius: ${option.size + 4}px 0 0 ${option.size + 4}px;
        border-right: 0;
        transform-origin: 100% 50%;
    `;

    leftSide.classList.add('donut-lr', 'donut-l');
    rightSide.classList.add('donut-lr', 'donut-r');

    const deg = value / 100 * 360;

    if(option.text){
        let incNum = 0;
        text.innerHTML = incNum++ + '%';
        let interval = setInterval(function(){
            text.innerHTML = incNum++ + '%';
            if(incNum > value) interval = clearInterval(interval);
        }, 1000 / value);
    }

    if(deg >= 180){
        const delay = 180 / deg;
        rightSideInner.style.transition = 'all ' + delay + 's linear';
        leftSideInner.style.transition = 'all ' + (1 - delay) + 's linear ' + delay + 's';
        setTimeout(function(){
            rightSideInner.style.transform = 'rotate(180deg)';
            leftSideInner.style.transform = 'rotate(' + (deg - 180) + 'deg)';
        })
    }else{
        rightSideInner.style.transition = 'all 1s linear';
        setTimeout(function(){
            rightSideInner.style.transform = 'rotate(' + deg + 'deg)';
        })
    }
}