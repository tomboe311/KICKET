<script setup>
defineProps({
    copyright: {
        type: String,
        required: true
        },
        gdpr: {
            type: String,
            required: true
        }
    })
</script>

<template>
  <footer class="footer">
        <div class="container text-center">
            <span class="text-muted" v-html="copyright"></span>
            -
            <span class="text-muted" v-html="gdpr"></span>
        </div>
    </footer>
</template>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #53BBAD;
}
</style>
