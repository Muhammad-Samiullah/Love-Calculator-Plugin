<?php
/*
Plugin Name: Love Calculator
Description: This plugin calculates Love
*/

add_shortcode('love_calculator', 'love_calculator');
function love_calculator($atts) {
    $Content = "";
    $Content .= file_get_contents (plugin_dir_path( __FILE__ ) . "calculator.txt");
    return $Content;
}


add_action('wp_enqueue_scripts', 'pwwp_enqueue_bootstrap4');
function pwwp_enqueue_bootstrap4() {
    wp_enqueue_style( 'bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' );
    wp_enqueue_script( 'popper','//cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js', array( 'jquery' ),'',true );
    wp_enqueue_script( 'boot3','https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css', array( 'jquery' ),'',true );
    wp_enqueue_style('main-styles', plugins_url( 'css/style.css' , __FILE__ ), array(), rand(), false);
}

function love_calculator_scripts() {
    wp_enqueue_script( 'frontend-ajax', plugins_url( 'js/demo.js?x=' . rand(), __FILE__ ), array('jquery'), null, true );
    wp_localize_script( 'frontend-ajax', 'frontend_ajax_object',
        array( 'ajaxurl' => admin_url( 'admin-ajax.php' ))
    	);
}
add_action( 'wp_enqueue_scripts', 'love_calculator_scripts' );


?>
