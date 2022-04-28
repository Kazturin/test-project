<template>
    <div class="flex items-center justify-center">
        <div class="w-full max-w-md">
            <form class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4" @submit="register">
                <!-- @csrf -->
                <div
                    class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
                >
                    Регистрация
                </div>
                <div v-if="errorMsg" class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded">
                    {{ errorMsg }}
                    <span @click="errorMsg=''">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </span>
                </div>
                <div class="mb-4">
                    <label
                        class="block text-gray-700 text-sm font-normal mb-2"
                        for="fullname"
                    >
                        ФИО
                    </label>
                    <input
                        id="fullname"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="name"
                        v-model="user.name"
                        type="text"
                        required
                        autofocus
                        placeholder="ФИО"
                    />
                </div>
                <div class="mb-4">
                    <label
                        class="block text-gray-700 text-sm font-normal mb-2"
                        for="email-address"
                    >
                        Email
                    </label>
                    <input
                        id="email-address"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="email"
                        v-model="user.email"
                        type="email"
                        required
                        autofocus
                        placeholder="Email"
                    />
                </div>
                <div class="mb-6">
                    <label
                        class="block text-gray-700 text-sm font-normal mb-2"
                        for="password"
                    >
                        Пароль
                    </label>
                    <input
                        id="password"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="user.password"
                        type="password"
                        placeholder="Пароль"
                        name="password"
                        required
                        autocomplete="current-password"
                    />
                </div>
                <div class="mb-6">
                    <label
                        class="block text-gray-700 text-sm font-normal mb-2"
                        for="password_confirmation"
                    >
                        Подтвердить пароль
                    </label>
                    <input
                        id="password_confirmation"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="user.password_confirmation"
                        type="password"
                        placeholder="Пароль"
                        name="password_confirmation"
                        required
                        autocomplete="current-password"
                    />
                </div>
                <div class="flex items-center justify-between">
                    <button class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Регистрация</button>
                    <!--                    <a-->
                    <!--                        class="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"-->
                    <!--                        href="#"-->
                    <!--                    >-->
                    <!--                        register-->
                    <!--                    </a>-->

                    <router-link :to="{name: 'Login'}" class="px-4 py-2 text-sky-300">у меня есть аккаунт</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import store from "../store";
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();
let errorMsg=ref('');
const user = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
}

function register(ev){
    ev.preventDefault();
    store
        .dispatch('register',user)
        .then(()=>{
            router.push({name: 'Home'})
        }).catch(err => {
        errorMsg.value = err.response.data.message
    })

}

</script>

<style scoped>

</style>
