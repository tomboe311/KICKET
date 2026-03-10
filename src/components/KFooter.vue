<script setup>
defineProps({
  authorName: {
    type: String,
    required: true,
  },
  authorUrl: {
    type: String,
    required: true,
  },
  gdprText: {
    type: String,
    required: true,
  },
  gdprUrl: {
    type: String,
    required: true,
  },
})

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container text-center">
      <span class="text-muted">
        &copy; {{ year }}.
        <a :href="authorUrl">{{ authorName }}</a>
      </span>
      -
      <span class="text-muted">
        <a :href="gdprUrl">{{ gdprText }}</a>
      </span>
    </div>
  </footer>
</template>
