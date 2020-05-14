//每个vue有三个东西组成 // template script css // 需要有一个父级div
<template>
  <div id="login">
    <div class="loginWrap">
      <ul class="munTab">
        <li
          v-for="item in menuTab"
          :key="item.id"
          :class="{ current: item.active }"
          @click="changeCurrent(item)"
        >
          {{ item.content }}
        </li>
      </ul>

      <el-form
        :model="ruleForm"
        status-ico
        :rules="rules1"
        ref="ruleForm"
        size="medium"
      >
        <el-form-item prop="user" class="wordMargin top">
          <label for="idpass">邮箱</label>
          <el-input
            type="text"
            id="idpass"
            v-model="ruleForm.user"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- 密码最小6最大20 -->
        <el-form-item prop="checkPass" class="wordMargin">
          <label for="passwordId"> 密码</label>
          <el-input
            type="text"
            id="passwordId"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>
       <!-- 重复密码 -->
        <el-form-item prop="checkPassS" class="wordMargin" v-show="mode == 'register'">
          <label for="passwordId"> 重复密码</label>
          <el-input
            type="text"
            id="passwordId"
            v-model="ruleForm.checkPassS"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>
        

        <el-form-item prop="code" class="wordMargin">
          <label for="codeId"> 验证码</label>
          <el-row :gutter="11">
            <el-col :span="15"
              ><el-input
                id="codeId"
                v-model.number="ruleForm.code"
                minlength="6"
                maxlength="6"
              ></el-input
            ></el-col>
            <!-- 按钮是内行元素，需要转成块元素，让他铺满整行。 -->
            <el-col :span="9">
              <el-button type="danger" size="medium" class="block"
                >发送验证码</el-button
              ></el-col
            >
          </el-row>
          <!-- <el-input id="codeId" v-model.number="ruleForm.code"></el-input> -->
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            class="block top"
            >提交</el-button
          >
          <el-form-item> </el-form-item>
          <el-button @click="resetForm('ruleForm')" class="block"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 引入在别的文件定义的方法
import { stripscript ,valieNumLen,valeUsr,valiecode} from "@/utiles/validate.js";

// 脚本要export出去，才能被主体看见
export default {
  name: "login",
  data() {
    

    // 验证邮箱
    var validateUser = (rule, value, callback) => {
      
      // 验证邮箱的正则表达式

      let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (valeUsr(value)) {
        callback(new Error("输入的邮箱格式有误"));
      } else {
        
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      //这个地方要验证的是密码。那么进来的就是改掉密码中不和规范的。
      //  ?!\D 非0-9   +至少一个   ?![^a-zA-Z] 非字母 + 至少一个 \S 非空字符 {6,20} 6-20位  总的说就是有字母和数字
      //过滤掉密码中不该有的字符，既然是要过滤掉，那么必定是要传回数据的。
      this.ruleForm.checkPass = stripscript(value);
      value = this.ruleForm.checkPass; //这个是处理完后的，拿回来才有用。
      // console.log(stripscript(value));
      // let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (valieNumLen(value)) {
        callback(new Error("6-20"));
      } else {
        callback();
      }
    }; 


//重复密码
    var validatePassS = (rule, value, callback) => {
      //v-show 处理
      if(this.mode == 'login')
      {
        callback(); //如果是login模式，直接通过。
      }
       
      //这个地方要验证的是密码。那么进来的就是改掉密码中不和规范的。
      //  ?!\D 非0-9   +至少一个   ?![^a-zA-Z] 非字母 + 至少一个 \S 非空字符 {6,20} 6-20位  总的说就是有字母和数字
      //过滤掉密码中不该有的字符，既然是要过滤掉，那么必定是要传回数据的。
      this.ruleForm.checkPassS = stripscript(value);
      value = this.ruleForm.checkPassS; //这个是处理完后的，拿回来才有用。
      // console.log(stripscript(value));
      // let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
      if (value === "") {
        callback(new Error("请重复密码"));
      } else if (value != this.ruleForm.checkPass ) { 
        callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
      
    };

    // const axios = require("axios");

    // // Make a request for a user with a given ID
    // axios
    //   .get("/user?ID=12345")
    //   .then(function(response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function() {
    //     // always executed
    //   });
      var checkCode = (rule, value, callback) => {
      // 验证邮箱，那么value传进来的就是邮箱的值
      // 也就是说，这个value传进来的就是data里面的值。直接改掉的方法为
      
      // 然后再放回来
      
      // let reg = /^[0-9a-zA-Z]{6}$/;
      if (!value) {
        return callback(new Error("验证码不能为空"));
      } else if (valiecode(value)) {
        return callback(new Error("验证码不和要求"));
      } else {
        callback();
      }
      //设置延迟，并且判断是不是数字
      // setTimeout(() => {
      //   if (!Number.isInteger(value)) {
      //     callback(new Error("请输入数字值"));
      //   } else {
      //     callback();
      //   }
      // }, 1000);
    };
    //所有的绑定的东西都在ruturn 里面
    return {
      menuTab: [
        { content: "登陆", active: true, type:'login' },
        { content: "注册", active: false, type:'register' }
      ],
      mode:'login',

      ruleForm: {
        user: "313391@qq.com",
        checkPass: "",
        code: "",
        checkPassS:""
      },

      rules1: {
        user: [{ validator: validateUser, trigger: "blur" }],
        checkPass: [{ validator: validatePass, trigger: "blur" }],
        checkPassS: [{ validator: validatePassS, trigger: "blur" }],

        code: [{ validator: checkCode, trigger: "blur" }]
      }
    };
  },

  methods: {
    changeCurrent(e) {
      //传进来的是即将要改变的变量
      this.menuTab.forEach(element => {
        //this 这个是将本对象中的属性全都改为false。   es6 的写法
        element.active = false;
        //   console.log(element);   //这个打印的是最终的形态，  有两个元素，就循环4次，并把最后一次完整的循环打印到log上去
      });

      /*    //这个是es5的写法
            for(let i = 0; i < this.menuTab.length;i++)
            {
               this.menuTab[i].active = false;
            }
            */
      e.active = true; //这个e是传进来的即将要改变的元素


      // if(e.type == 'register')
      // {
      //   alert(e.type);
      //   this.mode = 'register';
      // }else
      // {
       
      //   alert(e.type);

      //   this.mode = 'login';
      // }
      console.log(e);
      //这个比上面的好，自动添加了
      this.mode = e.type;

    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }

  //////////////////////////////////////////////////////////////
};
</script>

//这个scoped的意思是样式只在这个文件生效
<style lang="scss" scoped>
.loginWrap {
  width: 329px;
  margin: 88px auto;
}
.munTab {
  text-align: center; //让文字居中
  //  background-color: #ff1;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    color: azure;
    text-align: center;
    border-radius: 20px;
    cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
.block {
  width: 100%;
}

.wordMargin {
  display: block;
  margin-bottom: 3px;
}

.top {
  margin-top: 29px;
}
label {
  color: white;
}
</style>
