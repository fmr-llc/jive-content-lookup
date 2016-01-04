/*
Jive - Include Library

Copyright (c) 2015 Fidelity Investments
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

FILE DESCRIPTION
This is a javascript library that controls the importing of other libraries for the 
Jive widget projects.  Each library to be used will need to be uploaded into Jive as 
an Uploaded File, and then the contentID of the Jive object filled into the appropriate 
entry in the list below.

To ease the discovery of contentID for each uploaded file, reference the Content Lookup
widget project: ...
*/
var fidosreg_id = 'b764a0a9536448345dc227af95e192521d337b5e4c3560c859b89ecd0407004a';

var $j = jQuery.noConflict(); // Sets j to the new copy of jQuery, and $ is returned to the normal copy of jQuery in Jive
(function($j)
{
	var libraries = {};
	libraries['accordion_widget_builder.css'] = { contentID: '0' };

	libraries['accordion_widget_builder.js'] = { contentID: '0' };

	libraries['accordion_widget.css'] = { contentID: '0' };

	libraries['accordion_widget.js'] = { contentID: '0' };

	libraries['bootstrap.css'] = { contentID: '0' };

	libraries['bootstrap.js'] = { contentID: '0' };

	libraries['bootstrap-datepicker.css'] = { contentID: '0' };

	libraries['bootstrap-datepicker.js'] = { contentID: '0' };

	libraries['bootstrap-theme.css'] = { contentID: '0' };
	
	libraries['content_viewer_widget.css'] = { contentID: '0' };
	
	libraries['content_viewer_widget.js'] = { contentID: '0' };
	
	libraries['export_widget.css'] = { contentID: '0' };
	
	libraries['export_widget.js'] = { contentID: '0' };
	
	libraries['form_widget_builder.css'] = { contentID: '0' };
	
	libraries['form_widget_builder.js'] = { contentID: '0' };
	
	libraries['form_widget.css'] = { contentID: '0' };
	
	libraries['form_widget.js'] = { contentID: '0' };
	
	libraries['form_report_widget_builder.css'] = { contentID: '0' };
	
	libraries['form_report_widget_builder.js'] = { contentID: '0' };
	
	libraries['form_report_widget.css'] = { contentID: '0' };
	
	libraries['form_report_widget.js'] = { contentID: '0' };
	
	libraries['jscolor.js'] = { contentID: '0' };

	libraries['menu_builder.css'] = { contentID: '0' };
	
	libraries['menu_builder.js'] = { contentID: '0' };
	
	libraries['menu.css'] = { contentID: '0' };
	
	libraries['menu.js'] = { contentID: '0' };
	
	libraries['nav_bar_builder.css'] = { contentID: '0' };
	
	libraries['nav_bar_builder.js'] = { contentID: '0' };
	
	libraries['nav_bar.css'] = { contentID: '0' };
	
	libraries['nav_bar.js'] = { contentID: '0' };
	
	libraries['picture_carousel_builder.css'] = { contentID: '0' };
	
	libraries['picture_carousel_builder.js'] = { contentID: '0' };
	
	libraries['picture_carousel.css'] = { contentID: '0' };
	
	libraries['picture_carousel.js'] = { contentID: '0' };
	
	libraries['presentation_widget_builder.css'] = { contentID: '0' };
	
	libraries['presentation_widget_builder.js'] = { contentID: '0' };
	
	libraries['presentation_widget.css'] = { contentID: '0' };
	
	libraries['presentation_widget.js'] = { contentID: '0' };
	
	libraries['reveal.js'] = { contentID: '0' };
	
	libraries['search_widget_builder.css'] = { contentID: '0' };
	
	libraries['search_widget_builder.js'] = { contentID: '0' };
	
	libraries['search_widget.css'] = { contentID: '0' };
	
	libraries['search_widget.js'] = { contentID: '0' };
	
	libraries['team_listing_widget_builder.css'] = { contentID: '0' };
	
	libraries['team_listing_widget_builder.js'] = { contentID: '0' };
	
	libraries['team_listing_widget.css'] = { contentID: '0' };
	
	libraries['team_listing_widget.js'] = { contentID: '0' };
	
    $j.extend(true,
    {
        load_library : function(library)
        {
			// Check if the library exists in the list
			if (libraries[library] == null) {
				alert('ERROR: Library ' + library + ' is not one of the configured libraries');
				return false;
			}

			// If the library has not had its contentID set, we need to alert the user
			if (libraries[library].contentID == '0') {
				alert('ERROR: Please tell your administrator that ' + library + ' is not configured with a content ID.');
				return false;
			}

			// Add a line in the header of the HTML DOM to load the library using the contentID to generate the binaryURL to the file
			if (library.split('.').pop().toLowerCase() == 'css') {
				$j("head").append('<li'+'nk href="/api/core/v3/attachments/file/' + libraries[library].contentID + '/data" rel="stylesheet" media="screen">');
			} else {
				$j("head").append('<scr'+'ipt src="/api/core/v3/attachments/file/' + libraries[library].contentID + '/data"></scr'+'ipt>');
			}
        }
    });

})(jQuery);