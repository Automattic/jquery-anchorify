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

## Styling 

You may have noticed that a S/CSS file is not included in this plugin. That's because there's not much to style. If you're looking to get started check out these rules from the `example.html` file.

```.header-link {
            display: inline-block;
            margin-left: -20px;
            padding-right: 8px;
        }

        .header-link svg {
            visibility: hidden;
        }

        h1:hover .header-link svg,
        h2:hover .header-link svg,
        h3:hover .header-link svg,
        h4:hover .header-link svg,
        h5:hover .header-link svg,
        h6:hover .header-link svg {
            visibility: visible;
        } 
        ```

## Examples

* Open the file `example.html` in your browser
* [WooThemes Documentation](https://docs.woothemes.com/document/start-with-woocommerce-in-5-steps/)
