import TWEEN from '@tweenjs/tween.js';

const iconFly = (config, container = document.body) => {
  const {
    duration = 500,
    iconNum = 6,
    delay = 50,
    start = { x: 50, y: 50 },
    end = { x: 0, y: 0 },
    width = 25,
    height = 25,
    icon = '',
    onComplete,
    className = 'animate-icon'
  } = config || {};

  if(!icon){
    throw new Error("Property 'icon' is required!");
  }

  let iconPool = Array(Number(iconNum)).fill(start);

  /*
  * t: current time（当前时间）；
  * b: beginning value（初始值）；
  * c: change in value（变化量）；
  * d: duration（持续时间）。
  */
  const linear = (t, b, c, d) => {
    return (c * t) / d + b;
  }

  //设置动画循环
  const animate = (time) => {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate);

  let complete = 0;
  for (let i = 0; i < iconPool.length; i++) {
    const animateIcon = document.createElement('div');
    animateIcon.classList.add(className);
    animateIcon.style.position = 'absolute';
    animateIcon.style.width = width + 'px';
    animateIcon.style.height = height + 'px';
    animateIcon.style.backgroundImage = `url(${icon})`;
    animateIcon.style.backgroundRepeat = 'no-repeat';
    animateIcon.style.backgroundSize = 'contain';
    animateIcon.style.transform = `translate(${iconPool[i].x}px,${iconPool[i].y}px)`;
    animateIcon.style.opacity = 0;
    container.appendChild(animateIcon);

    const time = { v: 0 };
    const tween = new TWEEN.Tween(time)
      .to({ v: 1 }, Number(duration))
      .easing(TWEEN.Easing.Cubic.In)
      .onUpdate(({v}) => {
        const x = linear(time.v, iconPool[i].x, end.x - iconPool[i].x, 1);
        const y = linear(time.v, iconPool[i].y, end.y - iconPool[i].y, 1);
        animateIcon.style.transform = `translate(${x}px,${y}px)`;
        if (v <= 0.12) {
          animateIcon.style.opacity = `${Math.min(1, v / 0.12)}`;
        }
        if (v > 0.7) {
          animateIcon.style.opacity = `${Math.max(0, 1 - (v - 0.7) / (1 - v))}`;
        }
      })
      .onComplete(()=>{
        container.removeChild(animateIcon);
        complete++;
        if(complete === iconPool.length){
          onComplete && onComplete();
        }
      })
      .delay(Number(delay) * i)
      .start();
  }
};

export default iconFly;