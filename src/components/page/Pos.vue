<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="pos-order" id="order-list">
        <el-tabs>
          <!--点餐-->
          <el-tab-pane label="点餐">
             <el-table :data= 'tableData'   style="width:100%;">
               <el-table-column prop="goodsName" label="商品名称"></el-table-column>
               <el-table-column prop="count" label="数量" width="70"></el-table-column>
               <el-table-column prop="price" label="金额" width="70"></el-table-column>
               <el-table-column  label="操作" width="100" fixed="right">
                 <template scope="scope">
                    <el-button type="text" size="small" @click="reduceOrderList( scope.row )">删除</el-button>
                    <el-button type="text" size="small" @click="addOrderList( scope.row )">增加</el-button>
                 </template>
               </el-table-column>
             </el-table>
             <div>
                 总数：{{totalCount}}   总价：{{totalMoney}} 元
             </div>
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
                <li v-for="item  of oftenGoods" :key="item.id" @click="addOrderList(item)">
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
                          <li v-for=" list in type0Goods" :key="list.id" @click="addOrderList(list)">
                              <span class="foodImg"><img :src="list.goodsImg" width="100%"></span>
                              <span class="foodName">{{list.goodsName}}</span>
                              <span class="foodPrice">￥{{list.price}}元</span>
                          </li>
                      </ul>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="小食">
                  <div>
                      <ul class='cookList'>
                          <li v-for=" list in type0Goods1" :key="list.id" @click="addOrderList(list)">
                              <span class="foodImg"><img :src="list.goodsImg" width="100%"></span>
                              <span class="foodName">{{list.goodsName}}</span>
                              <span class="foodPrice">￥{{list.price}}元</span>
                          </li>
                      </ul>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="饮料">
                  <div>
                      <ul class='cookList'>
                          <li v-for=" list in type0Goods2" :key="list.id" @click="addOrderList(list)">
                              <span class="foodImg"><img :src="list.goodsImg" width="100%"></span>
                              <span class="foodName">{{list.goodsName}}</span>
                              <span class="foodPrice">￥{{list.price}}元</span>
                          </li>
                      </ul>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="套餐">
                  <div>
                      <ul class='cookList'>
                          <li v-for=" list in type0Goods3" :key="list.id" @click="addOrderList(list)">
                              <span class="foodImg"><img :src="list.goodsImg" width="100%"></span>
                              <span class="foodName">{{list.goodsName}}</span>
                              <span class="foodPrice">￥{{list.price}}元</span>
                          </li>
                      </ul>
                    </div>
                </el-tab-pane>
              </el-tabs>
          </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pos',
  data(){
    return{
        tableData: [],
        tableData1: [],
        oftenGoods:[],
        type0Goods:[],
        type0Goods1:[],
        type0Goods2:[],
        type0Goods3:[],
        totalMoney:0,
        totalCount:0
    }
  },
  //在虚拟dom加载完成之后
  mounted:function(){
    let orderHeight =  document.body.clientHeight;
    console.log(orderHeight);
    document.getElementById('order-list').style.height =orderHeight +'px';
  },
  created(){
      //获取常用商品
      axios.get('http://jspang.com/DemoApi/oftenGoods.php')
        .then(response => {
           // console.log( response );
            this.oftenGoods = response.data
        })
        .catch(error =>{
            console.log( error )
            alert('网路错误，不能访问')
        })
       //分类商品数据
       axios.get('http://jspang.com/DemoApi/typeGoods.php')
        .then(response => {
           // console.log( response );
            this.type0Goods = response.data[0]
             this.type0Goods1 = response.data[1]
              this.type0Goods2 = response.data[2]
               this.type0Goods3 = response.data[3]
        })
        .catch(error =>{
            console.log( error )
            alert('网路错误，不能访问')
        })
  },
  methods:{
      addOrderList(goods){

          this.totalMoney =0;
          this.totalCount =0;
            //商品是否已经存在于订单列表中
            let isHave = false;
            for(let i =0; i< this.tableData.length;i++ ){
                if(this.tableData[i].goodsId == goods.goodsId ){
                    isHave = true;
                }
            }
            //根据判断的值编写业务逻辑
            if(isHave){
               let arr = this.tableData.filter( ele =>
                   //过滤条件，返回
                   ele.goodsId == goods.goodsId
               )
               arr[0].count++;
            }else{
                //在这里面添加
                //let newGoods = Object.assign(goods,{count:1})
                 let newGoods = {
                     goodsId:goods.goodsId,
                     goodsName:goods.goodsName,
                     price:goods.price,
                     count:1
                }
                this.tableData.push(newGoods)

                //this.$set(this.tableData,newGoods)
                 
                console.log(this.tableData)
            }
            //计算汇总价格和数量
            this.tableData.forEach((ele)=>{
                this.totalCount += ele.count;
                this.totalMoney = this.totalMoney + ( ele.price * ele.count )
            });


      },
      //删除商品
      reduceOrderList(goods){
         this.tableData = this.tableData.filter( any => any.goodsId != goods.goodsId )
      }
  },
  
  watch:{
     tableData:{
        handler(a,b){
            this.tableData= a;
           console.log(a ,b)
        },
        deep:true
      },
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
       font-size: 14px;
   }
   .cookList li span{
       
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 14px;
       padding-left: 10px;
       color:brown;
 
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
</style>
