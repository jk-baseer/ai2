;<div class="max-w-3xl mx-auto py-10 px-4">
  <h1 class="text-3xl font-bold mb-6">Create a New Layer</h1>
  <form class="bg-white shadow rounded-lg p-6 space-y-5">
    <div>
      <label class="block text-gray-700 font-medium mb-2" for="layer-name">
        Layer Name updated with Github Integration
      </label>
      <input
        id="layer-name"
        name="layer_name"
        type="text"
        class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter layer name"
        required
      />
    </div>
    <div>
      <label class="block text-gray-700 font-medium mb-2" for="layer-desc">
        Description
      </label>
      <textarea
        id="layer-desc"
        name="description"
        rows="3"
        class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Describe the purpose of this layer"
      ></textarea>
    </div>
    <div>
      <label class="block text-gray-700 font-medium mb-2" for="category">
        Category
      </label>
      <select
        id="category"
        name="category_id"
        class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select category</option>
        <section
          data-tradly-token="dynamic.data.category.list"
          data-tradly-token-params='{"limit":20}'
        >
          <template data-tradly-item>
            <option value="{{id}}">{{ name }}</option>
          </template>
        </section>
      </select>
    </div>
    <div>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
      >
        Create Layer
      </button>
    </div>
  </form>

  <div class="mt-10">
    <h2 class="text-2xl font-semibold mb-4">Featured Listings in this Layer</h2>
    <section
      data-tradly-token="dynamic.data.listing.list"
      data-tradly-token-params='{"is_featured":true,"limit":4}'
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <template data-tradly-item>
          <div
            data-component="product-card"
            data-component-variant="featured"
          ></div>
        </template>
      </div>
    </section>
  </div>
</div>
