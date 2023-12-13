<script setup lang="ts">
import { buildDom } from '~/utils/json-viewer/buildDom'
import { assert } from '~/utils/json-viewer/assert'
import '~/styles/json-viewer.scss'

const props = defineProps<{
  json: string
}>()

const html = computed(() => {
  const rootEntry = buildDom(JSON.parse(props.json), false)
  return rootEntry.outerHTML
})

function collapse(elements: HTMLElement[] | HTMLCollection) {
  let el, i, blockInner

  for (i = elements.length - 1; i >= 0; i--) {
    el = elements[i]
    el.classList.add('collapsed')

    // (CSS hides the contents and shows an ellipsis.)

    // Add a count of the number of child properties/items
    if (!el.id) {
      // TODO why is this id check needed?
      // Find the blockInner
      blockInner = el.firstElementChild
      while (blockInner && !blockInner.classList.contains('blockInner'))
        blockInner = blockInner.nextElementSibling

      if (!blockInner)
        continue
    }
  }
}

function expand(elements: HTMLElement[] | HTMLCollection) {
  for (let i = elements.length - 1; i >= 0; i--)
    elements[i].classList.remove('collapsed')
}

function generalClick(ev: MouseEvent) {
  const elem = ev.target
  if (!(elem instanceof HTMLElement))
    return

  if (elem.className === 'e') {
    // It's a click on an expander.

    ev.preventDefault()

    const parent = elem.parentNode
    assert(parent instanceof HTMLElement)

    // Expand or collapse
    if (parent.classList.contains('collapsed')) {
      // EXPAND
      if (ev.metaKey || ev.ctrlKey) {
        const gp = parent.parentNode
        assert(gp instanceof HTMLElement)
        expand(gp.children)
      }
      else { expand([parent]) }
    }
    else {
      // COLLAPSE
      if (ev.metaKey || ev.ctrlKey) {
        const gp = parent.parentNode
        assert(gp instanceof HTMLElement)
        collapse(gp.children)
      }
      else { collapse([parent]) }
    }
  }
}

onMounted(() => {
  // Attach document-wide listener
  document.addEventListener('mousedown', generalClick)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', generalClick)
})
</script>

<template>
  <div id="jsonViewerParsed" class="json-viewer" v-html="html" />
</template>
