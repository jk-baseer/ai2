<section class="max-w-6xl mx-auto px-4 py-10">
  <h2 class="text-2xl font-bold mb-6">Browse Categories</h2>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    <section data-tradly-token="dynamic.data.category.list" data-tradly-token-params='{"limit":12}'>
      <template data-tradly-item>
        <div data-component="category-card"></div>
      </template>
    </section>
  </div>
</section>