import {createStore} from "vuex";
import axiosClient from "../axios";

const store = createStore(
    {
        state: {
            user: {
                data: {},
                contacts: [],
                token: sessionStorage.getItem('TOKEN'),
            },
            users:{}
        },
        getters: {},
        actions: {
            register({commit},user){
                return axiosClient.post('/register', user)
                .then(({data})=>{
                    commit('setUser',data);
                    return data;
                })
            },
            login({commit},user){
                return axiosClient.post('/login', user)
                .then(({data})=>{
                    commit('setUser',data);
                    return data;
                })
            },
            logout({commit}){
                return axiosClient.post('/logout')
                .then(response=>{
                    commit('logout');
                    return response;
                })
            },
            getUsers({commit}){
                return axiosClient.get('/users')
                  .then(response=>{
                    commit('setUsers',response.data);
                  })
            },
          subscribe({commit},{user_id,contact_id}){
              return axiosClient.post('/contact',{user_id:user_id,contact_id:contact_id}).then((res)=>{
                commit('pushContact',res.data);
                return res;
              })
          },
          getContacts({commit}){
            return axiosClient.get('/user/contacts')
                  .then(response=>{
                    commit('setContact',response.data);
                  })
          },
          unsubscribe({ dispatch },{user_id,contact_id}){
            return axiosClient.post('/contact/destroy',{user_id:user_id,contact_id:contact_id}).then((res)=>{
              if(res.data){
                dispatch('getContacts');
              }
              return res;

            })
        }
        },
      mutations: {
        logout: (state) => {
          state.user.data = {};
          state.user.token = null;
          sessionStorage.removeItem('TOKEN');
        },
        setUser: (state, userData) => {
          state.user.token = userData.token;
          state.user.data = userData.user;
          if (userData.contacts){
            state.user.contacts = userData.contacts;
          }
          sessionStorage.setItem('TOKEN', userData.token)
        },
        setUsers: (state, data) => {
          state.users = data;
        },
        pushContact: (state, data) => {
          if (state.user.contacts){
            state.user.contacts.push(data)
          }
          else{
            state.user.contacts= data
          }

        },
        setContact: (state,data) => {
          state.user.contacts= data
        },

      },
        modules: {}
    }
)

export default store;
