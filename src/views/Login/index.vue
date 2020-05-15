<template>
<div id="login">
    <div class="loginWrap">
        <ul class="menuTab">
            <!-- 在li里放循环的位置影响了渲染，放在ul就有了两个ul》li   放li里面就直接两个li -->
            <li :class="{current:item.active}"  v-for="item in menutab" :key="item.id" @click="changeClolor(item)">{{item.text}}</li>
        </ul>

        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm" size="medium">

        <el-form-item  prop="username" class="jianju">
            <label for="">邮箱</label>
            <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item  prop="Pass" class="jianju">
            <label for="">密码</label>
            <el-input type="text" v-model="ruleForm.Pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item  prop="checkPass" class="jianju" v-if="mode == 'register'">
            <label for="">重复密码</label>
            <el-input type="text" v-model="ruleForm.checkPass" autocomplete="off" ></el-input>
        </el-form-item>

        <el-form-item  prop="code" class="jianju">
            <label for="">验证码</label>
            <el-row :gutter="20">
            <el-col :span="15"><el-input v-model.number="ruleForm.code"></el-input></el-col>
            <el-col :span="9"><el-button type="success">发送验证码</el-button></el-col>
            </el-row>
            
        </el-form-item>

        <el-form-item class="jianju">

            <el-button type="primary" @click="submitForm('ruleForm')" class = "block">提交</el-button>
        </el-form-item>
        <el-form-item class="jianju">
            <el-button @click="resetForm('ruleForm') " class = "block">重置</el-button>
        </el-form-item>
        </el-form>
        

    </div>

</div>
    
</template>
<script>
export default {
    name:"loginWrap",
    data(){
        var validateUsername = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请输入邮箱'));
                } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
                }
            };


        var checkCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
              callback();
            }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validateCheckPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.Pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
       return {
        menutab:[
            {text:"登陆",type:'login',active:true},
            {text:"注册",type:'register',active:false}
        ],
        mode:'login',
        ruleForm: {
          username: '313391883@qq.com',
          Pass: '111111',
          checkPass: '111111',
          code: 222222
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          Pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validateCheckPass, trigger: 'blur' }
          ],
          code: [
            { validator: checkCode, trigger: 'blur' }
          ]
        }
      };

      
    },
    //data end
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //修改背景颜色
    changeClolor(data)
    {
        let i = 0;
        for(i = 0; i <this.menutab.length;i++)
        {
            this.menutab[i].active =false;
            console.dir(this.menutab[i].active)
        }
        data.active = true;
        console.dir(data.active)
        this.mode = data.type;
    },
    
   
    }
    }
</script>
<style lang="scss" scoped>
.loginWrap{
    width: 329px;
    margin: auto;   //居中
    //  background-color:gold;
  
}
.menuTab{
    text-align: center;  //让文字居中
    li{
         display: inline-block;   //将块元素变成内行元素
        width: 88px;
        line-height: 36px;  //文字行高
        font-size: 14px;
        color: #fff;
        border-radius: 2px;   //li圆角度 
        cursor: pointer;  // 鼠标放上面变成手指
    }
    .current{  //被选中时背景加深透明
        background-color:green;
    }
}
.block{
    display: block;
    width: 100%;
}
.jianju{
    margin-bottom:13px ;
    margin-top:19px ;

}

</style>