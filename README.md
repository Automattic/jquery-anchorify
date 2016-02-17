# jQuery Anchorify [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

jQuery Anchorify is a plugin that creates anchors for headings in your website.

## Usage

Include jQuery and the file `anchorify.min.js` in your website:

```html
<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src="./anchorify.min.js"></script>
```

Then run jQuery Anchorify with:

```javascript
jQuery(window).load(function () {
    jQuery('body').anchorify();
});
```

It will scan the element `<body>` for headings and will create anchors based on the text of the heading.

## Examples

* Open the file `example.html` in your browser
* [WooThemes Documentation](https://docs.woothemes.com/document/start-with-woocommerce-in-5-steps/)