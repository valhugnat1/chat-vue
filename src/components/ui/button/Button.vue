<script setup lang="ts">
import { buttonVariants } from '.'
import { cn } from '@/lib/utils'

interface Props {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant']
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size']
  as?: string
  example?: boolean
}

withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <component
    :is="as"
    :class="
      cn(buttonVariants({ variant, size }), $attrs.class ?? '', {
        'bg-example-color': true,
      })
    "
  >
    <slot />
  </component>
</template>

<style scoped>
.bg-example-color {
  background-color: #000e5c04; /* Set the desired color for the example prop */
}
</style>
