<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_felizidade' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '?9czK.1BE.w+4U;u-I$,~R*jv3&:Z?]Q{f=%iI0>7EC%5kYbT;JJyBOcO_}q)X`h' );
define( 'SECURE_AUTH_KEY',  'N{<MOz3o3a~o<FZlNT&%8_IcDjgKTM*M#(2uxRMZg}{-y{CN%OL(kk@X%0ZOqA%8' );
define( 'LOGGED_IN_KEY',    'rB8Y-`u4[cTMl1YZJtpR*))G4Koy[.fQ=N#8<8eJe$+W<aDY;MUr3PG/E)Z8=6#B' );
define( 'NONCE_KEY',        '*iw<.k8(`IDKt3PK`k8bkMaa7,Hw$+VdCG)EsyoF#Oi:,J{;L;]W5.Aq`s!=/0L*' );
define( 'AUTH_SALT',        '^`U^<:}!EdF1vARYsY:sTKCCSF+*k|1u(:tWv%5PA=#d{7.x4Tls0lMvB1Kn|m5H' );
define( 'SECURE_AUTH_SALT', '/22Kup8tbXADpjA)Q,}~WUy!&Y$q4Y:v22{.YIAYrE>ub>%L,ws}}A1j~Sl-  /W' );
define( 'LOGGED_IN_SALT',   '?:r]IStA>SLr<o/1P::Y;<,;[3o/km?2%sH`mFG]I=^__1 }}GGc#.^>N~ ^So&_' );
define( 'NONCE_SALT',       'Q.p %*-^yRC3(IW*8u T!;FCu[5%nf9C3Vm>,+qvS,Pz<@8-6s-,M96!iod `L:n' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
