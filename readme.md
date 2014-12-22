MobileTab jQuery Plugin
-----------------------
MobileTab is a simple jQuery plugin which just does one job: in desktop model it layouts block elements  horizontally like traditional tabs and in mobile model it layouts block elements as what it should be by default:a 100% width block element. 

Its HTML markup is like this:
```html
<div class="mobiletab-desktop-nav">
    <span class="active">Tab1</span> 
    <span>Tab2</span>
    <span>Tab3</span>
    <span>Tab4</span>
</div>
<div class="mobiletab-content active">
    <div class="mobiletab-content-title">Tab1</div>
    <div class="mobiletab-content-block unfold">Tab1 Contents</div>
</div>
<div class="mobiletab-content inactive">
    <div class="mobiletab-content-title">Tab2</div>
    <div class="mobiletab-content-block folded">Tab2 Contents</div>
</div>
<div class="mobiletab-content inactive">
    <div class="mobiletab-content-title">Tab3</div>
    <div class="mobiletab-content-block folded">Tab3 Content</div>
</div>
<div class="mobiletab-content inactive">
    <div class="mobiletab-content-title">Tab4</div>
    <div class="mobiletab-content-block folded">Tab4 Content</div>
</div>  
```

Then link to the JS and CSS file. You will also need a working jQuery library to use this library properly.

To use this library, simply
```javascript
jQuery(".mobiletab-desktop-nav").mobileTab();
```