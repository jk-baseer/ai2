<div class="max-w-4xl mx-auto py-10 px-4">
  <h1 class="text-3xl font-bold mb-6">New Layer</h1>
  <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded">
    <h2 class="text-xl font-semibold mb-2">About Rollup Bundler</h2>
    <p class="text-gray-700 mb-2">
      Rollup is primarily designed as a JavaScript module bundler for use in build processes, typically running on the server (Node.js). It takes your source files and bundles them into optimized output for deployment.
    </p>
    <p class="text-gray-700">
      While Rollup itself is not intended to run directly in the browser, the bundles it produces are optimized for browser usage. For in-browser module bundling or dynamic imports, tools like <span class="font-semibold">esbuild-wasm</span> or <span class="font-semibold">SystemJS</span> are more suitable. In summary, Rollup works on the server side for build-time bundling, not as a runtime browser bundler.
    </p>
  </div>
  <section class="mb-10">
    <h3 class="text-2xl font-semibold mb-4">Featured Listings</h3>
    <section data-tradly-token="dynamic.data.listing.list" data-tradly-token-params='{"is_featured":true,"limit":6}'>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <template data-tradly-item>
          <div data-component="product-card" data-component-variant="featured"></div>
        </template>
      </div>
    </section>
  </section>
  <section>
    <h3 class="text-2xl font-semibold mb-4">Browse Categories</h3>
    <section data-tradly-token="dynamic.data.category.list" data-tradly-token-params='{"limit":6}'>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <template data-tradly-item>
          <div data-component="category-card"></div>
        </template>
      </div>
    </section>
  </section>
</div>