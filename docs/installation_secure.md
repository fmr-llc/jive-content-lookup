Secure Installation
===================

This section describes how to obtain and install the external libraries and modify the widget code to utilize the local copy of those libraries.  Plan with your Jive Community Manager and Administrator how to check libraries pulled off the internet and where you will be hosting them within your Jive community.  This location needs to be a place where every user that attempts to use the widgets will be able to READ the files.  Open, or Members Only groups work well, but you may want to set the library files so that only certain individuals can make updates.


Download External Libraries
---------------------------

### jQuery ###
[jQuery](https://jquery.com/) is commonly utilized javascript library.  Jive instances already include a version of this library, but the included version may be too old for newer external libraries to utilize it.  If you are using a library that requires a newer version of jQuery, you can do the following:

1. Go to [jQuery](http://jquery.com/download/)
2. Download the latest version that meets your requirements.
3. Log into your Jive community.
4. Navigate to the location for your library files to be uploaded.
5. Create an Uploaded File.  Drag the downloaded js file from step 2 to the file section of the upload.  Set the file name, description, and other options appropriately for your community.  Click Publish.
6. Once published, right click the Download link on the page, and copy the link address.  You will use this in the Update Code section below.

### Bootstrap ###
[Bootstrap](http://getbootstrap.com/) is a library that this widget uses for the user interface.  Follow these instructions to download the latest version and upload to your community:

1. Go to [Bootstrap](http://getbootstrap.com/)
2. Click on Download Bootstrap.
3. On the download page under Bootstrap, click the Download Bootstrap button.  The full Bootstrap library will be downloaded to you in a zip file.
4. Open the downloaded zip file.
5. Expand the bootstrap distribution folder.
6. Expand the css folder.
7. Drag the file "bootstrap.min.css" to a local temp folder of your choice.  You will be uploading this to your Jive community below.
8. Navigate back up a folder, and then expand the js folder.
9. Drag the file "bootstrsp.min.js" to the local temp folder.  You will also be uploading this to your Jive community below.
10. Log into your Jive community.
11. Navigate to the upload location for your library files.
12. Create a Uploaded File.  Drag the file "bootstrap.min.css" from your temp folder to the file section of the upload.  Set the file name, description, and other options appropriately for your community.  Click Publish.
13. Once "bootstrap.min.css" is published, right click the Download link on the page, and copy the link address.  You will use this in step 2 of the Installation.

15. Create another Uploaded File.  Drag the file "bootstrap.min.js" from your temp folder to the file section of the upload.  Set the file name, description, and other options appropriately for your community.  Click Publish.
16. Once "bootstrap.min.js" is published, right click the Download link on the page, and copy the link address.  You will use this in step 3 of the Installation.


Update Code
-----------

Update the "content_lookup.htm" code in this repository by changing the external library references for the external references as follows:

#### Bootstrap CSS ####
Update the Bootstrap CSS library by changing the following line:

```
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
```

to the version on your jive community, for example:

```
    <link rel="stylesheet" href="https://myjiveinstance.mycompany.comh/servlet/JiveServlet/downloadBody/421109-102-2-1031405/bootstrap.min.css">
```

#### jQuery ####

If needed, update the jQuery library by changing the following line:

```
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
```

to the version on your jive community, for example:

```
    <script src="https://myjiveinstance.mycompany.comh/servlet/JiveServlet/downloadBody/421109-102-2-1031405/jquery.min.js"></script>
```

#### Bootstrap Javascript ####

Update the Bootstrap Javascript library by changing the following line:

```
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
```

to the version on your jive community, for example:

```
    <script src="https://myjiveinstance.mycompany.comh/servlet/JiveServlet/downloadBody/421109-102-2-1031405/bootstrap.min.js">
```

Create HTML Widget
------------------

1. Log into your Jive community.
2. Navigate to the site you want to put the HTML widget.
3. Manage the Overview page, and drag a new HTML widget onto the page.
4. Edit the new HTML Widget.
5. Paste the updated code from above into the "Your HTML" entry field.
6. Click "Save Properties".  When the save finishes, you should have an operational Content Lookup widget.  If not, double check the steps were performed (especially 2 and 3).
7. Click "Publish Layout".  When the page reloads, make sure the widget is functional.
