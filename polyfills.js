/**
 * Polyfills
 * Loaded by Metro's getPolyfills() BEFORE React Native's InitializeCore.
 * This fixes: ReferenceError: Property 'DOMException' doesn't exist
 * Caused by: whatwg-fetch (dependency of @supabase/supabase-js)
 */

// Polyfill DOMException for React Native.
// Must run before any module that references globalThis.DOMException.
(function () {
  'use strict';

  if (typeof globalThis.DOMException === 'undefined') {
    function DOMException(message, name) {
      var err = Error.call(this, message || '');
      this.message = message || '';
      this.name = name || 'DOMException';
      this.stack = err.stack;
    }
    DOMException.prototype = Object.create(Error.prototype);
    DOMException.prototype.constructor = DOMException;

    globalThis.DOMException = DOMException;
  }
})();
