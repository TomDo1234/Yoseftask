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