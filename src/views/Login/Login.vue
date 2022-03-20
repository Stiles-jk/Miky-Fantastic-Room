<script setup lang="ts">
import type { FormInstance } from "element-plus";
import { ref, reactive } from "vue";
import router from "../../router";

const obj = reactive({ id: "login" });

const ruleFormRef = ref<FormInstance>();

const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (ruleForm.password !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};

const validateUsername = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("用户名不正确"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  username: "",
  password: "",
});

const rules = reactive({
  password: [{ validator: validatePassword, trigger: "blur" }],
  username: [{ validator: validateUsername, trigger: "blur" }],
});

const submitLoginForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
      router.push("/user");
    } else {
      console.log("error submit!");
      router.push("/login");
      return false;
    }
  });
};

const submitRegisterForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<template>
  <div class="box">
    <el-card shadow="Hover" class="login-card">
      <template #header>
        <div class="login-header">
          <span> Let us Chat </span>
        </div>
      </template>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="Username" prop="username">
          <el-input
            v-model="ruleForm.username"
            type="text"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitRegisterForm(ruleFormRef)"
            >注册</el-button
          >
          <el-button @click="submitLoginForm(ruleFormRef)">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped>
.login-card {
  width: 480px;
}
.box {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.login-header {
  margin: auto;
}
</style>
