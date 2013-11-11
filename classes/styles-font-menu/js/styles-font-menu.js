jQuery( document ).ready( function( $ ){

	// Add Google Fonts and Chosen to select elements
	$('select.sfm').stylesFontDropdown();

});

(function( $, google_fonts ) {
	/**
	 * Build Google Fonts option list only once
	 */
	var google_styles = '<style>';
	var google_options = "<optgroup class='google-fonts' label='Google Fonts'>";
	var is_readme = ( $('#styles-font-menu-readme').length > 0 );

	for (var i=0; i < google_fonts.fonts.length; i++){
		// Don't show if no preview
		if ( !is_readme && undefined === google_fonts.fonts[i].png_url ) {
			continue;
		}

		google_options += "<option class='gf " + google_fonts.fonts[i].classname + "' value='" + JSON.stringify( google_fonts.fonts[i] ) + "'>" + google_fonts.fonts[i].name + "</option>";

		google_styles += ".sfm ." + google_fonts.fonts[i].classname + " { background-image: url(" + google_fonts.fonts[i].png_url + "); }\r";
	}
	google_options += "</optgroup>";
	google_styles += "</style>";

	$('head').append( google_styles );


	/**
	 * Define jQuery plugin to act on and attach to select elements
	 */
	$.stylesFontDropdown = function(element, options) {

		var plugin = this,
				$element = $(element);

		/**
		 * Default settings. Override by passing object to stylesFontDropdown()
		 */
		var defaults = {
					"chosen_settings": {
						"allow_single_deselect": true,
						"inherit_select_classes": true,
						"width": "280px"
					}
				};

		plugin.settings = {};

		plugin.init = function() {
			plugin.settings = $.extend({}, defaults, options);

			plugin.populate_google_fonts();

			plugin.set_selected_option();

			$element.chosen( plugin.settings.chosen_settings );
		};

		plugin.populate_google_fonts = function() {
			$element.append( google_options ).each( function(){
				// If a selected option is set in <option data-selected="XXX">, select it.
				// @todo Not sure why this is here. Carried over from old Styles text selector. Check back when connecting to database.
				var selected = $(this).data('selected');
				$(this).find( 'option[value="' + selected + '"]' ).attr('selected', 'selected');
			} );
		};

		plugin.set_selected_option = function() {
			var value = JSON.stringify( $element.data( 'selected' ) );
	
			$element.find('option').each( function(){
				if ( value == $(this).val() ) {
					$(this).attr('selected', 'selected');
				}

			});
		};

		plugin.preview_font_change = function( $target_elements ) {
			// Clear font-family if nothing selected
			if ( '' === $element.val() ) {
				$target_elements.css('font-family', '');
				return true;
			}

			// Convert JSON string value to JSON object
			var font = JSON.parse( $element.val() );

			plugin.maybe_add_at_import_to_head( font );

			// Update font-family
			$target_elements.css('font-family', font.family );
		};

		plugin.maybe_add_at_import_to_head = function( font ) {
			// Add @import to <head> if needed 
			if ( undefined !== font.import_family ) {
				var atImport = google_fonts.import_template.replace( '@import_family@', font.import_family );
				$( '<style>' ).append( atImport ).appendTo( 'head' );
			}
		};

		plugin.init();

	};

	/**
	 * Attach this plugin instance to the target elements
	 * Access later with $('select.styles-font-menu').data('stylesFontDropdown');
	 */
	$.fn.stylesFontDropdown = function(options) {
		return this.each(function() {
			if (undefined === $(this).data('stylesFontDropdown')) {
				var plugin = new $.stylesFontDropdown(this, options);
				$(this).data('stylesFontDropdown', plugin);
			}
		});
	};

})( jQuery, styles_google_options );