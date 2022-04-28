<template>
    <!-- follow me on twitter @asad_codes -->

    <div class="flex flex-wrap">
        <header class="relative mx-auto">
            <!-- navbar -->
            <nav class="px-5 xl:px-12 py-6 bg-gray-900 text-white w-screen">
              <div class="container mx-auto flex justify-between">
                <div class="flex w-full items-center">
                  <a class="text-3xl font-bold font-heading" href="#">
                    <!-- <img class="h-9" src="logo.png" alt="logo"> -->
                    Logo
                  </a>
                </div>
                <div class="flex items-center">
                  <ul class="flex px-4 font-semibold font-heading">
                    <li v-for="item in navigation" :key="item.name" >
                      <!--                          <a class="hover:text-gray-200" href="#">Home</a>-->
                      <router-link
                        :to="item.to"
                        active-class="text-white"
                        :class="[this.$route.name===item.to.name ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-lg']"
                        :aria-current="item.current ? 'page' : undefined">
                        {{ item.name }}
                      </router-link>
                    </li>
                  </ul>
                  <div class="flex items-center items-center">
                    <a @click="logout" class="flex items-center text-gray-400" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13px" height="18px" viewBox="0 0 13 17" stroke="currentColor">
                        <g id="surface1">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M 9.625 9.5 L 5.847656 9.5 C 5.285156 9.480469 4.839844 9.039062 4.839844 8.5 C 4.839844 7.960938 5.285156 7.519531 5.847656 7.5 L 9.625 7.5 L 8.398438 6.191406 C 8.015625 5.78125 8.050781 5.15625 8.46875 4.785156 C 8.671875 4.609375 8.941406 4.515625 9.210938 4.53125 C 9.484375 4.542969 9.742188 4.660156 9.921875 4.855469 L 12.710938 7.832031 C 13.066406 8.21875 13.0625 8.796875 12.703125 9.179688 L 9.921875 12.144531 C 9.742188 12.339844 9.484375 12.457031 9.210938 12.472656 C 8.9375 12.484375 8.671875 12.390625 8.46875 12.214844 C 8.050781 11.84375 8.015625 11.21875 8.398438 10.808594 Z M 5.820312 0.0195312 C 6.386719 -0.0898438 6.9375 0.261719 7.050781 0.804688 C 7.164062 1.34375 6.796875 1.871094 6.230469 1.980469 L 5.742188 2.074219 C 3.378906 2.523438 2.113281 2.78125 2.113281 5.90625 L 2.113281 11.378906 C 2.113281 14.285156 3.460938 14.527344 5.699219 14.925781 L 6.222656 15.023438 C 6.789062 15.125 7.160156 15.648438 7.050781 16.1875 C 6.941406 16.730469 6.394531 17.085938 5.832031 16.980469 L 5.3125 16.886719 C 2.015625 16.296875 0.0234375 15.941406 0.0234375 11.378906 L 0.0234375 5.902344 C 0.0234375 1.140625 1.878906 0.769531 5.335938 0.113281 Z M 5.820312 0.0195312 "/>
                        </g>
                       </svg>
                    </a>
                  </div>
                </div>
              </div>
            </nav>

        </header>
      <main class="container mx-auto">
        <router-view></router-view>
      </main>
    </div>
</template>

<script>
import {useStore} from 'vuex';
import {computed} from 'vue';
import {useRouter} from 'vue-router'

const navigation = [
  { name: 'Главная', to:{name: 'Home'}},
  { name: 'Контакты', to: {name: 'Contacts'}},
];

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    function logout(){
      store.dispatch('logout')
        .then(() => {
          router.push({name: 'Login'});
        });
    }
    return {
      user: computed(() => store.state.user.data),
      navigation,
      logout
    }
  },
}
</script>
