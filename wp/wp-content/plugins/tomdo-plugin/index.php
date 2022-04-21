<?php
/* 
* Plugin Name: Tom Do Blocks
* Plugin URI:#
* Description: My plugin for the task Yosef!
* Version: 1.0.0
* Author: Tom Do
*/

defined('ABSPATH') || exit;

function fancy_custom_block_block_init() {

    // automatically load dependencies and version
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
    wp_register_script(
        'fancy-custom-block-block-editor',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    ); 
    wp_enqueue_style(
        'fancy-custom-block-block',
        plugins_url( 'build/index.css', __FILE__ ),
        array( ),
        filemtime( plugin_dir_path( __FILE__ ) . 'index.css' )
    );

    register_block_type( 'fancy-block-plugin/fancy-custom-block', array(
        'editor_script' => 'fancy-custom-block-block-editor'
    ) );
}

add_action( 'init', 'fancy_custom_block_block_init' );

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
            'rewrite' => array('slug' => 'products'),
            'show_in_rest' => true,
			'supports' => array('title','custom-fields','editor', 'page-attributes', 'thumbnail'),
	     'show_in_graphql' => true,
	      'graphql_single_name' => 'product',
	      'graphql_plural_name' => 'products',
  
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
		'menu_name' => __( 'Product Features' )
	  ),
	  // Control the slugs used for this taxonomy
	  'rewrite' => array(
		'slug' => 'product_feature', // This controls the base slug that will display before each term
		'with_front' => false, // Don't display the category base before "/product_feature/"
		'hierarchical' => true // This will allow URL's like "/product_feature/boston/cambridge/"
	  ),
	  'show_in_graphql' => true,
	  'graphql_single_name' => 'productFeature',
      'graphql_plural_name' => 'productFeatures',
	  'show_in_rest'      => true,
	));
}
add_action( 'init', 'add_custom_taxonomies', 0 );

remove_filter( 'render_block', 'wp_render_layout_support_flag', 10, 2 ); //removes the annoying automargin
  
if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(['show_in_graphql' => true,'page_title' => __('Options')]);
	
}

