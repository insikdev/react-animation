# react-animation

## Overview

## Features

1. Toggle Button

-

## Dependencies

- `create-react-app-typescript`
- `framer-motion`
- `styled-components`

## Note

### 1. component 만들기

- motion에서 제공하는 HTML Tag 사용
- `<motion.div>` OR `styled(motion.div)`

### 2. props

#### 2-1. initial / animate

- initial : animation 전 style
- animate : animation 후 style
- `<motion.div initial={{ scale: 1 }} animate={{ scale: 1.5 }} />`

#### 2-2. transition

- animation 속성 조절 (delay, duration)
- animate props 내부에서 사용 OR 개별 사용
- delayChildren : children 일괄 적용
- stagerChildren : chlidren 순차 적용
- `<motion.div animate={{ x: 100 }} transition={{ delay: 1 }}/>`

#### 2-3. variants

- style을 object로 관리 가능 (animate, initial, whileFocus, whileTap, whileHover 대체 가능)

```
const variants = {
    start: { scale: 1 },
    end: { scale: 1.5 },
};

<motion.div variants={variants} initial="start" animate="end" />;

```

#### 2-4. while

- whileHover, whileTap, whileDrag
- `<motion.div whileHover={{ scale: 1.5 }} />`

#### 2-5. drag

- drag : 제한 없음
- drag="x" : x축 이동만 가능
- drag="y" : y축 이동만 가능
- dragConstraints : useRef를 사용하여 영역 통제 가능
- dragSnapToOrigin : drag 후 제자리로 돌아옴
- `<motion.div drag="x" />`

### 3. MotionValue

- MotionValue : animation의 값 추적
- MotionValue 값의 변경은 rerender를 일으키지 않음
- component에 MotionValue 값 주입 => style prop에 사용
- useTransform = interpolation(RN)
- useViewportScroll

```
const x = useMotionValue(0);
x.set(100);
x.get();

<motion.div style={{ x }} />
```
