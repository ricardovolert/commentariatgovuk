function markDocumentLinks() {
	jQuery('a[href*=".pdf"]').addClass('pdfdocument').append(' (PDF document)');
	jQuery('a[href*=".xls"]').addClass('xlsdocument').append(' (Excel document)');
	jQuery('a[href*=".doc"]').addClass('docdocument').append(' (Word document)');
	jQuery('a[href*=".txt"]').addClass('txtdocument').append(' (Text document)');
	jQuery('a[href*=".csv"]').addClass('docdocument').append(' (CSV document)');
	return true;	
}

function getCookie(name) {
    var dcookie = document.cookie; 
    var cname = name + "=";
    var clen = dcookie.length;
    var cbegin = 0;
        while (cbegin < clen) {
        var vbegin = cbegin + cname.length;
            if (dcookie.substring(cbegin, vbegin) == cname) { 
            var vend = dcookie.indexOf (";", vbegin);
                if (vend == -1) vend = clen;
            return unescape(dcookie.substring(vbegin, vend));
            }
        cbegin = dcookie.indexOf(" ", cbegin) + 1;
            if (cbegin == 0) break;
        }
    return null;
}

function setCookie(name,value,expires,path,domain,secure) {
	var today = new Date();
	today.setTime( today.getTime() );
	
	if ( expires ) {
		expires = expires * 1000 * 60; // time in minutes
	}
	
	var expires_date = new Date( today.getTime() + (expires) );
	
	document.cookie = name + "=" +escape( value ) +
	( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
	( ( path ) ? ";path=" + path : "" ) +
	( ( domain ) ? ";domain=" + domain : "" ) +
	( ( secure ) ? ";secure" : "" );

    return null;
}


function gaTrackDownloadableFiles() {

	var links = $('a');

	for(var i = 0; i < links.length; i++) {
		if (links[i].href.indexOf('.pdf') != "-1") {
			$(links[i]).attr("onclick","javascript: _gaq.push(['_trackEvent', 'Downloads', 'PDF', '"+links[i].href+"']);");
		} else if (links[i].href.indexOf('.csv') != "-1") {
			$(links[i]).attr("onclick","javascript: _gaq.push(['_trackEvent', 'Downloads', 'CSV', '"+links[i].href+"']);");
		} else if (links[i].href.indexOf('.doc') != "-1") {
			$(links[i]).attr("onclick","javascript: _gaq.push(['_trackEvent', 'Downloads', 'DOC', '"+links[i].href+"']);");
		} else if (links[i].href.indexOf('.ppt') != "-1") {
			$(links[i]).attr("onclick","javascript: _gaq.push(['_trackEvent', 'Downloads', 'PPT', '"+links[i].href+"']);");
		} else if (links[i].href.indexOf('.rtf') != "-1") {
			$(links[i]).attr("onclick","javascript: _gaq.push(['_trackEvent', 'Downloads', 'RTF', '"+links[i].href+"']);");
		} else if (links[i].href.indexOf('.xls') != "-1") {
			$(links[i]).attr("onclick","javascript: _gaq.push(['_trackEvent', 'Downloads', 'XLS', '"+links[i].href+"']);");
		}
	}

	return true;	
}