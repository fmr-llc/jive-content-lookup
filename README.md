Jive - Content Lookup
=====================

This widget is a handy tool for quickly locating content in your Jive community and obtaining various stats and reference information.  This is a [Jive](https://community.jivesoftware.com/welcome) HTML widget project that creates a self-service portal that allows users to more easily search for specific content and get pertinent indformation about it.  It utilizes the standard V3 search API and presents a clean user interface using [Bootstrap](http://getbootstrap.com/).


Installation
------------

If your Jive installation is under strict security controls for including external libraries (check with your administrator), follow the directions in Secure Installation below.  Otherwise, continue this section.

This repository has a file called "content_lookup.htm".  This is the HTML widget code.  You will need copy the code in this file and paste it into an HTML Widget on your overview page.  Here are the installation steps:

1. Open the file "content_lookup.htm" and copy the code.
4. Log into your Jive community.
5. Navigate to the site you want to create the Content Lookup widget.
6. Manage the Overview page, and drag a new HTML widget onto the page.
8. Edit the new HTML Widget.
9. Paste the code from step 1 into "Your HTML" entry field.
10. Click "Save Properties".  When the save finishes, you should have an operational Content Lookup widget.
11. Click "Publish Layout".  When the page reloads, make sure the widget is functional.


Usage
-----

Users can now search for content by doing ther following:

1. In the entry field, specify search criteria to narrow down the search to the intended content in your Jive instance.  The criteria entered can be terms from the subject, content, tags, or similar.
2. If you are searching for content that you authored, narrow the search by checking the box "Only show content where I am the author".  Otherwise, leave the box unchecked to find content authored by anyone.
3. If you only want to find uploaded files, check the box "Limit to uploaded files".  Otherwise, leave the box unchecked to find content of any type.
4. Click the Search button.

The search results will be returned in tabular format, with one row per result.  The columns returned are:

- # - Result number.
- Subject - The subject or title of the content.
- Content ID - The Jive content ID.
- Views - The number of views the content gotten.
- Likes - The number of likes the content has gotten.
- binaryURL - The binaryURL of the content.  This can be used to include javascript and css libraries hosted on your Jive instance.  Since the binaryURL does not change, even when the uploaded files are modified, this is handy to set once in your code and future updates to the libraries will automatically be pulled in by widgets.
- Size - File size in bytes (only for uploaded content)
- Type - Type of content.
- File Type - The type of uploaded file.


Secure Installation
-------------------

This section describes how to obtain and install the external libraries and modify the widget code to utilize the local copy of those libraries.  Plan with your Jive Community Manager and Administrator how to check libraries pulled off the internet and where you will be hosting them within your Jive community.  This location needs to be a place where every user that attempts to use the widgets will be able to READ the files.  Open, or Members Only groups work well, but you may want to set the library files so that only certain individuals can make updates.

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

### Update Code ###

Update the "content_lookup.htm" code in this repository by changing the external library references.

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

### Create HTML Widget ###

1. Log into your Jive community.
2. Navigate to the site you want to put the HTML widget.
3. Manage the Overview page, and drag a new HTML widget onto the page.
4. Edit the new HTML Widget.
5. Paste the updated code from above into the "Your HTML" entry field.
6. Click "Save Properties".  When the save finishes, you should have an operational Content Lookup widget.  If not, double check the steps were performed (especially 2 and 3).
25. Click "Publish Layout".  When the page reloads, make sure the widget is functional.


Contributing
------------

There are several other parameters that could be surfaced, especially for other types of uploads.  If you would like to contribute by adding one or more of these alternatives or other feature, follow the steps below:

1. Fork this project
2. Create your feature branch ( git checkout -b my-new-feature )
3. Commit your changes ( git commit -am 'Add some feature' )
4. Push to the branch ( git push origin my-new-feature )
5. Create new Pull Request