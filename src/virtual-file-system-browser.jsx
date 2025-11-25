import Wallet from "./wallet"
;<div class="max-w-3xl mx-auto py-10 px-4">
  <h1 class="text-3xl font-bold mb-6">Virtual File System (VFS) in Browsers</h1>
  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-2">
      What Can a Virtual File System Do in a Browser?
    </h2>
    <ul class="list-disc pl-6 text-gray-700 space-y-2">
      <li>
        Emulate a file system structure (folders, files) in memory or using
        browser storage (IndexedDB, LocalStorage, FileSystem Access API).
      </li>
      <li>
        Allow web applications to create, read, update, and delete files/folders
        within the VFS sandbox.
      </li>
      <li>
        Support file operations like copy, move, rename, and search within the
        virtual environment.
      </li>
      <li>
        Enable importing files from the user's device (via file input or
        drag-and-drop) into the VFS.
      </li>
      <li>
        Facilitate exporting or downloading files from the VFS to the user's
        device.
      </li>
      <li>
        Provide APIs for applications to interact with files as if they were on
        a real file system.
      </li>
    </ul>
  </section>
  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-2">
      What Can a Virtual File System <span class="text-red-600">NOT</span> Do in
      a Browser?
    </h2>
    <ul class="list-disc pl-6 text-gray-700 space-y-2">
      <li>
        Access arbitrary files or directories on the user's device without
        explicit user permission.
      </li>
      <li>
        Directly modify or overwrite files outside the browser sandbox or
        granted permissions.
      </li>
      <li>
        Persist files beyond browser storage limits or across incognito/private
        sessions (unless explicitly saved by the user).
      </li>
      <li>
        Interact with the host operating system's file system outside of browser
        APIs.
      </li>
      <li>Bypass browser security and privacy restrictions.</li>
    </ul>
  </section>
  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-2">How Are Files Added to the VFS?</h2>
    <ol class="list-decimal pl-6 text-gray-700 space-y-2">
      <li>
        <span class="font-medium">User File Selection:</span> Users select files
        using <code>&lt;input type="file"&gt;</code> or drag-and-drop. The app
        reads these files and adds them to the VFS.
      </li>
      <li>
        <span class="font-medium">Programmatic Creation:</span> The app can
        generate new files (e.g., text, images) and store them in the VFS.
      </li>
      <li>
        <span class="font-medium">Fetching from Remote:</span> Files can be
        fetched from servers (via HTTP) and stored in the VFS for offline or
        local use.
      </li>
      <li>
        <span class="font-medium">File System Access API:</span> With user
        permission, the app can read/write files and directories directly
        to/from the user's device (supported in Chromium browsers).
      </li>
    </ol>
  </section>
  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-2">
      How Does VFS Communicate with Chrome?
    </h2>
    <ul class="list-disc pl-6 text-gray-700 space-y-2">
      <li>
        Uses browser-provided APIs such as{" "}
        <span class="font-medium">File System Access API</span>{" "}
        (window.showOpenFilePicker, showSaveFilePicker, showDirectoryPicker) for
        direct file access with user consent.
      </li>
      <li>
        Employs <span class="font-medium">IndexedDB</span> or{" "}
        <span class="font-medium">LocalStorage</span> for persistent storage of
        files and metadata within the browser sandbox.
      </li>
      <li>
        Communicates via JavaScript APIs; no direct access to Chrome internals
        or OS-level file system.
      </li>
      <li>
        All file operations are mediated by browser security and permission
        dialogs.
      </li>
    </ul>
  </section>
  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-2">Related Categories</h2>
    <div class="grid grid-cols-2 gap-4">
      <section
        data-tradly-token="dynamic.data.category.list"
        data-tradly-token-params='{"limit":4}'
      >
        <template data-tradly-item>
          <div data-component="category-card"></div>
        </template>
      </section>
    </div>
  </section>
</div>
