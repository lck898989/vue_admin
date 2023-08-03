<template>
  <div class="dashboard-editor-container">
    <div class="app-income-container">
      <div class="left-container">
        <ul>
          <li v-for="item in leftList" :key="item.text" @click="clickListItem(item.text)">
            <i :class="item.icon" style="color: blue;" />
            <span style="padding: 5px;">{{ item.text }}</span>
          </li>
        </ul>
      </div>
      <div class="right-container">
        <transition name="slide-right" mode="in-out">
          <template v-if="isRegister">
            <AssetsRegister />
          </template>
          <template v-else>
            <AssetsConfig />
          </template>
        </transition>
      </div>

    </div>
    <!-- <el-row :gutter="20" class="row-container">
      <el-col :span="10" class="left-container">

      </el-col>
      <el-col :span="10" class="right-container">

      </el-col>
    </el-row> -->

  </div>
</template>

<script>
import AssetsRegister from '@/views/assets-income/assets-register/index.vue'
import AssetsConfig from '@/views/assets-income/assets-config/index.vue'

export default {
  name: 'DashboardAdmin',
  components: {
    AssetsRegister,
    AssetsConfig
  },
  data() {
    return {
      leftList: [
        {
          text: '资产登记',
          icon: 'el-icon-message-solid'
        },
        {
          text: '资产配置',
          icon: 'el-icon-s-promotion'
        }
      ],
      /** 是否资产是登记页面 */
      isRegister: true

    }
  },
  methods: {
    clickListItem(item) {
      console.warn('点击l列表项', item)
      switch (item) {
        case '资产登记':
          this.isRegister = true
          break
        case '资产配置':
          this.isRegister = false
          break
      }
    }
  }
}
</script>

  <style lang="scss" scoped>

// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
// }
.fade-enter, .fade-leave-to {
  opacity: 0;
  transition: opacity 0.5s;
}

.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(100%);
  transition: transform 0.5s;
}

// .slide-right-enter-active,
// .slide-right-leave-active {
//   transition: transform 0.5s;
// }

// .fade-enter {
//   opacity: 0;
// }

// .fade-enter-to {
//   opacity: 1;
//   transition: opacity .3s;
// }

// .fade-leave {
//   opacity: 1;
// }

// .fade-leave-to {
//   opacity: 0;
//   transition: opacity .3s;
// }

  .app-income-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: nowrap;
  }

  .common-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }

  .appItem{
    padding: 10px;
    width: 148px;
    height: 148px;
  }

  .appItem:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }

  .common-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }

  .dashboard-editor-container {
    padding: 5px 10px;
    background-color: rgb(240, 242, 245);
    position: relative;
    min-height: 100vh;

    .row-container {
      width: 100%;
      height: 100vh;

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: nowrap;

    }
    .left-container {
      min-width: 8vw;
      min-height: 100vh;
      background-color: #fff;
      padding: 10px;

      border-radius: 10px;

      .left-item {
        padding: 10px;
      }

      .left-item:hover {
        background-color: rgba($color: #60858f, $alpha: 0.5);
        cursor: pointer;
      }
    }
    .right-container {
      width: 100%;
      margin-left: 1vw;
      border-radius: 10px;
      background-color: #fff;

      padding: 10px;

      .top {
        justify-content: space-between;
      }
      .bottom{
        padding: 20px;
      }

    }

  }

  ul {
    padding-inline-start: 0px;
  }

  li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
      list-style-type: none;

    }

  @media (max-width:1024px) {
    .chart-wrapper {
      padding: 8px;
    }
  }
  </style>
