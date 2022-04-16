<?php
/**
 * Twenty Twenty-Two functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Two
 * @since Twenty Twenty-Two 1.0
 */


if ( ! function_exists( 'twentytwentytwo_support' ) ) :

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function twentytwentytwo_support() {

		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );

		// Enqueue editor styles.
		add_editor_style( 'style.css' );

	}

endif;

add_action( 'after_setup_theme', 'twentytwentytwo_support' );

if ( ! function_exists( 'twentytwentytwo_styles' ) ) :

	/**
	 * Enqueue styles.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function twentytwentytwo_styles() {
		// Register theme stylesheet.
		$theme_version = wp_get_theme()->get( 'Version' );

		$version_string = is_string( $theme_version ) ? $theme_version : false;
		wp_register_style(
			'twentytwentytwo-style',
			get_template_directory_uri() . '/style.css',
			array(),
			$version_string
		);

		// Add styles inline.
		wp_add_inline_style( 'twentytwentytwo-style', twentytwentytwo_get_font_face_styles() );

		// Enqueue theme stylesheet.
		wp_enqueue_style( 'twentytwentytwo-style' );

	}

endif;

add_action( 'wp_enqueue_scripts', 'twentytwentytwo_styles' );

if ( ! function_exists( 'twentytwentytwo_editor_styles' ) ) :

	/**
	 * Enqueue editor styles.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function twentytwentytwo_editor_styles() {

		// Add styles inline.
		wp_add_inline_style( 'wp-block-library', twentytwentytwo_get_font_face_styles() );

	}

endif;

add_action( 'admin_init', 'twentytwentytwo_editor_styles' );


if ( ! function_exists( 'twentytwentytwo_get_font_face_styles' ) ) :

	/**
	 * Get font face styles.
	 * Called by functions twentytwentytwo_styles() and twentytwentytwo_editor_styles() above.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return string
	 */
	function twentytwentytwo_get_font_face_styles() {

		return "
		@font-face{
			font-family: 'Source Serif Pro';
			font-weight: 200 900;
			font-style: normal;
			font-stretch: normal;
			font-display: swap;
			src: url('" . get_theme_file_uri( 'assets/fonts/SourceSerif4Variable-Roman.ttf.woff2' ) . "') format('woff2');
		}

		@font-face{
			font-family: 'Source Serif Pro';
			font-weight: 200 900;
			font-style: italic;
			font-stretch: normal;
			font-display: swap;
			src: url('" . get_theme_file_uri( 'assets/fonts/SourceSerif4Variable-Italic.ttf.woff2' ) . "') format('woff2');
		}
		";

	}

endif;

if ( ! function_exists( 'twentytwentytwo_preload_webfonts' ) ) :

	/**
	 * Preloads the main web font to improve performance.
	 *
	 * Only the main web font (font-style: normal) is preloaded here since that font is always relevant (it is used
	 * on every heading, for example). The other font is only needed if there is any applicable content in italic style,
	 * and therefore preloading it would in most cases regress performance when that font would otherwise not be loaded
	 * at all.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function twentytwentytwo_preload_webfonts() {
		?>
		<link rel="preload" href="<?php echo esc_url( get_theme_file_uri( 'assets/fonts/SourceSerif4Variable-Roman.ttf.woff2' ) ); ?>" as="font" type="font/woff2" crossorigin>
		<?php
	}

endif;

add_action( 'wp_head', 'twentytwentytwo_preload_webfonts' );

// Add block patterns
require get_template_directory() . '/inc/block-patterns.php';

// Our custom post type function
function create_posttype() {
  
    register_post_type( 'products',
    // CPT Options
        array(
            'labels' => array(
                'name' => __( 'Products' ),
                'singular_name' => __( 'Product' )
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'movies'),
            'show_in_rest' => true,
			'supports' => array('title','custom-fields','editor', 'page-attributes', 'thumbnail')
  
        )
    );
}
// Hooking up our function to theme setup
add_action( 'init', 'create_posttype' );

function add_custom_taxonomies() {
	// Add new "Product Features" taxonomy to Posts
	register_taxonomy('product_feature', 'products', array(
	  // Hierarchical taxonomy (like categories)
	  'hierarchical' => true,
	  // This array of options controls the labels displayed in the WordPress Admin UI
	  'labels' => array(
		'name' => _x( 'Product Features', 'taxonomy general name' ),
		'singular_name' => _x( 'Product Feature', 'taxonomy singular name' ),
		'search_items' =>  __( 'Search Product Feature' ),
		'all_items' => __( 'All Product Features' ),
		'parent_item' => __( 'Parent Product Feature' ),
		'parent_item_colon' => __( 'Parent Product Feature:' ),
		'edit_item' => __( 'Edit Product Feature' ),
		'update_item' => __( 'Update Product Feature' ),
		'add_new_item' => __( 'Add New Product Feature' ),
		'new_item_name' => __( 'New Product Feature Name' ),
		'menu_name' => __( 'Product Features' ),
	  ),
	  // Control the slugs used for this taxonomy
	  'rewrite' => array(
		'slug' => 'product_feature', // This controls the base slug that will display before each term
		'with_front' => false, // Don't display the category base before "/product_feature/"
		'hierarchical' => true // This will allow URL's like "/product_feature/boston/cambridge/"
	  ),
	));
  }
  add_action( 'init', 'add_custom_taxonomies', 0 );

  remove_filter( 'render_block', 'wp_render_layout_support_flag', 10, 2 ); //removes the annoying automargin


  
