(function () {
  'use strict'

  window._bftn_options = {
    always_show_widget: INSTALL_ID === 'preview',
    custom_disclaimer_link: {
      text: 'Install with Cloudflare Apps',
      href: 'https://www.cloudflare.com/apps/net-neutrality'
    }
  }

  var vendorScript = document.createElement('script')
  vendorScript.src = 'https://widget.battleforthenet.com/widget.js'
  document.head.appendChild(vendorScript)
}())
