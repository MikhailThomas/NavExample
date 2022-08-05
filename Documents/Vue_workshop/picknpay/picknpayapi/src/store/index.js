import { createStore } from 'vuex'

const picknpayUrl = "https://picknpayecomm.herokuapp.com/";
export default createStore({
  state: {
    products: null,
    
    slide: [
      {img: 'https://i.postimg.cc/N0ScRd7G/slide1.jpg'},
      {img: 'https://i.postimg.cc/DyPnRdF5/slide2.jpg'},
      {img: 'https://i.postimg.cc/wMcY8gK3/slide3.gif'}
    ]
  },
  getters: {
    getProducts: state => state.products
  },
  mutations: {
    setProducts(state, data) {
      state.products = data
    }
  },
  actions: {
    fetchProducts : async (content) => {
      let res = await fetch(picknpayUrl+"products");
      let {results} = await res.json()
      console.log(results);
      if(results) {
        content.commit('setProducts', results);
      }else {
        console.log("There is no data");
      }
    }
  },
  modules: {
  }
})
