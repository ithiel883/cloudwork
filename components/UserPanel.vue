<template>
  <div class="w-fit">
    <div class="title w-fit h-[40px] py-[25px] flex justify-center items-center">
      <div class="flex mx-12 cursor-pointer" @click="handleShowUsers">
        <div class="mr-3 text-white w-[20px] h-[20px] flex items-center justify-center border-white rounded-full border">
          <span class="material-symbols-outlined text-sm ml-[6px]">
            arrow_back_ios
          </span>
        </div>
        <span class="text-white text-lg">Members</span>
      </div>
    </div>
    <div class="flex w-full bg-red-500 justify-center">
      <span class="text-gray-500">Team leader</span>
      <div class="bg-gray-50 h-fit w-fit py-1 px-2 border border-gray-50 rounded-full">
        <span class="text-white">1</span>
      </div>
    </div>
    <div />
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data () {
    return {
      showUsers: false
    }
  },
  methods: {
    handleShowUsers () {
      this.showUsers = !this.showUsers
    }
  }
}
</script>

<style scoped>
.title {
  background: #7fb5ff;
}
.title:hover {
  background: #72aeff;
}
</style>
