<template>
  <div class="wrapper overflow-auto" :class="wrapperClass">
    <div class="title sticky z-10 top-0 w-full h-[40px] py-[25px] flex justify-center items-center" @click="handleShowUsers">
      <div class="flex mx-12 items-center  cursor-pointer">
        <div class="mr-3 text-white w-[20px] h-[20px] border-2 flex items-center justify-center border-white rounded-full">
          <span v-if="showUsers" class="material-symbols-outlined font-medium text-sm ">
            arrow_forward_ios
          </span>
          <span v-else class="material-symbols-outlined font-medium text-sm ml-[6px]">
            arrow_back_ios
          </span>
        </div>
        <span class="text-white text-lg">Members</span>
      </div>
    </div>
    <div class="flex flex-col justify-center mt-[30px]">
      <div class="flex w-full justify-center">
        <span class="text-textSecondary text-[14px] font-medium mr-2">Team leader</span>
        <div class="bg-greyDark flex justify-center h-[20px] w-[20px] border border-greyDark rounded-full">
          <span class="text-white text-[13px]">{{ teamLeader.length }}</span>
        </div>
      </div>
      <div class=" flex w-full mt-[12px]">
        <div v-for="user in teamLeader" :key="user.id" class="flex w-full items-center" :class="userStyle">
          <div class="flex-col items-center flex" :class="{ 'ml-8': showUsers }">
            <div class="bg-greenDark relative left-[31px] top-[12px] border-greenDark h-4 w-4 rounded-full" />
            <img :src="user.image" class="w-[65px] h-[65px] border border-transparent rounded-2xl">
            <div class="bg-statusColor w-[90px] relative bottom-2 px-4 border-statusColor rounded-full">
              <span class="text-textSecondary text-[12px]">{{ user.status }}</span>
            </div>
          </div>
          <div v-if="showUsers" class="flex ml-7 justify-between w-full">
            <div class="flex flex-col">
              <div class="flex">
                <span class="text-black font-medium">{{ user.name }}</span>
                <div class="ml-3 px-[8px] border-textSecondary bg-white border rounded-full flex items-center justify-center">
                  <span class="text-[10px]">
                    {{ user.department }}
                  </span>
                </div>
              </div>
              <span>
                {{ user.location }}
              </span>
            </div>
            <div class="border border-textSecondary flex items-center justify-center rounded-lg p-3 mr-6">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC40IiBkPSJNOC4wMDM1NiAwQzMuNTg2MSAtMS43NDU1N2UtMDYgMC4wMDM5NDIyMyAzLjU3OTggMS41NTk4OGUtMDUgNy45OTgyN0MtMC4wMDI1MzQwMyA5LjI4NjY0IDAuMzA3NTA3IDEwLjU1NjQgMC45MDM1MjcgMTEuNjk4NUMwLjk2MDQ0MiAxMS44MDUzIDEuMDEwMjQgMTEuOTEyIDEuMDY3MTYgMTIuMDExNkMxLjE5NDc3IDEyLjI1NzYgMS4yMjAzMyAxMi41NDM5IDEuMTM4MyAxMi44MDg2QzAuOTEwMDQ4IDEzLjQxNzYgMC43MTk5NjYgMTQuMDQwMyAwLjU2OTE1NyAxNC42NzNDMC41NjkxNTcgMTQuOTg2MSAwLjY2MTY0MiAxNS4xNzExIDAuOTk2MDEzIDE1LjE3MTFDMS42MDM2NiAxNS4wMzQ3IDIuMjAyMzggMTQuODYxMyAyLjc4ODgxIDE0LjY1MTZDMy4wNDM2MSAxNC41ODUxIDMuMzEzMDcgMTQuNjAyNiAzLjU1NzE1IDE0LjcwMTRDMy43Nzc2OSAxNC44MTUzIDMuOTc2ODkgMTQuOTc5IDQuMTk3NDMgMTUuMDc4Nkg0LjI2ODU4QzYuNzQ4OSAxNi4zODQ0IDkuNzMxNDUgMTYuMjk3MyAxMi4xMzEzIDE0Ljg0ODlDMTQuNTMxMiAxMy40MDA1IDE1Ljk5ODcgMTAuODAxOCAxNiA3Ljk5ODI3QzE1Ljk5NjEgMy41ODI1NyAxMi40MTgyIDAuMDAzOTIzMzIgOC4wMDM1NiAwWiIgZmlsbD0iIzIxOTY1MyIvPgo8L3N2Zz4K">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center mt-[30px]">
      <hr class="bg-textSecondary mx-10 mb-8">
      <div class="flex w-full justify-center">
        <span class="text-textSecondary text-[14px] font-medium mr-2">Agent</span>
        <div class="bg-greyDark flex justify-center h-[20px] w-[20px] border border-greyDark rounded-full">
          <span class="text-white text-[13px]">{{ agents.length }}</span>
        </div>
      </div>
      <div class="flex flex-col w-full mt-[12px]">
        <div v-for="user in agents" :key="user.id" class="flex w-full items-center" :class="userStyle">
          <div class="flex-col items-center flex" :class="{ 'ml-8': showUsers }">
            <div class="bg-greenDark relative left-[31px] top-[12px] border-greenDark h-4 w-4 rounded-full" />
            <img v-if="user.image" :src="user.image" class="w-[65px] h-[65px] border border-transparent rounded-2xl">
            <div v-else class="w-[65px] h-[65px] border bg-orangeLight border-orangeLight rounded-2xl flex items-center justify-center">
              <span class="tracking-wide text-orangeDark text-4xl">
                {{ formatName(user.name) }}
              </span>
            </div>
            <div class="bg-statusColor w-[90px] relative bottom-2 px-4 border-statusColor rounded-full">
              <span class="text-textSecondary text-[12px]">{{ user.status }}</span>
            </div>
          </div>
          <div v-if="showUsers" class="flex ml-7 justify-between w-full">
            <div class="flex flex-col">
              <div class="flex">
                <span class="text-black font-medium">{{ user.name }}</span>
                <div class="ml-3 px-[8px] border-textSecondary bg-white border rounded-full flex items-center justify-center">
                  <span class="text-[10px]">
                    {{ user.department }}
                  </span>
                </div>
              </div>
              <span>
                {{ user.location }}
              </span>
            </div>
            <div class="border border-textSecondary flex items-center justify-center rounded-lg p-3 mr-6">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC40IiBkPSJNOC4wMDM1NiAwQzMuNTg2MSAtMS43NDU1N2UtMDYgMC4wMDM5NDIyMyAzLjU3OTggMS41NTk4OGUtMDUgNy45OTgyN0MtMC4wMDI1MzQwMyA5LjI4NjY0IDAuMzA3NTA3IDEwLjU1NjQgMC45MDM1MjcgMTEuNjk4NUMwLjk2MDQ0MiAxMS44MDUzIDEuMDEwMjQgMTEuOTEyIDEuMDY3MTYgMTIuMDExNkMxLjE5NDc3IDEyLjI1NzYgMS4yMjAzMyAxMi41NDM5IDEuMTM4MyAxMi44MDg2QzAuOTEwMDQ4IDEzLjQxNzYgMC43MTk5NjYgMTQuMDQwMyAwLjU2OTE1NyAxNC42NzNDMC41NjkxNTcgMTQuOTg2MSAwLjY2MTY0MiAxNS4xNzExIDAuOTk2MDEzIDE1LjE3MTFDMS42MDM2NiAxNS4wMzQ3IDIuMjAyMzggMTQuODYxMyAyLjc4ODgxIDE0LjY1MTZDMy4wNDM2MSAxNC41ODUxIDMuMzEzMDcgMTQuNjAyNiAzLjU1NzE1IDE0LjcwMTRDMy43Nzc2OSAxNC44MTUzIDMuOTc2ODkgMTQuOTc5IDQuMTk3NDMgMTUuMDc4Nkg0LjI2ODU4QzYuNzQ4OSAxNi4zODQ0IDkuNzMxNDUgMTYuMjk3MyAxMi4xMzEzIDE0Ljg0ODlDMTQuNTMxMiAxMy40MDA1IDE1Ljk5ODcgMTAuODAxOCAxNiA3Ljk5ODI3QzE1Ljk5NjEgMy41ODI1NyAxMi40MTgyIDAuMDAzOTIzMzIgOC4wMDM1NiAwWiIgZmlsbD0iIzIxOTY1MyIvPgo8L3N2Zz4K">
            </div>
          </div>
        </div>
      </div>
    </div>
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
  computed: {
    users () {
      return this.$store.state.value.users
    },
    wrapperClass () {
      return this.showUsers ? 'w-[400px]' : 'w-[240px]'
    },
    userStyle () {
      return this.showUsers ? '' : 'justify-center'
    },
    teamLeader () {
      return this.users.filter(user => user.role === 'Team Leader')
    },
    agents () {
      return this.users.filter(user => user.role === 'Agent')
    }
  },

  methods: {
    handleShowUsers () {
      this.showUsers = !this.showUsers
    },
    formatName (name) {
      return name.split(' ')[0].substring(0, 1) + '' + name.split(' ')[1].substring(0, 1)
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

.wrapper {
  font-family: 'Montserrat', sans-serif;
}

</style>
