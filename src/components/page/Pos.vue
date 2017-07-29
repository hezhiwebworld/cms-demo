<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="pos-order" id="order-list">
        <el-tabs>
          <!--点餐-->
          <el-tab-pane label="点餐">
             <el-table :data= 'tableData'   style="width:100%;">
               <el-table-column  label="商品名称"></el-table-column>
               <el-table-column  label="数量" width="70"></el-table-column>
               <el-table-column  label="金额" width="70"></el-table-column>
               <el-table-column  label="操作" width="100" fixed="right">
                 <template scope="scope">
                    <el-button type="text" size="small">删除</el-button>
                    <el-button type="text" size="small">增加</el-button>
                 </template>
               </el-table-column>
             </el-table>

             <div class="btn">
               <el-button type="warning">挂单</el-button>
               <el-button type="danger">删除</el-button>
               <el-button type="success">结账</el-button>
             </div>
          </el-tab-pane>
          <!--挂单-->
          <el-tab-pane label="挂单">

          </el-tab-pane>
          <!--外卖-->
          <el-tab-pane label="外卖">

          </el-tab-pane>
        </el-tabs>
      </el-col>
       <el-col :span='14' >
          <div class="goods">
            <div class="title">常用商品</div>
            <div class="goods-list">
              <ul>
                <li v-for="item  of oftenGoods" :key="item.id">
                  <span>{{item.goodsName}}</span>
                  <span class="o-price">￥{{item.price}}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="goods-type">
              <el-tabs>
                <el-tab-pane label="汉堡">
                    <div>
                      <ul class='cookList'>
                          <li v-for=" list in type0Goods" :key="list.id">
                              <span class="foodImg"><img :src="list.goodsImg" width="100%"></span>
                              <span class="foodName">{{list.goodsName}}</span>
                              <span class="foodPrice">￥{{list.price}}元</span>
                          </li>
                      </ul>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="小食">
                  小食
                </el-tab-pane>
                <el-tab-pane label="饮料">
                  饮料
                </el-tab-pane>
                <el-tab-pane label="套餐">
                  套餐
                </el-tab-pane>
              </el-tabs>
          </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'pos',
  data(){
    return{
      tableData: [{
          
          goodsName: '可口可乐',
          price: 8,
          count:1
        }, {
          
          goodsName: '香辣鸡腿堡',
          price: 15,
          count:1
        }, {
         
          goodsName: '爱心薯条',
          price: 8,
          count:1
        }, {
         
          goodsName: '甜筒',
          price: 8,
          count:1
        }],
     oftenGoods:[
          {
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
              goodsName:'香脆鸡柳',
              price:17
          }
          
      ],
      type0Goods:[
          {
              goodsId:1,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'香脆鸡柳',
              price:17
          }
          
      ],
    
  }
  },
  //在虚拟dom加载完成之后
  mounted:function(){
    let orderHeight =  document.body.clientHeight;
    console.log(orderHeight);
    document.getElementById('order-list').style.height =orderHeight +'px';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.pos{
  width: 95%;
}
*{
  padding: 0px;
  margin: 0px;
}
 .pos-order{
    background-color:#ffdddd; 
    border-right:1px solid black;
 }
.btn{
  margin-top:10px;
}

.title{
  height: 20px;
  border-bottom: 1px solid #ddd;
  background-color: #Ccc;
  padding: 10px;
}
li{
  list-style: none;
  float: left;
  padding: 10px 10px;
  background-color: darkgoldenrod;
  margin: 10px ;
}
.goods-type{
    clear: both;
}
.cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
 
   }
   .cookList li span{
       
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
 
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
</style>
