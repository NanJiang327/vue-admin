<template>
    <section>
        <div class="login-wrapper">
            <h4>Welcome to admin</h4>
            <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" class="demo-ruleForm">
                <el-form-item  prop="name">
                    <el-input type="text"
                        placeholder="用户名"
                        v-model="ruleForm.name" 
                        auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item  prop="pass">
                    <el-input 
                        type="password" 
                        placeholder="密码"
                        v-model="ruleForm.pass" 
                        auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary"
                        @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else if (value.length < 6) {
                callback(new Error('密码长度不少于6位'));
            } else {
                callback();
            }
        };
        var validateName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('用户名不能为空'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                pass: '123456',
                name: 'admin'
            },
            rules2: {
                pass: [{ validator: validatePass, trigger: 'blur' }],
                name: [{ validator: validateName, trigger: 'blur' }]
            }
        };
    },
    methods: {
        submitForm (formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.login({
                        username: this.ruleForm.name,
                        password: this.ruleForm.pass
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm (formName) {
            this.$refs[formName].resetFields();
        },
        async login (formData) {
            const data = await this.$http('post', '/api/login', formData);
            console.log(data);
            if (data.code === 200) {
                this.$message({
                    message: '登录成功!',
                    type: 'success'
                });

                sessionStorage.setItem('login', 200);
                this.$router.push('/')
            }
        }
    }
};
</script>

<style lang="scss" scoped>
section {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
}
.login-wrapper {
  width: 350px;
  height: 250px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 1px solid #ccc;
  padding: 20px;
}
.el-button{
    width: 100%;
}
</style>
