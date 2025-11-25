<div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
  <h1 class="text-2xl font-bold mb-4">Vite App <code>package.json</code></h1>
  <p class="mb-4 text-gray-700">Below is a dynamic <code>package.json</code> template for a Vite app. It includes scripts and dependencies based on your project configuration.</p>
  <pre class="bg-gray-100 rounded p-4 overflow-x-auto text-sm">
{
  "name": "{{project_name|lowercase}}",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vite": "^{{vite_version}}"{{#react}},
    "react": "^{{react_version}}",
    "react-dom": "^{{react_dom_version}}"{{/react}}{{#vue}},
    "vue": "^{{vue_version}}"{{/vue}}
  },
  "devDependencies": {
    {{#typescript}}"typescript": "^{{typescript_version}}",
    {{/typescript}}"@vitejs/plugin-{{framework}}": "^{{plugin_version}}"
  }
}
  </pre>
  <div class="mt-6">
    <a href="https://vitejs.dev/guide/" class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Vite Documentation</a>
  </div>
</div>