=== Styles ===
Contributors: brainstormmedia, pdclark, elusivelight
Plugin URI: http://stylesplugin.com
Author URI: http://brainstormmedia.com
Tags: css, stylesheet, appearance, customize, customizer, colors, color picker, background, fonts, google fonts, user interface, twenty ten, twenty eleven, twenty twelve, twenty thirteen
Requires at least: 3.4
Tested up to: 3.6
Stable tag: 1.0.15

Be creative with colors and fonts. Styles changes everything.

== Description ==

WordPress has lots of beautiful themes, but personalizing a design can be difficult and time-intensive. Styles changes that. Styles gives you creative control in one consistent interface – the WordPress theme customizer. Styles lets you make your site your own. :)

http://youtube.com/watch?v=CpKiZEqpcr8

[Try a demo in TwentyTwelve](http://demo.stylesplugin.com/twentytwelve).

**Features of the plugin**

* Instant previews
* Text size
* Google Fonts
* Text colors
* Border colors
* Background colors
* Hundreds of options
* Consistent interface and names in every theme
* Built on WordPress customizer, so Styles grows as WordPress grows

Styles and options for all built-in WordPress themes are free. More themes are available at [StylesPlugin.com](http://stylesplugin.com).

**Free Themes**

* TwentyTen: [Demo](http://demo.stylesplugin.com/twentyten)
* TwentyEleven: [Demo](http://demo.stylesplugin.com/twentyeleven)
* TwentyTwelve: [Demo](http://demo.stylesplugin.com/twentytwelve)
* TwentyThirteen: [Demo](http://demo.stylesplugin.com/twentythirteen)

**Developer Resources**

* [Styles on Github](https://github.com/stylesplugin)
* [Brainstorm Media on Github](https://github.com/brainstormmedia)
* Code Walkthrough: [How to add support for your own themes](http://www.youtube.com/playlist?list=PLxj61Fojm1RGevBh10U2qCqjwoH4Awo-P)

**Contact**

* [@stylesplugin](http://twitter.com/stylesplugin) on Twitter
* [Review this plugin](http://wordpress.org/support/view/plugin-reviews/styles)
* [Get support](http://wordpress.org/support/plugin/styles)

== Installation ==

1. Upload the `styles` folder to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Install and activate your theme's support plugin. If you are running TwentyTen through TwentyThirteen, Styles will prompt you to do this. If you would like to use Styles with other themes, check <a href="http://stylesplugin.com">stylesplugin.com</a> or <a href="http://www.youtube.com/playlist?list=PLxj61Fojm1RGevBh10U2qCqjwoH4Awo-P">program your own</a>.
1. Edit your site under `Appearance > Customize`

== Screenshots ==

1. TwentyEleven header settings.
2. All TwentyEleven sections.
3. TwentyEleven menu settings.

== Frequently Asked Questions == 

= Why is this plugin free? =

We believe life is better when we work together. :) Support for WordPress default themes, like TwentyTwelve and TwentyThirteen, will always be free. Continued development in Styles will be supported by:

* Plugins for additional themes
* Plugins for add-on features
* Premium support and updates
* Documentation for using Styles in your own themes

= Does Styles support my theme? =

Maybe! We have additional themes available available at [StylesPlugin.com](http://stylesplugin.com). If you don't find your theme there, [watch this walkthrough](http://www.youtube.com/playlist?list=PLxj61Fojm1RGevBh10U2qCqjwoH4Awo-P) for a developer's guide on how to add support. Adding one option takes only one line of code.

= I'd like to distribute a theme add-on I created for Styles =

If you [watched the walkthrough](http://www.youtube.com/playlist?list=PLxj61Fojm1RGevBh10U2qCqjwoH4Awo-P) and created an add-on for Styles, please share it with others. It's our goal to make the lives of theme developers and end-users much, much easier.

If you would like to sell your add-on at [stylesplugin.com](http://stylesplugin.com), get in touch! Email us at `styles (at) stylesplugin.com` or find us on Twitter as [@stylesplugin](http://twitter.com/stylesplugin).

= Will this plugin slow down my site? =

No! Styles is very careful about only loading what is needed to get its job done. Once you're done editing, stylesheets are cached and loaded for your sites users as quickly as possible.

== Changelog ==

= 1.0.15 =

* Fix: Customize Theme button loads customizer for current site in network. Resolves [#38](https://github.com/stylesplugin/styles/issues/38). Thanks @jivedig.
* Fix: Child and parent theme options no longer effect each other. Resolves [#29](https://github.com/stylesplugin/styles/issues/29). Thanks @jivedig.

= 1.0.14 =

* Fix: Don't display install notice for child themes. Thanks [@ektreyes](http://twitter.com/ektreyes) for the report.

= 1.0.13 =

* New: Allow notices to be disabled with a filter: <code>add_filter( 'styles_disable_notices', '__return_true' );</code>
* New: Don't display install notices for default themes if a plugin is installed and then renamed.
* Fix: Don't display install notices for non-default themes. Resolves a regression introduced in 1.0.12.

= 1.0.12 =

<ul>
	<li>Fix: Improve detection of plugins adding support for themes
		<ul>
			<li>Add support if `Plugin Name: Styles: NAME` matches `Theme Name: NAME`</li>
			<li>Add support if directory names `styles-NAME` and `theme/NAME` match</li>
			<li>Make theme check case-insensitive. Resolves issues for themes with capitalized folder names, like iThemes child themes.</li>
			<li>Thanks [@JiveDig](http://twitter.com/jivedig) for pointing some of these issues out.</li>
		</ul>
	</li>
	<li>Fix: Improve activation notices for child themes
		<ul>
			<li>Add theme options for a parent theme if they're activated, but don't show a notice requiring them.</li>
			<li>Detect and display which theme a plugin is trying to add support for.</li>
			<li>Correctly display the plugin name requesting activation in cases where the plugin doesn't follow the recommended naming convention.</li>
		</ul>
	</li>
</ul>

= 1.0.11 =

* [This release goes to 11](http://www.youtube.com/watch?v=NrVCjnRdB_k).
* Fix: Issue detecting add-ons for child themes. Thanks [@JiveDig](http://twitter.com/jivedig) for pointing this out.
* Enhancement: Enqueue customizer scripts in a way that's easier for plugins to extend. Props [@westonruter](https://github.com/westonruter).

= 1.0.10 =
* Fix: Ensure preview javascript works when WordPress installed in a child directory. Props [@westonruter](https://github.com/westonruter).
* Fix: Prevent warnings when no Styles child plugins exist. Thanks [@pictureitsolved](http://go.brain.st/181HisI)
* New: Add `styles_json_files` filter to allow plugin authors to enqueue arbitrary customize.json files. customize.json in child plugins and themes are still enqueued automatically.

= 1.0.9 =
* Fix: Resolve regression in 1.0.8 that caused saved styles to not display.

= 1.0.8 =
* New: Minify CSS outputted in header based on [input on poststat.us](http://poststat.us/styles-plugin-css-customization/).

= 1.0.7 =

* Fix: Clearing a setting now updates the preview without a page refresh.
* Fix: Settings requiring "!important" are fixed and support live preview.
* Fix: Plugin header settings no longer conflicts with other plugins.
* Fix: Remove all options when uninstalling on a site network.
* Change: 'color' label now says 'text color'.
* New: Contact links and developer resources added to readme

= 1.0.6 =
* New: Add installation notice to Customizer.

= 1.0.5 =
* Fix: Resolve blank screen that could appear when installing on a new theme.

= 1.0.4 =
* Fix: Correctly set outer background color

= 1.0.3 =
* Fix: Google fonts loading correctly once saved.

= 1.0.2 =
* Fix: Remove front-end PHP notice. (Minor; Only matters if WP_DEBUG is enabled.)

= 1.0.1 =
* Fix: Remove Customizer PHP notice. (Minor; Only matters if WP_DEBUG is enabled.)

= 1.0 =
* New: Completely rewrite Styles to use the WordPress Customizer API. Whew! That was a lot of work, but will allow us to grow closely with WordPress going forward.
* New: Styles 1.0 does not import 0.5.2 settings. However, you can always [reinstall Styles 0.5.3](http://downloads.wordpress.org/plugin/styles.0.5.3.zip) to get your old settings back. 
* New: TwentyTwelve support.
* New: TwentyThirteen support.
* New: Remove gradients and background images. Sorry! We had to simpify and prioritize in the rewrite. If many users find Styles useful, we hope to bring these features back!
* New: Instant preview for many options using Customizer postMessage

= 0.5.2 =
* Fix: Display of icons in cases where WordPress is installed in a subdirectory or wp-content is moved. Fixes http://bit.ly/Jc7oyd

= 0.5.1.1 =
* Fix: Transparent background option
* Fix: Display of unavailable theme options

= 0.5.1 =
* Fix: Issue that would prevent Font styles from outputting if another option wasn't set on the same element.

= 0.5.0 =
* New: Load themes from API: Allows for theme support to be added without plugin updates.
* New: Data structure: Allow settings to migrate from theme to theme
* New: Automatically rebuild CSS when theme is switched
* New: Wrap font settings into other options. This sets the stage to simplify the user interface in a future version.
* New: Add option to hide text and replace with image on any element
* New: Expand TwentyTen options
* New: Gradient Picker: Fix add marker, drag to remove marker
* Fix: Massive code clean-up: Removed 1,198 lines of code; modified 2,488
* Fix: Minor UI tweaks

= 0.4.1 =
* Fix: Saved CSS being one update behind
* Fix: Initial values of fields & background color picker
* Fix: Preview update stall
* Fix: Background value when no image selected
* Fix: Background replacement matching

= 0.4.0 =
* Initial public release.

== Upgrade Notice ==

* Fix: Customize Theme button loads customizer for current site in network. Resolves [#38](https://github.com/stylesplugin/styles/issues/38). Thanks @jivedig.
* Fix: Child and parent theme options no longer effect each other. Resolves [#29](https://github.com/stylesplugin/styles/issues/29). Thanks @jivedig.