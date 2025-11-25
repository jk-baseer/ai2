<section class="mb-8">
  <div data-component="hero-banner"></div>
</section>
<section class="max-w-7xl mx-auto px-4">
  <h2 class="text-2xl font-bold mb-4">Featured Products</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <section data-tradly-token="dynamic.data.listing.list" data-tradly-token-params='{"is_featured":true,"limit":8}'>
      <template data-tradly-item>
        <div data-component="product-card" data-component-variant="featured"></div>
      </template>
    </section>
  </div>
</section>