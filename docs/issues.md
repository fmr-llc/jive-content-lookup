ISSUES
======

Widget does not work properly
-----------------------------

Double-check the directions for uploading libraries into your Jive installation, and updating the Library Loader.  Normally, if one of those is the issue, bringing up the developer utility in the browser (Google how to do this if needed) will indicate what the error is in the console.


Script and Style tags disappear
-------------------------------

If your Jive installation has untrusted users (such as external customers), and they are have the ability to create groups or projects, then your Jive installation likely has all JavaScript and Style tags scrubbed out of HTML widgets on save.  This means you will likely not be able to use these widget projects. If you are an admin, you can verify this by checking the following system property:

```
	jive.htmlwidget.cleansejavascript = true
```

If this property is set to "true", then all script and style tags are removed from the HTML widgets on save.  You should be familiar with cross site scripting attacks, and evaluate the risk of enabling scripting on your site prior to setting this to "false".


Expected content does not show up in Content Lookup
---------------------------------------------------

The Content Lookup widget operates by using Jive's V3 search API.  As such, it only returns content that is in its search index.  If your search servers are particularly slow when the content is first saved, it can take 30-60 seconds for the content to be indexed by your search service and show up in the results.  Also, Jive's search is more finnicky than a Google search.  It does not take into account "like" terms, and will only return searches for terms matching what you enter, so double-check the input terms.


Developer Console Shows Error Unexpected Character
--------------------------------------------------

You have likely mistyped something while following the directions.  Another common cause is using Microsoft Word as a text editor.  Never use Word as it uses its own version of the begin and end quotes, which are not valid HTML or JavaScript characters.  Instead of using Word, use a simple editor like Notepad.


Widget does not resize
----------------------

If you are running Jive 7 up to version 7.0.2, then you are likely running into a bug in the widget save logic.  Whenever an HTML widget is saved, Jive adds a wrapper around your code which adds a resizeMe function:

```
	<style>body{padding:0;margin:0;}</style><script>resizeMe=function(){window.parent.jive.widget.resizeMe("#widgetIframe6092714");};</script><div class="jive-html-text-widget">
```

and at the end of the code, it adds 

```
	</div>
```

Each time you save the widget code, another copy of the resizeMe wrapper is added.  In the early Jive 7 releases, previous wrappers are not stripped off prior to it adding the new code.  If you edit/save the widget three times, for instance, it will end up with 3 copies of the resizeMe wrapper around your code:

```
	<style>body{padding:0;margin:0;}</style><script>resizeMe=function(){window.parent.jive.widget.resizeMe("#widgetIframe6092714");};</script><div class="jive-html-text-widget"><style>body{padding:0;margin:0;}</style><script>resizeMe=function(){window.parent.jive.widget.resizeMe("#widgetIframe6092714");};</script><div class="jive-html-text-widget"><style>body{padding:0;margin:0;}</style><script>resizeMe=function(){window.parent.jive.widget.resizeMe("#widgetIframe6092714");};</script><div class="jive-html-text-widget">
```

and have 

```
	</div></div></div>
```

at the end of the code.  The wrapper stops working correctly once two copies are added.  If you encounter this sizing issue, check and see if Jive has added multiple resizeMe wrappers.  If so, you will need to remove all of the wrapper code before saving your widget again (which will add a copy of the resizeMe wrapper again).