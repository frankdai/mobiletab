MobileTab jQuery Plugin
-----------------------
MobileTab is a simple jQuery plugin which just does one job: in desktop model it layouts block elements  horizontally like traditional tabs and in mobile model it layouts block elements as what it should be by default:a 100% width block element. 

[checkout the demo](http://frankdai.github.io/mobiletab/)

Its HTML markup is like this:
```html
<div class="mobiletab-desktop-nav">
    <span class="active">Tab1</span> 
    <span>Tab2</span>
    <span>Tab3</span>
    <span>Tab4</span>
</div>
<div class="mobiletab-content">
    <div class="mobiletab-content-title">Tab1</div>
    <div class="mobiletab-content-block unfold">Tab1 Contents</div>
</div>
<div class="mobiletab-content">
    <div class="mobiletab-content-title">Tab2</div>
    <div class="mobiletab-content-block">Tab2 Contents</div>
</div>
<div class="mobiletab-content">
    <div class="mobiletab-content-title">Tab3</div>
    <div class="mobiletab-content-block">Tab3 Content</div>
</div>
<div class="mobiletab-content">
    <div class="mobiletab-content-title">Tab4</div>
    <div class="mobiletab-content-block">Tab4 Content</div>
</div>  
```

Then link to the JS file. You will also need a working jQuery library to use this library properly.

To use this library, simply
```javascript
jQuery(".mobiletab-desktop-nav span").mobileTab();
```

Currently it will only accept only one option: 
```javascript
jQuery(".mobiletab-desktop-nav span").mobileTab({breakpoint:700});
```

Please you have to evoke the function on span elements so that it will work out.  

And this will set the breakpoint similarly as media query in CSS. Whenever you click one tab/fold, its title and content will be added with an 'active' class name for better styling. In the future I will support more options. 