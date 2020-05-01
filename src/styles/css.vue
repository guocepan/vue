<template>
  <div id="learnCss">
    <div>
      <p class="mainBody">{{ message }}</p>
    </div>
    <div class="learnContent">
      <ul>
        <li>color</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "#learnCss",
  data() {
    return {
      message: "这个地方拿来学习css"
    };
  }
};
</script>
<style lang="scss" scoped>
.mainBody {
  width: 329px;
  margin: auto;
  text-align: center;
  color: gold;
  background-color: red;
  border-radius: 20px;
  cursor: pointer;
}
.learnContent {
  ul {
    width: 0px;
    margin: auto;
    background-color: green;
  }
}
</style>
