Recommended reading:
INCLUSIVE Design Patterns, Coding Accessibility Into Web Design by Heydon Pickering, Pub Smashing Magazine, 2016

“Gang of Four”
Four essential elements of a design Pattern
 - pattern Name, problem, solution, Consequences

off-canvas pattern - slide from side and hides

look at what is in reset in 
html 100% - 16 pixels - don't use pixel ever

3 favorite debugging tools
1) validator
2) console dev tools

HW- try shuffle the tables
Ethan Marcotte's

- A List Apart https://alistapart.com/
- event apart https://aneventapart.com/

Ethan it takes three core ingredients:
• A flexible, grid-based layout
• Flexible images and media
• Media queries, a module from CSS3 specification

https://aneventapart.com/event/san-francisco-2017

Converting Grid in Pixels to Percent
Convert to percent with the same equation target/context = result 900/960 = 0.9375 or 93.75%
566/900 = 62.89% for left column 331/900 = 36.78%  (approxm 60% 30% columns)

industry standard use 12 grid
12/80
14/40

Semantic UI - frame work

Advance topic design Patterns

http://searchpatterns.org/index.php

What is in reset: Heights in some browsers

How to make flid image?
css img{ max-width: 100% }

img,embed, object, video {
  max-width: 100%;
}

.feature {
  overflow: hidden;
}

.feature img {
  display: block;
  max-width: auto;
}

hint: use following to image responsive
img {
  max-width: 92%;
  margin: 4%;
}

img.hero {
  max-width: 100%;
  margin: 0;
}

Richard Rutter’s experiments at
http://bkaprt.com/rwd2/13/

Fixed imag
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="en" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<title> | clagnut/sandbox</title>
<style type="text/css">
@import url(/css/sandbox.css);
#img1 {}
#img2 IMG {width:100%;}
#img3 IMG {width:100%; max-width:320px;}
#img8 IMG {max-width:100%;}
#img4 {overflow:hidden;}
#img5 {overflow:hidden;}
#img5 IMG {float:right;}
#img6 {background:url(/sandbox/imagetests/wideimg.png) no-repeat center; height:171px}
#img7 {background:url(/images/duranduran.jpg) no-repeat center; height:240px}
</style>

</head>

<body>
<h4 id="logo"><a href="/"><img src="/images/clagnut.png" alt="Clagnut" /></a></h4>
<div id="content">
<div id="intro">
<p>See also:</p>
<ul>
<li><a href="/sandbox/imagetest2/">Experiments with three images</a></li>
<li><a href="/sandbox/imagetest3/">Experiments with max-width and images</a></li>
</ul>
 
<p><strong>Please try <a href="javascript:moveTo(50,5); window.resizeTo(600,screen.availHeight-80)" title="Resize window to 600px wide">shrinking your window</a> with different browsers and observe what happens to the different images.</strong></p>

</div> <!-- /intro -->

<h2>1. A very wide image contained in a paragraph with no styles applied</h2>
<p id="img1"><img src="/sandbox/imagetests/wideimg.png" alt=""></p>
<p><em><a href="http://www.1976design.com/blog/">Dunstan</a> kindly lent me this charming image.</em></p>
<p>Pellentesque in felis quis tortor consectetuer condimentum. Phasellus nibh nibh, interdum sit amet, sagittis nec, cursus sit amet, dolor. Duis scelerisque tortor. Aenean nec turpis. Curabitur nulla mauris, gravida eu, ultrices id, aliquam nec, mauris. </p>



<h2>2. A very wide image with a width of 100% (no height set)</h2>
<p id="img2"><img src="/sandbox/imagetests/wideimg.png" alt=""></p>
<p>Pellentesque in felis quis tortor consectetuer condimentum. Phasellus nibh nibh, interdum sit amet, sagittis nec, cursus sit amet, dolor. Duis scelerisque tortor. Aenean nec turpis. Curabitur nulla mauris, gravida eu, ultrices id, aliquam nec, mauris. </p>



<h2>3. A medium image with a width of 100% and a max-width equal to the actual image size (no height set)</h2>
<p id="img3"><img src="/images/duranduran.jpg" alt=""></p>
<p>Pellentesque in felis quis tortor consectetuer condimentum. Phasellus nibh nibh, interdum sit amet, sagittis nec, cursus sit amet, dolor. Duis scelerisque tortor. Aenean nec turpis. Curabitur nulla mauris, gravida eu, ultrices id, aliquam nec, mauris. </p>



<h2>8. A medium image with a max-width of 100% (no height set)</h2>
<p id="img8"><img src="/images/duranduran.jpg" alt=""></p>
<p>Pellentesque in felis quis tortor consectetuer condimentum. Phasellus nibh nibh, interdum sit amet, sagittis nec, cursus sit amet, dolor. Duis scelerisque tortor. Aenean nec turpis. Curabitur nulla mauris, gravida eu, ultrices id, aliquam nec, mauris. </p>



<h2>4. A very wide image with overflow:hidden applied to its container</h2>
<p id="img4"><img src="/sandbox/imagetests/wideimg.png" alt=""></p>
<p>Pellentesque in felis quis tortor consectetuer condimentum. Phasellus nibh nibh, interdum sit amet, sagittis nec, cursus sit amet, dolor. Duis scelerisque tortor. Aenean nec turpis. Curabitur nulla mauris, gravida eu, ultrices id, aliquam nec, mauris. </p>



<h2>5. A very wide image floated right with overflow:hidden applied to its container</h2>
<p id="img5"><img src="/sandbox/imagetests/wideimg.png" alt=""></p>
<p>Pellentesque in felis quis tortor consectetuer condimentum. Phasellus nibh nibh, interdum sit amet, sagittis nec, cursus sit amet, dolor. Duis scelerisque tortor. Aenean nec turpis. Curabitur nulla mauris, gravida eu, ultrices id, aliquam nec, mauris. </p>



<h2>6. A very wide image centered as a background with container height set to image height</h2>
<p id="img6"></p>
<p>Pellentesque in felis quis tortor consectetuer condimentum. Phasellus nibh nibh, interdum sit amet, sagittis nec, cursus sit amet, dolor. Duis scelerisque tortor. Aenean nec turpis. Curabitur nulla mauris, gravida eu, ultrices id, aliquam nec, mauris. </p>



<h2>7. As (6) with a medium image</h2>
<p id="img7"></p>
<p>Pellentesque in felis quis tortor consectetuer condimentum. Phasellus nibh nibh, interdum sit amet, sagittis nec, cursus sit amet, dolor. Duis scelerisque tortor. Aenean nec turpis. Curabitur nulla mauris, gravida eu, ultrices id, aliquam nec, mauris. </p>



</div> <!-- /content -->

</body>
</html>

Font Awesome (special fonts) or Halflings (Bootstrap components) should be used SVG.
https://getbootstrap.com/docs/3.3/components/
http://fontawesome.io/examples/

If you want change margin, do it under <div p> level.

-play around with Table Flexibility:
Shuffle the order

@media (max-width: 480px) {
  .box {
    display: block;
    width: 100%;
    min-height: 8em;
    line-height: 8em;
  }
  .three {
    display: table-caption;
  }
  .four {
    display: table-header-group;
  }
  .one {
    display: table-footer-group;
  }

}

display-tableFlexibility.css under week1

## ftp Access for hw
cyberduck
ftp

server: tmhardy.com 
URD: ftp://rwd2017fa@tmhardy.com@tmhardy.com
username: rwd2017fa@tmhardy.com
Password is Monday09-18-17

big image size 700 x 300

break point?

media query: css command that browser query what it is


http://viewportsizes.com/

1280 
1450

Media query Developer tools
Spoofing the query parameters: spoofing the kind of device


http://typecast.com/blog/a-more-modern-scale-for-web-typography

READ this and come back with questions
How is Bootstrap doing CSS for typography?  READ Bootstrap CSS

Robert Brginghurst's book - have the fall back
When using a special font- if the font

FLOUT (Flash of Unstyled Text) or FOIT (Flash of Invisible Text)

- google font for heading
- h1, h2, h3
know what is residents on 
https://www.fontsquirrel.com/

## list of imporatance:

- Material design: CSS build for marterial design
- SemanticUI:

- resource: skeleton htm
https://html5bones.com/
http://www.initializr.com/

HW week2) 
- images YOurs/credited, keep images same sizes
- 2 media queries
- Responsive Menu
- fix fonts
- 

- READ ahead for next class.

slider min 1440 width, 500 px

HTML5 image source set

file> export> jpg for webExprt Image as jpeg Quality 80 ok
Note under adv option: "Use quality settings from orig img
     if img was .jpg before opening in gimp > this setting 
     may give you the best result

png: used for graphics that contain areas of solid color like 
logos, icons, buttons and screen shots that don't work as 
well as jpegs. png support transparency (jpeg does not)

- unlike jpg, png you can use max compression since it doesn't 
effect the quality at all.

- crop img: shift + c
- while position cursor inside the area of my cropping, 
   Nudge: crop by pressing arrow keys (small movement)
   Large Nudge: shift arrow
- Fixed: Aspect ratio: 2: 1 (width Height)
or Size: number of pixels  ex) crop 1024 x 768 pixel in landscape
orientation

OR crop out in print size:
Go to Size and select inches: 6 inch 4 inch

once it is all good to go for cropping > click the inside img area
- crop done

OR 
from crop tool > image tool bar > crop to selection

minimun 1440 x 500 px

images credit https://github.com/stevenwanderski/bxslider-4
Steven Wanderski
export 80 quality (set use qulity setting from orig. img)

flower dimension: 350x323

pinktree.jpg
image credit Sunrays by Rob Janssen
https://www.pinterest.com/pin/39969515419890501/

img water.jpg
https://www.pinterest.com/pin/368661919480062895/


mountain.img
image credit Peach Blossom Colony series (2011) by Yang Yongliang
 https://quod.lib.umich.edu/t/tapic/x-7977573.0005.202-00000008/1?subview=detail;view=entry


butterfly.img
http://fullhdwall.com/wallpaper-of-nature.html/cool-nature


maudie search result
https://www.google.com/search?rlz=1C5CHFA_enUS714US716&biw=1594&bih=892&tbm=isch&sa=1&q=maudie+400+x+400+cows&oq=maudie+400+x+400+cows&gs_l=psy-ab.3...49535.51101.0.51245.7.6.1.0.0.0.90.421.6.6.0....0...1.1.64.psy-ab..0.0.0....0.GF-U8zlj8qY#imgdii=bKLP28ER4puB8M:&imgrc=ihrKOlWHxY_RKM:

credit:
https://shop.artgalleryofnovascotia.ca/products/maud-lewis-matted-print

maudie paint http://sonyclassics.com/maudie/

info about her
https://www.facebook.com/MaudieTheMovie/photos/a.661796387177694.1073741825.346958805328122/1088040257886636/?type=3&theater

## Week 3 ##
- 72 dpi
optimize the images
jpeg
try png8 jpeg 
faces png 
others jpeg

Fix
- title wraps (give more width)
- background color 

h2{ 
  letter-spacing: 0.08em;  // https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning
}

bootstrp max-width: 100%
all pictures set max-width 100% (for fit to the screen for all the pictures)


- People love fontAwesome - instead of halflings

center block -- 

put social icons: in the footer

HW: 
1) responsive bootstrap add nav bar
2) Social link on the footer (use font awesome)


-- Week 4 
review_ heggy needs to update her file

Walker Evans / Biography & Images - Atget Photography.com / Videos Books & Quotes

http://getbootstrap.com/docs/4.0/components/forms/
sr = screen reader

https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-forms.php
great resource to learn about bootstrap - try this code style

http://ui-patterns.com/blog/11-tips-to-increase-form-conversion

http://ui-patterns.com/patterns/InputFeedback

Form:
Date Picker
http://formvalidation.io/examples/bootstrap-datepicker/

- grid system

https://getbootstrap.com/docs/3.3/css/#grid

https://getbootstrap.com/docs/3.3/css/#grid-offsetting

push and pull

- Nesting columns
https://getbootstrap.com/docs/3.3/css/#grid-nesting

- Column ordering
https://getbootstrap.com/docs/3.3/css/#grid-column-ordering
  * try test of push-3 push-9
  * when I get to small, I want to swap left and right

  * CSS zen garden
  http://www.csszengarden.com/

- class push pull example slide 59  IN lecture notes week3

## bootstrap date picker
https://github.com/Eonasdan/bootstrap-datetimepicker

http://tmhardy.com/dev/ucsc/rwd2017fa/teresa/ProjectB/altforms.html

forms
file:///Users/Heggy/Downloads/Teacher%20Version/ProjectB/forms.html

scrollspy
http://tmhardy.com/dev/ucsc/rwd2017fa/teresa/ProjectB/food-scrollspy.html

- slider
https://www.siggraph.org//

google webmaster tools


## nivo-slider vs flex-slider
- fliex-slider d/l:
http://flexslider.woothemes.com/

- Nivo-slider d/l:
http://www.jqueryscript.net/slider/nivo-slider.html