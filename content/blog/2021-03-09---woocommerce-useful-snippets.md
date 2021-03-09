---
title: Woocommerce useful snippets
date: "2021-03-09T08:03:13.175Z"
template: "post"
draft: false
slug: "woocommerce-useful-snippets"
category: "Woocommerce"
tags:
  - "woocommerce"
  - "wordpress"
description: "Change currency simple"
socialImage: "/media/woocommerce.png"
---

## Change a currency symbol

```
/**
 * Change a currency symbol
 */
add_filter('woocommerce_currency_symbol', 'change_existing_currency_symbol', 10, 2);

function change_existing_currency_symbol( $currency_symbol, $currency ) {
     switch( $currency ) {
          case 'SGD': $currency_symbol = 'SGD$'; break;
     }
     return $currency_symbol;
}
```
