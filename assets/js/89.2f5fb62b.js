(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{487:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"increasing-the-wordpress-memory-limit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-wordpress-memory-limit"}},[t._v("#")]),t._v(" Increasing the WordPress Memory Limit")]),t._v(" "),e("p",[t._v("Edit your "),e("code",[t._v("wp-config.php")]),t._v(" file and enter the following:")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'WP_MEMORY_LIMIT'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'256M'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("WordPress memory can be different to the server – you need to set this regardless of server memory settings")])]),t._v(" "),e("p",[e("a",{attrs:{href:"http://codex.wordpress.org/Editing_wp-config.php#Increasing_memory_allocated_to_PHP",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://codex.wordpress.org/Editing_wp-config.php#Increasing_memory_allocated_to_PHP"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("If you have access to your PHP.ini file, change the line in PHP.ini")]),t._v(" "),e("p",[t._v("If your line shows 32M try 64M:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("memory_limit = 64M ; Maximum amount of memory a script may consume (64MB)\n")])])]),e("p",[t._v("If you don’t have access to PHP.ini try adding this to an .htaccess file:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("php_value memory_limit 64M\n")])])]),e("p",[t._v("Consult your hosting provider if none of the above works.")])])}),[],!1,null,null,null);e.default=r.exports}}]);