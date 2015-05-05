<?php
if ( !class_exists( 'Styles_Control_Border_Color' ) ) {
	require_once dirname( __FILE__ ) . '/styles-control-border-color.php';
}

class Styles_Control_Border_Right_Color extends Styles_Control_Border_Color {
	var $property = 'border-right-color';
	var $suffix = 'right border color';

	public function __construct( $group, $element ) {
		parent::__construct( $group, $element );
	}
}