<?php

class SFM_Group_Standard extends SFM_Group {

	/**
	 * @var array Font name (key) => font-family stack (value)
	 */
	protected $font_data = array( 'Arial' => 'Arial, Helvetica, sans-serif', 'Bookman' => 'Bookman, Palatino, Georgia, serif', 'Century Gothic' => '\'Century Gothic\', Helvetica, Arial, sans-serif', 'Comic Sans MS' => '\'Comic Sans MS\', Arial, sans-serif', 'Courier' => 'Courier, monospace', 'Garamond' => 'Garamond, Palatino, Georgia, serif', 'Georgia' => 'Georgia, Times, serif', 'Helvetica' => 'Helvetica, Arial, sans-serif', 'Lucida Grande' => '\'Lucida Grande\',\'Lucida Sans Unicode\',Tahoma,Verdana,sans-serif', 'Palatino' => 'Palatino, Georgia, serif', 'Tahoma' => 'Tahoma, Verdana, Helvetica, sans-serif', 'Times' => 'Times, Georgia, serif', 'Trebuchet MS' => '\'Trebuchet MS\', Tahoma, Helvetica, sans-serif', 'Verdana' => 'Verdana, Tahoma, sans-serif', );

	/**
	 * @var string|bool If @imports are needed, this holds the template. Else, false.
	 */
	protected $import_template = false;

	/**
	 * @var array Array of Styles_Font objects.
	 */
	protected $fonts;

	/**
	 * Fires when accessing $this->fonts from outside the class.
	 */
	public function get_fonts() {
		if ( !empty( $this->fonts ) ) { return $this->fonts; }

		foreach ( (array) $this->font_data as $name => $family ){
			$this->fonts[] = new SFM_Single_Standard( array(
				'family' => $family,
				'name' => $name,
			) );
		}

		return $this->fonts;
	}

}