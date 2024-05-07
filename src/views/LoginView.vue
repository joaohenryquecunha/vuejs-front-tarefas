<template>
  <div class="login">
    <div class="container">
      <div class="box-login-text">
        <h1 class="emotion">🤘</h1>
        <p class="login-text-paragraph">A fortuna fica ao lado daquele que ousa.</p>
        <span class="login-text-span">Todo progresso ocorre fora da zona de conforto.</span>
        <div class="box-login-inferior">
          <div class="box-left">
            <div class="left-mini-box">
              <div class="box-contraste"></div>
            </div>
          </div>
          <div class="box-right">
            <div class="box-icon"></div>
            <div class="box-icon1"></div>
          </div>
        </div>
      </div>
      <div class="box-inputs">
        <form @submit.prevent="login">
          <h1>Login</h1>
          <label for="email">Endereço de e-mail</label>
          <input type="email" id="email" placeholder="email@email.com.br" v-model="email" required>

          <label for="password">Senha de acesso</label>
          <input type="password" id="password" placeholder="********" v-model="password" required>
          <div class="botao-submit">
            <p @click="redirectToCadastro" class="link">Não tenho conta</p>
            <button type="submit">Acessar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- <button @click="getProducts" style="background-color: red; width: 200px; height: 50px; color: aliceblue;" >CLICK</button>
    <div style="display: grid; width: 500px;">
      <label for="">nome do produto</label>
      <input type="text" v-model="productName">
      <label for="">valor do produto</label>
      <input type="value" v-model="productValue">

    </div>
    <button @click="createProducts" style="background-color: red; width: 200px; height: 50px; color: aliceblue;" >CRIAR</button>
    <div v-for="product in products"
    class="product-box" 
    :key="product.id" 
    @click="selectedProducts = product" 
    :class="selectedProducts.id === product.id ? 'selected-box' : ''">
     <h3>{{ product.name }}</h3> 
     <p>{{ product.amount }}</p>
    </div> -->
</template>

<script>
export default {
  name: 'LoginView',

  data() {
    return {
      route: this.$route,
      email: '',
      password: '',

    }
  },

  mounted() {
    this.$axios.baseURL;
    console.log(this.$route.params.id);
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post('login', {
          email: this.email,
          password: this.password
        });

        if (response.data.access_token) {
          const accessToken = response.data.access_token;
          sessionStorage.setItem('token', accessToken);
          console.log('Login bem-sucedido', response);
          this.$router.push('/');
        }


      } catch (error) {
        console.error('Erro ao efetuar login:', error);
      }
    },

    async redirectToCadastro() {
      const container = document.querySelector('.container');
      container.style.opacity = 0;
      await new Promise(resolve => setTimeout(resolve, 500));
      this.$router.push('/cadastro');
      await this.$nextTick();
      container.style.transition = 'opacity 1s';
      container.style.opacity = 1;
    }


    // getProducts() {
    //   this.$axios.get('/tarefas')
    //   .then((response) => {
    //     this.tarefas = response.data.data
    //     console.log(this.tarefas);
    //   }).catch((error) => {
    //     console.log(error);
    //   })       
    // },
    // createProducts() {
    //   let data = {
    //     name:this.productName,
    //     amount:this.productValue
    //   }
    //   axios.post('/product',data)
    //   .then((response) => {
    //     console.log(response);
    //   }).catch((error) => {
    //     console.log(error);
    //   }) 
    // }
  },

}

</script>

<style lang="scss" scoped>
.container {
  padding: 30px;
  display: flex;
  position: relative;
  width: 1280px;
  height: 657px;
  top: 150px;
  transition: opacity 0.5s;
  opacity: 1;
  background: #ffffff;
}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-login-text {
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #F7F7F7;
  width: 50%;

  p {
    position: relative;
    top: 50px;
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    text-align: left;
  }

  span {
    position: relative;
    bottom: 40px;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

  }
}

.box-login-text:hover {
  background: #000000;

  .box-right {
    background: #ffffff !important;
  }

  .box-icon {
    background: #000000 !important;

  }

  .box-icon1 {
    background: #9e9898 !important;
  }

  .box-left {
    background: linear-gradient(270deg, rgba(255, 255, 255, 0) -10.29%, rgba(255, 255, 255, 0.195) 23.09%, rgba(255, 255, 255, 0) 82.38%);
  }

  .emotion {
    position: relative;
    top: 35px;
  }

  p {
    color: #ffffff !important;
  }

  span {
    color: #ffffff !important;

  }
}

.box-inputs {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: grid;
    width: 80%;
    gap: 10px;

    h1 {
      font-size: 27px;
      font-weight: 800;
      line-height: 48.6px;
      text-align: left;

    }

    label {
      font-size: 18px;
      font-weight: 400;
      line-height: 28.8px;
      text-align: left;
      color: #000E1F;
    }

    input {
      height: 55px;
      border: solid 1px #E5E5E5;
      padding-left: 10px;
      font-size: 20px;
      font-weight: 200;
      line-height: 28.8px;

    }

    input[type="email"]::placeholder,
    input[type="password"]::placeholder {
      position: relative;
      left: 15px !important;
      font-size: 18px;
      font-weight: 100;
      color: #8C8A97;
    }

    .botao-submit {
      position: relative;
      top: 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        width: 170px;
        height: 55px;
        background: #000000;
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
        line-height: 28.8px;
        cursor: pointer;
      }

      .link {
        text-decoration: none;
        color: #81858E;
        font-size: 18px;
        font-weight: 400;
        line-height: 28.8px;
        cursor: pointer;
      }
    }
  }
}


.box-login-inferior {
  width: 235px;
  height: 100px;
  display: flex;
  justify-content: space-between;

  .box-right {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    transition: all 0.3s;

    .box-icon {
      position: relative;
      top: -5px;
      left: 15px;
      width: 35.52px;
      height: 35.52px;
      transform: rotate(45deg);
      background: #ffffff;
      z-index: 1;
    }

    .box-icon1 {
      position: relative;
      top: 12px;
      left: -20px;
      width: 35.52px;
      height: 35.52px;
      transform: rotate(45deg);
      background: #FFFFFF4D;
    }

  }

  .box-left {
    width: 100px;
    height: 100px;
    background: linear-gradient(270deg, rgba(0, 0, 0, 0) -10.29%, rgba(0, 0, 0, 0.19543) 23.09%, rgba(0, 0, 0, 0) 82.38%);
  }
}

.emotion {
  font-size: 50px;
  position: relative;
  top: 0;
  transition: top 0.5s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>