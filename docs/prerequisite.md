PREREQUISITES
=============


JavaSript
---------

Jive disables JavaScript from HTML widgets by default.  This is a security measure to prevent cross site scripting by malicious users.  This makes sense for externally facing sites and sites with untrusted users with the ability to create spaces, groups, or projects.  These installations that allow any user to become the admin of a place, manage the overview page, place HTML widgets, and put unvetted content on the site are at risk for malicious activity.  If HTML widgets are allowed to have JavaScript, then a user can create a malicious widget on a page and either redirect unsespecting users to the page, or manipulate Jive to display the content in the activity stream.  If your Jive installation has untrusted users, and they are have the ability to create spaces, groups, or projects, then your Jive installation likely has all JavaScript and Style tags scrubbed out of HTML widgets on save.  This means you will likely not be able to use these widget projects, and will need to wait for the projects to be converted to add-ons or apps. If you are an admin, you can verify this by checking the following system property:

```
	jive.htmlwidget.cleansejavascript = true
```

If this property is set to "true", then all script and style tags are removed from the HTML widgets on save.  You should be familiar with cross site scripting attacks, and evaluate the risk of enabling scripting on your site prior to setting the setting to "false".


Scan this archive
-----------------

If your company requires code obtained from untrusted sources to be scanned before use, you should give this archive to them now to have it scanned before proceeding.


Determine Library File Location
-------------------------------

Talk with your administrator, community manager, and security to determine where library files should be located within your Jive instance.  The location must allow at least read access to all users.  Open, or Members Only groups work well, as does a Space with the correct access controls set.  You should prevent normal users from making updates to the library files to maintain a tighter control on them.  If the uploads are put into an Open group, you should set the authors so that only certain individuals can make updates.  All of the widgets in this series will utilize these library files, so it is a common point of entry that needs to be protected from malicious and errant code into your environment.