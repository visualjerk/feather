# Button :)

```html
<lo-button>Hello Dude</lo-button>
```

```html
<template>
  <lo-button>{{ text }}</lo-button>
</template>

<script>
  export default {
    data() {
      return {
        text: 'Default text'
      }
    }
  }
</script>
```