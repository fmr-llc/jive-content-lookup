Jive - Content Lookup
=====================

This widget is a handy tool for quickly locating content in your Jive community and obtaining various stats and reference information.  This is a [Jive](https://community.jivesoftware.com/welcome) HTML widget project that creates a self-service portal that allows users to more easily search for specific content and get pertinent indformation about it.  It utilizes the standard V3 search API and presents a clean user interface using [Bootstrap](http://getbootstrap.com/).


Installation
------------

If your Jive installation is under strict security controls for including external libraries (check with your administrator), follow the directions [Secure Installation](docs/installation_secure.md)

Otherwise, follow the directions in [Basic Installation](docs/installation_basic.md)



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


Contributing
------------

To contribute, you must certify you agree with the [Developer Certificate of Origin](http://developercertificate.org/)
by signing your commits via `git -s`. To create a signature, configure your user name and email address in git.
Sign with your real name, do not use pseudonyms or submit anonymous commits.

In terms of workflow:

1. For significant changes or improvement, create an issue before commencing work.
2. Fork the respository, and create a branch for your edits.
3. Make sure to test code before committing your changes.
4. Commit your changes and issue a pull request.


License
-------

(c) 2015 Fidelity Investments
Licensed under the Apache License, Version 2.0
