//每个vue有三个东西组成
// template  script  css  

// 需要有一个父级div
<template>
    <div id ="login">
        <div class="loginWrap">
            <ul class="munTab">
               <li  v-for="item in menuTab" :key="item.id" :class={current:item.active} @click="changeCurrent(item)">{{item.content}}</li>
            </ul>
            
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">
                    <label for="pass" class="label">邮箱</label>
                    <el-form-item  prop="pass" >
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    
                    <el-form-item label="密码" prop="checkPass" class="label">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    
                    <el-form-item label="验证码" prop="age">
                        <el-input v-model.number="ruleForm.age"></el-input>
                    </el-form-item>
                    
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')" class="block">提交</el-button>
                        <el-button  @click="resetForm('ruleForm')" class="block">重置</el-button>
                    </el-form-item>
                </el-form>
        </div>
        
    </div>
</template>

<script>
// 脚本要export出去，才能被主体看见
export default {
    
    name:"login",
    data(){

        var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };


        return{
            menuTab:[
                {content:"登陆", active:true  ,showIt:1},
                {content:"注册", active:false ,showIt:1},
            ],

            ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },

        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
    }
},
    methods:{
        changeCurrent(e){ //传进来的是即将要改变的变量 
            this.menuTab.forEach(element => {  //this 这个是将本对象中的属性全都改为false。   es6 的写法
              element.active = false;
            //   console.log(element);   //这个打印的是最终的形态，  有两个元素，就循环4次，并把最后一次完整的循环打印到log上去
            });

            /*    //这个是es5的写法
            for(let i = 0; i < this.menuTab.length;i++)
            {
               this.menuTab[i].active = false;
            }
            */
             e.active = true;   //这个e是传进来的即将要改变的元素
            //  console.log(e);
        },
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
      }
    }

}
</script>

//这个scoped的意思是样式只在这个文件生效
<style  lang="scss" scoped>
.loginWrap{
  width: 329px;
  margin: 88px auto;
}
.munTab{
     text-align: center;  //让文字居中
    //  background-color: #ff1;
    li{
         display: inline-block;
         width: 88px;
         line-height: 36px;
         color:azure;
         text-align: center;
         border-radius: 20px;
         cursor: pointer;
     }
     .current{
          background-color: rgba(0,0,0,.1);
     }
}
.block{
    width:50%;
}


</style>