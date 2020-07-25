<template>
  <a class="" :href="href" target="_blank">{{ text }}</a>
</template>

<script>
export default {
  name: "Link",
  props: {
    href: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
a {
  @apply relative;
}
a::after {
  content: "";
  top: 60%;
  right: -0.1em;
  left: -0.1em;
  bottom: 0;
  z-index: -1;
  @apply absolute;
  @apply bg-teal-500;
  @apply opacity-50;
  @apply rounded;
  transition: top 0.2s ease;
}
a:hover:after {
  top: 0%;
}
</style>
