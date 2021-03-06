<template>
  <div class="u-light-grey-background white-md-background">
    <v-container class="pb-2 border-md-t border-dark-gray">
      <div v-if="maxItem" class="text-right">
        <p class="mb-1 display-count">
          <span class="red--text">{{ state.shops.length }}件</span>表示中/全{{ maxItem }}件中
        </p>
      </div>

      <v-row class="px-1" :justify="justify">
        <template v-if="state.shops.length > 0">
          <template v-for="(shop, key) in state.shops">
            <v-col :key="key" cols="6" md="4" class="px-1 py-1 pb-sm-4">
              <InstaCard
                :alt="shop.name"
                :area="computedShopArea(shop.address)"
                :can-takeout="shop.canTakeout"
                :can-go-to-eat="shop.canGoToEat"
                :prefix-name="shop.prefixName"
                :name="shop.name"
                :to="`/shops/${shop.id}`"
                :src="shop.imageLink"
                :insta-number="shop.instaNumber"
                :price-range="shop.priceRange"
              />
            </v-col>

            <template v-if="[11, 35, 89].includes(key)">
              <v-col :key="`adsense_${key}`" cols="12">
                <adsbygoogle
                  ad-slot="6047159759"
                />
              </v-col>
            </template>
          </template>
        </template>

        <template v-else>
          <v-col class="d-flex justify-center align-center not-founds">
            <p class="mb-0 text-center">
              条件に見合うお店が見つかりませんでした。
            </p>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, SetupContext, watch } from '@nuxtjs/composition-api'
import { Area, Shop } from '@/lib'
import { computedShortShopAddress, getShopAreaByAddress } from '@/src/utils/Shop'

type Props = {
  areas: Area[]
  shops: Shop[],
  maxItem: number
}
export default defineComponent({
  props: {
    areas: {
      type: Array,
      default: () => []
    },

    shops: {
      type: Array,
      default: () => []
    },

    maxItem: {
      type: Number,
      default: 0
    },

    justify: {
      type: String,
      default: 'start'
    }
  },

  setup (props: Props, _: SetupContext) {
    const state = reactive({
      shops: props.shops
    })

    const shortAddress = computed(() => {
      return (address: Shop['address']) => computedShortShopAddress(address)
    })

    const computedShopArea = computed(() => {
      return (address: Shop['address']) => {
        if (props.areas) {
          const area = getShopAreaByAddress(address, props.areas)
          if (area) {
            return area.name
          }
        }

        if (address) {
          if (address.includes('宇都宮')) {
            return computedShortShopAddress(address)
          } else {
            return '宇都宮市外'
          }
        }

        return undefined
      }
    })

    watch(() => props.shops, (newVal, _) => {
      state.shops = newVal
    })

    return {
      computedShopArea,
      shortAddress,
      state
    }
  }
})
</script>

<style lang="scss" scoped>
.not-founds {
  height: 160px;
}

.display-count {
  font-size: 0.8rem;
}
</style>
