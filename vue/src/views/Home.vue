<template>
  <PageComponent title="Главная страница">
    <div class="flex items-center">
      <svg class="h-24 w-24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/>
        <circle cx="12" cy="8" fill="#464646" r="4"/>
        <path d="M20,19v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V19a6,6,0,0,1,6-6h4A6,6,0,0,1,20,19Z" fill="#464646"/>
      </svg>
      <span class="text-3xl">
      </span>
    </div>
    <hr>
    <div class="my-6">
      <h1 class="text-3xl">Пользователи</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        <div v-for="item in users" :key="item.id" class="max-w-sm p-6 border mt-5">
          <div class="flex items-center">
            <svg class="h-24 w-24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/>
              <circle cx="12" cy="8" fill="#464646" r="4"/>
              <path d="M20,19v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V19a6,6,0,0,1,6-6h4A6,6,0,0,1,20,19Z" fill="#464646"/>
            </svg>
            <div class="flex flex-col">
              <span>{{item.name}}</span>
              <span>{{item.email}}</span>
              <div class="flex items-center">
                <span class="font-semibold">Дата регистрации: </span><span class="pl-2">{{formatDate(item.created_at)}}</span>
              </div>
            </div>
          </div>
          <div v-if="subscripted(item.id)">
                <button @click="unsubscribe(item.id)" class="w-full px-4 py-2 bg-red-400 hover:bg-red-500 text-white mt-2">Отписаться</button>
          </div>
          <div v-else>
          <button @click="subscribe(item.id)" class="w-full px-4 py-2 bg-emerald-400 hover:bg-emerald-500 text-white mt-2">Подписаться</button>
          </div>
        </div>
      </div>
    </div>

  </PageComponent>
</template>

<script>
import PageComponent from "../components/PageComponent.vue";
import {useStore} from 'vuex';
import {computed} from 'vue';

export default {
  components: {
    PageComponent
  },
  setup() {

    const store = useStore();
    store.dispatch('getUsers');
    const  user = computed(() => store.state.user.data);
    const  contacts = computed(() => store.state.user.contacts);

    function formatDate(date){
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
      return new Date(date).toLocaleDateString('en-US', options)
    }
    function subscribe(id){
      let data = {
        user_id: this.user.id,
        contact_id: id,
      }
      console.log(data);
      store.dispatch('subscribe',data);
    }
    function unsubscribe(id){
     let data = {
        user_id: this.user.id,
        contact_id: id,
      }
      store.dispatch('unsubscribe',data);
    }
    function subscripted(id){
      if (this.contacts){
        return this.contacts.find(function (element) {
          return element.id === id;
        });
      }
    }

    return {
      user: user,
      users: computed(() => store.state.users),
      formatDate,
      subscribe,
      unsubscribe,
      subscripted,
      contacts
    }
  },
}

</script>

<style scoped>

</style>
