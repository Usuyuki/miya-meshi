<template>
  <v-card class="mt-4">
    <v-list two-line>
      <template v-for="(shop, idx) in state.shops">
        <v-list-item :key="shop.id" :to="`/shops/${shop.id}`">
          <v-list-item-avatar>
            <v-img v-if="shop.imageLink" :src="shop.imageLink" :alt="`${shop.name}`" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              <v-icon :color="shop.public ? 'success' : 'grey'">
                {{ shop.public ? 'mdi-check-circle' : 'mdi-alert-circle' }}
              </v-icon>

              <template v-if="shop.instaNumber">
                <v-badge
                  :content="shop.instaNumber"
                  color="grey"
                  inline
                  class="mt-0"
                >
                  <span>{{ shop.name }}</span>
                </v-badge>
              </template>
              <span v-else>{{ shop.name }}</span>
            </v-list-item-title>
            <v-list-item-subtitle v-if="shop.description" class="pl-4">
              {{ shop.description }}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon v-if="1 <= shop.priority && shop.priority <= 5" color="grey">
                {{ `mdi-numeric-${shop.priority}-circle` }}
              </v-icon>
              <v-icon v-else color="grey">
                mdi-numeric-1-circle
              </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-divider
          v-if="idx + 1 < state.shops.length"
          :key="idx"
        />
      </template>

      <template v-if="state.shops.length === 0">
        <div>
          <p class="mb-0 text-center pa-8">
            条件に見合うお店が見つかりませんでした。
          </p>

          <div class="d-flex justify-center">
            <v-btn to="/shops" color="primary">
              リセット
            </v-btn>
          </div>
        </div>
      </template>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive, SetupContext, watch } from '@vue/composition-api'
import { isShop } from '@/src/utils/Shop'
import { Shop } from '@/lib'

type Props = {
  shops: Shop[]
}

export default defineComponent({
  props: {
    shops: {
      type: Array,
      validator (arr: any[]): arr is Shop[] {
        return arr.every(v => isShop(v))
      }
    }
  },

  setup (props: Props, context: SetupContext) {
    const state = reactive({
      shops: props.shops as Shop[]
    })

    watch(() => props.shops, (newVal, _) => {
      state.shops = newVal
    })

    return {
      state
    }
  }
})
</script>
