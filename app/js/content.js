function attachPasteHandler(){
	$(document).on('paste', 'textarea', function(e){
		var clip = e.originalEvent.clipboardData;
		if(!clip){
			return;
		}
		
		var html = clip.getData('text/html');
		if(!html){
			return;
		}

		//HTML formatted text may have extra data but the part we care about is between the 'fragment' comment blocks
		var fragmentMatch = /<!--StartFragment-->([^]*)<!--EndFragment-->/.exec(html);
		if(!fragmentMatch){
			return;
		}
		html = fragmentMatch[1];
		
		var els = $('<div/>').append($.parseHTML(html));
		
		//Remove style elements
		$('style', els).remove();

		//Remove comment blocks
		els.contents()
			.filter(function() { return this.nodeType === 8; })
			.each(function () { $(this).remove(); });

		var didSomething = false;
		
		//Replace links with markdown style spans
		$('a',els).replaceWith(function(){
			didSomething = true;
			return '<span>[' + $(this).text() + '](' + $(this).attr('href') + ')</span>';
		});

		//If we didn't end up doing anything, might as well leave the default paste behavior to be safe
		if(!didSomething){
			return;
		}
		
		//Otherwise, cancel the normal paste and instead just insert the reformatted text
		e.preventDefault();
		window.document.execCommand('insertText', false, els.text().trim() );
	});
}

function injectToPage(func){
	var script = document.createElement('script');
	script.textContent = '(' + func + ')();';
	(document.head||document.documentElement).appendChild(script);
	script.remove();
}

injectToPage(attachPasteHandler);
