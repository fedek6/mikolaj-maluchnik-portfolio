# CSS

## BEM naming convetion
https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/

## Recalculation of font-size Photoshop -> CSS
Go to http://www.endmemo.com/sconvert/pixelpoint.php recalculate PX (PS) to Point.

After that go to http://pxtoem.com/ and calculate PT to EM.

### Example:

Formula:
```
1 px =   0.75 point
```

## How to comment SCSS
https://sass-lang.com/documentation/syntax/comments

http://sassdoc.com/annotations/

## CSS3 generators
Universal:
https://www.agenciesranked.com/createcss3/

## SCSS
Media query description & mixin:
```
    /**
     * @media: desktop
     */
    @include media-breakpoint-up($desktop-breakpoint) {
       
    }
```

### All used media queries
```

    /**
     * @media: desktop
     */
    @include media-breakpoint-up($desktop-breakpoint) { 

    }

    /**
     * @media: xxl
     */
    @include media-breakpoint-up(xxl) {

    }


    /**
     * @media: hd
     */
     @include media-breakpoint-up(hd) {

    }
```