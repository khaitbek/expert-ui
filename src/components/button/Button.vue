<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

// types
import { buttonVariants, type ButtonVariants } from '.'

// utils
import { cn } from '../../lib/utils'

// assets
import '../../assets/main.css'
import Loader from '../loader/Loader.vue'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  disabled?: boolean
  isLoading?: boolean
  icon?: typeof Loader
  iconPosition?: 'right' | 'left'
  iconClass?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  iconPosition: 'left'
})
</script>

<template>
  <Primitive
    v-bind="props"
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    :disabled="props.isLoading || props.disabled"
  >
    <template v-if="isLoading">
      <Loader class="h-6 w-6 mr-2 animate-spin" />
    </template>
    <template v-if="icon && iconPosition === 'left'">
      <component :is="icon" :class="cn('mr-2', iconClass)" />
    </template>
    <slot></slot>
    <template v-if="icon && iconPosition === 'right'">
      <component :is="icon" :class="cn('mr-2', iconClass)" />
    </template>
  </Primitive>
</template>
