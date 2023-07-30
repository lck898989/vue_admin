<template>
  <div class="dashboard-editor-container">
    <el-row :gutter = "20" class="row-container">
      <el-col :span = "10" class="left-container">
        <template v-for="item in leftList">
          <el-row :gutter="20" class="left-item">
            <el-col :span="2">
              <i :class="item.icon" style="color: blue;"></i>
            </el-col>
            <el-col :span="21">
              <span style="padding: 5px;">{{item.text}}</span>
            </el-col>
          </el-row>
        </template>
      </el-col>
      <el-col :span = "10" class="right-container">
        <div class="common-row top">
          <div class="leftTop"><span style="margin-right: 0.2vw;">我的应用</span><i class="el-icon-setting"></i></div>
          <div class="rightTop common-row">
            <el-input v-model="input" placeholder="请输入内容" prefix-icon="el-icon-search" style="margin-right: 0.2vw;"></el-input>
            <el-button type="primary" icon="el-icon-plus" round>新建应用</el-button>
          </div>
        </div>
        <div class="bottom common-row" style="flex-wrap: wrap;justify-content: flex-start;">
          <template v-for="appItem in apps">
            <div class="appItem">
              <el-col style="padding-top: 50px;">
                <div class="common-row">
                  <i class="el-icon-s-finance"></i>
                </div>
                <div class="common-row" style="margin-top: 15px;">
                  <span>{{appItem.text}}</span>
                </div>
              </el-col>
            </div>
          </template>
        </div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>

import {Row} from "element-ui";

export default {
  name: 'DashboardAdmin',
  components: {
    
  },
  data() {
    return {
      leftList: [ 
        {
        text: "我的待办",
        icon: "el-icon-message-solid"
      },
        {
        text: "我发起的",
        icon: "el-icon-s-promotion"
      },
        {
        text: "我处理的",
        icon: "el-icon-document-checked"
      },
        {
        text: "抄送我的",
        icon: "el-icon-alarm-clock"
      }],
      apps: [
        {
          text: "设备台账",
          icon: "",
        },
        {
          text: "设备维修",
          icon: "",
        },
        {
          text: "巡检点检",
          icon: "",
        },
        {
          text: "保养维修",
          icon: "",
        },
        {
          text: "库存管理",
          icon: "",
        },
        {
          text: "设备监测",
          icon: "",
        },
        {
          text: "能耗管理",
          icon: "",
        },
        {
          text: "仪器仪表管理",
          icon: "",
        },
        {
          text: "采购管理",
          icon: "",
        },
        {
          text: "租赁管理",
          icon: "",
        },
        {
          text: "资产管理",
          icon: "",
        },
        {
          text: "RFID出入监测",
          icon: "",
        }
      ],
      input: ""
    }
  },
  methods: {
   
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

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
