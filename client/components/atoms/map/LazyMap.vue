<template>
  <div
    :class="{
      'max-width-480': width === 480,
      'max-width-640': width === 640
    }"
  >
    <client-only>
      <l-map
        ref="map"
        :center="center"
        :zoom="zoom"
        :style="`height: ${width === 480 ? '320' : '360'}px;`"
      >
        <l-tile-layer :url="url" />

        <l-marker :lat-lng="center" />
      </l-map>
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

type Props = {
  latitude: number,
  longitude: number,
  width: 480|640
}

export default defineComponent({
  props: {
    latitude: {
      type: Number,
      default: 36.561118
    },

    longitude: {
      type: Number,
      default: 139.882723
    },

    width: {
      type: Number,
      default: 480
    }
  },

  setup (props) {
    return {
      url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 15,
      center: [props.latitude, props.longitude]
    }
  }
})
</script>
