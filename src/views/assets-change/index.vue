<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="20" class="row-container">
      <el-col :span="10" class="left-container">
        <ul>
          <li v-for="item in leftList" :key="item.text" @click="clickListItem(item.text)">
            <i :class="item.icon" style="color: blue;" />
            <span style="padding: 5px;">{{ item.text }}</span>
          </li>
        </ul>
      </el-col>
      <el-col :span="10" class="right-container">
        <!-- <template v-if="isRegister">
            <h1>资产登记</h1>
           </template>
          <template v-else>
            <h1>资产管理</h1>
           </template> -->
      </el-col>
    </el-row>

  </div>
</template>

<script>

export default {
  name: 'DashboardAdmin',
  components: {

  },
  data() {
    return {
      leftList: [
        {
          text: '资产调拨',
          icon: 'el-icon-message-solid'
        },
        {
          text: '资产减值',
          icon: 'el-icon-s-promotion'
        },
        {
          text: '闲置调剂',
          icon: 'el-icon-s-promotion'
        },
        {
          text: '资产退库',
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
    }
  }
}
</script>

  <style lang="scss" scoped>

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
    padding: 30px;
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
      width: 15vw;
      height: 200px;
      background-color: #fff;
      padding: 20px;

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
      height: 500px;
      background-color: #fff;
      margin-left: 1vw;

      padding: 20px;

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
