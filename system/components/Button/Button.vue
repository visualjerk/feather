<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
import Say from '@@/helper/index'

export default {
  name: 'lo-button',
  methods: {
    talk() {
      Say.sayHi()
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>

<docs src="./demo.md"></docs>
