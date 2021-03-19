## About icon-fly-react

An animation method to make a icon fly, for react

## Install

```
npm install icon-fly-react --save
```

## Usage

```
import iconFly from 'icon-fly-react';

iconFly({
  duration: 500,
  delay: 50,
  start: { x: 200, y: 300},
  end: { x: 10, y: 10},
  icon: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.lovepik.com%2Felement%2F40067%2F7780.png_300.png&refer=http%3A%2F%2Fimg.lovepik.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618061392&t=68adfafdeeb423801d03abecd31bb14d'
})
```

## Options

| property 参数 | description 描述             | require 是否必须 | type 类型         | default 默认       |
|-------------|----------------------------|--------------|-----------------|------------------|
| duration    | duration time 持续时间         | FALSE        | number          | 500              |
| iconNum     | icon number                | FALSE        | number          | 6                |
| delay       | delay time 延迟时间            | FALSE        | number          | 50               |
| start       | start position 开始位置        | FALSE        | object          | { x: 50, y: 50 }   |
| end         | end position 结束位置          | FALSE        | object          | { x: 0, y: 0 } |
| width       | width 宽                    | FALSE        | number ｜ string |                  |
| height      | height 高                   | FALSE        | number ｜ string |                  |
| icon        | icon url 图片地址              | TRUE         | string          |                  |
| onComplete  | callback at the end 完成后的回调 | FALSE        | function        |                  |
| className   | className 类名               | FALSE        | string          | 'animate-icon'   |
