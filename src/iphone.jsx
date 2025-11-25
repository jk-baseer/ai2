<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-6">iPhone Listings</h1>
  <section data-tradly-token="dynamic.data.listing.list" data-tradly-token-params='{"category_id":"iphone","limit":12}'>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <template data-tradly-item>
        <div data-component="product-card" data-component-variant="featured"></div>
      </template>
    </div>
  </section>
</div>

<div className="container mx-auto px-4 py-8">
  <h1 className="text-3xl font-bold mb-6">iPhone Listings</h1>
  <section data-tradly-token="dynamic.data.listing.list" data-tradly-token-params='{"category_id":"iphone","limit":12}'>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {listings.map((listing) => (
        <div key={listing.id} data-component="product-card" data-component-variant="featured">
          {/* Product card content here, e.g. */}
          <img src={listing.images?.[0]} alt={listing.title} className="w-full h-48 object-cover mb-2" />
          <h2 className="text-lg font-semibold">{listing.title}</h2>
          <p className="text-sm text-gray-600">{listing.list_price.formatted}</p>
        </div>
      ))}
    </div>
  </section>
</div>