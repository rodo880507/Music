import { auth, usersCollection } from '@/includes/firebase';

export default {
  // namespaced: true,
  state: {
    email: '',
    authModalShow: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },
  },
  actions: {
    async register({ commit }, payload) {
      const userCred = await auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password,
      );
      await usersCollection.doc(userCred.user.uid).set({
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });

      userCred.user.updateProfile({
        displayName: payload.name,
      });
      commit('toggleAuth');
    },
    async login({ commit }, payload) {
      await auth.signInWithEmailAndPassword(payload.email, payload.password);
      this.state.auth.email = payload.email;
      // console.log(this.state.email);
      commit('toggleAuth');
    },
    init_login({ commit }) {
      const user = auth.currentUser;
      if (user) {
        commit('toggleAuth');
        this.state.auth.email = user.email;
      }
    },
    async signout({ commit }) {
      await auth.signOut();
      this.state.auth.email = '';
      commit('toggleAuth');
    },
  },
};
