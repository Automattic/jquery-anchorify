/**
 * jquery-anchorify - v1.0.0 -
 *
 * @author Automattic (https://automattic.com) / Nicola Mustone <nicola@automattic.com> (https://nicolamustone.com/)
 * @license GPL-2.0\
 */
;(function ($) {
    "use strict";

    $.fn.anchorify = function() {
        this.find('h1, h2, h3, h4, h5, h6').each(function () {
            linkifyAnchors($(this));
        });

        if (window.location.hash) {
            var target_offset = $(window.location.hash).offset();
            var target_top = target_offset.top - 50;

            $('html, body').animate({ scrollTop : target_top }, 500);
        }
    };

    /**
     * Create an anchor and prepend it to the heading
     * @param  object e
     */
    function linkifyAnchors (e) {
        var id = e.attr('id');

        if (id === undefined || id === '') {
            id = e.text();
        }

        id = id.toLowerCase()
             .trim()
             .replace(/\s+/g, '-')     // Replace spaces with -
             .replace(/&/g, '-and-')   // Replace & with 'and'
             .replace(/[^\w\-а-я]+/g, '') // Remove all non-word chars
             .replace(/\-\-+/g, '-');  // Replace multiple - with single -

        e.attr('id', id);

        e.prepend(anchorById(id));
    }

    /**
     * Create an anchor with the provided ID
     * @param  string id
     */
    function anchorById (id) {
        var anchor = $('<a></a>');

        anchor.attr({
                href: '#' + id,
                class: 'header-link'
        });

        anchor.html( '<svg aria-hidden="true" height="12" width="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path d="M5.88.03c-.18.01-.36.03-.53.09-.27.1-.53.25-.75.47a.5.5 0 1 0 .69.69c.11-.11.24-.17.38-.22.35-.12.78-.07 1.06.22.39.39.39 1.04 0 1.44l-1.5 1.5c-.44.44-.8.48-1.06.47-.26-.01-.41-.13-.41-.13a.5.5 0 1 0-.5.88s.34.22.84.25c.5.03 1.2-.16 1.81-.78l1.5-1.5c.78-.78.78-2.04 0-2.81-.28-.28-.61-.45-.97-.53-.18-.04-.38-.04-.56-.03zm-2 2.31c-.5-.02-1.19.15-1.78.75l-1.5 1.5c-.78.78-.78 2.04 0 2.81.56.56 1.36.72 2.06.47.27-.1.53-.25.75-.47a.5.5 0 1 0-.69-.69c-.11.11-.24.17-.38.22-.35.12-.78.07-1.06-.22-.39-.39-.39-1.04 0-1.44l1.5-1.5c.4-.4.75-.45 1.03-.44.28.01.47.09.47.09a.5.5 0 1 0 .44-.88s-.34-.2-.84-.22z" /></svg>' );

        return anchor;
    }
})(jQuery);
