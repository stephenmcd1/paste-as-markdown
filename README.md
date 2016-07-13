# Paste as Markdown

## Features

### Summary

When pasting formatted text (copied from Word for example) into simple `<textarea />` elements, all the formatting is lost.  However, if the textarea support Markdown syntax, this extension can help by converting the formatting into comparable Markdown syntax as you paste.

### Picture time

As an example, say you have something like this copied on your clipboard:

![Formatted Text with a Link](https://raw.githubusercontent.com/stephenmcd1/paste-as-markdown/master/assets/FormattedTextWithLink.png)

If you then try to paste that into a comment in Trello, you'll be sad when you see:

![Pasting as Plain Text](https://raw.githubusercontent.com/stephenmcd1/paste-as-markdown/master/assets/PastePlainText.png)

But with this extension, you'll be happy when you see:

![Pasting as Plain Text](https://raw.githubusercontent.com/stephenmcd1/paste-as-markdown/master/assets/PasteAsMarkdown.png)

### Limitations

Currently this extension only supports pasting into Trello and only formats links (`<a href=... />`).  More web sites and formatting can always be added as needed.  My immediate need was for links in Trello so that's where I started.

## Installing

### Chrome Web Store
To install the latest version of the extension, just head over to the [Chrome Web Store](https://chrome.google.com/webstore/detail/paste-as-markdown/lmamcbfemdkhfgodpoalhkpjabhkcmpn) and follow the simple instructions there.

### Manual Installation / Development

To setup the extension in Chrome from source (e.g. to test out local changes you've made):

1. Go to the Extensions window in Chrome (Menu > More Tools > Extensions)
2. Check 'Developer Mode'
3. Click 'Load unpacked extension...'
4. Navigate to the `app` directory in your local copy of the code

## Etc.

### Issues / Questions / Contributing

If you run into any issues, have questions/comments/etc., feel free to open an issue over on the [issue tracker](https://github.com/stephenmcd1/paste-as-markdown/issues).  If you'd like to contribute to this extension and have some programming prowess, feel free to submit a pull request.

### License

[MIT](https://github.com/stephenmcd1/paste-as-markdown/blob/master/LICENSE)

### Thanks

The icon for this extension is part of the [Hawcons](http://hawcons.com/) set by [Yannick Lung](http://yannicklung.com/)
