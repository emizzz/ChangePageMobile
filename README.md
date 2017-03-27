# ChangePageMobile
Multiple pages in a single HTML file, useful for simple mobile applications.

1) This plugin requires JQuery;
2) All pages must have the class "page", this set "display: none" in css;
3) The first page must have the id "page1";



EXAMPLE:
```html
<div id="ChangePagesContent">
	<div class="page" id="page1">
        	<p>ciao sono la pagina 1</p>
                <a href="#page2">Link alla pagina 2</a>
         </div>
         <div class="page" id="page2">
         	<p>ciao sono la pagina 2</p>
                <a href="#page3">Link alla pagina 3</a>
         </div>
         <div class="page" id="page3">
          	<p>ciao sono la pagina 3</p>
	</div>
</div>
```
